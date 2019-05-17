<template>
<div id="header-wrap">
 <div class="header-top">
    <div class="line">
      <h1>
        <a href="javascript:;">
          <img src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png">
        </a>
      </h1>
      <input type="text"  placeholder="搜索商品，共22222件好物"/>
      <button>
        登录
      </button>
    </div>
 </div>
<div class="header-bottom">
  <ul class="catage">
    <li><a href="javascript:;">推荐</a></li>
    <li><a href="javascript:;">居家生活</a></li>
    <li><a href="javascript:;">服饰鞋包</a></li>
    <li><a href="javascript:;">美食酒水</a></li>
  </ul>
</div>
</div>
</template>

<script type="text/ecmascript-6">
  export default{
    name:"HeaderNav"
  }
</script>
<style lang="stylus" ref="stylesheet/stylus" scoped>
  /*@import "../../adapter/adapter.js"*/
#header-wrap
  height 74 px
  background-color aquamarine
  .header-top
    height 37px
    width 100%
    background-color yellow
    line-height 37px
    .line
      height 37px
      display flex
      justify-content center
      align-items center
      a
        height 20px
        img
          height 20px
      input
        margin 0 10px 0 10px
        background-color #ededed
        border-width 0
        border-radius 2px
        height 28px
        width 200px
      button
        background-color #fff
        border 1px solid #b4282d
        border-radius 5px
        color #b4282d
  .header-bottom
    height 37px
    line-height 37px
    width 100%
    .catage
      display flex
      justify-content space-around
      font-size 16px
      li:hover
        border-bottom 1px solid #b4282d
        a
         color #b4282d

</style>
