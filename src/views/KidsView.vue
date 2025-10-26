<script setup>
import Newsletter from "@/components/home/Newsletter.vue";
import Products from "@/components/products/Products.vue";

import { useQuery } from "@tanstack/vue-query";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

async function getProducts() {
  try {
    const res = await axios.get(`${apiUrl}?category=Enfant`);
    return res.data.slice(0, 46);
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to load products. Please try again later.");
  }
}

// Query
const { isPending, isError, data, error } = useQuery({
  queryKey: ["enfant"],
  queryFn: getProducts,
  staleTime: 600000,
});
</script>

<template>
  <section
    class="min-h-screen text-gray-800 dark:text-gray-200 transition-colors duration-500 py-20"
  >
    <div class="mb-16">
      <h2 class="text-3xl font-semibold text-center">Nos Lunettes</h2>

      <transition name="fade" mode="out-in">
        <!-- Loading -->
        <div
          v-if="isPending"
          key="loading"
          class="flex justify-center items-center h-[60vh]"
        >
          <div
            class="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-600"
          ></div>
        </div>

        <!-- Error -->
        <div
          v-else-if="isError"
          key="error"
          class="flex flex-col items-center justify-center h-[60vh] text-red-500"
        >
          <
          <p class="text-lg font-medium mb-2">
            ⚠️ Oups ! Une erreur s’est produite.
          </p>
          <p class="text-sm">{{ error.message }}</p>
        </div>

        <!-- Products -->
        <Products v-else :allProducts="data" />
      </transition>
    </div>
    <Newsletter />
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
