(this["webpackJsonphome-work"]=this["webpackJsonphome-work"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports={greet:"Greeting_greet__2aple",positionError:"Greeting_positionError__3UOpZ",normalTxt:"Greeting_normalTxt__1hcdu",errorTxt:"Greeting_errorTxt__2ugG8",errorSymbol:"Greeting_errorSymbol__1jfSY",normalSymbol:"Greeting_normalSymbol__LCjyQ"}},,,function(e,t,a){e.exports={container:"Stage_container__11tPN",select:"Stage_select__u_oTL",DropdownMenu:"Stage_DropdownMenu__2zwY1",DropdownMenuShow:"Stage_DropdownMenuShow__1975_"}},,function(e,t,a){e.exports={positionContent:"App_positionContent__9DguD",greetBlock:"App_greetBlock__sglP_",positionAll:"App_positionAll__2Z9er",headerMenu:"App_headerMenu__1aTHW",menu:"App_menu__3HBWr",select:"App_select__3BiI7"}},function(e,t,a){e.exports={tusk:"Item_tusk__qXNSG",low:"Item_low__2SVds",hight:"Item_hight__27fR-",medium:"Item_medium__3timd"}},function(e,t,a){e.exports={default:"MyButton_default__2eevT",delete:"MyButton_delete__2i5xI",escape:"MyButton_escape__1VjNO",select:"MyButton_select__379o_"}},,function(e,t,a){e.exports={massage:"Massage_massage__2B5Qt",name:"Massage_name__2TTHb",time:"Massage_time__VxX9a",txt:"Massage_txt__2dNYj"}},function(e,t,a){e.exports={position:"Tusk_position__34J4j",buttons:"Tusk_buttons__9fDIr",priorityBlock:"Tusk_priorityBlock__26m2c"}},function(e,t,a){e.exports={default:"MyInput_default__1-7pd",error:"MyInput_error__2mjR0"}},,,,,,,function(e,t,a){e.exports=a.p+"static/media/avatar7.1ee966d6.png"},,function(e,t,a){e.exports=a(38)},,,,,function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(24),l=a.n(o),i=(a(32),a(11),a(3)),c=a(16),u=a.n(c),m=a(25),s=a.n(m),_=function(e){return r.a.createElement("div",{className:u.a.massage+" row"},r.a.createElement("img",{src:s.a}),r.a.createElement("p",{className:u.a.name},e.name),r.a.createElement("p",{className:u.a.time},e.time),r.a.createElement("div",{className:u.a.txt+" col-11 offset-1"},r.a.createElement("p",null,e.txt)))},d=function(){var e=Object(n.useState)([{txt:"Good",time:"12:00",name:"Sanchek",id:1},{txt:"test txt",time:"12:00",name:"Sanchek",id:2},{txt:"....",time:"12:00",name:"Sanchek",id:3},{txt:"Hello",time:"12:00",name:"Sanchek",id:4}]),t=Object(i.a)(e,1)[0];return r.a.createElement("div",{className:"col-3"},t.map((function(e){return r.a.createElement(_,{key:e.id,time:e.time,name:e.name,txt:e.txt})})))},p=a(12),E=a.n(p),f=a(17),h=a.n(f),g=a(13),v=a.n(g),y=function(e){var t=v.a.hight;return"hight"===e.prior?t=v.a.hight:"low"===e.prior?t=v.a.low:"medium"===e.prior&&(t=v.a.medium),r.a.createElement("div",{className:v.a.tusk},r.a.createElement("p",null,e.txt,":"),r.a.createElement("p",{className:t},"Priority: ",e.prior),r.a.createElement("button",{onClick:function(){e.removeTusk(e.id)}},"\u0417\u0434\u0430\u0442\u044c"))},b=a(14),k=a.n(b),x=function(e){var t=k.a.default;return"delete"===e.type?t=k.a.delete:"default"===e.type?t=k.a.default:"escape"===e.type?t=k.a.escape:"select"===e.type&&(t=k.a.select),r.a.createElement("button",{disabled:e.disabled,className:t,onClick:e.click},e.text)},w=function(){var e=Object(n.useState)([{tusk:"\u0440\u0430\u0431\u043e\u0442\u0430",priority:"hight",id:1},{tusk:"\u0437\u0430\u043b\u0438\u043f\u0430\u0442\u044c \u0432 \u043c\u043e\u043d\u0438\u0442\u043e\u0440 \u043f\u043e 5 \u043c\u0438\u043d\u0443\u0442",priority:"low",id:2},{tusk:"\u0438\u0433\u0440\u044b",priority:"hight",id:3},{tusk:"\u0441\u043f\u0430\u0442\u044c",priority:"low",id:4},{tusk:"\u0447\u0443\u0434\u0438\u0442\u044c",priority:"medium",id:5}]),t=Object(i.a)(e,2),a=t[0],o=t[1],l=function(e){var t=a.filter((function(t){return t.id!=e}));o(t)},c=Object(n.useState)("all"),u=Object(i.a)(c,2),m=u[0],s=u[1],_=function(e){s(e)},d=a;return"low"===m&&(d=a.filter((function(e){return"low"===e.priority}))),"hight"===m&&(d=a.filter((function(e){return"hight"===e.priority}))),"medium"===m&&(d=a.filter((function(e){return"medium"===e.priority}))),r.a.createElement("div",{className:h.a.position+" row"},r.a.createElement("h2",{className:"col-12 text-center"},"\u0417\u0430\u0434\u0430\u0447\u0438"),r.a.createElement("div",null,d.map((function(e){return r.a.createElement(y,{key:e.id,removeTusk:l,txt:e.tusk,prior:e.priority,id:e.id})})),r.a.createElement("div",{className:h.a.buttons},r.a.createElement("div",{className:h.a.priorityBlock},r.a.createElement("p",null,"Choose priority:"),r.a.createElement(x,{text:"High",click:function(){_("hight")}}),r.a.createElement(x,{text:"Medium",click:function(){_("medium")}}),r.a.createElement(x,{text:"Low",click:function(){_("low")}}),r.a.createElement(x,{text:"All",click:function(){_("all")}})),r.a.createElement("div",null))))},S=a(7),N=a.n(S),j=a(18),M=a.n(j),O=function(e){var t=M.a.error;"default"===e.style?t=M.a.default:"error"===e.style&&(t=M.a.error);return r.a.createElement("input",{className:t,placeholder:e.placeHolderValue,onKeyPress:function(t){13===t.charCode&&e.pressEnter()},onChange:function(t){e.change(t.currentTarget.value)},value:e.value})},T=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],o=t[1],l=function(){""===a&&(_(N.a.errorTxt),f(N.a.normalSymbol)),""!==a&&(alert(a),_(N.a.normalTxt))},c=function(e){/[@?,."%$#!&*()+0-9]/.test(e)?(y("error"),f(N.a.errorSymbol),S(!0)):(_(N.a.normalTxt),y("default"),f(N.a.normalSymbol),S(!1))},u=Object(n.useState)(N.a.normalTxt),m=Object(i.a)(u,2),s=m[0],_=m[1],d=Object(n.useState)(N.a.normalSymbol),p=Object(i.a)(d,2),E=p[0],f=p[1],h=Object(n.useState)("default"),g=Object(i.a)(h,2),v=g[0],y=g[1],b=Object(n.useState)(!1),k=Object(i.a)(b,2),w=k[0],S=k[1];return r.a.createElement("div",null,r.a.createElement("h1",null,"\u041d\u0443 \u0434\u0430\u0432\u0430\u0439 \u043f\u043e\u0437\u0434\u043e\u0440\u043e\u0432\u0430\u0435\u043c\u0441\u044f"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:N.a.greet},r.a.createElement(x,{disabled:w,text:"to greet",click:l}),r.a.createElement(O,{style:v,placeHolderValue:"\u0414\u0430\u0432\u0430\u0439 \u0441\u0432\u043e\u0451 \u0438\u043c\u044f \u0431\u0440\u0430\u0442\u0430\u043d",change:function(e){o(e),c(e)},value:a,pressEnter:function(){l()}})),r.a.createElement("div",{className:N.a.positionError},r.a.createElement("p",{className:s}," *\u0421\u0442\u0440\u043e\u043a\u0430 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u043e\u0439"),r.a.createElement("p",{className:E},' *\u0421\u0442\u0440\u043e\u043a\u0430 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, c\u0438\u043c\u0432\u043e\u043b\u044b:@, ., "'))))},B=a(1),A=a(10),D=a.n(A),I=a(8),C=function(){var e=Object(n.useState)(D.a.DropdownMenu),t=Object(i.a)(e,2),a=t[0],o=t[1];return r.a.createElement("div",{onMouseEnter:function(){o(D.a.DropdownMenuShow)},onMouseLeave:function(){o(D.a.DropdownMenu)},className:D.a.container},r.a.createElement("div",{className:D.a.dropdown},r.a.createElement("div",{className:D.a.select},r.a.createElement("span",null,"Stage")),r.a.createElement("ul",{className:a},r.a.createElement("li",null,r.a.createElement(I.b,{to:"/preJunior"},"PreJunior")),r.a.createElement("li",null,r.a.createElement(I.b,{to:"/junior"},"Junior")),r.a.createElement("li",null,r.a.createElement(I.b,{to:"/junior+"},"Junior+")))))};var G=function(){return r.a.createElement("div",{className:E.a.positionAll},r.a.createElement("div",{className:E.a.headerMenu},r.a.createElement("div",{className:E.a.menu+" container"},r.a.createElement(C,null))),r.a.createElement(B.a,{path:"/preJunior",render:function(){return r.a.createElement("div",{className:E.a.positionContent+" container"},r.a.createElement("div",{className:"row"},r.a.createElement(d,null),r.a.createElement(w,null)),r.a.createElement("div",{className:E.a.greetBlock},r.a.createElement(T,null)))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I.a,null,r.a.createElement(G,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[27,1,2]]]);
//# sourceMappingURL=main.7dbf3ef2.chunk.js.map