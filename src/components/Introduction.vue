<template>
  <section>
    <every-title :imgAddress="titleImg"  :imgMargin="imgMargin"></every-title>
    <p class="introductionText">
      {{introduction1}}
    </p>
    <img v-lazy="require('../assets/introductionAi.png')" class="ai" alt="ai" srcset="">
    <p class="introductionText">
      {{introduction2}}
    </p>
  </section>
</template>

<script>
import EveryTitle from './EveryTitle.vue'
export default {
  name: 'Introduction',
  data(){
    return{
      imgMargin:"50px 0 35px 0"
    }
  },
  mounted() {
  },
  computed:{
    introduction1(){
      return this.$store.state.i18n.introduction1;
    },
    introduction2(){
      return this.$store.state.i18n.introduction2;
    },
    titleImg(){
      return this.$store.state.i18n.introductionImg;
    }
  },
  methods:{
    
  },
  components:{
    EveryTitle
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    section{
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      .introductionText{
        margin: 0 48px 20px 48px;
        font-size: 30px;
        color: #666666;
        line-height: 56px;
      }
      .ai{
        margin: 20px 0 40px 0;
        width: 500px;
        height: 436px;
      }
    }
</style>
