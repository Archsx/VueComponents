<template>
  <div class="col" :class="colClasses" :style="styleObj">
    <!-- <div class="col" :class="[span && `col-${span}`]"> -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    span: {
      type: [String, Number]
    },
    offset: {
      type: [Number, String]
    }
  },
  data() {
    return {
      gutter: 0
      // styleObj: {
      //   paddingLeft: this.realGutter,
      //   paddingRight: this.realGutter
      // }
    };
  },
  computed: {
    calcGutter() {
      if (typeof this.gutter === "number") {
        return this.gutter / 2 + "px";
      } else if (typeof this.gutter === "string") {
        return this.gutter.indexOf("px") > -1
          ? this.gutter
          : this.gutter / 2 + "px";
      }
    },
    styleObj() {
      return {
        paddingLeft: this.calcGutter,
        paddingRight: this.calcGutter
      };
    },
    colClasses(){
      let {span,offset} = this
      return [span && `col-${span}`,offset && `offset-${offset}`]
    }
  }
};
</script>

<style lang="less" scoped>

  .col{
    border: 1px solid red;
    height: 50px;
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
      &.offset-@{value}{
        width:percentage(@value / 24);
      }
    });
  }
</style>
