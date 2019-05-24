import Home from '../pages/home/index.vue'
import Categore from '../pages/categore/index.vue'
import General from '../pages/general/index.vue'
import Cart from '../pages/cart/index.vue'
import Profile from '../pages/profile/index.vue'
import login from '../pages/profile/login.vue'
import logintwo from '../pages/profile/logintwo.vue'
import registered from '../pages/profile/registered.vue'

 const routes=[
  {
    path:'/Home',
    component:Home,
    meta:{
      isshow:true,
      isshowcart:false
    }
  },
   {
     path:'/Categore',
     component:Categore,
     meta:{
       isshow:true,
       isshowcart:false
     }
   },
   {
     path:'/General',
     component:General,
     meta:{
       isshow:true,
       isshowcart:false
     }
   },
   {
     path:'/Cart',
     component:Cart,
     meta:{
       isshow:true,
       isshowcart:true
     }
   },
   {
     path:'/Profile',
     component:Profile,
     meta:{
       isshow:false,
       isshowcart:false
     }
     },
   {
     path: '/login',
     component: login,
     meta: {
       isshow: false,
       isshowcart: false
     }
   },
   {
     path: '/logintwo',
     component: logintwo,
     meta: {
       isshow: false,
       isshowcart: false
     }
   },
   {
     path: '/registered',
     component: registered,
     meta: {
       isshow: false,
       isshowcart: false
     }
   },
   {
     path:'/',
     redirect:'Home',
     meta:{
       isshow:true,
       isshowcart:false
     }
   }
]
export default routes
