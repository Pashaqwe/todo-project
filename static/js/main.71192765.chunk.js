(this["webpackJsonptodos-project"]=this["webpackJsonptodos-project"]||[]).push([[0],{39:function(t,n,e){},91:function(t,n,e){"use strict";e.r(n);var r=e(1),o=e(0),a=e.n(o),i=e(28),s=e.n(i),c=(e(39),e(12)),u=e(33),d=e(7),p=e(8),h=e(10),l=e(9),f=e(29),b=e.n(f).a.create({baseURL:"https://tranquil-basin-61642.herokuapp.com/v1"}),v=e(2),j=e(3),g=e(15);function O(){var t=Object(v.a)(["\n  color: #ee6c4d;\n  font-weight: bold;\n"]);return O=function(){return t},t}function x(){var t=Object(v.a)(["\n  margin-top: 50px;\n  margin-bottom: 5px;\n  min-width: 240px;\n"]);return x=function(){return t},t}function m(){var t=Object(v.a)(["\n  margin-left: 10%;\n  margin-right: 10%;\n"]);return m=function(){return t},t}var C=j.a.form(m()),E=j.a.div(x()),y=j.a.p(O());function S(){var t=Object(v.a)(["\n  cursor: pointer;\n  padding-left: 20px;\n  padding-right: 20px;\n  border: 1px solid #e5ffde;\n  background-color: #e5ffde;\n  color: #9590a8;\n  outline: none;\n  border-radius: 0 6px 6px 0;\n  height: 40px;\n"]);return S=function(){return t},t}function T(){var t=Object(v.a)(["\n  display: flex;\n"]);return T=function(){return t},t}function w(){var t=Object(v.a)(["\n  border-radius: 6px 0 0 6px;\n  outline: none;\n  border: ",";\n  height: 32px;\n  width: 80%;\n"]);return w=function(){return t},t}var D=j.a.input(w(),(function(t){return t.errorInput?"3px solid #EE6C4D":"3px solid #E5FFDE"})),F=j.a.div(T()),k=j.a.button(S()),W=D,V=function(t){Object(h.a)(e,t);var n=Object(l.a)(e);function e(){return Object(d.a)(this,e),n.apply(this,arguments)}return Object(p.a)(e,[{key:"render",value:function(){var t=this;return Object(r.jsxs)(F,{children:[Object(r.jsx)(W,{errorInput:this.props.errorDescription,type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043c\u0435\u0442\u043a\u0443",onChange:this.props.onChange,value:this.props.value}),Object(r.jsx)(k,{disabled:this.props.errorDescription||!this.props.value,onSubmit:function(n){return t.onSubmit(t.state.value,n)},children:"Submit"})]})}}]),e}(o.Component);function I(){var t=Object(v.a)(["\n  position absolute;\n  right:10px;\n  top:0;\n  border:none;\n  outline: none;\n  background-color: #FFFFFF;\n  width:20px;\n  height:20px;\n  cursor: pointer;\n  opacity: 0.3;\n  &:hover{\n    opacity: 1;\n  }\n  &:before, &:after {\n    position: absolute;\n    content: ' ';\n    height: 15px;\n    width: 3px;\n    background-color: #333;\n    }\n    &:before {\n    transform: rotate(45deg);\n    }\n    &:after {\n    transform: rotate(-45deg);\n    }\n"]);return I=function(){return t},t}function L(){var t=Object(v.a)(["\n  display: ",";\n  background-color: #ffffff;\n  border-radius: 6px;\n  position:relative;\n  padding:5px 5px 5px 15px;\n  top: 100px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);\n"]);return L=function(){return t},t}var P=j.a.div(L(),(function(t){return t.styledServerError?"box":"none"})),A=j.a.button(I()),B=function(t){Object(h.a)(e,t);var n=Object(l.a)(e);function e(){return Object(d.a)(this,e),n.apply(this,arguments)}return Object(p.a)(e,[{key:"render",value:function(){var t=this;return Object(r.jsxs)(P,{styledServerError:this.props.serverError,children:[Object(r.jsx)("h3",{children:"\u041e\u0439, \u0447\u0442\u043e \u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a... \ud83d\ude28"}),Object(r.jsx)("p",{children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0434\u043d\u0435\u0435"}),Object(r.jsx)(A,{onClick:function(){return t.props.closeErrorWindow()}})]})}}]),e}(o.Component),J=function(t){Object(h.a)(e,t);var n=Object(l.a)(e);function e(){var t;Object(d.a)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=n.call.apply(n,[this].concat(o))).state={value:"",errorDescription:""},t.onSubmit=function(n,e){e.preventDefault(),t.props.serverError||(t.props.onCreateTodo(n),t.setState({value:""}))},t.onChange=function(n){t.setState({value:n.target.value},(function(){t.validationFields()}))},t}return Object(p.a)(e,[{key:"validationFields",value:function(){this.state.value.length?this.state.value.trim().length<3?this.setState({errorDescription:"\u0417\u0430\u043c\u0435\u0442\u043a\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0434\u043b\u0438\u043d\u043d\u0435\u0435 3 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"}):this.setState({errorDescription:""}):this.setState({errorDescription:"\u041f\u043e\u043b\u0435 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"})}},{key:"render",value:function(){var t=this;return Object(r.jsx)(C,{onSubmit:function(n){return t.onSubmit(t.state.value,n)},children:Object(r.jsxs)(E,{children:[Object(r.jsx)(V,{errorDescription:this.state.errorDescription,name:"name",value:this.state.value,type:"text",onChange:this.onChange,serverError:this.props.serverError,ValidationError:!this.state.errorDescription}),Object(r.jsx)(y,{children:this.state.errorDescription}),Object(r.jsx)(B,{serverError:this.props.serverError,closeErrorWindow:this.props.closeErrorWindow})]})})}}]),e}(o.Component);function M(){var t=Object(v.a)(["\n  margin-top: 40px;\n"]);return M=function(){return t},t}function R(){var t=Object(v.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n"]);return R=function(){return t},t}function _(){var t=Object(v.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n"]);return _=function(){return t},t}function q(){var t=Object(v.a)(["\n  width: 30%;\n  background-color: #8e9aaf;\n  min-height: 100vh;\n  min-width: 300px;\n"]);return q=function(){return t},t}function z(){var t=Object(v.a)(["\n  width: 70%;\n  min-height: 100vh;\n  padding-top: 50px;\n  background-color: #ee7f72;\n"]);return z=function(){return t},t}function H(){var t=Object(v.a)(["\n  display: flex;\n  width: 100%;\n  min-height: 100vh;\n"]);return H=function(){return t},t}var U=j.a.div(H()),G=j.a.div(z()),K=j.a.div(q()),N=Object(j.a)(g.Heart)(_()),Q=Object(j.a)(g.Ring)(R()),X=Object(j.a)(J)(M()),Y=a.a.lazy((function(){return Promise.all([e.e(3),e.e(4)]).then(e.bind(null,100))})),Z=function(t){Object(h.a)(e,t);var n=Object(l.a)(e);function e(){return Object(d.a)(this,e),n.apply(this,arguments)}return Object(p.a)(e,[{key:"render",value:function(){return this.props.todos.length?Object(r.jsxs)(U,{children:[Object(r.jsx)(K,{children:Object(r.jsx)(X,{onCreateTodo:this.props.onCreateTodo,serverError:this.props.serverError,closeErrorWindow:this.props.closeErrorWindow})}),Object(r.jsx)(G,{children:Object(r.jsx)(o.Suspense,{fallback:Object(r.jsx)(Q,{color:"#FFFFFF"}),children:Object(r.jsx)(Y,{saveChange:this.props.saveChange,todos:this.props.todos,onDeleteTodo:this.props.onDeleteTodo,fetchTodos:this.props.fetchTodos,onChangeTodo:this.props.onChangeTodo})})})]}):Object(r.jsx)(N,{})}}]),e}(o.Component),$=function(t){Object(h.a)(e,t);var n=Object(l.a)(e);function e(){var t;Object(d.a)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=n.call.apply(n,[this].concat(o))).state={todos:[],serverError:!1,page:1,inputValue:""},t.fetchTodos=function(){b.get("todos?page=".concat(t.state.page)).then((function(n){t.setState({todos:t.state.todos.concat(n.data),page:t.state.page+1})}))},t.onCreateTodo=function(n){b.post("todos",{name:n}).then((function(n){var e=n.data,r=e.name,o=e.id,a=e.created_at;t.setState({todos:[].concat(Object(u.a)(t.state.todos),[{name:r,id:o,created_at:a}])})})).catch((function(n){t.setState({serverError:!0})}))},t.onDeleteTodo=function(n){b.delete("todos/".concat(n)).then((function(e){var r=t.state.todos.find((function(t){return t.id===n}));r.disabled=!0;var o=t.state.todos.filter((function(t){return t.id!==n}));t.setState(Object(c.a)(Object(c.a)({},o),{},{todo:r}))}))},t.onChangeTodo=function(n,e){var r=t.state.todos.find((function(t){return t.id===n}));console.log(r.name),r.editing=!0,t.setState({inputValue:void 0===t.state.inputValue||""===t.state.inputValue?r.name:e});var o=t.state.todos.filter((function(t){return t.id!==n}));t.setState(Object(c.a)(Object(c.a)({},o),{},{todo:r}))},t.saveChange=function(n){var e=t.state.todos.find((function(t){return t.id===n}));e.editing=!1,e.name=t.state.inputValue;var r=t.state.todos.filter((function(t){return t.id!==n}));t.setState(Object(c.a)(Object(c.a)({},r),{},{todo:e,inputValue:""}))},t.closeErrorWindow=function(){t.setState({serverError:!1})},t}return Object(p.a)(e,[{key:"componentDidMount",value:function(){this.fetchTodos()}},{key:"render",value:function(){return Object(r.jsx)(Z,{saveChange:this.saveChange,onChangeTodo:this.onChangeTodo,fetchTodos:this.fetchTodos,onDeleteTodo:this.onDeleteTodo,closeErrorWindow:this.closeErrorWindow,serverError:this.state.serverError,todos:this.state.todos,onCreateTodo:this.onCreateTodo})}}]),e}(o.Component);var tt=function(){return Object(r.jsx)($,{})},nt=function(t){t&&t instanceof Function&&e.e(5).then(e.bind(null,99)).then((function(n){var e=n.getCLS,r=n.getFID,o=n.getFCP,a=n.getLCP,i=n.getTTFB;e(t),r(t),o(t),a(t),i(t)}))};s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(tt,{})}),document.getElementById("root")),nt()}},[[91,1,2]]]);
//# sourceMappingURL=main.71192765.chunk.js.map