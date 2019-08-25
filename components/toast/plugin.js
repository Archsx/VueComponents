import Toast from './Toast'
export default {
  install(Vue,options){
    Vue.prototype.$toast = function(message){
      let Constructor = Vue.extend(Toast)
      let toast = new Constructor()
      console.log(toast)
      toast.$slots.default = [message]
      toast.$mount()
      document.body.appendChild(toast.$el)
      // var div  = document.createElement('div')
      // div.textContent = message
      // document.body.appendChild(div)
    }
  }
}