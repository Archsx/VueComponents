import Vue from 'vue'
import Tab from './Tab.vue'
import TabBody from "./TabBody.vue";
import TabPane from './TabPane.vue'
import TabHead from './TabHead.vue'
import TabItem from './TabItem.vue'
Vue.component('g-tab',Tab)
Vue.component('g-tab-body',TabBody)
Vue.component('g-tab-pane',TabPane)
Vue.component('g-tab-head',TabHead)
Vue.component('g-tab-item',TabItem)

new Vue({
  el:'#app',
  data() {
    return {
      selectedTab:'sports'
    }
  },
})
