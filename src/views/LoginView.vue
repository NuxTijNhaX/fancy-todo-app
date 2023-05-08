<template>
  <div>
    <div
      v-if="!loginUser"
      class="border w-4/5 md:w-2/5 m-auto p-16 rounded-md shadow-lg"
    >
      <div class="container">
        <h1 class="text-4xl font-semibold text-center mb-8">Login</h1>
        <hr />

        <div class="mt-7">
          <div class="flex flex-col">
            <label class="font-semibold text-lg" for="email"
              ><b>Username</b></label
            >
            <input
              class="border rounded-md p-2 bg-gray-50"
              type="text"
              placeholder="Enter Username"
              name="email"
              required
              v-model="user.username"
            />
          </div>

          <div class="flex flex-col mt-10">
            <label class="font-semibold text-lg" for="psw"
              ><b>Password</b></label
            >
            <input
              class="border rounded-md p-2 bg-gray-50"
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
              v-model="user.password"
            />
          </div>

          <div class="mt-7">
            <label>
              <input
                type="checkbox"
                checked="checked"
                name="remember"
                style="margin-bottom: 15px"
              />
              Remember me
            </label>
          </div>
        </div>
        <div class="mt-10 flex justify-around">
          <back-button color="blue" icon="leftarrow" size="medium" />
          <base-button
            color="yellow"
            icon="plus"
            size="medium"
            @click.native="login"
          >
            <template #content>
              <slot name="button"> Login </slot>
            </template>
          </base-button>
        </div>
      </div>
    </div>

    <div v-else class="mt-20">
      <p class="text-3xl text-center">You are already logged in!!!</p>
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";
import BackButton from "@/components/BackButton.vue";
import { mapState } from "vuex";

export default {
  data() {
    return {
      user: {
        username: null,
        password: null,
      },
    };
  },
  methods: {
    login() {
      this.$store.commit("LOG_IN", this.user);
      const redirect = this.$route.query.redirect || "/";
      this.$router.push(redirect);
    },
  },
  computed: {
    ...mapState({ loginUser: "user" }),
  },
  components: {
    BaseButton,
    BackButton,
  },
};
</script>

<style></style>
