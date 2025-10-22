<script setup>
import { ShoppingCartIcon, HeartIcon } from "@heroicons/vue/24/outline";
import { RouterLink } from "vue-router";

defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <RouterLink
    :to="`products/${product._id}`"
    class="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col"
  >
    <!-- Product Image -->
    <div class="relative">
      <img
        :src="product.image"
        :alt="product.title"
        class="w-full h-64 object-cover"
      />
      <span
        v-if="product.isNew"
        class="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded"
      >
        NEW
      </span>
    </div>

    <!-- Product Info -->
    <div class="flex flex-col flex-1 p-5">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
        {{ product.title }}
      </h3>
      <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">
        Brand: {{ product.brand }}
      </p>

      <p class="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
        {{ product.description }}
      </p>

      <div class="mt-auto flex justify-between items-center">
        <div>
          <span class="text-lg font-bold text-blue-600 dark:text-blue-400">
            ${{ product.price }}
          </span>
          <span
            v-if="product.previousPrice"
            class="text-sm text-gray-400 line-through ml-2"
          >
            ${{ product.previousPrice }}
          </span>
        </div>

        <!-- Icons -->
        <div class="flex gap-3">
          <button
            class="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            <HeartIcon class="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
          <button
            class="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
          >
            <ShoppingCartIcon class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  </RouterLink>
</template>
