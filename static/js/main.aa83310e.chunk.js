(this["webpackJsonpmovie-app-redux-v2"]=this["webpackJsonpmovie-app-redux-v2"]||[]).push([[0],{25:function(e,t,n){},30:function(e,t,n){e.exports=n(41)},35:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(18),c=n.n(i),o=(n(35),n(9)),u=n(10),s=n(14),l=n(11),m=n(15),p=n(12),d=n(8),v=(n(25),n(13)),g=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).add=function(){var e=n.props.nameReducers,t=n.props.imgReducers,a=n.props.ratingReducers;n.props.ADD_MOVIE(a,e,t)},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"movie-app"},r.a.createElement("header",{className:"header"},r.a.createElement("input",{type:"text",placeholder:"Search",onChange:function(t){return e.setState({search:t.target.value})}}),r.a.createElement("span",{onClick:function(){return e.star(1)}},"\u2b50"),r.a.createElement("span",{onClick:function(){return e.star(2)}},"\u2b50"),r.a.createElement("span",{onClick:function(){return e.star(3)}},"\u2b50"),r.a.createElement("span",{onClick:function(){return e.star(4)}},"\u2b50"),r.a.createElement("span",{onClick:function(){return e.star(5)}},"\u2b50")),r.a.createElement("div",{className:this.props.DisplayReducers},r.a.createElement("input",{type:"text",placeholder:"name",name:"name",onChange:function(t){return e.props.CHANGE_NAME(t)}}),r.a.createElement("input",{type:"text",placeholder:"Img",name:"img",onChange:function(t){return e.props.CHANGE_IMG(t)}}),r.a.createElement("input",{type:"text",placeholder:"rating",name:"rating",onChange:function(t){return e.props.CHANGE_Rating(t)}}),r.a.createElement("button",{onClick:this.add},"Add"),r.a.createElement(p.b,{to:"/Movies"},"TO CARD")))}}]),t}(a.Component),f=Object(v.b)((function(e){return{ListMoviesReducers:e.ListMoviesReducers,DisplayReducers:e.DisplayReducers,nameReducers:e.nameReducers,imgReducers:e.imgReducers,ratingReducers:e.ratingReducers}}),(function(e){return{ADD_MOVIE:function(t,n,a){e({type:"add-Movie",ratingAdd:t,nameAdd:n,img:a})},CHANGE_NAME:function(t){e({type:"CHANGE_NAME",value:t.target.value})},CHANGE_IMG:function(t){e({type:"CHANGE_IMG",value:t.target.value})},CHANGE_Rating:function(t){e({type:"CHANGE_Rating",value:t.target.value})}}}))(g),h=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},this.props.movies&&this.props.movies.filter((function(e){return e.name.toLowerCase()})).map((function(t){return r.a.createElement("div",{className:"movie-card"},r.a.createElement("p",{className:"movie-name"},t.name),r.a.createElement("p",{className:"movie-rating"},"".padEnd(t.rating,"\u2b50")),r.a.createElement("img",{className:"movie-img",src:t.img}),r.a.createElement("button",{onClick:function(){e.props.edit(t.id,e.props.movies)}},"Edit"),r.a.createElement("span",{onClick:function(){e.props.more(t.id,e.props)}},"More"))})))}}]),t}(a.Component),E=Object(v.b)((function(e){return{movies:e.ListMoviesReducers}}),(function(e){return{edit:function(t,n){var a=prompt("name"),r=prompt("rating"),i=prompt("img"),c=n.filter((function(e){return e.id!==t})).concat({name:a,img:i,rating:r});e({type:"EDIT_MOVIE",value:c})},more:function(t,n){e({type:"GET_ID",id:t}),setTimeout((function(){n.history.push("/description")}),1500)}}}))(h),b=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).state={},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.a,null,r.a.createElement(d.a,{exact:!0,path:"/",render:function(){return r.a.createElement(f,null)}}),r.a.createElement(d.a,{path:"/Movies",component:E})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=n(17),y=n(29),A=[{id:"",rating:2,name:"Abc",img:"https://maghreb.space/P622948/8f5a07bebb4d94ba59bceaf7f0690c46/___www_maghrebspace_net__12082014173148_262Afifa%20iskandar.jpg"},{id:"",rating:2,name:"Abc",img:"https://maghreb.space/P622948/8f5a07bebb4d94ba59bceaf7f0690c46/___www_maghrebspace_net__12082014173148_262Afifa%20iskandar.jpg"}],C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;return"add-Movie"===t.type?[].concat(Object(y.a)(e),[{id:Math.random(),rating:t.ratingAdd,name:t.nameAdd,img:t.img}]):"EDIT_MOVIE"===t.type?t.value:e},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"display";arguments.length>1&&arguments[1];return e},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"CHANGE_NAME"===t.type?t.value:e},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"CHANGE_IMG"===t.type?t.value:e},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"CHANGE_Rating"===t.type?t.value:e},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"GET_ID"===t.type?t.id:e},G=Object(_.c)(Object(_.b)({ListMoviesReducers:C,DisplayReducers:O,nameReducers:R,imgReducers:N,ratingReducers:j,id:M}));c.a.render(r.a.createElement(p.a,null,r.a.createElement(v.a,{store:G}," ",r.a.createElement(b,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.aa83310e.chunk.js.map