try{let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="1bc7f59e-9102-4651-9043-72bfb412b196",e._sentryDebugIdIdentifier="sentry-dbid-1bc7f59e-9102-4651-9043-72bfb412b196")}catch(e){}{let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{};e._sentryModuleMetadata=e._sentryModuleMetadata||{},e._sentryModuleMetadata[new e.Error().stack]=Object.assign({},e._sentryModuleMetadata[new e.Error().stack],{"_sentryBundlerPluginAppKey:crazygames-portal":!0})}"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[765],{92372:(e,t,r)=>{r.d(t,{A:()=>g});var n=r(58168),i=r(98587),o=r(96540),a=r(31523),l=r(75659),s=r(51006),d=r(31609);function u(e){return(0,d.Ay)("MuiOption",e)}(0,r(38413).A)("MuiOption",["root","disabled","selected","highlighted"]);var h=r(70189),f=r(74848);let c=["children","component","disabled","label","slotProps","slots","value"],p=o.forwardRef(function(e,t){let{children:r,component:d,disabled:p,label:g,slotProps:b={},slots:m={},value:y}=e,w=(0,i.A)(e,c),A=o.useContext(s.i);if(!A)throw Error("OptionUnstyled must be used within a SelectUnstyled");let v=d||m.root||"li",C={value:y,label:g||r,disabled:p},M=A.getOptionState(C),k=A.getOptionProps(C),x=A.listboxRef,R=(0,n.A)({},e,M),S=o.useRef(null),_=(0,a.A)(t,S);o.useEffect(()=>{if(M.highlighted){if(!x.current||!S.current)return;let e=x.current.getBoundingClientRect(),t=S.current.getBoundingClientRect();t.top<e.top?x.current.scrollTop-=e.top-t.top:t.bottom>e.bottom&&(x.current.scrollTop+=t.bottom-e.bottom)}},[M.highlighted,x]);let E=function(e){let{disabled:t,highlighted:r,selected:n}=e;return(0,l.A)({root:["root",t&&"disabled",r&&"highlighted",n&&"selected"]},u,{})}(R),T=(0,h.A)({elementType:v,externalSlotProps:b.root,externalForwardedProps:w,additionalProps:(0,n.A)({},k,{ref:_}),className:E.root,ownerState:R});return(0,f.jsx)(v,(0,n.A)({},T,{children:r}))}),g=o.memo(p)},39062:(e,t,r)=>{r.d(t,{A:()=>a});var n=r(79071),i=r(67413);let o=(0,r(38413).A)("MuiBox",["root"]),a=(0,i.A)({defaultClassName:o.root,generateClassName:n.A.generate})},15327:(e,t,r)=>{r.d(t,{A:()=>d});var n,i=r(96540),o=r(21529),a=r(67558),l=r(53951);let s=(n||(n=r.t(i,2))).useSyncExternalStore;function d(e,t={}){let r=(0,l.A)(),n="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches:u=!1,matchMedia:h=n?window.matchMedia:null,ssrMatchMedia:f=null,noSsr:c=!1}=(0,a.A)({name:"MuiUseMediaQuery",props:t,theme:r}),p="function"==typeof e?e(r):e;return(void 0!==s?function(e,t,r,n,o){let a=i.useCallback(()=>t,[t]),l=i.useMemo(()=>{if(o&&r)return()=>r(e).matches;if(null!==n){let{matches:t}=n(e);return()=>t}return a},[a,e,n,o,r]),[d,u]=i.useMemo(()=>{if(null===r)return[a,()=>()=>{}];let t=r(e);return[()=>t.matches,e=>(t.addListener(e),()=>{t.removeListener(e)})]},[a,r,e]);return s(u,d,l)}:function(e,t,r,n,a){let[l,s]=i.useState(()=>a&&r?r(e).matches:n?n(e).matches:t);return(0,o.A)(()=>{let t=!0;if(!r)return;let n=r(e),i=()=>{t&&s(n.matches)};return i(),n.addListener(i),()=>{t=!1,n.removeListener(i)}},[e,r]),l})(p=p.replace(/^@media( ?)/m,""),u,h,f,c)}},57515:(e,t,r)=>{r.d(t,{A:()=>R});var n=r(98587),i=r(58168),o=r(96540),a=r(34164),l=r(17437),s=r(75659),d=r(24279),u=r(3552),h=r(6637),f=r(38413),c=r(31609);function p(e){return(0,c.Ay)("MuiSkeleton",e)}(0,f.A)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var g=r(74848);let b=["animation","className","component","height","style","variant","width"],m=e=>e,y,w,A,v,C=e=>{let{classes:t,variant:r,animation:n,hasChildren:i,width:o,height:a}=e;return(0,s.A)({root:["root",r,n,i&&"withChildren",i&&!o&&"fitContent",i&&!a&&"heightAuto"]},p,t)},M=(0,l.i7)(y||(y=m`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),k=(0,l.i7)(w||(w=m`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),x=(0,u.Ay)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.variant],!1!==r.animation&&t[r.animation],r.hasChildren&&t.withChildren,r.hasChildren&&!r.width&&t.fitContent,r.hasChildren&&!r.height&&t.heightAuto]}})(e=>{let{theme:t,ownerState:r}=e,n=String(t.shape.borderRadius).match(/[\d.\-+]*\s*(.*)/)[1]||"px",o=parseFloat(t.shape.borderRadius);return(0,i.A)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,d.X4)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===r.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${o}${n}/${Math.round(o/.6*10)/10}${n}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===r.variant&&{borderRadius:"50%"},"rounded"===r.variant&&{borderRadius:(t.vars||t).shape.borderRadius},r.hasChildren&&{"& > *":{visibility:"hidden"}},r.hasChildren&&!r.width&&{maxWidth:"fit-content"},r.hasChildren&&!r.height&&{height:"auto"})},e=>{let{ownerState:t}=e;return"pulse"===t.animation&&(0,l.AH)(A||(A=m`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),M)},e=>{let{ownerState:t,theme:r}=e;return"wave"===t.animation&&(0,l.AH)(v||(v=m`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),k,(r.vars||r).palette.action.hover)}),R=o.forwardRef(function(e,t){let r=(0,h.A)({props:e,name:"MuiSkeleton"}),{animation:o="pulse",className:l,component:s="span",height:d,style:u,variant:f="text",width:c}=r,p=(0,n.A)(r,b),m=(0,i.A)({},r,{animation:o,component:s,variant:f,hasChildren:!!p.children}),y=C(m);return(0,g.jsx)(x,(0,i.A)({as:s,ref:t,className:(0,a.A)(y.root,l),ownerState:m},p,{style:(0,i.A)({width:c,height:d},u)}))})}}]);