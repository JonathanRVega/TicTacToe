(this.webpackJsonptic=this.webpackJsonptic||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(6),l=a.n(r),o=(a(13),a(7)),c=a(1),s=a(2),d=a(4),h=a(3),u={backgroundColor:"white",border:"black solid 2px",textAlign:"center",fontSize:"20px",width:"40px",height:"40px",margin:-1,display:"inline-block",verticalAlign:"top"},b=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{style:u,onClick:this.props.handleClick},this.props.value)}}]),a}(n.Component),p=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={board:["","","","","","","","",""],turn:"X"},e}return Object(s.a)(a,[{key:"playerWon",value:function(){for(var e=this.state.board,t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(o.a)(t[a],3),i=n[0],r=n[1],l=n[2];if(""!==e[i]&&e[i]===e[r]&&e[r]===e[l])return e[i]}for(var c=!0,s=0;s<e.length;s++)if(""===e[s]){c=!1;break}return c?"tie":""}},{key:"updateBoard",value:function(e){var t=this.state.board.slice(),a=this.state.turn;""==t[e]&&(t[e]=a,a="0"===a?"X":"0"),this.setState({board:t,turn:a})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",null,this.playerWon()),i.a.createElement("div",null,i.a.createElement(b,{value:this.state.board[0],handleClick:this.updateBoard.bind(this,0)}),i.a.createElement(b,{value:this.state.board[1],handleClick:this.updateBoard.bind(this,1)}),i.a.createElement(b,{value:this.state.board[2],handleClick:this.updateBoard.bind(this,2)})),i.a.createElement("div",null,i.a.createElement(b,{value:this.state.board[3],handleClick:this.updateBoard.bind(this,3)}),i.a.createElement(b,{value:this.state.board[4],handleClick:this.updateBoard.bind(this,4)}),i.a.createElement(b,{value:this.state.board[5],handleClick:this.updateBoard.bind(this,5)})),i.a.createElement("div",null,i.a.createElement(b,{value:this.state.board[6],handleClick:this.updateBoard.bind(this,6)}),i.a.createElement(b,{value:this.state.board[7],handleClick:this.updateBoard.bind(this,7)}),i.a.createElement(b,{value:this.state.board[8],handleClick:this.updateBoard.bind(this,8)})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.f9061f3d.chunk.js.map