import { SharedInjectable } from '../../shared';
import { FeedOptions } from '../../home/home.component';
import { MatDialogRef, MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'options-dialog',
	templateUrl: './options.dialog.html'
})
// tslint:disable-next-line:component-class-suffix
export class OptionsDialog implements OnInit {
	constructor(private dialogRef: MatDialogRef<OptionsDialog>, private shared: SharedInjectable, private dialog: MatDialog) { }
	// tslint:disable-next-line:member-ordering
	options: FeedOptions;
	// tslint:disable-next-line:member-ordering
	tempOptions: FeedOptions;
	cancel() {
		this.dialogRef.close();
	}
	save() {
		this.dialogRef.close();
		window.localStorage.setItem('feedOptions', JSON.stringify(this.options));
		const snackBarRef = this.shared.openSnackBarWithRef({ msg: 'Options saved', action: 'Undo' });
		snackBarRef.onAction().subscribe(() => {
			this.options = this.tempOptions;
			this.dialog.open(OptionsDialog);
		});
	}
	ngOnInit() {
		if (window.localStorage.getItem('feedOptions')) {
			this.options = <FeedOptions>JSON.parse(window.localStorage.getItem('feedOptions'));
			this.tempOptions = <FeedOptions>JSON.parse(window.localStorage.getItem('feedOptions'));
		} else {
			this.options = {
				amount: 20
			};
		}
	}
}
