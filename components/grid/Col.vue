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
    },
    // xl: {
    //   type: [Number, String]
    // },
    // lg: {
    //   type: [Number, String]
    // },
    // md: {
    //   type: [Number, String]
    // },
    // sm: {
    //   type: [Number, String]
    // },
    // xs: {
    //   type: [Number, String]
    // }
    phone: {
      type: Object,
      validator(value) {
        return Object.keys(value).every(ele => {
          return ["span", "offset"].includes(ele);
        });
      }
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
    colClasses() {
      let { span, offset, xl, lg, md, sm, xs } = this;
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`,
        xl && `col-xl-${xl}`,
        lg && `col-lg-${lg}`,
        md && `col-md-${md}`,
        sm && `col-sm-${sm}`,
        xs && `col-xs-${xs}`
      ];
    }
  }
};
</script>

<style lang="less" scoped>
@xs:~"only screen and (max-width:576px)";
@sm:~"only screen and (max-width:768px)";
@md:~"only screen and (max-width:992px)";
@lg:~"only screen and (max-width:1200px)";
@xl:~"only screen and (max-width:1600px)";

@cols:24;

.generateResponsiveCols(@counter,@media)when(@counter>0){
  @width:(@counter / @cols) * 100;

  .col.col-@{media}-@{counter}{
    flex-basis: ~"@{width}%";
    max-width:~"@{width}%"
    // width:~"@{width}%"
  }

  .generateResponsiveCols((@counter - 1), @media)

};


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
    @media @xl {
      .generateResponsiveCols(@cols, xl)
    }
    @media @lg {
      .generateResponsiveCols(@cols, lg)
    }
    @media @md {
      .generateResponsiveCols(@cols, md)
    }
    @media @sm {
      .generateResponsiveCols(@cols, sm)
    }
    @media @xs {
      .generateResponsiveCols(@cols, xs)
    }
</style>
