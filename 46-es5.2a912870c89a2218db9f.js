var __awaiter=this&&this.__awaiter||function(i,n,t,e){return new(t||(t=Promise))((function(o,r){function s(i){try{c(e.next(i))}catch(n){r(n)}}function l(i){try{c(e.throw(i))}catch(n){r(n)}}function c(i){i.done?o(i.value):new t((function(n){n(i.value)})).then(s,l)}c((e=e.apply(i,n||[])).next())}))},__generator=this&&this.__generator||function(i,n){var t,e,o,r,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(r){return function(l){return function(r){if(t)throw new TypeError("Generator is already executing.");for(;s;)try{if(t=1,e&&(o=2&r[0]?e.return:r[0]?e.throw||((o=e.return)&&o.call(e),0):e.next)&&!(o=o.call(e,r[1])).done)return o;switch(e=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,e=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===r[0]||2===r[0])){s=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){s.label=r[1];break}if(6===r[0]&&s.label<o[1]){s.label=o[1],o=r;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(r);break}o[2]&&s.ops.pop(),s.trys.pop();continue}r=n.call(i,s)}catch(l){r=[6,l],e=0}finally{t=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,l])}}};(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{nf6t:function(i,n,t){"use strict";t.r(n),t.d(n,"ion_infinite_scroll",(function(){return s})),t.d(n,"ion_infinite_scroll_content",(function(){return l}));var e=t("c1op"),o=t("AfW+"),r=t("YtD4"),s=function(){function i(i){var n=this;Object(e.l)(this,i),this.thrPx=0,this.thrPc=0,this.didFire=!1,this.isBusy=!1,this.isLoading=!1,this.threshold="15%",this.disabled=!1,this.position="bottom",this.onScroll=function(){var i=n.scrollEl;if(!i||!n.canStart())return 1;var t=n.el.offsetHeight;if(0===t)return 2;var e=i.scrollTop,o=i.offsetHeight,r=0!==n.thrPc?o*n.thrPc:n.thrPx;if(("bottom"===n.position?i.scrollHeight-t-e-r-o:e-t-r)<0){if(!n.didFire)return n.isLoading=!0,n.didFire=!0,n.ionInfinite.emit(),3}else n.didFire=!1;return 4},this.ionInfinite=Object(e.e)(this,"ionInfinite",7)}return i.prototype.thresholdChanged=function(){var i=this.threshold;i.lastIndexOf("%")>-1?(this.thrPx=0,this.thrPc=parseFloat(i)/100):(this.thrPx=parseFloat(i),this.thrPc=0)},i.prototype.disabledChanged=function(){var i=this.disabled;i&&(this.isLoading=!1,this.isBusy=!1),this.enableScrollEvents(!i)},i.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,(function(){var i,n,t=this;return __generator(this,(function(o){switch(o.label){case 0:return(i=this.el.closest("ion-content"))?(n=this,[4,i.getScrollElement()]):[3,2];case 1:return n.scrollEl=o.sent(),this.thresholdChanged(),this.disabledChanged(),"top"===this.position&&Object(e.m)((function(){t.scrollEl&&(t.scrollEl.scrollTop=t.scrollEl.scrollHeight-t.scrollEl.clientHeight)})),[3,3];case 2:console.error("<ion-infinite-scroll> must be used inside an <ion-content>"),o.label=3;case 3:return[2]}}))}))},i.prototype.disconnectedCallback=function(){this.enableScrollEvents(!1),this.scrollEl=void 0},i.prototype.complete=function(){return __awaiter(this,void 0,void 0,(function(){var i,n,t=this;return __generator(this,(function(o){return i=this.scrollEl,this.isLoading&&i&&(this.isLoading=!1,"top"===this.position)&&(this.isBusy=!0,n=i.scrollHeight-i.scrollTop,requestAnimationFrame((function(){Object(e.g)((function(){var o=i.scrollHeight-n;requestAnimationFrame((function(){Object(e.m)((function(){i.scrollTop=o,t.isBusy=!1}))}))}))}))),[2]}))}))},i.prototype.canStart=function(){return!(this.disabled||this.isBusy||!this.scrollEl||this.isLoading)},i.prototype.enableScrollEvents=function(i){this.scrollEl&&(i?this.scrollEl.addEventListener("scroll",this.onScroll):this.scrollEl.removeEventListener("scroll",this.onScroll))},i.prototype.render=function(){var i,n=Object(e.d)(this),t=this.disabled;return Object(e.i)(e.a,{class:(i={},i[n]=!0,i["infinite-scroll-loading"]=this.isLoading,i["infinite-scroll-enabled"]=!t,i)})},Object.defineProperty(i.prototype,"el",{get:function(){return Object(e.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(i,"watchers",{get:function(){return{threshold:["thresholdChanged"],disabled:["disabledChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(i,"style",{get:function(){return"ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}"},enumerable:!0,configurable:!0}),i}(),l=function(){function i(i){Object(e.l)(this,i)}return i.prototype.componentDidLoad=function(){if(void 0===this.loadingSpinner){var i=Object(e.d)(this);this.loadingSpinner=o.b.get("infiniteLoadingSpinner",o.b.get("spinner","ios"===i?"lines":"crescent"))}},i.prototype.render=function(){var i,n=Object(e.d)(this);return Object(e.i)(e.a,{class:(i={},i[n]=!0,i["infinite-scroll-content-"+n]=!0,i)},Object(e.i)("div",{class:"infinite-loading"},this.loadingSpinner&&Object(e.i)("div",{class:"infinite-loading-spinner"},Object(e.i)("ion-spinner",{name:this.loadingSpinner})),this.loadingText&&Object(e.i)("div",{class:"infinite-loading-text",innerHTML:Object(r.a)(this.loadingText)})))},Object.defineProperty(i,"style",{get:function(){return"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600,#666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line{stroke:var(--ion-color-step-600,#666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600,#666)}"},enumerable:!0,configurable:!0}),i}()}}]);