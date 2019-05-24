<template>
  <div id="list">
    <ul class="kongList" >
      <li v-for="(item,index) in kongList" :key="index"><img :src="item.picUrl" >{{item.text}}</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "kingKongList",
    props:{
      kongList:Array
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
  @import "../../../css/profile/iconfont.css";
#list
  height 372px
  .kongList
    height 340px
    display flex
    flex-wrap wrap
    li
      width 110px
      height 156px
      text-align center
      margin 10px 20px 9px
      img
        display inline-block
        width 110px
        height 110px
</style>
