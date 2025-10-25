import { ref } from "vue";
import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
const toast = useToast();

export const useFavoriteStore = defineStore(
  "favorite",
  () => {
    const favorite = ref([]);

    function addToFavorite(product) {
      const isExist = favorite.value?.find((item) => item.id === product._id);
      if (isExist) {
        return;
      } else {
        favorite.value.push(product);
        toast.success("✅ Product added to wishlist successfully!");
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
  },
  {
    // 🧠 Persist cart data in localStorage
    persist: {
      enabled: true,
      strategies: [
        {
          key: "vuephone-favorite",
          storage: localStorage,
        },
      ],
    },
  }
);
