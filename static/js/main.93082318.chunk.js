(this.webpackJsonpfantomb=this.webpackJsonpfantomb||[]).push([[0],{122:function(e,t,n){"use strict";n.r(t);var r,c,a,u,i,o,s,b,j,O=n(0),l=n.n(O),d=n(61),f=n.n(d),p=n(3),g=n(8),v=n(140),h=n(62),x=n.n(h),m=n(22),w=n(9),k=n(2),y=w.a.div(r||(r=Object(g.a)(["\n  display: flex;\n  justify-content: center;\n"]))),R=Object(w.a)(x.a)(c||(c=Object(g.a)(["\n  pointer-events: none;\n"]))),C=function(e){var t=e.state$,n=e.setProgress,r=e.setDuration,c=Object(v.a)((function(){return t.pipe(Object(m.a)((function(e){return e.playerRef})))})),a=Object(p.a)(c,1)[0],u=Object(O.useCallback)((function(e){var t=e.played;return n(t)}),[n]),i=Object(v.a)((function(){return t.pipe(Object(m.a)((function(e){return e.url})))})),o=Object(p.a)(i,1)[0],s=Object(v.a)((function(){return t.pipe(Object(m.a)((function(e){return"playingVideo"===e.status})))})),b=Object(p.a)(s,1)[0];return Object(k.jsx)(y,{children:Object(k.jsx)(R,{ref:a,url:o,playing:b,controls:!1,onDuration:r,onProgress:u,volume:1,progressInterval:100})})},S=n(126),M=n(141),V=n(67),D=n(130),E=n(142),$=n(127),P=n(129),L=w.a.div(a||(a=Object(g.a)(["\n  margin: 1rem 0;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n"]))),T=w.a.input(u||(u=Object(g.a)(["\n  width: 20rem;\n  text-align: center;\n"]))),A=function(e){var t=e.onChange,n=Object(S.a)((function(e){return e.pipe(Object(m.a)((function(e){return e.currentTarget.value})))})),r=Object(p.a)(n,2),c=r[0],a=r[1],u=Object(S.a)((function(e){return e.pipe(Object($.a)((function(e){return"Enter"===e.key})),Object(m.a)((function(e){return e.currentTarget.value})))})),i=Object(p.a)(u,2),o=i[0],s=i[1],b=Object(M.a)((function(){return a.pipe(Object(P.a)((function(){return Object(D.a)(Object(E.a)(1e3),s)})))}));return Object(V.a)(b,t),Object(k.jsx)(L,{children:Object(k.jsx)(T,{name:"youtube",type:"text",autoComplete:"on",onChange:c,onKeyPress:o})})},U=n(139),z=n(132),B=n(143),F=n(133),H=n(134),X=n(138),q=n(135),I=n(131),W=function(e){return e.preventDefault(),e},_=function(e){return e.stopPropagation(),e},J=function(e){return function(t){if(!e.current)return 0;var n=t.clientX,r=e.current.getBoundingClientRect();return(n-r.left)/r.width}},Y=Object(I.a)(document,"mousemove"),K=(Object(I.a)(document,"mousedown"),Object(I.a)(document,"mouseup")),G=n(6),N=n(43),Q=function(e){var t=e.region$,n=e.containerRef,r=e.onRegion,c=e.key,a=Object(S.a)((function(e){return e.pipe(Object(m.a)(_))})),u=Object(p.a)(a,2),i=u[0],o=u[1],s=Object(M.a)((function(){return o.pipe(Object(m.a)(W),Object(F.a)((function(e){return Y.pipe(Object(m.a)((function(t){if(t.preventDefault(),!n.current)return 0;var r=n.current.getBoundingClientRect();return(t.clientX-e.clientX)/r.width})),Object(H.a)(K))})))})),b=Object(M.a)((function(){return s.pipe(Object(q.a)(t),Object(m.a)((function(e){var t=Object(p.a)(e,2),n=t[0],r=t[1];return r?Object(G.a)(Object(G.a)({},r),{},Object(N.a)({},c,r[c]+n)):r})))})),j=Object(M.a)((function(){return b.pipe(Object(F.a)((function(e){return K.pipe(Object(X.a)(1),Object(m.a)((function(){return e})))})))}));return Object(V.a)(j,r),{updatedRegion$:b,onMouseDown:i}},Z=w.a.rect(i||(i=Object(g.a)(["\n  height: 100%;\n  fill: rgba(0, 0, 0, 0.25);\n  stroke: rgba(0, 0, 0, 0.25);\n  cursor: all-scroll;\n"]))),ee=w.a.rect(o||(o=Object(g.a)(["\n  height: 100%;\n  width: 1px;\n  fill: rgba(0, 0, 0, 0.5);\n  cursor: col-resize;\n"]))),te=function(e){var t=e.region$,n=function(e){var t=e.region$,n=e.containerRef,r=e.onRegion,c=Object(S.a)((function(e){return e.pipe(Object(m.a)(_))})),a=Object(p.a)(c,2),u=a[0],i=a[1],o=Object(M.a)((function(){return i.pipe(Object(m.a)(W),Object(F.a)((function(e){return Y.pipe(Object(m.a)((function(t){if(t.preventDefault(),!n.current)return 0;var r=n.current.getBoundingClientRect();return(t.clientX-e.clientX)/r.width})),Object(H.a)(K))})))})),s=Object(M.a)((function(){return o.pipe(Object(q.a)(t),Object(m.a)((function(e){var t=Object(p.a)(e,2),n=t[0],r=t[1];return r?{end:r.end+n,start:r.start+n}:r})))})),b=Object(M.a)((function(){return s.pipe(Object(F.a)((function(e){return K.pipe(Object(X.a)(1),Object(m.a)((function(){return e})))})))}));return Object(V.a)(b,r),{updatedRegion$:s,onMouseDown:u}}(e),r=Q(Object(G.a)(Object(G.a)({},e),{},{key:"start"})),c=Q(Object(G.a)(Object(G.a)({},e),{},{key:"end"})),a=Object(v.a)((function(){return Object(U.a)(t,n.updatedRegion$,r.updatedRegion$,c.updatedRegion$)}),void 0),u=Object(p.a)(a,1)[0];return void 0===u?null:Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(Z,{onClick:function(e){return e.stopPropagation()},onMouseDown:n.onMouseDown,x:"".concat(100*u.start,"%"),width:"".concat(100*(u.end-u.start),"%")}),Object(k.jsx)(ee,{x:"".concat(100*u.start,"%"),onClick:function(e){return e.stopPropagation()},onMouseDown:r.onMouseDown}),Object(k.jsx)(ee,{x:"".concat(100*u.end,"%"),onClick:function(e){return e.stopPropagation()},onMouseDown:c.onMouseDown})]})},ne=n(137),re=n(52),ce=n.n(re);var ae=w.a.g(s||(s=Object(g.a)(["\n  transform: translateY(100%);\n"]))),ue=w.a.rect(b||(b=Object(g.a)(["\n  height: 100%;\n  width: 1px;\n  fill: rgba(0, 0, 0, 0.1);\n  transform: translateY(-100%);\n"]))),ie=w.a.text(j||(j=Object(g.a)(["\n  font-size: 0.33rem;\n  color: black;\n"])));function oe(e){var t=new Date(1970,0,1);return e&&t.setSeconds(e),t}var se,be,je,Oe=function(e){var t=e.duration$,n=function(){var e=Object(O.useState)([0,0]),t=Object(p.a)(e,2),n=t[0],r=t[1];return Object(O.useLayoutEffect)((function(){function e(){r([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n}(),r=Object(M.a)((function(){return t.pipe(Object(m.a)((function(e){if(e)return Object(ne.a)().domain([oe(0),oe(e)]).range([0,100])})))})),c=Object(v.a)((function(){return r.pipe(Object(m.a)((function(e){return e?e.ticks(10).map((function(e,t){var n,r=100*t/10,c=(n=e).getHours()>0?ce()(n,"HH:mm:ss"):ce()(n,"mm:ss");return Object(k.jsxs)("g",{children:[Object(k.jsx)(ue,{x:"".concat(r,"%")}),Object(k.jsx)(ie,{x:"".concat(r,"%"),y:"-2px",textAnchor:"middle",children:c})]},e.valueOf())})):null})))})),a=Object(p.a)(c,1)[0];return Object(k.jsx)(ae,{children:a},String(n))},le=w.a.rect(se||(se=Object(g.a)(["\n  width: 1px;\n  height: 100%;\n  fill: rgb(10, 10, 10);\n"]))),de=function(e){var t=e.progress$,n=Object(v.a)((function(){return t.pipe(Object(m.a)((function(e){return e?"".concat(100*e,"%"):"0px"})))}),"0px"),r=Object(p.a)(n,1)[0];return Object(k.jsx)(le,{x:r})},fe=w.a.svg(be||(be=Object(g.a)(["\n  width: 100%;\n  height: 2rem;\n  background-color: rgb(240, 240, 240);\n  cursor: ",";\n  /* pointer-events: ","; */\n"])),(function(e){return e.interactable?"pointer":"auto"}),(function(e){return e.interactable?"all":"none"})),pe=function(e){var t=e.state$,n=e.setRegion,r=e.setProgress,c=Object(O.useRef)(null);Object(O.useEffect)((function(){var e;return null===(e=c.current)||void 0===e?void 0:e.addEventListener("wheel",(function(e){return e.preventDefault()}))}),[c]);var a=Object(v.a)((function(){return t.pipe(Object(m.a)((function(e){return void 0!==e.url})))})),u=Object(p.a)(a,1)[0],i=Object(M.a)((function(){return t.pipe(Object(m.a)((function(e){return e.region})),Object(z.a)())})),o=Object(M.a)((function(){return t.pipe(Object(m.a)((function(e){return e.progress})))})),s=Object(M.a)((function(){return t.pipe(Object(m.a)((function(e){return e.duration})),Object(z.a)())})),b=Object(S.a)((function(e){return e.pipe(Object(m.a)(W))})),j=Object(p.a)(b,2),l=j[0],d=j[1],f=Object(S.a)((function(e){return e.pipe(Object(m.a)(W))})),g=Object(p.a)(f,2),h=g[0],x=g[1],w=Y.pipe(Object(m.a)(J(c)),Object($.a)((function(e){return void 0!==e}))),y=Object(S.a)((function(e){return e})),R=Object(p.a)(y,2),C=R[0],D=R[1].pipe(Object($.a)((function(e){return 0===e.button})),Object(m.a)(J(c))),P=d.pipe(Object($.a)((function(e){return 2===e.button})),Object(B.a)(500)),L=d.pipe(Object(F.a)((function(e){return Object(E.a)(100).pipe(Object(H.a)(x),Object(m.a)((function(){return J(c)(e)})))}))),T=P.pipe(Object(m.a)((function(){}))),A=Object(U.a)(L.pipe(Object(F.a)((function(e){return w.pipe(Object(m.a)((function(t){return e>t?{start:t,end:e}:{start:e,end:t}})),Object(H.a)(x))}))),T),I=L.pipe(Object(F.a)((function(){return x.pipe(Object(X.a)(1))})),Object(q.a)(A),Object(m.a)((function(e){var t=Object(p.a)(e,2);t[0];return t[1]})));Object(V.a)(D,r),Object(V.a)(I,n),Object(V.a)(T,n);var _=Object(M.a)((function(){return Object(U.a)(i,A)}));return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)(fe,{ref:c,onContextMenu:function(e){return e.preventDefault()},onClick:C,onMouseUp:h,onMouseDown:l,interactable:!!u,onWheel:function(e){console.warn("onWheel")},children:[Object(k.jsx)(de,{progress$:o}),Object(k.jsx)(te,{region$:_,containerRef:c,onRegion:n}),Object(k.jsx)(Oe,{duration$:s})]})})},ge=function(e){return{video:"playingVideo"===e?"Stop":"Play",recording:"recordingVoice"===e?"Stop recording":"Start recording",playback:"playingVoice"===e?"Stop voice":"Play Voice"}},ve=w.a.div(je||(je=Object(g.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin: 1rem 0;\n  & > * {\n    margin: 0 0.5rem;\n  }\n"]))),he=function(){},xe=function(e){var t=e.state$,n=e.setStatus,r=Object(M.a)((function(){return t.pipe(Object(m.a)((function(e){return e.status})),Object(z.a)())})),c=Object(v.a)((function(){return r.pipe(Object(m.a)(ge))})),a=Object(p.a)(c,1)[0],u=Object(v.a)((function(){return r.pipe(Object(m.a)((function(e){return"playingVideo"===e||"idle"===e})))})),i=Object(p.a)(u,1)[0],o=Object(v.a)((function(){return r.pipe(Object(m.a)((function(e){return"recordingVoice"===e||"idle"===e})))})),s=Object(p.a)(o,1)[0],b=Object(v.a)((function(){return r.pipe(Object(m.a)((function(e){return"playingVoice"===e||"idle"===e})))})),j=Object(p.a)(b,1)[0],O=Object(S.a)((function(e){return e.pipe(Object(q.a)(t))})),l=Object(p.a)(O,2),d=l[0],f=l[1];Object(V.a)(f,(function(e){var t=Object(p.a)(e,2);t[0];switch(t[1].status){case"playingVideo":n("idle");break;case"idle":n("playingVideo")}}));var g=Object(S.a)((function(e){return e.pipe(Object(q.a)(t))})),h=Object(p.a)(g,2),x=h[0],w=h[1];Object(V.a)(w,(function(e){var t=Object(p.a)(e,2);t[0];switch(t[1].status){case"recordingVoice":n("idle");break;case"idle":n("attemptingRecord")}}));var y=Object(S.a)((function(e){return e.pipe(Object(q.a)(t))})),R=Object(p.a)(y,2),C=R[0],D=R[1];return Object(V.a)(D,(function(e){var t=Object(p.a)(e,2);t[0];switch(t[1].status){case"playingVoice":n("idle");break;case"idle":n("playingVoice")}})),Object(k.jsxs)(ve,{children:[Object(k.jsx)("button",{disabled:!i,onClick:i?d:he,children:null===a||void 0===a?void 0:a.video}),Object(k.jsx)("button",{disabled:!s,onClick:s?x:he,children:null===a||void 0===a?void 0:a.recording}),Object(k.jsx)("button",{disabled:!j,onClick:j?C:he,children:null===a||void 0===a?void 0:a.playback})]})},me=n(136),we=n(25),ke=n.n(we),ye=n(53),Re=function(){};var Ce=function(e){var t=e.state$,n=e.setStatus,r=Object(O.useRef)(null),c=Object(M.a)((function(){return t.pipe(Object(z.a)((function(e,t){return e.status===t.status})),Object(m.a)((function(e){return e.status})),Object(me.a)())})),a=Object(O.useState)(void 0),u=Object(p.a)(a,2),i=u[0],o=u[1],s=function(e){var t=e.blobOptions,n=void 0===t?{}:t,r=e.onStop,c=void 0===r?Re:r,a=e.onStart,u=void 0===a?Re:a,i=e.onError,o=void 0===i?Re:i,s=e.onDataAvailable,b=void 0===s?Re:s,j=l.a.useRef([]),d=l.a.useRef(null),f=l.a.useRef(null),g=l.a.useState(null),v=Object(p.a)(g,2),h=v[0],x=v[1],m=l.a.useState("idle"),w=Object(p.a)(m,2),k=w[0],y=w[1],R=l.a.useState(null),C=Object(p.a)(R,2),S=C[0],M=C[1],V=l.a.useState(!1),D=Object(p.a)(V,2),E=D[0],$=D[1],P=Object(O.useCallback)(Object(ye.a)(ke.a.mark((function e(){var t;return ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h&&x(null),y("acquiring_media"),e.prev=2,e.next=5,window.navigator.mediaDevices.getUserMedia({audio:!0});case 5:(t=e.sent).getAudioTracks().forEach((function(e){return t.addTrack(e)})),d.current=t,y("ready"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),x(e.t0),y("failed");case 15:case"end":return e.stop()}}),e,null,[[2,11]])}))),[d,y,x,h]),L=Object(O.useCallback)((function(){d.current&&(d.current.getTracks().forEach((function(e){return e.stop()})),d.current=null)}),[d]),T=Object(O.useCallback)((function(e){e.data.size&&j.current.push(e.data),b(e.data)}),[b,j]),A=Object(O.useCallback)((function(){var e=Object(p.a)(j.current,1)[0],t=e?e.type:"audio/webm",r=Object.assign({type:t},n),a=new Blob(j.current,r);M(a),y("stopped"),c(a)}),[j,n,M,y,c]),U=Object(O.useCallback)((function(e){x(e.error),y("idle"),o(e.error)}),[x,y,o]),z=Object(O.useCallback)(Object(ye.a)(ke.a.mark((function e(){return ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h&&x(null),d.current||"acquiring_media"===k){e.next=4;break}return e.next=4,P();case 4:j.current=[],d.current&&(f.current=new MediaRecorder(d.current,{mimeType:"audio/webm"}),f.current.addEventListener("dataavailable",T),f.current.addEventListener("stop",A),f.current.addEventListener("error",U),f.current.start(50),y("recording"),u());case 6:case"end":return e.stop()}}),e)}))),[f,d,j,h,k,u,x,y,P,T,U,A]),B=Object(O.useCallback)((function(e){$(e),d.current&&d.current.getAudioTracks().forEach((function(t){t.enabled=!e}))}),[$,d]),F=Object(O.useCallback)((function(){f.current&&"recording"===f.current.state&&f.current.pause()}),[f]),H=Object(O.useCallback)((function(){f.current&&"paused"===f.current.state&&f.current.resume()}),[f]),X=Object(O.useCallback)((function(){if(f.current){y("stopping");try{f.current.stop()}catch(e){console.warn("Stoping idle media recorder!")}f.current.removeEventListener("dataavailable",T),f.current.removeEventListener("stop",A),f.current.removeEventListener("error",U),L()}}),[f,L,T,U,A,y]);return l.a.useEffect((function(){if(!window.MediaRecorder)throw new ReferenceError("MediaRecorder is not supported in this browser. Please ensure that you are running the latest version of chrome/firefox/edge.")}),[]),{error:h,status:k,mediaBlob:S,isAudioMuted:E,stopRecording:X,getMediaStream:P,startRecording:z,pauseRecording:F,resumeRecording:H,clearMediaStream:L,muteAudio:function(){return B(!0)},unMuteAudio:function(){return B(!1)},get liveStream(){return d.current?new MediaStream(d.current.getVideoTracks()):null}}}({onStop:Object(O.useCallback)((function(e){if(r.current){var t=URL.createObjectURL(e);r.current.src=t,o(t),n("idle")}}),[n,o,r]),onStart:Object(O.useCallback)((function(){return n("recordingVoice")}),[n]),onError:Object(O.useCallback)((function(){return n("idle")}),[n])}),b=s.startRecording,j=s.stopRecording;Object(V.a)(c,(function(e){var t=Object(p.a)(e,2),n=t[0];switch(t[1]){case"attemptingRecord":b(),URL.revokeObjectURL(i||""),o(void 0);break;case"playingVoice":r.current&&r.current.src&&r.current.play();break;case"idle":"playingVoice"===n?r.current&&(r.current.pause(),r.current.currentTime=0):"recordingVoice"===n&&j()}}));var d=Object(O.useCallback)((function(){r.current&&(r.current.pause(),r.current.currentTime=0,n("idle"))}),[r,n]);return Object(k.jsx)("audio",{ref:r,onEnded:d})},Se=n(128),Me={status:"idle",url:void 0,duration:0,progress:0,region:void 0,playerRef:Object(O.createRef)()};var Ve=function(){var e=function(){var e=Object(O.useMemo)((function(){return new Se.a(Me)}),[]),t=Object(O.useCallback)((function(t){var n,r=e.getValue();r.region&&(null===(n=r.playerRef.current)||void 0===n||n.seekTo(r.region.start)),e.next(Object(G.a)(Object(G.a)({},r),{},{status:t}))}),[e]),n=Object(O.useCallback)((function(t){return e.next(Object(G.a)(Object(G.a)({},e.getValue()),{},{url:t}))}),[e]),r=Object(O.useCallback)((function(t){var n,r=e.getValue();if(r.region&&t>=r.region.end)return null===(n=r.playerRef.current)||void 0===n||n.seekTo(r.region.start),void e.next(Object(G.a)(Object(G.a)({},r),{},{progress:r.region.start,status:"idle"}));e.next(Object(G.a)(Object(G.a)({},r),{},{progress:t}))}),[e]),c=Object(O.useCallback)((function(t){var n,r=e.getValue();null===(n=r.playerRef.current)||void 0===n||n.seekTo(t),e.next(Object(G.a)(Object(G.a)({},r),{},{status:"idle",progress:t}))}),[e]),a=Object(O.useCallback)((function(t){return e.next(Object(G.a)(Object(G.a)({},e.getValue()),{},{duration:t}))}),[e]),u=Object(O.useCallback)((function(t){return e.next(Object(G.a)(Object(G.a)({},e.getValue()),{},{region:t}))}),[e]);return{state$:e,setStatus:t,setUrl:n,setProgress:r,setManualProgress:c,setDuration:a,setRegion:u}}(),t=e.state$,n=e.setUrl,r=e.setStatus,c=e.setDuration,a=e.setProgress,u=e.setManualProgress,i=e.setRegion;return Object(k.jsxs)("div",{children:[Object(k.jsx)("p",{children:"https://www.youtube.com/watch?v=EqE_AH39144"}),Object(k.jsx)("p",{children:"https://www.youtube.com/watch?v=sS55zq6Hz8A"}),Object(k.jsx)(A,{onChange:n}),Object(k.jsx)(pe,{state$:t,setRegion:i,setProgress:u}),Object(k.jsx)(xe,{state$:t,setStatus:r}),Object(k.jsx)(C,{state$:t,setDuration:c,setProgress:a}),Object(k.jsx)(Ce,{state$:t,setStatus:r})]})},De=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,144)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,u=t.getTTFB;n(e),r(e),c(e),a(e),u(e)}))};f.a.render(Object(k.jsx)(l.a.StrictMode,{children:Object(k.jsx)(Ve,{})}),document.getElementById("root")),De()}},[[122,1,2]]]);
//# sourceMappingURL=main.93082318.chunk.js.map