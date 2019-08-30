import Toast from './Toast'



let currentToast

function createToast({
  Vue,
  propsData,
  onClose
}) {
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({
    propsData
  })
  toast.$mount()
  toast.$on('close', onClose)
  document.body.appendChild(toast.$el)
  return toast
}

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, toastOptions) {
      if (currentToast) {
        currentToast.close()
      }
      currentToast = createToast({
        Vue,
        propsData: {
          message,
          ...toastOptions
        },
        onClose: () => {
          currentToast = null
        }
      })
      // toast.$slots.default = [message]
      // var div  = document.createElement('div')
      // div.textContent = message
      // document.body.appendChild(div)
    }
  }
}