<template>
  <div class="border w-4/5 md:w-2/5 m-auto p-16 rounded-md shadow-lg">
    <form @submit.prevent="">
      <div class="container">
        <h1 class="text-4xl font-semibold text-center mb-8">Sign Up</h1>
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
          <base-button color="yellow" icon="plus" size="medium">
            <template #content>
              <slot name="button"> Login </slot>
            </template>
          </base-button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";
import BackButton from "@/components/BackButton.vue";

export default {
  components: {
    BaseButton,
    BackButton,
  },
};
</script>

<style></style>
