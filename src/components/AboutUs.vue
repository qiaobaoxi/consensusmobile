<template>
  <section>
    <every-title :imgAddress="titleImg"  :imgMargin="imgMargin"></every-title>
    <ul>
      <li v-for="item in list" v-bind:key="item.imgUrl" :style="`height:${aboutListHeight}px`" :class="aboutListHeight">
        <img v-lazy="item.imgUrl" alt="" srcset="">
        <h5 v-html="item.title">
        </h5>
        <p v-html="item.content">
          
        </p>   
      </li>
    </ul>
  </section>
</template>

<script>
import EveryTitle from './EveryTitle.vue'
export default {
  name: 'aboutUs',
  data(){
    return{
      imgMargin:"50px 0 35px 0",
    }
  },
  mounted() {
  },
  computed:{
    list(){
      return[
        {
          imgUrl:require('../assets/support.png'),
          title:this.$store.state.i18n.aboutListTitle2,
          content:this.$store.state.i18n.aboutListContent2
        },
        {
          imgUrl:require('../assets/guys.png'),
          title:this.$store.state.i18n.aboutListTitle1,
          content:this.$store.state.i18n.aboutListContent1
        },
        {
          imgUrl:require('../assets/adviser.png'),
          title:this.$store.state.i18n.aboutListTitle3,
          content:this.$store.state.i18n.aboutListContent3
        }
      ]
    },
    titleImg(){
      return this.$store.state.i18n.aboutImg;
    },
    aboutListHeight(){
      return this.$store.state.i18n.aboutListHeight;
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
      z-index: 100;
      li{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 702px;
        background: url("../assets/aboutListBg.png") 0 0 no-repeat / 100% 100%;
        img{
          margin-top: 66px;
          width: 170px;
          height: 170px;
        }
        h5{
          margin: 52px 0 44px 0;
          font-size: 44px;
          line-height: 56px;
          color: #333333;
          text-align: center;
        }
        p{
          width: 560px;
          font-size: 30px;
          line-height: 56px;
        }
      }
      .aboutListHeight{
        height: 728px;
      }
      .aboutListHeight1{
        height: 988px;
      }
      .aboutListHeight2{
        height: 808px;
      }
      .aboutListHeight3{
        height: 728px;
      }
    }
</style>
