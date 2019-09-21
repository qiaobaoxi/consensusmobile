<template>
  <section>
    <img class="menuMore" v-lazy="require('../assets/menuMore.png')" @click="switcnPage" alt="menuMore" srcset="">
    <img v-lazy="require('../assets/logo.png')" class="logo" alt="bannerText"> 
    <img v-lazy="bannerTextImg" class="bannerText" alt="bannerText"> 
    <img v-lazy="require('../assets/bannerAnmite.png')" class="bannerAnmite" alt="bannerAnmite">
  </section>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return{
    }
  },
  mounted() {
  },
  computed:{
    bannerTextImg(){
      return  this.$store.state.i18n.bannerTextImg
    }
  },
  methods:{
    switcnPage(){
      this.$store.commit('switchPage',false);
    }
  },
  components:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    section{
      position: relative;
      width: 100%;
      height: 1120px;
      background: url("../assets/banner.png") 0 0 no-repeat;
      background-size: 100% 100%; 
      .menuMore{
          margin: 28px 0 0 48px;
          width: 48px;
          height: 48px;
      }
      .logo,.bannerText,.bannerAnmite{
          position: absolute;
          left: 0;
          right: 0;
          margin: auto;
      }
      .logo{
          top: 22px;
          width: 120px;
          height: 60px;
      }
      .bannerText{
          top: 152px;
          width: 620px;
          height: 290px;
      }
      .bannerAnmite{
          top: 488px;
          width: 462;
          height: 532px;
      }
    }
</style>
