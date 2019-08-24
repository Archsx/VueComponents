<template>
  <transition name="slide">
    <div class="sider" v-if="visible">
      <slot></slot>
      <button @click="visible = false">close</button>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Sider",
  data() {
    return {
      visible: true
    };
  }
};
</script>

<style lang="less" scoped>
.sider {
  position: relative;
  > button {
    position: absolute;
    top: 0;
    right: 0;
  }
}

.slide-enter-active,.slide-leave-active{
  // transition: transform 5s;
  transition: all 0.5s;
}
.slide-enter,.slide-leave-to{
  // 这样写中间会有留白,改为margin-left
  // transform: translateX(-100%)
  // 但是这样也有问题，因为这个sider的宽度是用户指定的，可能不是200px,但是我们在这里没法获取到用户设定的宽度啊(似乎在css方面没法动态修改)
  // 只有通过覆盖的方式，用户只有重新写，比如在使用的时候重新写.sider.slider-enter,.sider.slider-leave-to{margin-left:-150px}

  margin-left: -200px;
}


</style>
