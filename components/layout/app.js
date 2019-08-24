import Vue from "vue";
import Layout from './Layout.vue'
import Header from './Header.vue'
import Sider from './Sider.vue'
import Content from './Content.vue'
import Footer from './Footer.vue'




Vue.component('g-layout',Layout)
Vue.component('g-header',Header)
Vue.component('g-sider',Sider)
Vue.component('g-content',Content)
Vue.component('g-footer',Footer)


new Vue({
  el:'#app',
  data() {
    return {
    }
  },
  methods: {
  },
})