(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(8),o=n.n(a),s=n(9),d=n(5),i=n(2),j=(n(14),n(0)),l=function(e){var t=e.onAdd,n=e.showAdd;return Object(j.jsxs)("header",{children:[Object(j.jsx)("h1",{children:"task tracker"}),Object(j.jsx)("button",{onClick:t,className:"btn",children:n?"close":"add"})]})},u=n(7),b=(n(16),function(e){var t=e.task,n=e.onDelete,c=e.onToggle;return Object(j.jsxs)("div",{className:"task ".concat(t.reminder?"task--reminder":""),onDoubleClick:function(){return c(t.id)},children:[Object(j.jsxs)("h3",{children:[t.text,Object(j.jsx)(u.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(j.jsx)("p",{children:t.day})]})}),h=function(e){var t=e.tasks,n=e.onDelete,c=e.onToggle;return Object(j.jsx)("div",{children:t.map((function(e){return Object(j.jsx)(b,{task:e,onDelete:n,onToggle:c},e.id)}))})},O=(n(17),function(e){var t=e.onAdd,n=Object(c.useState)(""),r=Object(i.a)(n,2),a=r[0],o=r[1],s=Object(c.useState)(""),d=Object(i.a)(s,2),l=d[0],u=d[1],b=Object(c.useState)(!1),h=Object(i.a)(b,2),O=h[0],m=h[1];return Object(j.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?(t({text:a,day:l,reminder:O}),o(""),m(!1),u("")):alert("please enter a task")},children:[Object(j.jsxs)("div",{className:"add-form__control",children:[Object(j.jsx)("label",{children:"Task"}),Object(j.jsx)("input",{type:"text",value:a,onChange:function(e){return o(e.target.value)},placeholder:"add task"})]}),Object(j.jsxs)("div",{className:"add-form__control",children:[Object(j.jsx)("label",{children:"Day & time"}),Object(j.jsx)("input",{type:"text",placeholder:"add Day & time",value:l,onChange:function(e){return u(e.target.value)}})]}),Object(j.jsxs)("div",{className:"add-form__control add-form__control--check",children:[Object(j.jsx)("label",{children:"set reminder"}),Object(j.jsx)("input",{type:"checkbox",placeholder:"set reminder",value:O,checked:O,onChange:function(e){return m(e.currentTarget.checked)}})]}),Object(j.jsx)("input",{className:"btn btn--block",type:"submit",value:"save task"})]})});var m=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([{id:1,text:"ojaowj",day:" dcmpsjap",reminder:!0},{id:2,text:"ojaowj",day:" dcmpsjap",reminder:!0},{id:3,text:"ojaowj",day:" dcmpsjap",reminder:!0}]),o=Object(i.a)(a,2),u=o[0],b=o[1];return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(l,{onAdd:function(){return r(!n)},showAdd:n}),u.length>0?Object(j.jsx)(h,{tasks:u,onDelete:function(e){b(u.filter((function(t){return t.id!==e})))},onToggle:function(e){console.log(e),b(u.map((function(t){return t.id===e?Object(d.a)(Object(d.a)({},t),{},{reminder:!t.reminder}):t})))}}):Object(j.jsx)("h4",{children:"No tasks to show"}),n&&Object(j.jsx)(O,{onAdd:function(e){var t=Math.floor(1e4*Math.random())+1,n=Object(d.a)({id:t},e);b([].concat(Object(s.a)(u),[n]))}})]})},f=(n(18),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))});o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root")),f()}},[[19,1,2]]]);
//# sourceMappingURL=main.c6f01af4.chunk.js.map