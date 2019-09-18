<template>
  <div class="tab-item" @click="xxx" :class="{active}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props:{
    disabled:{
      type:Boolean,
      default:false
    },
    name:{
      type:String | Number,
      required:true
    }
  },
  computed: {
    // classObj(){
    //   return {
    //     active:this.active
    //   }
    // }
  },
  inject:['eventBus'],
  data() {
    return {
      active:false
    }
  },
  created() {
    this.eventBus.$on('update:selected',(name)=>{
      this.active = name === this.name
    })
  },
  methods: {
    xxx(){
      this.eventBus.$emit('update:selected',this.name)
    }
  },

}
</script>

<style lang="less" scoped>
  .tab-item{
    flex-shrink:0;
    padding: 0 2em;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    &.active{
      background:red
    }
  }
</style>
