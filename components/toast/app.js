import Vue from "vue";
import Toast from './Toast.vue';
import plugin from './plugin'
Vue.component('g-toast',Toast)

Vue.use(plugin)//这句的作用是去执行plugin里面的install方法


new Vue({
  el:"#app",
  created() {
    this.$toast('I am toast')
    this.$toast('I am toast')
  },
})

