<template>
  <div class="flex justify-center">
    <button class="flex items-center bg-vue" :class="getStyle">
      <span v-html="getSvg"></span>
      <slot name="content"></slot>
    </button>
  </div>
</template>

<script>
import { iconList } from "@/enums/Icon";

export default {
  props: {
    icon: {
      type: String,
    },
    size: {
      type: String,
      default: "large",
    },
    color: {
      type: String,
    },
  },
  data() {
    return {
      sizeList: {
        large: "rounded-md p-3 px-8 font-bold text-lg gap-4",
        medium: "rounded-md p-2 px-5 font-semibold text-md gap-4",
        small: "rounded-sm p-2 gap-2",
      },
    };
  },
  computed: {
    getSvg() {
      return iconList[this.icon];
    },
    getStyle() {
      return `${this.sizeList[this.size]} bg-${this.color}`;
    },
  },
};
</script>

<style scoped>
.bg-blue {
  background-color: #3b82f6;
}
.bg-red {
  background-color: #ef4444;
}
.bg-yellow {
  background-color: #eab308;
}
.bg-orange {
  background-color: #f97316;
}
</style>
