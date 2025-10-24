<script setup>
import { useCartStore } from "@/stores/cart";
import { useFavoriteStore } from "@/stores/favorite";
import { ShoppingCartIcon } from "@heroicons/vue/24/outline";
import { XMarkIcon } from "@heroicons/vue/24/solid";
import { EyeIcon } from "@heroicons/vue/24/outline";
import { defineProps, computed } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const favoriteStore = useFavoriteStore();
const cartStore = useCartStore();
const isAlreadyInCart = computed(() => {
  return cartStore.cart.find((item) => item._id === props.item._id);
});
</script>

<template>
  <div
    class="relative bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 flex gap-4 transition hover:shadow-lg"
  >
    <img
      :src="item.image"
      :alt="item.name"
      class="w-36 h-36 object-cover rounded-xl"
    />

    <div class="flex-1">
      <p class="text-gray-700 dark:text-gray-400">{{ item.title }}</p>
      <p class="text-blue-600 font-bold mt-1">${{ item.price }}</p>
    </div>

    <button
      @click="favoriteStore.removeFromFavorite(item._id)"
      class="cursor-pointer absolute top-2 right-2 text-red-500 hover:text-red-700 transition"
    >
      <XMarkIcon class="w-5 h-5" />
    </button>
    <div class="absolute bottom-2 right-2 flex items-center gap-2">
      <RouterLink
        :to="`/products/${item._id}`"
        class="border border-[#2563eb] dark:border-[#60a5fa] text-[#2563eb] dark:text-[#60a5fa] hover:bg-[#2563eb] hover:text-white dark:hover:bg-[#60a5fa] dark:hover:text-[#0b1120] font-medium p-2 rounded-lg transition-colors duration-300"
      >
        <EyeIcon class="w-4.5 h-4.5" />
      </RouterLink>
      <button
        :disabled="isAlreadyInCart"
        @click="cartStore.addToCart(item)"
        class="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition cursor-pointer disabled:bg-gray-600 disabled:cursor-not-allowed"
      >
        <ShoppingCartIcon class="w-5 h-5" />
      </button>
    </div>
  </div>
</template>
