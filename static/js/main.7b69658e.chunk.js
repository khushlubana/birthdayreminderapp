(this.webpackJsonpbirthdayreminderapp=this.webpackJsonpbirthdayreminderapp||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),r=a(9),i=a.n(r),c=(a(14),a(7)),o=a(2),l=(a(15),a(0));function j(e){var t=e.users;return Object(l.jsxs)("div",{className:"navbar",children:[Object(l.jsxs)("div",{className:"logo",children:[Object(l.jsx)("i",{className:"fab fa-algolia fa-2x"}),Object(l.jsx)("h1",{children:"Remind"})]}),Object(l.jsxs)("p",{children:["Users(",t.length,"/100)"]})]})}a(17);function d(e){var t=e.setSignupTrue,a=Object(s.useContext)(g),n=a.loginAuthenticationError,r=a.signInPerson,i=a.signInErrors,c=a.signInChangeHandler,o=a.signInLoginHandler;return Object(l.jsxs)("form",{method:"get",onSubmit:o,children:[Object(l.jsx)("h2",{children:"Sign In"}),Object(l.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(l.jsx)("input",{type:"email",name:"email",value:r.email,onChange:c}),i.email&&Object(l.jsx)("p",{className:"errors",children:i.email}),Object(l.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(l.jsx)("input",{type:"password",name:"password",value:r.password,onChange:c}),i.password&&Object(l.jsx)("p",{className:"errors",children:i.password}),n&&Object(l.jsx)("p",{className:"majorerror",children:n}),Object(l.jsx)("button",{type:"submit",children:"Sign In"}),Object(l.jsx)("p",{children:"OR"}),Object(l.jsx)("button",{type:"button",onClick:t,children:"Create new account"})]})}function m(){var e=Object(s.useContext)(g),t=e.signUpAuthenticationError,a=e.signUpChangeHandler,n=e.signUpSubmitHandler,r=e.signUpPerson,i=e.signUpErrors;return Object(l.jsxs)("form",{method:"get",onSubmit:n,children:[Object(l.jsx)("h2",{children:"Sign Up"}),Object(l.jsx)("label",{htmlFor:"firstName",children:"First Name:"}),Object(l.jsx)("input",{type:"text",name:"firstName",value:r.firstName,onChange:a}),i.firstName&&Object(l.jsx)("p",{className:"errors",children:i.firstName}),Object(l.jsx)("label",{htmlFor:"lastName",children:"Last Name:"}),Object(l.jsx)("input",{type:"text",name:"lastName",value:r.lastName,onChange:a}),i.lastName&&Object(l.jsx)("p",{className:"errors",children:i.lastName}),Object(l.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(l.jsx)("input",{type:"email",name:"email",value:r.email,onChange:a}),i.email&&Object(l.jsx)("p",{className:"errors",children:i.email}),Object(l.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(l.jsx)("input",{type:"password",name:"password",value:r.password,onChange:a}),i.password&&Object(l.jsx)("p",{className:"errors",children:i.password}),Object(l.jsx)("label",{htmlFor:"password",children:" Confirm Password:"}),Object(l.jsx)("input",{type:"password",name:"password2",value:r.password2,onChange:a}),i.password2&&Object(l.jsx)("p",{className:"errors",children:i.password2}),t&&Object(l.jsx)("p",{className:"majorerror",children:t}),Object(l.jsx)("button",{type:"submit",children:"Sign Up"})]})}function u(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),a=t[0],n=t[1];return Object(l.jsxs)("div",{className:"hero",children:[Object(l.jsx)("h1",{children:"Never forget birthdays of your loved ones ever again"}),a?Object(l.jsx)(m,{}):Object(l.jsx)(d,{setSignupTrue:function(){n(!0)}})]})}var b=a(4),O=a(3);a(18);function p(e){var t=e.welcomeFirstName,a=e.activeUser,n=Object(s.useState)({}),r=Object(o.a)(n,2),i=r[0],j=r[1],d=Object(s.useState)(!1),m=Object(o.a)(d,2),u=m[0],p=m[1],g=Object(s.useState)((function(){var e=localStorage.getItem(a.email);return e?JSON.parse(e):[]})),h=Object(o.a)(g,2),f=h[0],x=h[1],v=Object(s.useState)({name:"",relation:"",date:""}),N=Object(o.a)(v,2),S=N[0],w=N[1],E=function(e){var t=e.target,a=t.name,s=t.value;w(Object(O.a)(Object(O.a)({},S),{},Object(b.a)({},a,s)))};Object(s.useEffect)((function(){if(0===Object.keys(i).length&&u){var e={id:(new Date).getTime().toString(),name:S.name,relation:S.relation,date:S.date};x((function(t){return[].concat(Object(c.a)(t),[e])})),w({name:"",relation:"",date:""})}}),[i]),Object(s.useEffect)((function(){localStorage.setItem(a.email,JSON.stringify(f))}),[f]);return Object(l.jsxs)("div",{className:"portfolio",children:[Object(l.jsxs)("h1",{children:["Welcome ",t]}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),p(!0),j(function(e){var t={};return e.name.trim()||(t.name="name required"),e.relation.trim()||(t.relation="relation required"),e.date.trim()||(t.date="date required"),t}(S))},children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(l.jsx)("input",{type:"text",name:"name",value:S.name,onChange:E}),i.name&&Object(l.jsx)("p",{className:"errors",children:i.name}),Object(l.jsx)("label",{htmlFor:"relation",children:"Relation:"}),Object(l.jsx)("input",{type:"text",name:"relation",value:S.relation,onChange:E}),i.relation&&Object(l.jsx)("p",{className:"errors",children:i.relation}),Object(l.jsx)("label",{htmlFor:"date",children:"DOB:"}),Object(l.jsx)("input",{type:"date",name:"date",value:S.date,onChange:E}),i.date&&Object(l.jsx)("p",{className:"errors",children:i.date}),Object(l.jsx)("button",{type:"submit",children:Object(l.jsx)("i",{className:"fas fa-plus fa-2x"})})]}),Object(l.jsx)("div",{className:"card",children:f.map((function(e){return Object(l.jsxs)("div",{className:"cards",children:[Object(l.jsx)("p",{children:Object(l.jsxs)("strong",{children:["Name: ",e.name]})}),Object(l.jsxs)("p",{children:["Relation: ",e.relation]}),Object(l.jsxs)("p",{children:["DOB: ",e.date]}),Object(l.jsx)("button",{onClick:function(){return function(e){console.log("it ran");var t=f.filter((function(t){return t.id!==e}));x(t)}(e.id)},children:"Delete"})]},e.id)}))})]})}a(19);var g=n.a.createContext();function h(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),a=t[0],n=t[1],r=Object(s.useState)(""),i=Object(o.a)(r,2),d=i[0],m=i[1],h=Object(s.useState)(),f=Object(o.a)(h,2),x=f[0],v=f[1],N=Object(s.useState)(),S=Object(o.a)(N,2),w=S[0],E=S[1],I=Object(s.useState)((function(){var e=localStorage.getItem("users");return e?JSON.parse(e):[]})),U=Object(o.a)(I,2),y=U[0],C=U[1],P=Object(s.useState)(!1),F=Object(o.a)(P,2),H=F[0],L=F[1],q=function(){E(W||R.firstName)},k=function(e){var t=e.users,a=Object(s.useState)(!1),n=Object(o.a)(a,2),r=n[0],i=n[1],c=Object(s.useState)({firstName:"",lastName:"",email:"",password:"",password2:""}),l=Object(o.a)(c,2),j=l[0],d=l[1],m=Object(s.useState)({}),u=Object(o.a)(m,2),p=u[0],g=u[1],h=Object(s.useState)(!1),f=Object(o.a)(h,2),x=f[0],v=f[1];return{signUpLoad:r,signUpPerson:j,setsignUpPerson:d,signUpErrors:p,signUpSubmit:x,signUpChangeHandler:function(e){var t=e.target,a=t.name,s=t.value;d(Object(O.a)(Object(O.a)({},j),{},Object(b.a)({},a,s)))},signUpSubmitHandler:function(e){e.preventDefault(),i(!0),g(function(e){var t={};if(e.firstName.trim())for(var a=0;a<e.firstName.length;a++)/^[A-Za-z]+/.test(e.firstName[a])||(t.firstName="Enter a valid name");else t.firstName="First name required";if(e.lastName.trim())for(var s=0;s<e.lastName.length;s++)/^[A-Za-z]+/.test(e.lastName[s])||(t.lastName="Enter a valid name");else t.lastName="Last name required";return e.email?/\S+@\S+\.\S+/.test(e.email)||(t.email="Email address is invalid"):t.email="Email required",e.password?e.password.length<6&&(t.password="Password needs to be 6 characters or more"):t.password="Password is required",e.password2?e.password2!==e.password&&(t.password2="Passwords do not match"):t.password2="Password is required",t}(j)),v(!0),t.forEach((function(e){e.email===j.email&&v(!1)}))}}}({users:y}),A=k.signUpLoad,D=k.signUpChangeHandler,J=k.signUpSubmitHandler,R=k.signUpPerson,B=k.signUpErrors,T=k.signUpSubmit,z=function(e){var t=e.users,a=Object(s.useState)(!1),n=Object(o.a)(a,2),r=n[0],i=n[1],c=Object(s.useState)(""),l=Object(o.a)(c,2),j=l[0],d=l[1],m=Object(s.useState)(!1),u=Object(o.a)(m,2),p=u[0],g=u[1],h=Object(s.useState)({email:"",password:""}),f=Object(o.a)(h,2),x=f[0],v=f[1],N=Object(s.useState)({}),S=Object(o.a)(N,2),w=S[0],E=S[1];return{signInLoad:r,signInFirstName:j,signInLoginSuccess:p,signInPerson:x,signInErrors:w,signInChangeHandler:function(e){var t=e.target,a=t.name,s=t.value;v(Object(O.a)(Object(O.a)({},x),{},Object(b.a)({},a,s)))},signInLoginHandler:function(e){e.preventDefault(),i(!0),E(function(e){var t={};return e.email?/\S+@\S+\.\S+/.test(e.email)||(t.email="Email address is invalid"):t.email="Email required",e.password?e.password.length<6&&(t.password="Password needs to be 6 characters or more"):t.password="Password is required",t}(x)),t.forEach((function(e){e.email===x.email&&e.password===x.password&&(d(e.firstName),g(!0))}))}}}({users:y}),Z=z.signInLoad,W=z.signInFirstName,G=z.signInLoginSuccess,K=z.signInPerson,M=z.signInErrors,Q=z.signInChangeHandler,V=z.signInLoginHandler;return Object(s.useEffect)((function(){0===Object.keys(B).length&&T?(q(),C((function(e){return[].concat(Object(c.a)(e),[R])})),v(R),L(!0)):A&&!T&&m("Email already exists")}),[B]),Object(s.useEffect)((function(){0===Object.keys(M).length&&G?(q(),v(K),L(!0)):Z&&0===Object.keys(M).length&&n("Authentication Failed")}),[M]),Object(s.useEffect)((function(){localStorage.setItem("users",JSON.stringify(y))}),[y]),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(g.Provider,{value:{signUpAuthenticationError:d,signUpChangeHandler:D,signUpSubmitHandler:J,signUpPerson:R,signUpErrors:B,signUpSubmit:T,loginAuthenticationError:a,signInPerson:K,signInErrors:M,signInChangeHandler:Q,signInLoginHandler:V,users:y},children:[Object(l.jsx)(j,{users:y}),H?Object(l.jsx)(p,{welcomeFirstName:w,activeUser:x}):Object(l.jsx)(u,{})]})})}var f=function(){return Object(l.jsx)(h,{})};i.a.render(Object(l.jsx)(f,{}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.7b69658e.chunk.js.map