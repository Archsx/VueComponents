<template>
  <button class="g-button" :class="iconPosition">
  <!-- <button class="g-button" :class="{right:iconPosition}"> -->
    <svg v-if="icon"  class="icon" :class="test">
      <use :xlink:href="`#i-${icon}`"></use>
    </svg>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "",
  props:{
    icon:String,
    iconPosition:{
      type:String,
      // default:'left'
    },
    test:{
      type:Array,
      default:[]
    }
  }
};
</script>

<style lang="less">
.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }
}
</style>
