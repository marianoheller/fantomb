(this.webpackJsonpfantomb=this.webpackJsonpfantomb||[]).push([[0],{122:function(e,t,n){"use strict";n.r(t);var r,c,a,o,i,u,b=n(0),j=n.n(b),s=n(61),d=n.n(s),O=n(3),p=n(11),f=n(139),l=n(62),g=n.n(l),v=n(12),h=n(2),y=Object(v.a)(g.a)(r||(r=Object(p.a)(["\n  pointer-events: none;\n"]))),w=j.a.forwardRef((function(e,t){var n=e.url$,r=e.playing,c=e.onDuration,a=e.onProgress,o=Object(b.useCallback)((function(e){var t=e.played;return a(t)}),[a]),i=Object(f.a)(n);return Object(h.jsx)(y,{ref:t,url:i,playing:r,controls:!1,onDuration:c,onProgress:o,volume:1,progressInterval:100})})),m=n(126),R=n(67),x=n(129),k=n(140),P=n(20),S=n(127),V=n(128),M=function(e){var t=e.onChange,n=Object(m.a)((function(e){return e.pipe(Object(P.a)((function(e){return e.currentTarget.value})))})),r=Object(O.a)(n,2),c=r[0],a=r[1],o=Object(m.a)((function(e){return e.pipe(Object(S.a)((function(e){return"Enter"===e.key})),Object(P.a)((function(e){return e.currentTarget.value})))})),i=Object(O.a)(o,2),u=i[0],b=i[1],j=a.pipe(Object(V.a)((function(){return Object(x.a)(Object(k.a)(1e3),b)})));return Object(R.a)(j,t),Object(h.jsx)("input",{name:"youtube url",onChange:c,onKeyPress:u})},C=n(138),E=n(136),D=n(141),$=n(132),L=n(133),T=n(137),A=n(134),z=n(130),B=(n(131),function(e){return e.preventDefault(),e}),H=function(e){return e.stopPropagation(),e},F=function(e){return function(t){if(!e.current)return 0;var n=t.clientX,r=e.current.getBoundingClientRect();return(n-r.left)/r.width}},U=Object(z.a)(document,"mousemove"),I=(Object(z.a)(document,"mousedown"),Object(z.a)(document,"mouseup")),X=n(23),q=n(43),W=function(e){var t=e.region$,n=e.containerRef,r=e.onRegion,c=e.key,a=Object(m.a)((function(e){return e.pipe(Object(P.a)(H))})),o=Object(O.a)(a,2),i=o[0],u=o[1],b=Object(E.a)((function(){return u.pipe(Object(P.a)(B),Object($.a)((function(e){return U.pipe(Object(P.a)((function(t){if(t.preventDefault(),!n.current)return 0;var r=n.current.getBoundingClientRect();return(t.clientX-e.clientX)/r.width})),Object(L.a)(I))})))})),j=Object(E.a)((function(){return b.pipe(Object(A.a)(t),Object(P.a)((function(e){var t=Object(O.a)(e,2),n=t[0],r=t[1];return r?Object(X.a)(Object(X.a)({},r),{},Object(q.a)({},c,r[c]+n)):r})))})),s=Object(E.a)((function(){return j.pipe(Object($.a)((function(e){return I.pipe(Object(T.a)(1),Object(P.a)((function(){return e})))})))}));return Object(R.a)(s,r),{updatedRegion$:j,onMouseDown:i}},_=v.a.rect(c||(c=Object(p.a)(["\n  height: 100%;\n  fill: rgba(0, 0, 0, 0.25);\n  stroke: rgba(0, 0, 0, 0.25);\n  cursor: all-scroll;\n"]))),J=v.a.rect(a||(a=Object(p.a)(["\n  height: 100%;\n  width: 1px;\n  fill: rgba(0, 0, 0, 0.5);\n  cursor: col-resize;\n"]))),K=function(e){var t=e.region$,n=function(e){var t=e.region$,n=e.containerRef,r=e.onRegion,c=Object(m.a)((function(e){return e.pipe(Object(P.a)(H))})),a=Object(O.a)(c,2),o=a[0],i=a[1],u=Object(E.a)((function(){return i.pipe(Object(P.a)(B),Object($.a)((function(e){return U.pipe(Object(P.a)((function(t){if(t.preventDefault(),!n.current)return 0;var r=n.current.getBoundingClientRect();return(t.clientX-e.clientX)/r.width})),Object(L.a)(I))})))})),b=Object(E.a)((function(){return u.pipe(Object(A.a)(t),Object(P.a)((function(e){var t=Object(O.a)(e,2),n=t[0],r=t[1];return r?{end:r.end+n,start:r.start+n}:r})))})),j=Object(E.a)((function(){return b.pipe(Object($.a)((function(e){return I.pipe(Object(T.a)(1),Object(P.a)((function(){return e})))})))}));return Object(R.a)(j,r),{updatedRegion$:b,onMouseDown:o}}(e),r=W(Object(X.a)(Object(X.a)({},e),{},{key:"start"})),c=W(Object(X.a)(Object(X.a)({},e),{},{key:"end"})),a=Object(f.a)((function(){return Object(C.a)(t,n.updatedRegion$,r.updatedRegion$,c.updatedRegion$)}),void 0),o=Object(O.a)(a,1)[0];return void 0===o?null:Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(_,{onClick:function(e){return e.stopPropagation()},onMouseDown:n.onMouseDown,x:"".concat(100*o.start,"%"),width:"".concat(100*(o.end-o.start),"%")}),Object(h.jsx)(J,{x:"".concat(100*o.start,"%"),onClick:function(e){return e.stopPropagation()},onMouseDown:r.onMouseDown}),Object(h.jsx)(J,{x:"".concat(100*o.end,"%"),onClick:function(e){return e.stopPropagation()},onMouseDown:c.onMouseDown})]})},G=n(135),N=n(52),Q=n.n(N);var Y=v.a.foreignObject(o||(o=Object(p.a)(["\n  width: 100%;\n  height: 0.5rem;\n  font-size: 0.33rem;\n  // y\n"]))),Z=v.a.div(i||(i=Object(p.a)(["\n  display: flex;\n  justify-content: space-between;\n"]))),ee=v.a.span(u||(u=Object(p.a)([""])));function te(e){var t=new Date(1970,0,1);return e&&t.setSeconds(e),t}var ne,re,ce,ae=function(e){var t=e.duration,n=function(){var e=Object(b.useState)([0,0]),t=Object(O.a)(e,2),n=t[0],r=t[1];return Object(b.useLayoutEffect)((function(){function e(){r([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n}(),r=Object(b.useMemo)((function(){return Object(G.a)().domain([te(0),te(t)]).range([0,100])}),[t]),c=Object(b.useMemo)((function(){return r.ticks().map((function(e){return Object(h.jsx)(ee,{children:(t=e,t.getHours()>0?Q()(t,"HH:mm:ss"):Q()(t,"mm:ss"))},e.valueOf());var t}))}),[r]);return Object(h.jsx)(Y,{children:Object(h.jsx)(Z,{xmlns:"http://www.w3.org/1999/xhtml",children:c})},String(n))},oe=v.a.svg(ne||(ne=Object(p.a)(["\n  width: 100%;\n  height: 2rem;\n  background-color: rgb(240, 240, 240);\n  cursor: ",";\n  pointer-events: ",";\n"])),(function(e){return e.interactable?"pointer":"auto"}),(function(e){return e.interactable?"all":"none"})),ie=v.a.rect(re||(re=Object(p.a)(["\n  width: 1px;\n  height: 100%;\n  fill: rgb(10, 10, 10);\n"]))),ue=function(e){var t=e.duration$,n=e.progress,r=e.onClick,c=e.onRegion,a=e.appRegion$,o=Object(b.useRef)(null),i=Object(f.a)(t),u=Object(f.a)((function(){return n.pipe(Object(P.a)((function(e){return e?"".concat(100*e,"%"):"0px"})))}),"0px"),j=Object(O.a)(u,1)[0],s=Object(m.a)((function(e){return e.pipe(Object(P.a)((function(e){return e.stopPropagation(),e})))})),d=Object(O.a)(s,2),p=d[0],l=d[1],g=Object(m.a)((function(e){return e.pipe(Object(P.a)(B))})),v=Object(O.a)(g,2),y=v[0],w=v[1],x=Object(m.a)((function(e){return e.pipe(Object(P.a)(B))})),V=Object(O.a)(x,2),M=V[0],z=V[1],H=U.pipe(Object(P.a)(F(o)),Object(S.a)((function(e){return void 0!==e}))),I=Object(m.a)((function(e){return e})),X=Object(O.a)(I,2),q=X[0],W=X[1].pipe(Object(S.a)((function(e){return 0===e.button})),Object(P.a)(F(o))),_=w.pipe(Object(S.a)((function(e){return 2===e.button})),Object(D.a)(500)),J=w.pipe(Object($.a)((function(e){return Object(k.a)(100).pipe(Object(L.a)(z),Object(P.a)((function(){return F(o)(e)})))}))),G=_.pipe(Object(P.a)((function(){}))),N=Object(C.a)(J.pipe(Object($.a)((function(e){return H.pipe(Object(P.a)((function(t){return e>t?{start:t,end:e}:{start:e,end:t}})),Object(L.a)(z))}))),G),Q=J.pipe(Object($.a)((function(){return z.pipe(Object(T.a)(1))})),Object(A.a)(N),Object(P.a)((function(e){var t=Object(O.a)(e,2);t[0];return t[1]})));Object(R.a)(W,r),Object(R.a)(Q,c),Object(R.a)(G,c),Object(R.a)(l,(function(){return console.warn("WHEEL")}));var Y=Object(E.a)((function(){return Object(C.a)(a,N)}));return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(oe,{ref:o,onContextMenu:function(e){return e.preventDefault()},onClick:q,onMouseUp:M,onMouseDown:y,onWheel:p,interactable:void 0!==i,children:[Object(h.jsx)(ie,{x:j}),Object(h.jsx)(K,{region$:Y,containerRef:o,onRegion:c}),Object(h.jsx)(ae,{duration:i})]})})},be=v.a.div(ce||(ce=Object(p.a)(["\n  display: flex;\n  width: 100%;\n"]))),je=function(){},se=function(e){var t=e.status,n=e.onAction,r=e.duration$,c=function(e){return{video:Object(b.useMemo)((function(){return"PlayingVideo"===e?"Stop":"Play"}),[e]),recording:Object(b.useMemo)((function(){return"Recording"===e?"Stop recording":"Start recording"}),[e]),playback:Object(b.useMemo)((function(){return"PlayingVoice"===e?"Stop voice":"Play Voice"}),[e])}}(t),a=Object(f.a)(r.pipe(Object(P.a)((function(e){return void 0===e}))),!1),o=Object(b.useMemo)((function(){return a||"Recording"===t||"PlayingVoice"===t}),[a,t]),i=Object(b.useMemo)((function(){return a||"PlayingVideo"===t||"PlayingVoice"===t}),[a,t]),u=Object(b.useMemo)((function(){return a||"PlayingVideo"===t||"Recording"===t}),[a,t]),j=Object(b.useCallback)((function(e){n("PlayingVideo"===t?{type:"VideoStoppedPlaying",event:e}:{type:"VideoStartedPlaying",event:e})}),[t,n]),s=Object(b.useCallback)((function(e){n("Recording"===t?{type:"VoiceStoppedRecording",event:e}:{type:"VoiceStartedRecording",event:e})}),[t,n]),d=Object(b.useCallback)((function(e){n("PlayingVoice"===t?{type:"VoiceStoppedPlaying",event:e}:{type:"VoiceStartedPlaying",event:e})}),[t,n]);return Object(h.jsxs)(be,{children:[Object(h.jsx)("button",{disabled:o,onClick:o?je:j,children:c.video}),Object(h.jsx)("button",{disabled:i,onClick:i?je:s,children:c.recording}),Object(h.jsx)("button",{disabled:u,onClick:u?je:d,children:c.playback})]})},de=n(142),Oe=n(24),pe=n.n(Oe),fe=n(53),le=function(){};var ge=function(e){e.disabled;var t=e.onAction,n=e.status,r=Object(b.useRef)(null),c=Object(b.useState)(void 0),a=Object(O.a)(c,2),o=a[0],i=a[1],u=Object(b.useState)(n),s=Object(O.a)(u,2),d=s[0],p=s[1],f=function(e){var t=e.blobOptions,n=void 0===t?{}:t,r=e.onStop,c=void 0===r?le:r,a=e.onStart,o=void 0===a?le:a,i=e.onError,u=void 0===i?le:i,b=e.onDataAvailable,s=void 0===b?le:b,d=j.a.useRef([]),p=j.a.useRef(null),f=j.a.useRef(null),l=j.a.useState(null),g=Object(O.a)(l,2),v=g[0],h=g[1],y=j.a.useState("idle"),w=Object(O.a)(y,2),m=w[0],R=w[1],x=j.a.useState(null),k=Object(O.a)(x,2),P=k[0],S=k[1],V=j.a.useState(!1),M=Object(O.a)(V,2),C=M[0],E=M[1];function D(){return $.apply(this,arguments)}function $(){return($=Object(fe.a)(pe.a.mark((function e(){var t;return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v&&h(null),R("acquiring_media"),e.prev=2,e.next=5,window.navigator.mediaDevices.getUserMedia({audio:!0});case 5:(t=e.sent).getAudioTracks().forEach((function(e){return t.addTrack(e)})),p.current=t,R("ready"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),h(e.t0),R("failed");case 15:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}function L(){p.current&&(p.current.getTracks().forEach((function(e){return e.stop()})),p.current=null)}function T(){return(T=Object(fe.a)(pe.a.mark((function e(){return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(v&&h(null),p.current||"acquiring_media"===m){e.next=4;break}return e.next=4,D();case 4:d.current=[],p.current&&(f.current=new MediaRecorder(p.current,{mimeType:"audio/webm"}),f.current.addEventListener("dataavailable",A),f.current.addEventListener("stop",z),f.current.addEventListener("error",B),f.current.start(),R("recording"),o());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e){e.data.size&&d.current.push(e.data),s(e.data)}function z(){var e=Object(O.a)(d.current,1)[0],t=e?e.type:"audio/webm",r=Object.assign({type:t},n),a=new Blob(d.current,r);S(a),R("stopped"),c(a)}function B(e){h(e.error),R("idle"),u(e.error)}function H(e){E(e),p.current&&p.current.getAudioTracks().forEach((function(t){t.enabled=!e}))}return j.a.useEffect((function(){if(!window.MediaRecorder)throw new ReferenceError("MediaRecorder is not supported in this browser. Please ensure that you are running the latest version of chrome/firefox/edge.")}),[]),{error:v,status:m,mediaBlob:P,isAudioMuted:C,stopRecording:function(){f.current&&(R("stopping"),f.current.stop(),f.current.removeEventListener("dataavailable",A),f.current.removeEventListener("stop",z),f.current.removeEventListener("error",B),L())},getMediaStream:D,startRecording:function(){return T.apply(this,arguments)},pauseRecording:function(){f.current&&"recording"===f.current.state&&f.current.pause()},resumeRecording:function(){f.current&&"paused"===f.current.state&&f.current.resume()},clearMediaStream:L,muteAudio:function(){return H(!0)},unMuteAudio:function(){return H(!1)},get liveStream(){return p.current?new MediaStream(p.current.getVideoTracks()):null}}}({onStop:Object(b.useCallback)((function(e){if(r.current){var n=URL.createObjectURL(e);r.current.src=n,i(n),t({type:"VoiceStoppedRecording"})}}),[t,i,r])}),l=f.startRecording,g=f.stopRecording;Object(b.useEffect)((function(){p(n)}),[n]),Object(b.useEffect)((function(){"Recording"===n&&"Recording"!==d&&(l(),URL.revokeObjectURL(o||""),i(void 0)),"Recording"!==n&&"Recording"===d&&g()}),[n,d,l,g,i,o]),Object(b.useEffect)((function(){r.current&&("PlayingVoice"===n&&r.current.play(),"PlayingVoice"===d&&"PlayingVoice"!==n&&(r.current.pause(),r.current.currentTime=0))}),[n,d]);var v=Object(b.useCallback)((function(){r.current&&(r.current.pause(),r.current.currentTime=0,t({type:"VoiceStoppedPlaying"}))}),[r,t]);return Object(h.jsx)("audio",{ref:r,onEnded:v})};var ve=function(){var e=Object(b.useRef)(null),t=Object(m.a)((function(e){return e}),void 0),n=Object(O.a)(t,2),r=n[0],c=n[1],a=Object(m.a)((function(e){return e})),o=Object(O.a)(a,2),i=o[0],u=o[1];Object(R.a)(c,(function(){return i(void 0)}));var j=Object(m.a)((function(e){return e})),s=Object(O.a)(j,2),d=s[0],p=s[1],l=Object(m.a)((function(e){return e})),g=Object(O.a)(l,2),v=g[0],y=g[1],x=Object(m.a)((function(t){return t.pipe(Object(de.a)((function(t){var n;return null===(n=e.current)||void 0===n?void 0:n.seekTo(t)})))})),k=Object(O.a)(x,2),V=k[0],$=k[1],L=Object(C.a)(y,$).pipe(Object(D.a)(100)),T=Object(f.a)((function(t){return t.pipe(Object(A.a)(u),Object(P.a)((function(t){var n,r=Object(O.a)(t,2),c=r[0].type,a=r[1];switch(c){case"VideoStartedPlaying":return a&&(null===(n=e.current)||void 0===n||n.seekTo(a.start)),"PlayingVideo";case"VoiceStartedPlaying":return"PlayingVoice";case"VoiceStartedRecording":return"Recording";case"VideoStoppedPlaying":case"VoiceStoppedPlaying":case"VoiceStoppedRecording":default:return"Idle"}})))}),"Idle"),z=Object(O.a)(T,2),B=z[0],H=z[1],F=Object(E.a)((function(){return y.pipe(Object(A.a)(u),Object(S.a)((function(e){return void 0!==Object(O.a)(e,2)[1]})),Object(S.a)((function(e){var t=Object(O.a)(e,2);return t[0]>=t[1].end})),Object(P.a)((function(e){return Object(O.a)(e,2)[1]})))}));return Object(R.a)(F,(function(t){var n;H({type:"VideoStoppedPlaying"}),null===(n=e.current)||void 0===n||n.seekTo(t.start)})),Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:"https://www.youtube.com/watch?v=EqE_AH39144"}),Object(h.jsx)("p",{children:"https://www.youtube.com/watch?v=sS55zq6Hz8A"}),Object(h.jsx)(M,{onChange:r}),Object(h.jsx)(ue,{duration$:p,progress:L,onClick:V,onRegion:i,appRegion$:u}),Object(h.jsx)(se,{status:B,onAction:H,duration$:p}),Object(h.jsx)(w,{ref:e,url$:c,onDuration:d,onProgress:v,playing:"PlayingVideo"===B}),Object(h.jsx)(ge,{disabled:!1,status:B,onAction:H})]})},he=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,143)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))};d.a.render(Object(h.jsx)(j.a.StrictMode,{children:Object(h.jsx)(ve,{})}),document.getElementById("root")),he()}},[[122,1,2]]]);
//# sourceMappingURL=main.f6ef1735.chunk.js.map