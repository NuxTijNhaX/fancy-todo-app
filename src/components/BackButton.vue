<template>
  <div class="flex justify-center">
    <button @click="goBack" class="flex items-center bg-vue" :class="getStyle">
      <span v-html="getSvg"></span>
      Cancel
    </button>
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";

export default {
  extends: BaseButton,
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style></style>
