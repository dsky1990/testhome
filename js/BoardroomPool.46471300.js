(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["BoardroomPool"],{"341b":function(t,a,e){},"43d7":function(t,a,e){},"51dd":function(t,a,e){},"545e":function(t,a,e){"use strict";e("51dd")},"857a":function(t,a,e){var s=e("1d80"),i=/"/g;t.exports=function(t,a,e,n){var r=String(s(t)),o="<"+a;return""!==e&&(o+=" "+e+'="'+String(n).replace(i,"&quot;")+'"'),o+">"+r+"</"+a+">"}},9911:function(t,a,e){"use strict";var s=e("23e7"),i=e("857a"),n=e("af03");s({target:"String",proto:!0,forced:n("link")},{link:function(t){return i(this,"a","href",t)}})},aa95:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"title-banner",class:t.chainName},[e("div",{directives:[{name:"show",rawName:"v-show",value:"/"==t.routerName,expression:"routerName=='/'"}]},[e("p",{staticClass:"home__banner-title"},[t._v(" "+t._s("Heco"==t.chainName?t.$t("MDEForEcoEurrencyTrading1"):t.$t("MDEForEcoEurrencyTrading2"))+" ")]),e("p",{staticClass:"home__banner-describe"},[t._v(" "+t._s(t.$t("lightText"))+" ")])]),e("div",{directives:[{name:"show",rawName:"v-show",value:"/liquidity"==t.routerName,expression:"routerName=='/liquidity'"}]},[e("div",{staticClass:"pc"},[e("p",{staticClass:"home__banner-title"},[t._v(" "+t._s(t.$t("CurrentTransacObtainCurrencytionVolume"))+" ")]),e("div",{staticClass:"ban-center"},[e("p",{staticClass:"liquidity-mdx ban-center"},[t._v(" "+t._s(t.$t("TotalLockIn"))+" "),e("CountUp",{attrs:{endVal:t.liquidity_mdex||0}}),t._v(" USDT ")],1)])]),e("div",{staticClass:"h5 li-h5title ban-start"},[e("div",{staticClass:"act-title"},[e("p",[t._v(" "+t._s(t.$t("LiquidityMining")))]),e("p")]),e("div",{staticClass:"li-title",on:{click:t.h5_tab_evens}},[e("span",[t._v(" "+t._s(t.$t("TradePool"))+" ")])])]),e("div",{staticClass:"h5 li-banner-total"},[e("div",{staticClass:"banner-tit"},[t._v(" "+t._s(t.$t("TotalLockIn"))+"(USDT) ")]),e("div",{staticClass:"banner-sum"},[e("CountUp",{attrs:{endVal:t.liquidity_mdex||0}})],1)])]),e("div",{directives:[{name:"show",rawName:"v-show",value:"/trading"==t.routerName,expression:"routerName=='/trading'"}]},[e("div",{staticClass:"pc"},[e("p",{staticClass:"home__banner-title"},[t._v(" "+t._s("Heco"==t.chainName?t.$t("MDEForEcoEurrencyTrading1"):t.$t("MDEForEcoEurrencyTrading2"))+" ")]),e("div",{staticClass:"new-banner-totals"},[e("div",{staticClass:"new-banner-total-white"},[e("div",{staticClass:"list-white"},[e("span",{staticClass:"list-white-one"},[t._v(" "+t._s(t.$t("TotalRewardOfCurrentPool"))+" ")]),e("span",{staticClass:"list-white-own"},[e("CountUp",{attrs:{endVal:t.trading_totalReward}})],1),e("span",{staticClass:"list-white-one"},[t._v("MDX")])]),e("div",{staticClass:"list-white"},[e("span",{staticClass:"list-white-one"},[t._v(" "+t._s(t.$t("CurrentIndividualWithdrawableBonus"))+" ")]),e("span",{staticClass:"list-white-own"},[e("CountUp",{attrs:{endVal:t.trading_userReward,options:t.trading_options}})],1),e("span",{staticClass:"list-white-one"},[t._v("MDX")])])]),e("button",{staticClass:"new-list-white-banner",attrs:{disabled:!t.trading_userReward},on:{click:t.onWithdrawal}},[t._v(" "+t._s(t.$t("CashWithdrawalReward"))+" ")])])]),e("div",{staticClass:"h5 li-h5title ban-start"},[e("div",{staticClass:"li-title",on:{click:t.h5_tab_li_evens}},[e("span",[t._v(" "+t._s(t.$t("LiquidityMining"))+" ")])]),e("div",{staticClass:"act-title act-mining"},[e("p",[t._v(" "+t._s(t.$t("TradePool")))]),e("p")])]),e("div",{staticClass:"h5 trading-banner"},[e("div",{staticClass:"ban-start trading-ban-list"},[e("div",[e("p",[t._v(" "+t._s(t.$t("TotalRewardOfCurrentPool")))]),e("p",[e("CountUp",{attrs:{endVal:t.trading_totalReward}}),e("span",{staticClass:"h5-sum"},[t._v("MDX")])],1)]),e("div",[e("p",[t._v(" "+t._s(t.$t("CurrentIndividualWithdrawableBonus")))]),e("p",[e("CountUp",{attrs:{endVal:t.trading_userReward,options:t.trading_options}}),e("span",{staticClass:"h5-sum"},[t._v("MDX")])],1)])]),e("div",{staticClass:"ban-center "},[e("button",{staticClass:"new-banner-btn-dra",attrs:{disabled:!t.trading_userReward},on:{click:t.onWithdrawal}},[t._v(" "+t._s(t.$t("CashWithdrawalReward"))+" ")])])])]),e("div",{directives:[{name:"show",rawName:"v-show",value:"/boardroom"==t.routerName,expression:"routerName=='/boardroom'"}]},[e("div",{staticClass:"pc"},[e("p",{staticClass:"home__banner-title"},[t._v(" "+t._s(t.$t("text9"))+" ")]),e("p",{staticClass:"home__banner-describe"},[t._v(" "+t._s(t.$t("text8"))+" ")])]),e("div",{staticClass:"h5 boardroom-banner__title"},[t._v(" "+t._s(t.$t("Directors"))+" ")])]),e("div",{directives:[{name:"show",rawName:"v-show",value:"/cross-chain"==t.routerName,expression:"routerName=='/cross-chain'"}]},[e("div",{staticClass:"pc"},[e("p",{staticClass:"home__banner-title"},[t._v(" "+t._s(t.$t("MDEForEcoEurrencyTrading"))+" ")]),e("p",{staticClass:"home__banner-describe"},[t._v(" "+t._s(t.$t("lightText"))+" ")])]),e("div",{staticClass:"h5 boardroom-banner__title"},[t._v(" "+t._s(t.$t("crossChainBridge"))+" ")])]),e("div",{directives:[{name:"show",rawName:"v-show",value:!["/cross-chain","/boardroom","/trading","/liquidity","/"].includes(t.routerName),expression:"!['/cross-chain', '/boardroom', '/trading', '/liquidity', '/'].includes(routerName)"}]},[e("div",{staticClass:"pc"},[e("p",{staticClass:"home__banner-title"},[t._v(" "+t._s(t.$t("poolTitle"))+" ")]),e("p",{staticClass:"home__banner-describe"},[t._v(" "+t._s("Heco"==t.chainName?t.$t("poolDescribe1"):t.$t("poolDescribe2"))+" ")])]),e("div",{staticClass:"h5 boardroom-banner__title"},[t._v(" "+t._s(t.$t("transaction"))+" ")])])])},i=[],n=(e("466d"),e("ac1f"),e("a9e3"),e("5319"),{name:"HomeBanner",data:function(){return{userReward:0,onresizeIsPC:!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)}},props:{liquidity_mdex:{type:String|Number,default:0},trading_userReward:{type:String|Number|Boolean,default:0},trading_options:{type:Object|Array,default:function(){}},trading_totalReward:{type:String|Number|Boolean,default:0}},computed:{routerName:function(){return this.$store.state.routerName},chainName:function(){return this.$store.state.chainName}},mounted:function(){var t=this;window.onresize=function(){t.onresizeIsPC=!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)}},$computed:{bnp:"bnp"},methods:{h5_tab_li_evens:function(){this.$router.replace({path:"/liquidity"})},h5_tab_evens:function(){this.$router.replace({path:"/trading"})},onWithdrawal:function(){this.$emit("on-withdrawal")}}}),r=n,o=(e("b438"),e("2877")),c=Object(o["a"])(r,s,i,!1,null,"5fd77284",null);a["a"]=c.exports},af03:function(t,a,e){var s=e("d039");t.exports=function(t){return s((function(){var a=""[t]('"');return a!==a.toLowerCase()||a.split('"').length>3}))}},b035:function(t,a,e){"use strict";e("43d7")},b438:function(t,a,e){"use strict";e("f9d7")},bb62:function(t,a,e){"use strict";e("341b")},bf1f:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"boardroom-pool",class:a.chainName},[s("title-banner"),s("div",{staticClass:"boardroom-pool__content"},[s("div",{staticClass:"boardroom-pool__cards"},[s("div",{staticClass:"boardroom-pool__content-card"},[s("div",{staticClass:"pool__card-icon"},[s("img",{attrs:{src:a.getImgUrl(a.poolData.earnedToken),alt:""}})]),s("div",{staticClass:"pool__card-text"},[a._v(" "+a._s(a.poolData.earnedToken||"MDX")+" "+a._s(a.$t("Earneds"))+" ")]),s("div",{staticClass:"pool__card-price"},[a._v(" "+a._s(Math.floor(1e4*a.earn)/1e4)+" ")]),s("div",{staticClass:"pool__card-buttons"},[s("button",{staticClass:"claim",attrs:{disabled:!a.earn||isNaN(a.earn)},on:{click:a.handleClaim}},[a._v(" "+a._s(a.$t("Claim"))+" ")])])]),s("div",{staticClass:"boardroom-pool__content-card"},[s("img",{attrs:{src:a.getLpImgUrl(a.poolData),alt:"",height:"50"}}),s("div",{staticClass:"pool__card-text"},[a._v(" "+a._s(a.poolData.name)+" "+a._s(a.$t("Stakeds"))+" ")]),s("div",{staticClass:"pool__card-price"},[a._v(" "+a._s(Math.floor(1e4*a.stakedValue)/1e4)+" ")]),s("div",{staticClass:"pool__card-buttons"},[0==a.allowance&&a.account?s("button",{staticClass:"connect",on:{click:a.handleApprove}},[a._v(" Approve ")]):a._e(),a.account?a._e():s("button",{staticClass:"connect",on:{click:a.handleWallet}},[a._v(" Unlock Wallet ")]),a.allowance>0&&a.account?s("div",{staticClass:"pool__card-step-warp"},[s("div",{staticClass:"pool__card-step",on:{click:function(){t.$refs.withdraw.showModel()}}},[a._v(" - ")]),"liquidity"==a.poolData.type&&a.poolData.pid<8&&128==a.chainId?a._e():s("div",{staticClass:"pool__card-step",on:{click:function(){t.$refs.despoit.showModel()}}},[a._v(" + ")])]):a._e()])])]),s("div",{staticClass:"pool-settle-provide"},[s("button",{staticClass:"pool-settle",attrs:{disabled:!a.earn||isNaN(a.earn)},on:{click:a.settle}},[a._v(" "+a._s(a.$t("SettleWithdraw"))+" ")]),s("a",{directives:[{name:"show",rawName:"v-show",value:a.link,expression:"link"}],staticClass:"pool-settle provide",attrs:{href:a.link,target:"_blank"}},[a._v(" "+a._s(a.$t("ProvideLiquidity"))+" ")])])]),s("Despoit",{ref:"despoit",attrs:{pid:a.poolData.pid,account:a.account,max:a.lpBalance,data:a.poolData,erc20Utils:a.erc20Utils},on:{updateData:a.updateData}}),s("Withdraw",{ref:"withdraw",attrs:{pid:a.poolData.pid,account:a.account,max:a.stakedValue,data:a.poolData,erc20Utils:a.erc20Utils},on:{updateData:a.updateData}})],1)},i=[],n=e("1da1"),r=e("5530"),o=(e("96cf"),e("a9e3"),e("7db0"),e("caad"),e("2532"),e("b0c0"),e("9911"),e("99af"),function(){var t=this,a=this,s=a.$createElement,i=a._self._c||s;return i("transition",{class:a.chainName,attrs:{name:"modal"}},[a.modelShow?i("div",{staticClass:"model"},[i("div",{staticClass:"model-wrap"},[i("img",{staticClass:"close-icon",attrs:{src:e("c2f4")},on:{click:a.hideModel}}),i("h3",[a._v(a._s(a.$t("Deposit"))+" "+a._s(a.data.name))]),i("div",{staticClass:"input-wrap"},[i("input",{directives:[{name:"model",rawName:"v-model",value:a.value,expression:"value"}],attrs:{type:"text"},domProps:{value:a.value},on:{input:function(t){t.target.composing||(a.value=t.target.value)}}}),i("div",{staticClass:"button-wrap"},[i("button",{attrs:{disabled:!a.max},on:{click:function(){return t.setMax()}}},[a._v("MAX")])])]),i("p",[a._v(a._s(a.max)+" "+a._s(a.data.name)+" "+a._s(a.$t("Available")))]),i("div",{staticClass:"btn"},[i("div",{staticClass:"cancel",on:{click:this.hideModel}},[a._v(a._s(a.$t("Cancel")))]),i("button",{staticClass:"confirm",attrs:{disabled:!Number(a.value)||Number(a.value)>Number(a.max)},on:{click:a.despoit}},[a._v(" "+a._s(a.$t("Confirm"))+" ")])])])]):a._e()])}),c=[],l=(e("d3b7"),e("2f62")),d=null,u={name:"Despoit",data:function(){return{modelShow:!1,value:0}},props:["max","account","pid","data","erc20Utils"],computed:Object(r["a"])({},Object(l["mapGetters"])(["isPC","isMobile","currentAddress"])),methods:{showModel:function(){this.modelShow=!0},hideModel:function(){this.modelShow=!1},setMax:function(){this.value=this.max},despoit:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var e,s,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e=t.erc20Utils.despoitValue,t.hideModel(),s="Despoit ".concat(t.value," ").concat(t.data.name),i=t.$overalltip({type:"loading",msg:s}),e(t.pid,t.value,t.account).then((function(a){t.$emit("updateData"),i.close();var e="".concat(s," Success");d=t.$overalltip({type:"success",msg:e})})).catch((function(a){i.close();var e="".concat(s," Error");d=t.$overalltip({type:"error",msg:e})})).finally((function(){t.value=0}));case 5:case"end":return a.stop()}}),a)})))()}},beforeDestroy:function(){d&&d.close()}},p=u,v=(e("bb62"),e("2877")),m=Object(v["a"])(p,o,c,!1,null,"7110c8ff",null),h=m.exports,_=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("transition",{class:t.chainName,attrs:{name:"modal"}},[t.modelShow?s("div",{staticClass:"model"},[s("div",{staticClass:"model-wrap"},[s("h3",[t._v(t._s(t.$t("Withdraw"))+" "+t._s(t.data.name))]),s("img",{staticClass:"close-icon",attrs:{src:e("c2f4")},on:{click:t.hideModel}}),s("div",{staticClass:"input-wrap"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],attrs:{type:"text"},domProps:{value:t.value},on:{input:function(a){a.target.composing||(t.value=a.target.value)}}}),s("div",{staticClass:"button-wrap"},[s("button",{attrs:{disabled:!t.max},on:{click:t.setMax}},[t._v("MAX")])])]),s("p",[t._v(t._s(t.max)+" "+t._s(t.data.name)+" "+t._s(t.$t("Available")))]),s("div",{staticClass:"btn"},[s("div",{staticClass:"cancel",on:{click:this.hideModel}},[t._v(t._s(t.$t("Cancel")))]),s("button",{staticClass:"confirm",attrs:{disabled:!Number(t.value)||Number(t.value)>Number(t.max)},on:{click:t.handelWithdrawl}},[t._v(" "+t._s(t.$t("Confirm"))+" ")])])])]):t._e()])},f=[],b=null,w={name:"Withdraw",props:["max","account","pid","data","erc20Utils"],data:function(){return{modelShow:!1,value:0}},computed:Object(r["a"])({},Object(l["mapGetters"])(["isPC","isMobile","currentAddress"])),methods:{showModel:function(){this.modelShow=!0},hideModel:function(){this.modelShow=!1},setMax:function(){this.value=this.max},handelWithdrawl:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var e,s,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.hideModel(),e=t.erc20Utils.unStake,s="Withdrawl ".concat(t.value," ").concat(t.data.name),i=t.$overalltip({type:"loading",msg:s}),e(t.pid,t.value,t.account).then((function(a){t.$emit("updateData"),i.close();var e="".concat(s," Success");b=t.$overalltip({type:"success",msg:e})})).catch((function(a){i.close();var e="".concat(s," Error");b=t.$overalltip({type:"error",msg:e})})).finally((function(){t.value=0}));case 5:case"end":return a.stop()}}),a)})))()}},beforeDestroy:function(){b&&b.close()}},C=w,g=(e("545e"),Object(v["a"])(C,_,f,!1,null,"6ed3d34d",null)),$=g.exports,y=e("4f22"),D=e("837b"),k=e("4027"),x=e("aa95"),N=null,M={name:"BoardroomPool",components:{Despoit:h,Withdraw:$,tipDialog:k["a"],TitleBanner:x["a"]},data:function(){return{stakedOptions:{decimalPlaces:4},link:""}},computed:{isPC:function(){return this.$store.getters.isPC},isMobile:function(){return this.$store.getters.isMobile},currentAddress:function(){return this.$store.getters.currentAddress},chainId:function(){return this.$store.getters.chainId},coinConfig:function(){return D["a"][this.chainId]},account:function(){return this.$store.state.boardRoom.account||this.$store.state.account.address},stakedValue:function(){return this.$store.state.boardRoom.stakedValue},earn:function(){return Number(this.$store.state.boardRoom.earn)},allowance:function(){return this.$store.state.boardRoom.allowance},lpBalance:function(){return this.$store.state.boardRoom.lpBalance},apylist:function(){return this.$store.state.liquidity.apylist},poolData:function(){var t=this.$route.params,a=t.type,e=t.earn,s=t.id;if("boardroom"==a){var i="mdx"==e?"mdx":"pool",n=this.$store.getters["boardRoom/currentChainBoardRoomData"][i],o=n.find((function(t){return t.pid==s}))||{};return o.name.includes("LP")&&(this.link="https://ht.mdex.cc/#/add/".concat(o.token_main,"/").concat(o.token_sec)),Object(r["a"])(Object(r["a"])({},o),{},{earn:e,type:a})}if("liquidity"==a){var c=this.$store.getters["liquidity/poolList"],l=c.find((function(t){return t.pid==s}))||{};if(this.apylist[l.pid]){var d=this.apylist[l.pid];this.link="https://ht.mdex.cc/#/add/".concat(d.token0,"/").concat(d.token1)}return Object(r["a"])(Object(r["a"])({},l),{},{earn:e,type:a})}},erc20Utils:function(){var t=this.$route.params,a=t.type,e=t.earn;return Object(y["f"])(this.$store.state.chainId,a,e)}},mounted:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e=t.$route.params.id,t.pid=e,t.updateData();case 3:case"end":return a.stop()}}),a)})))()},watch:{chainId:function(){this.updateData()}},methods:{getImgUrl:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"MDX";return this.globalGetImgUrl(this.coinConfig[t.toLowerCase()])},getLpImgUrl:function(t){return this.globalGetImgUrl(t.lpAddress)},updateData:function(){this.$store.cache.dispatch("boardRoom/getWalletData",this.poolData)},settle:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var e,s,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e=t.erc20Utils.unStake,s="Settle & Withdraw Tokens",i=t.$overalltip({type:"loading",msg:s}),e(t.pid,t.stakedValue,t.account).then((function(a){t.updateData(),i.close();var e="".concat(s," Success");N=t.$overalltip({type:"success",msg:e})})).catch((function(a){i.close();var e="".concat(s," Error");N=t.$overalltip({type:"error",msg:e})}));case 4:case"end":return a.stop()}}),a)})))()},handleWallet:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,window.ethereum.enable();case 2:t.updateData();case 3:case"end":return a.stop()}}),a)})))()},handleClaim:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var e,s,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e=t.erc20Utils.despoitValue,s="Claim ".concat(t.earn," ").concat(t.poolData.earn.toUpperCase()),i=t.$overalltip({type:"loading",msg:s}),e(t.pid,0,t.account).then((function(a){t.updateData(),i.close();var e="Claim ".concat(t.poolData.earn.toUpperCase()," Success");N=t.$overalltip({type:"success",msg:e})})).catch((function(a){i.close();var e="Claim ".concat(t.poolData.earn.toUpperCase()," Error");N=t.$overalltip({type:"error",msg:e})}));case 4:case"end":return a.stop()}}),a)})))()},handleApprove:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var e,s,i,n,r,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e=t.erc20Utils,s=e.approveToken,i=e.saveLocalAllowance,n=t.poolData.lpAddress,r="Approve ".concat(t.poolData.name),o=t.$overalltip({type:"loading",msg:r}),s(n,t.account).then((function(a){o.close(),i(n,t.account),t.updateData();var e="".concat(r," Success");N=t.$overalltip({type:"success",msg:e})})).catch((function(a){o.close();var e="".concat(r," Error");N=t.$overalltip({type:"error",msg:e})}));case 5:case"end":return a.stop()}}),a)})))()}},beforeDestroy:function(){N&&N.close()}},R=M,U=(e("b035"),Object(v["a"])(R,s,i,!1,null,"7e2f1691",null));a["default"]=U.exports},f9d7:function(t,a,e){}}]);