(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5728:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2798)}])},2798:function(e,s,t){"use strict";t.r(s),t.d(s,{__N_SSG:function(){return es},default:function(){return et}});var a=t(5893),i=t(7294),n=t(6627),c=t.n(n);let r=()=>{window.scrollTo({top:0,behavior:"smooth"})};var l=e=>{let s=e.data[42];return(0,i.useEffect)(()=>{let e=document.getElementById("backToTopBtn"),s=()=>{document.body.scrollTop>20||document.documentElement.scrollTop>20?e.style.opacity=1:e.style.opacity=0};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]),(0,a.jsx)("button",{id:"backToTopBtn",className:c().backToTopBtn,onClick:r,children:(0,a.jsx)("img",{src:s,alt:"image",className:c().imageBtn})})},o=t(5068),d=t.n(o);let m=(e,s,t,a)=>(e/=a/2)<1?t/2*e*e*e+s:t/2*((e-=2)*e*e+2)+s,u=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,t=document.querySelector(e);if(!t)return;let a=t.getBoundingClientRect().top+window.pageYOffset,i=window.scrollY,n=a-i,c=null,r=e=>{null===c&&(c=e);let t=e-c,a=m(t,i,n,s);window.scrollTo(0,a),t<s&&requestAnimationFrame(r)};requestAnimationFrame(r)};var x=e=>{let{to:s,duration:t,children:i}=e;return(0,a.jsx)("a",{href:s,onClick:e=>{e.preventDefault(),u(s,t)},className:d().link,children:i})},v=(e,s,t,a)=>{(0,i.useEffect)(()=>{let i=()=>{let i=window.innerWidth*a;i=Math.max(Math.min(i,t),s),document.querySelectorAll(e).forEach(e=>{e.style.fontSize="".concat(i,"px")})};return window.addEventListener("resize",i),i(),()=>window.removeEventListener("resize",i)},[e,s,t,a])},j=(e,s)=>{(0,i.useEffect)(()=>{let t=()=>{let t;let a=window.innerWidth;t=a>1200?"100":10+a*s,document.querySelectorAll(e).forEach(e=>{e.style.lineHeight="".concat(t,"px")})};return window.addEventListener("resize",t),t(),()=>window.removeEventListener("resize",t)},[e,s])},h=(e,s)=>{(0,i.useEffect)(()=>{let t=()=>{let t;let a=window.innerWidth;t=a>1200?"400":250-a*s,document.querySelectorAll(e).forEach(e=>{e.style.marginTop="".concat(t,"px")})};return window.addEventListener("resize",t),t(),()=>window.removeEventListener("resize",t)},[e,s])},_=()=>(v([".".concat(d().menuItem)],12,60,.04),j([".".concat(d().containerMain)],.08),h([".".concat(d().containerMain)],.01),(0,a.jsxs)("div",{className:d().containerMain,children:[(0,a.jsx)(x,{to:"#anchorSolutions",duration:2e3,children:(0,a.jsx)("div",{className:d().menuItem,children:"SOLUTIONS"})}),(0,a.jsx)(x,{to:"#projects",duration:2500,children:(0,a.jsx)("div",{className:d().menuItem,children:"PROJECTS"})}),(0,a.jsx)(x,{to:"#about",duration:3500,children:(0,a.jsx)("div",{className:d().menuItem,children:"ABOUT"})}),(0,a.jsx)(x,{to:"#experience",duration:4500,children:(0,a.jsx)("div",{className:d().menuItem,children:"EXPERIENCE"})}),(0,a.jsx)(x,{to:"#contact",duration:4500,children:(0,a.jsx)("div",{className:d().menuItem,children:"CONTACT"})})]})),N=t(3110),g=t.n(N),f=(e,s,t,a)=>{(0,i.useEffect)(()=>{let i=()=>{let i;let n=Math.min(window.innerWidth,1200);i=n>s?t+(n-s)*a:t,e.forEach(e=>{document.querySelectorAll(e).forEach(e=>{e.style.height="".concat(i,"px"),e.style.width="".concat(i,"px")})})};return window.addEventListener("resize",i),i(),()=>window.removeEventListener("resize",i)},[e,s,t,a])},p=(e,s)=>{(0,i.useEffect)(()=>{let t=()=>{let t=10+window.innerWidth*s;document.querySelectorAll(e).forEach(e=>{e.style.lineHeight="".concat(t,"px")})};return window.addEventListener("resize",t),t(),()=>window.removeEventListener("resize",t)},[e,s])},I=e=>{let s=e.data[0];return e.data[36],e.data[37],f([".".concat(g().menuIcon),".".concat(g().menuClosed)],300,25,.055),v([".".concat(g().logo)],24,80,.07),v([".".concat(g().slogan)],20,100,.052),p([".".concat(g().slogan)],.03),(0,a.jsxs)("div",{className:g().containerMain,children:[(0,a.jsx)("div",{className:g().header,children:(0,a.jsx)("div",{className:g().logo,children:"G.S"})}),(0,a.jsx)("div",{className:g().slogan,children:"MODERN WEB DEVELOPMENT"}),(0,a.jsx)(_,{}),(0,a.jsx)("img",{src:s,alt:"image",className:g().image})]})},E=t(1497),S=t.n(E),C=(e,s)=>{(0,i.useEffect)(()=>{let t=()=>{let t;let a=window.innerWidth;a>750&&(t=a*s),document.querySelectorAll(e).forEach(e=>{e.style.marginTop="".concat(t,"px")})};return window.addEventListener("resize",t),t(),()=>window.removeEventListener("resize",t)},[e,s])},y=function(e,s){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;(0,i.useEffect)(()=>{let i=new IntersectionObserver((e,s)=>{e.forEach(e=>{e.isIntersecting&&setTimeout(()=>{e.target.style.opacity="".concat(a),e.target.style.transform="translateY(0px)",s.unobserve(e.target)},t)})},{threshold:s});return e.forEach(e=>{e.current&&i.observe(e.current)}),()=>{e.forEach(e=>{e.current&&i.unobserve(e.current)})}},[e,s,t,a])},M=function(e,s){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;(0,i.useEffect)(()=>{let a=new IntersectionObserver((e,s)=>{e.forEach(e=>{e.isIntersecting&&setTimeout(()=>{e.target.style.opacity="1",s.unobserve(e.target)},t)})},{threshold:s});return e.forEach(e=>{e.current&&a.observe(e.current)}),()=>{e.forEach(e=>{e.current&&a.unobserve(e.current)})}},[e,s,t])},w=e=>{let s=e.data[2],t=e.data[40],n=e.data[41],c=e.data[39],r=(0,i.useRef)(null),l=(0,i.useRef)(null),o=(0,i.useRef)(null),d=(0,i.useRef)(null),m=(0,i.useRef)(null);return v([".".concat(S().label),".".concat(S().title)],1,.035),v([".".concat(S().item)],1,.035),v([".".concat(S().responsive)],1,.05),v([".".concat(S().projectsTitle)],20,100,.03),v([".".concat(S().cardHeader)],12,60,.03),v([".".concat(S().feature)],8,16,.01),f([".".concat(S().invertIcon)],300,20,.04),f([".".concat(S().vercelIcon)],300,15,.018),C([".".concat(S().projectsTitle)],.15),y([l],.02,500),M([r],.02),M([o],.02,500),M([m],.2,750),y([d],1,0,.8),(0,a.jsxs)("div",{className:S().containerMain,children:[(0,a.jsx)("div",{className:S().projectsAnchor,id:"projects"}),(0,a.jsxs)("div",{className:S().containerProjects,children:[(0,a.jsx)("div",{className:S().projectsTitle,ref:d,children:"Projects"}),(0,a.jsxs)("div",{className:S().carousel,ref:m,children:[(0,a.jsx)("input",{type:"radio",name:"slider",id:"item1",className:S().item1,defaultChecked:!0}),(0,a.jsx)("input",{type:"radio",name:"slider",id:"item2",className:S().item2}),(0,a.jsx)("input",{type:"radio",name:"slider",id:"item3",className:S().item3}),(0,a.jsxs)("div",{className:S().cards,children:[(0,a.jsxs)("label",{className:S().card,htmlFor:"item1",id:S().card1,children:[(0,a.jsxs)("div",{className:S().cardContent,children:[(0,a.jsx)("h1",{className:S().cardHeader,children:"NEWS"}),(0,a.jsxs)("div",{className:S().features,children:[(0,a.jsx)("div",{className:S().feature,children:"next.js"}),(0,a.jsx)("div",{className:S().feature,children:"HCMS"}),(0,a.jsx)("div",{className:S().feature,children:"nosql serverless"}),(0,a.jsx)("div",{className:S().feature,children:"Node.Js"})]})]}),(0,a.jsx)("img",{className:S().cardImg,src:t,alt:"image"})]}),(0,a.jsxs)("label",{className:S().card,htmlFor:"item2",id:S().card2,children:[(0,a.jsxs)("div",{className:S().cardContent,children:[(0,a.jsx)("h1",{className:S().cardHeader,children:"NoSql CRUD"}),(0,a.jsxs)("div",{className:S().features,children:[(0,a.jsx)("div",{className:S().feature,children:"html css js"}),(0,a.jsx)("div",{className:S().feature,children:"Node.js"}),(0,a.jsx)("div",{className:S().feature,children:"mongo db"}),(0,a.jsx)("div",{className:S().feature,children:"mongoose"})]})]}),(0,a.jsx)("img",{className:S().cardImg,src:c,alt:"image"})]}),(0,a.jsxs)("label",{className:S().card,htmlFor:"item3",id:S().card3,children:[(0,a.jsxs)("div",{className:S().cardContent,children:[(0,a.jsx)("h1",{className:S().cardHeader,children:"Forestry"}),(0,a.jsxs)("div",{className:S().features,children:[(0,a.jsx)("div",{className:S().feature,children:"html"}),(0,a.jsx)("div",{className:S().feature,children:"css"}),(0,a.jsx)("div",{className:S().feature,children:"js"})]})]}),(0,a.jsx)("img",{className:S().cardImg,src:n,alt:"image"})]})]})]})]}),(0,a.jsx)("img",{src:s,alt:"image",className:S().image,ref:r})]})},T=t(9599),b=t.n(T),k=function(e,s,t){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;(0,i.useEffect)(()=>{let i=new IntersectionObserver((e,s)=>{e.forEach(e=>{e.isIntersecting&&setTimeout(()=>{t&&t(e.target),e.target.style.opacity="1",s.unobserve(e.target)},a)})},{threshold:s});return e.forEach(e=>{e.current&&i.observe(e.current)}),()=>{e.forEach(e=>{e.current&&i.unobserve(e.current)})}},[e,s,a,t])},A=(e,s)=>{(0,i.useEffect)(()=>{let t=()=>{let t;let a=window.innerWidth;t=a<1600?a*s:75,document.querySelectorAll(e).forEach(e=>{e.style.left="".concat(t,"%")})};return window.addEventListener("resize",t),t(),()=>window.removeEventListener("resize",t)},[e,s])},L=t(3846),P=t.n(L),R=()=>{let e="Hi, my name is Gerardo.<br/>I ",[s,t]=(0,i.useState)(""),[n,c]=(0,i.useState)(!1),[r,l]=(0,i.useState)(!1),[o,d]=(0,i.useState)(!1),m=(0,i.useRef)(null);A([".".concat(P().containerMain)],.04),v([".".concat(P().terminal)],8,12,.012),k([m],1,()=>{l(!0),setTimeout(()=>{d(!0)},1e3)},2500);let u=["build user interfaces.","build and maintain database and server systems.","integrate third-party services, CMS' and APIs.","develop data-driven applications.","design prototypes.","build cross-platform applications.","develop mobile-first applications."],[x,j]=(0,i.useState)(0),[h,_]=(0,i.useState)(0),[N,g]=(0,i.useState)(""),[f,p]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let a;if(r&&o)return n||(s.length<e.length?a=setTimeout(()=>{t(e.substring(0,s.length+1))},100):c(!0)),n&&(f?x>0?a=setTimeout(()=>{g(N.slice(0,-1)),j(x-1)},50):(p(!1),_((h+1)%u.length)):a=x<u[h].length?setTimeout(()=>{g(N+u[h][x]),j(x+1)},100):setTimeout(()=>{p(!0)},1500)),()=>clearTimeout(a)},[x,h,f,u,N,s,n]),(0,a.jsxs)("div",{className:P().containerMain,ref:m,style:{opacity:r?1:0},children:[(0,a.jsx)("div",{className:P().terminalGlitch}),(0,a.jsx)("div",{className:P().terminal,children:(0,a.jsxs)("div",{id:"typingEffect",className:P().typing,children:[(0,a.jsx)("span",{id:"introText",dangerouslySetInnerHTML:{__html:s}}),(0,a.jsx)("span",{id:"dynamicText",children:N}),(0,a.jsx)("span",{className:P().typingCursor,children:"|"})]})})]})},H=e=>{let s=e.data[38],t=(0,i.useRef)(null),n=(0,i.useRef)(null);return v([".".concat(b().title)],36,90,.06),M([t],.2,1e3),y([n],1,500),(0,a.jsxs)("div",{className:b().containerMain,id:"about",children:[(0,a.jsx)("div",{className:b().title,ref:n,children:"About"}),(0,a.jsx)(R,{}),(0,a.jsx)("img",{src:s,alt:"image",className:b().image,ref:t})]})},F=t(8707),B=t.n(F),z=function(e,s){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;(0,i.useEffect)(()=>{let a=new IntersectionObserver((e,s)=>{e.forEach(e=>{e.isIntersecting&&setTimeout(()=>{e.target.style.filter="saturate(100%)",s.unobserve(e.target)},t)})},{threshold:s});return e.forEach(e=>{e.current&&a.observe(e.current)}),()=>{e.forEach(e=>{e.current&&a.unobserve(e.current)})}},[e,s,t])},O=e=>{let s=(0,i.useRef)(null),t=(0,i.useRef)(null),n=(0,i.useRef)(null),c=(0,i.useRef)(null),r=(0,i.useRef)(null),l=(0,i.useRef)(null),o=e.data[5],d=e.data[33],m=e.data[34];return y([s,t],1,1500),y([n,c,r],1,2500),M([l],.2,500),z([l],.5,4500),f([".".concat(B().icon)],300,5,.02),f([".".concat(B().git)],300,15,.04),v([".".concat(B().title)],16,100,.04),v([".".concat(B().item),".".concat(B().cv)],14,100,.02),(0,a.jsxs)("div",{className:B().containerMain,children:[(0,a.jsx)("div",{className:B().anchor,id:"experience"}),(0,a.jsxs)("div",{className:B().buckets,children:[(0,a.jsxs)("div",{className:B().bucket,children:[(0,a.jsx)("div",{className:B().title,ref:s,children:"Experience"}),(0,a.jsx)("div",{className:B().item,ref:n,children:"Associate - Infosys \xb7 '21–'22"}),(0,a.jsxs)("div",{className:B().cv,ref:r,children:[(0,a.jsx)("div",{children:"CV"}),(0,a.jsx)("a",{href:"https://docs.google.com/document/d/1OwzZzqCRPQMq6j-6Fw8D2yg2M_-q08pFZO61wNdNMvA/export?format=pdf",download:"cv.pdf",className:B().link,children:(0,a.jsx)("img",{src:d,alt:"image",className:B().icon})})]})]}),(0,a.jsxs)("div",{className:B().bucket,children:[(0,a.jsx)("div",{className:B().title,ref:t,children:"Connect"}),(0,a.jsxs)("div",{className:B().item,ref:c,children:[(0,a.jsx)("div",{children:"Github"}),(0,a.jsx)("img",{src:m,alt:"image",className:B().git})]})]})]}),(0,a.jsx)("img",{src:o,alt:"image",className:B().image,ref:l})]})},q=t(5156),J=t.n(q),W=t(2916),Q=t.n(W),G=()=>{let[e,s]=(0,i.useState)({firstName:"",lastName:"",email:"",phone:"",city:"",state:"",message:""}),t=t=>{s({...e,[t.target.name]:t.target.value})};return(0,a.jsx)("div",{className:Q().formContainer,children:(0,a.jsxs)("form",{onSubmit:s=>{s.preventDefault(),console.log(e)},className:Q().form,children:[(0,a.jsx)("input",{type:"text",name:"firstName",placeholder:"First Name",value:e.firstName,onChange:t,className:Q().inputField}),(0,a.jsx)("input",{type:"text",name:"lastName",placeholder:"Last Name",value:e.lastName,onChange:t,className:Q().inputField}),(0,a.jsx)("input",{type:"text",name:"Company",placeholder:"Company",value:e.company,onChange:t,className:Q().inputField}),(0,a.jsxs)("div",{className:Q().containerContact,children:[(0,a.jsx)("input",{type:"text",name:"City",placeholder:"City",value:e.city,onChange:t,className:Q().inputField}),(0,a.jsx)("input",{type:"text",name:"State",placeholder:"State",value:e.state,onChange:t,className:Q().inputField})]}),(0,a.jsxs)("div",{className:Q().containerContact,children:[(0,a.jsx)("input",{type:"text",name:"Phone",placeholder:"Phone",value:e.phone,onChange:t,className:Q().inputField}),(0,a.jsx)("input",{type:"text",name:"Email",placeholder:"Email",value:e.email,onChange:t,className:Q().inputField})]}),(0,a.jsx)("textarea",{name:"message",placeholder:"Your Message",value:e.message,onChange:t,className:"".concat(Q().inputField," ").concat(Q().message)}),(0,a.jsx)("button",{type:"submit",className:Q().submitButton,children:"Submit"})]})})},D=e=>{let s=e.data[28],t=e.data[32];return f([".".concat(J().cfIcon)],300,20,.02),(0,a.jsxs)("div",{className:J().containerMain,id:"contact",children:[(0,a.jsx)("div",{className:J().contactAnchor}),(0,a.jsx)("div",{className:J().title,children:"Contact"}),(0,a.jsxs)("div",{className:J().containerInner,children:[(0,a.jsx)(G,{}),(0,a.jsxs)("div",{className:J().contactInfo,children:[(0,a.jsx)("div",{className:J().contactItem,children:"email \xb7 contact@gerardosanchez.dev"}),(0,a.jsx)("div",{className:J().contactItem,children:"tel \xb7 619-763-2197"}),(0,a.jsx)("div",{className:J().contactItem,children:"loc \xb7 Katy, TX"})]})]}),(0,a.jsxs)("div",{className:J().footer,children:[(0,a.jsx)("div",{className:J().copyright,children:"\xa9 2023 Magis Web Services. All Rights Reserved."}),(0,a.jsxs)("div",{className:J().hosted,children:["Hosted on cloudflare ",(0,a.jsx)("img",{src:t,alt:"image",className:J().cfIcon})]})]}),(0,a.jsx)("img",{src:s,alt:"image",className:J().image})]})},X=t(6434),U=t.n(X),Y=t(5838),V=t.n(Y),Z=e=>{let s=e.data[6],t=e.data[7],n=e.data[11],c=e.data[14],r=e.data[15],l=e.data[9],o=e.data[10],d=e.data[8],m=e.data[26],u=e.data[27],x=e.data[20],j=e.data[21],h=e.data[17],_=e.data[22],N=e.data[12],g=e.data[19],p=e.data[18],I=e.data[24],E=e.data[25],S=e.data[13],C=e.data[34],y=(0,i.useRef)(null);return f([".".concat(V().invertIcon)],200,12,.05),v([".".concat(V().item)],6,50,.01),M([y],.2,2e3),(0,a.jsxs)("div",{className:V().containerMain,ref:y,children:[(0,a.jsxs)("div",{className:V().tickerContent1,children:[(0,a.jsxs)("div",{className:V().item,children:[(0,a.jsx)("img",{src:_,alt:"Express.js",className:V().invertIcon}),(0,a.jsx)("div",{children:"Express.js"})]}),(0,a.jsxs)("div",{className:V().item,children:[(0,a.jsx)("img",{src:I,alt:"C#",className:V().invertIcon}),(0,a.jsx)("div",{children:"C#"})]}),(0,a.jsxs)("div",{className:V().item,children:[(0,a.jsx)("img",{src:n,alt:"Angular",className:V().invertIcon}),(0,a.jsx)("div",{children:"Angular"})]}),(0,a.jsxs)("div",{className:V().item,children:[(0,a.jsx)("img",{src:c,alt:"Bootstrap",className:V().invertIcon}),(0,a.jsx)("div",{children:"Bootstrap"})]}),(0,a.jsxs)("div",{className:V().item,children:[(0,a.jsx)("img",{src:r,alt:"Material-UI",className:V().invertIcon}),(0,a.jsx)("div",{children:"Material-UI"})]}),(0,a.jsxs)("div",{className:V().item,children:[(0,a.jsx)("img",{src:l,alt:"HTML",className:V().invertIcon}),(0,a.jsx)("div",{children:"HTML"})]}),(0,a.jsxs)("div",{className:V().item,children:[(0,a.jsx)("img",{src:o,alt:"CSS",className:V().invertIcon}),(0,a.jsx)("div",{children:"CSS"})]}),(0,a.jsxs)("div",{className:V().item,children:[(0,a.jsx)("img",{src:d,alt:"JavaScript",className:V().invertIcon}),(0,a.jsx)("div",{children:"JavaScript"})]}),(0,a.jsxs)("div",{className:V().item,children:[(0,a.jsx)("img",{src:m,alt:"Cloudflare",className:V().invertIcon}),(0,a.jsx)("div",{children:"Cloudflare"})]}),(0,a.jsxs)("div",{className:V().item,children:[(0,a.jsx)("img",{src:u,alt:"Vercel",className:V().invertIcon}),(0,a.jsx)("div",{children:"Vercel"})]}),(0,a.jsxs)("div",{className:V().item,children:[(0,a.jsx)("img",{src:x,alt:"SQL Server",className:V().invertIcon}),(0,a.jsx)("div",{children:"SQL Server"})]}),(0,a.jsxs)("div",{className:V().item,children:[(0,a.jsx)("img",{src:j,alt:"MySQL",className:V().invertIcon}),(0,a.jsx)("div",{children:"MySQL"})]}),(0,a.jsxs)("div",{className:V().item,children:[(0,a.jsx)("img",{src:h,alt:"Sequelize",className:V().invertIcon}),(0,a.jsx)("div",{children:"Sequelize"})]}),(0,a.jsxs)("div",{className:V().item,children:[(0,a.jsx)("img",{src:N,alt:"Node.js",className:V().invertIcon}),(0,a.jsx)("div",{children:"Node.js"})]}),(0,a.jsxs)("div",{className:V().item,children:[(0,a.jsx)("img",{src:g,alt:"MongoDB",className:V().invertIcon}),(0,a.jsx)("div",{children:"MongoDB"})]}),(0,a.jsxs)("div",{className:V().item,children:[(0,a.jsx)("img",{src:p,alt:"Mongoose",className:V().invertIcon}),(0,a.jsx)("div",{children:"Mongoose"})]}),(0,a.jsxs)("div",{className:V().item,children:[(0,a.jsx)("img",{src:S,alt:".NET",className:V().invertIcon}),(0,a.jsx)("div",{children:".NET"})]}),(0,a.jsxs)("div",{className:V().item,children:[(0,a.jsx)("img",{src:E,alt:"Java",className:V().invertIcon}),(0,a.jsx)("div",{children:"Java"})]}),(0,a.jsxs)("div",{className:V().item,children:[(0,a.jsx)("img",{src:C,alt:"Git",className:V().invertIcon}),(0,a.jsx)("div",{children:"Git"})]}),(0,a.jsxs)("div",{className:V().item,children:[(0,a.jsx)("img",{src:s,alt:"Next.js",className:V().invertIcon}),(0,a.jsx)("div",{children:"Next.js"})]}),(0,a.jsxs)("div",{className:V().item,children:[(0,a.jsx)("img",{src:t,alt:"React",className:V().invertIcon}),(0,a.jsx)("div",{children:"React"})]})]}),(0,a.jsxs)("div",{className:V().tickerContent2,children:[(0,a.jsxs)("div",{className:V().item,children:[(0,a.jsx)("img",{src:_,alt:"Express.js",className:V().invertIcon}),(0,a.jsx)("div",{children:"Express.js"})]}),(0,a.jsxs)("div",{className:V().item,children:[(0,a.jsx)("img",{src:I,alt:"C#",className:V().invertIcon}),(0,a.jsx)("div",{children:"C#"})]}),(0,a.jsxs)("div",{className:V().item,children:[(0,a.jsx)("img",{src:n,alt:"Angular",className:V().invertIcon}),(0,a.jsx)("div",{children:"Angular"})]}),(0,a.jsxs)("div",{className:V().item,children:[(0,a.jsx)("img",{src:c,alt:"Bootstrap",className:V().invertIcon}),(0,a.jsx)("div",{children:"Bootstrap"})]}),(0,a.jsxs)("div",{className:V().item,children:[(0,a.jsx)("img",{src:r,alt:"Material-UI",className:V().invertIcon}),(0,a.jsx)("div",{children:"Material-UI"})]}),(0,a.jsxs)("div",{className:V().item,children:[(0,a.jsx)("img",{src:l,alt:"HTML",className:V().invertIcon}),(0,a.jsx)("div",{children:"HTML"})]}),(0,a.jsxs)("div",{className:V().item,children:[(0,a.jsx)("img",{src:o,alt:"CSS",className:V().invertIcon}),(0,a.jsx)("div",{children:"CSS"})]}),(0,a.jsxs)("div",{className:V().item,children:[(0,a.jsx)("img",{src:d,alt:"JavaScript",className:V().invertIcon}),(0,a.jsx)("div",{children:"JavaScript"})]}),(0,a.jsxs)("div",{className:V().item,children:[(0,a.jsx)("img",{src:m,alt:"Cloudflare",className:V().invertIcon}),(0,a.jsx)("div",{children:"Cloudflare"})]}),(0,a.jsxs)("div",{className:V().item,children:[(0,a.jsx)("img",{src:u,alt:"Vercel",className:V().invertIcon}),(0,a.jsx)("div",{children:"Vercel"})]}),(0,a.jsxs)("div",{className:V().item,children:[(0,a.jsx)("img",{src:x,alt:"SQL Server",className:V().invertIcon}),(0,a.jsx)("div",{children:"SQL Server"})]}),(0,a.jsxs)("div",{className:V().item,children:[(0,a.jsx)("img",{src:j,alt:"MySQL",className:V().invertIcon}),(0,a.jsx)("div",{children:"MySQL"})]}),(0,a.jsxs)("div",{className:V().item,children:[(0,a.jsx)("img",{src:h,alt:"Sequelize",className:V().invertIcon}),(0,a.jsx)("div",{children:"Sequelize"})]}),(0,a.jsxs)("div",{className:V().item,children:[(0,a.jsx)("img",{src:N,alt:"Node.js",className:V().invertIcon}),(0,a.jsx)("div",{children:"Node.js"})]}),(0,a.jsxs)("div",{className:V().item,children:[(0,a.jsx)("img",{src:g,alt:"MongoDB",className:V().invertIcon}),(0,a.jsx)("div",{children:"MongoDB"})]}),(0,a.jsxs)("div",{className:V().item,children:[(0,a.jsx)("img",{src:p,alt:"Mongoose",className:V().invertIcon}),(0,a.jsx)("div",{children:"Mongoose"})]}),(0,a.jsxs)("div",{className:V().item,children:[(0,a.jsx)("img",{src:S,alt:".NET",className:V().invertIcon}),(0,a.jsx)("div",{children:".NET"})]}),(0,a.jsxs)("div",{className:V().item,children:[(0,a.jsx)("img",{src:E,alt:"Java",className:V().invertIcon}),(0,a.jsx)("div",{children:"Java"})]}),(0,a.jsxs)("div",{className:V().item,children:[(0,a.jsx)("img",{src:C,alt:"Git",className:V().invertIcon}),(0,a.jsx)("div",{children:"Git"})]}),(0,a.jsxs)("div",{className:V().item,children:[(0,a.jsx)("img",{src:s,alt:"Next.js",className:V().invertIcon}),(0,a.jsx)("div",{children:"Next.js"})]}),(0,a.jsxs)("div",{className:V().item,children:[(0,a.jsx)("img",{src:t,alt:"React",className:V().invertIcon}),(0,a.jsx)("div",{children:"React"})]})]})]})},K=e=>{let s=e.data[35],t=(0,i.useRef)(null),n=(0,i.useRef)(null),c=(0,i.useRef)(null);return M([t],.4),M([n],1,1e3),M([c],1,1500),v([".".concat(U().title)],18,100,.03),v([".".concat(U().builtWith)],16,100,.022),(0,a.jsxs)("div",{className:U().containerMain,children:[(0,a.jsx)("div",{className:U().anchorSolutions,id:"anchorSolutions"}),(0,a.jsx)("div",{className:U().title,ref:n,children:"Responsive Full-Stack Applications"}),(0,a.jsx)("div",{className:U().builtWith,ref:c,children:"Built With"}),(0,a.jsx)(Z,{data:e.data}),(0,a.jsx)("img",{src:s,alt:"image",className:U().image,ref:t})]})},$=t(9622),ee=t.n($),es=!0,et=e=>{let{params:s}=e,t=s.imgUrls;return(0,a.jsxs)("div",{className:ee().containerMain,children:[(0,a.jsx)(I,{data:t}),(0,a.jsx)(K,{data:t}),(0,a.jsx)(w,{data:t}),(0,a.jsx)(H,{data:t}),(0,a.jsx)(O,{data:t}),(0,a.jsx)(D,{data:t}),(0,a.jsx)(l,{data:t})]})}},9599:function(e){e.exports={containerMain:"About_containerMain__xgldu",image:"About_image__4zDkh",title:"About_title__EroSr"}},5156:function(e){e.exports={containerMain:"Contact_containerMain__f5_XO",image:"Contact_image__m2TA0",contactAnchor:"Contact_contactAnchor__cd4WT",title:"Contact_title__18Z0u",containerInner:"Contact_containerInner__6T23P",contactInfo:"Contact_contactInfo__ExCYh",contactItem:"Contact_contactItem__Jx_CN",footer:"Contact_footer__Q8edu",copyright:"Contact_copyright__JFX7G",hosted:"Contact_hosted__hhZMs",cfIcon:"Contact_cfIcon__Ie_E4"}},8707:function(e){e.exports={anchor:"Experience_anchor__Qph8e",containerMain:"Experience_containerMain__dXSoT",image:"Experience_image__8tnYC",buckets:"Experience_buckets__OZq7W",bucket:"Experience_bucket__d2yaf",item:"Experience_item__pGX_J",cv:"Experience_cv__qgJHB",title:"Experience_title__4_3sY",items:"Experience_items__fpHh0",icon:"Experience_icon__7Y2Va",git:"Experience_git__l30ii",link:"Experience_link__bgeQO"}},2916:function(e){e.exports={formContainer:"Form_formContainer__kHlFN",form:"Form_form__hsBmc",inputField:"Form_inputField__z2rES",message:"Form_message__ouZmk",submitButton:"Form_submitButton__PZvVf",containerContact:"Form_containerContact__nQdd2"}},3110:function(e){e.exports={containerMain:"Hero_containerMain__B6wKN",image:"Hero_image__nZVM8",header:"Hero_header__E7xf_",menuIcon:"Hero_menuIcon__7wwhW",menuClosed:"Hero_menuClosed__8Mj6x",menuActive:"Hero_menuActive__7kZOE",menuInactive:"Hero_menuInactive__Q61dE",openMenu:"Hero_openMenu__VDSj2",logo:"Hero_logo__tx7va",fadeInDown:"Hero_fadeInDown__lpkCS",slogan:"Hero_slogan__PSfYQ",fadeIn:"Hero_fadeIn__dsqx4",active:"Hero_active__U6UVJ"}},5068:function(e){e.exports={containerMain:"Menu_containerMain__dOp1u",fadeInRight:"Menu_fadeInRight__hN4ck",active:"Menu_active__gTTjb",link:"Menu_link__jJIRm",menuItem:"Menu_menuItem__Y3fvW"}},6627:function(e){e.exports={backToTopBtn:"Nav_backToTopBtn__Lvsd7",hidden:"Nav_hidden__4ynyA",imageBtn:"Nav_imageBtn__msOQD"}},1497:function(e){e.exports={containerMain:"Projects_containerMain__8eaUs",image:"Projects_image__vJi1J",item:"Projects_item__UWLMB",projectsAnchor:"Projects_projectsAnchor__nwsf5",containerProjects:"Projects_containerProjects__tJFA7",projectsTitle:"Projects_projectsTitle__3p7xX",carousel:"Projects_carousel__xK20c",cards:"Projects_cards__m2BnA",card:"Projects_card__71oQa",cardContent:"Projects_cardContent__nsepX",cardHeader:"Projects_cardHeader__4nqgr",features:"Projects_features__OwTui",feature:"Projects_feature__56tza",cardImg:"Projects_cardImg__XhlA7",item1:"Projects_item1__k2a0z",card3:"Projects_card3___KytG",item2:"Projects_item2___XFS8",card1:"Projects_card1__O1ms7",item3:"Projects_item3__WQkD9",card2:"Projects_card2__RO8t8"}},6434:function(e){e.exports={anchorSolutions:"Solutions_anchorSolutions__e35Y7",containerMain:"Solutions_containerMain__1xAia",image:"Solutions_image__SOMLj",title:"Solutions_title___76F3",builtWith:"Solutions_builtWith__e79Qv"}},3846:function(e){e.exports={containerMain:"Terminal_containerMain__p_lxG",terminalGlitch:"Terminal_terminalGlitch__tx7HL","terminal-glitch":"Terminal_terminal-glitch__sIhv1",terminal:"Terminal_terminal__JsuHf",typing:"Terminal_typing__p7bTo",typingCursor:"Terminal_typingCursor__jJYXe",blink:"Terminal_blink__lzjfQ"}},5838:function(e){e.exports={containerMain:"Ticker_containerMain__kP9Of",tickerContent1:"Ticker_tickerContent1__ckAxR",ticker1:"Ticker_ticker1__x6cpB",tickerContent2:"Ticker_tickerContent2__GoKLx",ticker2:"Ticker_ticker2__iITmI",invertIcon:"Ticker_invertIcon__kGF25",item:"Ticker_item__vxB1H"}},9622:function(e){e.exports={containerMain:"home_containerMain__Aeuhh"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5728)}),_N_E=e.O()}]);