(this.webpackJsonpexampl=this.webpackJsonpexampl||[]).push([[0],{11:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__2LNZi",dialogsItems:"Dialogs_dialogsItems__3Pcce",active:"Dialogs_active__15MRa",messages:"Dialogs_messages__2jepM",item:"Dialogs_item__2kr1N"}},26:function(e,t,n){e.exports={header:"Header_header__Q2APM",loginBlock:"Header_loginBlock__3mN-i"}},30:function(e,t,n){e.exports={userFoto:"users_userFoto__1ErAs",boldPage:"users_boldPage__4qWif"}},31:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__GhbuO",content:"ProfileInfo_content__3QF16"}},32:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__3B1Ay",posts:"MyPosts_posts__1de-0"}},34:function(e,t,n){},48:function(e,t,n){e.exports=n.p+"static/media/images.06ece216.png"},49:function(e,t,n){e.exports=n.p+"static/media/load.26ef8bb4.gif"},50:function(e,t,n){e.exports={item:"Post_item__2Q2r6"}},52:function(e,t,n){e.exports=n(81)},57:function(e,t,n){},8:function(e,t,n){e.exports={nav:"Navbar_nav__1_ECI",item:"Navbar_item__1JO7d",active:"Navbar_active__3g06B",friendsContainer:"Navbar_friendsContainer__2Ux5h",friend:"Navbar_friend__1tBxp"}},81:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(23),o=n.n(s),i=(n(57),n(34),n(3)),c=n(26),l=n.n(c),u=function(e){return r.a.createElement("header",{className:l.a.header},r.a.createElement("img",{src:"https://static.techspot.com/images2/news/bigimage/2019/01/2019-01-14-image-6.jpg"}),r.a.createElement("div",{className:l.a.loginBlock},e.isAuth?e.login:r.a.createElement(i.b,{to:"/login"}," LOGIN ")))},m=n(8),d=n.n(m),p=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:d.a.nav},r.a.createElement("div",{className:d.a.item},r.a.createElement(i.b,{to:"/profile",activeClassName:d.a.active},"Profile")),r.a.createElement("div",{className:"".concat(d.a.item," ").concat(d.a.active)},r.a.createElement(i.b,{to:"/dialogs"},"Messages")),r.a.createElement("div",{className:"".concat(d.a.item," ").concat(d.a.active)},r.a.createElement(i.b,{to:"/users"},"USERS")),r.a.createElement("div",{className:d.a.item},r.a.createElement("a",null,"Music")),r.a.createElement("div",{className:d.a.item},r.a.createElement("a",null,"Settings")),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("h2",null,"Friends"))))},g=n(18),f=n(19),E=n(1),h={myDia:[{id:1,name:"Sasha"},{id:2,name:"Tanya"},{id:3,name:"Pasha"},{id:4,name:"Illya"}],myMess:[{id:1,message:"Hi"},{id:2,message:"Im Ok"},{id:3,message:"Yo"},{id:4,message:"OK"}],newMessText:"All right"},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESS":var n=e.newMessText;return Object(E.a)({},e,{newMessText:"",myMess:[].concat(Object(f.a)(e.myMess),[{id:5,message:n}])});case"UPDATE-MESS-TEXT":return Object(E.a)({},e,{newMessText:t.messPost});default:return e}},b=n(11),_=n.n(b),P=function(e){return r.a.createElement("div",{className:_.a.dialog},e.message)},O=function(e){var t="/dialogs/"+e.id;return r.a.createElement("div",{className:_.a.active+" "+_.a.item},r.a.createElement("img",{src:"https://scontent-frx5-1.cdninstagram.com/vp/a5bbd3423e3bb82ae01a25db07fa16c8/5E0914B0/t51.2885-19/s150x150/19052178_158575998016889_3547556210976751616_a.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com"}),r.a.createElement(i.b,{to:t},e.name))},y=function(e){var t=e.dialogsPage,n=t.myDia.map((function(e){return r.a.createElement(O,{name:e.name,key:e.id,id:e.id})})),a=t.myMess.map((function(e){return r.a.createElement(P,{message:e.message,key:e.id})})),s=t.newMessText;return e.isAuth?r.a.createElement("div",{className:_.a.dialogs},r.a.createElement("div",{className:"".concat(_.a.dialogsItems," ").concat(_.a.active)},n),r.a.createElement("div",{className:_.a.messages},r.a.createElement("div",null,a),r.a.createElement("div",null,r.a.createElement("textarea",{onChange:function(t){var n=t.target.value;e.updateMessText(n)},placeholder:"enter message",value:s})),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){e.addMess()}},"add mess")))):r.a.createElement(g.a,{to:"/login"})},T=n(4),w=n(13),j=n(14),S=n(16),k=n(15),C=n(17),N=function(e){return{isAuth:e.auth.isAuth}},x=function(e){var t=function(t){function n(){return Object(w.a)(this,n),Object(S.a)(this,Object(k.a)(n).apply(this,arguments))}return Object(C.a)(n,t),Object(j.a)(n,[{key:"render",value:function(){return this.props.isAuth?r.a.createElement(e,this.props):r.a.createElement(g.a,{to:"/login"})}}]),n}(r.a.Component);return Object(T.b)(N)(t)},A=x(y),U=Object(T.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{addMess:function(){e({type:"ADD-MESS"})},updateMessText:function(t){e({type:"UPDATE-MESS-TEXT",messPost:t})}}}))(A),I=n(47),M=n.n(I).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"3eb442be-c6ec-48c8-96fc-69807a29300c"}}),F=function(e,t){return M.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},D=function(e){return M.delete("follow/".concat(e)).then((function(e){return e.data}))},L=function(e){return M.post("follow/".concat(e)).then((function(e){return e.data}))},R=function(){return M.get("auth/me")},G=function(e){return M.get("profile/".concat(e))},B={users:[],pageSize:25,totalUsersCount:0,currentPage:2,isFetching:!0,followingProgress:[]},z=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},W=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(E.a)({},e,{users:e.users.map((function(e){return e.id===t.userId?Object(E.a)({},e,{followed:!0}):e}))});case"UNFOLLOW":return Object(E.a)({},e,{users:e.users.map((function(e){return e.id===t.userId?Object(E.a)({},e,{followed:!1}):e}))});case"SET_USERS":return Object(E.a)({},e,{users:t.users});case"SET_CURRENT_PAGE":return Object(E.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(E.a)({},e,{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(E.a)({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(E.a)({},e,{followingProgress:t.isFetching?[].concat(Object(f.a)(e.followingProgress),[t.userId]):e.followingProgress.filter((function(e){return e!=t.userId}))});default:return e}},J=n(30),X=n.n(J),Q=n(48),K=n.n(Q),V=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[],a=1;a<=t;a++)n.push(a);return r.a.createElement("div",null,r.a.createElement("div",null,n.map((function(t){return r.a.createElement("span",{className:e.currentPage===t&&X.a.boldPage,onClick:function(){e.onPageChanged(t)}},t)}))),e.users.map((function(t){return r.a.createElement("div",{key:t.id},r.a.createElement("span",null,r.a.createElement("div",null," ",r.a.createElement(i.b,{to:"/profile/"+t.id},r.a.createElement("img",{src:null!=t.photos.small?t.photos.small:K.a,className:X.a.userFoto}))),r.a.createElement("div",null,t.followed?r.a.createElement("button",{disabled:e.followingProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)}},"unfollow"):r.a.createElement("button",{disabled:e.followingProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)}},"follow"))),r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("div",null,t.name),r.a.createElement("div",null,t.status)),r.a.createElement("span",null,r.a.createElement("div",null,"u.location.country"),r.a.createElement("div",null,"u.location.city"))))})))},Y=n(49),q=n.n(Y),Z=function(e){return r.a.createElement("div",null,r.a.createElement("img",{src:q.a}))},$=x(function(e){function t(){var e,n;Object(w.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(S.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).onPageChanged=function(e){n.props.getUsers(e,n.props.pageSize)},n}return Object(C.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(Z,null):null,r.a.createElement(V,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,setFollowingProgress:this.props.setFollowingProgress,followingProgress:this.props.followingProgress}))}}]),t}(r.a.Component)),ee=Object(T.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,followingProgress:e.usersPage.followingProgress}}),{follow:function(e){return function(t){t(W(!0,e)),L(e).then((function(n){0===n.resultCode&&t(function(e){return{type:"FOLLOW",userId:e}}(e)),t(W(!1,e))}))}},unfollow:function(e){return function(t){t(W(!0,e)),D(e).then((function(n){0===n.resultCode&&t(function(e){return{type:"UNFOLLOW",userId:e}}(e)),t(W(!1,e))}))}},setCurrentPage:function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},setFollowingProgress:W,getUsers:function(e,t){return function(n){n(z(!0)),F(e,t).then((function(e){n(z(!1)),n({type:"SET_USERS",users:e.items}),n({type:"SET_TOTAL_USERS_COUNT",count:e.totalCount})}))}}})($),te=n(31),ne=n.n(te),ae=function(e){return e.profile?r.a.createElement("div",null,r.a.createElement("div",{className:ne.a.content},r.a.createElement("img",{src:"https://cdn.pixabay.com/photo/2015/01/08/19/10/jetty-593401_960_720.jpg"})),r.a.createElement("div",{className:ne.a.descriptionBlock},r.a.createElement("img",{src:e.profile.photos.large,alt:""}),"ava+description")):r.a.createElement(Z,null)},re={myPost:[{id:1,message:"What is your name?",likesCount:0},{id:2,message:"My Name is Pawel",likesCount:456368},{id:3,message:"My Name is Sanek",likesCount:34},{id:4,message:"Very well",likesCount:45}],newPostText:"samuray",profile:null},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:e.newPostText,likesCount:44};return Object(E.a)({},e,{myPost:[].concat(Object(f.a)(e.myPost),[n]),newPostText:""});case"UPDATE-POST-TEXT":return Object(E.a)({},e,{newPostText:t.newText});case"SET_USER_PROFILE":return Object(E.a)({},e,{profile:t.profile});default:return e}},oe=n(32),ie=n.n(oe),ce=n(50),le=n.n(ce),ue=function(e){return r.a.createElement("div",{className:le.a.item},r.a.createElement("img",{src:"https://cdn.pixabay.com/photo/2016/09/22/16/38/avatar-1687700_960_720.jpg"}),e.message,r.a.createElement("div",null,r.a.createElement("span",null,e.likesCount," like")))},me=function(e){var t=e.myPost.map((function(e){return r.a.createElement(ue,{message:e.message,key:e.id,likesCount:e.likesCount})})),n=e.newPostText;return r.a.createElement("div",{className:ie.a.postsBlock},r.a.createElement("h3",null," My posts "),r.a.createElement("div",null,r.a.createElement("textarea",{onChange:function(t){var n=t.target.value;e.updatePostText(n)},value:n}),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){e.onAddPost()}},"ADD post"))),r.a.createElement("div",{className:ie.a.posts},t))},de=Object(T.b)((function(e){return{myPost:e.profilesPage.myPost,newPostText:e.profilesPage.newPostText}}),(function(e){return{onAddPost:function(){e({type:"ADD-POST"})},updatePostText:function(t){e({type:"UPDATE-POST-TEXT",newText:t})}}}))(me),pe=function(e){return r.a.createElement("div",null,r.a.createElement(ae,{profile:e.profile}),r.a.createElement(de,null))},ge=x(function(e){function t(){return Object(w.a)(this,t),Object(S.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=2),this.props.getUserProfile(e)}},{key:"render",value:function(){return r.a.createElement(pe,Object.assign({},this.props,{profile:this.props.profile}))}}]),t}(r.a.Component));ge=Object(T.b)((function(e){return{isAuth:e.auth.isAuth}}))(ge);var fe=Object(g.f)(ge),Ee=Object(T.b)((function(e){return{profile:e.profilesPage.profile}}),{getUserProfile:function(e){return function(t){G(e).then((function(e){t({type:"SET_USER_PROFILE",profile:e.data})}))}}})(fe),he={id:null,email:null,login:null,isAuth:!1},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(E.a)({},e,{},t.data,{isAuth:!0});default:return e}},be=function(e){function t(){return Object(w.a)(this,t),Object(S.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){this.props.getAuthorize()}},{key:"render",value:function(){return r.a.createElement(u,this.props)}}]),t}(r.a.Component),_e=Object(T.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{getAuthorize:function(){return function(e){R().then((function(t){if(0===t.data.resultCode){var n=t.data.data,a=n.id,r=n.login,s=n.email;e(function(e,t,n){return{type:"SET_USER_DATA",data:{id:e,email:t,login:n}}}(a,s,r))}}))}}})(be),Pe=function(e){return r.a.createElement("h1",null,"LOGIN")},Oe=function(){return r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(_e,null),r.a.createElement(p,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(g.b,{path:"/dialogs",render:function(){return r.a.createElement(U,null)}}),r.a.createElement(g.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(Ee,null)}}),r.a.createElement(g.b,{path:"/users",render:function(){return r.a.createElement(ee,null)}}),r.a.createElement(g.b,{path:"/login",render:function(){return r.a.createElement(Pe,null)}})))},ye=n(21),Te={speakers:[{id:1,nik:"Dev"},{id:2,nik:"Jun"},{id:3,nik:"HR"},{id:4,nik:"PM"}],speaks:[{id:1,speaks:"Very good"},{id:2,speaks:"Good Idea"},{id:3,speaks:"some Bitch"},{id:4,speaks:"Real guy"}]},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te;arguments.length>1&&arguments[1];return e},je=n(51),Se=Object(ye.c)({profilesPage:se,dialogsPage:v,sideBar:we,usersPage:H,auth:ve}),ke=Object(ye.d)(Se,Object(ye.a)(je.a));window.store=ke;var Ce=ke;o.a.render(r.a.createElement(i.a,null,r.a.createElement(T.a,{store:Ce},r.a.createElement(Oe,null))),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.91479862.chunk.js.map