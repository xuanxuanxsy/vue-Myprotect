<template>
  <div id="header-wrap">
    <div class="header-top">
      <input type="text"  placeholder="搜索商品，共22222件好物" /><span class="iconfont icon-iconfontzhizuobiaozhun22"></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "HeadCategore"
  }
</script>
<style lang="stylus" ref="stylesheet/stylus" scoped>
  @import "../../../css/headProfile/iconfont.css";
  #header-wrap
    width 750px
    height 100%
    background-color #fff
    .header-top
      border-bottom 1px solid #F0F0F0
      height 43.98 * 2px
      width 750px
      background-color #fff
      display flex
      justify-content space-between
      align-items  center
      font-size 50px
      font-family '楷体'
      font-weight 700
      color rgba(0,0,0,0.8)
      input
        margin auto
        background-color #ededed
        border-width 0
        border-radius 10px
        height 56px
        width 80%
        &::-webkit-input-placeholder
          padding-left 150px
      span
        position absolute
        left 150px
</style>
