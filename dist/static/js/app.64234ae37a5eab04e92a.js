webpackJsonp([1],{"+9UI":function(t,e){},0:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={};s.d(a,"getUser",function(){return K}),s.d(a,"getRooms",function(){return T});var o=s("7+uW"),n=(s("K3J8"),s("pc4J"),{render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"PageHeader d-flex justify-content-center"},[s("nav",{staticClass:"navbar navbar-light bg-light  justify-content-between"},[s("span",{staticClass:"navbar-brand mb-0 h1"},[t._v("Chat Room")]),t._v(" "),0!==Object.keys(t.$route.params).length?s("button",{staticClass:"btn btn-outline-warning",on:{click:t.goRegister}},[t._v(t._s(t.$route.params.username))]):t._e()])])},staticRenderFns:[]});var r={name:"App",components:{PageHeader:s("VU/8")({name:"PageHeader",methods:{goRegister:function(){this.$router.push({name:"register"})}}},n,!1,function(t){s("+9UI")},"data-v-2088a359",null).exports}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("PageHeader"),this._v(" "),e("div",{staticClass:"container"},[e("router-view",{staticStyle:{margin:"20px 0px 40px 0px"}})],1)],1)},staticRenderFns:[]};var c=s("VU/8")(r,i,!1,function(t){s("pYqV")},null,null).exports,m=s("/ocq"),u=s("Xxa5"),l=s.n(u),d=s("exGp"),p=s.n(d),f=s("Dd8w"),v=s.n(f),h=s("NYxO"),g={name:"Register",data:function(){return{username:""}},methods:v()({},Object(h.b)(["USER_COMMIT"]),{register:function(){var t=this;return p()(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.USER_COMMIT(t.username);case 2:t.$router.push({name:"chatroomlist",params:{username:t.username}});case 3:case"end":return e.stop()}},e,t)}))()}})},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Register"},[s("h1",[t._v("Register")]),t._v(" "),s("div",{staticClass:"inputBar mt-5"},[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"username"}},[t._v("Username")]),t._v(" "),s("div",{staticClass:"col-sm-10"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",name:"username",placeholder:"username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})])]),t._v(" "),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.register}},[t._v("login")])])])},staticRenderFns:[]};var y=s("VU/8")(g,_,!1,function(t){s("zKUV")},"data-v-77b0ced0",null).exports,C=s("DmT9"),b=s.n(C),R={},x={name:"ChatRoomList",data:function(){return{roomName:"",rooms:[]}},computed:{sortRooms:function(){return this.rooms.slice().sort(function(t,e){return t.id-e.id})}},props:["username"],methods:{clickLink:function(t){this.$router.push({name:"chatroom",params:{roomid:t,username:this.$route.params.username}})},addRoom:function(){if(""!==this.roomName){var t={id:this.rooms.length,roomName:this.roomName,createBy:this.username};R.emit("setRoom",t),this.rooms.push(t),this.roomName=""}}},created:function(){var t=this;(R=b()("https://fierce-garden-86164.herokuapp.com/",{path:"/rooms"})).emit("getRooms"),R.on("rooms",function(e){t.rooms=e}),R.on("pushRoom",function(e){t.rooms.push(e)})},beforeDestroy:function(){R.close()}},k={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ChatRoomList"},[t._m(0),t._v(" "),s("div",{staticClass:"w-100 d-flex"},[t._m(1),t._v(" "),s("div",{staticClass:"collapse w-100",attrs:{id:"collapseExample"}},[s("div",{staticClass:"card card-body "},[s("form",[s("div",{staticClass:"form-row align-items-center"},[s("div",{staticClass:"col-sm-10"},[s("div",{staticClass:"input-group"},[t._m(2),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.roomName,expression:"roomName",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"Room's Name"},domProps:{value:t.roomName},on:{input:function(e){e.target.composing||(t.roomName=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})])]),t._v(" "),s("div",{staticClass:"col-sm-2 d-flex justify-content-end"},[s("button",{staticClass:"btn btn-primary my-1",attrs:{type:"button"},on:{click:t.addRoom}},[t._v("NEW")])])])])])])]),t._v(" "),s("div",{staticClass:"list-group mt-4"},t._l(t.sortRooms,function(e,a){return s("a",{key:e.id,staticClass:"list-group-item list-group-item-action d-flex justify-content-center",attrs:{href:"javascript:;"},on:{click:function(s){t.clickLink(e.id)}}},[s("div",{staticClass:"row"},[s("h5",{staticClass:"col-2 room-index"},[t._v(t._s(a+1))]),t._v(" "),s("p",{staticClass:"col-7 room-name"},[t._v(t._s(e.roomName))]),t._v(" "),s("span",{staticClass:"col-3 badge room-creater",class:e.createBy===t.username?"badge-primary":"badge-info"},[s("small",{},[t._v(t._s(e.createBy))])])])])}))])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("ChatRoomList")]),this._v(" "),e("hr")])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-toggle":"collapse","data-target":"#collapseExample"}},[e("i",{staticClass:"fas fa-plus-circle"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("div",{staticClass:"input-group-text"},[e("i",{staticClass:"fas fa-warehouse"})])])}]};var w=s("VU/8")(x,k,!1,function(t){s("oLoh")},"data-v-bfa8c720",null).exports,U=s("//Fk"),E=s.n(U),N=s("mtWM"),$=s.n(N).a.create({baseURL:"https://chaos-mod-sever.herokuapp.com/"}),M={},S={name:"ChatRoom",data:function(){return{reLoadDisabled:!0,messages:[],message:"",key:""}},computed:{sortMessages:function(){return this.messages.slice().sort(function(t,e){return t.id-e.id})}},props:["roomid","username"],methods:{addMsg:function(){var t=this;""!==this.message&&$.post("/AES_encrypt",{key:this.key,data:this.message}).then(function(e){return{roomId:t.roomid,message:{from:t.username,id:t.messages.length,message:e.data.encrypt_text,Um:e.data.Um}}}).then(function(e){M.emit("setMessage",e),t.messages.push({id:t.messages.length,message:t.message,from:t.username}),t.message=""}).catch(function(t){console.log(t)})},setKey:function(){""!==this.key&&(this.reLoadDisabled=!0,this.messages=[],M.emit("getMessage",{id:this.roomid}))}},updated:function(){var t=this.$el.querySelector(".message-bar");t.scrollTop=t.scrollHeight},created:function(){var t=this;(M=b()("https://fierce-garden-86164.herokuapp.com/",{path:"/messages"})).emit("getMessage",{id:this.roomid}),M.on("messages",function(e){var s=[];e.forEach(function(e){s.push($.post("/AES_decrypt",{data:e.message,Um:e.Um,key:t.key}).then(function(s){t.messages.push({from:e.from,id:e.id,message:s.data.decrypt_text})}).catch(function(t){return console.log(t)}))}),E.a.all(s).then(function(){t.reLoadDisabled=!1}).catch(function(t){return console.log(t)})}),M.on("pushMessage",function(e){$.post("/AES_decrypt",{data:e.message,Um:e.Um,key:t.key}).then(function(s){t.messages.push({from:e.from,id:e.id,message:s.data.decrypt_text})}).catch(function(t){return console.log(t)})})},beforeDestroy:function(){M.close()}},L={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ChatRoom"},[t._m(0),t._v(" "),s("div",{staticClass:"form-row align-items-center mb-3"},[s("div",{staticClass:"col-sm-9"},[s("div",{staticClass:"input-group"},[t._m(1),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.key,expression:"key",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"Room's Key"},domProps:{value:t.key},on:{input:function(e){e.target.composing||(t.key=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})])]),t._v(" "),s("div",{staticClass:"col-sm-3 d-flex justify-content-end"},[s("button",{staticClass:"btn btn-primary my-1",attrs:{type:"button",disabled:t.reLoadDisabled},on:{click:function(e){t.setKey()}}},[t._v("RELOAD")])])]),t._v(" "),s("div",{staticClass:"border-chat p-3"},[s("div",{staticClass:"message-bar"},t._l(t.sortMessages,function(e,a){return s("div",{key:e.id,staticClass:"message-item text-left",class:e.from===t.$route.params.username?"user":""},[s("p",{staticClass:"name"},[t._v(t._s(e.from))]),t._v(" "),s("p",{staticClass:"text"},[t._v(t._s(e.message))])])})),t._v(" "),s("div",{staticClass:"input-bar px-3"},[s("hr",{staticClass:"my-3"}),t._v(" "),s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"form-control",attrs:{type:"text",placeholder:"text"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),t._v(" "),s("div",{staticClass:"input-group-append"},[s("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[t._v(t._s(t.$route.params.username))]),t._v(" "),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.addMsg()}}},[t._v("send")])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("ChatRoom")]),this._v(" "),e("hr")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("div",{staticClass:"input-group-text"},[e("i",{staticClass:"fas fa-key"})])])}]};var O=s("VU/8")(S,L,!1,function(t){s("yLeA")},"data-v-30c52882",null).exports,A={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"NotFound404"},[this._v("\r\n    NotFound404\r\n")])},staticRenderFns:[]};var F=s("VU/8")({name:"NotFound404"},A,!1,function(t){s("ttyi")},"data-v-dcbc56d2",null).exports;o.a.use(m.a);var P,V=new m.a({routes:[{path:"/",name:"index",redirect:{name:"register"}},{path:"/user",name:"register",component:y},{path:"/user/:username/chatroomlist",name:"chatroomlist",component:w,props:!0},{path:"/user/:username/chatroomlist/:roomid",name:"chatroom",component:O,props:!0},{path:"*",name:"404",component:F}]}),j={USER_COMMIT:function(t,e){var s=t.commit;return new E.a(function(t,a){try{s("commitUser",e),t()}catch(t){a(t)}})},MESSAGE_PUSH:function(t,e){var s=t.commit;return new E.a(function(t,a){try{s("newMessage",e),t()}catch(t){a(t)}})},ROOM_NEW:function(t,e){var s=t.commit;return new E.a(function(t,a){try{s("newRoom",e),t()}catch(t){a(t)}})}},D=s("bOdI"),H=s.n(D),I=(P={},H()(P,"commitUser",function(t,e){t.user=e}),H()(P,"newMessage",function(t,e){var s=t.history.find(function(t){return t.id===e.roomid}).messages,a={id:s.length,message:e.message,user:e.user};s.push(a)}),H()(P,"pullRooms",function(t,e){e.forEach(function(t){t.messages=[]}),t.chatrooms=e}),H()(P,"newRoom",function(t,e){t.chatrooms.push(e)}),H()(P,"openRoomSocket",function(){}),H()(P,"closeRoomSocket",function(){}),P),K=function(t){return t.user},T=function(t){return t.chatrooms},q=function(t){return function(e){t.on("rooms",function(t){e.commit(""+["pullRooms"],t.sort(function(t,e){return t.id-e.id}))}),e.subscribe(function(e){e.type===""+["openRoomSocket"]?(t.open(),t.emit("getRooms")):e.type===""+["closeRoomSocket"]?t.close():e.type===""+["newRoom"]&&t.emit("setRoom",e.payload)})}},B=b()("http://localhost:3000/",{autoConnect:!1,path:"/rooms"});o.a.use(h.a);var J=new h.a.Store({strict:!0,state:{user:null,chatrooms:[]},actions:j,mutations:I,getters:a,plugins:[q(B)]});o.a.config.productionTip=!1,V.beforeResolve(function(t,e,s){J.getters.getUser||"register"===t.name?s():s({name:"register"})}),new o.a({el:"#app",router:V,store:J,components:{App:c},template:"<App/>"})},oLoh:function(t,e){},pYqV:function(t,e){},pc4J:function(t,e){},ttyi:function(t,e){},yLeA:function(t,e){},zKUV:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.64234ae37a5eab04e92a.js.map