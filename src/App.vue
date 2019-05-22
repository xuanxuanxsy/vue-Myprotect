<template>
  <div id="app">
    <router-view></router-view>
    <xsy-FooterNav :isprofile="isProfile" @isShow="showout"></xsy-FooterNav>
  </div>
</template>

<script>
  import FooterNav from './components/FooterNav/FooterNav.vue'
export default {
  name: 'App',
  data(){
    return{
      isProfile:true
    }
  },
  components:{
    "xsy-FooterNav":FooterNav
  },
  methods:{
    showout(path){
          return this.isProfile= path!="/Profile"?true:false
          console.log(this.isProfile);
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  width 100%
  /*background-color antiquewhite*/
</style>
