(this["webpackJsonpreact-weather-app"]=this["webpackJsonpreact-weather-app"]||[]).push([[0],{37:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(2),i=c.n(a),o=c(14),s=c.n(o),r=c(5),l=c(4),h=c.n(l);var j=function(){var e=Object(a.useState)(null),t=Object(r.a)(e,2),c=t[0],i=t[1],o=Object(a.useState)(""),s=Object(r.a)(o,2),l=s[0],j=s[1];return Object(a.useEffect)((function(){h.a.get("http://api.weatherapi.com/v1/current.json?key=".concat("817942c31903489ea3c23243201211","&q=London")).then((function(e){i(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Weather App"}),Object(n.jsxs)("div",{className:"search",children:[Object(n.jsx)("input",{onChange:function(e){j(e.target.value)},type:"text",value:l}),Object(n.jsx)("button",{onClick:function(){h.a.get("http://api.weatherapi.com/v1/current.json?key=".concat("817942c31903489ea3c23243201211","&q=").concat(l)).then((function(e){i(e.data),j(""),console.log("".concat(e.data.location.name,"'s weather is presented for you!"))})).catch((function(e){console.log(e)}))},children:"Search"})]}),c&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"img",children:Object(n.jsx)("img",{src:c.current.condition.icon,alt:""})}),Object(n.jsxs)("div",{className:"info",children:[Object(n.jsxs)("h1",{children:["CITY: ",c.location.name]}),Object(n.jsxs)("h2",{children:["REIGION: ",c.location.region]}),Object(n.jsxs)("h3",{children:["LOCALTIME: ",c.location.localtime]}),Object(n.jsxs)("h4",{children:["It is ",c.current.temp_c," but it feels like"," ",c.current.feelslike_c,", why...?"]})]})]})]})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,38)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;c(e),n(e),a(e),i(e),o(e)}))};s.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(j,{})}),document.getElementById("root")),u()}},[[37,1,2]]]);
//# sourceMappingURL=main.0d6d14a1.chunk.js.map