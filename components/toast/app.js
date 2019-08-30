import Vue from "vue";
import Toast from './Toast.vue';
import plugin from './plugin'
Vue.component('g-toast', Toast)

Vue.use(plugin) //这句的作用是去执行plugin里面的install方法


new Vue({
  el: "#app",
  created() {},
  methods: {
    showToast(position) {
      this.$toast('<p style="color:red">我是 message</p><p style="color:red">我是 message</p>', {
        closeButton: {
          text: '知道啦',
          callback() {
            console.log('用户知道啦')
          },
        },
        enableHTML: true,
        position
      })
    },
    showToast1(){
      this.showToast('top')
    },
    showToast2(){
      this.showToast('middle')
    },
    showToast3(){
      this.showToast('bottom')
    },


  },
})