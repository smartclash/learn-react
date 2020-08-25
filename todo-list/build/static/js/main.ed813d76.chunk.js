(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{10:function(e,t,n){e.exports=n(15)},15:function(e,t,n){"use strict";n.r(t);var o=n(9),a=n(8),r=n(2),d=n(3),l=n(1),i=n(4),c=n(5),s=n(0),u=n.n(s),p=n(7),h=n.n(p),m=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return u.a.createElement("form",{onSubmit:this.props.handler,id:"add-todo"},u.a.createElement("input",{name:"description",type:"text"})," ",u.a.createElement("br",null),u.a.createElement("input",{type:"submit",value:"Submit"}))}}]),n}(u.a.Component),b=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"displayCreatedAt",value:function(){return"Created at "+new Date(this.props.todo.createdAt).toUTCString()}},{key:"displayTodo",value:function(){var e=u.a.createElement("p",{title:this.displayCreatedAt()},this.props.todo.description);return this.props.todo.completed?u.a.createElement("del",null,e):e}},{key:"render",value:function(){var e=this;return u.a.createElement("div",null,u.a.createElement("input",{type:"checkbox",onClick:function(){return e.props.checker(e.props.todo.id)}}),this.displayTodo(),u.a.createElement("button",{onClick:function(){return e.props.deleter(e.props.todo.id)}},"Delete"),u.a.createElement("hr",null))}}]),n}(u.a.Component),f=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).state={todos:[]},e.displayHelp=e.displayHelp.bind(Object(l.a)(e)),e.handleNewTodo=e.handleNewTodo.bind(Object(l.a)(e)),e.handleDeleteTodo=e.handleDeleteTodo.bind(Object(l.a)(e)),e.handleCheckboxTodo=e.handleCheckboxTodo.bind(Object(l.a)(e)),e}return Object(d.a)(n,[{key:"displayHelp",value:function(){if(!this.state.todos.length)return u.a.createElement("h2",null,"You can add todos by using the form below")}},{key:"displayTodo",value:function(){var e=this;return this.state.todos.map((function(t){return u.a.createElement(b,{key:t.id,todo:t,deleter:e.handleDeleteTodo,checker:e.handleCheckboxTodo})}))}},{key:"handleNewTodo",value:function(e){e.preventDefault();var t=new FormData(e.target);document.forms.namedItem("add-todo").reset(),this.setState((function(e){var n=e.todos.length+1;return{todos:[].concat(Object(a.a)(e.todos),[{id:n,createdAt:+new Date,description:t.get("description"),completed:!1}])}}))}},{key:"handleDeleteTodo",value:function(e){var t=this.state.todos.filter((function(t){return t.id!==e}));this.setState({todos:t})}},{key:"handleCheckboxTodo",value:function(e){var t=this.state.todos.map((function(t){return t.id===e?Object(o.a)({},t,{completed:!t.completed}):t}));this.setState({todos:t})}},{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement("h1",null,"Todo App"),this.displayHelp(),this.displayTodo(),u.a.createElement(m,{handler:this.handleNewTodo}))}}]),n}(u.a.Component);h.a.render(u.a.createElement(f,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.ed813d76.chunk.js.map