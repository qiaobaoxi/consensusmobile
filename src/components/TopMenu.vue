<template>
  <section ref="wrap">
    <img class="menuMore" src="../assets/close.png"  @click="switchPage" alt="close" srcset />
    <img  src="../assets/logo.png"  class="logo" alt="bannerText" />
    <ul>
      <li v-for="(item,index) in menus" v-bind:key="index">
        <input type="radio" name="menu" :id="index" :checked="index===selectMenu?true:fasle" />
        <label :for="index">
          <a :href="item.toTarget" @click="selectMenuFn(index)">{{item.val}}</a>
        </label>
        <div class="line" v-if="index!==(menus.length-1)"></div>
      </li>
    </ul>
    <el-input class="input" v-model="languange" :placeholder="inputPlaceHolder"></el-input>
    <div class="btns">
      <el-button :class="['languange',index===switchLanguangeNum?'active':'']" @click="switchLanguange(index)" v-for="(item,index) in languangeArr" v-bind:key="item">{{item}}</el-button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      languange:"",
      selectMenu: 0,
      inputPlaceHolder: "选择语言",
      languangeArr:['한국어','中文','ENGLISH','日本語'],
      switchLanguangeNum:0
    };
  },
  mounted(){
    this.setHash()
  },
  computed: {
       menus(){
        return[{
              val:this.$store.state.i18n.menuProjectIntroduction,
              toTarget:"#introduction",
            },
            {
            val:this.$store.state.i18n.menuAboutUs,
            toTarget:"#about", 
            },
            {
            val:this.$store.state.i18n.menuWhitePaper,
            toTarget:"#whitePaper", 
            },
            {
            val:this.$store.state.i18n.menuEcologicalConstruction,
            toTarget:"#ecologicalConstruction", 
            },
            {
            val:this.$store.state.i18n.menuContactUs,
            toTarget:"#conactUs", 
            }]
        },
  },
  methods: {
    setHash(){
       window.location.hash=""
    },
    selectMenuFn(i) {
      this.selectMenu = i;
    },
    switchLanguange(i){
       this.switchLanguangeNum=i;
       this.languange=this.languangeArr[i]
       switch (Number(this.switchLanguangeNum)) {
        case 0:
          this.$i18n.locale='kr'
          this.storeChange()
        break;
        case 1:
          this.$i18n.locale='cn'
          this.storeChange()
          break;
            case 2:
          this.$i18n.locale='en'
          this.storeChange()
          break;
            case 3:
          this.$i18n.locale='ja'
          this.storeChange()
          break;           
        default:
          this.$i18n.locale='cn'
          this.storeChange()
          break;
      }
    },
    switchPage(){
      if(location.hash){
          setTimeout(function(){
            window.location.href=location.hash;
          })
      }
      this.$store.commit('switchPage',true);
     
    },
    storeChange(){
      console.log(this.$t('message.subTitleImg'))
      this.$store.commit('increment', {
            menuProjectIntroduction:this.$t('message.menuProjectIntroduction'),
            menuAboutUs:this.$t('message.menuAboutUs'),
            menuWhitePaper: this.$t('message.menuWhitePaper'),
            menuEcologicalConstruction:this.$t('message.menuEcologicalConstruction'),
            menuContactUs:this.$t('message.menuContactUs'),
            selectPlaceholder:this.$t('message.selectPlaceholder'),
            bannerTextImg:this.$t('message.bannerTextImg'),
            introductionImg:this.$t('message.introductionImg'),
            introduction1:this.$t('message.introduction1'),
            introduction2:this.$t('message.introduction2'),
            aboutListHeight:this.$t('message.aboutListHeight'),
            aboutImg:this.$t('message.aboutImg'),
            aboutListTitle1:this.$t('message.aboutListTitle1'),
            aboutListContent1:this.$t('message.aboutListContent1'),
            aboutListTitle2:this.$t('message.aboutListTitle2'),
            aboutListContent2:this.$t('message.aboutListContent2'),
            aboutListTitle3:this.$t('message.aboutListTitle3'),
            aboutListContent3:this.$t('message.aboutListContent3'),
            whitePaperImg:this.$t('message.whitePaperImg'),
            whitePaperHeight:this.$t('message.whitePaperHeight'),
            whitePaperListHeight:this.$t('message.whitePaperListHeight'),
            whiteFuntionTitle:this.$t('message.whiteFuntionTitle'),
            whiteFuntion1:this.$t('message.whiteFuntion1'),
            whiteFuntion2:this.$t('message.whiteFuntion2'),
            whiteFuntion3:this.$t('message.whiteFuntion3'),
            whiteFuntion4:this.$t('message.whiteFuntion4'),
            ecologicalConstructionImg:this.$t('message.ecologicalConstructionImg'),
            storeImg:this.$t('message.storeImg'),
            buyerImg:this.$t('message.buyerImg'),
            subTitleImg:this.$t('message.subTitleImg'),
            exchangeTitleImg:this.$t('message.exchangeTitleImg'),
            conactUsTitleHeight:this.$t('message.conactUsTitleHeight'),
            atmTitleImg:this.$t('message.atmTitleImg'),
            roadImg:this.$t('message.roadImg'),
            roadMapImg:this.$t('message.roadMapImg'),
            conactUsImg:this.$t('message.conactUsImg'),
            textareaPlaceholder:this.$t('message.textareaPlaceholder'),
            button:this.$t('message.button'),
          })
    }
  },
  components: {}
};
</script>
<style lang="less" >
html,body{
  height: 100%;
}
.input {
  margin-top: 106px;
  padding: 0 66px 0 84px;
  width: auto !important;
  input {
    width: 600px;
    height: 112px;
    background-color: rgba(0, 0, 0, 0);
    border: none;
    border-bottom: 1px solid white;
  }
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
section {
  position: relative;
  width: 100%;
  background: url("../assets/banner.png") 0 0 no-repeat;
  background-size: 100% 100%;
  padding-bottom: 100px;
  .menuMore {
    margin: 28px 0 0 48px;
    width: 48px;
    height: 48px;
  }
  .logo {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
  }
  .logo {
    top: 22px;
    width: 120px;
    height: 60px;
  }
  ul {
    margin: 80px auto 0;
    width: 616px;
    li {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 112px;
      .line {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 600px;
        height: 1px;
        background-color: white;
      }
      input {
        display: none;
      }
      label {
        display: inline-block;
        width: 100%;
        height: 44px;
        line-height: 44px;
      }
      a {
        margin-left: 12px;
        font-size: 32px;
        display: block;
        color: white;
        text-decoration: none;
      }
      input:checked + label {
        border-left: 4px solid #02f6ff;
        a {
          color: #02f6ff;
        }
      }
    }
  }
  .btns {
    overflow: hidden;
    padding: 62px 66px 0 84px;
    .languange {
      margin-left: 0;
      margin-bottom: 40px;
      float: left;
      width: 262px;
      height: 76px;
      background-color: rgba(0, 0, 0, 0);
      border-radius: 38px;
      border: 1px solid white;
      color: white;
    }
    .active{
      background-color: rgba(2 , 246, 255, 1);
      border: 1px solid rgba(2 , 246, 255, 1);
    }
    .languange:nth-of-type(even) {
      margin-left: 76px;
    }
  }
}
</style>
