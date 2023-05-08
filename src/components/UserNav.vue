<template>
  <div class="flex justify-end mr-10 pt-5">
    <router-link :to="{ name: 'login' }" v-if="!user">
      <button>
        <span v-html="getUserSvg"></span>
      </button>
    </router-link>
    <div v-else>
      <div class="flex gap-5 items-center">
        <p class="text-xl">
          Welcome, <span class="font-semibold">{{ user.username }}</span>
        </p>
        <span v-html="getUserSvg"></span>
      </div>
      <div class="hover:underline cursor-pointer">
        <span @click="logout">Log out</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import { iconList } from "../enums/Icon";

export default {
  methods: {
    ...mapMutations({ logout: "LOG_OUT" }),
  },
  computed: {
    ...mapState(["user"]),
    getUserSvg() {
      return iconList.user;
    },
  },
};
</script>

<style scoped>

</style>
