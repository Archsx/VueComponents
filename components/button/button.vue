<template>
  <button class="g-button" :class="`icon-${iconPosition}`" @click="onClick">
    <g-icon v-if="icon && !loading" :name="icon" class="icon">
    </g-icon>
    <g-icon name="loading" v-if="loading"  class="loading icon"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  name: "",
  props: {
    loading:{
      type:Boolean,
      default:false
    },
    icon: String,
    iconPosition: {
      type: String,
      default: "left",
      validator(value){
        return value === 'left' || value === "right"
      }
    }
  },
  methods: {
    onClick(){
      this.$emit('click')
    }
  },
};
</script>

<style lang="less" scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg)
  }
  100%{
    transform: rotate(360deg)
  }
}
.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  // border: 1px solid var(--border-color);
  // background: var(--button-bg);
  border: 1px solid transparent;
  transition: all 0.3s cubic-bezier(0.645, 0.45, 0.355, 1);
  color: rgba(0, 0, 0, 0.65);
  background-color: #fff;
  border-color: #d9d9d9;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    // border-color: var(--border-color-hover);
    color: #40a9ff;
    border-color: #40a9ff;
  }
  &:active {
    // background-color: var(--button-active-bg);
    color: #096dd9;
    border-color: #096dd9;
  }

  &:focus {
    outline: none;
  }
  > .icon {
    order: 1;
    margin-right: .3em;
  }
  > .content {
    order: 2;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin: 0 0 0 0.3em;
    }
    > .content {
      order: 1;
    }
  }
  .loading{
    animation: spin 2s infinite linear
  }
}
</style>
