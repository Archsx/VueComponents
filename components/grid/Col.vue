<template>
  <div class="col" :class="colClasses" :style="styleObj">
    <!-- <div class="col" :class="[span && `col-${span}`]"> -->
    <slot></slot>
  </div>
</template>

<script>
let validator = value => {
  return Object.keys(value).every(ele => {
    return ["span", "offset"].includes(ele);
  });
};
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
      validator
    },
    iPad: {
      type: Object,
      validator
    },
    narrowPc: {
      type: Object,
      validator
    },
    pc: {
      type: Object,
      validator
    },
    widePc: {
      type: Object,
      validator
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
      let { span, offset, phone, iPad, narrowPc, pc, widePc } = this;
      let classSet = [];
      let obj = { phone, iPad, narrowPc, pc, widePc };
      console.log(obj);
      Object.keys(obj).forEach(ele => {
        if (obj[ele]) {
          let span = obj[ele].span;
          let offset = obj[ele].offset;
          if (span) {
            classSet.push(`col-${ele}-${span}`);
          }
          if (offset) {
            classSet.push(`offset-${ele}-${offset}`);
          }
        }
      });
      return [span && `col-${span}`, offset && `offset-${offset}`, ...classSet];
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
    each(range(24),{
      &.col-@{value}{
        width:percentage(@value / 24);
      }
    });
    each(range(24),{
      &.offset-@{value}{
        width:percentage(@value / 24);
      }
    });
    @media (max-width:576px){

    each(range(24),{
      &.col-phone-@{value}{
        width:percentage(@value / 24);
      }
    });
    each(range(24),{
      &.offset-phone-@{value}{
        width:percentage(@value / 24);
      }
    });
    }
    @media (min-width:577px){

    each(range(24),{
      &.col-ipad-@{value}{
        width:percentage(@value / 24);
      }
    });
    each(range(24),{
      &.offset-ipad-@{value}{
        width:percentage(@value / 24);
      }
    });
    }
    @media (min-width:769px){

    each(range(24),{
      &.col-narrow-pc-@{value}{
        width:percentage(@value / 24);
      }
    });
    each(range(24),{
      &.offset-narrow-pc-@{value}{
        width:percentage(@value / 24);
      }
    });
    }
    @media (min-width:993px) {

    each(range(24),{
      &.col-pc-@{value}{
        width:percentage(@value / 24);
      }
    });
    each(range(24),{
      &.offset-pc-@{value}{
        width:percentage(@value / 24);
      }
    });
    }
    @media (min-width:1201px){

    each(range(24),{
      &.col-wide-pc-@{value}{
        width:percentage(@value / 24);
      }
    });
    each(range(24),{
      &.offset-wide-pc-@{value}{
        width:percentage(@value / 24);
      }
    });
    }

  }

</style>
