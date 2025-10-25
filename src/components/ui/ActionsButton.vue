<script setup>
import { useCartStore } from "@/stores/cart";
import { useFavoriteStore } from "@/stores/favorite";
import { ShoppingCartIcon } from "@heroicons/vue/24/outline";
import { HeartIcon } from "@heroicons/vue/24/solid";
import { computed } from "vue";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const favoriteStore = useFavoriteStore();
const isAlreadyInFavorite = computed(() => {
  return favoriteStore.favorite?.find(
    (item) => item?._id === props.product._id
  );
});

const cartStore = useCartStore();
const isAlreadyInCart = computed(() => {
  return cartStore.cart.find((item) => item._id === props.product._id);
});
</script>
<template>
  <div class="flex gap-3">
    <button
      v-if="!isAlreadyInFavorite"
      @click="favoriteStore.addToFavorite(props.product)"
      class="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition cursor-pointer"
    >
      <HeartIcon class="w-5 h-5 text-gray-600 dark:text-gray-300" />
    </button>
    <button
      v-else
      @click="favoriteStore.removeFromFavorite(props.product._id)"
      class="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition cursor-pointer"
    >
      <HeartIcon class="w-5 h-5 text-red-700" />
    </button>
    <button
      :disabled="isAlreadyInCart"
      @click="cartStore.addToCart(props.product)"
      class="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition cursor-pointer disabled:bg-gray-600 disabled:cursor-not-allowed"
    >
      <ShoppingCartIcon class="w-5 h-5" />
    </button>
  </div>
</template>
