<template>
  <div class="toast" v-if="condition">
    <slot></slot>
    <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
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
    }
  },
  data() {
    return {
      condition: true
    };
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.close();
      }, this.autoCloseDelay);
    }
  },
  methods: {
    close() {
      // this.condition = false;
      // this.$nextTick(() => {
      // this.$destroy();
      // });

      //这个是老师的写法
      this.$el.remove();
      this.$destroy();
    },
    onClickClose() {
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback(this);
      }
      this.close();
    }
  }
};
</script>

<style scoped lang="less" >
@font-size: 14px;
@line-height: 1.8;
@height: 40px;
@toast-bg: rgba(0, 0, 0, 0.75);
.toast {
  // border: 1px solid red;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  white-space: nowrap;
  font-size: @font-size;
  line-height: @line-height;
  height: @height;
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
