<template>
  <div>
    <xsy-HeadProfile></xsy-HeadProfile>
    <div class="login">
      <div @click="$router.back()">手机号注册</div>
    </div>
    <div class="phone">
      <input type="text" placeholder=" 请输入手机号" v-validate="{required: true, regex: /^1\d{10}$/}">
      <input type="text"  placeholder=" 请输入短信验证码">
      <input type="text" placeholder=" 请输入密码">
      <div class="validation" @click="sendCode">{{ computeTime>0?`${computeTime}s`:'获取验证码'}}</div>
    </div>
    <div class="other">
      <button  @click="$router.push('/profile')" ><i class="iconfont icon-shoujihao"></i>&nbsp;&nbsp;注册</button>
      <button>邮箱账号注册 ></button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import HeadProfile from "../../components/HeaderNav/Profile/HeadProfile.vue"
  export default {
    name: "registered",
    data(){
      return{
        computeTime:'',
        sendCodeId:''
      }
    },
    components:{
    'xsy-HeadProfile':HeadProfile
  },
     methods:{
      sendCode(){
        this.computeTime = 30//最大时间
        if( this.sendCodeId && this.computeTime>0){
          clearInterval(sendCodeId)
        }
         this.sendCodeId=setInterval(()=>{
            this.computeTime-=1
            if(this.computeTime==0){
              clearInterval(this.sendCodeId)
            }
          },1000)
        //发验证码

      }
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
  @import "../../css/profile/iconfont.css"
  .login
    padding-top 30*2px
    display flex
    justify-content center
    font-size 35px
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
    .validation
      position absolute
      top 480px
      right 30*2px
      width 85*2px
      height 30*2px
      border 2px solid #bfbfbf
      border-radius 10px
      text-align center
      line-height 30*2px
      font-size 28px
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
        height 40*2px
        background-color rgba(0,0,0,0)
        color #222222
</style>

