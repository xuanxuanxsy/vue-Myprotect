<template>
  <div class="profile-wrap">
    <xsy-HeadProfile></xsy-HeadProfile>
    <div class="profile">
    <div @click="$router.back()"><img src="https://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"></div>
    <button><i class="iconfont icon-shoujihao"></i>&nbsp;&nbsp;手机号码登陆</button>
    <button><i class="iconfont icon-youxiang"></i>&nbsp;&nbsp;邮箱账号登陆</button>
    <button>手机号快捷登录 ></button>
    <div class="iconStyle">
      <div><i class="iconfont icon-wechat-fill"></i>微信</div>|
      <div><i class="iconfont icon-qq"></i>qq</div>|
      <div><i class="iconfont icon-weibo"></i>微博</div>
    </div>
  </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import HeadProfile from "../../components/HeaderNav/Profile/HeadProfile.vue"
  export default {
    name: "Profile",
    components:{
      'xsy-HeadProfile':HeadProfile
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
@import "../../css/profile/iconfont.css";
.profile-wrap
  width 100%
  height 100%
  .profile
    height 623*2px
    background-color #F2F5F4
    display flex
    flex-direction column
    align-items center
    >div
      height 204.97*2px
      display flex
      justify-content center
      align-items center
      img
        width 133.98*2px
        height 45*2px
    button
      border 0
      padding 0
      background-color #b4282d
      color #FFF
      width 335*2px
      height 47*2px
      margin 15px 0
      border-radius 10px
      &:nth-child(3)
        background-color rgba(0,0,0,0)
        border 2px solid #b4282d
        color #b4282d
      &:nth-child(4)
        height 40*2px
        background-color rgba(0,0,0,0)
        color #222222
    .iconStyle
      position absolute
      bottom 0
      left 0
      right 0
      margin auto
      div
       margin 20px
       color:  #7F7F7F
       font-size 30px
       i
        margin-right 10px
        width 40px
        height 40px
        font-size 40px
</style>
