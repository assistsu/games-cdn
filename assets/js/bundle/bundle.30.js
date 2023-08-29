(self.webpackChunkgames_ui=self.webpackChunkgames_ui||[]).push([[30],{8030:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>E});var a=n(5861),r=n(5671),o=n(3144),i=n(7326),s=n(136),c=n(6215),l=n(1120),u=n(4942),d=n(7757),p=n.n(d),m=n(7294),f=n(1977),h=n(818),y=n(6431),g=function(){function e(){(0,r.Z)(this,e)}return(0,o.Z)(e,null,[{key:"placeDisk",value:function(e,t){return new Promise((function(n,a){y.Z.post("othello/".concat(e,"/place"),t).then((function(e){return n(e)})).catch((function(e){return a(e)}))}))}}]),e}(),v=n(3352),x=(n(7062),n(6486)),b=n(9755);var k="othello";const E=function(e){(0,s.Z)(w,e);var t,n,d,y,E=(d=w,y=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=(0,l.Z)(d);if(y){var n=(0,l.Z)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return(0,c.Z)(this,e)});function w(){var e;return(0,r.Z)(this,w),e=E.call(this),(0,u.Z)((0,i.Z)(e),"handlePlaceDisk",(function(t,n){var a={position:{x:t,y:n}};g.placeDisk(e.props.game._id,a).then(e.startAniAndUpdateGameInfo).catch(e.handleError)})),e.state=x.assign({},e.getInitialValues()),e.updateReceived=e.updateReceived.bind((0,i.Z)(e)),e.restartGame=e.restartGame.bind((0,i.Z)(e)),e.resetStateUpdateGameInfo=v.Z.resetStateUpdateGameInfo.bind((0,i.Z)(e)),e.handleError=v.Z.handleError.bind((0,i.Z)(e)),e.startAniAndUpdateGameInfo=e.startAniAndUpdateGameInfo.bind((0,i.Z)(e)),e}return(0,o.Z)(w,[{key:"getInitialValues",value:function(){return{board:null}}},{key:"getAdditionalInfo",value:function(e){return m.createElement("div",{className:"player-additonal-info"},m.createElement("div",null,"[","W"==this.props.game.playersDiskColor[e._id]?"White":"Black","]"),m.createElement("div",null,"[",this.props.game.playersDisksInBoardCount[e._id],"]"))}},{key:"listPlayers",value:function(){var e=this,t=this.props.game.players;return m.createElement("div",{className:"d-flex flex-wrap px-1 mt-2"},t.map((function(t,n){return m.createElement(f.Z,{key:n,gameId:e.props.game._id,gameName:k,player:t,isMe:t._id==e.props.me._id,currentPlayer:e.props.game.currentPlayer,amIAdmin:e.props.state.amIAdmin,additionalInfo:function(){return e.getAdditionalInfo(t)},hideInfo:!0})})))}},{key:"getPlayerTurnAlert",value:function(){return m.createElement("div",{className:"d-flex py-2"},m.createElement("span",{className:"m-auto sg-btn-".concat(this.props.state.isMyMove?"danger":"trans"," ")},m.createElement("span",null,m.createElement("b",null,this.props.game.currentPlayer.name)," turn")))}},{key:"getDisk",value:function(e,t,n){var a=this,r="sg-cell ".concat("E"==e&&"sg-btn");return m.createElement("button",{onClick:function(){return a.handlePlaceDisk(t,n)},key:n,className:r,disabled:!this.props.state.isMyMove},m.createElement("div",{id:"disk-".concat(t,"-").concat(n),className:"sg-disk sg-disk-".concat(e)}))}},{key:"showBoard",value:function(){var e=this.props.game.board;if(e){for(var t=[],n=0;n<e.length;n++){for(var a=[],r=0;r<e[n].length;r++){var o=e[n][r];a.push(this.getDisk(o,n,r))}t.push(m.createElement("div",{key:n,className:"sg-row"},a))}return m.createElement("div",{className:"board-container"},m.createElement("div",{className:"board-container-inner"},t))}}},{key:"showDisksLeft",value:function(){if(this.props.state.amIPresentInPlayers)return m.createElement("div",{className:"d-flex py-2"},m.createElement("span",{className:"m-auto sg-btn-light"},m.createElement("b",null,"Your ","W"==this.props.game.playersDiskColor[this.props.me._id]?"white":"black"," disk(s) left: ",this.props.game.playersDisksLeftCount[this.props.me._id])))}},{key:"renderGame",value:function(){return m.createElement("div",{className:"d-flex flex-column"},this.getPlayerTurnAlert(),this.listPlayers(!0),this.showBoard(),this.showDisksLeft())}},{key:"renderGameResults",value:function(){var e=this;return m.createElement("div",{className:"game-result text-center"},m.createElement("div",{className:"alert alert-success text-center m-0 rounded-top rounded-bottom-0",style:{boxShadow:"0 0 5px white"}},m.createElement("b",null,"Game Results")),m.createElement("div",{className:"game-result-table"},m.createElement("table",{className:"table table-hover table-light table-striped rounded-bottom",style:{boxShadow:"0 0 5px white"}},m.createElement("thead",null,m.createElement("tr",null,m.createElement("th",{scope:"col"},"Name"),m.createElement("th",{scope:"col"},"Disk Color"),m.createElement("th",{scope:"col"},"Total Disk"),m.createElement("th",{scope:"col"},"Status"))),m.createElement("tbody",null,this.props.game.playersInGame.map((function(t,n){return m.createElement("tr",{key:n},m.createElement("td",null,t.name,t._id==e.props.me._id?" (You)":""),m.createElement("td",null,"W"==e.props.game.playersDiskColor[t._id]?"White":"Black"),m.createElement("td",null,e.props.game.playersDisksInBoardCount[t._id]),m.createElement("td",null,t._id==e.props.game.winner._id?"Won":"Lost"))}))))),this.props.state.amIAdmin&&m.createElement("div",{className:"d-flex"},m.createElement("button",{className:"btn btn-primary m-auto btn-shadow",onClick:this.restartGame},"Restart")))}},{key:"restartGame",value:function(){h.Z.restartGame(k,this.props.game._id).then(this.props.updateGameInfo).catch(this.handleError)}},{key:"render",value:function(){switch(this.props.game.status){case"STARTED":return this.renderGame();case"ENDED":return this.renderGameResults()}}},{key:"placeDisk",value:function(e,t){var n=this;return new Promise((function(a){b("#disk-".concat(e.x,"-").concat(e.y)).css({backgroundColor:"W"==n.props.game.playersDiskColor[n.props.game.currentPlayer._id]?"white":"black"}),setTimeout((function(){return a()}),t)}))}},{key:"placeDisks",value:(n=(0,a.Z)(p().mark((function e(t){var n;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=0;case 1:if(!(n<t.length)){e.next=7;break}return e.next=4,this.placeDisk(t[n],0==n?300:100);case 4:n++,e.next=1;break;case 7:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"startAniAndUpdateGameInfo",value:(t=(0,a.Z)(p().mark((function e(t){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.placeDisks(t.positionsToPlaceDisks);case 2:return e.next=4,this.props.updateGameInfo(t);case 4:return e.next=6,this.props.state.isMyMove;case 6:if(!e.sent){e.next=10;break}v.Z.playNewNotify(),e.next=11;break;case 10:v.Z.playLightNotify();case 11:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"updateReceived",value:function(e){"PLAYER_PLACED"===e.event&&this.startAniAndUpdateGameInfo(e.gameData)}}]),w}(m.Component)},1977:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var a=n(5671),r=n(3144),o=n(7326),i=n(136),s=n(6215),c=n(1120),l=n(4942),u=n(7294),d=n(7814),p=n(818),m=n(3352);n(8803);var f=function(e){(0,i.Z)(h,e);var t,n,f=(t=h,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,c.Z)(t);if(n){var r=(0,c.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,s.Z)(this,e)});function h(){var e;return(0,a.Z)(this,h),e=f.call(this),(0,l.Z)((0,o.Z)(e),"nudgePlayer",(function(){var t=e.props,n=t.isMe,a=t.amIAdmin;if(!n&&a){var r=e.props,o=r.gameName,i=r.gameId,s=r.player;p.Z.nudgePlayer(o,i,s._id).catch(e.handleError)}})),e.handleError=m.Z.handleError.bind((0,o.Z)(e)),e}return(0,r.Z)(h,[{key:"getPlayerBorderColor",value:function(){return"sg-border-".concat(this.props.isMe?"warning":"primary")}},{key:"isPlayerCurrentPlayer",value:function(){var e=this.props,t=e.currentPlayer,n=e.player;return t&&t._id==n._id}},{key:"getPlayerBtn",value:function(){return"sg-btn".concat(this.isPlayerCurrentPlayer()?"-light":"")}},{key:"getPlayerBtnClassName",value:function(){return["player-card",this.getPlayerBtn(),this.getPlayerBorderColor()].join(" ")}},{key:"render",value:function(){var e=this.props,t=e.player,n=e.isMe,a=e.playerChosenCard,r=e.CardComponent,o=e.hideInfo,i=e.isPlayerWon,s=e.additionalInfo;return u.createElement("div",{className:"player-card-outer","data-player-id":t._id},u.createElement("button",{className:this.getPlayerBtnClassName(),onClick:this.nudgePlayer,title:t.name},u.createElement("div",{className:"flex-column"},u.createElement(d.G,{icon:"user",className:"player-icon"}),u.createElement("div",{className:"player-name"},t.name,n&&" (You)"),s&&s(),1!=o&&(i?u.createElement("span",{className:"px-2 m-auto bg-success rounded text-white"},"Won"):u.createElement("div",null,u.createElement("div",{className:"text-center",style:{fontSize:"10px"}},u.createElement("b",null,"(",t.cardsCount,")")),r&&u.createElement("div",{className:"game-player-selected-card-back"},a&&u.createElement(r,{card:a,className:"game-player-selected-card game-player-selected-card-force"})))))))}}]),h}(u.Component)},818:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(5671),r=n(3144),o=n(6431),i=function(){function e(){(0,a.Z)(this,e)}return(0,r.Z)(e,null,[{key:"getGameInfo",value:function(e,t){return new Promise((function(n,a){o.Z.get("game/".concat(t,"/info"),{gameName:e}).then((function(e){return n(e)})).catch((function(e){return a(e)}))}))}},{key:"startGame",value:function(e,t){return new Promise((function(n,a){o.Z.post("".concat(e,"/").concat(t,"/start")).then((function(e){return n(e)})).catch((function(e){return a(e)}))}))}},{key:"restartGame",value:function(e,t){return new Promise((function(n,a){o.Z.post("game/".concat(t,"/restart"),{gameName:e}).then((function(e){return n(e)})).catch((function(e){return a(e)}))}))}},{key:"leaveGame",value:function(e,t){return new Promise((function(n,a){o.Z.post("".concat(e,"/").concat(t,"/leave")).then((function(e){return n(e)})).catch((function(e){return a(e)}))}))}},{key:"sendMessage",value:function(e,t,n){return new Promise((function(a,r){o.Z.post("game/".concat(t,"/message"),{gameName:e,text:n}).then((function(e){return a(e)})).catch((function(e){return r(e)}))}))}},{key:"nudgePlayer",value:function(e,t,n){return new Promise((function(a,r){o.Z.post("game/".concat(t,"/nudge"),{gameName:e,playerId:n}).then((function(e){return a(e)})).catch((function(e){return r(e)}))}))}}]),e}()},3352:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(8077),r=n(9755);function o(e){r("#".concat(e)).trigger("play")}function i(){o("error-notify")}const s={audios:["new-notify","error-notify","light-notify","buzz-notify"],playNewNotify:function(){o("new-notify")},playErrorNotify:i,playLightNotify:function(){o("light-notify")},playBuzzNotify:function(){o("buzz-notify")},vibrate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:200;window.navigator.vibrate(e)},resetStateGetGameInfo:function(){this.setState(this.getInitialValues(),this.props.getGameInfo())},resetStateUpdateGameInfo:function(e){var t=this;this.setState(this.getInitialValues(),(function(){return t.props.updateGameInfo(e)}))},handleError:function(e){i();var t=e.message||"Error Occurred";a.Am.error(t,{toastId:t}),this.setState(this.getInitialValues())}}},3938:(e,t,n)=>{(t=n(3645)(!1)).push([e.id,".board-container{display:flex;margin:10px auto;border:40px #000 solid;border-radius:10px;padding:3px;background:#607d8b}.board-container .board-container-inner{background:#373737;padding:5px;border-radius:10px}.board-container .board-container-inner .sg-row{display:flex}.board-container .board-container-inner .sg-cell{background:#27b08e;display:flex;flex-direction:column;box-shadow:0px 0px 10px #000;padding:10px;border-radius:5px}.board-container .board-container-inner .sg-cell:not(:disabled):hover{transform:scale(1.1);transition:transform .5s}.board-container .board-container-inner .sg-disk{padding:30px;border-radius:50px;transition:background-color .5s ease}.board-container .board-container-inner .sg-disk-B{background:#000;box-shadow:5px 5px 10px #000}.board-container .board-container-inner .sg-disk-W{background:#fff;box-shadow:5px 5px 10px #000}@media only screen and (max-width: 750px){.board-container{border:30px #000 solid !important}.sg-cell{padding:7.5px !important}.sg-disk{padding:20px !important}}@media only screen and (max-width: 550px){.board-container{border:20px #000 solid !important}.sg-cell{padding:5px !important}.sg-disk{padding:15px !important}}@media only screen and (max-width: 400px){.board-container{border:15px #000 solid !important}}@media only screen and (max-width: 370px){.sg-cell{padding:3px !important}}@media only screen and (max-width: 340px){.sg-disk{padding:12px !important}}@media only screen and (max-width: 300px){.board-container{border:10px #000 solid !important}.sg-disk{padding:10px !important}}",""]),e.exports=t},3882:(e,t,n)=>{(t=n(3645)(!1)).push([e.id,".player-card-outer{margin:10px auto}.player-card-outer .player-card{width:70px;margin:auto 5px;border-radius:5px !important}.player-card-outer .player-name,.player-card-outer .player-additonal-info{font-weight:bold;font-size:12px;overflow:hidden;text-overflow:ellipsis}.player-card-outer .player-icon{margin:5px auto;font-size:15px}",""]),e.exports=t},7062:(e,t,n)=>{var a=n(3379),r=n(3938);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.id,r,""]]);a(r,{insert:"head",singleton:!1}),e.exports=r.locals||{}},8803:(e,t,n)=>{var a=n(3379),r=n(3882);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.id,r,""]]);a(r,{insert:"head",singleton:!1}),e.exports=r.locals||{}}}]);