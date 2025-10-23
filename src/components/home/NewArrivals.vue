<script setup>
import { RouterLink } from "vue-router";

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
        <div
          v-for="item in newArrivals"
          :key="item.id"
          class="bg-gray-50 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition overflow-hidden"
        >
          <img
            :src="item.image"
            :alt="item.name"
            class="w-full h-auto object-cover"
          />
          <div class="p-4 text-center">
            <h3
              class="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1"
            >
              {{ item.title }}
            </h3>
            <p class="text-blue-600 dark:text-blue-400 font-bold mb-3">
              ${{ item.price }}
            </p>
            <RouterLink
              :to="`/products/${item._id}`"
              class="px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition cursor-pointer"
            >
              View Product
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
