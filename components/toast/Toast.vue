<template>
  <div class="wrapper" :class="toastClasses">
    <div class="toast" v-if="condition" ref="toast">
      <!-- 这样的写法真的丑陋<div v-html="$slots.default[0]"></div> -->
      <div v-if="enableHTML" v-html="message"></div>
      <div v-else v-html="realMessage"></div>
      <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
    </div>
  </div>
</template>

<script>
// import Vue from "vue";
// Vue.prototype.$toast = () => {
//   console.log("this is toast");
// };
export default {
  name: "Toast",
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 50000
    },
    closeButton: {
      type: Object,
      default: () => {
        return {
          text: "关闭",
          callback: undefined
        };
      }
    },
    message: {
      default: ""
    },
    enableHTML: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "middle"].includes(value);
      }
    }
  },
  data() {
    return {
      condition: true
    };
  },
  mounted() {
    this.execAutoClose();
    // 这段是视频中为了将间隔线的高度和框的高度调整为一致而做的处理 我没有采用视频里面的写法 所以注释了
    // 但是重点在于 在nextTick中去获取高度 这点需要注意
    // this.$nextTick(()=>{
    // this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
    // })
  },
  computed: {
    realMessage() {
      return this.escapeHtml(this.message);
    },
    toastClasses() {
      return `position-${this.position}`;
    }
  },
  methods: {
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoCloseDelay);
      }
    },
    close() {
      // this.condition = false;
      // this.$nextTick(() => {
      // this.$destroy();
      // });

      //这个是老师的写法
      this.$el.remove();
      this.$emit("close");
      this.$destroy();
    },
    onClickClose() {
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback(this);
      }
      this.close();
    },
    escapeHtml(str) {
      return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
        .replace(/\//g, "&#x2F;");
    }
  }
};
</script>

<style scoped lang="less" >
@font-size: 14px;
@line-height: 1.8;
@toast-min-height: 40px;
@toast-bg: rgba(0, 0, 0, 0.75);
@animation-duration:300ms;

@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 100%;
    transform: translateY(0%);
  }
}

@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 100%;
    transform: translateY(0%);
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100%;
  }
}
.wrapper {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  &.position-top {
    top: 0;
    .toast{
      border-top-left-radius: 0;
      border-top-right-radius:0;
      animation:slide-down @animation-duration
    }
  }
  &.position-bottom {
    bottom: 0;
    .toast{
      border-bottom-left-radius: 0;
      border-bottom-right-radius:0;
      animation: slide-up @animation-duration;
    }
  }
  &.position-middle {
    top: 50%;
    transform: translate(-50%,-50%);
    .toast{
      animation: fade-in @animation-duration
    }
  }
}

.toast {
  // border: 1px solid red;
  display: flex;
  align-items: center;
  white-space: nowrap;
  font-size: @font-size;
  line-height: @line-height;
  min-height: @toast-min-height;
  background: @toast-bg;
  border-radius: 4px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
  color: white;
  padding: 0 16px;
}
.close {
  padding-left: 16px;
  position: relative;
  margin-left: 16px;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    height: 80%;
    border-left: 1px solid #666;
    transform: translateY(-50%);
  }
}
</style>
