try{let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="b81033ee-a698-4ef0-87e6-45aa0dedb5e5",e._sentryDebugIdIdentifier="sentry-dbid-b81033ee-a698-4ef0-87e6-45aa0dedb5e5")}catch(e){}{let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{};e._sentryModuleMetadata=e._sentryModuleMetadata||{},e._sentryModuleMetadata[new e.Error().stack]=Object.assign({},e._sentryModuleMetadata[new e.Error().stack],{"_sentryBundlerPluginAppKey:crazygames-portal":!0})}"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[56413],{56413:(e,t,n)=>{n.d(t,{A:()=>S});var r=n(58168),i=n(98587),o=n(96540),l=n(34164),a=n(75659),u=n(3552),s=n(6637),c=n(13372),d=n(75170),p=n(4891),f=n(16543),h=n(17437),b=n(27598),m=n(74848),y=n(38413);let g=(0,y.A)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),v=["center","classes","className"],A=e=>e,x,M,E,R,k=(0,h.i7)(x||(x=A`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),w=(0,h.i7)(M||(M=A`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),T=(0,h.i7)(E||(E=A`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),P=(0,u.Ay)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),C=(0,u.Ay)(function(e){let{className:t,classes:n,pulsate:r=!1,rippleX:i,rippleY:a,rippleSize:u,in:s,onExited:c,timeout:d}=e,[p,f]=o.useState(!1),h=(0,l.A)(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),b=(0,l.A)(n.child,p&&n.childLeaving,r&&n.childPulsate);return s||p||f(!0),o.useEffect(()=>{if(!s&&null!=c){let e=setTimeout(c,d);return()=>{clearTimeout(e)}}},[c,s,d]),(0,m.jsx)("span",{className:h,style:{width:u,height:u,top:-(u/2)+a,left:-(u/2)+i},children:(0,m.jsx)("span",{className:b})})},{name:"MuiTouchRipple",slot:"Ripple"})(R||(R=A`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),g.rippleVisible,k,550,e=>{let{theme:t}=e;return t.transitions.easing.easeInOut},g.ripplePulsate,e=>{let{theme:t}=e;return t.transitions.duration.shorter},g.child,g.childLeaving,w,550,e=>{let{theme:t}=e;return t.transitions.easing.easeInOut},g.childPulsate,T,e=>{let{theme:t}=e;return t.transitions.easing.easeInOut}),j=o.forwardRef(function(e,t){let n=(0,s.A)({props:e,name:"MuiTouchRipple"}),{center:a=!1,classes:u={},className:c}=n,d=(0,i.A)(n,v),[p,h]=o.useState([]),y=o.useRef(0),A=o.useRef(null);o.useEffect(()=>{A.current&&(A.current(),A.current=null)},[p]);let x=o.useRef(!1),M=(0,b.A)(),E=o.useRef(null),R=o.useRef(null),k=o.useCallback(e=>{let{pulsate:t,rippleX:n,rippleY:r,rippleSize:i,cb:o}=e;h(e=>[...e,(0,m.jsx)(C,{classes:{ripple:(0,l.A)(u.ripple,g.ripple),rippleVisible:(0,l.A)(u.rippleVisible,g.rippleVisible),ripplePulsate:(0,l.A)(u.ripplePulsate,g.ripplePulsate),child:(0,l.A)(u.child,g.child),childLeaving:(0,l.A)(u.childLeaving,g.childLeaving),childPulsate:(0,l.A)(u.childPulsate,g.childPulsate)},timeout:550,pulsate:t,rippleX:n,rippleY:r,rippleSize:i},y.current)]),y.current+=1,A.current=o},[u]),w=o.useCallback(function(){let e,t,n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>{},{pulsate:l=!1,center:u=a||i.pulsate,fakeElement:s=!1}=i;if((null==r?void 0:r.type)==="mousedown"&&x.current){x.current=!1;return}(null==r?void 0:r.type)==="touchstart"&&(x.current=!0);let c=s?null:R.current,d=c?c.getBoundingClientRect():{width:0,height:0,left:0,top:0};if(!u&&void 0!==r&&(0!==r.clientX||0!==r.clientY)&&(r.clientX||r.touches)){let{clientX:n,clientY:i}=r.touches&&r.touches.length>0?r.touches[0]:r;e=Math.round(n-d.left),t=Math.round(i-d.top)}else e=Math.round(d.width/2),t=Math.round(d.height/2);u?(n=Math.sqrt((2*d.width**2+d.height**2)/3))%2==0&&(n+=1):n=Math.sqrt((2*Math.max(Math.abs((c?c.clientWidth:0)-e),e)+2)**2+(2*Math.max(Math.abs((c?c.clientHeight:0)-t),t)+2)**2),null!=r&&r.touches?null===E.current&&(E.current=()=>{k({pulsate:l,rippleX:e,rippleY:t,rippleSize:n,cb:o})},M.start(80,()=>{E.current&&(E.current(),E.current=null)})):k({pulsate:l,rippleX:e,rippleY:t,rippleSize:n,cb:o})},[a,k,M]),T=o.useCallback(()=>{w({},{pulsate:!0})},[w]),j=o.useCallback((e,t)=>{if(M.clear(),(null==e?void 0:e.type)==="touchend"&&E.current){E.current(),E.current=null,M.start(0,()=>{j(e,t)});return}E.current=null,h(e=>e.length>0?e.slice(1):e),A.current=t},[M]);return o.useImperativeHandle(t,()=>({pulsate:T,start:w,stop:j}),[T,w,j]),(0,m.jsx)(P,(0,r.A)({className:(0,l.A)(g.root,u.root,c),ref:R},d,{children:(0,m.jsx)(f.A,{component:null,exit:!0,children:p})}))});var V=n(31609);function _(e){return(0,V.Ay)("MuiButtonBase",e)}let D=(0,y.A)("MuiButtonBase",["root","disabled","focusVisible"]),$=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],I=e=>{let{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:i}=e,o=(0,a.A)({root:["root",t&&"disabled",n&&"focusVisible"]},_,i);return n&&r&&(o.root+=` ${r}`),o},O=(0,u.Ay)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${D.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),S=o.forwardRef(function(e,t){let n=(0,s.A)({props:e,name:"MuiButtonBase"}),{action:a,centerRipple:u=!1,children:f,className:h,component:b="button",disabled:y=!1,disableRipple:g=!1,disableTouchRipple:v=!1,focusRipple:A=!1,LinkComponent:x="a",onBlur:M,onClick:E,onContextMenu:R,onDragLeave:k,onFocus:w,onFocusVisible:T,onKeyDown:P,onKeyUp:C,onMouseDown:V,onMouseLeave:_,onMouseUp:D,onTouchEnd:S,onTouchMove:B,onTouchStart:L,tabIndex:N=0,TouchRippleProps:F,touchRippleRef:z,type:K}=n,U=(0,i.A)(n,$),H=o.useRef(null),W=o.useRef(null),X=(0,c.A)(W,z),{isFocusVisibleRef:q,onFocus:Y,onBlur:G,ref:J}=(0,p.A)(),[Q,Z]=o.useState(!1);y&&Q&&Z(!1),o.useImperativeHandle(a,()=>({focusVisible:()=>{Z(!0),H.current.focus()}}),[]);let[ee,et]=o.useState(!1);o.useEffect(()=>{et(!0)},[]);let en=ee&&!g&&!y;function er(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:v;return(0,d.A)(r=>(t&&t(r),!n&&W.current&&W.current[e](r),!0))}o.useEffect(()=>{Q&&A&&!g&&ee&&W.current.pulsate()},[g,A,Q,ee]);let ei=er("start",V),eo=er("stop",R),el=er("stop",k),ea=er("stop",D),eu=er("stop",e=>{Q&&e.preventDefault(),_&&_(e)}),es=er("start",L),ec=er("stop",S),ed=er("stop",B),ep=er("stop",e=>{G(e),!1===q.current&&Z(!1),M&&M(e)},!1),ef=(0,d.A)(e=>{H.current||(H.current=e.currentTarget),Y(e),!0===q.current&&(Z(!0),T&&T(e)),w&&w(e)}),eh=()=>{let e=H.current;return b&&"button"!==b&&!("A"===e.tagName&&e.href)},eb=o.useRef(!1),em=(0,d.A)(e=>{A&&!eb.current&&Q&&W.current&&" "===e.key&&(eb.current=!0,W.current.stop(e,()=>{W.current.start(e)})),e.target===e.currentTarget&&eh()&&" "===e.key&&e.preventDefault(),P&&P(e),e.target===e.currentTarget&&eh()&&"Enter"===e.key&&!y&&(e.preventDefault(),E&&E(e))}),ey=(0,d.A)(e=>{A&&" "===e.key&&W.current&&Q&&!e.defaultPrevented&&(eb.current=!1,W.current.stop(e,()=>{W.current.pulsate(e)})),C&&C(e),E&&e.target===e.currentTarget&&eh()&&" "===e.key&&!e.defaultPrevented&&E(e)}),eg=b;"button"===eg&&(U.href||U.to)&&(eg=x);let ev={};"button"===eg?(ev.type=void 0===K?"button":K,ev.disabled=y):(U.href||U.to||(ev.role="button"),y&&(ev["aria-disabled"]=y));let eA=(0,c.A)(t,J,H),ex=(0,r.A)({},n,{centerRipple:u,component:b,disabled:y,disableRipple:g,disableTouchRipple:v,focusRipple:A,tabIndex:N,focusVisible:Q}),eM=I(ex);return(0,m.jsxs)(O,(0,r.A)({as:eg,className:(0,l.A)(eM.root,h),ownerState:ex,onBlur:ep,onClick:E,onContextMenu:eo,onFocus:ef,onKeyDown:em,onKeyUp:ey,onMouseDown:ei,onMouseLeave:eu,onMouseUp:ea,onDragLeave:el,onTouchEnd:ec,onTouchMove:ed,onTouchStart:es,ref:eA,tabIndex:y?-1:N,type:K},ev,U,{children:[f,en?(0,m.jsx)(j,(0,r.A)({ref:X,center:u},F)):null]}))})},75170:(e,t,n)=>{n.d(t,{A:()=>r});let r=n(71547).A},13372:(e,t,n)=>{n.d(t,{A:()=>r});let r=n(31523).A},4891:(e,t,n)=>{n.d(t,{A:()=>r});let r=n(53313).A},16543:(e,t,n)=>{n.d(t,{A:()=>p});var r=n(98587),i=n(58168),o=n(42892),l=n(96540),a=n(17241);function u(e,t){var n=Object.create(null);return e&&l.Children.map(e,function(e){return e}).forEach(function(e){n[e.key]=t&&(0,l.isValidElement)(e)?t(e):e}),n}function s(e,t,n){return null!=n[t]?n[t]:e.props[t]}var c=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},d=function(e){function t(t,n){var r,i=(r=e.call(this,t,n)||this).handleExited.bind(function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}(0,o.A)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,i=t.children,o=t.handleExited;return{children:t.firstRender?u(e.children,function(t){return(0,l.cloneElement)(t,{onExited:o.bind(null,t),in:!0,appear:s(t,"appear",e),enter:s(t,"enter",e),exit:s(t,"exit",e)})}):(Object.keys(r=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,i=Object.create(null),o=[];for(var l in e)l in t?o.length&&(i[l]=o,o=[]):o.push(l);var a={};for(var u in t){if(i[u])for(r=0;r<i[u].length;r++){var s=i[u][r];a[i[u][r]]=n(s)}a[u]=n(u)}for(r=0;r<o.length;r++)a[o[r]]=n(o[r]);return a}(i,n=u(e.children))).forEach(function(t){var a=r[t];if((0,l.isValidElement)(a)){var u=t in i,c=t in n,d=i[t],p=(0,l.isValidElement)(d)&&!d.props.in;c&&(!u||p)?r[t]=(0,l.cloneElement)(a,{onExited:o.bind(null,a),in:!0,exit:s(a,"exit",e),enter:s(a,"enter",e)}):c||!u||p?c&&u&&(0,l.isValidElement)(d)&&(r[t]=(0,l.cloneElement)(a,{onExited:o.bind(null,a),in:d.props.in,exit:s(a,"exit",e),enter:s(a,"enter",e)})):r[t]=(0,l.cloneElement)(a,{in:!1})}}),r),firstRender:!1}},n.handleExited=function(e,t){var n=u(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState(function(t){var n=(0,i.A)({},t.children);return delete n[e.key],{children:n}}))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,i=(0,r.A)(e,["component","childFactory"]),o=this.state.contextValue,u=c(this.state.children).map(n);return(delete i.appear,delete i.enter,delete i.exit,null===t)?l.createElement(a.A.Provider,{value:o},u):l.createElement(a.A.Provider,{value:o},l.createElement(t,i,u))},t}(l.Component);d.propTypes={},d.defaultProps={component:"div",childFactory:function(e){return e}};let p=d},17241:(e,t,n)=>{n.d(t,{A:()=>r});let r=n(96540).createContext(null)},42892:(e,t,n)=>{function r(e,t){return(r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function i(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,r(e,t)}n.d(t,{A:()=>i})}}]);