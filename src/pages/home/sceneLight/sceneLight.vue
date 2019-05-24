<template>
<div id="list">
  <div class="shopping" v-for="(item , index) in shoppingGuide" :key="index"><div>
    <div>{{item.styleItem.title}}</div>
    <div>{{item.styleItem.desc}}</div>
    <div class="pic" ><div  v-for="(i,index) in item.styleItem.picUrlList" :key="index"><img :src="i"/></div>
  </div>
    </div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "sceneLight",
    props:{
      shoppingGuide:Array
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
#list
  height 536px
  width 694px
  display flex
  margin auto
  flex-wrap wrap
  justify-content center
  align-items center
  .shopping
    width 343px
    height 264px
    background-color #F5F5F5
    margin 2px 2px
    >div
      padding 20px 0 0 20px
      .pic
        display flex
        width 150px
        img
          width 150px
          height 150px
</style>
