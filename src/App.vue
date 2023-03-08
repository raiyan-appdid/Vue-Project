<script setup>
import Navbar from './components/navbar.vue';

</script>

<template>
  <div class="full-page bg-dark text-white">
    <Navbar />
    
    <main class="mb-5" style="scroll-padding-bottom: 20px;">
      <RouterView></RouterView>
    </main>
  </div>
</template>

<style scoped>
.full-page {
  /* width: 100vw; */
  /* background: url('https://www.freecodecamp.org/news/content/images/size/w2000/2023/02/pexels-xxss-is-back-777001--2-.jpg'); */
  height: 95vh;
}
</style>
