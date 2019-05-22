<template>
  <div id="footer-wrap" v-show="isprofile" @click="handleC" >
    <div class="footer">
    <router-link to="/Home"><p class="one node0"></p>Home</router-link>
    <router-link to="/Categore"><p class="two node1"></p>Categore</router-link>
    <router-link to="/General"><p class="three node2"></p>General</router-link>
    <router-link to="/Cart/:id"><p class="four node3"></p>Cart</router-link>
    <router-link to="/Profile"><p class="five node4"></p>Profile</router-link>
  </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    name: "FooterNav",
    props: {
      isprofile: Boolean,
      isShow: Function
    },
    methods: {
      handleC(){
        let path=this.$route.path
        this.$emit("isShow", path)
        return path;
      }
    },
    watch:{
      handleC(newVal){
       this.$emit("isShow", newVal)
      }
    },
    mounted(){
        this.$emit("isShow", this.$route.path)
    }
  }

//  window.onload=function () {
//    let actives=document.querySelectorAll('#footer-wrap>.footer>a')
//    console.log(actives.length);
//    let nodes=document.querySelectorAll('#footer-wrap>.footer>a>p')
//    console.log(nodes.length);
//    for (var i = 0; i < actives.length; i++) {
//      let time= actives[i]
//          time.addEventListener('onclick', function () {
//          for (var j = 0; j < nodes.length; j++) {
//            nodes[j].removeAttribute("class")
//          }
//            nodes[i].setAttribute("class","node"+i)
//        })
//      }
//  }

</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
#footer-wrap
  position absolute
  left 0px
  right 0px
  bottom 0px
  margin auto
  .footer
    display flex
    justify-content space-around
    align-items center
    height 98px
    width 750px
    background-color #fff
    font-size 25px
    z-index 5
    a:hover
      color #b4282d
    p
      width 40px
      height 40px
      background-image  url("https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png")
      background-repeat no-repeat
      background-size 40px
      background-position 0px -252px
      &[class='two']
        background-position 0px -152px
      &[class='three']
        background-position 0px -352px
      &[class='four']
        background-position 0px -52px
      &[class='five']
        background-position 0px -452px
    .node0
      background-position 0px -202px
    .node1
      background-position 0px -102px
    .node2
      background-position 0px -301px
    .node3
      background-position 0px -2px
    .node4
      background-position 0px -402px
</style>
