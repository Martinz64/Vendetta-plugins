(function(ee,T,y,O,L,o,f,J,n,we,Re){"use strict";const{View:Se,Text:Ye,Pressable:Qe}=f.ReactNative,Te=y.findByName("Svg",!1).default,Me=y.findByName("Svg",!1).Path,De={desktop:"M4 2.5c-1.103 0-2 .897-2 2v11c0 1.104.897 2 2 2h7v2H7v2h10v-2h-4v-2h7c1.103 0 2-.896 2-2v-11c0-1.103-.897-2-2-2H4Zm16 2v9H4v-9h16Z",web:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93Zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39Z",mobile:"M15.5 1h-8A2.5 2.5 0 0 0 5 3.5v17A2.5 2.5 0 0 0 7.5 23h8a2.5 2.5 0 0 0 2.5-2.5v-17A2.5 2.5 0 0 0 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z",embedded:"M5.79335761,5 L18.2066424,5 C19.7805584,5 21.0868816,6.21634264 21.1990185,7.78625885 L21.8575059,17.0050826 C21.9307825,18.0309548 21.1585512,18.9219909 20.132679,18.9952675 C20.088523,18.9984215 20.0442685,19 20,19 C18.8245863,19 17.8000084,18.2000338 17.5149287,17.059715 L17,15 L7,15 L6.48507125,17.059715 C6.19999155,18.2000338 5.1754137,19 4,19 C2.97151413,19 2.13776159,18.1662475 2.13776159,17.1377616 C2.13776159,17.0934931 2.1393401,17.0492386 2.1424941,17.0050826 L2.80098151,7.78625885 C2.91311838,6.21634264 4.21944161,5 5.79335761,5 Z M14.5,10 C15.3284271,10 16,9.32842712 16,8.5 C16,7.67157288 15.3284271,7 14.5,7 C13.6715729,7 13,7.67157288 13,8.5 C13,9.32842712 13.6715729,10 14.5,10 Z M18.5,13 C19.3284271,13 20,12.3284271 20,11.5 C20,10.6715729 19.3284271,10 18.5,10 C17.6715729,10 17,10.6715729 17,11.5 C17,12.3284271 17.6715729,13 18.5,13 Z M6,9 L4,9 L4,11 L6,11 L6,13 L8,13 L8,11 L10,11 L10,9 L8,9 L8,7 L6,7 L6,9 ZM5.79335761,5 L18.2066424,5 C19.7805584,5 21.0868816,6.21634264 21.1990185,7.78625885 L21.8575059,17.0050826 C21.9307825,18.0309548 21.1585512,18.9219909 20.132679,18.9952675 C20.088523,18.9984215 20.0442685,19 20,19 C18.8245863,19 17.8000084,18.2000338 17.5149287,17.059715 L17,15 L7,15 L6.48507125,17.059715 C6.19999155,18.2000338 5.1754137,19 4,19 C2.97151413,19 2.13776159,18.1662475 2.13776159,17.1377616 C2.13776159,17.0934931 2.1393401,17.0492386 2.1424941,17.0050826 L2.80098151,7.78625885 C2.91311838,6.21634264 4.21944161,5 5.79335761,5 Z M14.5,10 C15.3284271,10 16,9.32842712 16,8.5 C16,7.67157288 15.3284271,7 14.5,7 C13.6715729,7 13,7.67157288 13,8.5 C13,9.32842712 13.6715729,10 14.5,10 Z M18.5,13 C19.3284271,13 20,12.3284271 20,11.5 C20,10.6715729 19.3284271,10 18.5,10 C17.6715729,10 17,10.6715729 17,11.5 C17,12.3284271 17.6715729,13 18.5,13 Z M6,9 L4,9 L4,11 L6,11 L6,13 L8,13 L8,11 L10,11 L10,9 L8,9 L8,7 L6,7 L6,9 Z"};function ge(r){const{platform:M,color:E}=r;return React.createElement(Se,null,React.createElement(Te,{height:"16",width:"16",viewBox:"0 0 24 24",fill:E},React.createElement(Me,{d:De[M]})))}const ke={online:f.chroma(J.rawColors.GREEN_360).hex(),dnd:f.chroma(J.rawColors.RED_400).hex(),idle:f.chroma(J.rawColors.YELLOW_300).hex(),offline:f.chroma(J.rawColors.PRIMARY_400).hex()},Ve={online:"#23a55a",dnd:"#f23f43",idle:"#f0b232",offline:"#80848e"};function xe(r){return arguments.length>1&&arguments[1]!==void 0&&arguments[1]?Ve[r]:ke[r]}const Ne=y.findByStoreName("PresenceStore"),Be=y.findByStoreName("SessionsStore"),Ue=y.findByStoreName("UserStore");let ne,_=0,re,le;function Pe(){return re||(re=setTimeout(function(){_=0,re=null},5e3)),(!ne||_==0)&&(ne=Ne.getState()),_=(_+1)%20,ne}function Ze(r){let M;if(!le){var E;le=(E=Ue.getCurrentUser())===null||E===void 0?void 0:E.id}if(r==le)M=Object.values(Be.getSessions()).reduce(function(H,F){return F.clientInfo.client!=="unknown"&&(H[F.clientInfo.client]=F.status),H},{});else{var N;M=(N=Pe())===null||N===void 0?void 0:N.clientStatuses[r]}return M}function P(r){we.useProxy(n.storage);const M=r.userId,E=Ze(M);return o.createElement(o.Fragment,null,Object.keys(E??{}).map(function(N){return o.createElement(ge,{platform:N,color:xe(E[N],n.storage.fallbackColors)})}))}const{View:He,ScrollView:Fe}=f.ReactNative;function Ae(){return we.useProxy(n.storage),f.React.createElement(Fe,null,f.React.createElement(He,null,f.React.createElement(O.Forms.FormSwitchRow,{label:"Show icons on the dm top bar",value:n.storage.dmTopBar??!0,onValueChange:function(r){return n.storage.dmTopBar=r},note:""}),f.React.createElement(O.Forms.FormSwitchRow,{label:"Show icons on the users and DMs list",value:n.storage.userList??!0,onValueChange:function(r){return n.storage.userList=r},note:""}),f.React.createElement(O.Forms.FormSwitchRow,{label:"Show icons on user profiles",value:n.storage.profileUsername??!0,onValueChange:function(r){return n.storage.profileUsername=r},note:""}),f.React.createElement(O.Forms.FormSwitchRow,{label:"Hide mobile status from the normal indicator",value:n.storage.removeDefaultMobile??!0,onValueChange:function(r){return n.storage.removeDefaultMobile=r},note:""}),f.React.createElement(O.Forms.FormSwitchRow,{label:"Theme compatibility mode",value:n.storage.fallbackColors??!1,onValueChange:function(r){return n.storage.fallbackColors=r},note:""}),f.React.createElement(O.Forms.FormSwitchRow,{label:"Old user list icon style",value:n.storage.oldUserListIcons??!1,onValueChange:function(r){return n.storage.oldUserListIcons=r},note:""})))}const oe=function(r){let{children:M}=r;const[E,N]=o.useState(0);return o.useEffect(function(){const H=function(){N(function(F){return F+1})};return f.FluxDispatcher.subscribe("PRESENCE_UPDATES",H),function(){f.FluxDispatcher.unsubscribe("PRESENCE_UPDATES",H)}},[]),o.Children.map(M,function(H,F){return o.cloneElement(H,{key:`${F}-${E}`})})},{Text:Xe,View:G}=O.General;let Z=[];var Oe={onLoad:function(){n.storage.dmTopBar??=!0,n.storage.userList??=!0,n.storage.profileUsername??=!0,n.storage.removeDefaultMobile??=!0,n.storage.fallbackColors??=!1,n.storage.oldUserListIcons??=!1,Z.push(T.patcher.after("render",G,function(c,e){if(n.storage.dmTopBar){var i,l,d,t,s,u,h,m,D;const I=L.findInReactTree(e,function(a){var v,w,p,C,R,k,V;return(a==null||(p=a.props)===null||p===void 0||(w=p.children[1])===null||w===void 0||(v=w.type)===null||v===void 0?void 0:v.name)=="ChannelActivity"&&(a==null||(V=a.props)===null||V===void 0||(k=V.children[1])===null||k===void 0||(R=k.props)===null||R===void 0||(C=R.hasOwnProperty)===null||C===void 0?void 0:C.call(R,"userId"))});if(!I||((l=I.props)===null||l===void 0||(i=l.children)===null||i===void 0?void 0:i.length)!=2||((u=I.props)===null||u===void 0||(s=u.children[0])===null||s===void 0||(t=s.props)===null||t===void 0||(d=t.children)===null||d===void 0?void 0:d.length)!=2)return;const B=(D=I.props)===null||D===void 0||(m=D.children[0])===null||m===void 0||(h=m.props)===null||h===void 0?void 0:h.children;if(B.filter(function(a){var v;return a==null||(v=a.props)===null||v===void 0?void 0:v.userId}).length==2){var g;const a=B[1],v=(g=a.props)===null||g===void 0?void 0:g.userId;if(!v)return;T.patcher.after("type",a,function(w,p){return L.findInReactTree(p,function(C){return C.key=="StatusIcons"})||(p=o.createElement(G,{style:{display:"flex",flexDirection:"row"}},p,o.createElement(oe,{key:"StatusIcons"},o.createElement(P,{userId:v})))),p})}}}));const r=y.findByDisplayName("Pressable",!1);Z.push(T.patcher.before("render",r.default.type,function(c){if(!c||!c[0])return;const[e]=c;if(e){if(e.accessibilityRole=="button"){if(!n.storage.userList)return;if(e.children&&e.children.length>=2){var i,l,d,t;if(!((l=e.children[0])===null||l===void 0||(i=l.props)===null||i===void 0)&&i.user&&!((t=e.children[0])===null||t===void 0||(d=t.props)===null||d===void 0)&&d.channel||n.storage.oldUserListIcons){var s,u,h,m,D,g,I;if(!e.children[0]||!(!((u=e.children[0])===null||u===void 0||(s=u.props)===null||s===void 0)&&s.user))return;const q=(D=e.children[0])===null||D===void 0||(m=D.props)===null||m===void 0||(h=m.user)===null||h===void 0?void 0:h.id;if(!q)return;!((g=e.children)===null||g===void 0)&&g.find(function(K){return K.key=="StatusIcons"})||e.children.push(o.createElement(G,{key:"StatusIcons",style:{display:"flex",flexDirection:"row"}}));const $=(I=e.children)===null||I===void 0?void 0:I.find(function(K){return K.key=="StatusIcons"});$.props.children=o.createElement(P,{userId:q})}}}if(e.accessibilityRole=="button"){var B,a,v,w;if(!n.storage.userList)return;if(!(e==null||(w=e.children)===null||w===void 0||(v=w.props)===null||v===void 0||(a=v.children)===null||a===void 0||(B=a.props)===null||B===void 0)&&B.children){var p,C,R,k,V,Y,Q;if((e==null||(Q=e.children)===null||Q===void 0||(Y=Q.props)===null||Y===void 0||(V=Y.children)===null||V===void 0||(k=V.props)===null||k===void 0||(R=k.children[0])===null||R===void 0||(C=R.type)===null||C===void 0||(p=C.type)===null||p===void 0?void 0:p.name)=="GuildContainerIndicator"){var X,j,W,z,b,x,S,U,A,te,ie,se,de,ce,ue,ae,ve,fe,pe,he,me;const q=e==null||(ie=e.children)===null||ie===void 0||(te=ie.props)===null||te===void 0||(A=te.children)===null||A===void 0||(U=A.props)===null||U===void 0||(S=U.children[1])===null||S===void 0||(x=S.props)===null||x===void 0||(b=x.children[0])===null||b===void 0||(z=b.props)===null||z===void 0||(W=z.children)===null||W===void 0||(j=W.props)===null||j===void 0||(X=j.user)===null||X===void 0?void 0:X.id;if(!(e==null||(me=e.children)===null||me===void 0||(he=me.props)===null||he===void 0||(pe=he.children)===null||pe===void 0||(fe=pe.props)===null||fe===void 0||(ve=fe.children[1])===null||ve===void 0||(ae=ve.props)===null||ae===void 0||(ue=ae.children[0])===null||ue===void 0||(ce=ue.props)===null||ce===void 0||(de=ce.children)===null||de===void 0||(se=de.props)===null||se===void 0)&&se.guildId)return;if(q){var ye,Ce,be,Le,Ee,Ie;const $=e==null||(Ie=e.children)===null||Ie===void 0||(Ee=Ie.props)===null||Ee===void 0||(Le=Ee.children)===null||Le===void 0||(be=Le.props)===null||be===void 0||(Ce=be.children[2])===null||Ce===void 0||(ye=Ce.props)===null||ye===void 0?void 0:ye.children[0];if($){const K=$.props.children[0].props.children;L.findInReactTree(K,function(Ge){return Ge.key=="DMTabsV2DMList-v2"})||K.push(o.createElement(oe,{key:"DMTabsV2DMList-v2"},o.createElement(P,{userId:q})))}}}}}}})),y.findByStoreName("PresenceStore"),Z.push(T.patcher.after("default",y.findByName("ChannelHeader",!1),function(c,e){var i,l;n.storage.dmTopBar&&((l=e.type)===null||l===void 0||(i=l.type)===null||i===void 0?void 0:i.name)=="PrivateChannelHeader"&&T.patcher.after("type",e.type,function(d,t){var s,u,h,m,D,g,I;if(!(!((h=t.props)===null||h===void 0||(u=h.children)===null||u===void 0||(s=u.props)===null||s===void 0)&&s.children))return;const B=(g=L.findInReactTree(t,function(b){var x,S;return(S=b.props)===null||S===void 0||(x=S.user)===null||x===void 0?void 0:x.id}))===null||g===void 0||(D=g.props)===null||D===void 0||(m=D.user)===null||m===void 0?void 0:m.id;if(!B)return;const a=(I=t.props)===null||I===void 0?void 0:I.children;if(!L.findInReactTree(t,function(b){return b.key=="DMTabsV2Header"})){var v,w,p;if(!((p=a.props)===null||p===void 0||(w=p.children)===null||w===void 0||(v=w.props)===null||v===void 0)&&v.children[1]){var C,R,k,V;if(typeof((V=a.props)===null||V===void 0||(k=V.children)===null||k===void 0||(R=k.props)===null||R===void 0||(C=R.children[1])===null||C===void 0?void 0:C.type)=="function"){var Y,Q,X;const b=(X=a.props)===null||X===void 0||(Q=X.children)===null||Q===void 0||(Y=Q.props)===null||Y===void 0?void 0:Y.children[1],x=T.patcher.after("type",b,function(S,U){x(),L.findInReactTree(U,function(A){return A.key=="DMTabsV2Header-v2"})||U.props.children[0].props.children.push(o.createElement(oe,{key:"DMTabsV2Header-v2"},o.createElement(P,{userId:B})))})}else{var j,W;const b=Re.getAssetIDByName("arrow-right");(W=L.findInReactTree(a,function(x){var S,U,A;return((A=x.props)===null||A===void 0||(U=A.children[1])===null||U===void 0||(S=U.props)===null||S===void 0?void 0:S.source)==b}).props)===null||W===void 0||(j=W.children)===null||j===void 0||j.push(o.createElement(G,{key:"DMTabsV2Header",style:{flexDirection:"row",justifyContent:"center",alignContent:"flex-start"}},o.createElement(G,{key:"DMTabsV2HeaderIcons",style:{flexDirection:"row"}})))}}}const z=L.findInReactTree(t,function(b){return b.key=="DMTabsV2HeaderIcons"});z&&(z.props.children=o.createElement(P,{userId:B}))})}));const M=y.findByName("DefaultName",!1);Z.push(T.patcher.after("default",M,function(c,e){var i,l,d,t,s;const u=(i=c[0])===null||i===void 0?void 0:i.user;u!==void 0&&e&&u.id&&n.storage.profileUsername&&((s=e.props)===null||s===void 0||(t=s.children[0])===null||t===void 0||(d=t.props)===null||d===void 0||(l=d.children)===null||l===void 0||l.push(o.createElement(P,{userId:u.id})))}));const E=y.findByName("DisplayName",!1);Z.push(T.patcher.after("default",E,function(c,e){var i,l,d,t,s,u,h;const m=(i=c[0])===null||i===void 0?void 0:i.user;m!==void 0&&e&&m.id&&n.storage.profileUsername&&((h=e.props)===null||h===void 0||(u=h.children)===null||u===void 0||(s=u.props)===null||s===void 0||(t=s.children[0])===null||t===void 0||(d=t.props)===null||d===void 0||(l=d.children)===null||l===void 0||l.push(o.createElement(P,{userId:m.id})))}));const N=y.findByName("Status",!1);Z.push(T.patcher.before("default",N,function(c){c&&c[0]&&n.storage.removeDefaultMobile&&(c[0].isMobileOnline=!1)}));const H=y.findByProps("GuildMemberRow");Z.push(T.patcher.after("type",H.GuildMemberRow,function(c,e){let[{user:i}]=c;!n.storage.userList||n.storage.oldUserListIcons||L.findInReactTree(e,function(l){return l.key=="GuildMemberRowStatusIconsView"})||L.findInReactTree(e,function(l){return l.props.style.flexDirection==="row"}).props.children.splice(2,0,o.createElement(G,{key:"GuildMemberRowStatusIconsView",style:{flexDirection:"row"}},o.createElement(P,{userId:i.id})))}));const F=function(c,e){let[{user:i}]=c;if(!(!n.storage.userList||n.storage.oldUserListIcons)&&!L.findInReactTree(e,function(d){return d.key=="TabsV2MemberListStatusIconsView"})){var l;const d=L.findInReactTree(e.props.label,function(t){var s;return(s=t.props)===null||s===void 0?void 0:s.lineClamp}).props.children;if(!(d==null||(l=d.props)===null||l===void 0)&&l.children){let t=o.createElement(G,{key:"TabsV2MemberListStatusIconsView",style:{flexDirection:"row"}},o.createElement(P,{userId:i.id}));d.props.children[1]=t}}};y.findByTypeNameAll("UserRow").forEach(function(c){return Z.push(T.patcher.after("type",c,F))})},onUnload:function(){Z.forEach(function(r){return r()})},settings:function(){return o.createElement(Ae,null)}};return ee.default=Oe,Object.defineProperty(ee,"__esModule",{value:!0}),ee})({},vendetta,vendetta.metro,vendetta.ui.components,vendetta.utils,window.React,vendetta.metro.common,vendetta.ui,vendetta.plugin,vendetta.storage,vendetta.ui.assets);
