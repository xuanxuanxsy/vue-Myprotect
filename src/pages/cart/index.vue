<template>
 <div class="cart-wrap">
   <xsy-HeaderNav></xsy-HeaderNav>
   <div class="cart"><div>
     <img src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png">
   </div>
     <p>去添加点什么吧</p>
     <button>登录</button></div>
 </div>
</template>

<script type="text/ecmascript-6">
  import HeaderNav from '../../components/HeaderNav/HeaderNav.vue'
  export default {
    name: "Cart",
    components:{
      "xsy-HeaderNav":HeaderNav
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
.cart-wrap
  width 100%
  height 100%
  .cart
    height 1246px
    background-color #f4f4f4
    display flex
    align-items center
    justify-content center
    flex-direction column
    font-size 30px
    color #B8B8B8
    img
      margin-top -180px
      height 248px
  button
    border 0
    background-color #b4282d
    color #FFF
    width 480px
    height 92px
    margin-top 100px
</style>
