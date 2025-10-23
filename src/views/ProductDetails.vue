<script setup>
import { computed, ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import axios from "axios";
import { useRoute } from "vue-router";
import Newsletter from "@/components/home/Newsletter.vue";
import { useCartStore } from "@/stores/cart";
import { ShoppingCartIcon } from "@heroicons/vue/24/outline";
import { HeartIcon } from "@heroicons/vue/24/solid";
import { useFavoriteStore } from "@/stores/favorite";

const apiUrl = import.meta.env.VITE_API_URL;
const route = useRoute();
const id = route.params.id;

// 🧠 Fetch a single product by ID
async function getProduct() {
  try {
    const res = await axios.get(`${apiUrl}/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw new Error("Failed to load product. Please try again later.");
  }
}

// 🔍 Query for product details
const { isPending, isError, data, error } = useQuery({
  queryKey: ["product", id], // include id to refetch if it changes
  queryFn: getProduct,
  staleTime: 60000,
});

const favoriteStore = useFavoriteStore();
const isAlreadyInFavorite = computed(() => {
  return favoriteStore.favorite?.find((item) => item?._id === data.value?._id);
});

const cartStore = useCartStore();
const isAlreadyInCart = computed(() => {
  return cartStore.cart.find((item) => item._id === data.value?._id);
});
</script>

<template>
  <section
    class="min-h-screen text-gray-800 dark:text-gray-200 transition-colors duration-500 mt-14"
  >
    <RouterLink
      to="/products"
      class="text-blue-400 hover:text-blue-500 underline"
      >&larr; All Products</RouterLink
    >
    <!-- 🕒 Loading State -->
    <div
      v-if="isPending"
      key="loading"
      class="flex justify-center items-center h-[60vh]"
    >
      <div
        class="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-600"
      ></div>
    </div>

    <!-- ❌ Error State -->
    <div v-else-if="isError" class="text-center text-red-500">
      {{ error.message }}
    </div>

    <!-- ✅ Product Details -->

    <div
      v-else
      class="mt-6 max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-8 mb-16"
    >
      <!-- Product Image -->
      <div class="flex-shrink-0 w-full md:w-1/2">
        <img
          :src="data.image"
          :alt="data.title"
          class="w-full md:max-w-[300px] mx-auto h-auto object-cover rounded-xl"
        />
        <span
          v-if="data.isNew"
          class="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded"
        >
          NEW
        </span>
      </div>

      <!-- Product Info -->
      <div class="flex flex-col flex-1 space-y-4">
        <h1 class="text-3xl font-bold">{{ data.title }}</h1>
        <p class="text-gray-500 dark:text-gray-400 text-sm">
          Brand: <span class="font-semibold">{{ data.brand }}</span>
        </p>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          {{ data.description }}
        </p>

        <div class="mt-4 flex items-center gap-4">
          <span class="text-2xl font-bold text-blue-600 dark:text-blue-400">
            ${{ data.price }}
          </span>
          <span
            v-if="data.previousPrice"
            class="text-gray-400 line-through text-lg"
          >
            ${{ data.previousPrice }}
          </span>
        </div>

        <div class="flex gap-3">
          <button
            :disabled="isAlreadyInCart"
            @click="cartStore.addToCart(data)"
            class="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition cursor-pointer disabled:bg-gray-600 disabled:cursor-not-allowed"
          >
            <ShoppingCartIcon class="w-5 h-5" />
          </button>
          <button
            v-if="!isAlreadyInFavorite"
            @click="favoriteStore.addToFavorite(data)"
            class="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition cursor-pointer"
          >
            <HeartIcon class="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
          <button
            v-else
            @click="favoriteStore.removeFromFavorite(data._id)"
            class="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition cursor-pointer"
          >
            <HeartIcon class="w-5 h-5 dark:text-red-700" />
          </button>
        </div>
      </div>
    </div>
    <Newsletter />
  </section>
</template>
