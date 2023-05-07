<template>
  <div class="text-center mt-10">
    <div>
      <h1 class="text-4xl font-bold text-red-500">404 - Not Found</h1>
      <p class="mt-2 text-xl">
        This page does not exist in website -
        <router-link class="underline text-vue" :to="{ name: 'home' }"
          >Back to Home</router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>
