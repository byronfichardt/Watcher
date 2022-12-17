import{e as i,u as _,o as y,c as w,w as o,a as e,b as c,d as t,h as a,J as h,n as v}from"./app.73820aa0.js";import{a as k,b as x}from"./DialogModal.e1c9f7c0.js";import{_ as m}from"./DangerButton.f2588ebe.js";import{_ as b,a as g}from"./TextInput.b811423b.js";import{_ as C}from"./SecondaryButton.da927590.js";import"./SectionTitle.c5aa789c.js";import"./_plugin-vue_export-helper.cdc0426e.js";const D=c("div",{class:"max-w-xl text-sm text-gray-600"},`
                Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain.
            `,-1),V={class:"mt-5"},$={class:"mt-4"},S={__name:"DeleteUserForm",setup(A){const n=i(!1),r=i(null),s=_({password:""}),p=()=>{n.value=!0,setTimeout(()=>r.value.focus(),250)},u=()=>{s.delete(route("current-user.destroy"),{preserveScroll:!0,onSuccess:()=>l(),onError:()=>r.value.focus(),onFinish:()=>s.reset()})},l=()=>{n.value=!1,s.reset()};return(U,d)=>(y(),w(k,null,{title:o(()=>[e(`
            Delete Account
        `)]),description:o(()=>[e(`
            Permanently delete your account.
        `)]),content:o(()=>[D,e(),c("div",V,[t(m,{onClick:p},{default:o(()=>[e(`
                    Delete Account
                `)]),_:1})]),e(),t(x,{show:n.value,onClose:l},{title:o(()=>[e(`
                    Delete Account
                `)]),content:o(()=>[e(`
                    Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account.

                    `),c("div",$,[t(b,{ref_key:"passwordInput",ref:r,modelValue:a(s).password,"onUpdate:modelValue":d[0]||(d[0]=f=>a(s).password=f),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",onKeyup:h(u,["enter"])},null,8,["modelValue","onKeyup"]),e(),t(g,{message:a(s).errors.password,class:"mt-2"},null,8,["message"])])]),footer:o(()=>[t(C,{onClick:l},{default:o(()=>[e(`
                        Cancel
                    `)]),_:1}),e(),t(m,{class:v(["ml-3",{"opacity-25":a(s).processing}]),disabled:a(s).processing,onClick:u},{default:o(()=>[e(`
                        Delete Account
                    `)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1}))}};export{S as default};
