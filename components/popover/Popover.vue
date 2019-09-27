<template>
  <div class="popover" @click.stop="xxx" ref="popover">
    <div class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuluPopover",
  data() {
    return {
      visible: false
    };
  },
  methods: {
    xxx(e) {
      this.visible = !this.visible;
      if (this.visible === true) {
        setTimeout(() => {
          let eventHandler = () => {
            this.visible = false;
            document.removeEventListener("click", eventHandler);
          };
          document.addEventListener("click", eventHandler);
        });
      }
    }
  },
  mounted() {
    // document.addEventListener('click',(e)=>{
    //   console.dir(e.target)
    //   if((e.target.nodeName === "BODY") || e.target.nodeName === "HTML" || !e.target.contains(this.$refs.popover) ){
    //     this.visible = false
    //   }
    // })
  }
};
</script>

<style lang="less" scoped>
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
  .content-wrapper {
    position: absolute;
    bottom: 100%;
    left: 0;
    border: 1px solid red;
    box-shadow: rgba(0, 0, 0, 0.5);
  }
}
</style>
