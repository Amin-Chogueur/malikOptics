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

const cartStore = useCartStore();
const favoriteStore = useFavoriteStore();
const isAlreadyInFavorite = computed(() => {
  return favoriteStore.favorite?.find(
    (item) => item?._id === props.product._id
  );
});
const isAlreadyInCart = computed(() => {
  return cartStore.cart?.find((item) => item?._id === props.product._id);
});
</script>
<template>
  <div
    class="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition overflow-hidden"
  >
    <img
      :src="props.product.image"
      :alt="props.product.name"
      class="w-full h-auto object-cover"
    />
    <div class="p-5">
      <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1">
        {{ props.product.title }}
      </h3>
      <p class="text-blue-600 dark:text-blue-400 font-bold mb-3">
        ${{ props.product.price }}
      </p>
      <div class="flex justify-end gap-3">
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
          <HeartIcon class="w-5 h-5 dark:text-red-700" />
        </button>

        <button
          :disabled="isAlreadyInCart"
          @click="cartStore.addToCart(props.product)"
          class="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition cursor-pointer disabled:bg-gray-600 disabled:cursor-not-allowed"
        >
          <ShoppingCartIcon class="w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
</template>
