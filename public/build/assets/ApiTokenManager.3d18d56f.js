import{o as i,c as L,w as s,b as o,a as e,r as y,u as x,e as b,f as c,d as n,g as v,h as a,F as $,i as w,n as C,t as k}from"./app.94d75728.js";import{_ as M}from"./ActionMessage.f7fc0ccc.js";import{_ as U,a as z,b as T}from"./DialogModal.a9ef87eb.js";import{_ as S}from"./Checkbox.879e196c.js";import{_ as W}from"./DangerButton.44076a2a.js";import{_ as E}from"./FormSection.f49eedbb.js";import{_ as Y,a as q}from"./TextInput.ac878703.js";import{_ as B}from"./InputLabel.25ad5c72.js";import{_ as F}from"./PrimaryButton.da9b7757.js";import{_ as A}from"./SecondaryButton.fac3379f.js";import{S as G}from"./SectionBorder.45222380.js";import"./SectionTitle.ea338f52.js";import"./_plugin-vue_export-helper.cdc0426e.js";const H={class:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},J={class:"sm:flex sm:items-start"},K=o("div",{class:"mx-auto shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"},[o("svg",{class:"h-6 w-6 text-red-600",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})])],-1),O={class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},Q={class:"text-lg"},R={class:"mt-2"},X={class:"flex flex-row justify-end px-6 py-4 bg-gray-100 text-right"},Z={__name:"ConfirmationModal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(d,{emit:P}){const r=()=>{P("close")};return(m,h)=>(i(),L(U,{show:d.show,"max-width":d.maxWidth,closeable:d.closeable,onClose:r},{default:s(()=>[o("div",H,[o("div",J,[K,e(),o("div",O,[o("h3",Q,[y(m.$slots,"title")]),e(),o("div",R,[y(m.$slots,"content")])])])]),e(),o("div",X,[y(m.$slots,"footer")])]),_:3},8,["show","max-width","closeable"]))}},ee={class:"col-span-6 sm:col-span-4"},se={key:0,class:"col-span-6"},te={class:"mt-2 grid grid-cols-1 md:grid-cols-2 gap-4"},oe={class:"flex items-center"},ne={class:"ml-2 text-sm text-gray-600"},le={key:0},ae={class:"mt-10 sm:mt-0"},ie={class:"space-y-6"},re={class:"flex items-center"},ce={key:0,class:"text-sm text-gray-400"},de=["onClick"],me=["onClick"],ue=o("div",null,`
                    Please copy your new API token. For your security, it won't be shown again.
                `,-1),pe={key:0,class:"mt-4 bg-gray-100 px-4 py-2 rounded font-mono text-sm text-gray-500"},fe={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},_e={class:"flex items-center"},ve={class:"ml-2 text-sm text-gray-600"},Be={__name:"ApiTokenManager",props:{tokens:Array,availablePermissions:Array,defaultPermissions:Array},setup(d){const r=x({name:"",permissions:d.defaultPermissions}),m=x({permissions:[]}),h=x(),g=b(!1),p=b(null),f=b(null),I=()=>{r.post(route("api-tokens.store"),{preserveScroll:!0,onSuccess:()=>{g.value=!0,r.reset()}})},V=u=>{m.permissions=u.abilities,p.value=u},j=()=>{m.put(route("api-tokens.update",p.value),{preserveScroll:!0,preserveState:!0,onSuccess:()=>p.value=null})},D=u=>{f.value=u},N=()=>{h.delete(route("api-tokens.destroy",f.value),{preserveScroll:!0,preserveState:!0,onSuccess:()=>f.value=null})};return(u,l)=>(i(),c("div",null,[n(E,{onSubmitted:I},{title:s(()=>[e(`
                Create API Token
            `)]),description:s(()=>[e(`
                API tokens allow third-party services to authenticate with our application on your behalf.
            `)]),form:s(()=>[o("div",ee,[n(B,{for:"name",value:"Name"}),e(),n(Y,{id:"name",modelValue:a(r).name,"onUpdate:modelValue":l[0]||(l[0]=t=>a(r).name=t),type:"text",class:"mt-1 block w-full",autofocus:""},null,8,["modelValue"]),e(),n(q,{message:a(r).errors.name,class:"mt-2"},null,8,["message"])]),e(),d.availablePermissions.length>0?(i(),c("div",se,[n(B,{for:"permissions",value:"Permissions"}),e(),o("div",te,[(i(!0),c($,null,w(d.availablePermissions,t=>(i(),c("div",{key:t},[o("label",oe,[n(S,{checked:a(r).permissions,"onUpdate:checked":l[1]||(l[1]=_=>a(r).permissions=_),value:t},null,8,["checked","value"]),e(),o("span",ne,k(t),1)])]))),128))])])):v("",!0)]),actions:s(()=>[n(M,{on:a(r).recentlySuccessful,class:"mr-3"},{default:s(()=>[e(`
                    Created.
                `)]),_:1},8,["on"]),e(),n(F,{class:C({"opacity-25":a(r).processing}),disabled:a(r).processing},{default:s(()=>[e(`
                    Create
                `)]),_:1},8,["class","disabled"])]),_:1}),e(),d.tokens.length>0?(i(),c("div",le,[n(G),e(),o("div",ae,[n(z,null,{title:s(()=>[e(`
                        Manage API Tokens
                    `)]),description:s(()=>[e(`
                        You may delete any of your existing tokens if they are no longer needed.
                    `)]),content:s(()=>[o("div",ie,[(i(!0),c($,null,w(d.tokens,t=>(i(),c("div",{key:t.id,class:"flex items-center justify-between"},[o("div",null,k(t.name),1),e(),o("div",re,[t.last_used_ago?(i(),c("div",ce,`
                                        Last used `+k(t.last_used_ago),1)):v("",!0),e(),d.availablePermissions.length>0?(i(),c("button",{key:1,class:"cursor-pointer ml-6 text-sm text-gray-400 underline",onClick:_=>V(t)},`
                                        Permissions
                                    `,8,de)):v("",!0),e(),o("button",{class:"cursor-pointer ml-6 text-sm text-red-500",onClick:_=>D(t)},`
                                        Delete
                                    `,8,me)])]))),128))])]),_:1})])])):v("",!0),e(),n(T,{show:g.value,onClose:l[3]||(l[3]=t=>g.value=!1)},{title:s(()=>[e(`
                API Token
            `)]),content:s(()=>[ue,e(),u.$page.props.jetstream.flash.token?(i(),c("div",pe,k(u.$page.props.jetstream.flash.token),1)):v("",!0)]),footer:s(()=>[n(A,{onClick:l[2]||(l[2]=t=>g.value=!1)},{default:s(()=>[e(`
                    Close
                `)]),_:1})]),_:1},8,["show"]),e(),n(T,{show:p.value!=null,onClose:l[6]||(l[6]=t=>p.value=null)},{title:s(()=>[e(`
                API Token Permissions
            `)]),content:s(()=>[o("div",fe,[(i(!0),c($,null,w(d.availablePermissions,t=>(i(),c("div",{key:t},[o("label",_e,[n(S,{checked:a(m).permissions,"onUpdate:checked":l[4]||(l[4]=_=>a(m).permissions=_),value:t},null,8,["checked","value"]),e(),o("span",ve,k(t),1)])]))),128))])]),footer:s(()=>[n(A,{onClick:l[5]||(l[5]=t=>p.value=null)},{default:s(()=>[e(`
                    Cancel
                `)]),_:1}),e(),n(F,{class:C(["ml-3",{"opacity-25":a(m).processing}]),disabled:a(m).processing,onClick:j},{default:s(()=>[e(`
                    Save
                `)]),_:1},8,["class","disabled"])]),_:1},8,["show"]),e(),n(Z,{show:f.value!=null,onClose:l[8]||(l[8]=t=>f.value=null)},{title:s(()=>[e(`
                Delete API Token
            `)]),content:s(()=>[e(`
                Are you sure you would like to delete this API token?
            `)]),footer:s(()=>[n(A,{onClick:l[7]||(l[7]=t=>f.value=null)},{default:s(()=>[e(`
                    Cancel
                `)]),_:1}),e(),n(W,{class:C(["ml-3",{"opacity-25":a(h).processing}]),disabled:a(h).processing,onClick:N},{default:s(()=>[e(`
                    Delete
                `)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{Be as default};
