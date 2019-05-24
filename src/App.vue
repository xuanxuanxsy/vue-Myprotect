<template>
  <div id="app">
    <router-view></router-view>
    <xsy-FooterNav v-show="$route.meta.isshow"></xsy-FooterNav>
  </div>
</template>

<script>
  import FooterNav from './components/FooterNav/FooterNav.vue'
export default {
  name: 'App',
  data(){
    return{

    }
  },
  components:{
    "xsy-FooterNav":FooterNav
  },
  methods:{
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  width 100%
  /*background-color antiquewhite*/
</style>
