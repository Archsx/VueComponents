<template>
  <div class="tab-item" @click="onClick" :class="{active,disabled}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'GTabItem',
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
    onClick(){
      if(this.disabled){
        return
      }
      this.eventBus.$emit('update:selected',this.name,this)
    }
  },

}
</script>

<style lang="less" scoped>
@blue:#3498db;
@disabled-text-color:grey;
  .tab-item{
    flex-shrink:0;
    padding: 0 2em;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    &.active{
      color:@blue;
      font-weight: bold;
    }
    &.disabled{
      color: @disabled-text-color
    }
  }
</style>
