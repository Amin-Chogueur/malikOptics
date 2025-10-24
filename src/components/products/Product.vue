<script setup>
import { useCartStore } from "@/stores/cart";
import { useFavoriteStore } from "@/stores/favorite";
import { ShoppingCartIcon } from "@heroicons/vue/24/outline";
import { HeartIcon } from "@heroicons/vue/24/solid";
import { computed } from "vue";
import { RouterLink } from "vue-router";

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
  <div
    class="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col"
  >
    <!-- Product Image -->
    <div class="relative group">
      <img
        :src="props.product.image"
        :alt="props.product.title"
        class="w-full h-64 object-cover"
      />

      <span
        v-if="props.product.isNew"
        class="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded"
      >
        NEW
      </span>

      <!-- Overlay -->
      <div class="overLay">
        <RouterLink
          :to="`/products/${props.product._id}`"
          class="bg-white/90 hover:bg-blue-600 hover:text-white text-black font-semibold px-5 py-2 rounded-xl shadow-md transition-all duration-300"
        >
          See Details
        </RouterLink>
      </div>
    </div>

    <!-- Product Info -->
    <div class="flex flex-col flex-1 p-5">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
        {{ props.product.title }}
      </h3>
      <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">
        Brand: {{ props.product.brand }}
      </p>

      <p class="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
        {{ props.product.description }}
      </p>

      <div class="mt-auto flex justify-between items-center">
        <div class="flex flex-col items-start">
          <span class="text-lg font-bold text-blue-600 dark:text-blue-400">
            ${{ props.product.price }}
          </span>
          <span
            v-if="props.product.previousPrice"
            class="text-sm text-gray-400 line-through"
          >
            ${{ props.product.previousPrice }}
          </span>
        </div>

        <!-- Icons -->
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
      </div>
    </div>
  </div>
</template>

<style scoped>
.overLay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; /* Match the image width */
  height: 0%; /* Match the image height */
  background-color: rgba(0, 0, 0, 0.7); /* semi-transparent */
  opacity: 0; /* hidden by default */
  transition: all 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.relative:hover .overLay {
  opacity: 1; /* show on hover */
  height: 100%;
}
</style>
