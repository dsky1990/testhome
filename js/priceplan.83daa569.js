(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["priceplan"],{"1be5":function(t,a,s){},3847:function(t,a,s){"use strict";s("ea9b")},c438:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"title-banner",class:[t.getLanguage,t.chainName]},[["/buyback","/pastrecord"].includes(t.routerName)?s("div",{staticClass:"banner-con",style:{backgroundImage:"url("+t.getImg("buyback")+")"}}):t._e(),s("div",{directives:[{name:"show",rawName:"v-show",value:"/liquidity"==t.routerName,expression:"routerName == '/liquidity'"}],staticClass:"banner-bar text"},[s("div",{staticClass:"pc"},[s("h1",{staticClass:"home__banner-title"},[t._v(" "+t._s(t.$t("CurrentTransacObtainCurrencytionVolume"))+" ")]),s("div",{staticClass:"ban-center"},[s("p",{staticClass:"liquidity-mdx ban-center"},[t._v(" "+t._s(t.$t("MDXtotal"))+" "),s("CountUp",{attrs:{endVal:t.liquidity_mdex||0}}),t._v(" USDT ")],1)])]),s("div",{staticClass:"h5 li-h5title ban-start text Heavy"},[s("div",{staticClass:"act-title"},[s("p",[t._v(t._s(t.$t("LiquidityMining")))]),s("p")]),s("router-link",{staticClass:"li-title",attrs:{to:"/trading",tag:"div",exact:""}},[s("span",{staticClass:"text Heavy"},[t._v(" "+t._s(t.$t("TradePool"))+" ")])])],1),s("div",{staticClass:"h5 li-banner-total"},[s("div",{staticClass:"banner-tit"},[t._v(t._s(t.$t("TotalLockIn"))+" "),s("span",{staticClass:"numbers"},[t._v("(USDT)")])]),s("div",{staticClass:"banner-sum numbers"},[s("CountUp",{attrs:{endVal:t.liquidity_mdex||0}})],1)])]),s("div",{directives:[{name:"show",rawName:"v-show",value:"/trading"==t.routerName,expression:"routerName == '/trading'"}],staticClass:"banner-bar text"},[s("div",{staticClass:"pc"},[s("h1",{staticClass:"home__banner-title"},[t._v(" "+t._s(t.$t("tradeTitle"))+" ")]),s("div",{staticClass:"new-banner-totals"},[s("div",{staticClass:"new-banner-total-white"},[s("div",{staticClass:"list-white"},[s("span",{staticClass:"list-white-one"},[t._v(" "+t._s(t.$t("TotalRewardOfCurrentPool"))+" ")]),s("span",{staticClass:"list-white-own numbers"},[s("CountUp",{attrs:{endVal:t.trading_totalReward}})],1),s("span",{staticClass:"list-white-one"},[t._v("MDX")])]),s("div",{staticClass:"list-white"},[s("span",{staticClass:"list-white-one"},[t._v(" "+t._s(t.$t("CurrentIndividualWithdrawableBonus"))+" ")]),s("span",{staticClass:"list-white-own numbers"},[s("CountUp",{attrs:{endVal:t.trading_userReward,options:t.trading_options}})],1),s("span",{staticClass:"list-white-one"},[t._v("MDX")])])]),s("button",{staticClass:"new-list-white-banner",attrs:{disabled:!t.trading_userReward},on:{click:t.onWithdrawal}},[t._v(" "+t._s(t.$t("CashWithdrawalReward"))+" ")])])]),s("div",{staticClass:"h5 li-h5title ban-start"},[s("router-link",{staticClass:"li-title",attrs:{to:"/liquidity",tag:"div",exact:""}},[s("span",[t._v(" "+t._s(t.$t("LiquidityMining"))+" ")])]),s("div",{staticClass:"act-title act-mining text Heavy"},[s("p",[t._v(t._s(t.$t("TradePool")))]),s("p")])],1),s("div",{staticClass:"h5 trading-banner"},[s("div",{staticClass:"ban-start trading-ban-list"},[s("div",[s("p",[t._v(t._s(t.$t("TotalRewardOfCurrentPool")))]),s("p",{staticClass:"numbers"},[s("CountUp",{attrs:{endVal:t.trading_totalReward}}),s("span",{staticClass:"h5-sum"},[t._v("MDX")])],1)]),s("div",[s("p",[t._v(t._s(t.$t("CurrentIndividualWithdrawableBonus")))]),s("p",{staticClass:"numbers"},[s("CountUp",{attrs:{endVal:t.trading_userReward,options:t.trading_options}}),s("span",{staticClass:"h5-sum"},[t._v("MDX")])],1)])]),s("div",{staticClass:"ban-center"},[s("button",{staticClass:"new-banner-btn-dra text Bold",attrs:{disabled:!t.trading_userReward},on:{click:t.onWithdrawal}},[t._v(" "+t._s(t.$t("CashWithdrawalReward"))+" ")])])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:"/boardroom"==t.routerName,expression:"routerName == '/boardroom'"}],staticClass:"banner-bar text"},[s("div",{staticClass:"pc"},[s("h1",{staticClass:"home__banner-title"},[t._v(" "+t._s(t.$t("text9"))+" ")]),s("h2",{staticClass:"home__banner-describe"},[t._v(" "+t._s(t.$t("text8"))+" ")])]),s("div",{staticClass:"h5 boardroom-banner__title"},[t._v(" "+t._s(t.$t("Directors"))+" ")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:"/bridge"==t.routerName,expression:"routerName == '/bridge'"}],staticClass:"banner-bar text"},[s("div",{staticClass:"pc"},[s("h1",{staticClass:"home__banner-title"},[t._v(" "+t._s(128==t.chainId?t.$t("MDEForEcoEurrencyTrading1"):56==t.chainId?t.$t("MDEForEcoEurrencyTrading2"):t.$t("MDEForEcoEurrencyTrading3"))+" ")]),s("h2",{staticClass:"home__banner-describe"},[t._v(" "+t._s(t.$t("lightText"))+" ")])]),s("div",{staticClass:"h5 boardroom-banner__title"},[t._v(" "+t._s(t.$t("crossChainBridge"))+" ")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:["BoardroomPool","Lockup"].includes(t.$route.name),expression:"['BoardroomPool', 'Lockup'].includes($route.name)"}],staticClass:"banner-bar text"},[s("div",{staticClass:"pc"},[s("h1",{staticClass:"home__banner-title"},[t._v(" "+t._s(t.$t("poolTitle"))+" ")]),s("h2",{staticClass:"home__banner-describe"},[t._v(" "+t._s(128==t.chainId?t.$t("poolDescribe1"):56==t.chainId?t.$t("poolDescribe2"):t.$t("poolDescribe3"))+" ")])]),s("div",{staticClass:"h5 boardroom-banner__title"},[t._v(" "+t._s(t.$t("transaction"))+" ")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:"/introduce"===t.routerName,expression:"routerName === '/introduce'"}],staticClass:"banner-bar text"},[s("div",{staticClass:"pc"},[s("h1",{staticClass:"home__banner-title"},[t._v(" "+t._s(t.$t("introduce"))+" ")]),s("h2",{staticClass:"introduceDsc"},[t._v(" "+t._s(t.$t("introduceDsc"))+" ")])]),t.isPC||"en"===t.$store.state.language?t._e():s("div",[s("h1",{staticClass:"introduce_banner"},[t._v(" "+t._s(t.$t("introduce"))+" ")]),s("h2",{staticClass:"introduceDsc"},[t._v(" "+t._s(t.$t("introduceDsc"))+" ")])]),t.isPC||"en"!==t.$store.state.language?t._e():s("div",[s("p",{staticClass:"text-info"},[t._v(t._s(t.$t("introduceComplete")))])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:"/priceplan"===t.routerName,expression:"routerName === '/priceplan'"}],staticClass:"banner-bar text"},[s("h1",{staticClass:"home__banner-title"},[t._v(" MDEX "+t._s(t.$t("sjrd"))+" ")]),s("h2",{staticClass:"introduceDsc"},[t._v(" "+t._s(t.$t("sjplantitle"))+" ")])])])},i=[],n=(s("a9e3"),s("99af"),{name:"HomeBanner",data:function(){return{}},props:{liquidity_mdex:{type:String|Number,default:0},trading_userReward:{type:String|Number|Boolean,default:0},trading_options:{type:Object|Array,default:function(){}},trading_totalReward:{type:String|Number|Boolean,default:0}},computed:{},mounted:function(){},$computed:{bnp:"bnp"},methods:{stitchingPic:function(){var t="";return this.isPC?t+="pc_":t+="h5_","zh-CN"===this.getLanguage?t+="zh-CN_":t+="en_",t+=this.chainName,t},getImg:function(t){var a={buyback:{"pc_zh-CN_Heco":"buyback_pc_zh-CN_Heco","pc_zh-CN_Bsc":"buyback_pc_zh-CN_Bsc",pc_en_Heco:"buyback_pc_en_Heco",pc_en_Bsc:"buyback_pc_en_Bsc","h5_zh-CN_Heco":"buyback_h5_zh-CN_Heco","h5_zh-CN_Bsc":"buyback_h5_zh-CN_Bsc",h5_en_Heco:"buyback_h5_en_Heco",h5_en_Bsc:"buyback_h5_en_Bsc"}};return s("e8b59")("./".concat(t,"/").concat(a[t][this.stitchingPic()],".png"))},onWithdrawal:function(){this.$emit("on-withdrawal")}}}),r=n,c=(s("3847"),s("2877")),o=Object(c["a"])(r,e,i,!1,null,"0317d858",null);a["a"]=o.exports},c4c1:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"main",class:[t.chainName,t.getLanguage]},[s("title-banner"),s("div",{staticClass:"introduce text"},[s("section",{staticClass:"banner"},[s("div",{staticClass:"plantitle"},[s("a",{attrs:{href:"mailto:developer@mdex.com"}},[s("span",[t._v(t._s(t.$t("tijiaoreport")))])])])]),s("div",{staticClass:"plan"},[s("h2",[t._v(t._s(t.$t("sjrd")))]),s("div",{staticClass:"title"},[s("h1",[t._v(t._s(t.$t("overview")))]),s("p",{domProps:{innerHTML:t._s(t.$t("overviewdetail"))}})]),s("div",{staticClass:"title"},[s("h1",[t._v(t._s(t.$t("Scopeapplication")))]),s("p",[t._v(t._s(t.$t("Scopeapplication1")))]),s("p",[t._v(t._s(t.$t("Scopeapplication2")))]),s("ul",[s("li",[s("a",{attrs:{href:"https://hecoinfo.com/address/0x25D2e80cB6B86881Fd7e07dd263Fb79f4AbE033c#code",target:"_blank"}},[t._v(" "+t._s(t.$t("Scopeapplication3"))+"(heco)")])]),s("li",[s("a",{attrs:{href:"https://bscscan.com/address/0x9C65AB58d8d978DB963e63f2bfB7121627e3a739#code",target:"_blank"}},[t._v(t._s(t.$t("Scopeapplication3"))+"(bsc)")])]),s("li",[s("a",{attrs:{href:"https://hecoinfo.com/address/0xFB03e11D93632D97a8981158A632Dd5986F5E909#code",target:"_blank"}},[t._v(" "+t._s(t.$t("Scopeapplication4")))])]),s("li",[s("a",{attrs:{href:"https://bscscan.com/address/0xc48FE252Aa631017dF253578B1405ea399728A50#code",target:"_blank"}},[t._v(t._s(t.$t("Scopeapplication5")))])]),s("li",[s("a",{attrs:{href:"https://hecoinfo.com/address/0x7373c42502874C88954bDd6D50b53061F018422e#code",target:"_blank"}},[t._v(" "+t._s(t.$t("Scopeapplication6"))+"(heco)")])]),s("li",[s("a",{attrs:{href:"https://bscscan.com/address/0x782395303692aBeD877d2737Aa7982345eB44c11#code",target:"_blank"}},[t._v(t._s(t.$t("Scopeapplication6"))+"(bsc)")])])]),s("p",[t._v(t._s(t.$t("ExternalContracts")))]),s("ul",[s("li",[s("a",{attrs:{href:"https://hecoinfo.com/address/0x46900C0c18ace98bAAB81561B9906Dc93287910C#code",target:"_blank"}},[t._v(" "+t._s(t.$t("ExternalContracts1"))+"(heco)")])]),s("li",[s("a",{attrs:{href:"https://bscscan.com/address/0x1308AF6853B449d7604C7544cb2170248527110F#code",target:"_blank"}},[t._v(t._s(t.$t("ExternalContracts1"))+"(bsc)")])]),s("li",[s("a",{attrs:{href:"https://bscscan.com/address/0x5FEF5CC8AE1E42c5299AAe05a2EFfA1634BA5E77#code",target:"_blank"}},[t._v(t._s(t.$t("ExternalContracts2")))])])]),s("p",[t._v(t._s(t.$t("followingsituations")))]),s("ul",[s("li",[t._v(t._s(t.$t("followingsituations1")))]),s("li",[t._v(t._s(t.$t("followingsituations2")))]),s("li",[t._v(" "+t._s(t.$t("followingsituations3"))+" ")])])]),s("div",{staticClass:"title"},[s("h1",[t._v(t._s(t.$t("RewardPlan")))]),s("p",[t._v(t._s(t.$t("RewardPlan1")))]),s("table",{staticClass:"numbers",attrs:{cellspacing:"0",cellpadding:"0",width:"80%"}},[s("tr",[s("th",[t._v(t._s(t.$t("Rating")))]),s("th",[t._v(t._s(t.$t("Rating1")))])]),s("tr",[s("td",[t._v(t._s(t.$t("Rating2"))+"(9.0-10.0)")]),s("td",{staticClass:"numbers"},[t._v("$60000 MDX")])]),s("tr",[s("td",[t._v(t._s(t.$t("Rating3"))+"(7.0-8.9)")]),s("td",[t._v("$50000 MDX")])]),s("tr",[s("td",[t._v(t._s(t.$t("Rating4"))+"(4.0-6.9)")]),s("td",[t._v("$10000 MDX")])]),s("tr",[s("td",[t._v(t._s(t.$t("Rating5"))+"(0.1-3.9)")]),s("td",[t._v("$6000 MDX")])])]),s("p",[t._v(" "+t._s(t.$t("Rating6"))+" ")])]),s("div",{staticClass:"title"},[s("h1",[t._v(t._s(t.$t("rewardtimeline")))]),s("p",{domProps:{innerHTML:t._s(t.$t("rewardtimeline1"))}})]),s("div",{staticClass:"title"},[s("h1",[t._v(t._s(t.$t("submitreport0")))]),s("i18n",{attrs:{path:"submitreport",tag:"p"}},[s("a",{attrs:{place:"action",href:"mailto:developer@mdex.com",target:"_blank"}},[t._v("developer@mdex.com")])]),s("p",[t._v(t._s(t.$t("submitreport1")))]),s("ul",[s("li",[t._v(t._s(t.$t("submitreport2")))]),s("li",[t._v(t._s(t.$t("submitreport3")))]),s("li",[t._v(t._s(t.$t("submitreport4")))]),s("li",[t._v(t._s(t.$t("submitreport5")))])])],1),s("div",{staticClass:"title"},[s("h1",[t._v(t._s(t.$t("TermsConditions")))]),s("p",{domProps:{innerHTML:t._s(t.$t("TermsConditions2"))}})]),s("div",{staticClass:"title"},[s("h1",[t._v(t._s(t.$t("SecurityConsultant")))]),s("p",[t._v(t._s(t.$t("SecurityConsultant0")))]),s("p",{domProps:{innerHTML:t._s(t.$t("SecurityConsultant1"))}})]),s("div",{staticClass:"title"},[s("h1",[t._v(t._s(t.$t("Otherterms")))]),s("p",{domProps:{innerHTML:t._s(t.$t("Otherterms1"))}})])])])],1)},i=[],n=s("c438"),r={name:"introduce",components:{TitleBanner:n["a"]},computed:{getLanguage:function(){return this.$store.state.language},bannerName:function(){return"en"===this.$store.state.language?"banner_en":"banner"}}},c=r,o=(s("e98c"),s("2877")),l=Object(o["a"])(c,e,i,!1,null,"d534d176",null);a["default"]=l.exports},e8b59:function(t,a,s){var e={"./buyback/buyback_h5_en_Bsc.png":"2063","./buyback/buyback_h5_en_Heco.png":"4cee","./buyback/buyback_h5_zh-CN_Bsc.png":"e584","./buyback/buyback_h5_zh-CN_Heco.png":"f1b0","./buyback/buyback_pc_en_Bsc.png":"7bdc","./buyback/buyback_pc_en_Heco.png":"5150","./buyback/buyback_pc_zh-CN_Bsc.png":"175c","./buyback/buyback_pc_zh-CN_Heco.png":"c7ec"};function i(t){var a=n(t);return s(a)}function n(t){if(!s.o(e,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e[t]}i.keys=function(){return Object.keys(e)},i.resolve=n,t.exports=i,i.id="e8b59"},e98c:function(t,a,s){"use strict";s("1be5")},ea9b:function(t,a,s){}}]);