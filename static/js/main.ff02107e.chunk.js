(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{51:function(e,t,a){e.exports=a(90)},56:function(e,t,a){},57:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),o=a.n(c),l=(a(56),a(13)),i=a(14),u=a(21),s=a(20),m=(a(57),a(46)),p=a.n(m),d=a(22),f=a(47),h=a.n(f),E=a(28),v=a.n(E);v.a.initializeApp({apiKey:"AIzaSyD4iDNH_fPf65dmAGjFREQHQ_jHMCs1ZEw",authDomain:"project5-16351.firebaseapp.com",databaseURL:"https://project5-16351.firebaseio.com",projectId:"project5-16351",storageBucket:"project5-16351.appspot.com",messagingSenderId:"188499920009",appId:"1:188499920009:web:6c6332896151214c0ab258",measurementId:"G-6F6HD55E6L"});var g=v.a,b=(a(86),a(87),a(19)),j=a(48);var k=function(){var e=g.auth(),t=Object(j.a)(e),a=Object(d.a)(t,1)[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("div",{id:"menu",style:{float:"right",top:"0",margin:"10px",right:"0",position:"absolute",display:"flex"}},a?r.a.createElement(r.a.Fragment,null," ",r.a.createElement(b.b,{to:"/",style:{marginRight:"8px",cursor:"pointer",color:"inherit",textDecoration:"inherit",fontSize:"20px"}},"Home"),r.a.createElement(b.b,{to:"/saveditems",style:{marginRight:"18px",cursor:"pointer",color:"inherit",textDecoration:"inherit",fontSize:"20px"}},"SavedItems")," "):"",a?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"blue",style:{cursor:"pointer"},onClick:function(){e.signOut().then((function(){localStorage.removeItem("email"),console.log("logged out")})).catch((function(e){console.log(e.message)}))}},"Logout")," "):r.a.createElement(h.a,{onClick:function(){var t=new g.auth.GoogleAuthProvider;e.signInWithPopup(t).then((function(e){localStorage.setItem("email",e.user.email)}))}})),r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",null,"Welcome to Makeup Finder!"),r.a.createElement("p",null,"This website is designed to help you find makeup products!"))))},y=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).userpicks=function(t){e.setState({userSelection:t.target.value})},e.state={userSelection:""},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("main",null,r.a.createElement("div",{class:"wrapper"},r.a.createElement("form",null,r.a.createElement("div",{class:"dropDownForm"},r.a.createElement("label",{htmlFor:"makeupProduct"}),r.a.createElement("select",{onChange:this.userpicks,name:"makeupProduct",id:"makeupProduct"},r.a.createElement("option",{value:"lipstick"},"Lipstick"),r.a.createElement("option",{value:"eyeshadow"},"EyeShadow"),r.a.createElement("option",{value:"blush"},"Blush")),r.a.createElement("button",{class:"submitButton",onClick:function(t){return e.props.getProduct(t,e.state.userSelection)}}," Submit")))))}}]),a}(n.Component),O=a(31),w=a(17),S=(a(45),function(e){return r.a.createElement("section",null,r.a.createElement(w.a,null),r.a.createElement("div",{className:"imageDisplay"},e.items.map((function(e,t){return r.a.createElement("div",{className:"wrapper",key:t},r.a.createElement("div",{key:e._id},r.a.createElement("div",{className:"makeupItems"},r.a.createElement("img",{src:e.image_link,alt:e.name}),r.a.createElement("p",null,e.name),r.a.createElement("a",{href:e.product_link,style:{cursor:"pointer"}},"Buy Now"),r.a.createElement("a",{href:"/",onClick:function(t){return function(e,t){if(e.preventDefault(),localStorage.getItem("email")){var a=g.firestore();a.collection("saveditems").doc("doc-".concat(t.id)).get().then((function(e){e.exists?Object(w.b)("You already Have this Product Saved"):a.collection("saveditems").doc("doc-".concat(t.id)).set(Object(O.a)(Object(O.a)({},t),{},{username:localStorage.getItem("email")})).then((function(e){Object(w.b)("Product Saved")}))}))}else Object(w.b)("Please Login To Save Product")}(t,e)},style:{marginLeft:"5px",cursor:"pointer"}},"Save Item"))))}))))}),I=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("div",{class:"wrapper"},r.a.createElement("p",null,"Copyright Usra Abid \xa9 2020")))}}]),a}(n.Component),P=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).getProduct=function(t,a){t.preventDefault(),p()({url:"https://makeup-api.herokuapp.com/api/v1/products.json?product_type=".concat(a," "),method:"GET",responseType:"json"}).then((function(t){e.setState({currentProducts:t.data})}))},e.getUserInput=function(e){e.preventDefault()},e.state={currentProducts:[]},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(k,null),r.a.createElement(y,{getProduct:this.getProduct}),r.a.createElement(S,{items:this.state.currentProducts}),r.a.createElement(I,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=a(3);var D=function(e){return r.a.createElement("section",null,r.a.createElement("div",{className:"imageDisplay"},e.items.map((function(t,a){return r.a.createElement("div",{className:"wrapper",key:a},r.a.createElement("div",{key:t._id},r.a.createElement("div",{className:"makeupItems"},r.a.createElement("img",{src:t.image_link,alt:t.name}),r.a.createElement("p",null,t.name),r.a.createElement("a",{href:t.product_link,style:{cursor:"pointer"}},"Buy Now"),r.a.createElement("a",{href:"/",onClick:function(){return e.deleteItem(t.refid)},style:{cursor:"pointer",marginLeft:"5px"}},"Delete Item"))))}))))};var N=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),l=Object(d.a)(o,2),i=l[0],u=l[1],s=g.firestore();return Object(n.useEffect)((function(){var e=[];s.collection("saveditems").where("username","==",localStorage.getItem("email")).get().then((function(t){t.forEach((function(t){var a=t.data();Object.assign(a,{refid:t.id}),console.log(a),e.push(a)})),c([].concat(e))}))}),[i,s]),r.a.createElement("div",{className:"App"},r.a.createElement(w.a,null),r.a.createElement(k,null),r.a.createElement(D,{items:a,deleteItem:function(e){s.collection("saveditems").doc(e).delete().then((function(e){u(+new Date),Object(w.b)("Product Removed")}))}}),r.a.createElement(I,null))},C=a(50),A=new(function(){function e(){Object(l.a)(this,e)}return Object(i.a)(e,[{key:"checkAuthenticated",value:function(){return!!localStorage.getItem("email")}}]),e}());function _(e){var t=e.component,a=Object(C.a)(e,["component"]);return r.a.createElement(x.b,Object.assign({},a,{render:function(e){return A.checkAuthenticated()?r.a.createElement(t,e):r.a.createElement(x.a,{to:{pathname:"/",state:{from:e.location}}})}}))}var F=r.a.createElement(b.a,null,r.a.createElement("div",null,r.a.createElement(x.b,{exact:!0,path:"/",component:P}),r.a.createElement(_,{exact:!0,path:"/saveditems",component:N})));o.a.render(F,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.ff02107e.chunk.js.map