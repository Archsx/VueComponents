import Vue from 'vue'
import GRow from './Row.vue'
import GCol from './Col.vue'

console.log(GRow)
Vue.component('g-row',GRow)
Vue.component('g-col',GCol)

new Vue({
  el:'#app'
})