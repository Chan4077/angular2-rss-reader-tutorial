(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{FwYu:function(l){l.exports=JSON.parse('{"$schema":"./release-notes-schema.json","latestVersion":"1.5.1","gitRepo":{"host":"https://github.com","repo":"rss-reader-web","username":"EdricChan03"},"releases":{"1.5.0":{"releaseNotes":{"summary":["- Removed settings that would not do anything","- Use labels instead of placeholders for input fields","- Added release notes that would inform you of the latest features","- Added tooltip to \\"more options\\" button in toolbar","- Slight tweaking of onboarding experience for new users","- And lots of bug-fixes!"],"details":["- Removed settings (_Enable multiple RSS feeds_, _Notifications_)","- Use `<mat-label>`s instead of the `placeholder` attribute for input fields. (This allows users to now see the labels of input fields even when an input is entered)","- Adds release notes (dialog and a dedicated page) for every release."]},"releaseDate":"Sat Aug 24 2019 20:24:00 GMT+0800 (Singapore Standard Time)","releaseAuthor":"EdricChan03"},"1.5.1":{"releaseNotes":["- Fixed broken release notes page (You should be able to see the release notes now! Yay!)","- Use UTC dates instead of localised time internally. (Yay UTC! Better than localised time zones - and that dreaded DST thingy..)","- [Internal] Added support for arrays as release notes. (Yes! Much better.)","- Added more jokes to the release notes. (Gotta spice up the release notes, ya know?)","- That\'s about it really. No really, that\'s it.","- Unless you want more release notes? Or you can check out the site\'s source code revision history if you really want to."],"releaseAuthor":"EdricChan03","releaseCommitSha":"7736e22","releaseDate":"2019-11-13T08:49:13+0000"},"1.5.2":{"releaseNotes":["- Quickfix to fix the broken guide pages - they should be working now.","- There are no other changes, unless you count the change to create a new release for this change. :think:"],"releaseAuthor":"EdricChan03","releaseCommitSha":"915137d","releaseDate":"2019-11-13T09:32:33+0000"}}}')},lzVA:function(l,n,e){"use strict";e.r(n);var u=e("kZht"),t=e("eEhu"),r=function(){},o=e("C9Ky"),s=e("4rR8"),a=e("ApNh"),i=e("An66"),b=e("i9Na"),c=e("1VvW"),f=e("FwYu"),p=e("AytR"),h=function(){function l(l){this.http=l}return Object.defineProperty(l.prototype,"releaseNotes",{get:function(){return f},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"versions",{get:function(){return Object.keys(this.releaseNotes.releases)},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"gitRepo",{get:function(){return this.createGitRepoUrl(this.releaseNotes.gitRepo?this.releaseNotes.gitRepo:p.a.gitRepoDefaults)},enumerable:!0,configurable:!0}),l.prototype.createGitRepoUrl=function(l){return"object"==typeof l?l.host+"/"+l.username+"/"+l.repo:l},l.prototype.getReleaseNote=function(l){return this.releaseNotes.releases[l].releaseNotes},l.prototype.getReleaseDate=function(l){return this.releaseNotes.releases[l].releaseDate},l.prototype.getReleaseAuthor=function(l){return this.releaseNotes.releases[l].releaseAuthor},l.prototype.getReleaseInfo=function(l){return this.releaseNotes.releases[l]},l.prototype.joinReleaseNotes=function(l){return l.join("\n")},l.prototype.isArray=function(l){return Array.isArray(l)},l.prototype.isUrl=function(l){return/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(l)},l.prototype.isStr=function(l){return"string"==typeof l},l.prototype.isObj=function(l){return"object"==typeof l},l.prototype.ngOnInit=function(){},l}(),d=e("6uGs"),g=u.qb({encapsulation:2,styles:[],data:{}});function m(l){return u.Ob(0,[(l()(),u.sb(0,0,null,null,1,"h1",[["id","release-notes"]],null,null,null,null,null)),(l()(),u.Mb(-1,null,["Release notes"]))],null,null)}function y(l){return u.Ob(0,[(l()(),u.sb(0,0,null,null,5,"mat-chip",[["class","mat-chip"],["color","primary"],["role","option"]],[[1,"tabindex",0],[2,"mat-chip-selected",null],[2,"mat-chip-with-avatar",null],[2,"mat-chip-with-trailing-icon",null],[2,"mat-chip-disabled",null],[1,"disabled",0],[1,"aria-disabled",0],[1,"aria-selected",0]],[[null,"click"],[null,"keydown"],[null,"focus"],[null,"blur"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u.Eb(l,1)._handleClick(e)&&t),"keydown"===n&&(t=!1!==u.Eb(l,1)._handleKeydown(e)&&t),"focus"===n&&(t=!1!==u.Eb(l,1).focus()&&t),"blur"===n&&(t=!1!==u.Eb(l,1)._blur()&&t),t}),null,null)),u.rb(1,147456,null,3,t.b,[u.k,u.y,s.a,[2,a.k]],{color:[0,"color"]},null),u.Kb(603979776,1,{avatar:0}),u.Kb(603979776,2,{trailingIcon:0}),u.Kb(603979776,3,{removeIcon:0}),(l()(),u.Mb(-1,null,["Latest"]))],(function(l,n){l(n,1,0,"primary")}),(function(l,n){l(n,0,0,u.Eb(n,1).disabled?null:-1,u.Eb(n,1).selected,u.Eb(n,1).avatar,u.Eb(n,1).trailingIcon||u.Eb(n,1).removeIcon,u.Eb(n,1).disabled,u.Eb(n,1).disabled||null,u.Eb(n,1).disabled.toString(),u.Eb(n,1).ariaSelected)}))}function I(l){return u.Ob(0,[(l()(),u.sb(0,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["Release date: "])),(l()(),u.sb(2,0,null,null,2,"em",[],null,null,null,null,null)),(l()(),u.Mb(3,null,["",""])),u.Ib(4,2)],null,(function(l,n){var e=n.component,t=u.Nb(n,3,0,l(n,4,0,u.Eb(n.parent.parent.parent,0),e.getReleaseDate(n.parent.context.$implicit),"long"));l(n,3,0,t)}))}function O(l){return u.Ob(0,[(l()(),u.sb(0,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["Released by: "])),(l()(),u.sb(2,0,null,null,1,"em",[],null,null,null,null,null)),(l()(),u.Mb(3,null,["",""]))],null,(function(l,n){l(n,3,0,n.component.getReleaseAuthor(n.parent.context.$implicit))}))}function C(l){return u.Ob(0,[(l()(),u.sb(0,0,null,null,5,null,null,null,null,null,null,null)),(l()(),u.sb(1,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["See this "])),(l()(),u.sb(3,0,null,null,1,"a",[],[[8,"href",4]],null,null,null,null)),(l()(),u.Mb(-1,null,["link"])),(l()(),u.Mb(-1,null,[" for the release notes."]))],null,(function(l,n){l(n,3,0,n.parent.context.ngIf)}))}function v(l){return u.Ob(0,[(l()(),u.sb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),u.sb(1,0,null,null,1,"p",[],[[8,"innerHTML",1]],null,null,null,null)),u.Ib(2,1)],null,(function(l,n){var e=n.component,t=u.Nb(n,1,0,l(n,2,0,u.Eb(n.parent.parent.parent.parent.parent,1),e.joinReleaseNotes(n.parent.parent.context.ngIf.summary)));l(n,1,0,t)}))}function w(l){return u.Ob(0,[(l()(),u.sb(0,0,null,null,5,null,null,null,null,null,null,null)),(l()(),u.sb(1,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["See this "])),(l()(),u.sb(3,0,null,null,1,"a",[],[[8,"href",4]],null,null,null,null)),(l()(),u.Mb(-1,null,["link"])),(l()(),u.Mb(-1,null,[" for more info."]))],null,(function(l,n){l(n,3,0,n.parent.parent.context.ngIf.summary)}))}function N(l){return u.Ob(0,[(l()(),u.sb(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),u.hb(16777216,null,null,1,null,v)),u.rb(2,16384,null,0,i.m,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.hb(16777216,null,null,1,null,w)),u.rb(4,16384,null,0,i.m,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.hb(0,null,null,0))],(function(l,n){var e=n.component;l(n,2,0,e.isArray(n.parent.context.ngIf.summary)),l(n,4,0,!e.isArray(n.parent.context.ngIf.summary)&&e.isUrl(n.parent.context.ngIf.summary))}),null)}function k(l){return u.Ob(0,[(l()(),u.sb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),u.sb(1,0,null,null,1,"p",[],[[8,"innerHTML",1]],null,null,null,null)),u.Ib(2,1)],null,(function(l,n){var e=n.component,t=u.Nb(n,1,0,l(n,2,0,u.Eb(n.parent.parent.parent.parent,1),e.joinReleaseNotes(n.parent.context.ngIf)));l(n,1,0,t)}))}function R(l){return u.Ob(0,[(l()(),u.sb(0,0,null,null,6,null,null,null,null,null,null,null)),(l()(),u.hb(16777216,null,null,1,null,C)),u.rb(2,16384,null,0,i.m,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.hb(16777216,null,null,1,null,N)),u.rb(4,16384,null,0,i.m,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.hb(16777216,null,null,1,null,k)),u.rb(6,16384,null,0,i.m,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.hb(0,null,null,0))],(function(l,n){var e=n.component;l(n,2,0,e.isStr(n.context.ngIf)&&e.isUrl(n.context.ngIf)),l(n,4,0,!e.isStr(n.context.ngIf)&&e.isObj(n.context.ngIf)),l(n,6,0,!e.isStr(n.context.ngIf)&&e.isArray(n.context.ngIf))}),null)}function E(l){return u.Ob(0,[(l()(),u.sb(0,0,null,null,10,null,null,null,null,null,null,null)),(l()(),u.sb(1,0,null,null,3,"h2",[],[[8,"id",0]],null,null,null,null)),(l()(),u.Mb(2,null,[" Version "," "])),(l()(),u.hb(16777216,null,null,1,null,y)),u.rb(4,16384,null,0,i.m,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.hb(16777216,null,null,1,null,I)),u.rb(6,16384,null,0,i.m,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.hb(16777216,null,null,1,null,O)),u.rb(8,16384,null,0,i.m,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.hb(16777216,null,null,1,null,R)),u.rb(10,16384,null,0,i.m,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.hb(0,null,null,0))],(function(l,n){var e=n.component;l(n,4,0,n.context.$implicit===e.releaseNotes.latestVersion),l(n,6,0,e.getReleaseDate(n.context.$implicit)),l(n,8,0,e.getReleaseAuthor(n.context.$implicit)),l(n,10,0,e.getReleaseNote(n.context.$implicit))}),(function(l,n){l(n,1,0,u.wb(1,"version-",n.context.$implicit,"")),l(n,2,0,n.context.$implicit)}))}function x(l){return u.Ob(0,[(l()(),u.sb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),u.hb(16777216,null,null,1,null,E)),u.rb(2,278528,null,0,i.l,[u.O,u.L,u.r],{ngForOf:[0,"ngForOf"]},null),(l()(),u.hb(0,null,null,0))],(function(l,n){l(n,2,0,n.component.versions)}),null)}function A(l){return u.Ob(0,[(l()(),u.sb(0,0,null,null,4,"div",[["class","center"]],null,null,null,null,null)),(l()(),u.sb(1,0,null,null,1,"h1",[["id","no-release-notes-available"]],null,null,null,null,null)),(l()(),u.Mb(-1,null,["No release notes available!"])),(l()(),u.sb(3,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["Are you connected to the internet?"]))],null,null)}function M(l){return u.Ob(0,[u.Gb(0,i.e,[u.t]),u.Gb(0,b.b,[u.k,b.c,u.y]),(l()(),u.sb(2,0,null,null,12,"div",[["class","app-content"]],null,null,null,null,null)),(l()(),u.sb(3,0,null,null,1,"h1",[["id","current-version"]],null,null,null,null,null)),(l()(),u.Mb(4,null,["Current version: ",""])),(l()(),u.sb(5,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),u.sb(6,0,null,null,3,"em",[],null,null,null,null,null)),(l()(),u.sb(7,0,null,null,2,"a",[["routerLink","."]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u.Eb(l,8).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t),t}),null,null)),u.rb(8,671744,null,0,c.o,[c.l,c.a,i.j],{fragment:[0,"fragment"],routerLink:[1,"routerLink"]},null),(l()(),u.Mb(-1,null,["Jump to release notes"])),(l()(),u.sb(10,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),u.hb(16777216,null,null,1,null,m)),u.rb(12,16384,null,0,i.m,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.hb(16777216,null,null,1,null,x)),u.rb(14,16384,null,0,i.m,[u.O,u.L],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),u.hb(0,[["noReleaseNotes",2]],null,0,null,A))],(function(l,n){var e=n.component;l(n,8,0,u.wb(1,"version-",e.releaseNotes.latestVersion,""),"."),l(n,12,0,(null==e.versions?null:e.versions.length)>0),l(n,14,0,e.versions,u.Eb(n,15))}),(function(l,n){l(n,4,0,n.component.releaseNotes.latestVersion),l(n,7,0,u.Eb(n,8).target,u.Eb(n,8).href)}))}var S=u.ob("app-release-notes",h,(function(l){return u.Ob(0,[(l()(),u.sb(0,0,null,null,1,"app-release-notes",[],null,null,null,M,g)),u.rb(1,114688,null,0,h,[d.c],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),j=function(){},L=e("K5Xz");e.d(n,"ReleaseNotesModuleNgFactory",(function(){return T}));var T=u.pb(r,[],(function(l){return u.Bb([u.Cb(512,u.j,u.ab,[[8,[o.a,S]],[3,u.j],u.w]),u.Cb(4608,i.o,i.n,[u.t,[2,i.F]]),u.Cb(4608,d.h,d.n,[i.d,u.A,d.l]),u.Cb(4608,d.o,d.o,[d.h,d.m]),u.Cb(5120,d.a,(function(l){return[l]}),[d.o]),u.Cb(4608,d.k,d.k,[]),u.Cb(6144,d.i,null,[d.k]),u.Cb(4608,d.g,d.g,[d.i]),u.Cb(6144,d.b,null,[d.g]),u.Cb(4608,d.f,d.j,[d.b,u.q]),u.Cb(4608,d.c,d.c,[d.f]),u.Cb(4608,a.b,a.b,[]),u.Cb(1073742336,i.c,i.c,[]),u.Cb(1073742336,d.e,d.e,[]),u.Cb(1073742336,d.d,d.d,[]),u.Cb(1073742336,b.a,b.a,[]),u.Cb(1073742336,c.p,c.p,[[2,c.u],[2,c.l]]),u.Cb(1073742336,j,j,[]),u.Cb(1073742336,t.d,t.d,[]),u.Cb(1073742336,r,r,[]),u.Cb(256,d.l,"XSRF-TOKEN",[]),u.Cb(256,d.m,"X-XSRF-TOKEN",[]),u.Cb(1024,c.j,(function(){return[[{path:"",component:h}]]}),[]),u.Cb(256,t.a,{separatorKeyCodes:[L.f]},[])])}))}}]);