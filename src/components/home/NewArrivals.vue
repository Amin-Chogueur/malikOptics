<script setup>
import { RouterLink } from "vue-router";
import Product from "../products/Product.vue";

defineProps({
  newArrivals: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="py-16 transition-colors duration-300">
    <div class="max-w-6xl mx-auto px-6">
      <h2
        class="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-100"
      >
        New Arrivals
      </h2>

      <div class="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Product
          v-for="product in newArrivals"
          :key="product._id"
          :product="product"
        />
      </div>
    </div>
  </section>
</template>
