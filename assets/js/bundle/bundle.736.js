(self.webpackChunkgames_ui=self.webpackChunkgames_ui||[]).push([[736],{6736:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>S});var n=o(6540),r=o(4507),a=o(3029),c=o(2901),l=o(9417),s=o(5501),i=o(1801),u=o(3954),d=o(4467),f=o(4625),m=o(6784),p=o(8669),g=o(2078),h=o(8529),y=(o(9275),o(2543));var b=function(e){(0,s.A)(f,e);var t,o,r=(t=f,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,u.A)(t);if(o){var r=(0,u.A)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return(0,i.A)(this,e)});function f(e){var t;return(0,a.A)(this,f),t=r.call(this),(0,d.A)((0,l.A)(t),"setSelectedTabIndex",(function(e){t.setState({selectedTabIndex:e})})),t.state={selectedTabIndex:e.defaultTabIndex},t}return(0,c.A)(f,[{key:"getHeader",value:function(){var e=this;return n.createElement("div",{className:"tab-modal-header"},this.props.tabNames.map((function(t,o){return n.createElement("button",{key:o,disabled:e.state.selectedTabIndex==o,onClick:function(){return e.setSelectedTabIndex(o)}},t)})))}},{key:"getBody",value:function(){var e=this.props.tabs[this.state.selectedTabIndex];return y.isFunction(e)?e():e}},{key:"render",value:function(){return n.createElement(h.A,{show:this.props.show,onClose:this.props.onClose,header:this.getHeader(),body:this.getBody()})}}]),f}(n.PureComponent),v=o(4692),x=o(2543);const A=function(e){(0,s.A)(f,e);var t,o,r=(t=f,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,u.A)(t);if(o){var r=(0,u.A)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return(0,i.A)(this,e)});function f(){var e;return(0,a.A)(this,f),e=r.call(this),(0,d.A)((0,l.A)(e),"createRoom",(function(t){t.preventDefault();var o=e.props.selectedGame.gameName;g.A.createRoom(v("#roomName").val(),o).then((function(t){e.props.goTo("/game/".concat(o,"/").concat(t._id))})).catch((function(e){return p.oR.error(e.message,{toastId:"CANT_CREATE_ROOM"})}))})),(0,d.A)((0,l.A)(e),"renderCreateRoom",(function(){return n.createElement("form",{onSubmit:e.createRoom,autoComplete:"off",className:"sg-form"},n.createElement("label",{htmlFor:"roomName"},"Room Name"),n.createElement("input",{type:"text",id:"roomName",required:!0,placeholder:"Eg : Gaming Guys"}),n.createElement("button",{type:"submit"},"Create"))})),(0,d.A)((0,l.A)(e),"joinRoom",(function(t){t.preventDefault();var o=v("#roomID").val(),n=e.props.selectedGame.gameName;g.A.joinRoom(n,o).then((function(t){e.props.goTo("/game/".concat(n,"/").concat(o))})).catch((function(e){return p.oR.error(e.message,{toastId:"CANT_JOIN_ROOM"})}))})),(0,d.A)((0,l.A)(e),"renderJoinRoom",(function(){return n.createElement("form",{onSubmit:e.joinRoom,autoComplete:"off",className:"sg-form"},n.createElement("label",{htmlFor:"roomID"},"Room ID"),n.createElement("input",{type:"text",id:"roomID",required:!0,placeholder:"Eg : 123412341234"}),n.createElement("button",{type:"submit"},"Join"))})),e.tabNames=["Create","Join"],e}return(0,c.A)(f,[{key:"render",value:function(){return n.createElement(b,{show:!x.isEmpty(this.props.selectedGame),onClose:this.props.onClose,tabNames:this.tabNames,defaultTabIndex:0,tabs:[this.renderCreateRoom,this.renderJoinRoom]})}}]),f}(n.PureComponent);o(4418);var k="/assets/images/",w=[{name:"Uno",backgroundImage:k+"uno.png",gameName:"uno",style:{height:"150px",width:"200px"}},{name:"Ace",backgroundImage:k+"ass.png",gameName:"ass",style:{height:"150px",width:"200px"}},{name:"Least Count / Show",backgroundImage:k+"ass.png",gameName:"leastcount",style:{height:"150px",width:"200px"}},{name:"Othello",backgroundImage:k+"othello.png",gameName:"othello",style:{height:"200px",width:"200px"}},{name:"Splendor",backgroundImage:k+"splendor.png",gameName:"splendor",style:{height:"200px",width:"200px"}}];const E=function(e){(0,s.A)(p,e);var t,o,r=(t=p,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,u.A)(t);if(o){var r=(0,u.A)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return(0,i.A)(this,e)});function p(){var e;(0,a.A)(this,p);for(var t=arguments.length,o=new Array(t),c=0;c<t;c++)o[c]=arguments[c];return e=r.call.apply(r,[this].concat(o)),(0,d.A)((0,l.A)(e),"state",{selectedGame:null}),(0,d.A)((0,l.A)(e),"goTo",(function(t){e.props.history.push(t)})),(0,d.A)((0,l.A)(e),"setSelectedGame",(function(t){e.setState({selectedGame:t})})),(0,d.A)((0,l.A)(e),"getGameCard",(function(t,o){return n.createElement("button",{key:o,className:"sg-game-card",onClick:function(){return e.setSelectedGame(t)}},n.createElement("img",{src:t.backgroundImage,className:"game-img",style:t.style}),n.createElement("p",{className:"sg-game-card-footer"},n.createElement("b",null,t.name)))})),e}return(0,c.A)(p,[{key:"getGames",value:function(){return n.createElement("div",{className:"games-body"},w.map(this.getGameCard))}},{key:"getHeader",value:function(){return n.createElement("div",null,n.createElement(f.N_,{to:"/profile"},n.createElement("button",{className:"profile-btn"},n.createElement(m.g,{style:{fontSize:"20px"},icon:"user"}))))}},{key:"getRoomModal",value:function(){var e=this,t=this.state.selectedGame;return t&&n.createElement(A,{selectedGame:t,goTo:this.goTo,onClose:function(){return e.setSelectedGame(null)}})}},{key:"render",value:function(){return n.createElement("div",{className:"home-view"},this.getHeader(),this.getGames(),this.getRoomModal())}}]),p}(n.PureComponent);var N=o(1225),R=o(596),C=(o(422),o(5795));var T=function(e){(0,s.A)(f,e);var t,o,r=(t=f,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,u.A)(t);if(o){var r=(0,u.A)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return(0,i.A)(this,e)});function f(){var e;(0,a.A)(this,f);for(var t=arguments.length,o=new Array(t),c=0;c<t;c++)o[c]=arguments[c];return e=r.call.apply(r,[this].concat(o)),(0,d.A)((0,l.A)(e),"state",{showTokenFlag:!1}),(0,d.A)((0,l.A)(e),"gotoHome",(function(){e.props.history.replace("/")})),(0,d.A)((0,l.A)(e),"toggleShowTokenFLag",(function(){e.setState({showTokenFlag:!e.state.showTokenFlag})})),(0,d.A)((0,l.A)(e),"copyToken",(function(){navigator.clipboard.writeText(C.getEncodedPlayerToken()),p.oR.info("Token copied successfully")})),(0,d.A)((0,l.A)(e),"getTokenView",(function(){return e.state.showTokenFlag&&n.createElement("div",{className:"player-token-card flex-column"},n.createElement("div",{className:"player-token-label"},"You can copy the below token and use it to login from other devices."),n.createElement("div",{className:"player-token"},C.getEncodedPlayerToken()),n.createElement("button",{className:"copy-token-btn",onClick:e.copyToken},"Copy"))})),(0,d.A)((0,l.A)(e),"getShowTokenBtn",(function(){return n.createElement("button",{className:"show-token-btn","data-show":e.state.showTokenFlag,onClick:e.toggleShowTokenFLag},e.state.showTokenFlag?"Hide":"Show"," token")})),(0,d.A)((0,l.A)(e),"signout",(function(){(0,R.d)(null)})),e}return(0,c.A)(f,[{key:"render",value:function(){var e=this.props.player;return n.createElement("div",{className:"profile-view"},n.createElement("div",{className:"profile-card"},n.createElement(m.g,{icon:"user",style:{fontSize:"50px"}}),n.createElement("h5",{className:"card-title text-center text-truncate"},e.name)),n.createElement("div",{className:"flex-column"},n.createElement("button",{className:"home-btn",onClick:this.gotoHome},"Home"),this.getTokenView(),this.getShowTokenBtn(),n.createElement("button",{className:"signout-btn",onClick:this.signout},"Sign-out")))}}]),f}(n.PureComponent),I=[{path:"/profile",component:(0,N.Ng)((function(e){return e}))(T)},{path:"/",component:E}];function S(){return n.createElement(r.dO,null,I.map((function(e,t){return n.createElement(r.qh,{path:e.path,key:t,component:e.component})})),n.createElement(r.rd,{to:"/"}))}},2078:(e,t,o)=>{"use strict";o.d(t,{A:()=>c});var n=o(3029),r=o(2901),a=o(624),c=function(){function e(){(0,n.A)(this,e)}return(0,r.A)(e,null,[{key:"createRoom",value:function(e,t){return new Promise((function(o,n){a.A.post("game/create",{gameName:t,roomName:e}).then((function(e){return o(e)})).catch((function(e){return n(e)}))}))}},{key:"joinRoom",value:function(e,t){return new Promise((function(o,n){a.A.post("game/".concat(t,"/join"),{gameName:e}).then((function(e){return o(e)})).catch((function(e){return n(e)}))}))}},{key:"addLocalPlayer",value:function(e,t,o){return new Promise((function(n,r){a.A.post("".concat(e,"/").concat(t,"/add-local-player"),o).then((function(e){return n(e)})).catch((function(e){return r(e)}))}))}}]),e}()},8529:(e,t,o)=>{"use strict";o.d(t,{A:()=>i});var n=o(3029),r=o(2901),a=o(5501),c=o(1801),l=o(3954),s=o(6540);o(9382);var i=function(e){(0,a.A)(u,e);var t,o,i=(t=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,l.A)(t);if(o){var r=(0,l.A)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return(0,c.A)(this,e)});function u(){return(0,n.A)(this,u),i.apply(this,arguments)}return(0,r.A)(u,[{key:"getCloseButton",value:function(e){return s.createElement("button",{className:"sg-modal-close-btn opacity-".concat(e?1:0),onClick:this.props.onClose},"×")}},{key:"render",value:function(){var e=this.props,t=e.header,o=e.body,n=e.show,r=e.hideClose;return s.createElement("div",{className:"sg-modal","data-show":n},s.createElement("div",{className:"sg-modal-content-outer"},s.createElement("div",{className:"sg-modal-content"},s.createElement("div",{className:"sg-modal-header"},this.getCloseButton(!1),t,this.getCloseButton(!r)),s.createElement("div",{className:"sg-modal-body"},o))))}}]),u}(s.PureComponent)},387:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>l});var n=o(1601),r=o.n(n),a=o(6314),c=o.n(a)()(r());c.push([e.id,".home-view{padding:20px}.profile-btn{border-radius:100%;height:35px;width:35px;background:#3a0455;box-shadow:0 0 5px #fff;color:#fff}.games-body{display:flex;flex-wrap:wrap;margin:10px 0}.games-body .sg-game-card{margin:10px;padding:5px;border-radius:10px;background:#3a0455;box-shadow:0 0 5px #fff;color:#fff}.games-body .sg-game-card .sg-game-card-footer{margin:5px 0}",""]);const l=c},5069:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>l});var n=o(1601),r=o.n(n),a=o(6314),c=o.n(a)()(r());c.push([e.id,".sg-modal{position:fixed;z-index:-1;opacity:0;transition:z-index .5s,opacity .6s;top:0;left:0;height:100%;width:100%;background-color:rgba(0,0,0,.5)}.sg-modal .sg-modal-content-outer{height:100%;width:100%;overflow:auto;display:flex;padding:5px}.sg-modal .sg-modal-content{margin:auto;background:#3a0455;border-radius:10px;box-shadow:0 0 5px #fff}.sg-modal .sg-modal-content .sg-modal-header{position:relative;padding:5px;border-bottom:1px solid #fff;color:#fff;text-align:center;display:flex}.sg-modal .sg-modal-content .sg-modal-header .sg-modal-close-btn{padding:0;height:20px;width:20px;background:#da5454;font-size:12px;border-radius:100%;color:#fff;text-align:center;margin:auto}.sg-modal .sg-modal-content .sg-modal-body{padding:10px}.sg-modal[data-show=true]{z-index:100;opacity:1}",""]);const l=c},7818:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>l});var n=o(1601),r=o.n(n),a=o(6314),c=o.n(a)()(r());c.push([e.id,".tab-modal-header{flex-shrink:0;display:flex;width:200px;margin:0 30px}.tab-modal-header button{width:50%;color:#fff;background:transparent;box-shadow:0 0 3px #fff}.tab-modal-header button:disabled{opacity:.5}.tab-modal-header button:first-child{border-top-left-radius:5px;border-bottom-left-radius:5px}.tab-modal-header button:last-child{border-top-right-radius:5px;border-bottom-right-radius:5px}",""]);const l=c},9105:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>l});var n=o(1601),r=o.n(n),a=o(6314),c=o.n(a)()(r());c.push([e.id,".profile-view{display:flex;flex-direction:column;padding:20px}.profile-view .profile-card{margin:10px auto;box-shadow:0 0 5px #fff;color:#fff;text-align:center;padding:5px 20px;border-radius:5px}.profile-view .profile-card>*{margin:5px 0}.profile-view .player-token-card{background:gray;border-radius:10px;padding:5px 5px 0px;max-width:300px;margin:5px auto}.profile-view .player-token-label{padding:5px;text-align:center;color:#f3c704;font-size:small}.profile-view .player-token{overflow-wrap:anywhere;background:#1d1e22;color:#687c97;padding:9px;border-radius:10px;font-size:small}.profile-view .home-btn,.profile-view .show-token-btn,.profile-view .copy-token-btn,.profile-view .signout-btn{border-radius:5px;padding:5px 10px;margin:10px auto;color:#fff}.profile-view .home-btn,.profile-view .show-token-btn{background:#1976d2}.profile-view .copy-token-btn{background:#f3c704}.profile-view .signout-btn{background:#da5454}",""]);const l=c},4418:(e,t,o)=>{var n=o(5072),r=o(387);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.id,r,""]]);n(r,{insert:"head",singleton:!1}),e.exports=r.locals||{}},9382:(e,t,o)=>{var n=o(5072),r=o(5069);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.id,r,""]]);n(r,{insert:"head",singleton:!1}),e.exports=r.locals||{}},9275:(e,t,o)=>{var n=o(5072),r=o(7818);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.id,r,""]]);n(r,{insert:"head",singleton:!1}),e.exports=r.locals||{}},422:(e,t,o)=>{var n=o(5072),r=o(9105);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.id,r,""]]);n(r,{insert:"head",singleton:!1}),e.exports=r.locals||{}}}]);