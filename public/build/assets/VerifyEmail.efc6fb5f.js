import{u as h,q as _,o as r,f as l,d as t,h as s,a as e,w as o,F as p,H as y,g,b as i,n as v,L as d,z as x}from"./app.c4507954.js";import{A as b,_ as k}from"./AuthenticationCardLogo.73486803.js";import{_ as w}from"./PrimaryButton.ce5e4ad0.js";import"./_plugin-vue_export-helper.cdc0426e.js";const V=i("div",{class:"mb-4 text-sm text-gray-600"},`
            Before continuing, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another.
        `,-1),E={key:0,class:"mb-4 font-medium text-sm text-green-600"},B=["onSubmit"],C={class:"mt-4 flex items-center justify-between"},j={__name:"VerifyEmail",props:{status:String},setup(c){const m=c,n=h(),u=()=>{n.post(route("verification.send"))},f=_(()=>m.status==="verification-link-sent");return(a,L)=>(r(),l(p,null,[t(s(y),{title:"Email Verification"}),e(),t(b,null,{logo:o(()=>[t(k)]),default:o(()=>[e(),V,e(),s(f)?(r(),l("div",E,`
            A new verification link has been sent to the email address you provided in your profile settings.
        `)):g("",!0),e(),i("form",{onSubmit:x(u,["prevent"])},[i("div",C,[t(w,{class:v({"opacity-25":s(n).processing}),disabled:s(n).processing},{default:o(()=>[e(`
                    Resend Verification Email
                `)]),_:1},8,["class","disabled"]),e(),i("div",null,[t(s(d),{href:a.route("profile.show"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:o(()=>[e(`
                        Edit Profile`)]),_:1},8,["href"]),e(),t(s(d),{href:a.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900 ml-2"},{default:o(()=>[e(`
                        Log Out
                    `)]),_:1},8,["href"])])])],40,B)]),_:1})],64))}};export{j as default};
