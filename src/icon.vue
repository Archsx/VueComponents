<template>
  <svg class="g-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
export default {
  props:['name']
};
</script>

<style lang="less" scoped>
.g-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.05em;
  fill: currentColor;
  overflow: hidden;
}
</style>
