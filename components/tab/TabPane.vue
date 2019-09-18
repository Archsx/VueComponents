<template>
  <div class="tab-pane" :class="{active}" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  inject:['eventBus'],
  props:{
    name:String
  },
  data() {
    return {
      active:false
    }
  },
  created() {
    this.eventBus.$on('update:selected',(name)=>{
      if(name === this.name){
        this.active = true
      }else{
        this.active = false
      }
      // console.log(name)
    })
  },

}
</script>

<style lang="less" scoped>
  .tab-pane{


    &.active{
      background: red
    }
  }
</style>
