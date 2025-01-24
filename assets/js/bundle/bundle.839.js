(self.webpackChunkgames_ui=self.webpackChunkgames_ui||[]).push([[839],{2132:(e,t,r)=>{"use strict";r.d(t,{A:()=>u});var a=r(3029),n=r(2901),o=r(5501),s=r(1801),c=r(3954),i=r(6540),l=(r(2877),r(2543));var u=function(e){(0,o.A)(d,e);var t,r,u=(t=d,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,c.A)(t);if(r){var n=(0,c.A)(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return(0,s.A)(this,e)});function d(){return(0,a.A)(this,d),u.call(this)}return(0,n.A)(d,[{key:"getOnClick",value:function(){var e=this.props,t=e.card,r=e.onClick;return 1!=e.disabled&&"function"==typeof r?function(){return r(t)}:function(){}}},{key:"getTextColorClass",value:function(){switch(this.props.card.type){case"SPADE":case"CLUB":return"text-dark";default:return"text-danger"}}},{key:"getCardClass",value:function(){var e=this.props,t=e.isChosenCard,r=e.className;return["game-card",t?"game-chosen-card":"",this.getTextColorClass(),r].join(" ")}},{key:"getJokerCard",value:function(){var e=l.toArray("JOKER").map((function(e,t){return i.createElement("div",{key:t},e)}));return i.createElement("div",{className:"d-flex joker-card text-danger"},i.createElement("div",{className:"left"},e),i.createElement("div",{className:"center"},i.createElement("img",{src:"/assets/images/joker.png"})),i.createElement("div",{className:"right"},e))}},{key:"getLayer",value:function(e,t,r){return i.createElement("div",{className:"d-flex flex-column ".concat(r)},e,t)}},{key:"getNumberCard",value:function(e){var t=i.createElement("div",{className:"game-card-corner-text"},e.number);return i.createElement("div",{className:"position-relative h-100 w-100 d-flex flex-column game-card-body"},this.getLayer(t,i.createElement("div",{className:"".concat(e.type,"-icon game-card-corner-icon")}),"mbr-auto"),this.getLayer("",i.createElement("div",{className:"".concat(e.type,"-icon game-card-center-icon")}),""),this.getLayer(i.createElement("div",{className:"".concat(e.type,"-icon game-card-corner-icon")}),t,"mlt-auto"))}},{key:"getGameCardBody",value:function(){var e=this.props.card;return"JOKER"===e.type?this.getJokerCard():this.getNumberCard(e)}},{key:"render",value:function(){return i.createElement("div",{onClick:this.getOnClick(),className:this.getCardClass()},this.getGameCardBody())}}]),d}(i.Component)},8839:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>v});var a=r(3029),n=r(2901),o=r(9417),s=r(5501),c=r(1801),i=r(3954),l=r(6540),u=r(4647),d=r(1107),m=r(624),p=function(){function e(){(0,a.A)(this,e)}return(0,n.A)(e,null,[{key:"submitChosenCards",value:function(e,t){return new Promise((function(r,a){m.A.post("leastcount/".concat(e,"/submit"),t).then((function(e){return r(e)})).catch((function(e){return a(e)}))}))}},{key:"takeCard",value:function(e,t){return new Promise((function(r,a){m.A.post("leastcount/".concat(e,"/take"),t).then((function(e){return r(e)})).catch((function(e){return a(e)}))}))}},{key:"noShow",value:function(e){return new Promise((function(t,r){m.A.post("leastcount/".concat(e,"/no-show")).then((function(e){return t(e)})).catch((function(e){return r(e)}))}))}},{key:"showCards",value:function(e){return new Promise((function(t,r){m.A.post("leastcount/".concat(e,"/show")).then((function(e){return t(e)})).catch((function(e){return r(e)}))}))}},{key:"continueGame",value:function(e){return new Promise((function(t,r){m.A.post("leastcount/".concat(e,"/continue")).then((function(e){return t(e)})).catch((function(e){return r(e)}))}))}}]),e}(),h=r(2132),f=r(7683),g=r(2543);var y="leastcount";const v=function(e){(0,s.A)(v,e);var t,r,m=(t=v,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,i.A)(t);if(r){var n=(0,i.A)(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return(0,c.A)(this,e)});function v(){var e;return(0,a.A)(this,v),(e=m.call(this)).state=g.assign({},g.cloneDeep(e.getInitialValues())),e.updateReceived=e.updateReceived.bind((0,o.A)(e)),e.handleChosenCard=e.handleChosenCard.bind((0,o.A)(e)),e.submitChosenCards=e.submitChosenCards.bind((0,o.A)(e)),e.takeCard=e.takeCard.bind((0,o.A)(e)),e.noShow=e.noShow.bind((0,o.A)(e)),e.continueGame=e.continueGame.bind((0,o.A)(e)),e.showCards=e.showCards.bind((0,o.A)(e)),e.restartGame=e.restartGame.bind((0,o.A)(e)),e.resetStateGetGameInfo=f.A.resetStateGetGameInfo.bind((0,o.A)(e)),e.handleError=f.A.handleError.bind((0,o.A)(e)),e}return(0,n.A)(v,[{key:"getInitialValues",value:function(){return{chosenCards:[],submitFlag:!1,decideFlag:!1}}},{key:"listPlayers",value:function(){var e=this,t=this.props.game.players;return l.createElement("div",{className:"d-flex flex-wrap px-1 mt-2"},t.map((function(t,r){return l.createElement(u.A,{key:r,gameId:e.props.game._id,gameName:y,player:t,isMe:t._id==e.props.me._id,currentPlayer:e.props.game.currentPlayer,amIAdmin:e.props.state.amIAdmin})})))}},{key:"takeCard",value:function(e){p.takeCard(this.props.game._id,{takeFrom:e}).then(this.props.getGameInfo).catch(this.handleError)}},{key:"getBorderedCard",value:function(e,t,r){return l.createElement("div",{className:"border-white rounded-circle m-auto d-flex",style:{height:"120px",width:"120px",borderWidth:"2px",borderStyle:"solid"}},l.createElement(h.A,{card:e,className:"m-auto ".concat(r?"":"zoom-animi"),disabled:r,onClick:t}))}},{key:"getDeckAndLastCard",value:function(){var e=this,t=this.props.game,r=t.lastCards,a=t.currentPlayerAction;return l.createElement("div",{className:"d-flex my-2"},this.getBorderedCard({color:"info",type:""},(function(){return e.takeCard("DECK")}),!this.props.state.isMyMove||"TAKE"!=a),this.getBorderedCard(r.length?r[0]:{},(function(){return e.takeCard("LASTCARD")}),!this.props.state.isMyMove||"TAKE"!=a))}},{key:"showCards",value:function(){var e=this;this.setState({decideFlag:!0},(function(){p.showCards(e.props.game._id).then(e.props.getGameInfo).catch(e.handleError)}))}},{key:"noShow",value:function(){var e=this;this.setState({decideFlag:!0},(function(){p.noShow(e.props.game._id).then(e.props.getGameInfo).catch(e.handleError)}))}},{key:"submitChosenCards",value:function(){var e=this,t={chosenCards:this.state.chosenCards};this.setState({submitFlag:!0},(function(){p.submitChosenCards(e.props.game._id,t).then(e.resetStateGetGameInfo).catch(e.handleError)}))}},{key:"handleChosenCard",value:function(e){var t=g.findIndex(this.state.chosenCards,e);-1==t?this.state.chosenCards.push(e):this.state.chosenCards.splice(t,1),this.setState({chosenCards:this.state.chosenCards})}},{key:"getCurrentPlayerDroppedCards",value:function(){var e=this.props.game,t=e.currentPlayerDroppedCards,r=e.currentPlayerAction,a=e.currentPlayer;return"TAKE"==r&&l.createElement("div",{className:"d-flex flex-column mt-2 border border-white rounded"},l.createElement("div",{className:"alert alert-primary text-center py-0 rounded-0"},this.props.state.isMyMove?"Your":a.name," Dropped Cards"),l.createElement("div",{className:"d-flex flex-wrap p-2"},g.sortBy(t,["number","type"]).map((function(e,t){return l.createElement(h.A,{key:t,disabled:!0,chosenCards:[],card:e,className:"mx-auto"})}))))}},{key:"isChosenCard",value:function(e){var t=this.state.chosenCards;return g.find(t,e)}},{key:"getMyCards",value:function(){var e=this,t=this.props.game,r=t.myCards,a=t.currentPlayerAction;return l.createElement("div",{className:"d-flex flex-wrap p-2 mt-2"},g.sortBy(r,["point","number","type"]).map((function(t,r){return l.createElement(h.A,{onClick:e.handleChosenCard,key:r,disabled:!e.props.state.isMyMove||"SUBMIT"!=a,isChosenCard:e.isChosenCard(t),card:g.assign(t,{ind:r})})})))}},{key:"getActionText",value:function(){switch(this.props.game.currentPlayerAction){case"SUBMIT":return"Drop card";case"TAKE":return"Take card";case"DECIDE":return"Choose Show or Play"}}},{key:"getPlayerTurnAlert",value:function(){var e=this.props.state.isMyMove,t=this.props.game.currentPlayer;return l.createElement("div",{className:"d-flex py-2"},l.createElement("span",{style:{boxShadow:"0 0 5px white"},className:"m-auto px-3 rounded text-white bg-".concat(this.props.state.isMyMove?"danger":"secondary"," ")},l.createElement("div",{className:"text-center"},e?l.createElement("b",null,"Your turn"):l.createElement("span",null,"Player ",l.createElement("b",null,t.name)," turn")),l.createElement("div",{className:"text-center"},!e&&l.createElement("span",null,l.createElement("b",null,t.name)," has to")," ",this.getActionText())))}},{key:"getGameButtons",value:function(){var e=this.props.state.isMyMove,t=this.props.game.currentPlayerAction,r=this.state,a=r.submitFlag,n=!r.decideFlag&&e&&"DECIDE"==t,o=!a&&e&&"SUBMIT"==t&&this.state.chosenCards.length;return l.createElement("div",{className:"d-flex my-2"},l.createElement("button",{disabled:!o,style:{boxShadow:"5px 5px 10px black"},className:"btn btn-success m-auto font-weight-bold btn-shadow ".concat(o&&"zoom-animi"),onClick:this.submitChosenCards},"Submit"),l.createElement("button",{disabled:!n,style:{boxShadow:"5px 5px 10px black"},className:"btn btn-danger m-auto font-weight-bold btn-shadow ".concat(n&&"zoom-animi"),onClick:this.showCards},"Show"),l.createElement("button",{disabled:!n,style:{boxShadow:"5px 5px 10px black"},className:"btn btn-primary m-auto font-weight-bold btn-shadow ".concat(n&&"zoom-animi"),onClick:this.noShow},"Play"))}},{key:"getMyPoints",value:function(){return this.props.state.amIPresentInPlayers&&l.createElement("div",{className:"my-2 text-center text-white"},"Points : ",this.props.game.myPoints)}},{key:"renderGame",value:function(){return l.createElement("div",{className:"d-flex flex-column"},this.getPlayerTurnAlert(),this.listPlayers(),this.getCurrentPlayerDroppedCards(),this.getDeckAndLastCard(),this.getGameButtons(),this.getMyPoints(),this.getMyCards())}},{key:"continueGame",value:function(){p.continueGame(this.props.game._id).then(this.props.getGameInfo).catch(this.handleError)}},{key:"restartGame",value:function(){d.A.restartGame(y,this.props.game._id).then(this.props.getGameInfo).catch(this.handleError)}},{key:"renderGameResults",value:function(){var e=this,t=this.props.game,r=t.players,a=t.playersTotalPoints,n=t.status,o=t.rounds,s=g.nth(o,-1),c=s.showResult,i=s.playersPoints,u=s.showedBy;return l.createElement("div",{className:"game-result text-center"},l.createElement("div",{className:"alert alert-success text-center m-0 rounded-top rounded-bottom-0",style:{boxShadow:"0 0 5px white"}},l.createElement("b",{className:"text-underline"},"ENDED"==n?"Final":"Current Round"," Results"),l.createElement("div",null,l.createElement("b",null,u._id==this.props.me._id?"You":u.name)," showed cards and its ",l.createElement("b",null,c)," show")),l.createElement("div",{className:"game-result-table"},l.createElement("table",{className:"table table-hover table-light table-striped rounded-bottom",style:{boxShadow:"0 0 5px white"}},l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",{scope:"col"},"Rank"),l.createElement("th",{scope:"col"},"Name"),l.createElement("th",{scope:"col"},"Points"),"ENDED"==n&&l.createElement("th",{scope:"col"},"Status"))),l.createElement("tbody",null,g.sortBy(r,(function(e){return a[e._id]})).map((function(t,o){return l.createElement("tr",{key:o},l.createElement("td",{scope:"row"},o+1),l.createElement("td",null,t._id==e.props.me._id?"You":t.name),l.createElement("td",null,l.createElement("b",null,a[t._id])," (+",i[t._id],")"),"ENDED"==n&&l.createElement("td",null,o==r.length-1?"LOST":"WON"))}))))),this.props.state.amIAdmin&&l.createElement("div",{className:"d-flex"},l.createElement("button",{className:"btn btn-primary m-auto btn-shadow",onClick:"ENDED"==n?this.restartGame:this.continueGame},"ENDED"==n?"Restart":"Continue")))}},{key:"render",value:function(){switch(this.props.game.status){case"STARTED":return this.renderGame();case"PLAYER_SHOWED":case"ENDED":return this.renderGameResults()}}},{key:"updateReceived",value:function(e){return this.props.getGameInfo()}}]),v}(l.Component)},4647:(e,t,r)=>{"use strict";r.d(t,{A:()=>h});var a=r(3029),n=r(2901),o=r(9417),s=r(5501),c=r(1801),i=r(3954),l=r(4467),u=r(6540),d=r(6784),m=r(1107),p=r(7683);r(2160);var h=function(e){(0,s.A)(f,e);var t,r,h=(t=f,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,i.A)(t);if(r){var n=(0,i.A)(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return(0,c.A)(this,e)});function f(){var e;return(0,a.A)(this,f),e=h.call(this),(0,l.A)((0,o.A)(e),"nudgePlayer",(function(){var t=e.props,r=t.isMe,a=t.amIAdmin;if(!r&&a){var n=e.props,o=n.gameName,s=n.gameId,c=n.player;m.A.nudgePlayer(o,s,c._id).catch(e.handleError)}})),e.handleError=p.A.handleError.bind((0,o.A)(e)),e}return(0,n.A)(f,[{key:"getPlayerBorderColor",value:function(){return"sg-border-".concat(this.props.isMe?"warning":"primary")}},{key:"isPlayerCurrentPlayer",value:function(){var e=this.props,t=e.currentPlayer,r=e.player;return t&&t._id==r._id}},{key:"getPlayerBtn",value:function(){return"sg-btn".concat(this.isPlayerCurrentPlayer()?"-light":"")}},{key:"getPlayerBtnClassName",value:function(){return["player-card",this.getPlayerBtn(),this.getPlayerBorderColor()].join(" ")}},{key:"render",value:function(){var e=this.props,t=e.player,r=e.isMe,a=e.playerChosenCard,n=e.CardComponent,o=e.hideInfo,s=e.isPlayerWon,c=e.additionalInfo;return u.createElement("div",{className:"player-card-outer","data-player-id":t._id},u.createElement("button",{className:this.getPlayerBtnClassName(),onClick:this.nudgePlayer,title:t.name},u.createElement("div",{className:"flex-column"},u.createElement(d.g,{icon:"user",className:"player-icon"}),u.createElement("div",{className:"player-name"},t.name,r&&" (You)"),c&&c(),1!=o&&(s?u.createElement("span",{className:"px-2 m-auto bg-success rounded text-white"},"Won"):u.createElement("div",null,u.createElement("div",{className:"text-center",style:{fontSize:"10px"}},u.createElement("b",null,"(",t.cardsCount,")")),n&&u.createElement("div",{className:"game-player-selected-card-back"},a&&u.createElement(n,{card:a,className:"game-player-selected-card game-player-selected-card-force"})))))))}}]),f}(u.Component)},1107:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var a=r(3029),n=r(2901),o=r(624),s=function(){function e(){(0,a.A)(this,e)}return(0,n.A)(e,null,[{key:"getGameInfo",value:function(e,t){return new Promise((function(r,a){o.A.get("game/".concat(t,"/info"),{gameName:e}).then((function(e){return r(e)})).catch((function(e){return a(e)}))}))}},{key:"startGame",value:function(e,t){return new Promise((function(r,a){o.A.post("".concat(e,"/").concat(t,"/start")).then((function(e){return r(e)})).catch((function(e){return a(e)}))}))}},{key:"restartGame",value:function(e,t){return new Promise((function(r,a){o.A.post("game/".concat(t,"/restart"),{gameName:e}).then((function(e){return r(e)})).catch((function(e){return a(e)}))}))}},{key:"leaveGame",value:function(e,t){return new Promise((function(r,a){o.A.post("".concat(e,"/").concat(t,"/leave")).then((function(e){return r(e)})).catch((function(e){return a(e)}))}))}},{key:"sendMessage",value:function(e,t,r){return new Promise((function(a,n){o.A.post("game/".concat(t,"/message"),{gameName:e,text:r}).then((function(e){return a(e)})).catch((function(e){return n(e)}))}))}},{key:"nudgePlayer",value:function(e,t,r){return new Promise((function(a,n){o.A.post("game/".concat(t,"/nudge"),{gameName:e,playerId:r}).then((function(e){return a(e)})).catch((function(e){return n(e)}))}))}}]),e}()},7683:(e,t,r)=>{"use strict";r.d(t,{A:()=>c});var a=r(8669),n=r(4692);function o(e){n("#".concat(e)).trigger("play")}function s(){o("error-notify")}const c={audios:["new-notify","error-notify","light-notify","buzz-notify"],playNewNotify:function(){o("new-notify")},playErrorNotify:s,playLightNotify:function(){o("light-notify")},playBuzzNotify:function(){o("buzz-notify")},vibrate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:200;window.navigator.vibrate(e)},resetStateGetGameInfo:function(){this.setState(this.getInitialValues(),this.props.getGameInfo())},resetStateUpdateGameInfo:function(e){var t=this;this.setState(this.getInitialValues(),(function(){return t.props.updateGameInfo(e)}))},handleError:function(e){s();var t=e.message||"Error Occurred";a.oR.error(t,{toastId:t}),this.setState(this.getInitialValues())}}},1165:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var a=r(1601),n=r.n(a),o=r(6314),s=r.n(o)()(n());s.push([e.id,".player-card-outer{margin:10px auto}.player-card-outer .player-card{width:70px;margin:auto 5px;border-radius:5px !important}.player-card-outer .player-name,.player-card-outer .player-additonal-info{font-weight:bold;font-size:12px;overflow:hidden;text-overflow:ellipsis}.player-card-outer .player-icon{margin:5px auto;font-size:15px}",""]);const c=s},6782:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>v});var a=r(1601),n=r.n(a),o=r(6314),s=r.n(o),c=r(4417),i=r.n(c),l=new URL(r(6418),r.b),u=new URL(r(5689),r.b),d=new URL(r(4301),r.b),m=new URL(r(7289),r.b),p=s()(n()),h=i()(l),f=i()(u),g=i()(d),y=i()(m);p.push([e.id,`.game-card,.game-player-selected-card-back{background:#fff;border-radius:3px;height:70px;width:45px;padding:3px;cursor:pointer;box-shadow:-5px 5px 10px #000;margin-bottom:5px;z-index:0}.game-chosen-card{transform:scale(1.1);transition:transform .2s}.game-player-selected-card-back{position:relative;margin:auto}.game-player-selected-card,.game-player-selected-card-back{height:40px;width:30px}.game-player-selected-card-force{position:absolute !important;top:0 !important;left:0 !important}.game-player-selected-card{box-shadow:none;margin:0 !important}.game-player-selected-card .game-card-body .game-card-corner-text{font-size:6px}.game-player-selected-card .game-card-body .game-card-corner-icon{margin:.5px auto;height:4px;width:4px}.game-player-selected-card .game-card-body .game-card-center-icon{height:6px;width:6px}.game-card-corner-text{text-align:center;font-size:8px;font-weight:bold}.SPADE-icon{background-image:url(${h});background-size:100% 100%;background-repeat:no-repeat}.CLUB-icon{background-image:url(${f});background-size:100% 100%;background-repeat:no-repeat}.DIAMOND-icon{background-image:url(${g});background-size:100% 100%;background-repeat:no-repeat}.HEART-icon{background-image:url(${y});background-size:100% 100%;background-repeat:no-repeat}.game-card-corner-icon{margin:1px auto;height:6px;width:6px}.game-card-center-icon{height:15px;width:15px;margin:auto}.joker-card{width:100%;height:100%;font-size:6px;line-height:6px;font-weight:bold}.joker-card .left,.joker-card .right{display:flex}.joker-card .left{flex-direction:column}.joker-card .center{display:flex;width:100%}.joker-card .center img{margin:auto;height:30px;width:25px}.joker-card .right{margin-left:auto;margin-top:auto;flex-direction:column-reverse}`,""]);const v=p},4417:e=>{"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},2160:(e,t,r)=>{var a=r(5072),n=r(1165);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.id,n,""]]);a(n,{insert:"head",singleton:!1}),e.exports=n.locals||{}},2877:(e,t,r)=>{var a=r(5072),n=r(6782);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.id,n,""]]);a(n,{insert:"head",singleton:!1}),e.exports=n.locals||{}},5689:(e,t,r)=>{"use strict";e.exports=r.p+"fe90ad894c96ac85510c.png"},4301:(e,t,r)=>{"use strict";e.exports=r.p+"dc41389da3deb4412b04.png"},7289:(e,t,r)=>{"use strict";e.exports=r.p+"3ce1067e13a471843e80.png"},6418:(e,t,r)=>{"use strict";e.exports=r.p+"867de53ed836f31aabdd.png"}}]);