<script setup>
import { useCartStore } from "@/stores/cart";
import { TrashIcon } from "@heroicons/vue/24/outline";
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
const cartStore = useCartStore();
</script>
<template>
  <div
    class="relative flex items-center justify-between bg-white dark:bg-gray-900 p-2 rounded-xl shadow-md mb-4"
  >
    <!-- Image -->
    <img
      :src="item.image"
      :alt="item.title"
      class="w-20 h-20 object-cover rounded-lg"
    />

    <!-- Details -->
    <div class="flex-1 ml-4">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
        {{ item.title }}
      </h3>
      <p class="text-sm text-gray-500 dark:text-gray-400">{{ item.brand }}</p>

      <!-- Price -->
      <div class="mt-1">
        <span class="text-blue-600 dark:text-blue-400 font-bold"
          >${{ item.price }}</span
        >
      </div>
    </div>
    <div>
      <!-- Quantity Controls -->
      <div class="absolute bottom-2 right-1 flex items-center gap-3">
        <button
          @click="cartStore.decreaseQuantity(item._id)"
          class="cursor-pointer px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          -
        </button>
        <span class="text-gray-800 dark:text-gray-200 font-medium">
          {{ item.quantity }}
        </span>
        <button
          @click="cartStore.increaseQuantity(item._id)"
          class="cursor-pointer px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          +
        </button>
      </div>

      <!-- Remove Button -->
      <button
        @click="cartStore.removeFromCart(item._id)"
        class="absolute top-2 right-1 text-red-500 hover:text-red-700 transition cursor-pointer"
      >
        <TrashIcon class="w-5 h-5" />
      </button>
    </div>
  </div>
</template>
