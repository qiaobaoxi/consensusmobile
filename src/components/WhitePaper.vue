<template>
  <section>
    <div class="wrap">
        <every-title :imgAddress="titleImg"  :imgMargin="imgMargin"></every-title>
        <img class="whitePaperDownload" src="../assets/whitePaperDownload.png" alt="whitePaperDownload">
        <ul>
          <li v-for="item in list" v-bind:key="item.title">
            <a :href="item.url" :download="item.name">{{item.title}}</a>
          </li>
        </ul>
        <every-title :imgAddress="titleImg1"  :imgMargin="imgMargin1"></every-title>
        <img class="function" src="../assets/function.png" alt="function">
        <dl>
          <dt v-html="functionTitle">
            
          </dt>
          <dd v-for="item in functionList" v-bind:key="item" :class="whitePaperListHeight">
            <p> {{item}}</p>
          </dd>
        </dl>
    </div>
  </section>
</template>

<script>
import EveryTitle from './EveryTitle.vue'
export default {
  name: 'aboutUs',
  data(){
    return{
      imgMargin:"200px 0 38px 0",
      titleImg1:require('../assets/dapp.png'),
      imgMargin1:"75px 0 36px 0",
      list:[
        {
          title:"한글판",
          url:'https://con-co.app/CONSENSUS-NODE-%E1%84%92%E1%85%A1%E1%86%AB%E1%84%80%E1%85%AE%E1%86%A8%E1%84%8B%E1%85%A5.pdf',
          name:"CONSENSUS-NODE-한국어.pdf"
        },
        {
          title:"中文版",
          url:'https://con-co.app/CONSENSUS-Node-%E4%B8%AD%E6%96%87%E7%89%88.pdf',
          name:"CONSENSUS-Node-中文版.pdf"
        },
        {
          title:"English version",
          url:"https://con-co.app/CONSENSUS-Node-English.pdf",
          name:"CONSENSUS-Node-English.pdf"
        },
        {
          title:"日本語版",
          url:"https://con-co.app/CONSENSUS-Node-%E6%97%A5%E6%9C%AC%E8%AA%9E.pdf",
          name:"CONSENSUS-Node-日本語.pdf"
        },
      ]
    }
  },
  mounted() {
  },
  computed:{
    functionTitle(){
      return this.$store.state.i18n.whiteFuntionTitle
    },
    functionList(){
      return [
        this.$store.state.i18n.whiteFuntion1,
        this.$store.state.i18n.whiteFuntion2,
        this.$store.state.i18n.whiteFuntion3,
        this.$store.state.i18n.whiteFuntion4,
      ] 
    },
    titleImg(){
      return this.$store.state.i18n.whitePaperImg;
    },
    whitePaperListHeight(){
      return this.$store.state.i18n.whitePaperListHeight;
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
    // .whitePaperHeight{
    //   height: 4100px;
    // }
    // .whitePaperHeight1{
    //   height: 4708px;
    // }
    // .whitePaperHeight2{
    //   height: 4458px;
    // }
    // .whitePaperHeight3{
    //   height: 4100px;
    // }
    .wrap{
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      top: -300px;
      padding-bottom: 236px;
      background: url("../assets/mask.png") 0 0 no-repeat / 100% 100%;
      .whitePaperDownload{
        width: 606px;
        height: 426px;
      }
      ul{
        padding: 0 48px;
        overflow: hidden;
        li{
          margin-bottom: 48px;
          float: left;
          width: 304px;
          height: 92px;
          border: 1px solid #02F6FF;
          border-radius: 32px;
          text-align: center;
          line-height: 92px;
          color: #02F6FF;
          a{
            display: block;
            height: 100%;
            text-decoration: none;
            color: #02F6FF;
          }
        }
        li:nth-of-type(even){
          margin-left: 30px;
        }
      }
      .function{
        width: 464px;
        height: 904px;
      }
      dl{
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      dt{
        margin:80px 0 20px 0;
        padding: 0 60px;
        font-size: 34px;
        color: white;
        line-height: 56px;
        text-align: center;
      }
      dd{
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 56px;
        margin-top: 40px;
        padding: 0 48px;
        width: 606px;
        background: url("../assets/functionListBg.png") 0 0 no-repeat / 100% 100%;
      }
      .whitePaperListHeight{
        height: 220px;
      }
      .whitePaperListHeight1{
        height: 300px;
      }
      .whitePaperListHeight2{
        height: 270px;
      }
      .whitePaperListHeight3{
        height: 300px;
      }
    }
</style>
