(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Home"],{"0a75":function(t,s,a){"use strict";a("590e")},"295e":function(t,s,a){t.exports=a.p+"img/new1.bcb6b1bb.png"},3790:function(t,s,a){t.exports=a.p+"img/new3.10627a1f.png"},"4baa":function(t,s,a){t.exports=a.p+"img/new4.3e4a74ce.png"},"590e":function(t,s,a){},"5f94":function(t,s,a){t.exports=a.p+"img/new11.6f32e00a.png"},6232:function(t,s,a){t.exports=a.p+"img/new14.7e708244.png"},"69f5":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAUBAMAAABL3sEiAAAAHlBMVEUAAAD///////////////////////////////////8kfJuVAAAACnRSTlMAsweihBtyXkQRExgebQAAACdJREFUCNdj4GxiAAF2EQUQxWroBOYGk8QVg1JQQagSQhyEtVBHAACI2glJyCmc1wAAAABJRU5ErkJggg=="},"80b4":function(t,s,a){t.exports=a.p+"img/new13.3cade427.png"},"86e3":function(t,s,a){t.exports=a.p+"img/new7.9cb1d6e8.png"},"9bb7":function(t,s,a){t.exports=a.p+"img/new10.bbe4598d.png"},a434:function(t,s,a){"use strict";var i=a("23e7"),e=a("23cb"),n=a("a691"),o=a("50c4"),r=a("7b0b"),c=a("65f0"),l=a("8418"),d=a("1dde"),_=d("splice"),m=Math.max,u=Math.min,v=9007199254740991,p="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!_},{splice:function(t,s){var a,i,d,_,h,C,g=r(this),b=o(g.length),w=e(t,b),f=arguments.length;if(0===f?a=i=0:1===f?(a=0,i=b-w):(a=f-2,i=u(m(n(s),0),b-w)),b+a-i>v)throw TypeError(p);for(d=c(g,i),_=0;_<i;_++)h=w+_,h in g&&l(d,_,g[h]);if(d.length=i,a<i){for(_=w;_<b-i;_++)h=_+i,C=_+a,h in g?g[C]=g[h]:delete g[C];for(_=b;_>b-i+a;_--)delete g[_-1]}else if(a>i)for(_=b-i;_>w;_--)h=_+i-1,C=_+a-1,h in g?g[C]=g[h]:delete g[C];for(_=0;_<a;_++)g[_+w]=arguments[_+2];return g.length=b-i+a,d}})},aa95:function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"title-banner",class:t.chainName},[a("div",{directives:[{name:"show",rawName:"v-show",value:"/"==t.routerName,expression:"routerName=='/'"}]},[a("p",{staticClass:"home__banner-title"},[t._v(" "+t._s("Heco"==t.chainName?t.$t("MDEForEcoEurrencyTrading1"):t.$t("MDEForEcoEurrencyTrading2"))+" ")]),a("p",{staticClass:"home__banner-describe"},[t._v(" "+t._s(t.$t("lightText"))+" ")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:"/liquidity"==t.routerName,expression:"routerName=='/liquidity'"}]},[a("div",{staticClass:"pc"},[a("p",{staticClass:"home__banner-title"},[t._v(" "+t._s(t.$t("CurrentTransacObtainCurrencytionVolume"))+" ")]),a("div",{staticClass:"ban-center"},[a("p",{staticClass:"liquidity-mdx ban-center"},[t._v(" "+t._s(t.$t("TotalLockIn"))+" "),a("CountUp",{attrs:{endVal:t.liquidity_mdex||0}}),t._v(" USDT ")],1)])]),a("div",{staticClass:"h5 li-h5title ban-start"},[a("div",{staticClass:"act-title"},[a("p",[t._v(" "+t._s(t.$t("LiquidityMining")))]),a("p")]),a("div",{staticClass:"li-title",on:{click:t.h5_tab_evens}},[a("span",[t._v(" "+t._s(t.$t("TradePool"))+" ")])])]),a("div",{staticClass:"h5 li-banner-total"},[a("div",{staticClass:"banner-tit"},[t._v(" "+t._s(t.$t("TotalLockIn"))+"(USDT) ")]),a("div",{staticClass:"banner-sum"},[a("CountUp",{attrs:{endVal:t.liquidity_mdex||0}})],1)])]),a("div",{directives:[{name:"show",rawName:"v-show",value:"/trading"==t.routerName,expression:"routerName=='/trading'"}]},[a("div",{staticClass:"pc"},[a("p",{staticClass:"home__banner-title"},[t._v(" "+t._s("Heco"==t.chainName?t.$t("MDEForEcoEurrencyTrading1"):t.$t("MDEForEcoEurrencyTrading2"))+" ")]),a("div",{staticClass:"new-banner-totals"},[a("div",{staticClass:"new-banner-total-white"},[a("div",{staticClass:"list-white"},[a("span",{staticClass:"list-white-one"},[t._v(" "+t._s(t.$t("TotalRewardOfCurrentPool"))+" ")]),a("span",{staticClass:"list-white-own"},[a("CountUp",{attrs:{endVal:t.trading_totalReward}})],1),a("span",{staticClass:"list-white-one"},[t._v("MDX")])]),a("div",{staticClass:"list-white"},[a("span",{staticClass:"list-white-one"},[t._v(" "+t._s(t.$t("CurrentIndividualWithdrawableBonus"))+" ")]),a("span",{staticClass:"list-white-own"},[a("CountUp",{attrs:{endVal:t.trading_userReward,options:t.trading_options}})],1),a("span",{staticClass:"list-white-one"},[t._v("MDX")])])]),a("button",{staticClass:"new-list-white-banner",attrs:{disabled:!t.trading_userReward},on:{click:t.onWithdrawal}},[t._v(" "+t._s(t.$t("CashWithdrawalReward"))+" ")])])]),a("div",{staticClass:"h5 li-h5title ban-start"},[a("div",{staticClass:"li-title",on:{click:t.h5_tab_li_evens}},[a("span",[t._v(" "+t._s(t.$t("LiquidityMining"))+" ")])]),a("div",{staticClass:"act-title act-mining"},[a("p",[t._v(" "+t._s(t.$t("TradePool")))]),a("p")])]),a("div",{staticClass:"h5 trading-banner"},[a("div",{staticClass:"ban-start trading-ban-list"},[a("div",[a("p",[t._v(" "+t._s(t.$t("TotalRewardOfCurrentPool")))]),a("p",[a("CountUp",{attrs:{endVal:t.trading_totalReward}}),a("span",{staticClass:"h5-sum"},[t._v("MDX")])],1)]),a("div",[a("p",[t._v(" "+t._s(t.$t("CurrentIndividualWithdrawableBonus")))]),a("p",[a("CountUp",{attrs:{endVal:t.trading_userReward,options:t.trading_options}}),a("span",{staticClass:"h5-sum"},[t._v("MDX")])],1)])]),a("div",{staticClass:"ban-center "},[a("button",{staticClass:"new-banner-btn-dra",attrs:{disabled:!t.trading_userReward},on:{click:t.onWithdrawal}},[t._v(" "+t._s(t.$t("CashWithdrawalReward"))+" ")])])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:"/boardroom"==t.routerName,expression:"routerName=='/boardroom'"}]},[a("div",{staticClass:"pc"},[a("p",{staticClass:"home__banner-title"},[t._v(" "+t._s(t.$t("text9"))+" ")]),a("p",{staticClass:"home__banner-describe"},[t._v(" "+t._s(t.$t("text8"))+" ")])]),a("div",{staticClass:"h5 boardroom-banner__title"},[t._v(" "+t._s(t.$t("Directors"))+" ")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:"/cross-chain"==t.routerName,expression:"routerName=='/cross-chain'"}]},[a("div",{staticClass:"pc"},[a("p",{staticClass:"home__banner-title"},[t._v(" "+t._s(t.$t("MDEForEcoEurrencyTrading"))+" ")]),a("p",{staticClass:"home__banner-describe"},[t._v(" "+t._s(t.$t("lightText"))+" ")])]),a("div",{staticClass:"h5 boardroom-banner__title"},[t._v(" "+t._s(t.$t("crossChainBridge"))+" ")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:!["/cross-chain","/boardroom","/trading","/liquidity","/"].includes(t.routerName),expression:"!['/cross-chain', '/boardroom', '/trading', '/liquidity', '/'].includes(routerName)"}]},[a("div",{staticClass:"pc"},[a("p",{staticClass:"home__banner-title"},[t._v(" "+t._s(t.$t("poolTitle"))+" ")]),a("p",{staticClass:"home__banner-describe"},[t._v(" "+t._s("Heco"==t.chainName?t.$t("poolDescribe1"):t.$t("poolDescribe2"))+" ")])]),a("div",{staticClass:"h5 boardroom-banner__title"},[t._v(" "+t._s(t.$t("transaction"))+" ")])])])},e=[],n=(a("466d"),a("ac1f"),a("a9e3"),a("5319"),{name:"HomeBanner",data:function(){return{userReward:0,onresizeIsPC:!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)}},props:{liquidity_mdex:{type:String|Number,default:0},trading_userReward:{type:String|Number|Boolean,default:0},trading_options:{type:Object|Array,default:function(){}},trading_totalReward:{type:String|Number|Boolean,default:0}},computed:{routerName:function(){return this.$store.state.routerName},chainName:function(){return this.$store.state.chainName}},mounted:function(){var t=this;window.onresize=function(){t.onresizeIsPC=!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)}},$computed:{bnp:"bnp"},methods:{h5_tab_li_evens:function(){this.$router.replace({path:"/liquidity"})},h5_tab_evens:function(){this.$router.replace({path:"/trading"})},onWithdrawal:function(){this.$emit("on-withdrawal")}}}),o=n,r=(a("b438"),a("2877")),c=Object(r["a"])(o,i,e,!1,null,"5fd77284",null);s["a"]=c.exports},b438:function(t,s,a){"use strict";a("f9d7")},b700:function(t,s,a){t.exports=a.p+"img/new6.8d53a651.png"},bb51:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"home",class:t.chainName},[i("title-banner"),i("div",{staticClass:"home__assets"},[i("div",{staticClass:"container container-color"},[i("div",{staticClass:"new-container"},[i("p",{staticClass:"home__assets-amount"},[i("span",{staticClass:"amount-icon"}),i("span",[t._v(" "+t._s(t.$t("MDXtotal"))+t._s(t.onresizeIsPC?"":"(USDT)")+" ")]),i("CountUp",{staticClass:"amount-number",attrs:{endVal:t.homeData.mdex_tvl||0}}),t.onresizeIsPC?i("span",{staticClass:"amount-unit"},[t._v(" USDT ")]):t._e()],1),i("div",{staticClass:"home__assets-price-card"},[i("div",{staticClass:"price__card-item no-margin"},[i("div",{staticClass:"card__item-key"},[t._v(t._s(t.$t("CurrentMDEXPrice")))]),i("div",{staticClass:"card__item-value"},[t._v(" $"+t._s(t.currentPrice)+" ")])]),i("div",{staticClass:"price__card-item no-margin"},[i("div",{staticClass:"card__item-key"},[t._v(t._s(t.$t("Yourbalance")))]),i("div",{staticClass:"card__item-value"},[i("CountUp",{attrs:{endVal:t.balance||0}})],1)]),i("div",{staticClass:"price__card-item"},[i("div",{staticClass:"card__item-key"},[t._v(" "+t._s(t.$t("PendingAirdropRewards"))+" ")]),i("div",{staticClass:"card__item-value"},[t._v(" $"),i("CountUp",{attrs:{endVal:t.rewardeData.rewardAmount||0,options:t.options}})],1)]),i("div",{staticClass:"price__card-item"},[i("div",{staticClass:"card__item-key"},[t._v(" "+t._s(t.$t("AmountToBeRepurchased"))+" ")]),i("div",{staticClass:"card__item-value"},[t._v(" $"),i("CountUp",{attrs:{endVal:t.rewardeData.destroyAmount||0,options:t.options}})],1)]),i("div",{staticClass:"price__card-item"},[i("div",{staticClass:"card__item-key"},[t._v(t._s(t.$t("DeflationRate")))]),i("div",{staticClass:"card__item-value"},[i("CountUp",{attrs:{endVal:t.supply>0?100*t.rewardeData.totalDestroy/t.supply:0}}),t._v("% ")],1)]),i("div",{staticClass:"price__card-item time"},[i("div",{staticClass:"card__item-key"},[t._v(t._s(t.$t("Countdown")))]),i("div",{staticClass:"card__item-value new-item-value"},[i("span",[t._v(t._s(t.formatCountdownDay.d))]),t._v(":"),i("span",[t._v(t._s(t.formatCountdownDay.h))]),t._v(":"),i("span",[t._v(t._s(t.formatCountdownDay.m))]),t._v(":"),i("span",[t._v(t._s(t.formatCountdownDay.s))])])])]),i("div",{staticClass:"home-input__wrap"},[i("div",{staticClass:"input-wrap"},[i("header",{staticClass:"borad"},[i("span",[t._v(t._s(t.$t("Boardroom")))]),i("router-link",{attrs:{to:"/boardroom"}},[t._v(" "+t._s(t.$t("seeMore"))+" "),i("img",{staticClass:"more",attrs:{src:a("69f5")}})])],1),i("table",{attrs:{border:"0",cellpadding:"0",cellspacing:"0"}},[i("thead",[i("th",{staticClass:"al"},[t._v(t._s(t.$t("Staked")))]),i("th",{staticClass:" jar"},[t._v(t._s(t.$t("Earned")))]),i("th",{staticClass:"ar"},[t._v(t._s(t.$t("APY")))]),i("th",{staticClass:"operation"},[t._v(t._s(t.$t("operation")))])]),i("tbody",t._l(t.boardRoomData,(function(s){return i("tr",{key:s.earnedToken+s.pid},[i("td",{staticClass:"al"},[t._v(t._s(s.pool_name))]),i("td",[t._v(t._s(s.earnedToken))]),i("td",{staticClass:"art"},[i("CountUp",{attrs:{endVal:s.pool_apy||0}}),t._v("% ")],1),i("td",{staticClass:"operation-ar"},[i("div",{staticClass:"oper-div"},[i("router-link",{attrs:{to:"/pool/boardroom/"+s.earnedToken.toLowerCase()+"/"+s.pid}},[t._v(t._s(t.$t("Stakeds")))]),i("span",[t._v("|")]),i("a",{attrs:{href:t.globalGetTokenConfig(s),target:"_blank"}},[t._v(t._s(t.$t("transactions")))])],1)])])})),0)])]),i("div",{staticClass:"input-wrap"},[i("header",{staticClass:"liuq"},[i("span",[t._v(t._s(t.$t("Pool")))]),i("router-link",{attrs:{to:"/liquidity"}},[t._v(t._s(t.$t("seeMore"))+" "),i("img",{staticClass:"more",attrs:{src:a("69f5")}})])],1),i("table",{attrs:{border:"0",cellpadding:"0",cellspacing:"0"}},[i("thead",[i("th",{staticClass:"al"},[t._v(t._s(t.$t("Staked")))]),i("th",{staticClass:" jar"},[t._v(t._s(t.$t("Earned")))]),i("th",{staticClass:"ar"},[t._v(t._s(t.$t("APY")))]),i("th",{staticClass:"operation"},[t._v(t._s(t.$t("operation")))])]),i("tbody",t._l(t.airdropList,(function(s){return i("tr",{key:s.pool_name},[i("td",{staticClass:"al"},[t._v(t._s(s.pool_name))]),i("td",[t._v("MDX")]),i("td",{staticClass:"art"},[i("CountUp",{attrs:{endVal:365*s.pool_apy}}),t._v("% ")],1),i("td",{staticClass:"operation-ar"},[i("div",{staticClass:"oper-div"},[i("router-link",{attrs:{to:"pool/liquidity/mdx/"+s.pid}},[t._v(t._s(t.$t("Stakeds")))]),i("span",[t._v("|")]),i("a",{attrs:{href:t.globalGetTokenConfig(s),target:"_blank"}},[t._v(t._s(t.$t("transactions")))])],1)])])})),0)])])]),i("div",{staticClass:"home-input__current"},[i("div",{staticClass:"current"},[i("p",{staticClass:"desc"},[t._v(t._s(t.$t("CurrentLiquidity")))]),i("p",{staticClass:"amount"},[i("CountUp",{attrs:{endVal:t.supply||0}})],1)]),i("div",{staticClass:"current2 current"},[i("p",{staticClass:"desc"},[t._v(t._s(t.$t("MarketCap"))+"（$）")]),i("p",{staticClass:"amount"},[i("CountUp",{attrs:{endVal:t.market||0}})],1)])]),i("div",{staticClass:"home-count__wrap"},[t.onresizeIsPC?i("div",{staticClass:"home-count__warp"},[i("div",{staticClass:"count-wrap"},[i("div",{staticClass:"top count margin-right"},[i("span",{staticClass:"desc"},[t._v(" "+t._s(t.$t("PlatformTransactionVolume"))+" ")]),i("span",{staticClass:"amount"},[t._v(" $ "),i("CountUp",{attrs:{endVal:Number(t.homeData.volume_24hr)||0}})],1)]),i("div",{staticClass:"top count margin-left"},[i("span",{staticClass:"desc"},[t._v(t._s(t.$t("HandlingFee")))]),i("span",{staticClass:"amount"},[t._v(" $ "),i("CountUp",{attrs:{endVal:Number(t.homeData.fee_24hr)||0}})],1)])]),i("div",{staticClass:"count-wrap"},[i("div",{staticClass:"down count margin-right"},[i("span",{staticClass:"desc"},[t._v(" "+t._s(t.$t("TotalAirdropRewards"))+" ")]),i("span",{staticClass:"amount"},[t._v(" $ "),i("CountUp",{attrs:{endVal:t.rewardeData.totalReward||0}})],1)]),i("div",{staticClass:"down count margin-left"},[i("span",{staticClass:"desc"},[t._v(t._s(t.$t("RepurchaseAmount")))]),i("span",{staticClass:"amount"},[t._v(" $ "),i("CountUp",{attrs:{endVal:t.rewardeData.totalBuy||0}})],1)])])]):t._e(),t.isMobile?i("div",{staticClass:"home-count__warp"},[i("div",{staticClass:"count"},[i("span",{staticClass:"desc"},[t._v(" "+t._s(t.$t("PlatformTransactionVolume"))+" ")]),i("span",{staticClass:"amount"},[t._v(" $ "),i("CountUp",{attrs:{endVal:Number(t.homeData.volume_24hr)||0}})],1)]),i("div",{staticClass:"count"},[i("span",{staticClass:"desc"},[t._v(t._s(t.$t("RepurchaseAmount")))]),i("span",{staticClass:"amount"},[t._v(" $ "),i("CountUp",{attrs:{endVal:t.rewardeData.totalBuy||0}})],1)]),i("div",{staticClass:"count"},[i("span",{staticClass:"desc"},[t._v(" "+t._s(t.$t("TotalAirdropRewards"))+" ")]),i("span",{staticClass:"amount"},[t._v(" $ "),i("CountUp",{attrs:{endVal:t.rewardeData.totalReward||0}})],1)]),i("div",{staticClass:"count"},[i("span",{staticClass:"desc"},[t._v(t._s(t.$t("HandlingFee")))]),i("span",{staticClass:"amount"},[t._v(" $ "),i("CountUp",{attrs:{endVal:Number(t.homeData.fee_24hr)||0}})],1)])]):t._e()])])])]),i("div",{staticClass:"home-using"},[i("div",{staticClass:"container"},[i("div",{staticClass:"home-using__title"},[t._v(t._s(t.$t("MDXUsageScenarios")))]),i("div",{staticClass:"home-using__content"},[i("div",{staticClass:"home-using__item"},[i("div",{staticClass:"home-using__item-icon icon-1"}),i("div",{staticClass:"home-using__item-title"},[t._v(t._s(t.$t("Repurchase")))]),i("div",{staticClass:"home-using__item-describe"},[t._v(" "+t._s(t.$t("RepurchaseDesc"))+" ")])]),i("div",{staticClass:"home-using__item"},[i("div",{staticClass:"home-using__item-icon icon-2"}),i("div",{staticClass:"home-using__item-title"},[t._v(t._s(t.$t("airdrop")))]),i("div",{staticClass:"home-using__item-describe"},[t._v(t._s(t.$t("HT")))])]),i("div",{staticClass:"home-using__item"},[i("div",{staticClass:"home-using__item-icon icon-3"}),i("div",{staticClass:"home-using__item-title"},[t._v("Dao")]),i("div",{staticClass:"home-using__item-describe"},[t._v(t._s(t.$t("DaoDesc")))])])])])]),i("div",{staticClass:"home-mechanism home-mechanism-h5"},[i("div",{staticClass:"container"},[i("div",{staticClass:"home-mechanism__title"},[t._v(t._s(t.$t("MDXCheck")))]),i("div",{staticClass:"home-mechanism__content"},[i("div",{staticClass:"home-mechanism__item"},[i("img",{staticClass:"home-mechanism__item-logo",attrs:{src:a("295e")}})]),i("div",{staticClass:"home-mechanism__item"},[i("img",{staticClass:"home-mechanism__item-logo",attrs:{src:a("c04d")}})]),i("div",{staticClass:"home-mechanism__item"},[i("img",{staticClass:"home-mechanism__item-logo",attrs:{src:a("3790")}})])])])]),i("div",{staticClass:"home-mechanism"},[i("div",{staticClass:"container"},[i("div",{staticClass:"home-mechanism__title"},[t._v(t._s(t.$t("CooperativePartner")))]),i("div",{staticClass:"home-mechanism__content"},[i("div",{staticClass:"home-mechanism__item_list"},[i("img",{staticClass:"home-mechanism__item-logo",attrs:{src:a("4baa")}})]),i("div",{staticClass:"home-mechanism__item_list"},[i("img",{staticClass:"home-mechanism__item-logo",attrs:{src:a("deb1")}})]),i("div",{staticClass:"home-mechanism__item_list"},[i("img",{staticClass:"home-mechanism__item-logo",attrs:{src:a("b700")}})]),i("div",{staticClass:"home-mechanism__item_list"},[i("img",{staticClass:"home-mechanism__item-logo",attrs:{src:a("86e3")}})])]),i("div",{staticClass:"home-mechanism__contents"},[i("div",{staticClass:"home-mechanism__item_list"},[i("img",{staticClass:"home-mechanism__item-logo",attrs:{src:a("c59c")}})]),i("div",{staticClass:"home-mechanism__item_list"},[i("img",{staticClass:"home-mechanism__item-logo",attrs:{src:a("e493")}})]),i("div",{staticClass:"home-mechanism__item_list"},[i("img",{staticClass:"home-mechanism__item-logo",attrs:{src:a("9bb7")}})]),i("div",{staticClass:"home-mechanism__item_list"},[i("img",{staticClass:"home-mechanism__item-logo",attrs:{src:a("5f94")}})])]),i("div",{staticClass:"home-mechanism__contents-end"},[i("div",{staticClass:"home-mechanism__item_list"},[i("img",{staticClass:"home-mechanism__item-logo",attrs:{src:a("e0d7")}})]),i("div",{staticClass:"home-mechanism__item_list"},[i("img",{staticClass:"home-mechanism__item-logo",attrs:{src:a("80b4")}})]),i("div",{staticClass:"home-mechanism__item_list"},[i("img",{staticClass:"home-mechanism__item-logo",attrs:{src:a("6232")}}),i("div",{staticClass:"home-mechanism__contents"})])])])])],1)},e=[],n=a("2909"),o=(a("466d"),a("ac1f"),a("fb6a"),a("a434"),a("ed08")),r=a("2a5e"),c=a("aa95"),l=null,d=null,_={name:"Home",components:{TitleBanner:c["a"]},data:function(){return{options:{decimalPlaces:0},countdown:parseInt((new Date("2021/07/21 07:42:17 GMT+08:00").getTime()-(new Date).getTime())/1e3),liquidityApys:{},onresizeIsPC:!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)}},$computed:{bnp:"bnp"},methods:{startCountdown:function(){var t=this;l=setInterval((function(){t.countdown-=1,t.countdown<=0&&clearInterval(l)}),1e3)}},destroyed:function(){clearInterval(l),clearInterval(d)},watch:{countdown:function(){clearInterval(l),this.startCountdown()}},mounted:function(){var t=this;this.startCountdown(),window.onresize=function(){t.onresizeIsPC=!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)}},computed:{homeData:function(){return this.$store.state.homeData},rewardeData:function(){return this.$store.state.boardRoom.rewardeData},isMobile:function(){return this.$store.getters.isMobile},isPC:function(){return this.$store.getters.isPC},currentChainBoardRoomData:function(){return this.$store.getters["boardRoom/currentChainBoardRoomData"]},currentPrice:function(){var t;return Object(r["a"])(null===(t=this.homeData.mdex_info)||void 0===t?void 0:t.price,4,"round")},supply:function(){var t;return 1*(null===(t=this.homeData.mdex_info)||void 0===t?void 0:t.supply)||0},market:function(){var t;return 1*(null===(t=this.homeData.mdex_info)||void 0===t?void 0:t.market)||0},balance:function(){var t=this.$store.state.balance;return null!=t?t:0},boardRoomData:function(){return Object(n["a"])(this.currentChainBoardRoomData.allData).sort((function(t,s){return s.pool_apy-t.pool_apy})).slice(0,4)},formatCountdown:function(){return Object(o["d"])(this.countdown)},formatCountdownDay:function(){return Object(o["e"])(this.countdown)},apylist:function(){return this.$store.state.liquidity.apylist},airdropList:function(){var t=this.apylist,s=[];for(var a in t)s.push(Object.assign({pid:a},t[a]));return s.sort((function(t,s){return s.pool_apy-t.pool_apy})),s.splice(0,4)}},created:function(){},beforeCreate:function(){var t=this;d=setInterval((function(){t.$store.dispatch("getBalance")}),9e3)}},m=_,u=(a("0a75"),a("2877")),v=Object(u["a"])(m,i,e,!1,null,"02fbf75c",null);s["default"]=v.exports},c04d:function(t,s,a){t.exports=a.p+"img/new2.6efbe4df.png"},c59c:function(t,s,a){t.exports=a.p+"img/new8.1e5f2a5d.png"},deb1:function(t,s,a){t.exports=a.p+"img/new5.e2b5cab9.png"},e0d7:function(t,s,a){t.exports=a.p+"img/new12.1523d7b1.png"},e493:function(t,s,a){t.exports=a.p+"img/new9.e49a0182.png"},f9d7:function(t,s,a){}}]);