(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var a=n(8),o=n(2),r=n(3),i=n(1),d=n(4),l=n(5),c=n(0),s=n.n(c),u=n(7),p=n.n(u),h=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return s.a.createElement("form",{onSubmit:this.props.handler,id:"add-todo"},s.a.createElement("input",{name:"description",type:"text"})," ",s.a.createElement("br",null),s.a.createElement("input",{type:"submit",value:"Submit"}))}}]),n}(s.a.Component),m=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).displayCreatedAt=e.displayCreatedAt.bind(Object(i.a)(e)),e}return Object(r.a)(n,[{key:"displayCreatedAt",value:function(){return"Created at "+new Date(this.props.todo.createdAt).toUTCString()}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("p",{title:this.displayCreatedAt()},this.props.todo.description),s.a.createElement("hr",null))}}]),n}(s.a.Component),b=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={todos:[]},e.displayHelp=e.displayHelp.bind(Object(i.a)(e)),e.handleNewTodo=e.handleNewTodo.bind(Object(i.a)(e)),e}return Object(r.a)(n,[{key:"displayHelp",value:function(){if(!this.state.todos.length)return s.a.createElement("h2",null,"You can add todos by using the form below")}},{key:"displayTodo",value:function(){return this.state.todos.map((function(e){return s.a.createElement(m,{key:e.id,todo:e})}))}},{key:"handleNewTodo",value:function(e){e.preventDefault();var t=new FormData(e.target);document.forms.namedItem("add-todo").reset(),this.setState((function(e){var n=e.todos.length+1;return{todos:[].concat(Object(a.a)(e.todos),[{id:n,createdAt:+new Date,description:t.get("description"),completed:!1}])}}))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"Todo App"),this.displayHelp(),this.displayTodo(),s.a.createElement(h,{handler:this.handleNewTodo}))}}]),n}(s.a.Component);p.a.render(s.a.createElement(b,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.417d4279.chunk.js.map