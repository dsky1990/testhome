(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59a7b8f4"],{"30aa":function(e,t,n){"use strict";n.r(t);var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("modal",{staticClass:"provider-modal",attrs:{title:"Select a Wallet",acceptText:e.select===e.connected?"Connected":"Connect",accept:e.connect,acceptDisabled:e.select===e.connected}},[n("div",{staticClass:"tips"},[e._v("Please select a wallet to connect to this dapp:")]),n("div",{staticClass:"wallet-list"},e._l(e.$s.wallets,(function(t){return n("div",{key:t.id,staticClass:"wallet-item",class:{active:t.id===e.select,disabled:t.disabled,connected:e.connected==t.id},on:{click:function(n){e.select=t.disabled?e.select:t.id}}},[n("div",{staticClass:"logo"},[n("img",{attrs:{src:t.ico}})]),"injected"!==t.id||e.isInstallMetaMask?n("div",{staticClass:"name"},[e._v(e._s(t.name))]):n("div",{staticClass:"name"},[n("a",{attrs:{href:"https://metamask.io/",target:"_blank"}},[e._v("Install Metamask")])]),e.connected==t.id?n("div",{staticClass:"help"},[e._v("connected")]):e._e()])})),0)])},s=[],a=n("1da1"),i=(n("96cf"),{name:"modal-wallet",data:function(){return{select:"injected"}},watch:{"$s.isLogin":function(e){e&&this.$modalClose()}},computed:{isInstallMetaMask:function(){return window.ethereum||window.ethereum.isMetaMask},connected:function(){return this.$s.walletConnected}},methods:{connect:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.select,t.next=3,e.$s.connect(n);case 3:e.$modalClose();case 4:case"end":return t.stop()}}),t)})))()}},mounted:function(){this.$s.walletConnected&&(this.select=this.$s.walletConnected)}}),l=i,o=(n("6913"),n("2877")),d=Object(o["a"])(l,c,s,!1,null,"5cc00e36",null);t["default"]=d.exports},6913:function(e,t,n){"use strict";n("e32c")},e32c:function(e,t,n){}}]);