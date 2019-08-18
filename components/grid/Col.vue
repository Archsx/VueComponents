<template>
  <div class="col" :class="[span && `col-${span}`,offset && `offset-${offset}`]" :style="{paddingLeft:gutter / 2 + 'px', paddingRight:gutter / 2 + 'px'}">
  <!-- <div class="col" :class="[span && `col-${span}`]"> -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  props:{
    span:{
      type:[String,Number]
    },
    offset:{
      type:[Number,String]
    }
  },
  data() {
    return {
      gutter:0
    }
  },
}
</script>

<style lang="less" scoped>

  .col{
    height: 100px;
    background: grey;
    background-clip: content-box;
    // flex-grow: 1
    each(range(24),{
      // &[span="@{value}"]{
      //   width:percentage(@value / 24);
      // }
      &.col-@{value}{
        width:percentage(@value / 24);
      }
    });
    each(range(24),{
      // &[offset="@{value}"]{
      //   // margin-right:percentage(@value /24)
      //   margin-right: (@value / 24) * 100%
      // }
      &.col-@{value}{
        width:percentage(@value / 24);
      }
    });
  }
</style>
