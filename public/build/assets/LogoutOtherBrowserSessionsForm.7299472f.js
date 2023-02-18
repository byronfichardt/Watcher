import{e as p,u as v,o as n,c as k,w as t,a as s,f as a,F as x,i as b,g as B,b as e,d as l,h as i,J as S,n as C,t as c}from"./app.c4507954.js";import{_ as L}from"./ActionMessage.ad064828.js";import{a as M,b as O}from"./DialogModal.91ccbc9c.js";import{_ as V,a as $}from"./TextInput.1a33fa03.js";import{_ as w}from"./PrimaryButton.ce5e4ad0.js";import{_ as F}from"./SecondaryButton.d1f5c813.js";import"./SectionTitle.cc2fa214.js";import"./_plugin-vue_export-helper.cdc0426e.js";const I=e("div",{class:"max-w-xl text-sm text-gray-600"},`
                If necessary, you may log out of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password.
            `,-1),N={key:0,class:"mt-5 space-y-6"},z={key:0,fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor",class:"w-8 h-8 text-gray-500"},K=e("path",{d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"},null,-1),T=[K],U={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",class:"w-8 h-8 text-gray-500"},j=e("path",{d:"M0 0h24v24H0z",stroke:"none"},null,-1),D=e("rect",{x:"7",y:"4",width:"10",height:"16",rx:"1"},null,-1),E=e("path",{d:"M11 5h2M12 17v.01"},null,-1),H=[j,D,E],P={class:"ml-3"},A={class:"text-sm text-gray-600"},J={class:"text-xs text-gray-500"},q={key:0,class:"text-green-500 font-semibold"},G={key:1},Q={class:"flex items-center mt-5"},R={class:"mt-4"},ns={__name:"LogoutOtherBrowserSessionsForm",props:{sessions:Array},setup(m){const d=p(!1),u=p(null),r=v({password:""}),y=()=>{d.value=!0,setTimeout(()=>u.value.focus(),250)},h=()=>{r.delete(route("other-browser-sessions.destroy"),{preserveScroll:!0,onSuccess:()=>_(),onError:()=>u.value.focus(),onFinish:()=>r.reset()})},_=()=>{d.value=!1,r.reset()};return(W,f)=>(n(),k(M,null,{title:t(()=>[s(`
            Browser Sessions
        `)]),description:t(()=>[s(`
            Manage and log out your active sessions on other browsers and devices.
        `)]),content:t(()=>[I,s(),m.sessions.length>0?(n(),a("div",N,[(n(!0),a(x,null,b(m.sessions,(o,g)=>(n(),a("div",{key:g,class:"flex items-center"},[e("div",null,[o.agent.is_desktop?(n(),a("svg",z,T)):(n(),a("svg",U,H))]),s(),e("div",P,[e("div",A,c(o.agent.platform?o.agent.platform:"Unknown")+" - "+c(o.agent.browser?o.agent.browser:"Unknown"),1),s(),e("div",null,[e("div",J,[s(c(o.ip_address)+`,

                                `,1),o.is_current_device?(n(),a("span",q,"This device")):(n(),a("span",G,"Last active "+c(o.last_active),1))])])])]))),128))])):B("",!0),s(),e("div",Q,[l(w,{onClick:y},{default:t(()=>[s(`
                    Log Out Other Browser Sessions
                `)]),_:1}),s(),l(L,{on:i(r).recentlySuccessful,class:"ml-3"},{default:t(()=>[s(`
                    Done.
                `)]),_:1},8,["on"])]),s(),l(O,{show:d.value,onClose:_},{title:t(()=>[s(`
                    Log Out Other Browser Sessions
                `)]),content:t(()=>[s(`
                    Please enter your password to confirm you would like to log out of your other browser sessions across all of your devices.

                    `),e("div",R,[l(V,{ref_key:"passwordInput",ref:u,modelValue:i(r).password,"onUpdate:modelValue":f[0]||(f[0]=o=>i(r).password=o),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",onKeyup:S(h,["enter"])},null,8,["modelValue","onKeyup"]),s(),l($,{message:i(r).errors.password,class:"mt-2"},null,8,["message"])])]),footer:t(()=>[l(F,{onClick:_},{default:t(()=>[s(`
                        Cancel
                    `)]),_:1}),s(),l(w,{class:C(["ml-3",{"opacity-25":i(r).processing}]),disabled:i(r).processing,onClick:h},{default:t(()=>[s(`
                        Log Out Other Browser Sessions
                    `)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1}))}};export{ns as default};
