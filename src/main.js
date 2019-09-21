import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import messages from "./i18.js"
import {Input,Button} from 'element-ui';
import VueLazyload from 'vue-lazyload'
import Vuex from 'vuex'
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.use(VueLazyload)
Vue.use(Vuex)
Vue.use(Input);
Vue.use(Button);

const i18n = new VueI18n({
  locale: 'kr', // 设置地区
  messages, // 设置地区信息
})
const store = new Vuex.Store({
  state: {
    isShow:true,
    i18n:{
      menuProjectIntroduction:i18n.t('message.menuProjectIntroduction'),
      menuAboutUs:i18n.t('message.menuAboutUs'),
      menuWhitePaper: i18n.t('message.menuWhitePaper'),
      menuEcologicalConstruction:i18n.t('message.menuEcologicalConstruction'),
      menuContactUs:i18n.t('message.menuContactUs'),
      selectPlaceholder:i18n.t('message.selectPlaceholder'),
      bannerTextImg:i18n.t('message.bannerTextImg'),
      introductionImg:i18n.t('message.introductionImg'),
      introduction1:i18n.t('message.introduction1'),
      introduction2:i18n.t('message.introduction2'),
      aboutListHeight:i18n.t('message.aboutListHeight'),
      aboutImg:i18n.t('message.aboutImg'),
      aboutListTitle1:i18n.t('message.aboutListTitle1'),
      aboutListContent1:i18n.t('message.aboutListContent1'),
      aboutListTitle2:i18n.t('message.aboutListTitle2'),
      aboutListContent2:i18n.t('message.aboutListContent2'),
      aboutListTitle3:i18n.t('message.aboutListTitle3'),
      aboutListContent3:i18n.t('message.aboutListContent3'),
      whitePaperImg:i18n.t('message.whitePaperImg'),
      whitePaperHeight:i18n.t('message.whitePaperHeight'),
      whitePaperListHeight:i18n.t('message.whitePaperListHeight'),
      whiteFuntionTitle:i18n.t('message.whiteFuntionTitle'),
      whiteFuntion1:i18n.t('message.whiteFuntion1'),
      whiteFuntion2:i18n.t('message.whiteFuntion2'),
      whiteFuntion3:i18n.t('message.whiteFuntion3'),
      whiteFuntion4:i18n.t('message.whiteFuntion4'),
      ecologicalConstructionImg:i18n.t('message.ecologicalConstructionImg'),
      storeImg:i18n.t('message.storeImg'),
      buyerImg:i18n.t('message.buyerImg'),
      subTitleImg:i18n.t('message.subTitleImg'),
      exchangeTitleImg:i18n.t('message.exchangeTitleImg'),
      atmTitleImg:i18n.t('message.atmTitleImg'),
      roadImg:i18n.t('message.roadImg'),
      roadMapImg:i18n.t('message.roadMapImg'),
      conactUsTitleHeight:i18n.t("message.conactUsTitleHeight"),
      conactUsImg:i18n.t('message.conactUsImg'),
      textareaPlaceholder:i18n.t('message.textareaPlaceholder'),
      button:i18n.t('message.button'),
    }
  },
  mutations: {
    increment (state,obj) {
      state.i18n=obj
    },
    switchPage (state,bool) {
      state.isShow=bool;
    }
  }
})
new Vue({
  i18n,
  store,
  render: h => h(App),
}).$mount('#app')
