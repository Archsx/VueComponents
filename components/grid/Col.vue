<template>
  <div class="col">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>

  .col{
    height: 100px;
    background: grey;
    // flex-grow: 1
    each(range(24),{
      &[span="@{value}"]{
        width:percentage(@value / 24);
      }
    });
  }
</style>
