(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(e){e.exports=JSON.parse('{"levels":[{"marker":{"address":"Dexter Lawn","pos":{"lat":35.300547,"lng":-120.663688}},"messages":["dexter-1","dexter-2"]},{"marker":{"address":"Baker","pos":{"lat":35.301116,"lng":-120.660121}},"messages":["baker-1"]}]}')},52:function(e,t,n){e.exports={"map-container":"Map_map-container__2ZC0h","map-div":"Map_map-div__2IdK6","info-box":"Map_info-box__28Iw8",overlay:"Map_overlay__pXAeS",modal:"Map_modal__2EFkX","close-btn":"Map_close-btn__3PU26"}},61:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(14),o=n.n(a),c=n(21),l=(n(52),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAA+VBMVEVHcEz50WVJZ65JZ65HZq6cmI9JZ696hJ1JaLBJZ65JZ6750mb71mT712NJZ65JZ65JZ6750mb50mb50mb602ZJZ65JZ65JZ65KaLBJZ65JZ65IZ6750mb50mb50mb50mZNbbRJZ6750mb50mb50mb50mbawHL50ma6q4D50mZVeb350mb50mabmYz50mb702V3g5tJZ6750mZRdLpJZq5KaK9Ver5ObrT61WfSPTNYfcFVeb3WSjbytVzvp1bkhEvea0NXb6j3y2Ppl1FcY59VZqajTF5FaLLHQD3gdEZ6WIKuSFOTUWzJe1v0vl+rcmxNZqsA0DpHcEwM4ksFAAAAU3RSTlMA/kPjKwIhBly57AkQFueo025J9NiBcPny2hQZMrCk0IoeIJ3oW/fI+r75uIpRl9B6////////////////////////////////////////////AOLyVYEAAAFTSURBVDjLzdRZc4IwEABgQSkooFwe9a5H1d67iEKLR72PXv//1zTgTPuCiTPtg/uQycM3m91kJ7HYGYWQkKSrU1wuDaDxbMingIRWYsJs4CDP/x/kC+HR7HbEbB4gLTFdop4kKdPJXJFxhxo4YZFOhirFDPxEjgZLl+CEGcmaESjwIu4MhgG0bUiKdPgcwL49OBW+nC0sar+Qej2CFCfQIfCGMbviRd0Be9gvSMzJlQAGdj+ViJ0tFNSnA7xXaExtV62uE8DX68cHQz6Wzehw6HbhAF00K+Vo2DYRufFnCJfvI0S0IqVaQ3Tn/v5rvViuFxt/5CI2o56x0SI5Jt7mbbdf7VaeNybwNmowxCqBH1PfC8OfzEghemSNjQqHOBtPttPpdj4ie/PuSN+K3jHRdZHjgrVVMY5PpGLo1V7Nsmq9pl6W6U8jyIqqKvJJf/PfvvZvlPFDcH9CqxsAAAAASUVORK5CYII="),i=n(41),r=n(18);const d=Object(i.create)(((e,t)=>({mapPos:{lat:35.30489293472487,lng:-120.66246462042335},setMapPosition:t=>{e({mapPos:t}),console.log("updating map pos")},currentLevelIndex:0,currentLevelMessages:r.levels[0].messages,updateGameState:()=>{if(0!==t().messageCount)return;console.log("incrementing game level");t().currentLevelIndex},setCurrentLevelIndex:t=>{e({currentLevelIndex:t,currentLevelMessages:r.levels[t].messages,messageCount:Object.keys(r.levels[t].messages).length})},isMapEnabled:!1,setIsMapEnabled:t=>{e({isMapEnabled:t})},isScannerEnabled:!1,setIsScannerEnabled:t=>{e({isScannerEnabled:t})},messageCount:Object.keys(r.levels[0].messages).length,scannedMessages:[],addScannedMessage:n=>{const s=t().scannedMessages;s.includes(n)||(s.push(n),e({scannedMessages:s}))}})));var b=n(83),m=n(84),g=n(81);const u=6371e3;function p(e){return e*Math.PI/180}function h(e,t,n){const s=function(e,t){const{lat:n,lng:s}=e,{lat:a,lng:o}=t,c=p(a-n),l=p(o-s),i=Math.sin(c/2)*Math.sin(c/2)+Math.cos(p(n))*Math.cos(p(a))*Math.sin(l/2)*Math.sin(l/2),r=2*Math.atan2(Math.sqrt(i),Math.sqrt(1-i));return u*r}(e,t);return s<=n}var A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAABF1BMVEVHcExDIWtBIGlTYqFEImusL3ZAIGlFImxoJm9EIWtCIGlMQIRntudLImxrxPNQO39CIWtAH2n3On9GJm7zOX5CIWs/IGqGKnJBIWpKOX5EIWtpu+xCIGnoN31DHmhGLHNINHpCHmhBH2lkqt1fl81NSYzGM3nYNXtVJG1CH2lCHmjtOH5ZfLdin9RDIWuTpc1msuTfNnxIMHZBHmlbJ29qY5u34PipyedZebVOUZNwa6E+IWphJm5NImuDi7mcs9deToxYQYN9gLCgutykwuHONHp3daiu0u6LlsFsOoD6On9ty/n9On//O4C86v+/7f9syfdchr+mL3Z7KXFVaadRWpq/MnibLXRyKHC0MHdYdLCXLXRekMeQv4K2AAAASXRSTlMAF6b+Bv6P0/0LS/3+6f79vGH+3/4edf4x+8n+r/496/SeWf79/f7+8iOF/v39Evz+/v1r/vz+/f78/Jj8/vz9/P38/f3+/P380Eo8MAAAAexJREFUOMvtlNeSokAUhiXZKEkxMKComMeIjnly3K1ukDauyrz/cyw6d46we721p6rDxVfnnP77rxMK/dtBd4jOX2CpmywAmhGN/IGLAvbXtrpX6mQqmBNc3bJtG9Z2MSKoLnBlWFu6e93qseEAMM025WU9Rmrsu10Vrny5SGxpb4UiHSLCrJ7cpX3Ba+FdXp0qEmBvu6QveFXvJdni6Uq6NhOjA0D5q+CxiaU/mEpUbQYc3xCv1yzl1v/zsi5sKiAdvxUYqLNxf3nidzpsMitWqcrWNhHwNwRgIIRyUoYwuQoS3FNch6ewtgF6H1Nqyy+wuWsEmoIID2onkBECjNYpGqDQV5IeVxuoea2RuygkXdTUddks9/feS5QpX1ps8uSFPiPhwoRHfKvSv+tZzL1KtbFY2iSK38AG10aozD09PA5X1cFDdyatM0hs5XPnxkl8IsxzLyPHGT/fz0bO/PV5grFIGWdgrmAi1JbGznw+7w5/eLvzscEYLbTIecYywpnKcDx3PNZbo660QBhT56akG1wJodJUmv18fHt77b48qS0R4UU++k1EQ1143ZepCidJEjdtmQiX1vkLDorcAO7Qzogib5q8d5ifVCGW8xsSCbVCrQ+Tw3pTKYCAcUFfR9NhI5sljUY8R4T+x29PhFFgfz06oAAAAABJRU5ErkJggg==",v=n(2);const x={width:"100%",height:"100%"},I={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4,width:"60vw"},j=(e,t)=>({x:-e/2,y:-t/2});function M(){const{isLoaded:e}=Object(c.d)({id:"google-map-script",googleMapsApiKey:"AIzaSyDKqJC4dkD_xkdDVOpI38m3nJr3uuRXq7Q"}),[t,n]=Object(s.useState)(!1),a=d((e=>e.mapPos)),o=d((e=>e.setMapPosition)),i=d((e=>e.currentLevelIndex)),u=d((e=>e.isMapEnabled)),p=d((e=>e.setIsMapEnabled)),M=d((e=>e.setIsScannerEnabled)),[f,O]=Object(s.useState)(r.levels[0]),[E,S]=Object(s.useState)(!1);return Object(s.useEffect)((()=>{O(r.levels[i])}),[i]),Object(s.useEffect)((()=>{navigator.geolocation.watchPosition((async e=>{const t={lat:e.coords.latitude,lng:e.coords.longitude};console.log(t),o(t),n(!0),h(t,f.marker.pos,20)&&S(!0)}),null,{enableHighAccuracy:!0})})),u&&t?e?Object(v.jsx)("div",{style:{height:"100vh",width:"100vw"},children:Object(v.jsxs)(c.a,{mapContainerStyle:x,center:a,zoom:15,options:{disableDefaultUI:!0,mapId:"c2191a630a735aa3"},children:[Object(v.jsx)(c.b,{position:f.marker.pos,icon:{url:A,labelOrigin:new google.maps.Point(10,-10)},label:{text:f.marker.address,color:"white"},onClick:()=>{console.log("clicked")}}),Object(v.jsx)(c.b,{position:a,icon:{url:l}}),E&&Object(v.jsx)(c.c,{mapPaneName:c.c.OVERLAY_MOUSE_TARGET,position:a,getPixelPositionOffset:j,children:Object(v.jsxs)(b.a,{sx:I,children:[Object(v.jsx)(m.a,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Welcome to Architecture Graveyard"}),Object(v.jsx)(m.a,{id:"modal-modal-description",sx:{mt:2,mb:2},children:"I've hidden three QR codes throughout the area. Search high, low, and every where in between to unlcok your next location"}),Object(v.jsx)(g.a,{variant:"outlined",onClick:()=>{p(!1),M(!0)},children:"Start Scanning"})]})})]})}):Object(v.jsx)("h1",{children:"Loading..."}):null}n(61);var f=n(43);function O(e){const[t,n]=Object(s.useState)("No result"),a=d((e=>e.currentLevelMessages)),o=d((e=>e.addScannedMessage)),c=d((e=>e.updateGameState)),l=d((e=>e.isScannerEnabled)),i=d((e=>e.messageCount));return l?Object(v.jsxs)("div",{style:{width:"100vw",height:"100vh"},children:[Object(v.jsx)(f.a,{onResult:(e,t)=>{console.log("messages",a),e&&(null!==e&&void 0!==e&&e.text&&(a.contains(e.text)||(o(e.text),c(),console.log("updating messages"))),console.log(a)),t&&console.info(t)},constraints:{facingMode:"environment"},onScan:()=>{console.log("scan")},onError:()=>{console.log("err")}}),Object(v.jsxs)(b.a,{sx:{width:"100vw",height:"20vh",color:"white"},children:["Reamining object count: ",i]})]}):null}var E=function(){d((e=>e.isMapEnabled));const e=d((e=>e.setIsMapEnabled));return Object(s.useEffect)((()=>{e(!0)}),[]),Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(O,{}),Object(v.jsx)(M,{})]})};var S=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,85)).then((t=>{let{getCLS:n,getFID:s,getFCP:a,getLCP:o,getTTFB:c}=t;n(e),s(e),a(e),o(e),c(e)}))};n(63);const C=document.getElementById("root");o.a.render(Object(v.jsx)(E,{}),C);S()}},[[64,1,2]]]);
//# sourceMappingURL=main.b5cf3454.chunk.js.map