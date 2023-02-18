import{o as s,f as n,c as l,w as o,h as i,F as g,d as h,a as e,g as d,b as t,t as m,L as c}from"./app.c4507954.js";const x={class:"relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0"},f={key:0,class:"hidden fixed top-0 right-0 px-6 py-4 sm:block"},u={class:"max-w-6xl mx-auto sm:px-6 lg:px-8"},y=t("div",{class:"flex justify-center pt-8 sm:justify-center sm:pt-0"},[t("img",{src:"/img/eyes font page.png",alt:"Watcher",class:"block h-32 w-auto fill-current text-gray-600"})],-1),p=t("div",{class:"mt-8 overflow-hidden shadow sm:rounded-lg"},[t("h1",{class:"text-9xl text-white"},"Watcher")],-1),k={class:"flex justify-center mt-4 sm:items-center"},v={class:"text-center text-sm text-gray-500 sm:text-right sm:ml-0"},b={__name:"Welcome",props:{canLogin:Boolean,canRegister:Boolean,laravelVersion:String,phpVersion:String},setup(a){return(r,_)=>(s(),n("div",x,[a.canLogin?(s(),n("div",f,[r.$page.props.user?(s(),l(i(c),{key:0,href:r.route("dashboard"),class:"text-sm text-gray-700 dark:text-gray-500 underline"},{default:o(()=>[e("Dashboard")]),_:1},8,["href"])):(s(),n(g,{key:1},[h(i(c),{href:r.route("login"),class:"text-sm text-gray-300 dark:text-gray-100 underline"},{default:o(()=>[e("Log in")]),_:1},8,["href"]),e(),a.canRegister?(s(),l(i(c),{key:0,href:r.route("register"),class:"ml-4 text-sm text-gray-300 dark:text-gray-100 underline"},{default:o(()=>[e("Register")]),_:1},8,["href"])):d("",!0)],64))])):d("",!0),e(),t("div",u,[y,e(),p,e(),t("div",k,[t("div",v,`
                    Laravel v`+m(a.laravelVersion)+" (PHP v"+m(a.phpVersion)+`)
                `,1)])])]))}};export{b as default};
