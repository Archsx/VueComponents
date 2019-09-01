<template>
  <div class="tab-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props:{
    disabled:{
      type:Boolean,
      default:false
    }
  }

}
</script>

<style>
  .tab-item{

  }
</style>
