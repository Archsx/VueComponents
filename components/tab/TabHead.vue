<template>
  <div class="tab-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "GTabHead",
  inject: ["eventBus"],
  data() {
    return {
    }
  },
  mounted() {
    this.eventBus.$on("update:selected", (item, vm) => {
      let { width, height, top, left } = vm.$el.getBoundingClientRect();
      console.log(width, height, top, left);
      this.$refs.line.style.width = `${width}px`;
      this.$refs.line.style.left = `${left}px`;
      // this.$refs.line.style.transform = `translateX(${left}px)` 这样写会有一个bug
    });
  }
};
</script>

<style lang="less" scoped>
@tab-height: 40px;
@blue: #3498db;
@border-color:#ddd;
.tab-head {
  display: flex;
  height: @tab-height;
  justify-content: flex-start;
  position: relative;
  border-bottom:1px solid @border-color;
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid @blue;
    transition: all 350ms;
  }
  // border: 1px solid red;
  > .actions-wrapper {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1em;
  }
}
</style>
