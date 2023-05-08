<template>
  <div>
    <header>
      <user-nav />
      <div class="p-10 pt-3">
        <div class="text-center">
          <router-link :to="{ name: 'home' }">
            <h1 class="text-vue text-7xl font-bold inline-block">Todo App</h1>
          </router-link>
        </div>
      </div>
    </header>
    <main>
      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
import UserNav from './components/UserNav.vue';

export default {
  name: "App",
  components: {
    UserNav
  }
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

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>
