"use strict";(self["webpackChunkvue3_book_oneline"]=self["webpackChunkvue3_book_oneline"]||[]).push([[989],{3989:function(s,e,a){a.r(e),a.d(e,{default:function(){return rs}});var t=a(3396);const l={class:"container"};function n(s,e,a,n,o,i){const c=(0,t.up)("SignUpForm");return(0,t.wg)(),(0,t.iD)("div",l,[(0,t.Wm)(c)])}var o=a(7139);const i=s=>((0,t.dD)("data-v-904974c0"),s=s(),(0,t.Cn)(),s),c={class:"form-container"},r={key:0},d=i((()=>(0,t._)("i",{class:"fas fa-triangle-exclamation"},null,-1))),u={key:1},m=i((()=>(0,t._)("i",{class:"fas fa-circle-check"},null,-1))),p=i((()=>(0,t._)("span",{class:"title"},"회원가입",-1))),g={class:"sub-title"},f=i((()=>(0,t._)("button",{class:"btn btn--black btn--large"}," 회원가입 ",-1)));function k(s,e,a,l,n,i){const k=(0,t.up)("UserMessageModal"),h=(0,t.up)("CustomForm");return(0,t.wg)(),(0,t.iD)("div",c,[1==l.isShow?((0,t.wg)(),(0,t.j4)(k,{key:0,content:l.signUpMsg,onClose:l.modalClose},{body:(0,t.w5)((()=>[0==l.signUpMsg.status?((0,t.wg)(),(0,t.iD)("span",r,[d,(0,t.Uk)(" "+(0,o.zw)(l.signUpMsg.errorMsg),1)])):(0,t.kq)("",!0),1==l.signUpMsg.status?((0,t.wg)(),(0,t.iD)("span",u,[m,(0,t.Uk)(" "+(0,o.zw)(l.signUpMsg.successMsg),1)])):(0,t.kq)("",!0)])),_:1},8,["content","onClose"])):(0,t.kq)("",!0),(0,t.Wm)(h,{schema:s.schema,onChild:l.registerUser},{header:(0,t.w5)((()=>[p,(0,t._)("span",g,(0,o.zw)("방문자님 오신 것을 환영합니다. 회원정보를 입력해주세요."),1)])),main:(0,t.w5)((()=>[])),footer:(0,t.w5)((()=>[f])),_:1},8,["schema","onChild"])])}a(7658);const h=s=>((0,t.dD)("data-v-30112f25"),s=s(),(0,t.Cn)(),s),v={class:"custorm-form-conatiner"},b={class:"form-inner"},w={class:"form-inner"},_=["for"],y={key:0},C=["disabled","onClick"],U=["onClick"],I=h((()=>(0,t._)("i",{class:"fas fa-xmark"},null,-1))),q=[I],D={key:1,class:"error-status"},F=h((()=>(0,t._)("i",{class:"fas fa-circle-exclamation"},null,-1))),M={key:2,class:"warn"},x=h((()=>(0,t._)("i",{class:"fas fa-circle-exclamation"},null,-1))),z={key:3,class:"error-status"},W=h((()=>(0,t._)("i",{class:"fas fa-circle-exclamation"},null,-1))),S={key:4,class:"success-status"},j=h((()=>(0,t._)("i",{class:"fas fa-circle-check"},null,-1)));function Z(s,e,a,l,n,i){const c=(0,t.up)("Field"),r=(0,t.up)("Form");return(0,t.wg)(),(0,t.iD)("div",v,[(0,t._)("div",b,[(0,t.WI)(s.$slots,"header",{},void 0,!0),(0,t.WI)(s.$slots,"main",{},(()=>[(0,t.Wm)(r,{onSubmit:l.onSubmit},{default:(0,t.w5)((({meta:e,errors:n,values:i})=>[(0,t._)("div",w,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(a.schema.fields,(s=>((0,t.wg)(),(0,t.iD)("div",{key:s.name,class:"input-area"},[(0,t._)("label",{for:s.name},(0,o.zw)(s.label),9,_),(0,t.Wm)(c,{as:s.as,name:s.name,type:s.type,rules:s.rules,placeholder:s.placeholder,class:(0,o.C_)({invalid:void 0!==n[s.name],valid:e.valid&&1==l.state.msg}),onInput:s=>l.checkId(i["id"])},null,8,["as","name","type","rules","placeholder","class","onInput"]),0==s.status&&0==l.state.msg?((0,t.wg)(),(0,t.iD)("span",y,[(0,t._)("input",{disabled:1==l.state.msg,type:"button",class:"btn btn--outline--blue",value:"중복확인",onClick:s=>l.duplicateIdCheck(i["id"])},null,8,C),(0,t._)("button",{type:"button",class:"btn btn--outline--circle",onClick:s=>l.resetField(i["id"]="")},q,8,U)])):(0,t.kq)("",!0),void 0!==n[s.name]?((0,t.wg)(),(0,t.iD)("span",D,[F,(0,t.Uk)(" "+(0,o.zw)(n[s.name]),1)])):(0,t.kq)("",!0),void 0===i["id"]&&"id"==s.name?((0,t.wg)(),(0,t.iD)("span",M,[x,(0,t.Uk)(" "+(0,o.zw)(s.fail[1]),1)])):(0,t.kq)("",!0),""!==i["id"]&&!1===l.state.msg&&s.fail?((0,t.wg)(),(0,t.iD)("span",z,[W,(0,t.Uk)(" "+(0,o.zw)(s.fail[0]),1)])):(0,t.kq)("",!0),""!==i["id"]&&!0===l.state.msg&&s.fail?((0,t.wg)(),(0,t.iD)("span",S,[j,(0,t.Uk)(" "+(0,o.zw)(s.fail[2]),1)])):(0,t.kq)("",!0)])))),128)),(0,t.WI)(s.$slots,"footer",{},void 0,!0)])])),_:3},8,["onSubmit"])]),!0)])])}var $=a(5708),E=a(4870);function H(s,e){if(""===s||""===e)return;let a=e.split("@")[0].length-3;const t=s.replace(/(?<=.{1})./gi,"*"),l=e.replace(new RegExp(".(?=.{0,"+a+"}@)","gi"),"*");return{maskName:t,maskEmail:l}}var A=a(70),K={components:{Form:$.Form,Field:$.Field},props:{schema:{type:Object,required:!0}},emits:{child:null},setup(s,e){const a=(0,E.qj)({id:"",msg:""}),l=s=>{console.log("customForm signInfo",s);let{name:t,email:l}=s;const n=H(t,l),{maskName:o,maskEmail:i}=n;s.name=o,s.email=i,1==a.msg&&e.emit("child",s)},n=()=>{a.msg=""},o=s=>{a.id=s};(0,t.YP)((()=>a.id),((s,e)=>{s!==e&&(a.msg="")}));const i=async s=>{const e=/^(?=.*[a-zA-Z])[-a-zA-Z0-9_.]{5,20}$/;if("null"==s||void 0==s||!e.test(s))return!1;await A.ZP.get("http://localhost:3000/api/user/register/"+s,{headers:{"Content-Type":"application/json"}}).then((s=>{console.log(s.data),a.msg=s.data.status})).catch((s=>{console.log(s.response),a.msg=s.response.data.status}))};return{state:a,resetField:n,checkId:o,duplicateIdCheck:i,onSubmit:l}}},N=a(89);const O=(0,N.Z)(K,[["render",Z],["__scopeId","data-v-30112f25"]]);var P=O,R=a(9242);const T=s=>((0,t.dD)("data-v-b312c5b6"),s=s(),(0,t.Cn)(),s),Y={class:"modal-card"},B=T((()=>(0,t._)("i",{class:"fas fa-xmark"},null,-1))),G=[B],J={class:"modal-inner"},L={class:"modal-header"},Q={class:"modal-body"};function V(s,e,a,l,n,i){return(0,t.wg)(),(0,t.j4)(R.uT,{name:"fade",class:(0,o.C_)(["modal",{error:0==l.state.isError,success:1==a.content.status}])},{default:(0,t.w5)((()=>[(0,t._)("div",Y,[(0,t._)("button",{type:"text",class:"btn btn--close",onClick:e[0]||(e[0]=(0,R.iM)(((...s)=>l.close&&l.close(...s)),["self"]))},G),(0,t._)("div",J,[(0,t._)("div",L,[(0,t.WI)(s.$slots,"header",{},void 0,!0)]),(0,t._)("div",Q,[(0,t.WI)(s.$slots,"body",{},void 0,!0)]),(0,t.WI)(s.$slots,"footer",{},void 0,!0)])])])),_:3},8,["class"])}var X={props:{content:{type:Object,default:()=>{}}},emits:["close"],setup(s,e){const{content:a}=(0,E.BK)(s);let l=(0,E.qj)({show:!1,isError:(0,t.Fl)((()=>0==a.status))});const n=()=>{e.emit("close",l.show)};return{state:l,close:n}}};const ss=(0,N.Z)(X,[["render",V],["__scopeId","data-v-b312c5b6"]]);var es=ss,as=a(65),ts=a(2483),ls={components:{CustomForm:P,UserMessageModal:es},setup(){const s=(0,E.iH)(!1),e=(0,as.oR)(),a=(0,ts.tv)(),l=()=>e.commit("user/signUpCheck"),n=(0,t.Fl)((()=>e.state.user.signUpStatus)),o=t=>{s.value=!0,e.dispatch("user/regsiterUser",t),a.push({name:"Home"})},i=()=>{s.value=!1};return{isShow:s,signUpCheck:l,signUpMsg:n,registerUser:o,modalClose:i}},data:()=>{const s={fields:[{label:"이름",name:"name",as:"input",type:"text",rules:"required|name",placeholder:"이름 입력"},{label:"이메일",name:"email",as:"input",type:"text",rules:"required|email",placeholder:"이메일 주소(예시: hong@gmail.com)"},{label:"아이디",name:"id",as:"input",type:"text",rules:"required|id",status:!1,fail:["이미 사용중인 아이디입니다.","중복 확인은 필수입니다.","사용 가능한 아이디입니다."],placeholder:"아이디 입력(5자-20자)"},{label:"비밀번호",name:"password",as:"input",type:"password",rules:"required|password",placeholder:"비밀번호 입력(8자-20자)"},{label:"비밀번호 재확인",name:"passwordCheck",as:"input",type:"password",rules:"confirmed:@password",placeholder:"비밀번호 재입력"}]};return{schema:s}}};const ns=(0,N.Z)(ls,[["render",k],["__scopeId","data-v-904974c0"]]);var os=ns,is={components:{SignUpForm:os}};const cs=(0,N.Z)(is,[["render",n],["__scopeId","data-v-1717219c"]]);var rs=cs}}]);