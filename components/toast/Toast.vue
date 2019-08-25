<template>
  <div class="toast">
    <slot></slot>
  </div>

</template>

<script>
// import Vue from "vue";
// Vue.prototype.$toast = () => {
//   console.log("this is toast");
// };
export default {
  name: "Toast",
  mounted() {
  },
};
</script>

<style scoped lang="less" >
@font-size:14px;
@line-height:1.8;
@height:40px;
@toast-bg:rgba(0,0,0,0.75);
  .toast{
    // border: 1px solid red;
    position: fixed;
    top:0;
    left:50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    font-size:@font-size;
    line-height: @line-height;
    height:@height;
    background:@toast-bg;
    border-radius: 4px;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.5);
    color: white;
    padding: 0 16px;
  }
</style>
