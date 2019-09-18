<template>
  <div class="tab-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["eventBus"],
  created() {
  }
};
</script>

<style lang="less" scoped>
@tab-height: 40px;

.tab-head {
  display: flex;
  height: @tab-height;
  justify-content: flex-start;
  border: 1px solid red;
  > .actions-wrapper {
    margin-left: auto
  }
}
</style>
