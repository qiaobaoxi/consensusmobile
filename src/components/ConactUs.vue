<template>
  <section>
    <div class="wrap">
      <img :class="conactUsTitleHeight" v-lazy="titleImg" alt="" srcset="">
      <div class="textarea">
        <el-input
          resize="none"
          class="input1"
          type="textarea"
          :rows="2"
          :placeholder="textareaPlaceHolder"
          v-model="textarea">
        </el-input>
        <el-button class="submit">{{submitVale}}</el-button>
        
      </div>
      <ul>
          <li class="">
            <a href="">
               
            </a> 
          </li>
          <li class="">
            <a href="">
               
            </a> 
          </li>
          <li class="">
            <a href="">
               
            </a> 
          </li>
          <li class="">
            <a href="">
               
            </a> 
          </li>
          <li class="">
            <a href="">
               
            </a> 
          </li>
          <li class="">
            <a href="">
               
            </a> 
          </li>
          <li class="">
            <a href="">
               
            </a> 
          </li>
          <li class="">
            <a href="">
               
            </a> 
          </li>
          <li class="">
            <a href="">
               
            </a> 
          </li>
          
        </ul>
    </div>
  </section>
</template>

<script>

export default {
  name: "Home",
  data() {
    return {
      textarea:"",
      imgMargin:"202px 0 30px 0",
    };
  },
  computed:{
    textareaPlaceHolder(){
      return this.$store.state.i18n.textareaPlaceholder
    },
    submitVale(){
      return this.$store.state.i18n.button
    },
    titleImg(){
      return this.$store.state.i18n.conactUsImg;
    },
    conactUsTitleHeight(){
      return this.$store.state.i18n.conactUsTitleHeight;
    }
  },
  components: {
  
  }
};
</script>
<style lang="less">
   .textarea{
      position: relative;
      width: 654px;
      height: 248px;
      .input1{
        textarea{
          margin: 0 auto;
          background-color: rgba(0, 0, 0, 0);
          width: 654px;
          height: 248px;
          border:2px solid rgba(255,255,255,1);
        }
      }
    }
    .submit{
      font-size: 28px;
      color: #18777A;
      position: absolute;
      right: 24px;
      bottom: 22px;
      width:176px;
      height:52px;
      background:rgba(149,229,239,1) !important;
      border: none !important;
      border-radius: 18px !important;
    }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
section {
  .wrap {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .conactUsTitleHeight{
      margin: 120px  0 60px 0;
      width: 250px;
      height: 76px;
    }
    .conactUsTitleHeight1{
      margin: 120px  0 60px 0;
      width: 418px;
      height: 70px;
    }
    .conactUsTitleHeight2{
      margin: 120px  0 60px 0;
      width: 438px;
      height: 70px;
    }
    .conactUsTitleHeight3{
      margin: 120px  0 60px 0;
      width: 158px;
      height: 72px;
    }
    .textarea{
      position: relative;
    }
    ul{
      margin-top: 62px;
      padding: 0 48px;
      overflow: hidden;
      li{
        width: 84px;
        height: 84px;
        margin: 0 23px 36px 23px;
        float: left;
        a{
          display: inline-block;
          width: 84px;
          height: 84px;
        }
      }
      .loop(@counter) when (@counter > 0) {
         .loop((@counter - 1)); 
          li:nth-child(@{counter}){
            a{
              background: url("../assets/icon@{counter}.png") 0 0 no-repeat;
              background-size: 100% 100%;
            }
          } 
      }
      .loop(9);
    }
  }
}
</style>
