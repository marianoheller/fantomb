(this.webpackJsonpfantomb=this.webpackJsonpfantomb||[]).push([[0],{122:function(e,t,n){"use strict";n.r(t);var r,c,a,u,o,i,b,s,j,O=n(0),l=n.n(O),f=n(63),p=n.n(f),d=n(68),g=n(2),v=n(7),h=n(8),m=n(139),x=n(64),k=n.n(x),y=n(25),$=n(3),w=h.a.div(r||(r=Object(v.a)(["\n  display: flex;\n  justify-content: center;\n"]))),R=Object(h.a)(k.a)(c||(c=Object(v.a)(["\n  pointer-events: none;\n"]))),C=function(e){var t=e.url$,n=e.status$,r=e.playerRef$,c=e.setProgress,a=e.setDuration,u=Object(m.a)((function(){return r})),o=Object(g.a)(u,1)[0],i=Object(m.a)((function(){return t})),b=Object(g.a)(i,1)[0],s=Object(m.a)((function(){return n.pipe(Object(y.a)((function(e){return"playingVideo"===e})))})),j=Object(g.a)(s,1)[0],l=Object(O.useCallback)((function(e){var t=e.played;return c(t)}),[c]);return Object($.jsx)(w,{children:Object($.jsx)(R,{ref:o,url:b,playing:j,controls:!1,onProgress:l,onDuration:a,volume:1,progressInterval:100},b)})},M=n(123),S=n(140),V=n(70),D=n(127),P=n(141),E=n(124),T=n(126),L=h.a.div(a||(a=Object(v.a)(["\n  margin: 1rem 0;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n"]))),z=h.a.input(u||(u=Object(v.a)(["\n  width: 20rem;\n  text-align: center;\n"]))),A=function(e){var t=e.onChange,n=Object(M.a)((function(e){return e.pipe(Object(y.a)((function(e){return e.currentTarget.value})))})),r=Object(g.a)(n,2),c=r[0],a=r[1],u=Object(M.a)((function(e){return e.pipe(Object(E.a)((function(e){return"Enter"===e.key})),Object(y.a)((function(e){return e.currentTarget.value})))})),o=Object(g.a)(u,2),i=o[0],b=o[1],s=Object(S.a)((function(){return a.pipe(Object(T.a)((function(){return Object(D.a)(Object(P.a)(1e3),b)})))}));return Object(V.a)(s,t),Object($.jsx)(L,{children:Object($.jsx)(z,{name:"youtube",type:"text",autoComplete:"on",onChange:c,onKeyPress:i})})},U=n(130),B=n(143),X=n(142),F=n(132),q=n(133),H=n(138),I=n(134),W=n(128),Y=n(129),J=function(e){return e.preventDefault(),e},Z=function(e){return e.stopPropagation(),e},_=function(e){return function(t){if(!e.current)return 0;var n=t.clientX,r=e.current.getBoundingClientRect();return(n-r.left)/r.width}},K=Object(W.a)(document,"mousemove"),G=(Object(W.a)(document,"mousedown"),Object(W.a)(document,"mouseup")),N=n(131),Q=function(e){var t=e.deltaX,n=e.deltaY,r=[Math.sign(t),Math.sign(n)].filter(Math.abs).reduce((function(e,t){return e*t}),1);return Math.sqrt(Math.pow(t,2)+Math.pow(n,2))*r*-1},ee=n(6),te=n(45),ne=function(e){var t=e.region$,n=e.containerRef,r=e.onRegion,c=e.key,a=Object(M.a)((function(e){return e.pipe(Object(y.a)(Z))})),u=Object(g.a)(a,2),o=u[0],i=u[1],b=Object(S.a)((function(){return i.pipe(Object(y.a)(J),Object(F.a)((function(e){return K.pipe(Object(y.a)((function(t){if(t.preventDefault(),!n.current)return 0;var r=n.current.getBoundingClientRect();return(t.clientX-e.clientX)/r.width})),Object(q.a)(G))})))})),s=Object(S.a)((function(){return b.pipe(Object(I.a)(t),Object(y.a)((function(e){var t=Object(g.a)(e,2),n=t[0],r=t[1];return r?Object(ee.a)(Object(ee.a)({},r),{},Object(te.a)({},c,r[c]+n)):r})))})),j=Object(S.a)((function(){return s.pipe(Object(F.a)((function(e){return G.pipe(Object(H.a)(1),Object(y.a)((function(){return e})))})))}));return Object(V.a)(j,r),{updatedRegion$:s,onMouseDown:o}},re=h.a.rect(o||(o=Object(v.a)(["\n  height: 100%;\n  fill: rgba(0, 0, 0, 0.25);\n  stroke: rgba(0, 0, 0, 0.25);\n  cursor: all-scroll;\n"]))),ce=h.a.rect(i||(i=Object(v.a)(["\n  height: 100%;\n  width: 2px;\n  fill: rgb(220, 10, 10);\n  cursor: col-resize;\n"]))),ae=function(e){var t=e.region$,n=function(e){var t=e.region$,n=e.containerRef,r=e.onRegion,c=Object(M.a)((function(e){return e.pipe(Object(y.a)(Z))})),a=Object(g.a)(c,2),u=a[0],o=a[1],i=Object(S.a)((function(){return o.pipe(Object(y.a)(J),Object(F.a)((function(e){return K.pipe(Object(y.a)((function(t){if(t.preventDefault(),!n.current)return 0;var r=n.current.getBoundingClientRect();return(t.clientX-e.clientX)/r.width})),Object(q.a)(G))})))})),b=Object(S.a)((function(){return i.pipe(Object(I.a)(t),Object(y.a)((function(e){var t=Object(g.a)(e,2),n=t[0],r=t[1];return r?{end:r.end+n,start:r.start+n}:r})))})),s=Object(S.a)((function(){return b.pipe(Object(F.a)((function(e){return G.pipe(Object(H.a)(1),Object(y.a)((function(){return e})))})))}));return Object(V.a)(s,r),{updatedRegion$:b,onMouseDown:u}}(e),r=ne(Object(ee.a)(Object(ee.a)({},e),{},{key:"start"})),c=ne(Object(ee.a)(Object(ee.a)({},e),{},{key:"end"})),a=Object(m.a)((function(){return Object(U.a)(t,n.updatedRegion$,r.updatedRegion$,c.updatedRegion$)}),void 0),u=Object(g.a)(a,1)[0];return void 0===u?null:Object($.jsxs)($.Fragment,{children:[Object($.jsx)(re,{onClick:function(e){return e.stopPropagation()},onMouseDown:n.onMouseDown,x:"".concat(100*u.start,"%"),width:"".concat(100*(u.end-u.start),"%")}),Object($.jsx)(ce,{x:"".concat(100*u.start,"%"),onClick:function(e){return e.stopPropagation()},onMouseDown:r.onMouseDown}),Object($.jsx)(ce,{x:"".concat(100*u.end,"%"),onClick:function(e){return e.stopPropagation()},onMouseDown:c.onMouseDown})]})},ue=n(49),oe=n(54),ie=n.n(oe),be=n(135),se=n(137),je=h.a.g(b||(b=Object(v.a)(["\n  transform: translateY(100%);\n"]))),Oe=h.a.rect(s||(s=Object(v.a)(["\n  height: 100%;\n  width: 1px;\n  fill: rgba(0, 0, 0, 0.1);\n  transform: translateY(-100%);\n"]))),le=h.a.text(j||(j=Object(v.a)(["\n  font-size: 0.5rem;\n  color: black;\n"])));var fe,pe,de,ge,ve,he=[1,2,5,10,15,20,30,40].concat(Object(ue.a)(Object(ue.a)(Array(20).keys()).map((function(e){return 60*e})))),me=function(e){var t=e.duration$,n=e.zoom$,r=Object(S.a)((function(){return n.pipe(Object(se.a)(1),Object(y.a)((function(e){return Math.round(20*e)})),Object(Y.a)())})),c=Object(S.a)((function(){return Object(be.a)([t,r]).pipe(Object(y.a)((function(e){var t=Object(g.a)(e,2),n=t[0],r=n/t[1],c=he.find((function(e){return e>=r}))||3840;return Math.floor(n/c)})),Object(Y.a)())})),a=Object(m.a)((function(){return Object(be.a)([t,c]).pipe(Object(y.a)((function(e){var t=Object(g.a)(e,2),n=t[0],r=t[1];return n?Object(ue.a)(Array(r).keys()).map((function(e){var t,c=100*e/r,a=function(e){var t=new Date(1970,0,1);return e&&t.setSeconds(e),t}(e*n/r),u=(t=a).getHours()>0?ie()(t,"HH:mm:ss"):ie()(t,"mm:ss");return Object($.jsxs)("g",{children:[Object($.jsx)(Oe,{x:"".concat(c,"%")}),Object($.jsx)(le,{x:"".concat(c,"%"),y:"-2px",textAnchor:"middle",children:u})]},a.valueOf())})):null})))})),u=Object(g.a)(a,1)[0];return Object($.jsx)(je,{children:u})},xe=h.a.rect(fe||(fe=Object(v.a)(["\n  width: 1px;\n  height: 100%;\n  fill: rgb(10, 10, 10);\n  transition: ",";\n"])),(function(e){return e.playing?"x 50ms ease-in-out":"none"})),ke=function(e){return e?"".concat(100*e,"%"):"0px"},ye=function(e){var t=e.progress$,n=e.status$,r=Object(m.a)((function(){return n.pipe(Object(y.a)((function(e){return"playingVideo"===e})))}),!1),c=Object(g.a)(r,1)[0],a=Object(m.a)((function(){return t.pipe(Object(y.a)(ke))}),"0px"),u=Object(g.a)(a,1)[0];return Object($.jsx)(xe,{x:u,playing:c})},$e=h.a.div(pe||(pe=Object(v.a)(["\n  width: 100%;\n  overflow: hidden;\n  overflow-x: auto;\n"]))),we=h.a.svg(de||(de=Object(v.a)([""]))),Re=Object(h.a)(we).attrs((function(e){return{style:{width:"".concat(100*e.zoom,"%")}}}))(ge||(ge=Object(v.a)(["\n  height: 4rem;\n  background-color: rgb(240, 240, 240);\n  cursor: ",";\n  pointer-events: ",";\n"])),(function(e){return e.interactable?"pointer":"auto"}),(function(e){return e.interactable?"all":"none"})),Ce=function(e){var t=e.url$,n=e.status$,r=e.region$,c=e.progress$,a=e.duration$,u=e.setRegion,o=e.setProgress,i=Object(O.useRef)(null),b=function(e){Object(O.useEffect)((function(){var t;return null===(t=e.current)||void 0===t?void 0:t.addEventListener("wheel",(function(e){return e.preventDefault()}))}),[e]);var t=Object(M.a)((function(e){return e})),n=Object(g.a)(t,2),r=n[0],c=n[1],a=Object(M.a)((function(e){return e.pipe(Object(y.a)((function(){return 1})))})),u=Object(g.a)(a,2),o=u[0],i=u[1];return{zoom$:Object(S.a)((function(){return Object(U.a)(i,c.pipe(Object(X.a)(20),Object(y.a)(Q),Object(N.a)((function(e,t){var n=e.exp+.01*t;return{zoom:Math.max(1,Math.pow(1.02,n)),exp:Math.max(1,n)}}),{zoom:1,exp:1}),Object(y.a)((function(e){return e.zoom})),Object(Y.a)()))})),onWheel:r,resetZoom:o}}(i),s=b.onWheel,j=b.resetZoom,l=b.zoom$,f=Object(m.a)((function(){return l}),100),p=Object(g.a)(f,1)[0],d=Object(m.a)((function(){return t.pipe(Object(B.a)((function(){return j()})),Object(y.a)((function(e){return void 0!==e})))}),!1),v=Object(g.a)(d,1)[0],h=Object(M.a)((function(e){return e.pipe(Object(y.a)(J))})),x=Object(g.a)(h,2),k=x[0],w=x[1],R=Object(M.a)((function(e){return e.pipe(Object(y.a)(J))})),C=Object(g.a)(R,2),D=C[0],T=C[1],L=K.pipe(Object(y.a)(_(i)),Object(E.a)((function(e){return void 0!==e}))),z=Object(M.a)((function(e){return e})),A=Object(g.a)(z,2),W=A[0],Z=A[1].pipe(Object(E.a)((function(e){return 0===e.button})),Object(y.a)(_(i))),G=w.pipe(Object(E.a)((function(e){return 2===e.button})),Object(X.a)(500)),ee=w.pipe(Object(F.a)((function(e){return Object(P.a)(100).pipe(Object(q.a)(T),Object(y.a)((function(){return _(i)(e)})))}))),te=G.pipe(Object(y.a)((function(){}))),ne=Object(U.a)(ee.pipe(Object(F.a)((function(e){return L.pipe(Object(y.a)((function(t){return e>t?{start:t,end:e}:{start:e,end:t}})),Object(q.a)(T))}))),te),re=ee.pipe(Object(F.a)((function(){return T.pipe(Object(H.a)(1))})),Object(I.a)(ne),Object(y.a)((function(e){var t=Object(g.a)(e,2);t[0];return t[1]})));Object(V.a)(Z,o),Object(V.a)(re,u),Object(V.a)(te,u);var ce=Object(S.a)((function(){return Object(U.a)(r,ne)}));return Object($.jsx)($e,{children:Object($.jsxs)(Re,{ref:i,onContextMenu:function(e){return e.preventDefault()},onClick:W,onMouseUp:D,onMouseDown:k,onWheel:s,zoom:p,interactable:v,children:[Object($.jsx)(ye,{progress$:c,status$:n}),Object($.jsx)(ae,{region$:ce,containerRef:i,onRegion:u}),Object($.jsx)(me,{duration$:a,zoom$:l})]})})},Me=function(e){return{video:"playingVideo"===e?"Stop":"Play",recording:"recordingVoice"===e?"Stop recording":"Start recording",playback:"playingVoice"===e?"Stop voice":"Play Voice"}},Se=h.a.div(ve||(ve=Object(v.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin: 1rem 0;\n  & > * {\n    margin: 0 0.5rem;\n  }\n"]))),Ve=function(){},De=function(e){var t=e.status$,n=e.setStatus,r=Object(m.a)((function(){return t.pipe(Object(y.a)(Me))})),c=Object(g.a)(r,1)[0],a=Object(m.a)((function(){return t.pipe(Object(y.a)((function(e){return"playingVideo"===e||"idle"===e})))})),u=Object(g.a)(a,1)[0],o=Object(m.a)((function(){return t.pipe(Object(y.a)((function(e){return"recordingVoice"===e||"idle"===e})))})),i=Object(g.a)(o,1)[0],b=Object(m.a)((function(){return t.pipe(Object(y.a)((function(e){return"playingVoice"===e||"idle"===e})))})),s=Object(g.a)(b,1)[0],j=Object(M.a)((function(e){return e.pipe(Object(I.a)(t))})),O=Object(g.a)(j,2),l=O[0],f=O[1];Object(V.a)(f,(function(e){var t=Object(g.a)(e,2);t[0];switch(t[1]){case"playingVideo":n("idle");break;case"idle":n("playingVideo")}}));var p=Object(M.a)((function(e){return e.pipe(Object(I.a)(t))})),d=Object(g.a)(p,2),v=d[0],h=d[1];Object(V.a)(h,(function(e){var t=Object(g.a)(e,2);t[0];switch(t[1]){case"recordingVoice":n("idle");break;case"idle":n("attemptingRecord")}}));var x=Object(M.a)((function(e){return e.pipe(Object(I.a)(t))})),k=Object(g.a)(x,2),w=k[0],R=k[1];return Object(V.a)(R,(function(e){var t=Object(g.a)(e,2);t[0];switch(t[1]){case"playingVoice":n("idle");break;case"idle":n("playingVoice")}})),Object($.jsxs)(Se,{children:[Object($.jsx)("button",{disabled:!u,onClick:u?l:Ve,children:null===c||void 0===c?void 0:c.video}),Object($.jsx)("button",{disabled:!i,onClick:i?v:Ve,children:null===c||void 0===c?void 0:c.recording}),Object($.jsx)("button",{disabled:!s,onClick:s?w:Ve,children:null===c||void 0===c?void 0:c.playback})]})},Pe=n(136),Ee=n(37),Te=n.n(Ee),Le=n(55),ze=function(){};var Ae=function(e){var t=e.status$,n=e.setStatus,r=Object(O.useRef)(null),c=Object(S.a)((function(){return t.pipe(Object(Pe.a)())})),a=Object(O.useState)(void 0),u=Object(g.a)(a,2),o=u[0],i=u[1],b=function(e){var t=e.blobOptions,n=void 0===t?{}:t,r=e.onStop,c=void 0===r?ze:r,a=e.onStart,u=void 0===a?ze:a,o=e.onError,i=void 0===o?ze:o,b=e.onDataAvailable,s=void 0===b?ze:b,j=l.a.useRef([]),f=l.a.useRef(null),p=l.a.useRef(null),d=l.a.useState(null),v=Object(g.a)(d,2),h=v[0],m=v[1],x=l.a.useState("idle"),k=Object(g.a)(x,2),y=k[0],$=k[1],w=l.a.useState(null),R=Object(g.a)(w,2),C=R[0],M=R[1],S=l.a.useState(!1),V=Object(g.a)(S,2),D=V[0],P=V[1],E=Object(O.useCallback)(Object(Le.a)(Te.a.mark((function e(){var t;return Te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h&&m(null),$("acquiring_media"),e.prev=2,e.next=5,window.navigator.mediaDevices.getUserMedia({audio:!0});case 5:(t=e.sent).getAudioTracks().forEach((function(e){return t.addTrack(e)})),f.current=t,$("ready"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),m(e.t0),$("failed");case 15:case"end":return e.stop()}}),e,null,[[2,11]])}))),[f,$,m,h]),T=Object(O.useCallback)((function(){f.current&&(f.current.getTracks().forEach((function(e){return e.stop()})),f.current=null)}),[f]),L=Object(O.useCallback)((function(e){e.data.size&&j.current.push(e.data),s(e.data)}),[s,j]),z=Object(O.useCallback)((function(){var e=Object(g.a)(j.current,1)[0],t=e?e.type:"audio/webm",r=Object.assign({type:t},n),a=new Blob(j.current,r);M(a),$("stopped"),c(a)}),[j,n,M,$,c]),A=Object(O.useCallback)((function(e){m(e.error),$("idle"),i(e.error)}),[m,$,i]),U=Object(O.useCallback)(Object(Le.a)(Te.a.mark((function e(){return Te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h&&m(null),f.current||"acquiring_media"===y){e.next=4;break}return e.next=4,E();case 4:j.current=[],f.current&&(p.current=new MediaRecorder(f.current,{mimeType:"audio/webm"}),p.current.addEventListener("dataavailable",L),p.current.addEventListener("stop",z),p.current.addEventListener("error",A),p.current.start(50),$("recording"),u());case 6:case"end":return e.stop()}}),e)}))),[p,f,j,h,y,u,m,$,E,L,A,z]),B=Object(O.useCallback)((function(e){P(e),f.current&&f.current.getAudioTracks().forEach((function(t){t.enabled=!e}))}),[P,f]),X=Object(O.useCallback)((function(){p.current&&"recording"===p.current.state&&p.current.pause()}),[p]),F=Object(O.useCallback)((function(){p.current&&"paused"===p.current.state&&p.current.resume()}),[p]),q=Object(O.useCallback)((function(){if(p.current){$("stopping");try{p.current.stop()}catch(e){console.warn("Stoping idle media recorder!")}p.current.removeEventListener("dataavailable",L),p.current.removeEventListener("stop",z),p.current.removeEventListener("error",A),T()}}),[p,T,L,A,z,$]);return l.a.useEffect((function(){if(!window.MediaRecorder)throw new ReferenceError("MediaRecorder is not supported in this browser. Please ensure that you are running the latest version of chrome/firefox/edge.")}),[]),{error:h,status:y,mediaBlob:C,isAudioMuted:D,stopRecording:q,getMediaStream:E,startRecording:U,pauseRecording:X,resumeRecording:F,clearMediaStream:T,muteAudio:function(){return B(!0)},unMuteAudio:function(){return B(!1)},get liveStream(){return f.current?new MediaStream(f.current.getVideoTracks()):null}}}({onStop:Object(O.useCallback)((function(e){if(r.current){var t=URL.createObjectURL(e);r.current.src=t,i(t),n("idle")}}),[n,i,r]),onStart:Object(O.useCallback)((function(){return n("recordingVoice")}),[n]),onError:Object(O.useCallback)((function(){return n("idle")}),[n])}),s=b.startRecording,j=b.stopRecording;Object(V.a)(c,(function(e){var t=Object(g.a)(e,2),n=t[0];switch(t[1]){case"attemptingRecord":s(),URL.revokeObjectURL(o||""),i(void 0);break;case"playingVoice":r.current&&r.current.src&&r.current.play();break;case"idle":"playingVoice"===n?r.current&&(r.current.pause(),r.current.currentTime=0):"recordingVoice"===n&&j()}}));var f=Object(O.useCallback)((function(){r.current&&(r.current.pause(),r.current.currentTime=0,n("idle"))}),[r,n]);return Object($.jsx)("audio",{ref:r,onEnded:f})},Ue=n(125),Be={status:"idle",url:void 0,duration:0,progress:0,region:void 0,playerRef:Object(O.createRef)()};var Xe=function(){var e=function(){var e=Object(O.useMemo)((function(){return new Ue.a(Be)}),[]),t=Object(O.useCallback)((function(t){var n,r=e.getValue();r.region&&(null===(n=r.playerRef.current)||void 0===n||n.seekTo(r.region.start)),e.next(Object(ee.a)(Object(ee.a)({},r),{},{status:t}))}),[e]),n=Object(O.useCallback)((function(t){return e.next(Object(ee.a)(Object(ee.a)({},e.getValue()),{},{url:t}))}),[e]),r=Object(O.useCallback)((function(t){var n,r=e.getValue();if(r.region&&t>=r.region.end)return null===(n=r.playerRef.current)||void 0===n||n.seekTo(r.region.start),void e.next(Object(ee.a)(Object(ee.a)({},r),{},{progress:r.region.start,status:"idle"}));e.next(Object(ee.a)(Object(ee.a)({},r),{},{progress:t}))}),[e]),c=Object(O.useCallback)((function(t){var n,r=e.getValue();null===(n=r.playerRef.current)||void 0===n||n.seekTo(t),e.next(Object(ee.a)(Object(ee.a)({},r),{},{status:"idle",progress:t}))}),[e]),a=Object(O.useCallback)((function(t){return e.next(Object(ee.a)(Object(ee.a)({},e.getValue()),{},{duration:t}))}),[e]),u=Object(O.useCallback)((function(t){return e.next(Object(ee.a)(Object(ee.a)({},e.getValue()),{},{region:t}))}),[e]);return{state$:e,setStatus:t,setUrl:n,setProgress:r,setManualProgress:c,setDuration:a,setRegion:u}}(),t=e.state$,n=Object(d.a)(e,["state$"]),r=function(e){return{status$:Object(S.a)((function(){return e.pipe(Object(y.a)((function(e){return e.status})),Object(Y.a)())})),url$:Object(S.a)((function(){return e.pipe(Object(y.a)((function(e){return e.url})),Object(Y.a)())})),duration$:Object(S.a)((function(){return e.pipe(Object(y.a)((function(e){return e.duration})),Object(Y.a)())})),progress$:Object(S.a)((function(){return e.pipe(Object(y.a)((function(e){return e.progress})),Object(Y.a)())})),region$:Object(S.a)((function(){return e.pipe(Object(y.a)((function(e){return e.region})),Object(Y.a)())})),playerRef$:Object(S.a)((function(){return e.pipe(Object(y.a)((function(e){return e.playerRef})),Object(Y.a)())}))}}(t),c=r.url$,a=r.status$,u=r.region$,o=r.duration$,i=r.progress$,b=r.playerRef$;return Object($.jsxs)("div",{children:[Object($.jsx)(A,{onChange:n.setUrl}),Object($.jsx)(Ce,{url$:c,status$:a,region$:u,duration$:o,progress$:i,setRegion:n.setRegion,setProgress:n.setManualProgress}),Object($.jsx)(De,{status$:a,setStatus:n.setStatus}),Object($.jsx)(C,{url$:c,playerRef$:b,status$:a,setDuration:n.setDuration,setProgress:n.setProgress}),Object($.jsx)(Ae,{status$:a,setStatus:n.setStatus})]})},Fe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,144)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,u=t.getTTFB;n(e),r(e),c(e),a(e),u(e)}))};p.a.render(Object($.jsx)(l.a.StrictMode,{children:Object($.jsx)(Xe,{})}),document.getElementById("root")),Fe()}},[[122,1,2]]]);
//# sourceMappingURL=main.b535ffce.chunk.js.map