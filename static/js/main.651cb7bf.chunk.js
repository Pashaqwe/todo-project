(this["webpackJsonptodos-project"]=this["webpackJsonptodos-project"]||[]).push([[0],{164:function(t,e,n){},302:function(t,e,n){"use strict";n.r(e);var r=n(21),a=n(0),o=n.n(a),c=n(28),s=n.n(c),i=(n(164),n(156)),u=n(47),b=n(48),h=n(53),l=n(52),p=n(129),d=n.n(p).a.create({baseURL:"https://tranquil-basin-61642.herokuapp.com/v1"}),j=n(69),g=(n(181),n(142)),f=n(306),v=n(307),O=n(71),m=n(155),x=n(305),C=n(308),y=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return console.log(this.props.value.length),this.props.error?Object(r.jsx)(x.a.Item,{name:"notes",validateStatus:"error",help:"qqq",children:Object(r.jsx)(C.a,{onChange:this.props.onChange,value:this.props.value})}):Object(r.jsx)(x.a.Item,{name:"note",rules:[{min:4,message:"\u0417\u0430\u043c\u0435\u0442\u043a\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0434\u043b\u0438\u043d\u043d\u0435\u0435 3 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"},{max:124,message:"\u0417\u0430\u043c\u0435\u0442\u043a\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043a\u043e\u0440\u043e\u0447\u0435 124 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"}],children:Object(r.jsx)(C.a,{onChange:this.props.onChange,value:this.props.value})})}}]),n}(a.Component);function S(){var t=Object(j.a)(["\n  display: flex;\n  margin: 0 auto;\n  background: linear-gradient(\n      rgba(135, 60, 255, 0.4),\n      rgba(135, 60, 255, 0) 80%\n    ),\n    linear-gradient(\n      -45deg,\n      rgba(120, 155, 255, 0.9) 25%,\n      rgba(255, 160, 65, 0.9) 75%\n    );\n  &:hover {\n    background: linear-gradient(\n      #c6e4ee 0%,\n      #c6e4ee 40%,\n      #fed1ae 60%,\n      #faa0b9 70%,\n      #cb7dcb 80%,\n      #757ecb 100%\n    );\n    color: black;\n  }\n"]);return S=function(){return t},t}var k=Object(O.a)(m.a)(S()),w=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={value:""},t.onSubmit=function(e){t.props.onCreateTodo(e),t.setState({value:""})},t.onChange=function(e){console.log(t.state.value),t.setState({value:e.target.value})},t}return Object(b.a)(n,[{key:"render",value:function(){var t=this;return Object(r.jsxs)(x.a,{onFinish:function(){return t.onSubmit(t.state.value)},children:[Object(r.jsx)(y,{value:this.state.value,type:"text",onChange:this.onChange,error:this.props.error}),Object(r.jsx)(k,{type:"primary",htmlType:"submit",children:"Submit"})]})}}]),n}(a.Component);function T(){var t=Object(j.a)(["\n  background: linear-gradient(\n      rgba(135, 60, 255, 0.4),\n      rgba(135, 60, 255, 0) 80%\n    ),\n    linear-gradient(\n      -45deg,\n      rgba(120, 155, 255, 0.9) 25%,\n      rgba(255, 160, 65, 0.9) 75%\n    );\n  height: 200px;\n  color: white;\n  font-weight: bold;\n  word-wrap: break-word;\n  border-radius: 20px;\n"]);return T=function(){return t},t}function E(){var t=Object(j.a)(["\n  margin-top: 100px;\n  display: flex;\n  justify-content: center;\n"]);return E=function(){return t},t}function I(){var t=Object(j.a)(["\n  width: 50%;\n  margin: 40px auto 10px;\n"]);return I=function(){return t},t}var q=O.a.div(I()),F=Object(O.a)(g.a)(E()),L=Object(O.a)(f.a)(T()),A=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return this.props.todos.length?Object(r.jsxs)(q,{children:[Object(r.jsx)(v.b,{grid:{gutter:16,column:3,wrap:!0},dataSource:this.props.todos,renderItem:function(t){return Object(r.jsx)(v.b.Item,{children:Object(r.jsx)(L,{title:"\u0417\u0430\u043c\u0435\u0442\u043a\u0430 \u2116".concat(t.id),children:t.name})})}}),Object(r.jsx)(w,{onCreateTodo:this.props.onCreateTodo,error:this.props.error})]}):Object(r.jsx)(F,{})}}]),n}(a.Component),B=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={todos:[],hasError:!1},t.onCreateTodo=function(e){var n;d.post("todos",{name:e}).then((function(r){n=[].concat(Object(i.a)(t.state.todos),[{name:e}]),t.setState({todos:n})})).catch((function(e){e.response?t.setState({hasError:!0}):e.request?(t.setState({hasError:!0}),console.log(t.hasError)):t.setState({hasError:!0})}))},t}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var t=this;d.get("todos").then((function(e){t.setState({todos:e.data})}))}},{key:"render",value:function(){return Object(r.jsx)(A,{error:this.state.hasError,todos:this.state.todos,onCreateTodo:this.onCreateTodo})}}]),n}(a.Component);var D=function(){return Object(r.jsx)(B,{})},J=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,309)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,o=e.getLCP,c=e.getTTFB;n(t),r(t),a(t),o(t),c(t)}))};s.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(D,{})}),document.getElementById("root")),J()}},[[302,1,2]]]);
//# sourceMappingURL=main.651cb7bf.chunk.js.map