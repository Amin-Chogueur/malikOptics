<script setup>
import { useCartStore } from "@/stores/cart";
import { useFavoriteStore } from "@/stores/favorite";
import { ShoppingCartIcon, TrashIcon } from "@heroicons/vue/24/outline";
import { EyeIcon } from "@heroicons/vue/24/outline";
import { defineProps, computed, ref } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
const currentColor = ref(props.item.colors[0].name);
const currentImage = computed(() => {
  return props.item.colors.find(
    (color) => color.name === currentColor.value && color.image
  );
});
const favoriteStore = useFavoriteStore();
const cartStore = useCartStore();

const currentProduct = computed(() => {
  return {
    ...props.item,
    colors: props.item.colors.find(
      (color) => color.name === currentColor.value
    ),
  };
});

const isAlreadyInCart = computed(() => {
  return cartStore.cart.find(
    (item) =>
      item.id === currentProduct.value.id &&
      item.colors.name === currentProduct.value.colors.name
  );
});
</script>

<template>
  <div
    class="relative bg-white dark:bg-gray-800 rounded-2xl shadow-md px-2 py-8 flex flex-col lg:flex-row gap-4 transition hover:shadow-lg"
  >
    <div class="overflow-hidden rounded-xl">
      <img
        :src="currentImage.image"
        :alt="item.name"
        class="w-full lg:w-56 h-auto rounded-xl transition-transform duration-500 hover:scale-105"
      />
      <div class="flex flex-wrap justify-center items-center gap-2 my-3">
        <button
          v-for="color in props.item.colors"
          :key="color.name"
          @click="currentColor = color.name"
          :style="{ backgroundColor: color.name }"
          class="h-5 w-5 rounded-full border-2 transition-all duration-300"
          :class="
            currentColor === color.name
              ? 'scale-110 border-blue-500'
              : 'border-transparent hover:scale-105'
          "
        ></button>
      </div>
    </div>

    <div class="flex-1">
      <p class="text-gray-700 dark:text-gray-400">{{ item.name }}</p>
      <p class="text-blue-600 font-bold mt-1">${{ item.price }}</p>
    </div>

    <button
      @click="favoriteStore.removeFromFavorite(item.id)"
      class="cursor-pointer absolute top-1 right-2 text-red-500 hover:text-red-700 transition"
    >
      <TrashIcon class="w-5 h-5" />
    </button>
    <div class="absolute bottom-2 right-2 flex items-center gap-2">
      <RouterLink
        :to="`/${item.category}/${item.id}`"
        class="border border-[#2563eb] dark:border-[#60a5fa] text-[#2563eb] dark:text-[#60a5fa] hover:bg-[#2563eb] hover:text-white dark:hover:bg-[#60a5fa] dark:hover:text-[#0b1120] font-medium p-2 rounded-lg transition-colors duration-300"
      >
        <EyeIcon class="w-4.5 h-4.5" />
      </RouterLink>
      <button
        :disabled="isAlreadyInCart"
        @click="cartStore.addToCart(currentProduct)"
        class="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition cursor-pointer disabled:bg-gray-600 disabled:cursor-not-allowed"
      >
        <ShoppingCartIcon class="w-5 h-5" />
      </button>
    </div>
  </div>
</template>
