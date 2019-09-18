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
  methods: {
  },
  mounted() {
    this.eventBus.$emit('update:selected',this.selected)
  },
};
</script>

<style>
</style>
