(self.webpackChunkgames_ui=self.webpackChunkgames_ui||[]).push([[658],{7674:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var r=a(5671),n=a(3144),o=a(136),s=a(6215),c=a(1120),i=a(7294),l=(a(5111),a(6486));var u=function(e){(0,o.Z)(d,e);var t,a,u=(t=d,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,c.Z)(t);if(a){var n=(0,c.Z)(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return(0,s.Z)(this,e)});function d(){return(0,r.Z)(this,d),u.call(this)}return(0,n.Z)(d,[{key:"getOnClick",value:function(){var e=this.props,t=e.card,a=e.onClick;return 1!=e.disabled&&"function"==typeof a?function(){return a(t)}:function(){}}},{key:"getTextColorClass",value:function(){switch(this.props.card.type){case"SPADE":case"CLUB":return"text-dark";default:return"text-danger"}}},{key:"getCardClass",value:function(){var e=this.props,t=e.isChosenCard,a=e.className;return["game-card",t?"game-chosen-card":"",this.getTextColorClass(),a].join(" ")}},{key:"getJokerCard",value:function(){var e=l.toArray("JOKER").map((function(e,t){return i.createElement("div",{key:t},e)}));return i.createElement("div",{className:"d-flex joker-card text-danger"},i.createElement("div",{className:"left"},e),i.createElement("div",{className:"center"},i.createElement("img",{src:"/games/assets/images/joker.png"})),i.createElement("div",{className:"right"},e))}},{key:"getLayer",value:function(e,t,a){return i.createElement("div",{className:"d-flex flex-column ".concat(a)},e,t)}},{key:"getNumberCard",value:function(e){var t=i.createElement("div",{className:"game-card-corner-text"},e.number);return i.createElement("div",{className:"position-relative h-100 w-100 d-flex flex-column game-card-body"},this.getLayer(t,i.createElement("div",{className:"".concat(e.type,"-icon game-card-corner-icon")}),"mbr-auto"),this.getLayer("",i.createElement("div",{className:"".concat(e.type,"-icon game-card-center-icon")}),""),this.getLayer(i.createElement("div",{className:"".concat(e.type,"-icon game-card-corner-icon")}),t,"mlt-auto"))}},{key:"getGameCardBody",value:function(){var e=this.props.card;return"JOKER"===e.type?this.getJokerCard():this.getNumberCard(e)}},{key:"render",value:function(){return i.createElement("div",{onClick:this.getOnClick(),className:this.getCardClass()},this.getGameCardBody())}}]),d}(i.Component)},1658:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>v});var r=a(5671),n=a(3144),o=a(7326),s=a(136),c=a(6215),i=a(1120),l=a(7294),u=a(1977),d=a(818),m=a(6431),p=function(){function e(){(0,r.Z)(this,e)}return(0,n.Z)(e,null,[{key:"submitChosenCards",value:function(e,t){return new Promise((function(a,r){m.Z.post("leastcount/".concat(e,"/submit"),t).then((function(e){return a(e)})).catch((function(e){return r(e)}))}))}},{key:"takeCard",value:function(e,t){return new Promise((function(a,r){m.Z.post("leastcount/".concat(e,"/take"),t).then((function(e){return a(e)})).catch((function(e){return r(e)}))}))}},{key:"noShow",value:function(e){return new Promise((function(t,a){m.Z.post("leastcount/".concat(e,"/no-show")).then((function(e){return t(e)})).catch((function(e){return a(e)}))}))}},{key:"showCards",value:function(e){return new Promise((function(t,a){m.Z.post("leastcount/".concat(e,"/show")).then((function(e){return t(e)})).catch((function(e){return a(e)}))}))}},{key:"continueGame",value:function(e){return new Promise((function(t,a){m.Z.post("leastcount/".concat(e,"/continue")).then((function(e){return t(e)})).catch((function(e){return a(e)}))}))}}]),e}(),h=a(7674),f=a(3352),g=a(6486);var y="leastcount";const v=function(e){(0,s.Z)(v,e);var t,a,m=(t=v,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,i.Z)(t);if(a){var n=(0,i.Z)(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return(0,c.Z)(this,e)});function v(){var e;return(0,r.Z)(this,v),(e=m.call(this)).state=g.assign({},g.cloneDeep(e.getInitialValues())),e.updateReceived=e.updateReceived.bind((0,o.Z)(e)),e.handleChosenCard=e.handleChosenCard.bind((0,o.Z)(e)),e.submitChosenCards=e.submitChosenCards.bind((0,o.Z)(e)),e.takeCard=e.takeCard.bind((0,o.Z)(e)),e.noShow=e.noShow.bind((0,o.Z)(e)),e.continueGame=e.continueGame.bind((0,o.Z)(e)),e.showCards=e.showCards.bind((0,o.Z)(e)),e.restartGame=e.restartGame.bind((0,o.Z)(e)),e.resetStateGetGameInfo=f.Z.resetStateGetGameInfo.bind((0,o.Z)(e)),e.handleError=f.Z.handleError.bind((0,o.Z)(e)),e}return(0,n.Z)(v,[{key:"getInitialValues",value:function(){return{chosenCards:[],submitFlag:!1,decideFlag:!1}}},{key:"listPlayers",value:function(){var e=this,t=this.props.game.players;return l.createElement("div",{className:"d-flex flex-wrap px-1 mt-2"},t.map((function(t,a){return l.createElement(u.Z,{key:a,gameId:e.props.game._id,gameName:y,player:t,isMe:t._id==e.props.me._id,currentPlayer:e.props.game.currentPlayer,amIAdmin:e.props.state.amIAdmin})})))}},{key:"takeCard",value:function(e){p.takeCard(this.props.game._id,{takeFrom:e}).then(this.props.getGameInfo).catch(this.handleError)}},{key:"getBorderedCard",value:function(e,t,a){return l.createElement("div",{className:"border-white rounded-circle m-auto d-flex",style:{height:"120px",width:"120px",borderWidth:"2px",borderStyle:"solid"}},l.createElement(h.Z,{card:e,className:"m-auto ".concat(a?"":"zoom-animi"),disabled:a,onClick:t}))}},{key:"getDeckAndLastCard",value:function(){var e=this,t=this.props.game,a=t.lastCards,r=t.currentPlayerAction;return l.createElement("div",{className:"d-flex my-2"},this.getBorderedCard({color:"info",type:""},(function(){return e.takeCard("DECK")}),!this.props.state.isMyMove||"TAKE"!=r),this.getBorderedCard(a.length?a[0]:{},(function(){return e.takeCard("LASTCARD")}),!this.props.state.isMyMove||"TAKE"!=r))}},{key:"showCards",value:function(){var e=this;this.setState({decideFlag:!0},(function(){p.showCards(e.props.game._id).then(e.props.getGameInfo).catch(e.handleError)}))}},{key:"noShow",value:function(){var e=this;this.setState({decideFlag:!0},(function(){p.noShow(e.props.game._id).then(e.props.getGameInfo).catch(e.handleError)}))}},{key:"submitChosenCards",value:function(){var e=this,t={chosenCards:this.state.chosenCards};this.setState({submitFlag:!0},(function(){p.submitChosenCards(e.props.game._id,t).then(e.resetStateGetGameInfo).catch(e.handleError)}))}},{key:"handleChosenCard",value:function(e){var t=g.findIndex(this.state.chosenCards,e);-1==t?this.state.chosenCards.push(e):this.state.chosenCards.splice(t,1),this.setState({chosenCards:this.state.chosenCards})}},{key:"getCurrentPlayerDroppedCards",value:function(){var e=this.props.game,t=e.currentPlayerDroppedCards,a=e.currentPlayerAction,r=e.currentPlayer;return"TAKE"==a&&l.createElement("div",{className:"d-flex flex-column mt-2 border border-white rounded"},l.createElement("div",{className:"alert alert-primary text-center py-0 rounded-0"},this.props.state.isMyMove?"Your":r.name," Dropped Cards"),l.createElement("div",{className:"d-flex flex-wrap p-2"},g.sortBy(t,["number","type"]).map((function(e,t){return l.createElement(h.Z,{key:t,disabled:!0,chosenCards:[],card:e,className:"mx-auto"})}))))}},{key:"isChosenCard",value:function(e){var t=this.state.chosenCards;return g.find(t,e)}},{key:"getMyCards",value:function(){var e=this,t=this.props.game,a=t.myCards,r=t.currentPlayerAction;return l.createElement("div",{className:"d-flex flex-wrap p-2 mt-2"},g.sortBy(a,["point","number","type"]).map((function(t,a){return l.createElement(h.Z,{onClick:e.handleChosenCard,key:a,disabled:!e.props.state.isMyMove||"SUBMIT"!=r,isChosenCard:e.isChosenCard(t),card:g.assign(t,{ind:a})})})))}},{key:"getActionText",value:function(){switch(this.props.game.currentPlayerAction){case"SUBMIT":return"Drop card";case"TAKE":return"Take card";case"DECIDE":return"Choose Show or Play"}}},{key:"getPlayerTurnAlert",value:function(){var e=this.props.state.isMyMove,t=this.props.game.currentPlayer;return l.createElement("div",{className:"d-flex py-2"},l.createElement("span",{style:{boxShadow:"0 0 5px white"},className:"m-auto px-3 rounded text-white bg-".concat(this.props.state.isMyMove?"danger":"secondary"," ")},l.createElement("div",{className:"text-center"},e?l.createElement("b",null,"Your turn"):l.createElement("span",null,"Player ",l.createElement("b",null,t.name)," turn")),l.createElement("div",{className:"text-center"},!e&&l.createElement("span",null,l.createElement("b",null,t.name)," has to")," ",this.getActionText())))}},{key:"getGameButtons",value:function(){var e=this.props.state.isMyMove,t=this.props.game.currentPlayerAction,a=this.state,r=a.submitFlag,n=!a.decideFlag&&e&&"DECIDE"==t,o=!r&&e&&"SUBMIT"==t&&this.state.chosenCards.length;return l.createElement("div",{className:"d-flex my-2"},l.createElement("button",{disabled:!o,style:{boxShadow:"5px 5px 10px black"},className:"btn btn-success m-auto font-weight-bold btn-shadow ".concat(o&&"zoom-animi"),onClick:this.submitChosenCards},"Submit"),l.createElement("button",{disabled:!n,style:{boxShadow:"5px 5px 10px black"},className:"btn btn-danger m-auto font-weight-bold btn-shadow ".concat(n&&"zoom-animi"),onClick:this.showCards},"Show"),l.createElement("button",{disabled:!n,style:{boxShadow:"5px 5px 10px black"},className:"btn btn-primary m-auto font-weight-bold btn-shadow ".concat(n&&"zoom-animi"),onClick:this.noShow},"Play"))}},{key:"getMyPoints",value:function(){return this.props.state.amIPresentInPlayers&&l.createElement("div",{className:"my-2 text-center text-white"},"Points : ",this.props.game.myPoints)}},{key:"renderGame",value:function(){return l.createElement("div",{className:"d-flex flex-column"},this.getPlayerTurnAlert(),this.listPlayers(),this.getCurrentPlayerDroppedCards(),this.getDeckAndLastCard(),this.getGameButtons(),this.getMyPoints(),this.getMyCards())}},{key:"continueGame",value:function(){p.continueGame(this.props.game._id).then(this.props.getGameInfo).catch(this.handleError)}},{key:"restartGame",value:function(){d.Z.restartGame(y,this.props.game._id).then(this.props.getGameInfo).catch(this.handleError)}},{key:"renderGameResults",value:function(){var e=this,t=this.props.game,a=t.players,r=t.playersTotalPoints,n=t.status,o=t.rounds,s=g.nth(o,-1),c=s.showResult,i=s.playersPoints,u=s.showedBy;return l.createElement("div",{className:"game-result text-center"},l.createElement("div",{className:"alert alert-success text-center m-0 rounded-top rounded-bottom-0",style:{boxShadow:"0 0 5px white"}},l.createElement("b",{className:"text-underline"},"ENDED"==n?"Final":"Current Round"," Results"),l.createElement("div",null,l.createElement("b",null,u._id==this.props.me._id?"You":u.name)," showed cards and its ",l.createElement("b",null,c)," show")),l.createElement("div",{className:"game-result-table"},l.createElement("table",{className:"table table-hover table-light table-striped rounded-bottom",style:{boxShadow:"0 0 5px white"}},l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",{scope:"col"},"Rank"),l.createElement("th",{scope:"col"},"Name"),l.createElement("th",{scope:"col"},"Points"),"ENDED"==n&&l.createElement("th",{scope:"col"},"Status"))),l.createElement("tbody",null,g.sortBy(a,(function(e){return r[e._id]})).map((function(t,o){return l.createElement("tr",{key:o},l.createElement("td",{scope:"row"},o+1),l.createElement("td",null,t._id==e.props.me._id?"You":t.name),l.createElement("td",null,l.createElement("b",null,r[t._id])," (+",i[t._id],")"),"ENDED"==n&&l.createElement("td",null,o==a.length-1?"LOST":"WON"))}))))),this.props.state.amIAdmin&&l.createElement("div",{className:"d-flex"},l.createElement("button",{className:"btn btn-primary m-auto btn-shadow",onClick:"ENDED"==n?this.restartGame:this.continueGame},"ENDED"==n?"Restart":"Continue")))}},{key:"render",value:function(){switch(this.props.game.status){case"STARTED":return this.renderGame();case"PLAYER_SHOWED":case"ENDED":return this.renderGameResults()}}},{key:"updateReceived",value:function(e){return this.props.getGameInfo()}}]),v}(l.Component)},1977:(e,t,a)=>{"use strict";a.d(t,{Z:()=>h});var r=a(5671),n=a(3144),o=a(7326),s=a(136),c=a(6215),i=a(1120),l=a(4942),u=a(7294),d=a(7814),m=a(818),p=a(3352);a(8803);var h=function(e){(0,s.Z)(f,e);var t,a,h=(t=f,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,i.Z)(t);if(a){var n=(0,i.Z)(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return(0,c.Z)(this,e)});function f(){var e;return(0,r.Z)(this,f),e=h.call(this),(0,l.Z)((0,o.Z)(e),"nudgePlayer",(function(){var t=e.props,a=t.isMe,r=t.amIAdmin;if(!a&&r){var n=e.props,o=n.gameName,s=n.gameId,c=n.player;m.Z.nudgePlayer(o,s,c._id).catch(e.handleError)}})),e.handleError=p.Z.handleError.bind((0,o.Z)(e)),e}return(0,n.Z)(f,[{key:"getPlayerBorderColor",value:function(){return"sg-border-".concat(this.props.isMe?"warning":"primary")}},{key:"isPlayerCurrentPlayer",value:function(){var e=this.props,t=e.currentPlayer,a=e.player;return t&&t._id==a._id}},{key:"getPlayerBtn",value:function(){return"sg-btn".concat(this.isPlayerCurrentPlayer()?"-light":"")}},{key:"getPlayerBtnClassName",value:function(){return["player-card",this.getPlayerBtn(),this.getPlayerBorderColor()].join(" ")}},{key:"render",value:function(){var e=this.props,t=e.player,a=e.isMe,r=e.playerChosenCard,n=e.CardComponent,o=e.hideInfo,s=e.isPlayerWon,c=e.additionalInfo;return u.createElement("div",{className:"player-card-outer","data-player-id":t._id},u.createElement("button",{className:this.getPlayerBtnClassName(),onClick:this.nudgePlayer,title:t.name},u.createElement("div",{className:"flex-column"},u.createElement(d.G,{icon:"user",className:"player-icon"}),u.createElement("div",{className:"player-name"},t.name,a&&" (You)"),c&&c(),1!=o&&(s?u.createElement("span",{className:"px-2 m-auto bg-success rounded text-white"},"Won"):u.createElement("div",null,u.createElement("div",{className:"text-center",style:{fontSize:"10px"}},u.createElement("b",null,"(",t.cardsCount,")")),n&&u.createElement("div",{className:"game-player-selected-card-back"},r&&u.createElement(n,{card:r,className:"game-player-selected-card game-player-selected-card-force"})))))))}}]),f}(u.Component)},818:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var r=a(5671),n=a(3144),o=a(6431),s=function(){function e(){(0,r.Z)(this,e)}return(0,n.Z)(e,null,[{key:"getGameInfo",value:function(e,t){return new Promise((function(a,r){o.Z.get("game/".concat(t,"/info"),{gameName:e}).then((function(e){return a(e)})).catch((function(e){return r(e)}))}))}},{key:"startGame",value:function(e,t){return new Promise((function(a,r){o.Z.post("".concat(e,"/").concat(t,"/start")).then((function(e){return a(e)})).catch((function(e){return r(e)}))}))}},{key:"restartGame",value:function(e,t){return new Promise((function(a,r){o.Z.post("game/".concat(t,"/restart"),{gameName:e}).then((function(e){return a(e)})).catch((function(e){return r(e)}))}))}},{key:"leaveGame",value:function(e,t){return new Promise((function(a,r){o.Z.post("".concat(e,"/").concat(t,"/leave")).then((function(e){return a(e)})).catch((function(e){return r(e)}))}))}},{key:"sendMessage",value:function(e,t,a){return new Promise((function(r,n){o.Z.post("game/".concat(t,"/message"),{gameName:e,text:a}).then((function(e){return r(e)})).catch((function(e){return n(e)}))}))}},{key:"nudgePlayer",value:function(e,t,a){return new Promise((function(r,n){o.Z.post("game/".concat(t,"/nudge"),{gameName:e,playerId:a}).then((function(e){return r(e)})).catch((function(e){return n(e)}))}))}}]),e}()},3352:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var r=a(8077),n=a(9755);function o(e){n("#".concat(e)).trigger("play")}function s(){o("error-notify")}const c={audios:["new-notify","error-notify","light-notify","buzz-notify"],playNewNotify:function(){o("new-notify")},playErrorNotify:s,playLightNotify:function(){o("light-notify")},playBuzzNotify:function(){o("buzz-notify")},vibrate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:200;window.navigator.vibrate(e)},resetStateGetGameInfo:function(){this.setState(this.getInitialValues(),this.props.getGameInfo())},resetStateUpdateGameInfo:function(e){var t=this;this.setState(this.getInitialValues(),(function(){return t.props.updateGameInfo(e)}))},handleError:function(e){s();var t=e.message||"Error Occurred";r.Am.error(t,{toastId:t}),this.setState(this.getInitialValues())}}},3882:(e,t,a)=>{(t=a(3645)(!1)).push([e.id,".player-card-outer{margin:10px auto}.player-card-outer .player-card{width:70px;margin:auto 5px;border-radius:5px !important}.player-card-outer .player-name,.player-card-outer .player-additonal-info{font-weight:bold;font-size:12px;overflow:hidden;text-overflow:ellipsis}.player-card-outer .player-icon{margin:5px auto;font-size:15px}",""]),e.exports=t},8653:(e,t,a)=>{(t=a(3645)(!1)).push([e.id,'.game-card,.game-player-selected-card-back{background:#fff;border-radius:3px;height:70px;width:45px;padding:3px;cursor:pointer;box-shadow:-5px 5px 10px #000;margin-bottom:5px;z-index:0}.game-chosen-card{transform:scale(1.1);transition:transform .2s}.game-player-selected-card-back{position:relative;margin:auto}.game-player-selected-card,.game-player-selected-card-back{height:40px;width:30px}.game-player-selected-card-force{position:absolute !important;top:0 !important;left:0 !important}.game-player-selected-card{box-shadow:none;margin:0 !important}.game-player-selected-card .game-card-body .game-card-corner-text{font-size:6px}.game-player-selected-card .game-card-body .game-card-corner-icon{margin:.5px auto;height:4px;width:4px}.game-player-selected-card .game-card-body .game-card-center-icon{height:6px;width:6px}.game-card-corner-text{text-align:center;font-size:8px;font-weight:bold}.SPADE-icon{background-image:url("/games/assets/images/SPADE.png");background-size:100% 100%;background-repeat:no-repeat}.CLUB-icon{background-image:url("/games/assets/images/CLUB.png");background-size:100% 100%;background-repeat:no-repeat}.DIAMOND-icon{background-image:url("/games/assets/images/DIAMOND.png");background-size:100% 100%;background-repeat:no-repeat}.HEART-icon{background-image:url("/games/assets/images/HEART.png");background-size:100% 100%;background-repeat:no-repeat}.game-card-corner-icon{margin:1px auto;height:6px;width:6px}.game-card-center-icon{height:15px;width:15px;margin:auto}.joker-card{width:100%;height:100%;font-size:6px;line-height:6px;font-weight:bold}.joker-card .left,.joker-card .right{display:flex}.joker-card .left{flex-direction:column}.joker-card .center{display:flex;width:100%}.joker-card .center img{margin:auto;height:30px;width:25px}.joker-card .right{margin-left:auto;margin-top:auto;flex-direction:column-reverse}',""]),e.exports=t},8803:(e,t,a)=>{var r=a(3379),n=a(3882);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.id,n,""]]);r(n,{insert:"head",singleton:!1}),e.exports=n.locals||{}},5111:(e,t,a)=>{var r=a(3379),n=a(8653);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.id,n,""]]);r(n,{insert:"head",singleton:!1}),e.exports=n.locals||{}}}]);