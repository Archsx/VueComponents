<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  props: {
    selected: {
      type: String
    },
    direction: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].includes(value);
      }
    }
  },
  data() {
    return {
      eventBus: new Vue()
    };
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  created() {
    // this.$emit("update:selected", "foo");
  },
  methods: {},
  mounted() {
    // if(this.$children.length === 0){
    //   //$children只能获取到子组件，而不是普通的HTML元素(div之类的)
    //   throw new Error('tabs没有子组件')
    // }
    this.$children.forEach(vm => {
      if (vm.$options.name === "GTabHead") {
        vm.$children.forEach(item => {
          if (
            item.$options.name === "GTabItem" &&
            item.name === this.selected
          ) {
              this.eventBus.$emit("update:selected", this.selected, item);
          }
        });
      }
    });
  }
};
</script>

<style>
</style>
