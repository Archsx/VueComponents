<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    gutter: {
      type: [String, Number],
      default:0
    },
    align:{
      type:String,
      validator(value){
        return ['left','right','center'].includes(value)
      }
    }
  },
  computed: {
    calcGutter() {
      if (typeof this.gutter === "number") {
        return - this.gutter / 2 + "px";
      } else if (typeof this.gutter === "string") {
        return this.gutter.indexOf("px") > -1
          ? - this.gutter
          : - this.gutter / 2 + "px";
      }
    },
    rowStyle() {
      let {calcGutter} = this
      return {
        marginLeft: calcGutter,
        marginRight: calcGutter
      };
    },
    rowClass(){
      let {align} = this
      return [align && `align-${align}`]
    }
  },
  mounted() {
    this.$children.forEach(vm => {
      vm.gutter = this.gutter;
      console.log(vm.gutter);
    });
  }
};
</script>

<style lang="less" scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  &.align-left{
    justify-content: flex-start
  }
  &.align-right{
    justify-content: flex-end
  }
  &.align-center{
    justify-content: center
  }
}
</style>
