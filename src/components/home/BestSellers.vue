<script setup>
import Product from "../products/Product.vue";

defineProps({
  bestSellers: {
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
        Meilleures Ventes
      </h2>

      <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        <Product
          v-for="product in bestSellers"
          :key="product.id"
          :product="product"
          :view="'home'"
        />
      </div>
    </div>
  </section>
</template>
