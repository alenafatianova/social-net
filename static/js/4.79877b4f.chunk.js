(this["webpackJsonpsocial-net"]=this["webpackJsonpsocial-net"]||[]).push([[4],{297:function(e,s,a){e.exports={users_dialogs:"Dialogs_users_dialogs__CH9fq",users:"Dialogs_users__2mbFo",user:"Dialogs_user__2bJPx",messages:"Dialogs_messages__1w_Up"}},298:function(e,s,a){},304:function(e,s,a){"use strict";a.r(s);var t=a(15),n=a(130),i=a(0),c=a.n(i),r=a(297),o=a.n(r),d=a(298),j=a.n(d),l=a(12),u=a(1),b=c.a.memo((function(e){var s="user/"+e.id;return Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:j.a.user,children:Object(u.jsx)(l.b,{to:s,children:e.name})})})})),m=a(90),g=a(131),x=a(75),O=a(33),h=Object(x.a)(100),v=c.a.memo((function(e){var s=e.handleSubmit;return Object(u.jsxs)("form",{onSubmit:s,children:[Object(u.jsx)("div",{children:Object(u.jsx)(m.a,{type:"textarea",validate:[x.c,h],placeholder:"Type your message",name:"messageTextarea",component:O.b})}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{children:"send"})})]})})),f=Object(g.a)({form:"messageTextarea"})(v),p=a(11),_=c.a.memo((function(e){var s=e.dialogsData.map((function(e){return Object(u.jsx)(b,{id:e.id,name:e.name,avatar:"https://api.adorable.io/avatars/96/".concat(e.name,".png")},e.id)})),a=e.messageData.map((function(e){return Object(u.jsx)(D,{message:e.message,id:e.id},e.id)})),t=Object(i.useCallback)((function(s){e.sendMessage(s.newMessageTextBody)}),[e]);return e.isAuth?Object(u.jsx)(p.a,{to:"/login"}):Object(u.jsxs)("div",{className:o.a.users_dialogs,children:[Object(u.jsx)("div",{className:o.a.users,children:s}),Object(u.jsxs)("div",{className:o.a.messages,children:[a,Object(u.jsx)("div",{children:Object(u.jsx)("div",{children:Object(u.jsx)(f,{onSubmit:t})})})]}),Object(u.jsx)("div",{})]})})),D=c.a.memo((function(e){return Object(u.jsx)("div",{children:Object(u.jsx)("span",{className:o.a.message,children:e.message})})})),N=a(109),w=a(9);s.default=Object(w.d)(Object(t.b)((function(e){return{dialogsData:e.dialogsPage.dialogsData,messageData:e.dialogsPage.messageData}}),(function(e){return{sendMessage:function(s){e(Object(n.b)(s))}}})),N.a)(_)}}]);
//# sourceMappingURL=4.79877b4f.chunk.js.map