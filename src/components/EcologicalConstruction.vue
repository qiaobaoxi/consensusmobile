<template>
  <section>
    <div class="wrap">
      <every-title :imgAddress="titleImg"  :imgMargin="imgMargin"></every-title>
      <div class="subTitle">
         <img src="../assets/line.png" alt="line" srcset="">
         <img v-lazy="subTitleImg" alt="subTitle" srcset="">
      </div>
       <div class="store">
        <img v-lazy="storeImg" alt srcset />
      </div>
      <vline class="line"></vline>
      <div class="buyer">
        <img v-lazy="buyerImg" alt srcset />
      </div>
      <div class="exchangeTitle">
         <img src="../assets/line.png" alt="line" srcset="">
         <img v-lazy="exchangeTitleImg" alt="subTitle" srcset="">
      </div>
      <img class="entity" src="../assets/entity.jpg" alt="png">
      <div class="atm">
         <img src="../assets/line.png" alt="line" srcset="">
         <img src="../assets/atm.png" alt="subTitle" srcset="">
      </div>
      <img class="entity" src="../assets/atm.jpg" alt="png">
    </div>
  </section>
</template>

<script>
import EveryTitle from "./EveryTitle";
import Vline from "./utilCom/line";
export default {
  name: "Home",
  data() {
    return {
      imgMargin:"0 0 30px 0"
    };
  },
  mounted() {
    this.show();
  },
  computed:{
    titleImg(){
      return this.$store.state.i18n.ecologicalConstructionImg;
    },
    subTitleImg(){
      console.log(this.$store.state.i18n.subTitleImg)
       return this.$store.state.i18n.subTitleImg;
    },
    exchangeTitleImg(){
      return this.$store.state.i18n.exchangeTitleImg;
    },
    storeImg(){
       return this.$store.state.i18n.storeImg;
    },
    buyerImg(){
      return this.$store.state.i18n.buyerImg;
    },
  },
  methods: {
    show() {
      // this.canvas = this.$refs["canvas"];//指定canvas
      // let ctx = this.canvas.getContext("2d");
      // this.drawPolygon(ctx,{
      //       x:53,
      //       y:95,
      //       num: 6,
      //       r: 50,
      //       width:1,
      //       strokeStyle: 'blue',
      //       fillStyle: 'white'
      // })
    },
    drawPolygon(ctx, conf) {
      var x = (conf && conf.x) || 0; //中心点x坐标
      var y = (conf && conf.y) || 0; //中心点y坐标
      var num = (conf && conf.num) || 3; //图形边的个数
      var r = (conf && conf.r) || 100; //图形的半径
      var width = (conf && conf.width) || 5;
      var strokeStyle = conf && conf.strokeStyle;
      var fillStyle = conf && conf.fillStyle;
      //开始路径
      ctx.beginPath();
      var startX = x + r * Math.cos((2 * Math.PI * 0) / num);
      var startY = y + r * Math.sin((2 * Math.PI * 0) / num);
      ctx.moveTo(startX, startY);
      for (var i = 1; i <= num; i++) {
        var newX = x + r * Math.cos((2 * Math.PI * i) / num);
        var newY = y + r * Math.sin((2 * Math.PI * i) / num);
        ctx.lineTo(newX, newY);
      }
      ctx.closePath();
      //路径闭合
      if (strokeStyle) {
        ctx.strokeStyle = strokeStyle;
        ctx.lineWidth = width;
        ctx.lineJoin = "round";
        ctx.stroke();
      }
      if (fillStyle) {
        ctx.fillStyle = fillStyle;
        ctx.fill();
      }
    }
  },
  components: {
    EveryTitle,
    Vline
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
section {
  .wrap {
    margin-top: -300px;
    position: relative;
    z-index: 100;
    .subTitle{
      padding: 0 48px;
      img:nth-of-type(2){
        margin-left: 16px;
        width: 442px;
      }
    }
    .subTitle,.exchangeTitle,.atm{
      display: flex;
      align-items: center;
      img:nth-of-type(1){
        width: 4px;
        height: 32px;
      }
    }
    .exchangeTitle{
      padding: 44px 40px 0 40px;
      img:nth-of-type(2){
        margin-left: 16px;
        width: 408px;
      }
    }
    .atm{
      margin: 82px 40px;
      img:nth-of-type(2){
        margin-left: 16px;
        width: 382px;
      }
    }
    .store{
      padding: 42px 54px 0 54px;
      img{
        width: 100%;
        height: 1000px;
      }
    }
    .line{
      margin: 60px 48px;
    }
    .buyer{
      padding: 0 54px;
      img{
        width: 100%;
        height: 2046px;
      }
    }
    .entity{
      margin-left:46px;
      margin-right: 46px;
      width: 662px; 
      height: 400px;
      border-radius: 40px;
    }
    .entity:nth-of-type(1){
      margin-top:46px;  
    }
  }
}
</style>
