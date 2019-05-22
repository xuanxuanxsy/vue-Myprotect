import Home from '../pages/home/index.vue'
import Categore from '../pages/categore/index.vue'
import General from '../pages/general/index.vue'
import Cart from '../pages/cart/index.vue'
import Profile from '../pages/profile/index.vue'
 const routes=[
  {
    path:'/Home',
    component:Home
  },
   {
     path:'/Categore',
     component:Categore
   },
   {
     path:'/General',
     component:General
   },
   {
     path:'/Cart/:id',
     component:Cart,
     props:true
   },
   {
     path:'/Profile',
     component:Profile
   },
   {
     path:'/',
     redirect:'Home'
   }
]
export default routes
