<template>
  <div>
    <header>
      <h1 class="text-vue text-7xl font-bold text-center p-10">Todo App</h1>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.bg-red {
  background-color: red;
}
.bg-blue {
  background-color: blue;
}
.bg-yellow {
  background-color: yellow;
}
.bg-orange {
  background-color: orange;
}
</style>
