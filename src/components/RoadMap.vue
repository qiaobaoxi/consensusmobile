<template>
  <section>
    <div class="wrap">
      <every-title :imgAddress="titleImg"  :imgMargin="imgMargin"></every-title>
      <img class="roadMap" v-lazy="roadMapImg" alt="" srcset="">
      <conact-us id="conactUs"></conact-us>
    </div>
  </section>
</template>

<script>
import EveryTitle from "./EveryTitle";
import ConactUs from './ConactUs.vue'
export default {
  name: "Home",
  data() {
    return {
      imgMargin:"202px 0 30px 0"
    };
  },
  computed:{
    titleImg(){
      return this.$store.state.i18n.roadImg;
    },
    roadMapImg(){
      return this.$store.state.i18n.roadMapImg;
    }
  },
  components: {
    EveryTitle,
    ConactUs
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
section {
  .wrap {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -250px;
    width: 100%;
    background: url("../assets/mask1.png") 0 0 no-repeat / 100% 100%;
    .roadMap{
      margin-top: 66px;
      width: 620px;
    }
  }
}
</style>
