import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//全局时间过滤器
import moment from 'moment'
Vue.filter('dataFormat', function (value, formatString) {
  formatString = formatString || 'YYYY-MM-DD HH:mm:ss';
  return moment(value).format(formatString); 
});

//全局注册评论组件
import comment from './components/comment.vue'
Vue.component('comment',comment)

// 一个Vue集成PhotoSwipe图片预览插件
import VuePreview from 'vue-pic-preview'
Vue.use(VuePreview)

//全局注册MintUI,并引入mint-ui样式
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

import vueResource from 'vue-resource'
Vue.use(vueResource)
Vue.http.options.root = 'http://www.lovegf.cn:8899'
Vue.http.options.emulateJSON = false
//全局引入 mui样式和扩展字体图标样式
import './libs/mui/css/mui.css'
import './libs/mui/css/icons-extra.css'


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
