import { ref } from "vue";
import { defineStore } from "pinia";

export const useFavoriteStore = defineStore("favorite", () => {
  const favorite = ref([]);

  function addToFavorite(product) {
    const isExist = favorite.value?.find((item) => item.id === product._id);
    if (isExist) {
      return;
    } else {
      favorite.value.push(product);
    }
  }
  function removeFromFavorite(id) {
    favorite.value = favorite.value.filter((item) => item._id !== id);
  }

  return {
    favorite,
    addToFavorite,
    removeFromFavorite,
  };
});
