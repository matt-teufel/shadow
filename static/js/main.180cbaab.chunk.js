(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(e){e.exports=JSON.parse('{"levels":[{"marker":{"address":"Dexter Lawn","pos":{"lat":35.300547,"lng":-120.663688}},"messages":["dexter-1","dexter-2"],"modalTitle":"Welcome to Dexter Lawn","modalDescription":"I have hidden two QR codes somewhere. Search high, low, and everywhere in between to unlock your next location!"},{"marker":{"address":"Baker","pos":{"lat":35.301116,"lng":-120.660121}},"messages":["baker-1"],"modalTitle":"Welcome to Baker","modalDescription":"I have hidden another QR code somewhere. Try to find it!"}]}')},53:function(e,t,n){e.exports={"map-container":"Map_map-container__2ZC0h","map-div":"Map_map-div__2IdK6","info-box":"Map_info-box__28Iw8",overlay:"Map_overlay__pXAeS",modal:"Map_modal__2EFkX","close-btn":"Map_close-btn__3PU26"}},62:function(e,t,n){},63:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),o=n(14),i=n.n(o),l=n(21),c=(n(53),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAA+VBMVEVHcEz50WVJZ65JZ65HZq6cmI9JZ696hJ1JaLBJZ65JZ6750mb71mT712NJZ65JZ65JZ6750mb50mb50mb602ZJZ65JZ65JZ65KaLBJZ65JZ65IZ6750mb50mb50mb50mZNbbRJZ6750mb50mb50mb50mbawHL50ma6q4D50mZVeb350mb50mabmYz50mb702V3g5tJZ6750mZRdLpJZq5KaK9Ver5ObrT61WfSPTNYfcFVeb3WSjbytVzvp1bkhEvea0NXb6j3y2Ppl1FcY59VZqajTF5FaLLHQD3gdEZ6WIKuSFOTUWzJe1v0vl+rcmxNZqsA0DpHcEwM4ksFAAAAU3RSTlMA/kPjKwIhBly57AkQFueo025J9NiBcPny2hQZMrCk0IoeIJ3oW/fI+r75uIpRl9B6////////////////////////////////////////////AOLyVYEAAAFTSURBVDjLzdRZc4IwEABgQSkooFwe9a5H1d67iEKLR72PXv//1zTgTPuCiTPtg/uQycM3m91kJ7HYGYWQkKSrU1wuDaDxbMingIRWYsJs4CDP/x/kC+HR7HbEbB4gLTFdop4kKdPJXJFxhxo4YZFOhirFDPxEjgZLl+CEGcmaESjwIu4MhgG0bUiKdPgcwL49OBW+nC0sar+Qej2CFCfQIfCGMbviRd0Be9gvSMzJlQAGdj+ViJ0tFNSnA7xXaExtV62uE8DX68cHQz6Wzehw6HbhAF00K+Vo2DYRufFnCJfvI0S0IqVaQ3Tn/v5rvViuFxt/5CI2o56x0SI5Jt7mbbdf7VaeNybwNmowxCqBH1PfC8OfzEghemSNjQqHOBtPttPpdj4ie/PuSN+K3jHRdZHjgrVVMY5PpGLo1V7Nsmq9pl6W6U8jyIqqKvJJf/PfvvZvlPFDcH9CqxsAAAAASUVORK5CYII="),r=n(41),d=n(18);const m=Object(r.create)(((e,t)=>({mapPos:{lat:35.30489293472487,lng:-120.66246462042335},setMapPosition:t=>{e({mapPos:t}),console.log("updating map pos")},currentLevelIndex:0,currentLevelMessages:d.levels[0].messages,remainingMessageCount:d.levels[0].messages.length,updateGameState:()=>{if(t().currentLevelMessages.length!==t().scannedMessages.length)return;console.log("incrementing game level");const n=t().currentLevelIndex+1;t().setCurrentLevelIndex(n),e({isMapEnabled:!0,isScannerEnabled:!1})},setCurrentLevelIndex:t=>{e({currentLevelIndex:t,currentLevelMessages:d.levels[t].messages,scannedMessages:[],remainingMessageCount:d.levels[t].messages.length})},isMapEnabled:!1,setIsMapEnabled:t=>{e({isMapEnabled:t})},isScannerEnabled:!1,setIsScannerEnabled:t=>{e({isScannerEnabled:t})},scannedMessages:[],addScannedMessage:n=>{const s=t().scannedMessages;s.push(n);const a=t().remainingMessageCount-1;e({scannedMessages:s,remainingMessageCount:a})}})));var h=n(85),g=n(86),u=n(83);const b=6371e3;function p(e){return e*Math.PI/180}function x(e,t,n){const s=function(e,t){const{lat:n,lng:s}=e,{lat:a,lng:o}=t,i=p(a-n),l=p(o-s),c=Math.sin(i/2)*Math.sin(i/2)+Math.cos(p(n))*Math.cos(p(a))*Math.sin(l/2)*Math.sin(l/2),r=2*Math.atan2(Math.sqrt(c),Math.sqrt(1-c));return b*r}(e,t);return s<=n}var A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAABF1BMVEVHcExDIWtBIGlTYqFEImusL3ZAIGlFImxoJm9EIWtCIGlMQIRntudLImxrxPNQO39CIWtAH2n3On9GJm7zOX5CIWs/IGqGKnJBIWpKOX5EIWtpu+xCIGnoN31DHmhGLHNINHpCHmhBH2lkqt1fl81NSYzGM3nYNXtVJG1CH2lCHmjtOH5ZfLdin9RDIWuTpc1msuTfNnxIMHZBHmlbJ29qY5u34PipyedZebVOUZNwa6E+IWphJm5NImuDi7mcs9deToxYQYN9gLCgutykwuHONHp3daiu0u6LlsFsOoD6On9ty/n9On//O4C86v+/7f9syfdchr+mL3Z7KXFVaadRWpq/MnibLXRyKHC0MHdYdLCXLXRekMeQv4K2AAAASXRSTlMAF6b+Bv6P0/0LS/3+6f79vGH+3/4edf4x+8n+r/496/SeWf79/f7+8iOF/v39Evz+/v1r/vz+/f78/Jj8/vz9/P38/f3+/P380Eo8MAAAAexJREFUOMvtlNeSokAUhiXZKEkxMKComMeIjnly3K1ukDauyrz/cyw6d46we721p6rDxVfnnP77rxMK/dtBd4jOX2CpmywAmhGN/IGLAvbXtrpX6mQqmBNc3bJtG9Z2MSKoLnBlWFu6e93qseEAMM025WU9Rmrsu10Vrny5SGxpb4UiHSLCrJ7cpX3Ba+FdXp0qEmBvu6QveFXvJdni6Uq6NhOjA0D5q+CxiaU/mEpUbQYc3xCv1yzl1v/zsi5sKiAdvxUYqLNxf3nidzpsMitWqcrWNhHwNwRgIIRyUoYwuQoS3FNch6ewtgF6H1Nqyy+wuWsEmoIID2onkBECjNYpGqDQV5IeVxuoea2RuygkXdTUddks9/feS5QpX1ps8uSFPiPhwoRHfKvSv+tZzL1KtbFY2iSK38AG10aozD09PA5X1cFDdyatM0hs5XPnxkl8IsxzLyPHGT/fz0bO/PV5grFIGWdgrmAi1JbGznw+7w5/eLvzscEYLbTIecYywpnKcDx3PNZbo660QBhT56akG1wJodJUmv18fHt77b48qS0R4UU++k1EQ1143ZepCidJEjdtmQiX1vkLDorcAO7Qzogib5q8d5ifVCGW8xsSCbVCrQ+Tw3pTKYCAcUFfR9NhI5sljUY8R4T+x29PhFFgfz06oAAAAABJRU5ErkJggg==",v=n(2);const j={width:"100%",height:"100%"},M={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4,width:"60vw"},I=(e,t)=>({x:-e/2,y:-t/2});function f(){const{isLoaded:e}=Object(l.d)({id:"google-map-script",googleMapsApiKey:"AIzaSyDKqJC4dkD_xkdDVOpI38m3nJr3uuRXq7Q"}),[t,n]=Object(s.useState)(!1),a=m((e=>e.mapPos)),o=m((e=>e.setMapPosition)),i=m((e=>e.currentLevelIndex)),r=m((e=>e.isMapEnabled)),b=m((e=>e.setIsMapEnabled)),p=m((e=>e.setIsScannerEnabled)),[f,O]=Object(s.useState)(d.levels[0]),[E,w]=Object(s.useState)(!1);return Object(s.useEffect)((()=>{O(d.levels[i])}),[i]),Object(s.useEffect)((()=>{const e=navigator.geolocation.watchPosition((async e=>{const t={lat:e.coords.latitude,lng:e.coords.longitude};console.log(t),t.lat===a.lat&&t.lng===a.lng||(o(t),n(!0),x(t,f.marker.pos,20)&&w(!0))}),null,{enableHighAccuracy:!0,maximumAge:5e3});return()=>{navigator.geolocation.clearWatch(e)}})),r&&t?e?Object(v.jsx)("div",{style:{height:"100vh",width:"100vw"},children:Object(v.jsxs)(l.a,{mapContainerStyle:j,center:a,zoom:15,options:{disableDefaultUI:!0,mapId:"c2191a630a735aa3"},children:[Object(v.jsx)(l.b,{position:f.marker.pos,icon:{url:A,labelOrigin:new google.maps.Point(10,-10)},label:{text:f.marker.address,color:"white"},onClick:()=>{console.log("clicked")}}),Object(v.jsx)(l.b,{position:a,icon:{url:c}}),E&&Object(v.jsx)(l.c,{mapPaneName:l.c.OVERLAY_MOUSE_TARGET,position:a,getPixelPositionOffset:I,children:Object(v.jsxs)(h.a,{sx:M,children:[Object(v.jsx)(g.a,{id:"modal-modal-title",variant:"h6",component:"h2",children:f.modalTitle}),Object(v.jsx)(g.a,{id:"modal-modal-description",sx:{mt:2,mb:2},children:f.modalDescription}),Object(v.jsx)(u.a,{variant:"outlined",onClick:()=>{b(!1),p(!0),w(!1)},children:"Start Scanning"})]})})]})}):Object(v.jsx)("h1",{children:"Loading..."}):null}n(62),n(63),n(43);var O=()=>{const e=m((e=>e.setIsMapEnabled)),[t,n]=a.a.useState(!1);return Object(s.useEffect)((()=>{var e=function(e,t,n){this.toRotate=t,this.el=e,this.loopNum=0,this.period=n,this.txt="",this.tick(),this.isDeleting=!1};e.prototype.tick=function(){var e=this.loopNum%this.toRotate.length,t=this.toRotate[e];this.isDeleting?this.txt=t.substring(0,this.txt.length-1):this.txt=t.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var s=this,a=125;this.isDeleting&&(a/=2),this.isDeleting||this.txt!==t?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,a=500):(a=this.period,this.isDeleting=!0,this.loopNum===this.toRotate.length-1&&(n(!0),setTimeout((()=>{}),6e3))),3===this.loopNum&&this.txt===t||setTimeout((function(){s.tick()}),a)},window.onload=function(){for(var t=document.getElementsByClassName("txt-rotate"),n=0;n<t.length;n++){var s=t[n].getAttribute("data-rotate"),a=t[n].getAttribute("data-period");s&&new e(t[n],JSON.parse(s),a)}var o=document.createElement("style");o.type="text/css",o.innerHTML=".txt-rotate > .wrap { border-right: 0.08em solid #666 }",document.body.appendChild(o)}}),[]),Object(v.jsxs)("div",{className:"welcome-container",children:[Object(v.jsx)("h1",{children:Object(v.jsx)("span",{class:"txt-rotate","data-period":"1000","data-rotate":'["Welcome to shadow casters", "This game will take you on a journey around San Luis Obispo", "I hope you enjoy!"]'})}),t&&Object(v.jsx)("button",{onClick:()=>e(!0),className:"button-39",children:"Begin Your Adventure"})]})},E=n(44);function w(e){const[t,n]=Object(s.useState)("No result"),a=m((e=>e.currentLevelMessages)),o=m((e=>e.addScannedMessage)),i=m((e=>e.updateGameState)),l=m((e=>e.isScannerEnabled)),c=m((e=>e.remainingMessageCount)),r=m((e=>e.scannedMessages));return l?Object(v.jsxs)("div",{style:{width:"100vw",height:"100vh"},children:[Object(v.jsx)(E.a,{onResult:(e,t)=>{console.log("scanned messages",r),e&&null!==e&&void 0!==e&&e.text&&(console.log("result: ",e.text),a.includes(e.text)&&!r.includes(e.text)&&(o(e.text),i())),t&&console.info(t)},constraints:{facingMode:"environment"},onScan:()=>{console.log("scan")},onError:()=>{console.log("err")}}),Object(v.jsxs)(h.a,{sx:{width:"100vw",height:"20vh",color:"white",bgcolor:"#121212"},children:["Reamining object count: ",c]})]}):null}var S=function(){const e=m((e=>e.isMapEnabled)),t=(m((e=>e.setIsMapEnabled)),m((e=>e.isScannerEnabled)));return Object(v.jsxs)("div",{className:"App",children:[!e&&!t&&Object(v.jsx)("div",{id:"welcome-message",children:Object(v.jsx)(O,{})}),Object(v.jsx)(w,{}),Object(v.jsx)(f,{})]})};var C=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,87)).then((t=>{let{getCLS:n,getFID:s,getFCP:a,getLCP:o,getTTFB:i}=t;n(e),s(e),a(e),o(e),i(e)}))};n(65);const J=document.getElementById("root");i.a.render(Object(v.jsx)(S,{}),J);C()}},[[66,1,2]]]);
//# sourceMappingURL=main.180cbaab.chunk.js.map