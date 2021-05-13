(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3CvRl",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2bkPr"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2AxMb",Modal:"Modal_Modal__2WBTT"}},23:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__DncjJ"}},24:function(e,t,a){e.exports={Button:"Button_Button__3R1xi"}},25:function(e,t,a){e.exports={error:"Error_error__1Ykqe"}},31:function(e,t,a){},32:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a.n(r),o=a(9),c=a.n(o),s=(a(31),a(14)),i=a(4),l=a(5),u=a(7),h=a(6),m=(a(32),a(8)),g=a.n(m),d=a(1),p=a.n(d),b=a(0),j=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)("header",{className:g.a.Searchbar,children:Object(b.jsxs)("form",{className:g.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(b.jsx)("button",{type:"submit",className:g.a.SearchFormButton,children:Object(b.jsx)("span",{className:g.a.SearchFormButtonLabel,children:"Search"})}),Object(b.jsx)("input",{className:g.a.SearchFormInput,type:"text",value:this.state.query,onChange:this.handleChange,autocomplete:"off",autofocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(r.Component);j.propsTypes={onSubmit:p.a.func.isRequired};var f=j,y=a(23),v=a.n(y),O=a(11),I=a.n(O),S=function(e){var t=e.imgItem,a=e.getLargeImg,r=t.webformatURL,n=t.tags;return Object(b.jsx)("li",{className:I.a.ImageGalleryItem,children:Object(b.jsx)("img",{src:r,alt:n,className:I.a.ImageGalleryItemImage,onClick:function(){return a({imgItem:t})}})})};S.protoTypes={imgItem:p.a.object.isRequired,getLargeImg:p.a.func.isRequired};var _=S,x=a(12),w=a.n(x),k=document.querySelector("#modal-root"),C=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleOverlayClick=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.largeImageUrl;return Object(o.createPortal)(Object(b.jsx)("div",{className:w.a.Overlay,onClick:this.handleOverlayClick,children:Object(b.jsx)("div",{className:w.a.Modal,children:Object(b.jsx)("img",{src:e,alt:"large img"})})}),k)}}]),a}(r.Component);C.propsTypes={onClose:p.a.func.isRequired,largeImageUrl:p.a.string.isRequired};var L=C,q=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={hits:"",showModal:!1,largeImageUrl:""},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.getLargeImg=function(t){var a=t.imgItem;e.toggleModal(),e.setState({largeImageUrl:a.largeImageURL})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props.items,a=this.state,r=a.showModal,n=a.largeImageUrl;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("ul",{className:v.a.ImageGallery,children:t.map((function(t){return Object(b.jsx)(_,{imgItem:t,getLargeImg:e.getLargeImg},t.id)}))}),r&&Object(b.jsx)(L,{largeImageUrl:n,onClose:this.toggleModal})]})}}]),a}(r.Component);q.propsTypes={items:p.a.object.isRequired};var M=q,N=a(24),F=a.n(N),R=function(e){var t=e.onClick;return Object(b.jsx)("button",{type:"button",className:F.a.Button,onClick:t,children:"Load more"})};R.protoTypes={onClick:p.a.func.isRequired};var T=R,B=a(13),G=a.n(B);G.a.defaults.baseURL="https://pixabay.com/api";var U=function(e){var t=e.searchQuery,a=void 0===t?"":t,r=e.currentPage,n=void 0===r?1:r,o=e.pageSize,c=void 0===o?12:o;return G.a.get("/?q=".concat(a,"&page=").concat(n,"&key=").concat("19974977-7de7da89e9a7910ce59988326","&image_type=photo&orientation=horizontal&per_page=").concat(c)).then((function(e){return e.data.hits}))},D=a(25),P=a.n(D),Q=function(e){var t=e.message;return Object(b.jsx)("div",{className:P.a.error,children:t})};Q.protoTypes={message:p.a.string.isRequired};var A=Q,E=a(26),J=a.n(E),K=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={hits:[],currentPage:1,searchQuery:"",isLoading:!1,error:null},e.onChangeQuery=function(t){e.setState({searchQuery:t,currentPage:1,hits:[],error:null})},e.fetchImages=function(){var t=e.state,a={currentPage:t.currentPage,searchQuery:t.searchQuery};e.setState({isLoading:!0}),U(a).then((function(t){e.setState((function(e){return{hits:[].concat(Object(s.a)(e.hits),Object(s.a)(t)),currentPage:e.currentPage+1}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(t){return e.setState({error:t})})).finally((function(){e.setState({isLoading:!1})}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchImages()}},{key:"render",value:function(){var e=this.state,t=e.hits,a=e.isLoading,r=e.error,n=t.length>0&&!a;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(f,{onSubmit:this.onChangeQuery}),r&&Object(b.jsx)(A,{message:"Something went wrong. Try again."}),Object(b.jsx)(M,{items:t}),a&&Object(b.jsx)(J.a,{type:"ThreeDots",color:"#3f51b5",height:80,width:80,className:"loader"}),n&&Object(b.jsx)(T,{onClick:this.fetchImages})]})}}]),a}(r.Component);c.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(K,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__DjWH3",SearchForm:"Searchbar_SearchForm__1ac2l",SearchFormButton:"Searchbar_SearchFormButton__21S85",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__8f9cn",SearchFormInput:"Searchbar_SearchFormInput__VhsfU"}}},[[72,1,2]]]);
//# sourceMappingURL=main.15a4e678.chunk.js.map