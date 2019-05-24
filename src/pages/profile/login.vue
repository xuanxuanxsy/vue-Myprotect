<template>
 <div>
   <xsy-HeadProfile></xsy-HeadProfile>
   <div class="login">
     <div @click="$router.back()"><img src="https://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"></div>
   </div>
  <div class="phone">
    <input type="text" placeholder=" 请输入手机号">
    <input type="text"  placeholder=" 请输入短信验证码">
  </div>
   <div class="question">
     <button>遇到问题</button>
     <button>使用密码验证登录</button>
   </div>
   <div class="other">
     <button  @click="$router.push('/login')" ><i class="iconfont icon-shoujihao"></i>&nbsp;&nbsp;登录</button>
     <button  @click="$router.back()" ><i class="iconfont icon-youxiang"></i>&nbsp;&nbsp;其他登录方式</button>
     <button>注册账号 ></button>
   </div>
 </div>
</template>

<script type="text/ecmascript-6">
  import HeadProfile from "../../components/HeaderNav/Profile/HeadProfile.vue"
  export default {
    name: "login",
    components: {
      'xsy-HeadProfile': HeadProfile
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
  @import "../../css/profile/iconfont.css"
  .login
    padding-top 30*2px
    display flex
    justify-content center
    img
      width 96*2px
      height 31*2px
  .phone
    width 100%
    display flex
    flex-direction column
    align-items  center
    padding-top 57*2px
    input
      margin-top 30px
      width 335.34*2px
      height 45.69*2px
      outline none
      border-width 0
      border-bottom 1px solid #e9e9e9
      font-size 30px
  .question
    width 335.34*2px
    padding-left 40px
    display flex
    justify-content space-between
    button
      background-color #fff
      line-height 90px
      border 0
      outline none
      font-size 28px
      color #6F6F6F
  .other
    display flex
    flex-direction column
    align-items center
    button
      border 0
      outline none
      padding 0
      background-color #b4282d
      color #FFF
      width 335*2px
      height 47*2px
      margin 15px 0
      border-radius 10px
      &:nth-child(2)
        background-color rgba(0,0,0,0)
        border 2px solid #b4282d
        color #b4282d
      &:nth-child(3)
        height 40*2px
        background-color rgba(0,0,0,0)
        color #222222
</style>
