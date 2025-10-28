<script setup>
import { useCartStore } from "@/stores/cart";
import { TrashIcon } from "@heroicons/vue/24/outline";
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const cartStore = useCartStore();
</script>
<template>
  <div
    class="relative flex items-center gap-3 justify-between bg-white dark:bg-gray-900 p-2 rounded-xl shadow-md mb-4"
  >
    <!-- Image -->
    <div class="flex flex-col gap-1 justify-center items-center">
      <img
        :src="props.item.colors.image"
        :alt="props.item.name"
        class="w-28 h-auto rounded-lg"
      />
      <button
        :style="{ backgroundColor: props.item.colors.name }"
        class="h-3 w-3 rounded-full border transition-all duration-300"
      ></button>
    </div>

    <!-- Details -->
    <div class="flex-1 ml-2">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
        {{ props.item.name }}
      </h3>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        {{ props.item.brand }}
      </p>

      <!-- Price -->
      <div class="mt-1">
        <span class="text-blue-600 dark:text-blue-400 font-bold"
          >${{ props.item.price.toFixed(2) }}</span
        >
      </div>
    </div>
    <div>
      <!-- Quantity Controls -->
      <div class="absolute bottom-2 right-1 flex items-center gap-3">
        <button
          @click="cartStore.decreaseQuantity(props.item)"
          class="cursor-pointer px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          -
        </button>
        <span class="text-gray-800 dark:text-gray-200 font-medium">
          {{ props.item.quantity }}
        </span>
        <button
          @click="cartStore.increaseQuantity(props.item)"
          class="cursor-pointer px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          +
        </button>
      </div>

      <!-- Remove Button -->
      <button
        @click="cartStore.removeFromCart(props.item)"
        class="absolute top-2 right-1 text-red-500 hover:text-red-700 transition cursor-pointer"
      >
        <TrashIcon class="w-5 h-5" />
      </button>
    </div>
  </div>
</template>
