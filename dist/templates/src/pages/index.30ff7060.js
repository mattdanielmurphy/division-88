(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{70:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(25),r=a(14),o=a.n(r),i=a(32),s=a.n(i),m=a(15),d=a.n(m),u=a(16),p=a.n(u),E=a(10),v=a.n(E),w=a(17),h=a.n(w),g=a(11),b=a.n(g),f=a(151),y=function(e){var t=e.videoId;return console.log(t),l.a.createElement("div",{className:"video",style:{position:"relative",paddingBottom:"56.25%",paddingTop:25,height:0}},l.a.createElement("iframe",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},src:"https://www.youtube.com/embed/".concat(t),frameBorder:"0"}))},N=function(e){function t(){var e,a;o()(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return a=d()(this,(e=p()(t)).call.apply(e,[this].concat(c))),b()(v()(a),"state",{}),b()(v()(a),"render",function(){return a.state.videoId?l.a.createElement(y,{videoId:a.state.videoId}):l.a.createElement("div",{onClick:function(){return a.playVideo()},className:"video-link"},l.a.createElement("img",{src:a.props.imgSrc,alt:"image"}),l.a.createElement(f.a,{className:"icon"}))}),a}return h()(t,e),s()(t,[{key:"playVideo",value:function(){var e=/\?v=(.*)/.exec(this.props.videoSrc)[1];this.setState({videoId:e})}},{key:"componentDidMount",value:function(){}}]),t}(l.a.Component),k=function(e){return l.a.createElement("div",{style:e.style,className:"wrapper ".concat(e.className)},e.children)};t.default=function(){return l.a.createElement(c.Container,{style:{padding:"0"},fluid:!0,id:"index",className:"main-container"},l.a.createElement(c.Row,null,l.a.createElement(c.Col,{xs:12},l.a.createElement(k,null,l.a.createElement("img",{src:"/images/neon-bambi.jpg",alt:""})))),l.a.createElement(c.Row,null,l.a.createElement(c.Col,{xs:12},l.a.createElement("div",{id:"banner",className:"bottom-banner"},l.a.createElement("h3",null,"Neon Bambi"),l.a.createElement("h4",null,"New Album available")))),l.a.createElement(c.Row,null,l.a.createElement(c.Col,{xs:5,md:4,className:"just-text"},l.a.createElement(k,{style:{backgroundColor:"#333"},className:"text"},l.a.createElement("div",null,l.a.createElement("h3",{className:"big"},"J.E.W"),l.a.createElement("h4",null,"New sample pack by Billy Wild")))),l.a.createElement(c.Col,{xs:7,md:8},l.a.createElement(k,null,l.a.createElement(N,{imgSrc:"/images/skoop.jpg",videoSrc:"https://www.youtube.com/watch?v=aUdfLZJkqFs"})))))}}}]);