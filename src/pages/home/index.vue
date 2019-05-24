<template>
  <div id="home-wrap">
    <xsy-HeaderNav></xsy-HeaderNav>
    <div class="home">
    <div class="swiper-container">
       <div class="swiper-wrapper">
       <div class="swiper-slide">
            <div><img src="https://yanxuan.nosdn.127.net/a1e7ea79a6221552eb0e00e5552bc74f.jpg?imageView&quality=75&thumbnail=750x0"></div>
          </div>
       <div class="swiper-slide">
         <div><img src="https://yanxuan.nosdn.127.net/fdf6de9f80d2200d8fe6d267dff99151.jpg?imageView&quality=75&thumbnail=750x0"></div>
        </div>
       <div class="swiper-slide">
          <div><img src="https://yanxuan.nosdn.127.net/8db54c351c497620aff3b0e65dd5f95c.jpg?imageView&quality=75&thumbnail=750x0"></div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <!--服务策略-->
    <policyDescList :descList="descList"></policyDescList>
    <!--商品导航-->
    <kingKongList :kongList="kongList"></kingKongList>

    <div class="worker"><img src="https://yanxuan.nosdn.127.net/899b91b3388e4734d662a9083b1d0af0.png">
    </div>

    <!--购物导航榜单-->
  <sceneLight :shoppingGuide="shoppingGuide"></sceneLight>
  </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {reqMockHome} from '../../api'
  import HeaderNav from '../../components/HeaderNav/HeaderNav.vue'
  import policyDescList from './policyDescList/policyDescList.vue'
  import kingKongList from './kingKongList/kingKongList.vue'
  import sceneLight from './sceneLight/sceneLight.vue'
  export default{
    name:"Home",
    data(){
      return {
        descList:[],
        kongList:[],
        shoppingGuide:[]
      }
    },
    components:{
      "xsy-HeaderNav":HeaderNav,
      policyDescList,
      kingKongList,
      sceneLight
    },
    async mounted(){
      new Swiper('.swiper-container',{
        loop:true,
        autoplay: {
          delay: 1000,
        },
        pagination:{
          el:'.swiper-pagination'
        },
      })
      let result=await reqMockHome()
      this.descList=result.data.policyDescList
      this.kongList=result.data.kingKongModule.kingKongList
      this.shoppingGuide=result.data.sceneLightShoppingGuideModule

    }
  }
</script>
<style lang="stylus" ref="stylesheet/stylus" scoped>
#home-wrap
  height 100%
  width 100%
  .home
    padding-top 150px
    .worker
      margin-top  -10px
      img
        height 160px
</style>
<style lang="stylus" ref="stylesheet/stylus">
  //单独写样式
    .swiper-container
      width 100%
      height 100%
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap
          img
            display inline-block
            width 750px
            height 370px
      .swiper-pagination
        >span.swiper-pagination-bullet
          width 50px
          height 5px
          background-color #e9e9e9
          border-radius 2px
</style>
