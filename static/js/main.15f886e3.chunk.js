(this.webpackJsonpus_todo_recruitment_task=this.webpackJsonpus_todo_recruitment_task||[]).push([[0],{41:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(34),r=a.n(n),o=(a(41),a(2)),i=a(0),d=c.a.createContext(),l=function(e){var t=e.children,a=Object(s.useState)([]),c=Object(o.a)(a,2),n=c[0],r=c[1],l=Object(s.useState)(""),j=Object(o.a)(l,2),u=j[0],b=j[1],m=Object(s.useState)(),O=Object(o.a)(m,2),h=O[0],A=O[1],f=Object(s.useState)(),p=Object(o.a)(f,2),g=p[0],x=p[1],k=Object(s.useState)(!1),v=Object(o.a)(k,2),C=v[0],S=v[1],T=n.filter((function(e){return e.name.includes(u)}));return Object(s.useEffect)((function(){if(!0===localStorage.hasOwnProperty("jwt")){var e=localStorage.getItem("jwt");A(e)}}),[]),Object(i.jsx)(d.Provider,{value:{todoList:n,setTodoList:r,filterPhrase:u,setFilterPhrase:b,filteredTodos:T,jwt:h,setJwt:A,sortedBy:g,setSortedBy:x,order:C,setOrder:S},children:t})},j=function(){return Object(s.useContext)(d)},u=a(3),b=a(36),m=a(4),O=a(12),h=a(13),A=a.n(h),f=a(16),p=a(8),g=a(6),x=a.n(g),k=function(){var e=Object(m.f)(),t=Object(s.useState)(),a=Object(o.a)(t,2),c=a[0],n=a[1],r=Object(s.useState)(null),d=Object(o.a)(r,2),l=d[0],b=d[1],h=j().setJwt,g=function(e){n(Object(u.a)(Object(u.a)({},c),{},Object(p.a)({},e.currentTarget.id,e.currentTarget.value)))};Object(s.useEffect)((function(){!0===localStorage.hasOwnProperty("jwt")&&e.push("/to-do-lists")}),[e]);var k=function(){var t=Object(f.a)(A.a.mark((function t(a){var s;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),b(null),t.prev=2,t.next=5,x.a.post("https://recruitment.ultimate.systems/auth/local",{identifier:c.identifier,password:c.password});case 5:if(s=t.sent,h(s.data.jwt),localStorage.setItem("jwt",s.data.jwt),s.data.user){t.next=10;break}throw new Error("Cannot login. Please try again.");case 10:e.push("/to-do-lists"),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(2),b(!0);case 16:case"end":return t.stop()}}),t,null,[[2,13]])})));return function(e){return t.apply(this,arguments)}}();return Object(s.useEffect)((function(){var e=setTimeout((function(){b(null)}),2e3);return function(){return clearTimeout(e)}}),[l]),Object(i.jsx)("div",{className:"login-page",children:Object(i.jsxs)("form",{className:"login-form",onSubmit:function(e){return k(e,c)},children:[Object(i.jsx)("h1",{className:"login-title",children:"Login"}),Object(i.jsxs)("div",{className:"login-inputs",children:[Object(i.jsx)("input",{className:"identifier-login-input",onChange:g,required:!0,type:"text",id:"identifier",placeholder:"Username or email:"}),Object(i.jsx)("input",{className:"password-login-input",onChange:g,required:!0,type:"password",id:"password",placeholder:"Password"})]}),l&&Object(i.jsx)("p",{className:"invalid-data",children:"Invalid login data"}),Object(i.jsx)("div",{className:"login-form-buttons",children:Object(i.jsx)("button",{className:"login-button",children:"Login"})}),Object(i.jsx)("p",{className:"or-text",children:"or"}),Object(i.jsx)("button",{className:"register-button",children:Object(i.jsx)(O.c,{to:"/register",children:"create an account"})})]})})},v=function(){var e=j(),t=e.setJwt,a=e.setOrder,s=localStorage.getItem("jwt"),c=Object(m.f)(),n=function(){var e=Object(f.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("jwt"),t(""),a(!1),c.push("/#/"),window.location.reload();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.jsxs)("div",{className:"navbar",children:[Object(i.jsx)("p",{className:"logo",children:"ToDo-List"}),s&&Object(i.jsx)("div",{children:Object(i.jsx)("img",{alt:"logout",className:"logout-button",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAABVCAYAAAA49ahaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARKSURBVHgB7Z1fbtMwHMe/zqaJN3oDwgkYNxgngJ1g3QOaEA/bDVZOwHhAaIC07gSUEyycYL3Bwg3GG2Jrw+/npF00NW1jx7Hj+jNFi5Rqfz618/v5F9sVKJFdoId7HCPDGzp24T4pBB0TXNJ5It7RuQOI2Un2HQf0x53RaQ/dJEWEoXiLD7CMlJqdU8sEfsAHBMbUOPZttlqRfUFM7/AVncfwhxQ7eCkOcQsLRHT04ZdQJsadvZ4X0ddr+EiGveK21jrcUrsQ5dUQlMnY+LX0bmZon9sioHCkTqHClLKUiBpEhFMsu31N8YqCVoIW2YYdetw9SQgfA400aEyBNqGfcY2qVDCSPTFBi0SwzRSD7CsuoIhMnTKZ/Fe8AC/QMvalMhn6dBs6gSoZ3Uocwg2pOafwBJek9rLPfmQiLkmdBZXO45ZUTwhSDRCkGsBW8u8cMkhGcgCR6pYNN76lcumTBh9X1LyuZQk0wk32TS+9C92fRfKQuQyP8jTEbrRUaqGcwsULL2qI3eyWOlnxPE5RrC9S08orE/yCDgpivZAq66XTheVDjuRD6FJTrDfdn+QN6J8/pKCTyIMl08M/NEUNsV7lqUWrHMIUuVisKqqHlKoua7TYIFWFFWKDVFWWiA1SdagQG6TqskCsF9FfzgdTYRtPSYo+j7KCTkulsTvPpR1AdfpnE0IfftZcbGelUuvsk9AzuASLPcef7t5TIzvzpNbguMuBKoabxN2VKtyalVJi3F2pE/tz+xcyxafOSi2mR+7LipQrUGWMizqdTqnEEUb0bQRFKIPYK9Y76JMLHfBpGFE1QUkoE6Tq8kgoE6TqsEAoE6SqUiGUCVJVWCKUCVLrskIo482Dv/kK8KlcwdijEdeIBwiNrlFdQyjjT0vlZZNT+Q/HyJcU9TkHlbKbYE2hjBdSZRL/eJJZToy/GqteZtQQyvjSUuPKK1t4Bh1qCmU2PVClS68qCGU2WmoRxBbXDhSFMiGl2sEhCSwvw7zlOVmqQpmNn/Nf7F7RpyzhhIJar4kULCykKCjkNrI9SOj+BghSDRCkGiBINUCQaoAg1QBBqgGCVAMEqQbwv/RnAT+kRjiovDbBb7RMt2dS86OSO3ykqn9c/aL2Zwfa2uuvijE9sFu3qNErZC57BpWKIzxHy7jWUncbfYsz/IQFfI7+qa01Af5Kzav3KSzAUq3s22yQ2eOQBJaIHJ47r0KKe7kJ7RAW2ZbbYUQLJyJ0h3zjhEvbMmcImev9ww1c+NAEQVLq7HkSUVffQWJr6/kq8g9PaHLuuw75vXCIjiOjv7yp38v9RlIEtJmnVOI9BSzeyIU3d4FXwat1RNUFudybP+1nSxYr2tks1pPuL9Z5UWuCLezJb4K1pJYxKNhK8cMEtaWWaVSwJ12f0ZJaRlPwiFrpPjyhMallagnmaYxPcOJaAq+DEall5oL5I5qEFMzF5RSYDy0TeMZ/RAljx4GdTREAAAAASUVORK5CYII=",onClick:n})})]})},C=function(){var e=Object(m.f)(),t=Object(s.useState)(),a=Object(o.a)(t,2),c=a[0],n=a[1],r=Object(s.useState)(null),d=Object(o.a)(r,2),l=d[0],j=d[1],b=function(e){n(Object(u.a)(Object(u.a)({},c),{},Object(p.a)({},e.currentTarget.id,e.currentTarget.value)))};return Object(s.useEffect)((function(){!0===localStorage.hasOwnProperty("jwt")&&e.push("/to-do-lists")}),[e]),Object(s.useEffect)((function(){var e=setTimeout((function(){j(null)}),2e3);return function(){return clearTimeout(e)}}),[l]),Object(i.jsx)("div",{className:"register-page",children:Object(i.jsxs)("form",{className:"register-form",onSubmit:function(t){return function(t){t.preventDefault(),c.password===c.confirmPassword?x.a.post("https://recruitment.ultimate.systems/auth/local/register",{username:c.username,email:c.email,password:c.password}).then((function(t){e.push("/")})).catch((function(e){console.log("An error occurred:",e.response)})):j(!0)}(t)},children:[Object(i.jsx)("div",{className:"back-arrow",children:Object(i.jsx)(O.c,{to:"/",children:Object(i.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAAAYCAYAAACsnTAAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACESURBVHgB7dTBDYMwDEbhn07aTZIN2g2qbsYmwQEBwcgXrn6flFjK8UmOhOdaa6VtPsIlyErZ+SCmKjOCOARxCOIQxCGIQ5DT1K8exEYd3mc7fyU1WZC3zZ9weAk3+/pUG2V4n5V4fQ49jPtoi0CYEGEChAkQJkCYAGECPoywGcJ8hXwWxGhM7FMirHcAAAAASUVORK5CYII=",alt:"back"})})}),Object(i.jsx)("h1",{className:"register-form-title",children:"Create a new account"}),Object(i.jsxs)("div",{className:"register-inputs",children:[Object(i.jsx)("input",{className:"username-register-input",onChange:b,required:!0,type:"text",id:"username",placeholder:"Username"}),Object(i.jsx)("input",{className:"email-register-input",onChange:b,required:!0,type:"email",id:"email",placeholder:"Email"}),Object(i.jsx)("input",{className:"password-register-input",onChange:b,required:!0,type:"password",id:"password",placeholder:"Password"}),Object(i.jsx)("input",{className:"repeat-password-register-input",onChange:b,required:!0,type:"password",id:"confirmPassword",placeholder:"Repeat password"})]}),l&&Object(i.jsx)("p",{className:"invalid-data",children:"Invalid registration data"}),Object(i.jsx)("div",{className:"register-form-buttons",children:Object(i.jsx)("button",{className:"create-account-button",children:"Create"})})]})})},S=a(14),T=function(e){var t=e.name,a=e.isDone,c=e.id,n=e.todoId,r=(e.todoName,Object(s.useState)(a)),d=Object(o.a)(r,2),l=d[0],u=d[1],b=j(),m=b.todoList,O=b.setTodoList;return Object(i.jsxs)("div",{className:"single-task",children:[Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{className:"task-checkbox",type:"checkbox",checked:l,onChange:function(){u(!l);var e=Object(S.a)(m);e.find((function(e){return e.id===n})).task.find((function(e){return e.id===c})).isDone=!l,O(e)}}),Object(i.jsx)("span",{})]}),Object(i.jsx)("p",{className:"task-name",children:t})]})},N=function(e){var t=e.taskData,a=e.setTaskData,c=e.allTasksToAddData,n=e.setAllTasksToAddData,r=Object(s.useState)(!0),d=Object(o.a)(r,2),l=d[0],j=d[1];return Object(i.jsxs)("div",{className:"task-form-container",children:[c.map((function(e){return Object(i.jsx)(T,Object(u.a)(Object(u.a)({},e),{},{taskData:t}),e.name)})),Object(i.jsxs)("form",{className:"task-form",onSubmit:function(e){return function(e){e.preventDefault(),n([].concat(Object(S.a)(c),[t]))}(e)},children:[Object(i.jsxs)("div",{className:"checkbox-input",children:[Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{className:"task-checkbox",type:"checkbox",onChange:function(){j(!l),a(Object(u.a)(Object(u.a)({},t),{},{isDone:l}))}}),Object(i.jsx)("span",{})]}),Object(i.jsx)("input",{className:"add-task-input",onChange:function(e){a(Object(u.a)(Object(u.a)({},t),{},Object(p.a)({isDone:!l},e.currentTarget.id,e.currentTarget.value)))},required:!0,type:"text",id:"name",placeholder:"Task Name"})]}),Object(i.jsx)("button",{className:"add-task-button",children:"Add"})]})]})},w=function(e){var t=e.id,a=e.handleEditVisibility,c=e.name,n=e.task,r=Object(s.useState)(),d=Object(o.a)(r,2),l=d[0],b=d[1],m=j(),O=m.setTodoList,h=m.jwt,A=m.todoList,f=m.setOrder,g=Object(s.useState)({}),k=Object(o.a)(g,2),v=k[0],C=k[1],w=Object(s.useState)([]),E=Object(o.a)(w,2),B=E[0],D=E[1],y=Object(s.useState)(c),Q=Object(o.a)(y,1)[0],I=function(e){b(Object(u.a)(Object(u.a)({},l),{},Object(p.a)({},e.currentTarget.id,e.currentTarget.value)))};return Object(i.jsx)("div",{className:"edit-form-backdrop",children:Object(i.jsxs)("div",{className:"edit-todo-container",children:[Object(i.jsxs)("form",{id:"edit-form",className:"edit-todo-form",children:[Object(i.jsx)("input",{className:"edit-todo-name-input",onChange:I,placeholder:c,type:"text",id:"name"}),Object(i.jsx)("hr",{className:"form-divider"}),n&&n.map((function(e){return Object(i.jsx)(T,Object(u.a)(Object(u.a)({},e),{},{todoId:t,todoName:c,todoTasks:n,isTaskAdded:!0}),e.name)}))]}),Object(i.jsx)(N,{handleFormChange:I,taskData:v,setTaskData:C,allTasksToAddData:B,setAllTasksToAddData:D}),Object(i.jsxs)("div",{className:"edit-form-buttons",children:[Object(i.jsx)("button",{className:"cancel-edit-todo-button",onClick:a,type:"button",children:"Cancel"}),Object(i.jsx)("button",{onClick:function(e){return function(e){e.preventDefault();var s=Object(S.a)(A).find((function(e){return e.id===t})).task,c={headers:{Authorization:"Bearer ".concat(h)}},n=Object(u.a)(Object(u.a)({name:Q},"undefined"!==typeof l&&{name:l.name}),{},{task:[].concat(Object(S.a)(B),Object(S.a)(s))});x.a.put("https://recruitment.ultimate.systems/to-do-lists/".concat(t),n,c).then((function(e){x.a.get("https://recruitment.ultimate.systems/to-do-lists",{headers:{Authorization:"Bearer ".concat(h)}}).then((function(e){O(e.data)})),f(!1),a()})).catch((function(e){console.log(e)}))}(e)},form:"add-todo-form",className:"save-edit-todo-button",children:"Save"})]})]})})},E=a(20),B=function(e){var t=e.id,a=e.name,c=e.task,n=e.created_at,r=j(),d=r.todoList,l=r.setTodoList,u=r.jwt,b=Object(s.useState)(!1),m=Object(o.a)(b,2),O=m[0],h=m[1],A=n.slice(0,10),f=c.length,p=c.filter((function(e){return!0===e.isDone})).length,g=function(){h(!O)};return Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{onClick:g,className:"todo",children:[Object(i.jsx)("p",{className:"todo-name",children:a}),Object(i.jsx)("p",{className:"todo-create-date",children:"Created at: ".concat(A)}),Object(i.jsxs)("div",{className:"tasks-numbers",children:[Object(i.jsx)("p",{className:"completed-tasks-text",children:"Completed: ".concat(p)}),Object(i.jsx)("p",{className:"uncompleted-tasks-text",children:"Uncompleted: ".concat(f-p)}),Object(i.jsx)("p",{className:"all-tasks-text",children:"All: ".concat(f)})]}),Object(i.jsx)("button",{"aria-label":"delete",className:"todo-delete-button",onClick:function(e){return function(e){var t=d.filter((function(t){return t.id!==e}));x.a.delete("https://recruitment.ultimate.systems/to-do-lists/".concat(e),{headers:{Authorization:"Bearer ".concat(u)}}),l(t)}(t)},children:Object(i.jsx)(E.b,{className:"delete-icon"})})]}),O&&Object(i.jsx)(w,{id:t,name:a,task:c,handleEditVisibility:g})]})},D=function(e){var t=e.handleAddTodoVisibility,a=Object(s.useState)(),c=Object(o.a)(a,2),n=c[0],r=c[1],d=j(),l=d.setTodoList,b=d.jwt,m=d.setOrder,O=Object(s.useState)({}),h=Object(o.a)(O,2),A=h[0],f=h[1],g=Object(s.useState)([]),k=Object(o.a)(g,2),v=k[0],C=k[1],S=Object(s.useState)(""),T=Object(o.a)(S,2),w=T[0],E=T[1],B=function(e){var t;r(Object(u.a)(Object(u.a)({},n),{},(t={},Object(p.a)(t,e.currentTarget.id,e.currentTarget.value),Object(p.a)(t,"task",v),t)))};return Object(s.useEffect)((function(){var e=setTimeout((function(){E(null)}),2e3);return function(){return clearTimeout(e)}}),[w]),Object(i.jsx)("div",{className:"form-backdrop",children:Object(i.jsxs)("div",{className:"add-todo-container",children:[Object(i.jsx)("form",{className:"add-todo-form",id:"add-form",children:Object(i.jsx)("input",{className:"add-todo-name-input",onChange:B,required:!0,type:"text",id:"name",placeholder:"List name"})}),Object(i.jsx)("hr",{className:"form-divider"}),Object(i.jsx)(N,{todoData:n,setTodoData:r,handleFormChange:B,taskData:A,setTaskData:f,allTasksToAddData:v,setAllTasksToAddData:C}),w&&Object(i.jsx)("p",{className:"add-todo-error",children:w}),Object(i.jsxs)("div",{className:"add-todo-form-buttons",children:[Object(i.jsx)("button",{className:"cancel-add-todo-button",onClick:t,type:"button",children:"Cancel"}),Object(i.jsx)("button",{type:"submit",onClick:function(e){return function(e){if(n){e.preventDefault();var a={headers:{Authorization:"Bearer ".concat(b)}},s={name:n.name,task:n.task};x.a.post("https://recruitment.ultimate.systems/to-do-lists",s,a).then((function(e){x.a.get("https://recruitment.ultimate.systems/to-do-lists",{headers:{Authorization:"Bearer ".concat(b)}}).then((function(e){l(e.data)})),C([]),m(!1),t()})).catch((function(e){console.log("An error occurred:",e.response)}))}else E("List must have a name")}(e)},form:"add-todo-form",className:"save-add-todo-button",children:"Save"})]})]})})},y=function(){var e=j(),t=e.filterPhrase,a=e.setFilterPhrase;return Object(i.jsx)("div",{children:Object(i.jsx)("form",{children:Object(i.jsx)("input",{className:"search-input",placeholder:"Search",onChange:function(e){a(e.currentTarget.value)},value:t})})})},Q=function(){var e=j(),t=e.todoList,a=e.setTodoList,c=e.setSortedBy,n=e.order,r=e.setOrder,d=Object(s.useState)(!0),l=Object(o.a)(d,2),u=l[0],b=l[1],m=Object(s.useState)(!1),O=Object(o.a)(m,2),h=O[0],A=O[1],f=Object(s.useState)(""),p=Object(o.a)(f,2),g=p[0],x=p[1];Object(s.useEffect)((function(){if("name"===g&&!1===h){var e=t.sort((function(e,t){var a=e.name.toUpperCase(),s=t.name.toUpperCase();return a<s?-1:a>s?1:0}));b(!1),A(!0),c("nameAsc"),a(e)}else if("name"===g&&!0===h){var s=t.sort((function(e,t){var a=e.name.toUpperCase(),s=t.name.toUpperCase();return a>s?-1:a<s?1:0}));b(!1),A(!1),c("nameDesc"),a(s)}else if("id"===g&&!1===u){var n=t.sort((function(e,t){return e.id-t.id}));A(!1),b(!0),c("idAsc"),a(n)}else if("id"===g&&!0===u){var r=t.sort((function(e,t){return t.id-e.id}));A(!1),b(!1),c("idDesc"),a(r)}}),[g,n]);return Object(i.jsxs)("div",{children:[Object(i.jsx)("button",{"aria-label":"order",className:!1===n?"change-sort-button":"change-sort-button open",onClick:function(){r(!n)},children:Object(i.jsx)(E.a,{className:"arrow-icon"})}),Object(i.jsxs)("select",{onChange:function(e){return function(e){e&&(r(!1),x(e.target.value))}(e)},value:g,className:"sort-input",name:"sort",id:"sort",children:[Object(i.jsx)("option",{value:"",disabled:!0,defaultValue:"sortBy",children:"Sort By"}),Object(i.jsx)("option",{value:"id",children:"Date"}),Object(i.jsx)("option",{value:"name",children:"Name"})]})]})},I=function(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(!1),r=Object(o.a)(n,2),d=r[0],l=r[1],b=j(),m=b.todoList,O=b.setTodoList,h=b.filteredTodos,p=b.filterPhrase,g=b.sortedBy,k=localStorage.getItem("jwt");Object(s.useEffect)(Object(f.a)(A.a.mark((function e(){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://recruitment.ultimate.systems/to-do-lists",{headers:{Authorization:"Bearer ".concat(k)}});case 2:t=e.sent,O(t.data);case 4:case"end":return e.stop()}}),e)}))),[]),Object(s.useEffect)((function(){}),[g]);var v=function(){c(!a)};return Object(i.jsxs)("div",{className:"todos-container",children:[0===m.length&&"Your list is empty",Object(i.jsxs)("div",{className:"content",children:[" ",Object(i.jsxs)("div",{className:"filter-sort",children:[Object(i.jsx)(y,{}),Object(i.jsx)(Q,{})]}),""===p?m.map((function(e){return Object(i.jsx)(B,Object(u.a)(Object(u.a)({},e),{},{isEditTodoVisible:d,setIsEditTodoVisible:l}),e.id)})):h.map((function(e){return Object(i.jsx)(B,Object(u.a)(Object(u.a)({},e),{},{isEditTodoVisible:d,setIsEditTodoVisible:l}),e.id)})),Object(i.jsx)("img",{className:"add-todo-button",src:"data:image/png;base64,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",alt:"add list",onClick:v}),a&&Object(i.jsx)(D,{handleAddTodoVisibility:v})]})]})},U=["children"];function R(e){var t=e.children,a=Object(b.a)(e,U),s=localStorage.getItem("jwt");return Object(i.jsx)(m.b,Object(u.a)(Object(u.a)({},a),{},{render:function(e){var a=e.location;return!0===localStorage.hasOwnProperty("jwt")?t:Object(i.jsx)(m.a,{to:{pathname:"/",headers:{Authorization:"Bearer ".concat(s)},state:{from:a}}})}}))}var L=function(){return Object(i.jsxs)(O.a,{basename:"/us_todo_recruitment_task",children:[Object(i.jsx)(v,{}),Object(i.jsxs)(O.b,{children:[Object(i.jsx)(m.b,{exact:!0,path:"/login",children:Object(i.jsx)(m.a,{to:"/"})}),Object(i.jsx)(m.b,{exact:!0,path:"/",component:k}),Object(i.jsx)(m.b,{exact:!0,path:"/register",component:C}),Object(i.jsx)(R,{exact:!0,path:"/to-do-lists",children:Object(i.jsx)(I,{})})]})]})};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(l,{children:Object(i.jsx)(L,{})})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.15f886e3.chunk.js.map