(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,a,t){e.exports=t(45)},34:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(25),c=t.n(r),s=t(2),o=t(5),i=t.n(o),m=t(13),u=t(7),p=t(8),d=t(10),h=t(9),_=t(11),E=t(18),g=(t(34),t(12)),b=function(){return l.a.createElement("div",{className:"wrapper__loading"},l.a.createElement("div",{className:"loader"},"Loading..."))},v=function(e){var a=e.phone,t=e.urlImg,n=e.setItemToBasket;return l.a.createElement("div",{key:a.id,className:"price-tags"},l.a.createElement("div",{className:"price-tag"},l.a.createElement(s.b,{to:"/phones/".concat(a.id),className:"price-tag__wrapp-card"},l.a.createElement("img",{className:"price-tag__wrapp-card-img",src:"".concat(t,"/").concat(a.imageUrl),alt:"Phone"})),l.a.createElement("span",{className:"card__item-title"},l.a.createElement(s.b,{to:"/phones/".concat(a.id),className:"card__item-title"},a.id)),l.a.createElement("div",{className:"about__item-text"},a.snippet),l.a.createElement("div",{className:"card__information__detail"},l.a.createElement("button",{type:"submit",className:"price-btn default__btn",onClick:function(){n(a.name,t,a.id)}},"Add"))))},f=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(l)))).state={phoneArrays:[]},t}return Object(_.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e=this.props,a=e.urlImg,t=e.phones,n=e.handleFilter,r=e.handleSort,c=e.setItemToBasket,s=e.sortField,o=this.state.phoneArrays;return l.a.createElement("div",{className:"table"},l.a.createElement("div",{className:"table__header"},l.a.createElement("form",{action:"/",className:"adress-delivery__header"},l.a.createElement("div",{className:"search__container"},l.a.createElement("div",{className:"search__button"}),l.a.createElement("div",{className:"hidden"},s),l.a.createElement("input",{type:"text",className:"input",placeholder:"search",onChange:n})),l.a.createElement("div",{className:"destination-details"},l.a.createElement("select",{name:"",onClick:r,className:"adress-delivery__destination-details"},l.a.createElement("option",{value:"alphabet"},"sort By Alphabet"),l.a.createElement("option",{value:""},"sort order")))),o),0===t.length?l.a.createElement(b,null):l.a.createElement("div",{className:"catalog"},t.map(function(e){return l.a.createElement(v,{key:e.id,phone:e,urlImg:a,setItemToBasket:c})})))}}]),a}(l.a.Component),N=function(){var e=Object(m.a)(i.a.mark(function e(){var a,t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://mate-academy.github.io/phone-catalogue-static",e.next=3,fetch("".concat("https://mate-academy.github.io/phone-catalogue-static","/api/phones.json"));case 3:return a=e.sent,e.next=6,a.json();case 6:return t=e.sent,e.abrupt("return",t);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(m.a)(i.a.mark(function e(a){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://mate-academy.github.io/phone-catalogue-static",e.next=3,fetch("".concat("https://mate-academy.github.io/phone-catalogue-static","/api/phones/").concat(a,".json"));case 3:return t=e.sent,n=t.json(),e.abrupt("return",n);case 6:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),y=(t(39),function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(l)))).state={phoneDetails:null,imgChoseUrl:""},t.handleChose=function(e){t.setState({imgChoseUrl:e})},t}return Object(_.a)(a,e),Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(i.a.mark(function e(){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(this.props.phoneId);case 2:a=e.sent,this.setState({phoneDetails:a});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.phoneDetails,n=a.imgChoseUrl,r=this.props,c=r.urlImg,s=r.phoneId,o=r.phones,i=r.setItemToBasket;return o.find(function(e){return e.id===s})?null===t?l.a.createElement(b,null):l.a.createElement("div",{className:"catalog__phones"},l.a.createElement("div",{className:"catalog__phones__main"},l.a.createElement("div",{className:"catalog__phones__details__wrap"},l.a.createElement("div",{className:"catalog__phones__details__img_wraper"},l.a.createElement("div",{className:"catalog__phones__phone__details-main"},l.a.createElement("div",{className:"catalog__phones__container__for__images"},l.a.createElement("div",{className:"catalog__phones__details__img_wrap"},l.a.createElement("img",{src:"".concat(c,"/").concat(n),alt:"".concat(n)})),t.images.map(function(a){return l.a.createElement("div",{className:"catalog__phones__details__img_wrap"},l.a.createElement("img",{onMouseOver:function(){return e.handleChose("".concat(a))},key:a,src:"".concat(c,"/").concat(a),alt:"phone",className:"card__img",onFocus:!0}))})))),l.a.createElement("div",{className:"catalog__phones__details__information"},l.a.createElement("h1",null,"".concat(t.id)),l.a.createElement("div",{className:"catalog__phones__details"},l.a.createElement("h1",null,"description"),l.a.createElement("p",null,"".concat(t.description))),l.a.createElement("div",{className:"catalog__phones__details__add__button"},l.a.createElement("button",{type:"submit",onClick:function(){i(t.name,c,t.id)}},"Add to basket")))),l.a.createElement("div",{className:"catalog__phones__phone_details__text_details"},l.a.createElement("div",{className:"catalog__phones__android__wrapper"},l.a.createElement("h3",null,"Display"),l.a.createElement("p",null,"screenResolution:",l.a.createElement("br",null),"".concat(t.display.screenResolution)),l.a.createElement("p",null,"screenSize:",l.a.createElement("br",null),"".concat(t.display.screenSize))),l.a.createElement("div",{className:"catalog__phones__android__wrapper"},l.a.createElement("h3",null,"android"),l.a.createElement("p",null,"os:",l.a.createElement("br",null),"".concat(t.android.os)),l.a.createElement("p",null,"ui:",l.a.createElement("br",null),"".concat(t.android.ui))),l.a.createElement("div",{className:"catalog__phones__android__wrapper"},l.a.createElement("h3",null,"hardware"),l.a.createElement("p",null,"audioJack:",l.a.createElement("br",null),"".concat(t.hardware.audioJack)),l.a.createElement("p",null,"cpu:",l.a.createElement("br",null),"".concat(t.hardware.cpu)),l.a.createElement("p",null,"usb:",l.a.createElement("br",null),"".concat(t.hardware.usb))),l.a.createElement("div",{className:"catalog__phones__android__wrapper"},l.a.createElement("h3",null,"battery"),l.a.createElement("p",null,"talkTime:",l.a.createElement("br",null),"".concat(t.battery.talkTime)),l.a.createElement("p",null,"standbyTime:",l.a.createElement("br",null),"".concat(t.battery.standbyTime)),l.a.createElement("p",null,"Type:",l.a.createElement("br",null),"".concat(t.battery.type))),l.a.createElement("div",{className:"catalog__phones__android__wrapper"},l.a.createElement("h3",null,"Storage and Memory"),l.a.createElement("p",null,"Internal Storage:",l.a.createElement("br",null),"".concat(t.storage.flash)),l.a.createElement("p",null,"RAM:",l.a.createElement("br",null),"".concat(t.storage.ram))),l.a.createElement("div",{className:"catalog__phones__android__wrapper"},l.a.createElement("h3",null,"Connectivity",l.a.createElement("br",null),"Network Support"),l.a.createElement("p",null,"WiFi:",l.a.createElement("br",null),"".concat(t.connectivity.wifi)),l.a.createElement("p",null,"Bluetooth:",l.a.createElement("br",null),"".concat(t.connectivity.bluetooth)),l.a.createElement("p",null,"Infrared:",l.a.createElement("br",null),l.a.createElement("input",{type:"checkbox",checked:t.connectivity.infrared})),l.a.createElement("p",null,"GPS:",l.a.createElement("br",null),l.a.createElement("input",{type:"checkbox",checked:t.connectivity.gps}))),l.a.createElement("div",{className:"catalog__phones__android__wrapper"},l.a.createElement("h3",null,"Size and Weight"),l.a.createElement("p",null,"Dimensions:",l.a.createElement("br",null),"".concat(t.sizeAndWeight.dimensions.map(function(e){return e}))),l.a.createElement("p",null,"Weight:",l.a.createElement("br",null),"".concat(t.sizeAndWeight.weight))),l.a.createElement("div",{className:"catalog__phones__android__wrapper"},l.a.createElement("h3",null,"Additional Features"),l.a.createElement("p",null,"".concat(t.additionalFeatures))),l.a.createElement("div",{className:"catalog__phones__android__wrapper"},l.a.createElement("h3",null,"Camera"),l.a.createElement("p",null,"Primary:",l.a.createElement("br",null),"".concat(t.camera.primary)),l.a.createElement("p",null,"Features:",l.a.createElement("br",null),"".concat(t.camera.features))),l.a.createElement("div",{className:"catalog__phones__android__wrapper"},l.a.createElement("h3",null,"Hardware"),l.a.createElement("p",null,"CPU:",l.a.createElement("br",null),"".concat(t.hardware.cpu)),l.a.createElement("p",null,"USB:",l.a.createElement("br",null),"".concat(t.hardware.usb)),l.a.createElement("p",null,"Audio / headphone jack:",l.a.createElement("br",null),"".concat(t.hardware.audioJack)),l.a.createElement("p",null,"FM Radio:",l.a.createElement("br",null),l.a.createElement("input",{type:"checkbox",checked:t.hardware.fmRadio})),l.a.createElement("p",null,"Accelerometer:",l.a.createElement("br",null),l.a.createElement("input",{type:"checkbox",checked:t.hardware.accelerometer})))))):l.a.createElement("div",{className:"wrraper__was__not_phone"},l.a.createElement("h1",{className:"phone__was__not"},"Phone Was Not Found"))}}]),a}(l.a.Component)),C=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Page not found"),l.a.createElement("span",null,l.a.createElement(s.b,{className:"navlink",to:"/",exact:!0},"here is Home")))},w=t(15),O=t(17),F=(t(40),t(41),function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(l)))).state={mapOfInform:{name:"",email:"",phone:"",country:""},errorsMap:{name:"",email:"",phone:"",country:""}},t.handleInputFocus=function(e){var a=e.target.name;t.setState(function(e){return Object(O.a)({},e,{errorsMap:Object(O.a)({},e.errorsMap,Object(w.a)({},a,!1))})})},t.handleChangeForm=function(e){e.preventDefault();var a=t.state.mapOfInform,n=a.name,l=a.email,r={};t.setState(function(e){return n||(r.name="Please enter the name"),l||(r.email="Please enter the email"),Object.keys(r).length>0&&(r.phone="Please enter the phone"),{errors:!0}}),t.setState({errorsMap:r,mapOfInform:{name:"",email:"",phone:"",country:""}})},t.handleInputChange=function(e){var a=e.target,n=a.name,l=a.value;t.setState(function(e){var a=e.mapOfInform;return{mapOfInform:Object(O.a)({},a,Object(w.a)({},n,l))}})},t.handleChangeName=function(e){var a=e.target,n=a.name,l=a.value;t.setState(function(e){var a=e.mapOfInform;return{mapOfInform:Object(O.a)({},a,Object(w.a)({},n,l.replace(/[^\w]/g,"")))}})},t}return Object(_.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e=this.state,a=e.mapOfInform,t=e.errorsMap,n=this.props,r=n.handleOpenFinishWindow,c=n.handleCloseRegister;return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{className:"email-field",onSubmit:this.handleChangeForm},l.a.createElement("div",{className:"email__hide-login-btn"},l.a.createElement("button",{onClick:c,type:"button"},l.a.createElement("img",{src:"img/close_icon.svg",alt:"close"}))),l.a.createElement("h1",null,"Ask us how we can help you"),l.a.createElement("p",{className:"email-field-text"},"Lorem ipsum dolor sit amet"),l.a.createElement("p",{className:"email-field-name-text"},"Enter your name",l.a.createElement("div",{className:"email-field-name"},l.a.createElement("img",{src:"img/user_icon.svg",alt:"user icon"}),l.a.createElement("input",{type:"text",min:"3",onFocus:this.handleInputFocus,value:a.name,name:"name",onChange:this.handleChangeName}),t.name?l.a.createElement("div",{className:"email-field-name error__name"},l.a.createElement("h1",null,t.name)):"")),l.a.createElement("p",{className:"email-field-email email-field-name-text"},"Enter your email",l.a.createElement("div",{className:"email-field-email email-field-name"},l.a.createElement("img",{src:"img/email_icon.svg",alt:"email icon"}),l.a.createElement("input",{type:"email",name:"email",placeholder:"example@gmail.com",onFocus:this.handleInputFocus,onChange:this.handleChangeName}),t.email?l.a.createElement("div",{className:"email-field-name error__name"},l.a.createElement("h1",null," ",t.email)):"")),l.a.createElement("p",{className:"email-field-phone email-field-name-text"},"Your phone",l.a.createElement("div",{className:"email-field-phone email-field-name"},l.a.createElement("img",{className:"email-field_option",src:"img/FLAG.png",alt:"flag Ukrain"}),l.a.createElement("select",{name:"country",value:a.name,onFocus:this.handleInputFocus,onChange:this.handleInputChange},l.a.createElement("option",{value:"209",name:"country",disabled:!0,selected:!0,className:"img"},"English"),l.a.createElement("option",{value:"209",name:"country",className:"img"},"Ru"),l.a.createElement("option",{value:"038",name:"country",className:"img"},"Ukrain")),l.a.createElement("h1",null,a.country),l.a.createElement("div",{className:"divider"}),l.a.createElement("input",{type:"number",name:"phone",value:a.phone,onFocus:this.handleInputFocus,onChange:this.handleChangeName}),t.phone&&l.a.createElement("div",{className:"email-field-name error__name"},l.a.createElement("h1",null," ",t.phone)))),l.a.createElement("p",{className:"send-email"},l.a.createElement("button",{type:"submit",onClick:function(){return r(a)}},"Continue"))))}}]),a}(l.a.Component)),j=(t(42),t(43),function(e){var a=e.handleClose;return l.a.createElement("div",{className:"send_email"},l.a.createElement("div",{className:"send-email_close"},l.a.createElement("button",{type:"button",className:"email__hide-send_email",onClick:a},l.a.createElement("img",{src:"img/close_icon.svg",alt:"close window"}))),l.a.createElement("img",{src:"img/envelope.svg",alt:"Check your email"}),l.a.createElement("h1",{className:"send-email_text"},"Thank you"),l.a.createElement("p",{className:"send-email_check"},"please Check your email"),l.a.createElement("p",{className:"send__email_button"},l.a.createElement("button",{type:"button",className:"send-email_button",onClick:a},"Ok, tnx")))}),I=function(e){for(var a=e.phonesToBasket,t=e.openRegister,n=e.handleOpenRegistr,r=e.handleOpenFinishWindow,c=e.isLoaded,s=e.handleClose,o=e.handleCloseRegister,i=0,m=0;m<a.length;m+=1)i+=a[m].cost*a[m].quantity;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"login-box"},l.a.createElement("div",{className:"login_display"},l.a.createElement("form",{className:"login-form",action:"index.html",method:"post"},l.a.createElement("div",null,l.a.createElement("h1",null,"Total Price")),l.a.createElement("p",null,i.toFixed(2)),l.a.createElement("button",{onClick:n,type:"button",className:"show-login-btn button_pop_up"},"Pop Up")))),0!==a.length&&t?l.a.createElement(F,{openRegister:t,handleOpenFinishWindow:r,isLoaded:c,handleCloseRegister:o}):"",c?l.a.createElement(j,{handleClose:s}):"")},B=(t(44),function(e){var a=e.phonesToBasket,t=e.handleBasket,n=e.openRegister,r=e.handleOpenRegistr,c=e.isLoaded,o=e.handleOpenFinishWindow,i=e.handleClose,m=e.handleCloseRegister;return l.a.createElement("div",{className:"basket__wrapper__main"},0===a.length?l.a.createElement(s.b,{to:"/phones",className:"Phones__page",activeClassName:"phoneClassActive"},l.a.createElement("h1",{className:"basket__empty"},"Basket is empty"),"Go to Catalog"):l.a.createElement("div",{className:"basket__table"},l.a.createElement("div",{className:"basket__table-thead"},l.a.createElement("div",{className:"basketPage__table-thead-td"},"Delivery"),l.a.createElement("div",{className:"basketPage__table-thead-td"},"Count")),l.a.createElement("div",{className:"basket__cart-products__content"},a.map(function(e,a){return l.a.createElement("div",{key:e.id,className:"basketPage__cart-products__card-row"},l.a.createElement("div",{className:"basketPage__prime-container"},l.a.createElement("div",{className:"basketPage__table-tbody-td"},a+1,l.a.createElement("div",{className:"basketPage__name"},e.phone)),l.a.createElement("div",{className:"basketPage__table-tbody-td basketPage__cost"},(e.cost*e.quantity).toFixed(2))),l.a.createElement("div",{className:"basketPage__plus-minus"},l.a.createElement("div",{className:"basketPage__table-tbody-td"},l.a.createElement("button",{type:"button",onClick:function(){return t(e.id,"decrease")},className:"basketPage__table-quantity-minus"},"-")),l.a.createElement("div",{className:"basketPage__table-tbody-td"},l.a.createElement("p",{className:"basket__button__title"},e.quantity)),l.a.createElement("div",{className:"basketPage__table-tbody-td"},l.a.createElement("button",{type:"button",onClick:function(){return t(e.id,"increase")},className:"basketPage__table-quantity-plus"},"+")),l.a.createElement("div",null,l.a.createElement("button",{type:"button",onClick:function(){return t(e.id,"remove")},className:"basketPage__table-quantity-remove"},"x"))))})),l.a.createElement(s.b,{to:"/phones",className:"Phones__page",activeClassName:"phoneClassActive"},"go to Catalog")),l.a.createElement(I,{phonesToBasket:a,openRegister:n,handleBasket:t,handleOpenRegistr:r,isLoaded:c,handleOpenFinishWindow:o,handleClose:i,handleCloseRegister:m}))}),x=function(){return l.a.createElement("div",{className:"hom"},l.a.createElement(s.b,{className:"navlink",to:"/phones",exact:!0},l.a.createElement("div",{className:"home_page"})))},T=function(e,a){var t={alphabet:function(e,a){return e.name.localeCompare(a.name)}}[a];return Object(E.a)(e).sort(t)},S=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(l)))).state={phones:[],phonesVisible:[],phonesToBasket:[],sortField:"",openRegister:!1,isLoaded:!1},t.handleBasket=function(e,a){var n=t.state.phonesToBasket.findIndex(function(a){return a.id===e});t.setState(function(t){var l=Object(E.a)(t.phonesToBasket);switch(a){case"increase":return l[n].quantity+=1;case"decrease":1===l[n].quantity?l=l.filter(function(a){return a.id!==e}):l[n].quantity-=1;break;case"remove":l=l.filter(function(a){return a.id!==e})}return{phonesToBasket:l}})},t.setItemToBasket=function(e,a,n){t.state.phonesToBasket.find(function(a){return a.phone===e})?t.setState(function(t){return{phonesToBasket:[].concat(Object(E.a)(t.phonesToBasket.filter(function(a){return a.phone!==e})),[{cost:(100*Math.random()).toFixed(2),quantity:t.phonesToBasket.find(function(a){return a.phone===e}).quantity+1,phone:e,imageUrl:a}])}}):t.setState(function(t){return{phonesToBasket:[].concat(Object(E.a)(t.phonesToBasket),[{quantity:1,cost:(100*Math.random()).toFixed(2),phone:e,imageUrl:a,id:n}])}})},t.handleFilter=function(e){var a=e.target.value;t.setState(function(e){var t=e.phones.filter(function(e){return[e.name].join().toLowerCase().includes(a.toLowerCase())});return{phonesVisible:T(t,e.sortField)}})},t.handleSort=function(e){var a=e.target.value;t.setState(function(e){return{phonesVisible:T(e.phones,a),sortField:a}})},t.handleOpenFinishWindow=function(e){e.name.length>0&&e.email.length>0&&e.phone.length>0&&t.setState({isLoaded:!0,openRegister:!1})},t.handleCloseRegister=function(){t.setState({openRegister:!1})},t.handleClose=function(){t.setState({isLoaded:!1,phonesToBasket:[]})},t.handleOpenRegistr=function(){0!==t.state.phonesToBasket.length&&t.setState({openRegister:!0})},t}return Object(_.a)(a,e),Object(p.a)(a,[{key:"componentWillMount",value:function(){localStorage.getItem("phonesToBasket")&&this.setState({phonesToBasket:JSON.parse(localStorage.getItem("phonesToBasket"))})}},{key:"componentDidMount",value:function(){var e=Object(m.a)(i.a.mark(function e(){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:a=e.sent,this.setState({phones:a,phonesVisible:a});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){localStorage.setItem("phonesToBasket",JSON.stringify(this.state.phonesToBasket))}},{key:"render",value:function(){var e=this,a=this.state,t=a.phonesVisible,n=a.phonesToBasket,r=a.sortField,c=a.openRegister,o=a.isLoaded,i="https://mate-academy.github.io/phone-catalogue-static/";return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"header"},l.a.createElement("nav",{className:"nav__main_container"},l.a.createElement(s.b,{to:"/",exact:!0,className:"page__home phone__position Phones__page",activeClassName:"phoneClassActive"},l.a.createElement("div",{className:"App__logo"},l.a.createElement("div",{className:"App__logo__title"},"Home"))),l.a.createElement(s.b,{to:"/phones",className:"Phones__page",activeClassName:"phoneClassActive"},"Catalog"),l.a.createElement(s.b,{to:"/basket",className:"Phones__page page__basket",activeClassName:"phoneClassActive"},0===n.length?"":l.a.createElement("div",{className:"basket__animation"},n.length),l.a.createElement("div",{className:"App__basket"},l.a.createElement("div",{className:"App__basket__title"},"basket"))))),l.a.createElement(g.c,null,l.a.createElement(g.a,{path:"/",exact:!0,component:x}),l.a.createElement(g.a,{path:"/phones",exact:!0,render:function(){return l.a.createElement(f,{phones:t,urlImg:i,handleFilter:e.handleFilter,handleSort:e.handleSort,setItemToBasket:e.setItemToBasket,sortField:r})}}),l.a.createElement(g.a,{path:"/phones/:phoneId?",exact:!0,render:function(a){var n=a.match;return l.a.createElement(y,{phoneId:n.params.phoneId,urlImg:i,phones:t,handleClick:e.handleClick,setItemToBasket:e.setItemToBasket})}}),l.a.createElement(g.a,{path:"/basket",render:function(){return l.a.createElement(B,{phonesToBasket:n,handleBasket:e.handleBasket,openRegister:c,handleOpenFinishWindow:e.handleOpenFinishWindow,isLoaded:o,handleOpenRegistr:e.handleOpenRegistr,handleClose:e.handleClose,handleCloseRegister:e.handleCloseRegister})}}),l.a.createElement(g.a,{path:"*",component:C})))}}]),a}(l.a.Component);c.a.render(l.a.createElement(s.a,null,l.a.createElement(S,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.1e5555eb.chunk.js.map