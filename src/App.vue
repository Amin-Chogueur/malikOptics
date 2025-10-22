<script setup>
import Navigation from "./components/Header/Navigation.vue";
import Footer from "./components/Footer/Footer.vue";
</script>

<template>
  <section
    class="min-h-screen bg-[#e8eff7] text-[#111827] dark:bg-[#0b1120] dark:text-[#f3f4f6] transition-colors duration-300"
  >
    <Navigation />
    <main class="max-w-6xl mx-auto px-6 md:px-12 py-10">
      <RouterView />
    </main>
    <Footer />
  </section>
</template>
