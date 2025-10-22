<script setup>
import { ref } from "vue";

const email = ref("");
const success = ref(false);

function subscribe() {
  if (email.value) {
    success.value = true;
    email.value = "";
    setTimeout(() => (success.value = false), 4000);
  }
}
</script>

<template>
  <section
    class="relative py-20 overflow-hidden transition-colors duration-500 bg-white dark:bg-[#0f172a] text-gray-900 dark:text-white"
  >
    <!-- Background Image -->
    <img
      src="https://images.unsplash.com/photo-1510552776732-03e61cf4b144?auto=format&fit=crop&w=1500&q=80"
      alt="Phones background"
      class="absolute inset-0 w-full h-full object-cover opacity-18 dark:opacity-28"
      crossorigin="anonymous"
    />

    <!-- Overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/70 dark:from-[#0f172a]/70 dark:via-[#0f172a]/80 dark:to-[#0f172a]/90"
    ></div>

    <!-- Content -->
    <div class="relative max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
      <h2
        class="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
      >
        Get 10% Off Your First Order
      </h2>
      <p class="text-gray-600 dark:text-gray-300 mb-8 text-sm sm:text-base">
        Subscribe to our newsletter and be the first to know about new arrivals,
        sales, and exclusive offers.
      </p>

      <form
        class="flex flex-col sm:flex-row items-center justify-center gap-4"
        @submit.prevent="subscribe"
      >
        <input
          type="email"
          v-model="email"
          placeholder="Enter your email"
          class="w-full sm:flex-1 px-4 py-3 rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          required
        />
        <button
          type="submit"
          class="w-full sm:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition rounded-lg font-semibold text-white shadow-md hover:shadow-lg"
        >
          Subscribe
        </button>
      </form>

      <p
        v-if="success"
        class="mt-4 text-green-600 dark:text-green-400 font-medium transition"
      >
        🎉 Thank you for subscribing!
      </p>
    </div>
  </section>
</template>
