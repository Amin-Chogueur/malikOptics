<script setup>
import { useFavoriteStore } from "@/stores/favorite";
import { HeartIcon, XMarkIcon } from "@heroicons/vue/24/solid";
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const favoriteStore = useFavoriteStore();
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
  </div>
</template>
