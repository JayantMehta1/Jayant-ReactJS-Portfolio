(this["webpackJsonpjayant-react-website"]=this["webpackJsonpjayant-react-website"]||[]).push([[0],{45:function(e,n,t){e.exports=t(65)},50:function(e,n,t){},53:function(e,n,t){},65:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(17),i=t.n(o),l=(t(50),t(33)),c=t(34),s=t(42),m=t(40),u=t(13),d=t(38),p=t(24),f=(t(53),t(39)),g=t(2),h=[{name:"Email",brand:!1,myURL:"mailto: jayant.mehta@uwaterloo.ca",iconClass:"envelope"},{name:"GitHub",brand:!0,myURL:"https://github.com/JayantMehta1",iconClass:["fab","github"]},{name:"LinkedIn",brand:!0,myURL:"https://www.linkedin.com/in/jayant-mehta",iconClass:["fab","linkedin"]}],E=t(23),v=function(e){var n=e.mediaProfiles,t=n.filter((function(e){return!0===e.brand})),a=n.filter((function(e){return!1===e.brand}));return r.a.createElement(r.a.Fragment,null,a.map((function(e,n){return r.a.createElement("a",{href:e.myURL,target:"_blank"},r.a.createElement("span",{class:"iconCSS"},r.a.createElement(E.a,{icon:e.iconClass,size:"3x",color:"black"})))})),t.map((function(e,n){return r.a.createElement("a",{href:e.myURL,target:"_blank"},r.a.createElement("span",{class:"iconCSS"},r.a.createElement(E.a,{icon:e.iconClass,size:"3x",color:"black"})))})))},y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"intro"},r.a.createElement("h1",{id:"name"},"Jayant Mehta"),r.a.createElement("h3",{id:"bio"},"University of Waterloo"),r.a.createElement("h3",{id:"bio"},"Systems Design Engineering"),r.a.createElement("img",{id:"profileIMG",src:"/jayant-react-website-process/profile.jpg",alt:"ProfilePic"}),r.a.createElement("div",{class:"mediaSpacingIntro"},r.a.createElement(v,{mediaProfiles:h}))))},b=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"about"},r.a.createElement("h1",null,"About"),r.a.createElement("p",null,"Hi, my name is Jayant! I am a second year student studying Systems Design Engineering at the University of Waterloo. I am currently seeking Summer 2021 internships in software development and product management roles."),r.a.createElement("p",null,"With a passion for software development, I am motivated to ship code that directly impacts users in production. I follow my passion through internships, hackathons, and projects. If you want to grab coffee (virtually) or connect for a chat, I'd love to meet you."),r.a.createElement("p",null,"Outside of my development projects and work, I enjoy coaching swimming as a swim instructor, playing basketball, and table tennis. You can also find me hiking in the trails with my dog Oscar, especially during the summer months :).")))},w=function(e){var n=e.experienceProfiles;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"experience"},r.a.createElement("h1",null,"Experience"),r.a.createElement("div",{class:"row"},n.map((function(e,n){return r.a.createElement("div",{class:"card"},r.a.createElement("img",{class:"cardIMG",src:"/jayant-react-website-process/companyImages/"+e.imageName,alt:"Avatar"}),r.a.createElement("div",{class:"card-body"},r.a.createElement("h4",null,e.company),r.a.createElement("h5",null,e.title),r.a.createElement("p",null,e.timeline),r.a.createElement("a",{href:"#",class:"btn"},"Read more")))})))))},k=[{company:"Oracle",title:"Software Developer and SDET Intern",timeline:"Sep 2020 - Present",imageName:"oracle.png"},{company:"Government of Canada",title:"IT Full Stack Developer",timeline:"Jan - Apr 2020",imageName:"gov_canada.png"},{company:"Design Net Specific",title:"Web Developer",timeline:"Jul - Aug 2019",imageName:"design.jpg"},{company:"Microsoft",title:"Student Learn Ambassador Program",timeline:"Apr 2020 - Present",imageName:"microsoft.jpeg"}],j=function(e){var n=e.projectProfiles;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"projects"},r.a.createElement("h1",null,"Projects"),r.a.createElement("div",{class:"row"},n.map((function(e,n){return r.a.createElement("div",{class:"card"},r.a.createElement("img",{class:"cardIMG",src:"/jayant-react-website-process/projectImages/"+e.imageName,alt:"Avatar"}),r.a.createElement("div",{class:"card-body"},r.a.createElement("h4",null,e.name),r.a.createElement("h5",null,e.description),r.a.createElement("p",null,e.skills),r.a.createElement("a",{href:"#",class:"btn"},"Read more")))})))))},x=[{name:"Facebook AI Hackathon",description:"Google Cloud Vision image recognition to post ads to matching Facebook groups",skills:"Python, PyTorch, Google Vision, React.js, Flask, JSON, AJAX",imageName:"fbg.jpg"},{name:"Air Quality Analyzer",description:"A Vue.js Analyzer to compare and compute air qualities for thousands of cities around the world.",skills:"JavaScript, Vue.js, HTML, CSS",imageName:"air.jpg"},{name:"Angular Motion Game",description:"A game in Java using object-oriented programming, data structures, and algorithms",skills:"Java",imageName:"angular.png"},{name:"Biometrics Bicycle Lock",description:"Provincial Finalist in Innovation by DECA Ontario",skills:"C++, Arduino, Fingerprint Sensor",imageName:"deca.png"}],S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"contact"},r.a.createElement("h1",null,"Contact"),r.a.createElement("p",null,"Thanks for visiting! You can email me at jayant.mehta@uwaterloo.ca or connect with me below."),r.a.createElement("div",null,r.a.createElement(v,{mediaProfiles:h})),r.a.createElement("p",null,"Developed and Designed by Jayant Mehta"),r.a.createElement("p",null,"Jayant Mehta \xa9 2020")))},C=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null),r.a.createElement("div",{id:"page-body"},r.a.createElement(b,null),r.a.createElement(w,{experienceProfiles:k}),r.a.createElement(j,{projectProfiles:x})),r.a.createElement(S,null))},A=t(9),I=t(10),P=t(41),J=t(7);function O(){var e=Object(A.a)(["\n  font-family: 'Open Sans', sans-serif;\n  font-weight: bold;\n  list-style: none;\n  display: flex;\n  flex-flow: row nowrap;\n  a {\n    color: white;\n    cursor: pointer;\n    text-decoration: none;\n  }\n  a:hover {\n    color: rgb(58, 170, 204);\n  } \n\n  @media (max-width: 768px) {\n    flex-flow: column nowrap;\n    background-color: #0D2538;\n    position: fixed;\n    transform: ",";\n    top: 0;\n    right: 0;\n    height: 100vh;\n    width: 300px;\n    padding-top: 3.5rem;\n    transition: transform 0.3s ease-in-out;\n    li {\n      color: #fff;\n      padding: 18px 10px;\n\n    }\n    a {\n      color: #fff;\n    }\n  }\n"]);return O=function(){return e},e}var F=I.a.ul(O(),(function(e){return e.open?"translateX(0)":"translateX(100%)"})),L=function(e){var n=e.open;return r.a.createElement(F,{open:n},r.a.createElement("li",null,r.a.createElement(J.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:-70,duration:500},"About Me")),r.a.createElement("li",null,r.a.createElement(J.Link,{activeClass:"active",to:"experience",spy:!0,smooth:!0,offset:-70,duration:500},"Experience")),r.a.createElement("li",null,r.a.createElement(J.Link,{activeClass:"active",to:"projects",spy:!0,smooth:!0,offset:-70,duration:500},"Projects")),r.a.createElement("li",null,r.a.createElement(J.Link,{activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:-70,duration:500},"Contact")),r.a.createElement("li",null,r.a.createElement("a",{href:"/jayant-react-website-process/static/JayantMehtaResume.pdf",target:"_blank"},"Resume")))};function M(){var e=Object(A.a)(["\n  width: 2rem;\n  height: 2rem;\n  position: fixed;\n  top: 15px;\n  right: 20px;\n  z-index: 20;\n  display: none;\n  @media (max-width: 768px) {\n    display: flex;\n    justify-content: space-around;\n    flex-flow: column nowrap;\n  }\n  div {\n    width: 2rem;\n    height: 0.25rem;\n    background-color: ",";\n    border-radius: 10px;\n    transform-origin: 1px;\n    transition: all 0.3s linear;\n    &:nth-child(1) {\n      transform: ",";\n    }\n    &:nth-child(2) {\n      transform: ",";\n      opacity: ",";\n    }\n    &:nth-child(3) {\n      transform: ",";\n    }\n  }\n"]);return M=function(){return e},e}var N=I.a.div(M(),(function(e){return e.open?"#ccc":"white"}),(function(e){return e.open?"rotate(45deg)":"rotate(0)"}),(function(e){return e.open?"translateX(100%)":"translateX(0)"}),(function(e){return e.open?0:1}),(function(e){return e.open?"rotate(-45deg)":"rotate(0)"})),D=function(){var e=Object(a.useState)(!1),n=Object(P.a)(e,2),t=n[0],o=n[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,{open:t,onClick:function(){return o(!t)}},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement(L,{open:t}))};function R(){var e=Object(A.a)(["\n  font-family: 'Open Sans', sans-serif;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  border-bottom: 4px solid black;\n  padding: 0 20px;\n  display: flex;\n  background-color: black;\n  font-weight: bold;\n\n  \n  .logo {\n    padding: 15px 0;\n    color: white;\n  }\n  .options {\n    justify-content: center;\n  }\n\n  a {\n    color: white;\n    cursor:pointer;\n    padding: 12px;\n    text-decoration: none;\n  }\n  a:hover {\n    color: rgb(58, 170, 204);\n  } \n\n"]);return R=function(){return e},e}var G=I.a.nav(R()),U=function(){return r.a.createElement(G,null,r.a.createElement(J.Link,{activeClass:"active",to:"intro",spy:!0,smooth:!0,offset:-70,duration:500},"Jayant Mehta"),r.a.createElement("div",{className:"options"},r.a.createElement(D,null)))};u.b.add(d.a,p.a,p.b);var W=function(e){Object(s.a)(t,e);var n=Object(m.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(U,null),r.a.createElement("div",null,r.a.createElement(g.c,null,r.a.createElement(g.a,{path:"/",component:C,exact:!0})))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.10824d9c.chunk.js.map