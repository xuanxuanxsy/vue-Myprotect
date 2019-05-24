<template>
  <div id="list">
    <div  class="descList" v-for="(item,index) in descList ":key="index"><img :src="item.icon"/><span>{{item.desc}}</span></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "policyDescList",
    props:{
      descList:Array
    }
  }
</script>

<style  lang="stylus" ref="stylesheet/stylus" scoped>
  @import "../../../css/profile/iconfont.css";
#list
  height 72px
  line-height 72px
  display flex
  justify-content space-around
  .descList
    display flex
    align-items center
    img
      width 32px
      height 32px
      padding-right 10px
    span
      color #b4282d
</style>
