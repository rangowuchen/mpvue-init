import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    pages: [
      // 在app.json中第一个路径会当成首页,若在此配置一条信息
      //配置中指定为首页的路径前面有个^符号
      //加入这行配置之后，pages/index/main总是会在最终生成的dist/app.json中排在第一个位置，成为首页
      '^pages/index/main'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '第一个小程序',
      navigationBarTextStyle: 'black'
    }
  }
}