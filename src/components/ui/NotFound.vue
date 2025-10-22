<script setup>
import { ShoppingBagIcon } from "@heroicons/vue/24/outline";
</script>
<template>
  <div
    class="w-fit p-5 rounded-xl mx-auto flex flex-col items-center justify-center py-16 text-center text-gray-600 bg-white dark:bg-gray-800"
  >
    <ShoppingBagIcon class="w-20 h-20 mb-4 text-gray-400" />
    <h2 class="text-2xl font-semibold mb-2">No Products Found</h2>
    <p class="text-gray-500">Try adjusting your filters or check back later.</p>
  </div>
</template>
