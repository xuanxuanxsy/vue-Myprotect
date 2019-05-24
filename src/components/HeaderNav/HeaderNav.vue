<template>
  <div id="header-wrap">
    <div v-if='!$route.meta.isshowcart'>
      <div class="header-top">
        <div class="line">
          <h1>
            <a href="javascript:;">
              <img
                src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png">
            </a>
          </h1>
          <input type="text" placeholder="搜索商品，共22222件好物"/>
          <button>
            登录
          </button>
        </div>
      </div>
      <div class="header-bottom" ref="wrapper">
        <div class="seller-content">
          <div class="list">
            <div @click="changeOn(index)" class="navItem" :class="{on:index === itemIndex}" v-for="(item, index) in ['推荐',2,3,3,4,4,5,5,6,6,6,6,6,6]">{{item}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="header-top">
        <div class="lingjuan">
          <p style="font-size:18px">购物车</p>
          <a href="javascript:;" class="aa" style="color:#b4282d;font-size:16px">领劵</a></div>
      </div>
      <div class="bottom">
        <ul>
          <li><a href="javascript:;">。30天无忧退货</a></li>
          <li><a href="javascript:;">。48小时快速退款</a></li>
          <li><a href="javascript:;">。满88元包邮费</a></li>
        </ul>

      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import BScroll  from "better-scroll"
  export default{
    name: "HeaderNav",
    props: ['id'],
    data(){
      return{
        itemIndex: 0
      }
    },
    methods:{
      changeOn(index){
        this.itemIndex = index
//        console.log(this.itemIndex);
      }
    },
    mounted(){
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.wrapper, {
            scrollX: true,
            scrollY: false,
            click: true
          })
        }
      })
    }
  }
</script>
<style lang="stylus" ref="stylesheet/stylus" scoped>
  #header-wrap
    position fixed
    z-index 5
    width 750px
    height 147.984px
    background-color #fff
    .header-top
      height 87.98px
      width 750px
      display flex
      justify-content center
      align-items center
      .line
        width 690px
        height 55.969px
        display flex
        justify-content center
        align-items center
        a
          height 39.984px
          width 138px
          img
            height 39.984px
        input
          margin 0 16px 0 20px
          background-color #ededed
          border-width 0
          border-radius 10px
          height 56px
          width 442.06px
        button
          background-color #fff
          border 0.1em solid #b4282d
          border-radius 5px
          color #b4282d
          width 72px
          height 37.984px
          font-size 10px
          padding 0px
      .lingjuan
        margin-top 30px
        margin-left 30px
        width 750px
        height 87.98px
        font-weight 400
        .aa
          position absolute
          right 50px
          top 16px
    .header-bottom
      height 60px
      width 750px
      .seller-content
        height 55px
        width 2000px
        .list
          height 55px
          width 100%
          display flex
          .navItem
            width: 100px;
            line-height 60px
            height 55px
            font-size 25px
            padding 0 16px
            text-align center
          .on:after
            content ''
            display block
            height 3px
            background red
            margin-top -4px

    .bottom
      height 60px
      line-height 60px
      background-color #f4f4f4
      ul
        display flex
        justify-content space-around
        padding-top 15px
</style>
