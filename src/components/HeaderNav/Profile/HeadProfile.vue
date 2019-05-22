<template>
  <div id="header-wrap">
    <div class="header-top">
        <i class="iconfont icon-fangzi" style="font-size: 45px ;font-weight: 400"></i>
        <span>网易严选</span>
        <div><i class="iconfont icon-iconfontzhizuobiaozhun22"></i>
          <i class="iconfont icon-27"></i></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "HeadProfile"
  }
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
  @import "../../../css/headProfile/iconfont.css";
  #header-wrap
    width 750px
    height 100%
    background-color #F2F5F4
    .header-top
      height 43.98 * 2px
      width 750px
      background-color #fafafa
      display flex
      justify-content space-between
      align-items  center
      font-size 50px
      font-family '楷体'
      font-weight 700
      color rgba(0,0,0,0.8)
      i
        font-size 50px
        display inline-block
        padding 20px
      span
        display inline-block
        margin-left 30px

</style>
