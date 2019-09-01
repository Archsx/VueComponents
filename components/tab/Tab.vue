<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props:{
    selected:{
      type:String
    },
    direction:{
      type:String,
      default:'horizontal',
      validator(value){
        return ['horizontal','vertical'].includes(value)
      }
    }

  },
  created() {
    this.$emit('update:selected','xxx')
  },
};
</script>

<style>
</style>
