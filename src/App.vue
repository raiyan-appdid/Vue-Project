<script setup>
import Navbar from './components/navbar.vue';

</script>

<template>
  <div class="full-page bg-dark text-white">
    <Navbar />
    <main>
      <RouterView></RouterView>
    </main>
  </div>
</template>

<style scoped>
.full-page {
  /* width: 100vw; */
  height: 100vh;
}
</style>
