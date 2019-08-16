<template>
  <div class="wrapper" :class="{error:error}">
    <input :value="value" type="text" class="gulu-input" :disabled="disabled" :readonly="readonly"
      @change="handleChange"
      @input="handleInput"
      @focus="hanldeFocus"
      @blur="handleBlur"
    >
    <template v-if="error">
      <g-icon name="error" class="errorIcon"></g-icon>
      <span class="errorMessage">{{error}}</span>
    </template>
    <template v-if="!error && success">
      <g-icon name="success"></g-icon>
    </template>
  </div>
</template>

<script>
import GIcon from "../icon/Icon";
export default {
  components: {
    GIcon
  },
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    },
    success: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleChange(e){
      this.$emit('change',e.target.value)
    },
    handleInput(){
      this.$emit('input',e.target.value)
    },
    handleBlur(){
      this.$emit('blur',e.target.value)
    },
    handleFocus(){
      this.$emit('focus',e.target.value)
    }
  },
};
</script>

<style lang="less" >
@import "../../antStyleParts/input.less";

@height: 32px;
@border-color: #999;
@border-color-hover: #666;
@border-radius: 4px;
@red: #e74c3c;
html {
  font-family: sans-serif;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.wrapper {
  display: inline-flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: 0.5em;
  }

  &.error {
    > input {
      border-color: @red;
      box-shadow: none;
    }
    .errorMessage {
      color: @red;
    }
    .errorIcon {
      color: @red;
    }
  }
  > input {
    // height:@height;
    // border: 1px solid @border-color;
    // &:hover{
    //   border:1px solid @border-color-hover
    // }
    //  &:focus{
    //    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
    //    outline: none
    //  }
    &[disabled],
    &[readonly] {
      border-color: #d9d9d9;
      background-color: #f5f5f5;
      color: rgba(0, 0, 0, 0.25);
      cursor: not-allowed;
    }
  }
}
</style>
