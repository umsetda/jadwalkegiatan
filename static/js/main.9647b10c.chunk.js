(window["webpackJsonpjadwalsetda-web"]=window["webpackJsonpjadwalsetda-web"]||[]).push([[0],{19:function(e,a,t){e.exports=t(33)},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(16),r=t.n(c),s=t(1),m=t(2),i=t(8);var o=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{type:"button",className:"button is-loading is-large is-white"},"Loading"))};function u(){return localStorage.hasOwnProperty("token")?localStorage.getItem("token"):null}function d(){return localStorage.hasOwnProperty("username")?localStorage.getItem("username"):null}function E(){return localStorage.getItem("name")?localStorage.getItem("name"):null}function p(){if(localStorage.hasOwnProperty("role"))return localStorage.getItem("role")}function b(){if(localStorage.hasOwnProperty("isObserver"))return localStorage.getItem("isObserver")}var f=Object(i.g)((function(e){var a=Object(n.useState)(!1),t=Object(s.a)(a,2),c=t[0],r=t[1],i=p(),o=b();return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"navbar is-white is-fixed-top"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"navbar-brand"},l.a.createElement(m.b,{to:"/",className:"navbar-item brand-text"},"Jadwal Setda"),l.a.createElement("div",{className:"navbar-burger burger".concat(c?" is-active":""),onClick:function(){return r(!c)}},l.a.createElement("span",{"aria-hidden":"true"}),l.a.createElement("span",{"aria-hidden":"true"}),l.a.createElement("span",{"aria-hidden":"true"}))),l.a.createElement("div",{className:"navbar-menu".concat(c?" is-active":"")},l.a.createElement("div",{className:"navbar-start is-mobile-only"},l.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},l.a.createElement(m.b,{to:"#",className:"navbar-link"},"Gedung & Ruangan"),l.a.createElement("div",{className:"navbar-dropdown"},l.a.createElement(m.b,{to:"/events/setda",className:"navbar-item",onClick:function(){return r(!1)}},"Sekretariat"),"super"===i||"adipura"===i?l.a.createElement(m.b,{to:"/events/adipura",className:"navbar-item",onClick:function(){return r(!1)}},"Gedung Adipura"):null)),"super"===i||"true"===o?l.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},l.a.createElement(m.b,{to:"#",className:"navbar-link"},"Pejabat Daerah"),l.a.createElement("div",{className:"navbar-dropdown"},l.a.createElement(m.b,{to:"/events/bupati",className:"navbar-item",onClick:function(){return r(!1)}},"Bupati"),l.a.createElement(m.b,{to:"/events/wakil",className:"navbar-item",onClick:function(){return r(!1)}},"Wakil Bupati"),l.a.createElement(m.b,{to:"/events/sekda",className:"navbar-item",onClick:function(){return r(!1)}},"Sekretaris Daerah"))):null,"super"===i?l.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},l.a.createElement(m.b,{to:"#",className:"navbar-link"},"Admin"),l.a.createElement("div",{className:"navbar-dropdown"},l.a.createElement(m.b,{to:"/places",className:"navbar-item",onClick:function(){return r(!1)}},"Tempat"),l.a.createElement(m.b,{to:"/users",className:"navbar-item",onClick:function(){return r(!1)}},"Pengguna"))):null),l.a.createElement("div",{className:"navbar-end"},l.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},l.a.createElement(m.b,{to:"#",className:"navbar-link"},e.name?e.name:"Akun"),l.a.createElement("div",{className:"navbar-dropdown is-right"},l.a.createElement(m.b,{to:e.name?"#":"/login",className:"navbar-item",onClick:e.name?function(){r(!1),e.notify("Berhasil log keluar"),localStorage.clear(),e.setName(""),e.history.push("/")}:function(){r(!1)}},e.name?"Log Keluar":"Log Masuk"),l.a.createElement("div",{className:"navbar-divider"}),l.a.createElement(m.b,{to:"/about",className:"navbar-item",onClick:function(){return r(!1)}},"Tentang Aplikasi"))))))))}));var v=function(){var e=p(),a=b();return l.a.createElement("div",{className:"column is-narrow is-hidden-mobile"},l.a.createElement("aside",{className:"menu is-hidden-mobile"},l.a.createElement("ul",{className:"menu-list"},l.a.createElement("li",null,l.a.createElement(m.b,{to:"/"},"BERANDA"))),l.a.createElement("p",{className:"menu-label"},"Jadwal Gedung & Ruangan"),l.a.createElement("ul",{className:"menu-list"},l.a.createElement("li",null,l.a.createElement(m.b,{to:"/events/setda"},"Sekretariat")),"adipura"===e||"super"===e?l.a.createElement("li",null,l.a.createElement(m.b,{to:"/events/adipura"},"Sasana Adipura Kencana")):null),"super"===e||"true"===a?l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{className:"menu-label"},"Jadwal Pejabat Daerah"),l.a.createElement("ul",{className:"menu-list"},l.a.createElement("li",null,l.a.createElement(m.b,{to:"/events/bupati"},"Bupati")),l.a.createElement("li",null,l.a.createElement(m.b,{to:"/events/wakil"},"Wakil Bupati")),l.a.createElement("li",null,l.a.createElement(m.b,{to:"/events/sekda"},"Sekretaris Daerah")))):null,"super"===e?l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{className:"menu-label"},"Admin"),l.a.createElement("ul",{className:"menu-list"},l.a.createElement("li",null,l.a.createElement(m.b,{to:"/places"},"Daftar Tempat")),l.a.createElement("li",null,l.a.createElement(m.b,{to:"/users"},"Daftar Pengguna")))):null))};var h=function(e){var a=e.headers;return l.a.createElement("table",{className:"table is-fullwidth is-striped is-hoverable"},l.a.createElement("thead",null,l.a.createElement("tr",null,a.length?a.map((function(e,a){return l.a.createElement("th",{key:a,className:e.isHiddenMobile?" is-hidden-mobile":""},e.text)})):null)),l.a.createElement("tbody",null,e.children))};var N=function(e){return l.a.createElement("div",{className:"level"},l.a.createElement("div",{className:"level-left"},l.a.createElement("button",{className:"button is-link",onClick:function(){return e.setIsModalVisible(!0)}},"Tambah",e.title?" ".concat(e.title):null)),l.a.createElement("div",{className:"level-right"},l.a.createElement("div",{className:"field has-addons"},l.a.createElement("div",{className:"control"},l.a.createElement("input",{type:"text",className:"input",placeholder:"ketik untuk mencari...",value:e.searchVal,onChange:function(a){return e.setSearchVal(a.target.value)}})),l.a.createElement("div",{className:"control"},l.a.createElement("button",{type:"button",className:"button".concat(e.searchVal?" is-danger":""),onClick:function(){return e.setSearchVal("")}},l.a.createElement("span",{className:"icon"},l.a.createElement("i",{className:"fas fa-backspace"})))))))};var g=function(e){return l.a.createElement("section",{className:"hero is-info welcome is-small"},l.a.createElement("div",{className:"hero-body"},l.a.createElement("h1",{className:"title"},e.children)))};var j=function(e){return l.a.createElement("div",{className:"modal is-active"},l.a.createElement("div",{className:"modal-background",onClick:e.closeModal}),l.a.createElement("div",{className:"modal-card"},l.a.createElement("div",{className:"modal-card-body"},e.children)),l.a.createElement("button",{className:"modal-close is-large","aria-label":"close",onClick:e.closeModal}))};var k=function(e){return l.a.createElement("div",{className:"notification is-warning",style:{position:"fixed",bottom:"1rem",right:"1.5rem",zIndex:"1000"}},l.a.createElement("button",{type:"button",className:"delete",onClick:e.dismiss}),e.children)};var O=function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"content has-text-centered"},l.a.createElement("p",null,l.a.createElement("strong",null,"Jadwal Setda")," dikembangkan untuk Sekretariat Daerah Kabupaten Wonosobo."),l.a.createElement("p",null,"Shoutouts:\xa0",l.a.createElement("a",{target:"_blank",href:"https://pages.github.com/",rel:"noopener noreferrer"},"Github Pages"),",\xa0",l.a.createElement("a",{target:"_blank",href:"https://www.heroku.com/",rel:"noopener noreferrer"},"Heroku"),",\xa0",l.a.createElement("a",{target:"_blank",href:"https://mlab.com/",rel:"noopener noreferrer"},"mLab"),",\xa0",l.a.createElement("a",{target:"_blank",href:"https://nodejs.org/",rel:"noopener noreferrer"},"NodeJS"),",\xa0",l.a.createElement("a",{target:"_blank",href:"https://reactjs.org/",rel:"noopener noreferrer"},"React"),".")))},y=t(3),S=t.n(y);var w=function(){var e=E()||d()||"Pengguna",a=d(),t=p(),c="Selamat "+function(){var e=S()().format("HH");return e>=20||e<=4?"Malam":e<=10?"Pagi":e<=15?"Siang":"Sore"}(),r="https://jadwalsetda.herokuapp.com/api/events/",i=Object(n.useState)([]),u=Object(s.a)(i,2),b=u[0],f=u[1],v=Object(n.useState)(!1),h=Object(s.a)(v,2),N=h[0],g=h[1];return Object(n.useEffect)((function(){!function(){var e=S()().startOf("day").utc().format("YYYY-MM-DD HH:mm"),a=S()().endOf("day").utc().format("YYYY-MM-DD HH:mm"),t=r+"?type=".concat("setda","&from=").concat(e,"&to=").concat(a);g(!0),fetch(t).then((function(e){return e.json()})).then((function(e){g(!1),f(e)})).catch((function(e){g(!1),console.log(e)}))}()}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"hero is-info welcome is-small"},l.a.createElement("div",{className:"hero-body"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"title"},c,", ",e,"!")))),l.a.createElement("div",{className:"box"},l.a.createElement("h2",{className:"title"},"Setda Hari Ini"),N?l.a.createElement(o,null):null,b.length?l.a.createElement("table",{className:"table is-fullwidth is-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Jam"),l.a.createElement("th",null,"Acara"))),l.a.createElement("tbody",null,b.map((function(e){return l.a.createElement("tr",{key:e._id},l.a.createElement("td",null,e.dateTime?S()(e.dateTime).local().format("HH:mm"):null),l.a.createElement("td",null,l.a.createElement("span",{className:"has-text-weight-bold"},e.name),e.place?l.a.createElement(l.a.Fragment,null,l.a.createElement("br",null),l.a.createElement("i",{className:"fas fa-map-marker-alt",style:{marginRight:".5rem",fontSize:".75rem",color:"#276cda"}}),e.place):null,"strt"===a||"kahumum"===a||"kart"===a||"setda"===t?l.a.createElement(l.a.Fragment,null,e.notes?l.a.createElement(l.a.Fragment,null,l.a.createElement("br",null),l.a.createElement("i",{className:"fas fa-clipboard",style:{marginRight:".5rem",fontSize:".75rem",color:"#276cda"}}),e.notes):null):null,e.pic?l.a.createElement(l.a.Fragment,null,l.a.createElement("br",null),l.a.createElement("i",{className:"fas fa-briefcase",style:{marginRight:".5rem",fontSize:".75rem",color:"#276cda"}}),e.pic,e.participant?" (".concat(e.participant,")"):null):null))})))):null,N?null:l.a.createElement(m.b,{to:"/events/setda"},"Selengkapnya...")))};var M=function(){return l.a.createElement("div",{className:"box"},l.a.createElement("section",{className:"section"},l.a.createElement("div",{className:"content"},l.a.createElement("h1",{className:"title"},"Aplikasi Jadwal Setda"),l.a.createElement("p",null,"Aplikasi dikembangkan untuk Sekretariat Daerah Kabupaten Wonosobo. Gunakan dengan penuh tanggung jawab!"),l.a.createElement("p",null,"Masalah, komplain atau saran? email ke rudyhmn@outlook.com"),l.a.createElement("h2",{className:"title"},"Role Pengguna"),l.a.createElement("ol",{type:"1"},l.a.createElement("li",null,l.a.createElement("span",{className:"has-text-weight-semibold"},"Super Admin"),": (super) Full Control Jadwal, Admin Pengguna, Admin Tempat"),l.a.createElement("li",null,l.a.createElement("span",{className:"has-text-weight-semibold"},"Ajudan Bupati"),": (ajbup) Admin Jadwal Bupati"),l.a.createElement("li",null,l.a.createElement("span",{className:"has-text-weight-semibold"},"Ajudan Wakil Bupati"),": (ajwak) Admin Jadwal Wakil Bupati"),l.a.createElement("li",null,l.a.createElement("span",{className:"has-text-weight-semibold"},"Ajudan Sekda"),": (ajsek) Admin Jadwal Sekretaris Daerah"),l.a.createElement("li",null,l.a.createElement("span",{className:"has-text-weight-semibold"},"Admin Adipura"),": (ptadi) Admin Jadwal Gedung Sasana Adipura Kencana"),l.a.createElement("li",null,l.a.createElement("span",{className:"has-text-weight-semibold"},"Admin Setda"),": (ptset) Admin Jadwal Ruang Rapat, Pendopo, Alun-alun"),l.a.createElement("li",null,l.a.createElement("span",{className:"has-text-weight-semibold"},"Observer"),": Pengguna yang dapat melihat Jadwal Pejabat")))))};var Y=function(){return l.a.createElement("div",null,l.a.createElement("h1",{className:"title"},"404!"),l.a.createElement("p",null,"Not Found! Periksa kembali url"))},C="https://jadwalsetda.herokuapp.com/api/users/authenticate";var A=Object(i.g)((function(e){var a=Object(n.useState)(""),t=Object(s.a)(a,2),c=t[0],r=t[1],m=Object(n.useState)(""),i=Object(s.a)(m,2),o=i[0],u=i[1],d=Object(n.useState)(!1),E=Object(s.a)(d,2),p=E[0],b=E[1];return l.a.createElement("div",null,l.a.createElement("section",{className:"hero is-info welcome is-small"},l.a.createElement("div",{className:"hero-body"},l.a.createElement("h1",{className:"title"},"Log Masuk"),l.a.createElement("p",{className:"subtitle"},"Belum punya akun? Hubungi admin"))),l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-content"},l.a.createElement("form",{onSubmit:function(a){b(!0),fetch(C,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:c,password:o})}).then((function(e){return e.json()})).then((function(a){!function(e){localStorage.setItem("token",e.token),localStorage.setItem("username",e.doc.username),localStorage.setItem("name",e.doc.name),localStorage.setItem("role",e.doc.role.name),localStorage.setItem("isObserver",e.doc.role.isObserver)}(a),b(!1),e.setName(a.doc.name||a.doc.username),e.notify("Login berhasil"),e.history.push("/")})).catch((function(e){return console.log(e)})),a.preventDefault()}},l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"Username"),l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",type:"text",value:c,onChange:function(e){return r(e.target.value)}}))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"Password"),l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",type:"password",value:o,onChange:function(e){return u(e.target.value)}}))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("button",{type:"submit",className:"button is-primary\n                  ".concat(p?" is-loading":"","\n                  ")},"Login")))))))})),D="https://jadwalsetda.herokuapp.com/api/places/";function x(e){var a=Object(n.useState)(""),t=Object(s.a)(a,2),c=t[0],r=t[1],m=Object(n.useState)(""),i=Object(s.a)(m,2),o=i[0],d=i[1],E=Object(n.useState)(""),p=Object(s.a)(E,2),b=p[0],f=p[1],v=Object(n.useState)(!1),h=Object(s.a)(v,2),N=h[0],g=h[1],k=Object(n.useState)(!1),O=Object(s.a)(k,2),y=O[0],S=O[1];return Object(n.useEffect)((function(){e.data&&(r(e.data._id),d(e.data.name||""),f(e.data.capacity||""))}),[e.data]),l.a.createElement(j,{closeModal:e.closeModal},l.a.createElement("h1",{className:"title"},c?"Ubah ":"Tambah ","Tempat"),l.a.createElement("form",{onSubmit:function(a){var t=c?D+c:D,n=c?"PUT":"POST",l={Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+u()},r=JSON.stringify({name:o,capacity:b});g(!0),fetch(t,{method:n,headers:l,body:r}).then((function(){e.getPlaces(),e.closeModal()})).catch((function(e){return console.log(e)})),a.preventDefault()}},l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"Nama"),l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",type:"text",value:o,onChange:function(e){return d(e.target.value)}}))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"Kapasitas"),l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",type:"number",value:b,onChange:function(e){return f(e.target.value)}}))),l.a.createElement("div",{className:"field is-grouped"},l.a.createElement("div",{className:"control"},l.a.createElement("button",{type:"submit",className:"button is-primary\n                ".concat(N&!y?" is-loading":"","\n                ")},"Simpan")),c?l.a.createElement("div",{className:"control"},l.a.createElement("button",{type:"button",onClick:function(){if(!y)return S(!0);g(!0),fetch(D+c,{method:"DELETE",headers:{Authorization:"Bearer "+u()}}).then((function(){e.getPlaces(),e.closeModal()})).catch((function(e){return console.log(e)}))},className:"button\n                  ".concat(y?" is-danger":" is-warning","\n                  ").concat(y&&N?" is-loading":"","\n                  ")},y?"Hapus Permanen":"Hapus")):null)))}var H=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(!1),m=Object(s.a)(r,2),i=m[0],u=m[1],d=Object(n.useState)([]),E=Object(s.a)(d,2),b=E[0],f=E[1],v=Object(n.useState)(null),j=Object(s.a)(v,2),k=j[0],O=j[1],y=Object(n.useState)(""),S=Object(s.a)(y,2),w=S[0],M=S[1],Y=p();function C(){c(!0),f([]),fetch(D).then((function(e){return e.json()})).then((function(e){c(!1),f(e)})).catch((function(e){return console.log(e)}))}return Object(n.useEffect)((function(){return C()}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(g,null,"Daftar Tempat"),l.a.createElement("div",{className:"box"},"super"===Y?l.a.createElement(N,{searchVal:w,setSearchVal:M,setIsModalVisible:u}):null,t?l.a.createElement(o,null):null,b.length?l.a.createElement(h,{headers:[{text:"Tempat/Lokasi"},{text:"Maks"}]},b.map((function(e){var a=e.name.toLowerCase().indexOf(w.toLowerCase())>-1;return l.a.createElement("tr",{key:e._id,style:{cursor:"pointer"},className:a?"":"is-hidden",onClick:function(){"super"===Y&&(u(!0),O(e))}},l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.capacity))}))):null,i?l.a.createElement(x,{data:k,getPlaces:C,closeModal:function(){u(!1),O(null)}}):null))},T="https://jadwalsetda.herokuapp.com/api/users/";function P(e){var a,t,c=e.user?e.user._id:null;e.user&&e.user.role&&(e.user.role.name&&(a=e.user.role.name),e.user.role.isObserver&&(t=e.user.role.isObserver));var r=Object(n.useState)(e.user?e.user.name:""),m=Object(s.a)(r,2),i=m[0],o=m[1],d=Object(n.useState)(e.user?e.user.username:""),E=Object(s.a)(d,2),p=E[0],b=E[1],f=Object(n.useState)(""),v=Object(s.a)(f,2),h=v[0],N=v[1],g=Object(n.useState)(a||"-"),k=Object(s.a)(g,2),O=k[0],y=k[1],S=Object(n.useState)(t||!1),w=Object(s.a)(S,2),M=w[0],Y=w[1],C=Object(n.useState)(!1),A=Object(s.a)(C,2),D=A[0],x=A[1];return l.a.createElement(j,{closeModal:e.closeModal},l.a.createElement("h1",{className:"title"},c?"Ubah ":"Tambah ","Pengguna"),l.a.createElement("form",{onSubmit:function(a){var t=c?T+c:T,n=c?"PUT":"POST",l={Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+u()},r=JSON.stringify({name:i,username:p,password:h,role:O,isObserver:M});x(!0),fetch(t,{method:n,headers:l,body:r}).then((function(){e.getUsers(),e.closeModal()})).catch((function(a){e.closeModal(),console.log(a)})),a.preventDefault()}},l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"Nama Pengguna/Instansi"),l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",type:"text",value:i,onChange:function(e){return o(e.target.value)}}))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"Username"),l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",type:"text",value:p,onChange:function(e){return b(e.target.value)}}))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"Password"),l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",type:"password",value:h,onChange:function(e){return N(e.target.value)}}))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"Role"),l.a.createElement("div",{className:"control"},l.a.createElement("div",{className:"select"},l.a.createElement("select",{value:O,onChange:function(e){return y(e.target.value)}},l.a.createElement("option",{value:"-"},"Non Admin"),l.a.createElement("option",{value:"super"},"Super User"),l.a.createElement("option",{value:"verif"},"Verified User"),l.a.createElement("option",{value:"bupati"},"Ajudan Bupati"),l.a.createElement("option",{value:"wakil"},"Ajudan Wakil Bupati"),l.a.createElement("option",{value:"sekda"},"Ajudan Sekretaris Daerah"),l.a.createElement("option",{value:"setda"},"Admin Sekretariat"),l.a.createElement("option",{value:"adipura"},"Admin Gedung Adipura"))))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("label",{className:"checkbox"},l.a.createElement("input",{type:"checkbox",checked:M,onChange:function(e){return Y(e.target.checked)}}),"\xa0Observer?"))),l.a.createElement("div",{className:"field is-grouped"},l.a.createElement("div",{className:"control"},l.a.createElement("button",{type:"submit",className:"button is-primary\n                ".concat(D?" is-loading":"","\n                ")},"Simpan")),c?l.a.createElement(B,{id:c,getUsers:e.getUsers,closeModal:e.closeModal}):null)))}function B(e){var a=Object(n.useState)(!1),t=Object(s.a)(a,2),c=t[0],r=t[1],m=Object(n.useState)(!1),i=Object(s.a)(m,2),o=i[0],d=i[1];return l.a.createElement("button",{type:"button",onClick:function(){if(!o)return d(!0);r(!0),fetch(T+e.id,{method:"DELETE",headers:{Authorization:"Bearer "+u()}}).then((function(){e.getUsers(),e.closeModal()})).catch((function(a){console.log(a),e.closeModal()}))},className:"button\n          ".concat(o?" is-danger":" is-warning","\n          ").concat(c?" is-loading":"","\n        ")},o?"Hapus Permanen!":"Hapus")}var J=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(""),m=Object(s.a)(r,2),i=m[0],u=m[1],d=Object(n.useState)(null),E=Object(s.a)(d,2),b=E[0],f=E[1],v=Object(n.useState)(!1),j=Object(s.a)(v,2),k=j[0],O=j[1],y=Object(n.useState)(!1),S=Object(s.a)(y,2),w=S[0],M=S[1],Y=p();function C(){O(!0),c([]),fetch(T).then((function(e){return e.json()})).then((function(e){return O(!1),c(e)})).catch((function(e){return console.log(e)}))}function A(e){return e.toLowerCase().indexOf(i.toLowerCase())>-1}return Object(n.useEffect)((function(){return C()}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(g,null,"Daftar Pengguna"),l.a.createElement("div",{className:"box"},"super"===Y?l.a.createElement(N,{title:"Pengguna",searchVal:i,setSearchVal:u,setIsModalVisible:M}):null,k?l.a.createElement(o,null):null,t.length?l.a.createElement(h,{headers:[{text:"Nama",isHiddenMobile:!0},{text:"Username"},{text:"Role"}]},t.map((function(e){var a=A(e.name)||A(e.username),t=e.role?e.role.name:null,n=!!e.role&&e.role.isObserver;return l.a.createElement("tr",{key:e._id,style:{cursor:"pointer"},className:a?"":"is-hidden",onClick:function(){"super"===Y&&(M(!0),f(e))}},l.a.createElement("td",{className:"is-hidden-mobile"},e.name),l.a.createElement("td",null,e.username),l.a.createElement("td",null,l.a.createElement("div",{className:"tags"},t?l.a.createElement("div",{className:"tag\n                          ".concat("-"===t?"is-hidden":"","\n                          ").concat("super"===t?" is-danger":"","\n                          ").concat("verif"===t?" is-primary":"","\n                          ").concat("bupati"===t?" is-link":"","\n                          ").concat("wakil"===t?" is-link":"","\n                          ").concat("sekda"===t?" is-link":"","\n                          ").concat("setda"===t?" is-info":"","\n                          ").concat("adipura"===t?" is-info":"","\n                        ")},t):null,n?l.a.createElement("div",{className:"tag is-warning"},"obs"):null)))}))):null,w?l.a.createElement(P,{user:b,getUsers:C,closeModal:function(){M(!1),f(null)}}):null))},I="https://jadwalsetda.herokuapp.com/api/events/";function L(e){var a=e.event?e.event._id:null,t=e.type||"invalid",c=d()||"no-id",r=e.event,m=Object(n.useState)(r?r.name:""),i=Object(s.a)(m,2),o=i[0],E=i[1],p=Object(n.useState)(r?r.place:""),b=Object(s.a)(p,2),f=b[0],v=b[1],h=Object(n.useState)(r?r.participant:0),N=Object(s.a)(h,2),g=N[0],k=N[1],O=Object(n.useState)(r?r.pic:""),y=Object(s.a)(O,2),w=y[0],M=y[1],Y=Object(n.useState)(r?r.notes:""),C=Object(s.a)(Y,2),A=C[0],D=C[1],x=Object(n.useState)(r?S()(r.dateTime).format("YYYY-MM-DD"):S()().format("YYYY-MM-DD")),H=Object(s.a)(x,2),T=H[0],P=H[1],B=Object(n.useState)(r?S()(r.dateTime).format("HH:mm"):"08:00"),J=Object(s.a)(B,2),L=J[0],F=J[1],R=Object(n.useState)(!1),_=Object(s.a)(R,2),K=_[0],z=_[1];return l.a.createElement(j,{closeModal:e.closeModal},l.a.createElement("h1",{className:"title"},a?"Ubah ":"Tambah ","Kegiatan"),l.a.createElement("form",{onSubmit:function(n){var l=a?I+a:I,r=a?"PUT":"POST",s={Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+u()},m=JSON.stringify({name:o,place:f,dateTime:S()("".concat(T," ").concat(L),"YYYY-MM-DD HH:mm").utc().format("YYYY-MM-DD HH:mm"),participant:g,pic:w,type:t,admin:c,notes:A});z(!0),fetch(l,{method:r,headers:s,body:m}).then((function(){e.notify("berhasil menyimpan kegiatan"),e.getEvents(),e.closeModal()})).catch((function(a){e.closeModal(),console.log(a)})),n.preventDefault()}},l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"Kegiatan/Acara"),l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",type:"text",value:o,onChange:function(e){return E(e.target.value)},required:!0}))),"adipura"===t?null:l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"Tempat/Lokasi"),l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",type:"text",value:f,onChange:function(e){return v(e.target.value)},list:"places"}),l.a.createElement("datalist",{id:"places"},e.places?e.places.map((function(e){return l.a.createElement("option",{key:e._id,value:e.name})})):null))),"setda"===t||"adipura"===t?l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"Unit Kerja"),l.a.createElement("div",{className:"field is-grouped"},l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",type:"text",value:w,onChange:function(e){return M(e.target.value)}})),"adipura"!==t?l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",type:"number",value:g,onChange:function(e){return k(e.target.value)}})):null)):null,l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"Waktu"),l.a.createElement("div",{className:"field is-grouped"},l.a.createElement("div",{className:"control has-icons-left"},l.a.createElement("input",{className:"input",type:"date",value:T,onChange:function(e){return P(e.target.value)},required:!0}),l.a.createElement("span",{className:"icon is-small is-left"},l.a.createElement("i",{className:"fas fa-calendar"}))),l.a.createElement("div",{className:"control has-icons-left"},l.a.createElement("input",{className:"input",type:"time",value:L,onChange:function(e){return F(e.target.value)},required:!0}),l.a.createElement("span",{className:"icon is-small is-left"},l.a.createElement("i",{className:"fas fa-clock"}))))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"Catatan"),l.a.createElement("div",{className:"control"},l.a.createElement("textarea",{className:"textarea",value:A,onChange:function(e){return D(e.target.value)}}))),l.a.createElement("div",{className:"field is-grouped"},l.a.createElement("div",{className:"control"},l.a.createElement("button",{type:"submit",className:"button is-primary\n                ".concat(K?" is-loading":"","\n                ")},"Simpan")),a?l.a.createElement("div",{className:"control"},l.a.createElement(U,{id:a,getEvents:e.getEvents,closeModal:e.closeModal,notify:e.notify})):null,l.a.createElement("div",{className:"control"},l.a.createElement("button",{type:"button",className:"button is-text",onClick:e.closeModal},"Batal")))))}function U(e){var a=Object(n.useState)(!1),t=Object(s.a)(a,2),c=t[0],r=t[1],m=Object(n.useState)(!1),i=Object(s.a)(m,2),o=i[0],d=i[1];return l.a.createElement("button",{type:"button",onClick:function(){if(!o)return d(!0);r(!0),fetch(I+e.id,{method:"DELETE",headers:{Authorization:"Bearer "+u()}}).then((function(){e.getEvents(),e.notify("Berhasil menghapus kegiatan"),e.closeModal()})).catch((function(a){console.log(a),e.closeModal()}))},className:"button\n          ".concat(o?"is-danger":" is-warning","\n          ").concat(c?" is-loading":"","\n        ")},o?"Hapus Permanen!":"Hapus")}var F=function(e){var a,t=Object(i.f)().type,c=p(),r=d(),m=Object(n.useState)([]),u=Object(s.a)(m,2),E=u[0],b=u[1],f=Object(n.useState)([]),v=Object(s.a)(f,2),h=v[0],N=v[1],j=Object(n.useState)(S()().local().month()+1),k=Object(s.a)(j,2),O=k[0],y=k[1],w=Object(n.useState)(S()().local().year()),M=Object(s.a)(w,2),Y=M[0],C=M[1],A=Object(n.useState)(""),D=Object(s.a)(A,2),x=D[0],H=D[1],T=Object(n.useState)(!1),P=Object(s.a)(T,2),B=P[0],J=P[1],U=Object(n.useState)(!1),F=Object(s.a)(U,2),R=F[0],_=F[1],K=Object(n.useState)(null),z=Object(s.a)(K,2),V=z[0],W=z[1];switch(t){case"setda":a="Gedung & Ruangan";break;case"adipura":a="Sasana Adipura Kencana";break;case"bupati":a="Bupati";break;case"wakil":a="Wakil Bupati";break;case"sekda":a="Sekretaris Daerah"}var G,q,$="https://jadwalsetda.herokuapp.com/print.html?";t&&($+="type=".concat(t)),O&&Y&&(G=S()("".concat(Y,")-").concat(O),"YYYY-MM").startOf("month").local().format("YYYY-MM-DD HH:mm"),q=S()("".concat(Y,")-").concat(O),"YYYY-MM").endOf("month").local().format("YYYY-MM-DD HH:mm"),$+="&from=".concat(G,"&to=").concat(q));var Q=function(e,a,t){return Array.from({length:(a-e)/t+1},(function(a,n){return e+n*t}))};function X(){var e,a;b([]),J(!0);var n=I+"?";t&&(n+="type=".concat(t)),O&&Y&&(e=S()("".concat(Y,")-").concat(O),"YYYY-MM").startOf("month").utc().format("YYYY-MM-DD HH:mm"),a=S()(e,"YYYY-MM-DD HH:mm").add(1,"months").endOf("month").utc().format("YYYY-MM-DD HH:mm"),n+="&from=".concat(e,"&to=").concat(a)),fetch(n).then((function(e){return e.json()})).then((function(e){J(!1),b(e)})).catch((function(e){console.log(e),J(!1)}))}function Z(e){return e.toLowerCase().indexOf(x.toLowerCase())>-1}return Object(n.useEffect)((function(){X(),fetch("https://jadwalsetda.herokuapp.com/api/places").then((function(e){return e.json()})).then((function(e){N(e)})).catch((function(e){console.log(e)}))}),[t,O,Y]),l.a.createElement(l.a.Fragment,null,l.a.createElement(g,null,"Jadwal\xa0",a||null),l.a.createElement("div",{className:"box"},l.a.createElement("div",{className:"level"},l.a.createElement("div",{className:"level-left"},l.a.createElement("div",{className:"level-item"},l.a.createElement("div",{className:"field has-addons"},l.a.createElement("div",{className:"control"},l.a.createElement("div",{className:"select"},l.a.createElement("select",{value:O,onChange:function(e){return y(parseInt(e.target.value))}},Q(1,12,1).map((function(e){return l.a.createElement("option",{key:e,value:e},S()(e,"M").format("MMMM"))}))))),l.a.createElement("div",{className:"control"},l.a.createElement("div",{className:"select"},l.a.createElement("select",{value:Y,onChange:function(e){return C(parseInt(e.target.value))}},Q(2018,S()().local().add(5,"years").year(),1).map((function(e){return l.a.createElement("option",{key:e,value:e},e)}))))))),l.a.createElement("div",{className:"level-item"},l.a.createElement("div",{className:"field has-addons"},l.a.createElement("div",{className:"control"},l.a.createElement("input",{type:"text",className:"input",placeholder:"ketik untuk mencari...",value:x,onChange:function(e){return H(e.target.value)}})),l.a.createElement("div",{className:"control"},l.a.createElement("button",{type:"button",className:"button".concat(x?" is-danger":""),onClick:function(){return H("")}},l.a.createElement("span",{className:"icon"},l.a.createElement("i",{className:"fas fa-backspace"})))))))," ",l.a.createElement("div",{className:"level-right"},"super"===c||c===t?l.a.createElement("div",{className:"level-item"},l.a.createElement("button",{className:"button is-link",onClick:function(){return _(!0)}},l.a.createElement("span",{className:"icon"},l.a.createElement("i",{className:"fas fa-plus"})),l.a.createElement("span",null,"Tambah Kegiatan"))):null,l.a.createElement("div",{className:"level-item"},l.a.createElement("a",{target:"_blank",className:"button is-primary",rel:"noopener noreferrer",href:$},l.a.createElement("span",{className:"icon"},l.a.createElement("i",{className:"fas fa-print"})),l.a.createElement("span",null,"Cetak"))))," "),B?l.a.createElement(o,null):null,E.length?l.a.createElement("table",{className:"table is-striped is-fullwidth is-hoverable"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Hari/Tgl"),l.a.createElement("th",{className:"is-hidden-mobile"},"Jam"),"adipura"!==t?l.a.createElement("th",{className:"is-hidden-mobile"},"Tempat"):null,l.a.createElement("th",null,"Kegiatan"),"setda"===t||"adipura"===t?l.a.createElement("th",{className:"is-hidden-mobile"},"Unit Kerja"):null,l.a.createElement("th",{className:"is-hidden-mobile"},"Catatan"))),l.a.createElement("tbody",null,E.map((function(e){var a=e.dateTime?S()(e.dateTime).local():null,n=Z(e.name)||Z(e.place)||Z(a.format("D"));return l.a.createElement("tr",{key:e._id,style:{cursor:"pointer"},className:n?null:"is-hidden",onClick:function(){"super"!==c&&c!==t||(_(!0),W(e))}},l.a.createElement("td",null,a.format("dddd"),l.a.createElement("br",null),a.format("D MMM"),l.a.createElement("br",null),a.format("YYYY"),l.a.createElement("span",{className:"is-mobile-only"},l.a.createElement("br",null),a.format("H:mm"))),l.a.createElement("td",{className:"is-hidden-mobile"},a.format("HH:mm")),"adipura"!==t?l.a.createElement("td",{className:"is-hidden-mobile"},e.place):null,l.a.createElement("td",null,l.a.createElement("span",{className:"has-text-weight-bold"},e.name),"adipura"!==t?l.a.createElement(l.a.Fragment,null,e.place?l.a.createElement("span",{className:"is-mobile-only"},l.a.createElement("br",null),l.a.createElement("i",{className:"fas fa-map-marker-alt",style:{marginRight:".5rem",fontSize:".75rem",color:"#276cda"}}),e.place):null,"strt"===r||"kahumum"===r||"kart"===r||"setda"===c?l.a.createElement(l.a.Fragment,null,e.notes?l.a.createElement("span",{className:"is-mobile-only"},l.a.createElement("br",null),l.a.createElement("i",{className:"fas fa-clipboard",style:{marginRight:".5rem",fontSize:".75rem",color:"#276cda"}}),e.notes):null):null):null),"setda"===t||"adipura"===t?l.a.createElement("td",{className:"is-hidden-mobile"},e.pic?"".concat(e.pic," "):"",e.participant?"(".concat(e.participant,")"):""):null,l.a.createElement("td",{className:"is-hidden-mobile"},e.notes))})))):null,R?l.a.createElement(L,{type:t,event:V,getEvents:X,closeModal:function(){W(null),_(!1)},notify:e.notify,places:h}):null))};var R=function(){var e=Object(n.useState)(E()||d()),a=Object(s.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(null),o=Object(s.a)(r,2),u=o[0],p=o[1];function b(e){p(e),setTimeout((function(){p(null)}),5e3)}return l.a.createElement(m.a,null,l.a.createElement(f,{name:t,setName:c,notify:b}),l.a.createElement("div",{className:"container"},u?l.a.createElement(k,{dismiss:function(){return p(null)}},u):null,l.a.createElement("div",{className:"columns"},l.a.createElement(v,null),l.a.createElement("div",{className:"column"},l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:w}),l.a.createElement(i.a,{path:"/places",component:H}),l.a.createElement(i.a,{path:"/about",component:M}),l.a.createElement(i.a,{path:"/events/:type",render:function(e){return l.a.createElement(F,Object.assign({},e,{notify:b}))}}),l.a.createElement(i.a,{path:"/login",render:function(e){return l.a.createElement(A,Object.assign({},e,{notify:b,setName:c}))}}),l.a.createElement(i.a,{path:"/users",component:J}),l.a.createElement(i.a,{component:Y})),l.a.createElement("article",{className:"message is-small is-warning"},l.a.createElement("div",{className:"message-body"},"Aplikasi dalam tahap uji coba. Laporkan ke developer jika terjadi masalah."))))),l.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(30),t(31),t(32);r.a.render(l.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.9647b10c.chunk.js.map