import Vue from "vue";
import GInput from './GInput.vue'
Vue.component('g-input',GInput)

new Vue({
  el:'#app',
  methods: {
    onChange(value){
      console.log(value)
    }
  },  
})