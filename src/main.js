import Vue from 'vue'
import App from './App.vue'
import {imageIsExist} from "./utils";

Vue.config.productionTip = false;

//全局注册自定义指令，用于判断当前图片是否能够加载成功，可以加载成功则赋值为img的src属性，否则使用默认图片
Vue.directive('real-img', async function (el, binding) {
    let imgURL = binding.value;//获取图片地址
    let defaultURL = el.getAttribute('default-img');//获取默认图片地址
    if (imgURL) {
        let exist = await imageIsExist(imgURL);
        if (exist) {
            el.setAttribute('src', imgURL);
        } else {
            if (defaultURL) {
                el.setAttribute('src', defaultURL);
            }
        }
    }
})

new Vue({
  render: h => h(App)
}).$mount('#app')
