<script setup>
import FavoriteItem from "@/components/favorite/FavoriteItem.vue";
import Newsletter from "@/components/home/Newsletter.vue";
import { useFavoriteStore } from "@/stores/favorite";

const favoriteStore = useFavoriteStore();
</script>

<template>
  <section class="min-h-screen text-gray-800 dark:text-gray-200 py-20">
    <h2 class="text-2xl font-bold text-center mb-14">❤️ Articles favoris ❤️</h2>

    <div
      v-if="favoriteStore.favorite.length > 0"
      class="grid sm:grid-cols-2 gap-6 my-16"
    >
      <FavoriteItem
        v-for="item in favoriteStore.favorite"
        :key="item.id"
        :item="item"
      />
    </div>

    <p v-else class="text-center text-gray-500 my-10">
      Vous n’avez aucun article favori pour le moment 💔
    </p>
    <Newsletter />
  </section>
</template>
