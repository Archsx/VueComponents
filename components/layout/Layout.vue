<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      layoutClass:{
        hasSider:false
      }
    }
  },
  mounted() {
    this.$children.forEach((vm)=>{
      if(vm.$options.name === 'Sider'){
        this.layoutClass.hasSider = true
      }
    })
  },
}
</script>

<style lang="less" scoped>
  .layout{
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    &.hasSider{
      flex-direction: row
    }
  }
</style>
