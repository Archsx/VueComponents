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
// @xs:~"only screen and (max-width:576px)";
// @sm:~"only screen and (max-width:768px)";
// @md:~"only screen and (max-width:992px)";
// @lg:~"only screen and (max-width:1200px)";
// @xl:~"only screen and (max-width:1600px)";

// @cols:24;

// .generateResponsiveCols(@counter,@media)when(@counter>0){
//   @width:(@counter / @cols) * 100;

//   .col-@{media}-@{counter}{
//     flex-basis: ~"@{width}%";
//     max-width:~"@{width}%"
//   }

//   .generateResponsiveCols((@counter-1), @media)

// };


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
    // @media @xs {
    //   .generateResponsiveCols(@cols, xs)
    // }
  }
</style>
