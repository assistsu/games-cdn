(self.webpackChunkgames_ui=self.webpackChunkgames_ui||[]).push([[62],{4647:(e,t,r)=>{"use strict";r.d(t,{A:()=>f});var n=r(3029),a=r(2901),o=r(9417),s=r(5501),l=r(1801),i=r(3954),c=r(4467),d=r(6540),u=r(6784),p=r(1107),m=r(7683);r(2160);var f=function(e){(0,s.A)(h,e);var t,r,f=(t=h,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,i.A)(t);if(r){var a=(0,i.A)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,l.A)(this,e)});function h(){var e;return(0,n.A)(this,h),e=f.call(this),(0,c.A)((0,o.A)(e),"nudgePlayer",(function(){var t=e.props,r=t.isMe,n=t.amIAdmin;if(!r&&n){var a=e.props,o=a.gameName,s=a.gameId,l=a.player;p.A.nudgePlayer(o,s,l._id).catch(e.handleError)}})),e.handleError=m.A.handleError.bind((0,o.A)(e)),e}return(0,a.A)(h,[{key:"getPlayerBorderColor",value:function(){return"sg-border-".concat(this.props.isMe?"warning":"primary")}},{key:"isPlayerCurrentPlayer",value:function(){var e=this.props,t=e.currentPlayer,r=e.player;return t&&t._id==r._id}},{key:"getPlayerBtn",value:function(){return"sg-btn".concat(this.isPlayerCurrentPlayer()?"-light":"")}},{key:"getPlayerBtnClassName",value:function(){return["player-card",this.getPlayerBtn(),this.getPlayerBorderColor()].join(" ")}},{key:"render",value:function(){var e=this.props,t=e.player,r=e.isMe,n=e.playerChosenCard,a=e.CardComponent,o=e.hideInfo,s=e.isPlayerWon,l=e.additionalInfo;return d.createElement("div",{className:"player-card-outer","data-player-id":t._id},d.createElement("button",{className:this.getPlayerBtnClassName(),onClick:this.nudgePlayer,title:t.name},d.createElement("div",{className:"flex-column"},d.createElement(u.g,{icon:"user",className:"player-icon"}),d.createElement("div",{className:"player-name"},t.name,r&&" (You)"),l&&l(),1!=o&&(s?d.createElement("span",{className:"px-2 m-auto bg-success rounded text-white"},"Won"):d.createElement("div",null,d.createElement("div",{className:"text-center",style:{fontSize:"10px"}},d.createElement("b",null,"(",t.cardsCount,")")),a&&d.createElement("div",{className:"game-player-selected-card-back"},n&&d.createElement(a,{card:n,className:"game-player-selected-card game-player-selected-card-force"})))))))}}]),h}(d.Component)},8062:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x});var n=r(3029),a=r(2901),o=r(9417),s=r(5501),l=r(1801),i=r(3954),c=r(6540),d=r(4647),u=r(8529),p=r(1501),m=r(1107),f=r(624),h=function(){function e(){(0,n.A)(this,e)}return(0,a.A)(e,null,[{key:"buyCard",value:function(e,t){return new Promise((function(r,n){f.A.post("splendor/".concat(e,"/buy-card"),{chosenCardId:t}).then((function(e){return r(e)})).catch((function(e){return n(e)}))}))}},{key:"reserveCard",value:function(e,t){return new Promise((function(r,n){f.A.post("splendor/".concat(e,"/reserve-card"),{chosenCardId:t}).then((function(e){return r(e)})).catch((function(e){return n(e)}))}))}},{key:"takeCoin",value:function(e,t){return new Promise((function(r,n){f.A.post("splendor/".concat(e,"/take-coin"),{chosenCoinColor:t}).then((function(e){return r(e)})).catch((function(e){return n(e)}))}))}},{key:"returnTakenCoin",value:function(e,t){return new Promise((function(r,n){f.A.post("splendor/".concat(e,"/return-taken-coin"),{chosenCoinColor:t}).then((function(e){return r(e)})).catch((function(e){return n(e)}))}))}},{key:"resetTakenCoins",value:function(e){return new Promise((function(t,r){f.A.post("splendor/".concat(e,"/reset-taken-coins")).then((function(e){return t(e)})).catch((function(e){return r(e)}))}))}},{key:"endTurn",value:function(e){return new Promise((function(t,r){f.A.post("splendor/".concat(e,"/end-turn")).then((function(e){return t(e)})).catch((function(e){return r(e)}))}))}}]),e}(),y=r(7683),g=(r(6146),r(2543));var v="splendor",b=["white","blue","green","red","black","yellow"],C=["white","blue","green","red","black","yellow"];const x=function(e){(0,s.A)(x,e);var t,r,f=(t=x,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,i.A)(t);if(r){var a=(0,i.A)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,l.A)(this,e)});function x(){var e;return(0,n.A)(this,x),(e=f.call(this)).state=g.assign({myIndexInPlayersInGame:-1,amIPresentInPlayersInGame:!1,chosenCard:null,showConfirmEndTurnModal:!1},e.getInitialValues()),e.updateGameInfo=e.updateGameInfo.bind((0,o.A)(e)),e.updateReceived=e.updateReceived.bind((0,o.A)(e)),e.restartGame=e.restartGame.bind((0,o.A)(e)),e.handleError=y.A.handleError.bind((0,o.A)(e)),e}return(0,a.A)(x,[{key:"getInitialValues",value:function(){return{}}},{key:"updateGameInfo",value:function(e){var t=this;this.setState(this.getInitialValues(),(function(){return t.props.updateGameInfo(e)}))}},{key:"getPlayerCardCount",value:function(e,t){return c.createElement("td",{key:"player-coins-count-".concat(e)},c.createElement("div",{className:"player-resource-count player-resource-color-"+e+" player-cards-count"},t))}},{key:"getPlayerCardsCount",value:function(e){var t=this;return b.map((function(r){return t.getPlayerCardCount(r,"yellow"==r?t.props.game.playersReservedCardsCount[e._id]:t.props.game.playersResources[e._id][r].cards)}))}},{key:"getPlayerCoinsCount",value:function(e){var t=this;return C.map((function(r,n){return c.createElement("td",{key:"player-coins-count-".concat(n)},c.createElement("div",{className:"player-resource-count player-resource-color-"+r+" player-coins-count "},t.props.game.playersResources[e._id][r].coins))}))}},{key:"getPlayerAdditionalInfo",value:function(e){return c.createElement("div",{className:"player-additonal-info position-relative"},c.createElement("div",{className:"splendor-card-points"},this.props.game.playersPoints[e._id]),c.createElement("table",null,c.createElement("tbody",null,c.createElement("tr",null,this.getPlayerCardsCount(e)),c.createElement("tr",null,this.getPlayerCoinsCount(e)))))}},{key:"listPlayers",value:function(){var e=this,t=this.props.game.playersInGame;return c.createElement("div",{className:"d-flex flex-wrap px-1 mt-2"},t.map((function(t,r){return c.createElement(d.A,{key:r,gameId:e.props.game._id,gameName:v,player:t,isMe:t._id==e.props.me._id,currentPlayer:e.props.game.currentPlayer,amIAdmin:e.props.state.amIAdmin,additionalInfo:function(){return e.getPlayerAdditionalInfo(t)},hideInfo:!0})})))}},{key:"getPlayerTurnAlert",value:function(){return c.createElement("div",{className:"d-flex py-2"},c.createElement("span",{className:"m-auto sg-btn-".concat(this.props.isMyMove()?"danger":"trans"," ")},this.props.isMyMove()?c.createElement("b",null,"Your turn"):c.createElement("span",null,c.createElement("b",null,this.props.game.currentPlayer.name)," turn")))}},{key:"amISpectating",value:function(){return!this.props.state.amIPresentInPlayers&&c.createElement("div",{className:"alert alert-warning text-center"},c.createElement("b",null,"You are spectaing the Game"))}},{key:"getCardType",value:function(e){var t=[],r=[];switch(e){case"openedLevel3Cards":t.push(c.createElement("div",{key:"level3",className:"dot"}));case"openedLevel2Cards":t.push(c.createElement("div",{key:"level2",className:"dot"}));case"openedLevel1Cards":t.push(c.createElement("div",{key:"level1",className:"dot"})),r.push(c.createElement("div",{key:"card-label",className:"card-label"},"Splendor"))}return c.createElement("div",{className:"splendor-card ".concat(e)},r,c.createElement("div",{className:"dots"},t))}},{key:"takeCoin",value:function(e){this.props.isMyMove()&&h.takeCoin(this.props.game._id,e).then(this.props.updateGameInfo).catch(this.handleError)}},{key:"getCoin",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};return c.createElement("div",{key:"coin-".concat(e),className:"splendor-coin ".concat(e),onClick:function(){return r()}},t)}},{key:"setChosenCard",value:function(e){this.props.isMyMove()&&this.setState({chosenCard:e})}},{key:"getCard",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.cardId,a=e.points,o=e.resourcesNeeded,s=e.cardColor,l=parseInt(n.split("_")[2]),i=this.props.game.currentPlayerPossibleActionStatus||{},d=r&&this.props.isMyMove()&&g.indexOf(this.props.game.currentPlayerPossibleCardsToBuy||[],n)>-1&&(g.startsWith(n,"noble")&&i.noble||g.startsWith(n,"level")&&i.resource);return c.createElement("div",{key:e.cardId,className:"splendor-card ".concat(n," ").concat(d&&"zoom-animi"),onClick:function(){return r&&t.setChosenCard(e)}},c.createElement("div",{className:"splendor-card-bg splendor-card-bg-img-".concat(l%6+1)}),c.createElement("div",{className:"d-flex position-relative"},a>0&&c.createElement("div",{className:"splendor-card-points"},a),s&&c.createElement("div",{className:"splendor-card-color ml-auto"},this.getCoin(s,""))),c.createElement("div",{className:"splendor-coins"},Object.keys(o).map((function(e){return t.getCoin(e,o[e])}))))}},{key:"getCards",value:function(e){var t=this,r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.props.game[e];return n.length>0&&c.createElement("div",{className:"d-flex flex-wrap splendor-cards"},r&&this.getCardType(e),n.map((function(e){return t.getCard(e,!0)})))}},{key:"getAvailableCoinCount",value:function(e){var t=this.props.game,r=t.availableCoins,n=t.currentPlayerTakenCoins;return this.props.isMyMove()?r[e]-(n[e]||0):r[e]}},{key:"getAvailableCoins",value:function(){var e=this;return c.createElement("div",{className:"splendor-coins splendor-available-coins"},C.map((function(t){return e.getCoin(t,e.getAvailableCoinCount(t),(function(){return e.takeCoin(t)}))})))}},{key:"returnTakenCoin",value:function(e){this.props.isMyMove()&&h.returnTakenCoin(this.props.game._id,e).then(this.props.updateGameInfo).catch(this.handleError)}},{key:"resetTakenCoins",value:function(){this.props.isMyMove()&&h.resetTakenCoins(this.props.game._id).then(this.props.updateGameInfo).catch(this.handleError)}},{key:"getTakenCoins",value:function(){var e=this;if(this.props.isMyMove()){var t=this.props.game.currentPlayerTakenCoins,r=0;return Object.values(t).forEach((function(e){return r+=e})),r>0&&c.createElement("div",{className:"splendor-taken-coins"},"Taken Coins",c.createElement("div",{className:"splendor-coins"},C.map((function(r){return t[r]>0&&e.getCoin(r,t[r],(function(){return e.returnTakenCoin(r)}))}))),c.createElement("button",{className:"sg-btn-danger m-auto",onClick:function(){return e.resetTakenCoins()}},"Reset Taken Coins"))}}},{key:"confirmEndTurn",value:function(){h.endTurn(this.props.game._id).then(this.props.updateGameInfo).catch(this.handleError)}},{key:"setShowConfirmEndTurnModal",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};this.setState({showConfirmEndTurnModal:e},t)}},{key:"endTurn",value:function(){if(this.props.isMyMove()){var e=this.props.game.currentPlayerPossibleActionStatus;if(e.noble&&e.resource&&0==g.sum(Object.values(this.props.game.currentPlayerTakenCoins)))return this.setShowConfirmEndTurnModal(!0);this.confirmEndTurn()}}},{key:"getEndTurnButton",value:function(){var e=this;return this.props.isMyMove()&&c.createElement("div",{className:"end-turn"},c.createElement("button",{className:"m-auto sg-btn-primary",onClick:function(){return e.endTurn()}},"End Turn"))}},{key:"getReservedCards",value:function(){return this.props.state.amIPresentInPlayers&&this.props.game.playerReservedCards.length>0&&c.createElement("div",{className:"reserved-cards"},c.createElement("div",{className:"reserved-card-label"},"Reserved Cards"),this.getCards("playerReservedCards",!1))}},{key:"buyChosenCard",value:function(){var e=this;this.props.isMyMove()&&h.buyCard(this.props.game._id,this.state.chosenCard.cardId).then((function(t){e.setChosenCard(null),e.props.updateGameInfo(t)})).catch(this.handleError)}},{key:"reserveChosenCard",value:function(){var e=this;this.props.isMyMove()&&h.reserveCard(this.props.game._id,this.state.chosenCard.cardId).then((function(t){e.setChosenCard(null),e.props.updateGameInfo(t)})).catch(this.handleError)}},{key:"getBuyOrReserveModalBody",value:function(){var e=this,t=this.state.chosenCard.cardId,r=g.indexOf(this.props.game.currentPlayerPossibleCardsToBuy,t)>-1,n=this.props.game.playerReservedCards.length<3&&-1==g.findIndex(this.props.game.playerReservedCards,{cardId:t})&&g.startsWith(t,"level");return c.createElement("div",{className:"d-flex flex-column"},r&&c.createElement("button",{className:"sg-btn-primary m-2",onClick:function(){return e.buyChosenCard()}},"Buy"),n&&c.createElement("button",{className:"sg-btn-warning m-2",onClick:function(){return e.reserveChosenCard()}},"Reserve"),c.createElement("button",{className:"sg-btn-danger m-2",onClick:function(){return e.setChosenCard(null)}},"Close"))}},{key:"getBuyOrReserveModal",value:function(){return this.props.isMyMove()&&this.state.chosenCard&&c.createElement(u.A,{hideClose:!0,show:!0,header:this.getCard(this.state.chosenCard),body:this.getBuyOrReserveModalBody()})}},{key:"getConfirmEndTurnModal",value:function(){var e=this;return this.props.isMyMove()&&c.createElement(p.A,{id:"confirmEndTurnModal",title:"You haven't took any action. Are you sure you want to end turn?",show:this.state.showConfirmEndTurnModal,onYes:function(){return e.setShowConfirmEndTurnModal(!1,e.confirmEndTurn)},onNo:function(){return e.setShowConfirmEndTurnModal(!1)}})}},{key:"getGameCards",value:function(){return c.createElement("div",{className:"splendor-cards-layout"},this.getCards("openedNobleCards"),this.getCards("openedLevel3Cards"),this.getCards("openedLevel2Cards"),this.getCards("openedLevel1Cards"),this.getAvailableCoins(),this.getTakenCoins(),this.getEndTurnButton(),this.getReservedCards(),this.getBuyOrReserveModal(),this.getConfirmEndTurnModal())}},{key:"renderGame",value:function(){return c.createElement("div",{className:"d-flex flex-column"},this.getPlayerTurnAlert(),this.listPlayers(),this.amISpectating(),this.getGameCards())}},{key:"restartGame",value:function(){m.A.restartGame(v,this.props.game._id).then(this.props.updateGameInfo).catch(this.handleError)}},{key:"renderGameResults",value:function(){var e=this,t=g.max(Object.values(this.props.game.playersPoints));return c.createElement("div",{className:"game-result text-center"},c.createElement("div",{className:"alert alert-success text-center m-0 rounded-top rounded-bottom-0",style:{boxShadow:"0 0 5px white"}},c.createElement("b",null,"Game Results")),c.createElement("div",{className:"game-result-table"},c.createElement("table",{className:"table table-hover table-light table-striped rounded-bottom",style:{boxShadow:"0 0 5px white"}},c.createElement("thead",null,c.createElement("tr",null,c.createElement("th",{scope:"col"},"Rank"),c.createElement("th",{scope:"col"},"Name"),c.createElement("th",{scope:"col"},"Points"),c.createElement("th",{scope:"col"},"Status"))),c.createElement("tbody",null,g.reverse(g.sortBy(this.props.game.playersInGame,(function(t){return e.props.game.playersPoints[t._id]}))).map((function(r,n){return c.createElement("tr",{key:n},c.createElement("td",null,"#",n+1),c.createElement("td",null,r.name," ",r._id==e.props.me._id?c.createElement("b",null,"(You)"):""),c.createElement("td",null,e.props.game.playersPoints[r._id]),c.createElement("td",null,e.props.game.playersPoints[r._id]==t?"Won":"Lost"))}))))),this.props.state.amIAdmin&&c.createElement("div",{className:"d-flex"},c.createElement("button",{className:"btn btn-primary m-auto btn-shadow",onClick:this.restartGame},"Restart")))}},{key:"prepareFields",value:function(e){var t=g.findIndex(e.game.playersInGame,{_id:e.me._id});this.setState({myIndexInPlayersInGame:t,amIPresentInPlayersInGame:-1!=t})}},{key:"render",value:function(){switch(this.props.game.status){case"STARTED":return this.renderGame();case"ENDED":return[this.listPlayers(),this.renderGameResults()]}}},{key:"componentDidMount",value:function(){this.prepareFields(this.props)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.prepareFields(e)}},{key:"updateReceived",value:function(e){switch(e.event){case"PLAYER_ENDED_TURN":case"PLAYER_LEFT_GAME":this.props.getGameInfo()}}}]),x}(c.Component)},1107:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var n=r(3029),a=r(2901),o=r(624),s=function(){function e(){(0,n.A)(this,e)}return(0,a.A)(e,null,[{key:"getGameInfo",value:function(e,t){return new Promise((function(r,n){o.A.get("game/".concat(t,"/info"),{gameName:e}).then((function(e){return r(e)})).catch((function(e){return n(e)}))}))}},{key:"startGame",value:function(e,t){return new Promise((function(r,n){o.A.post("".concat(e,"/").concat(t,"/start")).then((function(e){return r(e)})).catch((function(e){return n(e)}))}))}},{key:"restartGame",value:function(e,t){return new Promise((function(r,n){o.A.post("game/".concat(t,"/restart"),{gameName:e}).then((function(e){return r(e)})).catch((function(e){return n(e)}))}))}},{key:"leaveGame",value:function(e,t){return new Promise((function(r,n){o.A.post("".concat(e,"/").concat(t,"/leave")).then((function(e){return r(e)})).catch((function(e){return n(e)}))}))}},{key:"sendMessage",value:function(e,t,r){return new Promise((function(n,a){o.A.post("game/".concat(t,"/message"),{gameName:e,text:r}).then((function(e){return n(e)})).catch((function(e){return a(e)}))}))}},{key:"nudgePlayer",value:function(e,t,r){return new Promise((function(n,a){o.A.post("game/".concat(t,"/nudge"),{gameName:e,playerId:r}).then((function(e){return n(e)})).catch((function(e){return a(e)}))}))}}]),e}()},7683:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var n=r(8669),a=r(4692);function o(e){a("#".concat(e)).trigger("play")}function s(){o("error-notify")}const l={audios:["new-notify","error-notify","light-notify","buzz-notify"],playNewNotify:function(){o("new-notify")},playErrorNotify:s,playLightNotify:function(){o("light-notify")},playBuzzNotify:function(){o("buzz-notify")},vibrate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:200;window.navigator.vibrate(e)},resetStateGetGameInfo:function(){this.setState(this.getInitialValues(),this.props.getGameInfo())},resetStateUpdateGameInfo:function(e){var t=this;this.setState(this.getInitialValues(),(function(){return t.props.updateGameInfo(e)}))},handleError:function(e){s();var t=e.message||"Error Occurred";n.oR.error(t,{toastId:t}),this.setState(this.getInitialValues())}}},8529:(e,t,r)=>{"use strict";r.d(t,{A:()=>c});var n=r(3029),a=r(2901),o=r(5501),s=r(1801),l=r(3954),i=r(6540);r(9382);var c=function(e){(0,o.A)(d,e);var t,r,c=(t=d,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,l.A)(t);if(r){var a=(0,l.A)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,s.A)(this,e)});function d(){return(0,n.A)(this,d),c.apply(this,arguments)}return(0,a.A)(d,[{key:"getCloseButton",value:function(e){return i.createElement("button",{className:"sg-modal-close-btn opacity-".concat(e?1:0),onClick:this.props.onClose},"×")}},{key:"render",value:function(){var e=this.props,t=e.header,r=e.body,n=e.show,a=e.hideClose;return i.createElement("div",{className:"sg-modal","data-show":n},i.createElement("div",{className:"sg-modal-content-outer"},i.createElement("div",{className:"sg-modal-content"},i.createElement("div",{className:"sg-modal-header"},this.getCloseButton(!1),t,this.getCloseButton(!a)),i.createElement("div",{className:"sg-modal-body"},r))))}}]),d}(i.PureComponent)},1501:(e,t,r)=>{"use strict";r.d(t,{A:()=>d});var n=r(3029),a=r(2901),o=r(5501),s=r(1801),l=r(3954),i=r(6540),c=r(8529);r(216);var d=function(e){(0,o.A)(u,e);var t,r,d=(t=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,l.A)(t);if(r){var a=(0,l.A)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,s.A)(this,e)});function u(){return(0,n.A)(this,u),d.apply(this,arguments)}return(0,a.A)(u,[{key:"getHeader",value:function(){return this.props.title||"Are you sure?"}},{key:"getBody",value:function(){return i.createElement("div",{className:"sg-confirm-modal-body"},i.createElement("button",{className:"sg-btn-danger",onClick:this.props.onYes},"Yes"),i.createElement("button",{className:"sg-btn-primary",onClick:this.props.onNo},"No"))}},{key:"render",value:function(){return i.createElement(c.A,{show:this.props.show,onClose:this.props.onClose,hideClose:!0,header:this.getHeader(),body:this.getBody()})}}]),u}(i.PureComponent)},5069:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var n=r(1601),a=r.n(n),o=r(6314),s=r.n(o)()(a());s.push([e.id,".sg-modal{position:fixed;z-index:-1;opacity:0;transition:z-index .5s,opacity .6s;top:0;left:0;height:100%;width:100%;background-color:rgba(0,0,0,.5)}.sg-modal .sg-modal-content-outer{height:100%;width:100%;overflow:auto;display:flex;padding:5px}.sg-modal .sg-modal-content{margin:auto;background:#3a0455;border-radius:10px;box-shadow:0 0 5px #fff}.sg-modal .sg-modal-content .sg-modal-header{position:relative;padding:5px;border-bottom:1px solid #fff;color:#fff;text-align:center;display:flex}.sg-modal .sg-modal-content .sg-modal-header .sg-modal-close-btn{padding:0;height:20px;width:20px;background:#da5454;font-size:12px;border-radius:100%;color:#fff;text-align:center;margin:auto}.sg-modal .sg-modal-content .sg-modal-body{padding:10px}.sg-modal[data-show=true]{z-index:100;opacity:1}",""]);const l=s},2433:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var n=r(1601),a=r.n(n),o=r(6314),s=r.n(o)()(a());s.push([e.id,".sg-confirm-modal-body{display:flex;padding:5px 0}.sg-confirm-modal-body button{width:50px;color:#fff;border-radius:5px;margin:auto}.sg-confirm-modal-body .yes-btn{background:#da5454}.sg-confirm-modal-body .no-btn{background:#1976d2}",""]);const l=s},1165:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var n=r(1601),a=r.n(n),o=r(6314),s=r.n(o)()(a());s.push([e.id,".player-card-outer{margin:10px auto}.player-card-outer .player-card{width:70px;margin:auto 5px;border-radius:5px !important}.player-card-outer .player-name,.player-card-outer .player-additonal-info{font-weight:bold;font-size:12px;overflow:hidden;text-overflow:ellipsis}.player-card-outer .player-icon{margin:5px auto;font-size:15px}",""]);const l=s},5180:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>k});var n=r(1601),a=r.n(n),o=r(6314),s=r.n(o),l=r(4417),i=r.n(l),c=new URL(r(973),r.b),d=new URL(r(9206),r.b),u=new URL(r(3007),r.b),p=new URL(r(4976),r.b),m=new URL(r(9177),r.b),f=new URL(r(8613),r.b),h=s()(a()),y=i()(c),g=i()(d),v=i()(u),b=i()(p),C=i()(m),x=i()(f);h.push([e.id,`.player-additonal-info{background:#fff;padding:3px;border-radius:5px;display:flex;flex-direction:column;justify-content:center;border:1px #000 solid;overflow:visible !important}.player-additonal-info .splendor-card-points{top:-10px;right:-10px;border-top-right-radius:50%;border-bottom-left-radius:50%}.player-additonal-info .player-resource-count{color:#fff;padding:3px 5px;border-radius:3px}.player-additonal-info .player-resource-color-white{background-color:purple}.player-additonal-info .player-resource-color-blue{background-color:blue}.player-additonal-info .player-resource-color-green{background-color:green}.player-additonal-info .player-resource-color-red{background-color:red}.player-additonal-info .player-resource-color-black{background-color:#000}.player-additonal-info .player-resource-color-yellow{background-color:#daa520}.player-additonal-info .player-coins-count{border-radius:20px}.player-card{width:140px !important;padding:5px !important}.splendor-card-points{position:absolute;height:18px;width:18px;background:brown;border:1px solid #fff;display:flex;justify-content:center;align-items:center;color:#fff}.splendor-cards-layout{display:flex;flex-direction:column;margin:auto}.splendor-cards-layout .splendor-cards{margin:2px 20px}.splendor-cards-layout .splendor-card{position:relative;height:70px;width:55px;margin:5px 7px;border-radius:5px;padding:1px;border:2px #fff solid;display:flex;flex-direction:column}.splendor-cards-layout .splendor-card .card-label{margin:auto;color:#fff;font-size:10px;font-weight:bold}.splendor-cards-layout .splendor-card .dots{display:flex;flex-wrap:wrap;margin:auto auto 5px}.splendor-cards-layout .splendor-card .dots .dot{margin:2px;background:#fff;padding:5px;border-radius:100%}.splendor-cards-layout .splendor-card .splendor-card-points{height:15px;width:15px;font-size:12px;top:-10px;left:-10px;border-top-left-radius:50%;border-bottom-right-radius:50%}.splendor-cards-layout .splendor-card .splendor-card-color .splendor-coin{height:17px;width:17px;margin:2px}.splendor-cards-layout .splendor-card .splendor-coins{z-index:1;margin:auto 1px 1px}.splendor-cards-layout .splendor-card .splendor-coins .splendor-coin{height:16px;width:16px;border-width:1px;font-size:10px;margin:1px}.splendor-cards-layout .splendor-card.openedNobleCards{border:none;outline:none}.splendor-cards-layout .splendor-card[class*=opened]:not([class*=openedNoble]){box-shadow:4px 3px 0 #fff}.splendor-cards-layout .splendor-card:not([class*=opened]){cursor:pointer}.splendor-cards-layout .splendor-card[class*=noble]{background:#ffb6c1;border-color:gold;height:70px}.splendor-cards-layout .splendor-card[class*=level3 i]{background:#4682b4}.splendor-cards-layout .splendor-card[class*=level2 i]{background:#deb887}.splendor-cards-layout .splendor-card[class*=level1 i]{background:#90ee90}.splendor-cards-layout .splendor-card-bg{position:absolute;height:65px;width:50px;background-size:cover;z-index:0}.splendor-cards-layout .splendor-card-bg-img-1{background-image:url(${y})}.splendor-cards-layout .splendor-card-bg-img-2{background-image:url(${g})}.splendor-cards-layout .splendor-card-bg-img-3{background-image:url(${v})}.splendor-cards-layout .splendor-card-bg-img-4{background-image:url(${b})}.splendor-cards-layout .splendor-card-bg-img-5{background-image:url(${C})}.splendor-cards-layout .splendor-card-bg-img-6{background-image:url(${x})}.splendor-cards-layout .splendor-coins{display:flex;flex-wrap:wrap-reverse;margin:5px 20px}.splendor-cards-layout .splendor-coin{height:30px;width:30px;margin:5px;border-radius:100%;border:2px #fff solid;display:flex;justify-content:center;align-items:center;color:#fff}.splendor-cards-layout .splendor-coin.white{background:purple}.splendor-cards-layout .splendor-coin.blue{background:blue}.splendor-cards-layout .splendor-coin.green{background:green}.splendor-cards-layout .splendor-coin.red{background:red}.splendor-cards-layout .splendor-coin.black{background:#000}.splendor-cards-layout .splendor-coin.yellow{background:#daa520}.splendor-cards-layout .splendor-taken-coins .splendor-coins{margin:5px 30px}.splendor-cards-layout .reserved-cards .splendor-card{margin:5px auto}.splendor-cards-layout .splendor-available-coins .splendor-coin,.splendor-cards-layout .splendor-taken-coins .splendor-coin{cursor:pointer;margin:5px auto}.splendor-cards-layout .splendor-taken-coins,.splendor-cards-layout .reserved-cards{display:flex;flex-direction:column;text-align:center;color:#fff;border:1px #fff solid;border-radius:10px;padding:5px}.splendor-cards-layout .reserved-card-label{text-align:center;color:#fff}.splendor-cards-layout .end-turn{display:flex;justify-content:center;margin:5px}.splendor-cards-layout .sg-confirm-modal-body button{margin:auto}`,""]);const k=h},4417:e=>{"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},9382:(e,t,r)=>{var n=r(5072),a=r(5069);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.id,a,""]]);n(a,{insert:"head",singleton:!1}),e.exports=a.locals||{}},216:(e,t,r)=>{var n=r(5072),a=r(2433);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.id,a,""]]);n(a,{insert:"head",singleton:!1}),e.exports=a.locals||{}},2160:(e,t,r)=>{var n=r(5072),a=r(1165);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.id,a,""]]);n(a,{insert:"head",singleton:!1}),e.exports=a.locals||{}},6146:(e,t,r)=>{var n=r(5072),a=r(5180);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.id,a,""]]);n(a,{insert:"head",singleton:!1}),e.exports=a.locals||{}},973:(e,t,r)=>{"use strict";e.exports=r.p+"091ae553759827b42f11.png"},9206:(e,t,r)=>{"use strict";e.exports=r.p+"633dd98d57c5103af296.png"},3007:(e,t,r)=>{"use strict";e.exports=r.p+"d15b0bbf2155d894f755.png"},4976:(e,t,r)=>{"use strict";e.exports=r.p+"38025ba8ee5a522c3b30.png"},9177:(e,t,r)=>{"use strict";e.exports=r.p+"d1b7933dfbb09112c732.png"},8613:(e,t,r)=>{"use strict";e.exports=r.p+"70aca55005c2ec9f822a.png"}}]);