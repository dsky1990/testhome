(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Bridge"],{"06b8":function(s,t,e){"use strict";e("8f2d")},"318e":function(s,t,e){"use strict";e("5445")},5445:function(s,t,e){},"62b8":function(s,t,e){},64173:function(s,t,e){"use strict";e("62b8")},"751f":function(s,t,e){"use strict";e("e3a2")},"75b9":function(s,t,e){"use strict";e("cc47")},7643:function(s,t,e){"use strict";e.r(t);var a=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",{staticClass:"wind—mining",class:s.getLanguage},[a("title-banner"),a("div",{staticClass:"wind-mining__content text"},[a("link-form",{directives:[{name:"show",rawName:"v-show",value:1==s.nextPapg,expression:"nextPapg==1"}],on:{"on-next":s.changeNext,"set-next-data":s.setNextAssets,"on-show-info":s.showInfo}}),a("authorization",{directives:[{name:"show",rawName:"v-show",value:2==s.nextPapg,expression:"nextPapg==2"}],attrs:{assets:s.nextAssets},on:{"on-next":s.changeNext,"on-show-info":s.showInfo}}),a("chain-history",{directives:[{name:"show",rawName:"v-show",value:3==s.nextPapg,expression:"nextPapg==3"}],on:{"on-details":s.goDetails,back:function(t){return s.onBack(2)}}}),a("chain-details",{directives:[{name:"show",rawName:"v-show",value:4==s.nextPapg,expression:"nextPapg==4"}],attrs:{list:s.detailsList,address:s.inputAddress},on:{back:function(t){return s.onBack(4)},"next-back":function(t){return s.onBack(2)},"on-show-info":s.showInfo}}),a("div",{directives:[{name:"show",rawName:"v-show",value:s.showinfo,expression:"showinfo"}],staticClass:"showinfo"},[a("div",{staticClass:"msg"},[a("img",{staticClass:"close-icon",attrs:{src:e("c2f4")},on:{click:s.hide}}),a("p",{directives:[{name:"show",rawName:"v-show",value:1==s.nextPapg,expression:"nextPapg==1"}],staticClass:"title text Heavy"},[s._v(s._s(s.$t("DailyCrossChainLimitDescription"))+"：")]),a("p",{directives:[{name:"show",rawName:"v-show",value:2==s.nextPapg,expression:"nextPapg==2"}],staticClass:"title text Heavy"},[s._v(s._s(s.$t("FeeDescription")))]),a("p",{directives:[{name:"show",rawName:"v-show",value:1==s.nextPapg,expression:"nextPapg==1"}],staticClass:"text"},[s._v(s._s(s.$t("DailyCrossChainInfo")))]),a("p",{directives:[{name:"show",rawName:"v-show",value:2==s.nextPapg,expression:"nextPapg==2"}],staticClass:"text"},[s._v(s._s(s.$t("FeeDescriptionInfo")))]),a("div",{directives:[{name:"show",rawName:"v-show",value:4==s.nextPapg,expression:"nextPapg==4"}],staticClass:"text"},[a("span",[s._v(s._s(s.showinfoText))])])])])],1),s._m(0)],1)},i=[function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"Powered textEn"},[e("span",[s._v("Powered By Poly.Network")])])}],n=e("1da1"),o=(e("96cf"),function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",{staticClass:"pc-section",class:s.chainName},[a("div",{staticClass:"between bet-item numbers"},[a("div",{staticClass:"bet-info"},[a("div",{staticClass:"bet-text"},[s._v(s._s(s.$t("from"))+" ")]),a("div",{staticClass:"bet-selete"},[a("p",{staticClass:"bet-p-img center"},[a("show-img",{attrs:{name:s.assets.startChain}})],1),a("p",{staticClass:"bet-p-text"},[s._v(s._s(s.assets.startChain))])])]),s._m(0),a("div",{staticClass:"bet-info"},[a("div",{staticClass:"bet-text"},[s._v(s._s(s.$t("to")))]),a("div",{staticClass:"bet-selete"},[a("p",{staticClass:"bet-p-img center"},[a("show-img",{attrs:{name:s.assets.endChain}})],1),a("p",{staticClass:"bet-p-text"},[s._v(s._s(s.assets.endChain))])])])]),a("div",{staticClass:"account-item"},[a("div",{staticClass:"between account-msg"},[a("span",{staticClass:"text Bold"},[s._v(" "+s._s(s.$t("AmountToBeTrasferred"))+" ")]),a("span",{staticClass:"numbers"},[s._v(s._s(s.getformatFloat(s.assets.moneyAssets))+" "+s._s(s.assets.currency))])]),a("div",{staticClass:"between account-info"},[a("span",[s._v(" "+s._s(s.$t("ReceivinAddress"))+" ")]),a("span",{staticClass:"numbers"},[s._v(s._s(s.setAddress(s.assets.address)))])])]),a("div",{staticClass:"account-item"},[a("div",{staticClass:"between account-msg"},[a("span",{staticClass:"text Bold"},[s._v(s._s(s.$t("AmountReceived")))]),a("span",{staticClass:"numbers"},[s._v(s._s(s.assets.moneyPractical)+" "+s._s(s.assets.currency))])]),a("div",{staticClass:"between account-info"},[a("div",{staticClass:"start",on:{click:function(t){return s.$emit("on-show-info")}}},[a("span",[s._v(s._s(s.$t("TransactionFee")))]),a("img",{staticClass:"point-img",attrs:{src:e("3a4a"),alt:""}})]),a("div",{staticClass:"numbers"},[a("span",[s._v(s._s(s.getformatFloat(this.assets.Token_money))+" "+s._s(s.assets.currency))]),a("span",{staticClass:"acc-text"},[s._v("($"+s._s(s.getformatFloat(this.assets.USDT_money))+")")])])])]),a("div",{staticClass:"text-tip"},[a("img",{attrs:{src:e("d119"),alt:""}}),a("span",[s._v(" "+s._s(s.$t("AreOfEquivalentValue"))+" ")])]),a("button",{staticClass:"link-button",attrs:{disabled:Number(this.assets.moneyAssets)<Number(this.assets.Token_money)},on:{click:s.Authorization}},[s._v(" "+s._s(s.$t("Authorization"))+" ")]),a("div",{staticClass:"back center",on:{click:s.lastLine}},[a("span",[s._v(s._s(s.$t("Return")))])])])}),r=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"bet-img center"},[a("img",{staticClass:"point-img",attrs:{src:e("8962"),alt:""}})])}],c=e("2a5e"),l=e("ace5"),h=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("span",{staticClass:"span"},[a("img",{directives:[{name:"show",rawName:"v-show",value:"PolyNetwork"==s.name,expression:"name=='PolyNetwork'"}],staticClass:"bet-icon",attrs:{src:e("e495"),alt:""}}),a("img",{directives:[{name:"show",rawName:"v-show",value:"HECO"==s.name,expression:"name=='HECO'"}],staticClass:"bet-icon",attrs:{src:e("04a2"),alt:""}}),a("img",{directives:[{name:"show",rawName:"v-show",value:"MDX"==s.name,expression:"name=='MDX'"}],staticClass:"bet-icon",attrs:{src:e("89dd"),alt:""}}),a("img",{directives:[{name:"show",rawName:"v-show",value:"BSC"==s.name,expression:"name=='BSC'"}],staticClass:"bet-icon",attrs:{src:e("fab7"),alt:""}}),a("img",{directives:[{name:"show",rawName:"v-show",value:"Ethereum"==s.name,expression:"name=='Ethereum'"}],staticClass:"bet-icon",attrs:{src:e("6576"),alt:""}}),a("img",{directives:[{name:"show",rawName:"v-show",value:"FEI"==s.name,expression:"name=='FEI'"}],staticClass:"bet-icon",attrs:{src:e("1e58"),alt:""}}),a("img",{directives:[{name:"show",rawName:"v-show",value:"Tribe"==s.name,expression:"name=='Tribe'"}],staticClass:"bet-icon",attrs:{src:e("6f82"),alt:""}})])},u=[],d={name:"show-img",data:function(){return{}},props:{name:{type:String,default:""}}},m=d,_=(e("64173"),e("2877")),b=Object(_["a"])(m,h,u,!1,null,"ebd05fd8",null),v=b.exports,C=null,p={name:"authorization",data:function(){return{dialogVisible:!1}},components:{showImg:v},props:{assets:{type:Object,default:function(){return{}}}},beforeMount:function(){},computed:{lockContract:function(){return this.$store.getters["crossChain/lockContract"]},isPC:function(){return this.$store.getters.isPC},account:function(){return this.$store.state.boardRoom.account||this.$store.state.account.address},getformatFloat:function(){return function(s){return Object(c["a"])(s,6)}}},methods:{fnGetAddress:function(s){return s?s.substring(0,16)+"..."+s.substring(s.length-16):""},setAddress:function(s){return Object(l["a"])(s)},lastLine:function(){this.$emit("on-next",1)},handelClcik:function(){this.dialogVisible=!0},Authorization:function(){var s=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a,i,n,o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s.dialogVisible=!1,s.assets,e="0x".concat(s.assets.src_token),a=s.account,i=Object(c["c"])(s.assets.moneyAssets),n="Trasferred ".concat(s.assets.currency),o=s.$overalltip({type:"loading",msg:n}),t.next=9,s.lockContract;case 9:r=t.sent,s.assets.poly_chain_id,s.assets.address,Object(c["c"])(s.assets.Token_money),r.methods.lock(e,s.assets.poly_chain_id,s.assets.address,i,Object(c["c"])(s.assets.Token_money),0).send({from:a,value:"0x0000000000000000000000000000000000000000"===e?i:void 0}).then((function(t){s.$store.dispatch("crossChain/saveHash",{hash:t.transactionHash,src_chain_id:s.assets.fromChainid,dst_chain_id:s.assets.toChainId,amount:s.assets.moneyAssets,token:e,cross_fee:s.assets.Token_money}),setTimeout((function(){s.$store.dispatch("crossChain/getchainHistory"),s.$store.dispatch("crossChain/getAssetslist"),o.close(),s.$emit("on-next",3)}),3e3)})).catch((function(t){o.close();var e="Authorization Error";C=s.$overalltip({type:"error",msg:e})}));case 12:case"end":return t.stop()}}),t)})))()}},beforeDestroy:function(){C&&C.close()}},f=p,w=(e("a1ab"),Object(_["a"])(f,o,r,!1,null,"2467e142",null)),g=w.exports,y=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",{staticClass:"pc-section text",class:s.chainName},[a("p",{staticClass:"selete-name"},[s._v(s._s(s.$t("ChooseTheCrossChainBridgeAsset")))]),a("div",{staticClass:"between selete-title numbers Medium",on:{click:s.showSeleteAssets}},[a("div",{staticClass:"start"},[a("img",{directives:[{name:"show",rawName:"v-show",value:""!=s.currency,expression:"currency!=''"}],staticClass:"bet-icon",attrs:{src:s.getGlobalAcrossUrl(s.itemAssets.address),alt:""}}),a("span",{staticClass:"selete-text"},[s._v(" "+s._s("Bsc"==s.chainName&&"MDX"==s.currency?"HMDX":s.currency))])]),a("img",{staticClass:"selete-img",attrs:{src:e("7acc"),alt:""}})]),a("div",{staticClass:"between bet-item"},[a("div",{staticClass:"bet-info"},[a("div",{staticClass:"bet-text"},[s._v(s._s(s.$t("from"))+" ")]),a("div",{staticClass:"between bet-selete numbers Medium"},[a("show-img",{attrs:{name:s.itemAssets.chain_symbol}}),a("span",[s._v(" "+s._s(s.itemAssets.chain_symbol))]),a("i")],1)]),s._m(0),a("div",{staticClass:"bet-info"},[a("div",{staticClass:"bet-text"},[s._v(s._s(s.$t("to")))]),a("div",{staticClass:"between bet-selete numbers Medium",on:{click:s.showChildSeleteAssets}},[a("show-img",{attrs:{name:s.ChildItemAssets.chain_symbol}}),a("span",[s._v(s._s(s.ChildItemAssets.chain_symbol))]),a("img",{staticClass:"selete-img",attrs:{src:e("7acc"),alt:""}})],1),a("div",{staticClass:"bet-hide"},[a("selete-assets",{ref:"toAssets",attrs:{name:"chain_symbol",dataList:s.childAssetslist,showLine:!0,showId:s.itemAssets.token_id,showAction:s.ChildItemAssets,showType:"2"},on:{"change-item":s.setChildItem}})],1)])]),a("p",{staticClass:"selete-name"},[s._v(" "+s._s(s.$t("ReceivinAddress")))]),a("div",{staticClass:"address numbers"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.assetsAddress,expression:"assetsAddress"}],attrs:{type:"text",placeholder:s.$t("TargetReceivinAddress")},domProps:{value:s.assetsAddress},on:{input:function(t){t.target.composing||(s.assetsAddress=t.target.value)}}}),""!==s.assetsAddress&&s.isPC?a("i",{staticClass:"el-icon-circle-close",on:{click:function(t){s.assetsAddress=""}}}):s._e()]),a("div",{directives:[{name:"show",rawName:"v-show",value:s.addressShowInfo,expression:"addressShowInfo"}],staticClass:"addr-verify"},[a("span",[s._v(s._s(s.$t("invalidDestionationAddress")))])]),a("div",{staticClass:"text-tip"},[a("img",{attrs:{src:e("d119"),alt:""}}),a("span",{domProps:{innerHTML:s._s(s.$t("addrTip",{msg:s.addressName}))}})]),a("p",{staticClass:"selete-name  between"},[a("span",[s._v(" "+s._s(s.$t("InputAmountOfAssetNeeded")))]),a("span",{staticClass:"tip-let"},[s._v(" "+s._s(s.getTip)+" ")])]),a("div",{staticClass:"between assets-item"},[a("div",{staticClass:"assets-input start numbers"},[a("img",{staticClass:"bet-icon",attrs:{src:s.getGlobalAcrossUrl(s.itemAssets.address),alt:""}}),a("input",{directives:[{name:"model",rawName:"v-model",value:s.assetsNum,expression:"assetsNum"}],attrs:{type:"number",placeholder:s.min_amount},domProps:{value:s.assetsNum},on:{input:function(t){t.target.composing||(s.assetsNum=t.target.value)}}})]),a("div",{staticClass:"assets-info center numbers "},[a("span",{staticClass:"assets-type"},[s._v(" "+s._s("Bsc"==s.chainName&&"MDX"==s.currency?"HMDX":s.currency))]),a("button",{staticClass:"assets-max",attrs:{disabled:s.boolBtn},on:{click:s.setMax}},[s._v(" "+s._s(s.$t("Maximum")))])])]),a("div",{staticClass:"start available"},[a("span",[s._v(s._s(s.$t("Usable"))+"：")]),a("span",{staticClass:"numbers Medium"},[s._v(s._s(s.available))]),a("span",{staticClass:"numbers Medium"},[s._v(" "+s._s("Bsc"==s.chainName&&"MDX"==s.currency?"HMDX":s.currency))])]),s.isLogin?s._e():a("button",{staticClass:"link-button action-button"},[s._v(" "+s._s(s.$t("ConnectWallet"))+" ")]),s.isLogin&&0==s.tokenAllowance?a("button",{staticClass:"link-button action-button",on:{click:s.handleApprove}},[s._v(" Approve ")]):s._e(),s.isLogin&&s.tokenAllowance>0?a("button",{staticClass:"link-button action-button",attrs:{disabled:!s.show_or_next},on:{click:s.nextLine}},[s._v(" "+s._s(s.$t("Next"))+" ")]):s._e(),a("p",{staticClass:"quota-name",on:{click:function(t){return s.$emit("on-show-info")}}},[a("span",[s._v(" "+s._s(s.$t("DailyLimitForTransfer"))+" "),a("img",{staticClass:"bet-icon",attrs:{src:e("3a4a"),alt:""}})])]),a("div",{directives:[{name:"show",rawName:"v-show",value:""!=s.currency,expression:"currency!=''"}],staticClass:"quota start numbers"},[a("span",{staticClass:"quota-zj"},[s._v(" "+s._s(s.ChildItemAssets.daily_amount?s.ChildItemAssets.daily_amount.toLocaleString():0)+" ")]),a("span",{staticClass:"quota-text"},[s._v("/ "+s._s(s.ChildItemAssets.daily_limit?Number(s.ChildItemAssets.daily_limit).toLocaleString():0)+" ")]),a("span",{staticClass:"quota-text"},[s._v(" "+s._s("Bsc"==s.chainName&&"MDX"==s.currency?"HMDX":s.currency))])]),a("div",{staticClass:"quota-line start"},[a("span",{style:"width: "+s.ChildItemAssets.daily_amount/s.ChildItemAssets.daily_limit*100+"%"})]),a("div",{staticClass:"record start"},[a("span",{on:{click:function(t){return s.$emit("on-next",3)}}},[s._v(" "+s._s(s.$t("TransactionHistory")))])]),a("selete-assets",{ref:"assets",attrs:{dataList:s.assetslist,name:"token_symbol",showAction:s.itemAssets,showType:"1"},on:{"change-item":s.setItem}})],1)},x=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"bet-img center"},[a("img",{staticClass:"point-img",attrs:{src:e("8962"),alt:""}})])}],N=(e("a9e3"),e("99af"),e("b680"),function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",{directives:[{name:"show",rawName:"v-show",value:s.showAssets,expression:"showAssets"}],staticClass:"selete-assets center ",class:1==s.showType?"assets-main":"aaa"},[a("div",{staticClass:"assets-body",class:1==s.showType?"assets-body-1":"assets-body-2"},[a("div",{staticClass:"top_head"},[a("img",{staticClass:"close-icon",attrs:{src:e("c2f4")},on:{click:s.hide}}),1==s.showType?a("p",{staticClass:"assets-title text Bold"},[s._v(s._s(s.$t("ChooseTheCrossChainBridgeAsset")))]):s._e()]),a("div",{staticClass:"content"},s._l(s.dataList,(function(t){return a("div",{key:t.token_symbol,staticClass:"list between numbers Medium",on:{click:function(e){return s.getItem(t)}}},[a("div",{staticClass:"start"},[1==s.showType?a("img",{staticClass:"bet-icon",attrs:{src:s.getGlobalAcrossUrl(t.address),alt:""}}):s._e(),1!=s.showType?a("show-img",{attrs:{name:t[s.name]}}):s._e(),a("span",[s._v(" "+s._s(1==s.showType&&"Bsc"==s.chainName&&"MDX"==t[s.name]?"HMDX":t[s.name]))])],1),1==s.showType?a("div",[a("span",[s._v(s._s(s.getformatFloat(t.balance)))]),a("span",{staticClass:"span-img"},[a("img",{directives:[{name:"show",rawName:"v-show",value:s.showAction[s.name]==t[s.name],expression:"showAction[name]==da[name]"}],attrs:{src:e("b1ba"),alt:""}})])]):s._e(),1!=s.showType&&s.showAction[s.name]==t[s.name]?a("div",[a("img",{attrs:{src:e("b1ba"),alt:""}})]):s._e()])})),0)])])}),A=[],$={name:"selete-assets",data:function(){return{showAssets:!1,maxAssets:""}},components:{showImg:v},props:{dataList:{type:Array,default:function(){return[]}},name:{type:String,default:"name"},showType:{type:Number|String,default:0},showId:{type:Number|String,default:""},showLine:{type:Boolean,default:!1},showAction:{type:Object,default:""}},computed:{getformatFloat:function(){return function(s){return Object(c["a"])(s,6)}}},methods:{getImg:function(s){return s.address?this.getUrl(s.address):""},getChainImg:function(s){return s.dst_token?this.getUrl(s.dst_token):""},getUrl:function(s){return this.globalGetImgUrl(s)},getItem:function(s){this.$emit("change-item",s),this.hide()},hide:function(){this.showAssets=!1},show:function(){this.showAssets=!0}}},k=$,I=(e("751f"),Object(_["a"])(k,N,A,!1,null,"4df0c960",null)),D=I.exports,B=e("4f22"),T=null,H={name:"assets-link",data:function(){return{used_num:5,chainImg:"",currency:"",available:0,assetsNum:"",assetsBool:!1,assetsAddress:"",itemAssets:{},ChildItemAssets:{},next:!0,childAssetslist:[],balance:"",addressShowInfo:!1,chainNameNow:""}},components:{seleteAssets:D,showImg:v},watch:{ChildItemAssets:function(){this.$store.dispatch("crossChain/getTokenAllowance","0x".concat(this.ChildItemAssets.src_token))},assetsAddress:function(){this.addressShowInfo=!1},chainName:function(){this.itemAssets={},this.ChildItemAssets.chain_symbol="",this.ChildItemAssets={},this.childAssetslist=[],this.currency=""},childAssetslist:function(){var s;this.chainNameNow=null===(s=this.childAssetslist[0])||void 0===s?void 0:s.chain_symbol}},mounted:function(){},computed:{chainId:function(){return this.$store.state.chainId},addressName:function(){switch(this.chainNameNow){case"HECO":return"HRC20";case"BSC":return"BEP20";case"Ethereum":return"ERC20"}},isPC:function(){return this.$store.getters.isPC},crossAddress:function(){return this.$store.getters["crossChain/currentCrossAddress"]},tokenAllowance:function(){return this.$store.state.crossChain.tokenAllowance},getMaxDaily:function(){return Number(this.ChildItemAssets.daily_limit)-Number(this.used_num)},getCurrencyPrice:function(){return this.itemAssets.from_addr?this.$store.state.CurrencyPrice[this.itemAssets.from_addr].price:""},assetslist:function(){this.itemAssets={},this.ChildItemAssets={},this.childAssetslist=[];var s=this.$store.state.crossChain.assetslist;return s.length>0&&this.setItem(s[0]),s},min_amount:function(){var s=Number(this.ChildItemAssets.min_amount)||"--";return"".concat(this.$t("MinimumAmountForTransfer")," ").concat(s," ").concat("Bsc"==this.chainName&&"MDX"==this.currency?"HMDX":this.currency)},show_or_next:function(){var s=this.ChildItemAssets.chain_symbol,t=""!==this.assetsAddress,e=Number(this.assetsNum)>=Number(this.ChildItemAssets.min_amount),a=Number(this.assetsNum)<=Number(this.ChildItemAssets.max_amount),i=Number(this.assetsNum)<=this.getMaxDaily,n=Number(this.available)>=Number(this.assetsNum);return s&&t&&e&&a&&i&&n},isLogin:function(){return this.$store.getters.isLogin},account:function(){return this.$store.state.boardRoom.account||this.$store.state.account.address},boolBtn:function(){return Number(this.available)<Number(this.ChildItemAssets.min_amount)||!!Number(0==this.available)},getTip:function(){var s=Number(this.ChildItemAssets.min_amount),t=Number(this.ChildItemAssets.max_amount);return""==this.assetsNum?"":Number(this.assetsNum)>Number(this.available)?this.$t("InsufficientAccountBalance"):Number(this.available)<s||Number(this.assetsNum)<s?this.$t("MinimumAmount")+s+this.currency:Number(this.assetsNum)>t?this.$t("CrossChainTransfer")+t+this.currency:Number(this.assetsNum)>Number(this.ChildItemAssets.daily_limit)-Number(this.used_num)?this.$t("AvailableAmount")+(Number(this.ChildItemAssets.daily_limit)-Number(this.used_num))+this.currency:""}},methods:{handleApprove:function(){var s=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a,i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e="Approve ".concat(s.itemAssets.token_symbol),a=s.crossAddress,i=s.$overalltip({type:"loading",msg:e}),n="0x".concat(s.itemAssets.address),Object(B["b"])(n,s.account,a).then((function(t){try{i.close(),Object(B["n"])(n,s.account,a);var o="".concat(e," Success");T=s.$overalltip({type:"success",msg:o}),s.$store.dispatch("crossChain/getTokenAllowance",n)}catch(r){}})).catch((function(t){i.close();var a="".concat(e," Error");T=s.$overalltip({type:"error",msg:a})}));case 5:case"end":return t.stop()}}),t)})))()},setMax:function(){this.assetsNum=this.balance},nextLine:function(){Object(B["m"])(this.assetsAddress)?this.show_or_next&&(this.$emit("set-next-data",{startChain:this.itemAssets.chain_symbol,endChain:this.ChildItemAssets.chain_symbol,moneyAssets:this.assetsNum,address:this.assetsAddress,moneyPractical:(Number(this.assetsNum)-Number(this.ChildItemAssets.fee_token)).toFixed(4),USDT_money:this.ChildItemAssets.fee_usdt,Token_money:this.ChildItemAssets.fee_token,currency:this.currency,fromChainid:this.itemAssets.chain_id,toChainId:this.ChildItemAssets.chain_id,src_token:this.ChildItemAssets.src_token,poly_chain_id:this.ChildItemAssets.poly_chain_id}),this.$emit("on-next",2)):this.addressShowInfo=!0},getImg:function(s){return s.address?this.getUrl(s.address):""},getUrl:function(s){return this.globalGetImgUrl(s)},setItem:function(s){this.ChildItemAssets={},this.childAssetslist=s.chains,this.itemAssets=s,this.currency=s.token_symbol,s.chains.length>0&&(this.ChildItemAssets=s.chains[0]),this.balance=s.balance,this.available=Number(s.balance)},setChildItem:function(s){this.ChildItemAssets=s,this.chainImg=this.getUrl(s.dst_token),this.used_num=s.daily_amount},showSeleteAssets:function(){this.$refs.assets.show()},showChildSeleteAssets:function(){this.$refs.toAssets.showAssets?this.$refs.toAssets.hide():this.$refs.toAssets.show()}},beforeDestroy:function(){T&&T.close()}},P=H,M=(e("06b8"),Object(_["a"])(P,y,x,!1,null,"b152a9c0",null)),E=M.exports,O=e("c438"),L=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",{staticClass:"pc-section",class:s.chainName},[a("div",{staticClass:"title between"},[a("img",{staticClass:"selete-img poin",attrs:{src:e("baa3"),alt:""},on:{click:function(t){return s.$emit("back")}}}),a("span",[s._v(s._s(s.$t("AcrossChainRecord")))]),a("span")]),a("div",{directives:[{name:"show",rawName:"v-show",value:0==s.getChainHistory.transactions.length,expression:"getChainHistory.transactions.length==0"}],staticClass:"not-history"},[a("div",[a("img",{staticClass:"selete-img",attrs:{src:e("ac72"),alt:""}}),a("p",[s._v(s._s(s.$t("NoRecord")))])])]),a("div",{staticClass:"historyContainer"},s._l(s.getChainHistory.transactions,(function(t,i){return a("div",{key:i,staticClass:"items"},[a("div",{staticClass:"between line-li",on:{click:function(e){return s.goDetails(t)}}},[a("div",{staticClass:"between line-info numbers Medium"},[a("div",{staticClass:"title-info start"},[a("p",{staticClass:"index-info"},[s._v(s._s(i+1)+" ")]),a("show-img",{attrs:{name:t.src_chain_symbol}}),a("span",[s._v(s._s(t.src_chain_symbol))])],1),a("img",{staticClass:"point-img",attrs:{src:e("8962"),alt:""}}),a("p",{staticClass:"start"},[a("show-img",{attrs:{name:t.dst_chain_symbol}}),a("span",[s._v(s._s(t.dst_chain_symbol))])],1)]),0==t.state?a("span",{staticClass:"line-status line-finish text Bold"},[s._v(s._s(s.$t("finish"))+" > ")]):a("span",{staticClass:"line-status line-await text Bold"},[s._v(s._s(s.$t("BeingProcessed"))+" > ")])]),a("p",{staticClass:"line-time numbers"},[s._v(s._s(s.formatData(t.create_time)))]),a("div",{staticClass:"between"},[a("div",{staticClass:"line-msg"},[a("p",[s._v(s._s(s.$t("AcrossTheChainAssets")))]),a("p",{staticClass:"numbers"},[s._v(" "+s._s("BSC"==t.src_chain_symbol&&"MDX"==t.cross_token.symbol?"HMDX":t.cross_token.symbol))])]),a("div",{staticClass:"line-msg"},[a("p",[s._v(s._s(s.$t("NumberOfAssets")))]),a("p",{staticClass:"numbers"},[s._v(s._s(Number(t.cross_amount)+Number(t.cross_fee)))])]),a("div",{staticClass:"line-msg"},[a("p",[s._v(s._s(s.$t("ServiceCharge")))]),a("p",{staticClass:"numbers"},[s._v(s._s(t.cross_fee))])])])])})),0)])},R=[],S=e("ed08"),z={name:"chain-history",data:function(){return{notHistory:!1}},components:{showImg:v},beforeCreate:function(){},mounted:function(){},computed:{getChainHistory:function(){return this.$store.state.crossChain.chainHistory,this.$store.state.crossChain.chainHistory}},methods:{formatData:function(s){return Object(S["d"])(1e3*s,"-").ymdhms},goDetails:function(s){this.$emit("on-details",s)}}},j=z,X=(e("8a8b"),Object(_["a"])(j,L,R,!1,null,"41696782",null)),U=X.exports,F=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",{staticClass:"pc-section",class:s.chainName},[a("div",{staticClass:"title between"},[a("img",{staticClass:"selete-img poin",attrs:{src:e("baa3"),alt:""},on:{click:s.back}}),a("span",[s._v(s._s(s.$t("details")))]),a("span")]),a("div",{staticClass:"details"},[s._l(s.oneChainHistory,(function(t,i){return a("div",{key:i,staticClass:"start"},[a("div",{staticClass:"schedule"},[a("p",[a("img",{directives:[{name:"show",rawName:"v-show",value:0==t.blocks,expression:"da.blocks == 0"}],staticClass:"status-img",attrs:{src:e("05d4"),alt:""}}),a("img",{directives:[{name:"show",rawName:"v-show",value:0!=t.blocks&&t.blocks<t.need_blocks,expression:"da.blocks != 0 && da.blocks < da.need_blocks"}],staticClass:"status-img",attrs:{src:e("680d"),alt:""}}),a("img",{directives:[{name:"show",rawName:"v-show",value:t.blocks==t.need_blocks,expression:"da.blocks == da.need_blocks"}],staticClass:"status-img",attrs:{src:e("c427"),alt:""}})]),s._m(0,!0)]),a("div",{staticClass:"det-status numbers"},[a("p",{staticClass:"start"},[a("show-img",{attrs:{name:t.chain_symbol}}),a("span",{staticClass:"det-name"},[s._v(s._s(t.chain_symbol))])],1),a("div",{staticClass:"det-num"},[a("p",{staticClass:"confirmed"},[s._v(s._s(t.blocks)+"/"+s._s(t.need_blocks)+" Confirmed")]),a("div",{staticClass:"det-line start"},[a("span",{style:"width: "+t.blocks/t.need_blocks*100+"%"})])]),a("div",{staticClass:"det-check"},[a("a",{directives:[{name:"show",rawName:"v-show",value:t.hash.length,expression:"da.hash.length"}],staticClass:"span",attrs:{href:s.url[t.chain_symbol]+t.hash,target:"_blank"}},[a("span",[s._v(s._s(s.$t("CheckTheHash")))]),a("img",{attrs:{src:e("23bb"),alt:""}})])]),i==s.oneChainHistory.length-1?a("div",{staticClass:"det-check2"},[s._v(" "+s._s(s.$t("ReceivinAddress"))+":"+s._s(s.address)+" ")]):s._e()])])})),a("div",{directives:[{name:"show",rawName:"v-show",value:s.oneChainHistory.length>0,expression:"oneChainHistory.length > 0"}],staticClass:"det-notarize"},[a("img",{directives:[{name:"show",rawName:"v-show",value:!s.notarizeBool,expression:"!notarizeBool"}],staticClass:"status-img",attrs:{src:e("680d"),alt:""}}),a("img",{directives:[{name:"show",rawName:"v-show",value:s.notarizeBool,expression:"notarizeBool"}],staticClass:"status-img",attrs:{src:e("c427"),alt:""}}),a("span",{staticClass:"det-not-span"},[a("span",[s._v(s._s(s.$t("finish1")))])])])],2)])},q=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[a("img",{staticClass:"next-img",attrs:{src:e("0993"),alt:""}})])}],V={name:"chain-details",data:function(){return{notHistory:!1,notarizeBool:!1,url:{BSC:"https://bscscan.com/tx/0x",HECO:"https://hecoinfo.com/tx/0x",PolyNetwork:"https://explorer.poly.network/tx/",Ethereum:"https://etherscan.io/tx/0x"}}},props:{list:{type:Array,default:function(){return[]}},address:{type:String,default:""}},components:{showImg:v},mounted:function(){},computed:{oneChainHistory:function(){var s=0==this.list.length?this.$store.state.crossChain.oneChainHistory:this.list;return s.length>0&&(this.notarizeBool=Number(s[s.length-1].blocks)==Number(s[s.length-1].need_blocks)),s},booloneChainHistory:function(){return this.$store.state.crossChain.oneChainHistory}},beforeDestroy:function(){this.$store.commit("crossChain/changeOneChainHistory",[])},methods:{back:function(){0==this.booloneChainHistory.length?this.$emit("back"):this.$emit("next-back"),this.$store.commit("crossChain/changeOneChainHistory",[])},showInfo:function(s){this.$emit("on-show-info",s.hash)}}},W=V,G=(e("75b9"),Object(_["a"])(W,F,q,!1,null,"116cdb44",null)),J=G.exports,K={name:"cross-chain",components:{"link-form":E,authorization:g,TitleBanner:O["a"],ChainHistory:U,ChainDetails:J},data:function(){return{nextPapg:1,nextAssets:{},detailsList:[],showinfo:!1,showinfoText:"",inputAddress:""}},created:function(){},mounted:function(){return Object(n["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:case"end":return s.stop()}}),s)})))()},filters:{},watch:{list:{immediate:!0,handler:function(s){}},chainId:function(){window.document.title="MDEX Bridge",this.$store.dispatch("crossChain/getAssetslist")}},computed:{isPC:function(){return this.$store.getters.isPC},chainId:function(){return this.$store.getters.chainId}},beforeCreate:function(){window.document.title="MDEX Bridge",this.$store.dispatch("crossChain/getAssetslist")},methods:{hide:function(){this.showinfo=!1},showInfo:function(s){this.showinfo=!0,this.showinfoText=s},changeNext:function(s){this.nextPapg=s,3==s&&this.$store.dispatch("crossChain/getchainHistory")},setNextAssets:function(s){this.nextAssets=s},goDetails:function(s){this.nextPapg=4,this.detailsList=s.cross_status,this.inputAddress="0x"+s.dst_user},onBack:function(s){this.nextPapg=s-1}},beforeDestroy:function(){window.document.title="MDEX.COM"}},Q=K,Y=(e("318e"),Object(_["a"])(Q,a,i,!1,null,"28541ad1",null));t["default"]=Y.exports},"8a8b":function(s,t,e){"use strict";e("ffbb")},"8f2d":function(s,t,e){},a1ab:function(s,t,e){"use strict";e("b6cf")},ae34:function(s,t,e){"use strict";e("c6ca")},b6cf:function(s,t,e){},c438:function(s,t,e){"use strict";var a=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"title-banner",class:[s.getLanguage,s.chainName]},[["/buyback","/pastrecord"].includes(s.routerName)?e("div",{staticClass:"banner-con",style:{backgroundImage:"url("+s.getImg("buyback")+")"}}):s._e(),e("div",{directives:[{name:"show",rawName:"v-show",value:"/liquidity"==s.routerName,expression:"routerName == '/liquidity'"}],staticClass:"banner-bar text"},[e("div",{staticClass:"pc"},[e("h1",{staticClass:"home__banner-title"},[s._v(" "+s._s(s.$t("CurrentTransacObtainCurrencytionVolume"))+" ")]),e("div",{staticClass:"ban-center"},[e("p",{staticClass:"liquidity-mdx ban-center"},[s._v(" "+s._s(s.$t("MDXtotal"))+" "),e("CountUp",{attrs:{endVal:s.liquidity_mdex||0}}),s._v(" USDT ")],1)])]),e("div",{staticClass:"h5 li-h5title ban-start text Heavy"},[e("div",{staticClass:"act-title"},[e("p",[s._v(s._s(s.$t("LiquidityMining")))]),e("p")]),e("router-link",{staticClass:"li-title",attrs:{to:"/trading",tag:"div",exact:""}},[e("span",{staticClass:"text Heavy"},[s._v(" "+s._s(s.$t("TradePool"))+" ")])])],1),e("div",{staticClass:"h5 li-banner-total"},[e("div",{staticClass:"banner-tit"},[s._v(s._s(s.$t("TotalLockIn"))+" "),e("span",{staticClass:"numbers"},[s._v("(USDT)")])]),e("div",{staticClass:"banner-sum numbers"},[e("CountUp",{attrs:{endVal:s.liquidity_mdex||0}})],1)])]),e("div",{directives:[{name:"show",rawName:"v-show",value:"/trading"==s.routerName,expression:"routerName == '/trading'"}],staticClass:"banner-bar text"},[e("div",{staticClass:"pc"},[e("h1",{staticClass:"home__banner-title"},[s._v(" "+s._s(s.$t("tradeTitle"))+" ")]),e("div",{staticClass:"new-banner-totals"},[e("div",{staticClass:"new-banner-total-white"},[e("div",{staticClass:"list-white"},[e("span",{staticClass:"list-white-one"},[s._v(" "+s._s(s.$t("TotalRewardOfCurrentPool"))+" ")]),e("span",{staticClass:"list-white-own numbers"},[e("CountUp",{attrs:{endVal:s.trading_totalReward}})],1),e("span",{staticClass:"list-white-one"},[s._v("MDX")])]),e("div",{staticClass:"list-white"},[e("span",{staticClass:"list-white-one"},[s._v(" "+s._s(s.$t("CurrentIndividualWithdrawableBonus"))+" ")]),e("span",{staticClass:"list-white-own numbers"},[e("CountUp",{attrs:{endVal:s.trading_userReward,options:s.trading_options}})],1),e("span",{staticClass:"list-white-one"},[s._v("MDX")])])]),e("button",{staticClass:"new-list-white-banner",attrs:{disabled:!s.trading_userReward},on:{click:s.onWithdrawal}},[s._v(" "+s._s(s.$t("CashWithdrawalReward"))+" ")])])]),e("div",{staticClass:"h5 li-h5title ban-start"},[e("router-link",{staticClass:"li-title",attrs:{to:"/liquidity",tag:"div",exact:""}},[e("span",[s._v(" "+s._s(s.$t("LiquidityMining"))+" ")])]),e("div",{staticClass:"act-title act-mining text Heavy"},[e("p",[s._v(s._s(s.$t("TradePool")))]),e("p")])],1),e("div",{staticClass:"h5 trading-banner"},[e("div",{staticClass:"ban-start trading-ban-list"},[e("div",[e("p",[s._v(s._s(s.$t("TotalRewardOfCurrentPool")))]),e("p",{staticClass:"numbers"},[e("CountUp",{attrs:{endVal:s.trading_totalReward}}),e("span",{staticClass:"h5-sum"},[s._v("MDX")])],1)]),e("div",[e("p",[s._v(s._s(s.$t("CurrentIndividualWithdrawableBonus")))]),e("p",{staticClass:"numbers"},[e("CountUp",{attrs:{endVal:s.trading_userReward,options:s.trading_options}}),e("span",{staticClass:"h5-sum"},[s._v("MDX")])],1)])]),e("div",{staticClass:"ban-center"},[e("button",{staticClass:"new-banner-btn-dra text Bold",attrs:{disabled:!s.trading_userReward},on:{click:s.onWithdrawal}},[s._v(" "+s._s(s.$t("CashWithdrawalReward"))+" ")])])])]),e("div",{directives:[{name:"show",rawName:"v-show",value:"/boardroom"==s.routerName,expression:"routerName == '/boardroom'"}],staticClass:"banner-bar text"},[e("div",{staticClass:"pc"},[e("h1",{staticClass:"home__banner-title"},[s._v(" "+s._s(s.$t("text9"))+" ")]),e("h2",{staticClass:"home__banner-describe"},[s._v(" "+s._s(s.$t("text8"))+" ")])]),e("div",{staticClass:"h5 boardroom-banner__title"},[s._v(" "+s._s(s.$t("Directors"))+" ")])]),e("div",{directives:[{name:"show",rawName:"v-show",value:"/bridge"==s.routerName,expression:"routerName == '/bridge'"}],staticClass:"banner-bar text"},[e("div",{staticClass:"pc"},[e("h1",{staticClass:"home__banner-title"},[s._v(" "+s._s(128==s.chainId?s.$t("MDEForEcoEurrencyTrading1"):56==s.chainId?s.$t("MDEForEcoEurrencyTrading2"):s.$t("MDEForEcoEurrencyTrading3"))+" ")]),e("h2",{staticClass:"home__banner-describe"},[s._v(" "+s._s(s.$t("lightText"))+" ")])]),e("div",{staticClass:"h5 boardroom-banner__title"},[s._v(" "+s._s(s.$t("crossChainBridge"))+" ")])]),e("div",{directives:[{name:"show",rawName:"v-show",value:"BoardroomPool"==s.$route.name,expression:"'BoardroomPool' == $route.name"}],staticClass:"banner-bar text"},[e("div",{staticClass:"pc"},[e("h1",{staticClass:"home__banner-title"},[s._v(" "+s._s(s.$t("poolTitle"))+" ")]),e("h2",{staticClass:"home__banner-describe"},[s._v(" "+s._s(128==s.chainId?s.$t("poolDescribe1"):56==s.chainId?s.$t("poolDescribe2"):s.$t("poolDescribe3"))+" ")])]),e("div",{staticClass:"h5 boardroom-banner__title"},[s._v(" "+s._s(s.$t("transaction"))+" ")])]),e("div",{directives:[{name:"show",rawName:"v-show",value:"/introduce"===s.routerName,expression:"routerName === '/introduce'"}],staticClass:"banner-bar text"},[e("div",{staticClass:"pc"},[e("h1",{staticClass:"home__banner-title"},[s._v(" "+s._s(s.$t("introduce"))+" ")]),e("h2",{staticClass:"introduceDsc"},[s._v(" "+s._s(s.$t("introduceDsc"))+" ")])]),s.isPC||"en"===s.$store.state.language?s._e():e("div",[e("h1",{staticClass:"introduce_banner"},[s._v(" "+s._s(s.$t("introduce"))+" ")]),e("h2",{staticClass:"introduceDsc"},[s._v(" "+s._s(s.$t("introduceDsc"))+" ")])]),s.isPC||"en"!==s.$store.state.language?s._e():e("div",[e("p",{staticClass:"text-info"},[s._v(s._s(s.$t("introduceComplete")))])])]),e("div",{directives:[{name:"show",rawName:"v-show",value:"/priceplan"===s.routerName,expression:"routerName === '/priceplan'"}],staticClass:"banner-bar text"},[e("h1",{staticClass:"home__banner-title"},[s._v(" MDEX "+s._s(s.$t("sjrd"))+" ")]),e("h2",{staticClass:"introduceDsc"},[s._v(" "+s._s(s.$t("sjplantitle"))+" ")])])])},i=[],n=(e("a9e3"),e("99af"),{name:"HomeBanner",data:function(){return{}},props:{liquidity_mdex:{type:String|Number,default:0},trading_userReward:{type:String|Number|Boolean,default:0},trading_options:{type:Object|Array,default:function(){}},trading_totalReward:{type:String|Number|Boolean,default:0}},computed:{},mounted:function(){},$computed:{bnp:"bnp"},methods:{stitchingPic:function(){var s="";return this.isPC?s+="pc_":s+="h5_","zh-CN"===this.getLanguage?s+="zh-CN_":s+="en_",s+=this.chainName,s},getImg:function(s){var t={buyback:{"pc_zh-CN_Heco":"buyback_pc_zh-CN_Heco","pc_zh-CN_Bsc":"buyback_pc_zh-CN_Bsc",pc_en_Heco:"buyback_pc_en_Heco",pc_en_Bsc:"buyback_pc_en_Bsc","h5_zh-CN_Heco":"buyback_h5_zh-CN_Heco","h5_zh-CN_Bsc":"buyback_h5_zh-CN_Bsc",h5_en_Heco:"buyback_h5_en_Heco",h5_en_Bsc:"buyback_h5_en_Bsc"}};return e("e8b59")("./".concat(s,"/").concat(t[s][this.stitchingPic()],".png"))},onWithdrawal:function(){this.$emit("on-withdrawal")}}}),o=n,r=(e("ae34"),e("2877")),c=Object(r["a"])(o,a,i,!1,null,"a0c1848c",null);t["a"]=c.exports},c6ca:function(s,t,e){},cc47:function(s,t,e){},e3a2:function(s,t,e){},e495:function(s,t,e){s.exports=e.p+"img/PolyNetwork-icon.20cce965.svg"},e8b59:function(s,t,e){var a={"./buyback/buyback_h5_en_Bsc.png":"2063","./buyback/buyback_h5_en_Heco.png":"4cee","./buyback/buyback_h5_zh-CN_Bsc.png":"e584","./buyback/buyback_h5_zh-CN_Heco.png":"f1b0","./buyback/buyback_pc_en_Bsc.png":"7bdc","./buyback/buyback_pc_en_Heco.png":"5150","./buyback/buyback_pc_zh-CN_Bsc.png":"175c","./buyback/buyback_pc_zh-CN_Heco.png":"c7ec"};function i(s){var t=n(s);return e(t)}function n(s){if(!e.o(a,s)){var t=new Error("Cannot find module '"+s+"'");throw t.code="MODULE_NOT_FOUND",t}return a[s]}i.keys=function(){return Object.keys(a)},i.resolve=n,s.exports=i,i.id="e8b59"},ffbb:function(s,t,e){}}]);