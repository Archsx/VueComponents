<template>
  <div>
    <slot class="tab-body"></slot>
  </div>
</template>

<script>
export default {
  name:'GTabBody',
  inject:['eventBus'],

}
</script>

<style>

</style>
