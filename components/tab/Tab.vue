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
