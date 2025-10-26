<script setup>
import { ref, watch } from "vue";
import { useQuery } from "@tanstack/vue-query";
import axios from "axios";
import { useRoute, RouterLink } from "vue-router";
import Newsletter from "@/components/home/Newsletter.vue";
import { useCartStore } from "@/stores/cart";
import { useFavoriteStore } from "@/stores/favorite";
import ActionsButton from "@/components/ui/ActionsButton.vue";

const apiUrl = import.meta.env.VITE_API_URL;
const route = useRoute();
const currentView = route.path.split("/")[1];
const id = route.params.id;

// Fetch single product
async function getProduct() {
  const res = await axios.get(`${apiUrl}/${id}`);
  return res.data;
}

const { isPending, isError, data, error } = useQuery({
  queryKey: ["product", id],
  queryFn: getProduct,
  staleTime: 60000,
});

const favoriteStore = useFavoriteStore();
const cartStore = useCartStore();

const currentColor = ref(null);
const currentImage = ref(null);

// Initialize color and image
watch(
  () => data.value,
  (newData) => {
    if (newData?.colors?.length) {
      currentColor.value = newData.colors[0].name;
      currentImage.value = newData.colors[0].image;
    }
  },
  { immediate: true }
);

// Update image when color changes
watch(currentColor, (newColor) => {
  const selected = data.value?.colors?.find((c) => c.name === newColor);
  currentImage.value = selected?.image || null;
});
</script>

<template>
  <section
    class="min-h-screen text-gray-800 dark:text-gray-200 transition-colors duration-500 mt-14"
  >
    <RouterLink
      :to="`/${currentView}`"
      class="text-blue-600 dark:text-blue-400 underline text-sm font-medium hover:text-blue-800 transition"
    >
      &larr; Tous les produits
    </RouterLink>

    <!-- Chargement -->
    <div v-if="isPending" class="flex justify-center items-center h-[60vh]">
      <div
        class="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-600"
      ></div>
    </div>

    <!-- Erreur -->
    <div v-else-if="isError" class="text-center text-red-500 mt-12">
      {{ error.message }}
    </div>

    <!-- Détails du produit -->
    <div
      v-else
      class="mt-10 max-w-6xl mx-auto bg-white/70 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-3xl shadow-2xl p-3 flex flex-col md:flex-row gap-10"
    >
      <!-- Image -->
      <div class="relative w-full md:w-1/2 flex flex-col items-center">
        <div
          class="h-54 sm:h-74 overflow-hidden flex justify-center items-center bg-gray-100 rounded-2xl group"
        >
          <img
            :src="currentImage"
            :alt="data.name"
            class="w-full max-w-[400px] mx-auto h-auto object-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <span
          v-if="data.isNew"
          class="absolute top-2 left-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md"
        >
          NOUVEAUTÉ
        </span>

        <!-- Couleurs -->
        <div
          v-if="data.colors?.length > 1"
          class="flex flex-wrap justify-center gap-3 mt-6"
        >
          <button
            v-for="color in data.colors"
            :key="color.name"
            @click="currentColor = color.name"
            :class="[
              'w-9 h-9 rounded-full border-2 shadow transition-transform transform hover:scale-110',
              currentColor === color.name
                ? 'border-blue-600 ring-2 ring-blue-300'
                : 'border-gray-300',
            ]"
            :style="{ backgroundColor: color.name || '#ccc' }"
            :title="color.name"
          ></button>
        </div>
      </div>

      <!-- Informations -->
      <div class="flex flex-col flex-1 space-y-6">
        <div>
          <h1 class="text-4xl font-extrabold tracking-tight mb-2">
            {{ data.name }}
          </h1>
          <p class="text-gray-500 dark:text-gray-400 text-sm space-x-4">
            <span
              >👓 <strong>{{ data.brand }}</strong></span
            >
            <span
              >🧍 <strong>{{ data.category }}</strong></span
            >
            <span
              >☀️ <strong>{{ data.familly }}</strong></span
            >
          </p>
        </div>

        <!-- Description -->
        <p
          class="text-gray-700 dark:text-gray-300 text-[15px] leading-relaxed border-l-4 border-blue-500 pl-4"
        >
          {{ data.description }}
        </p>

        <!-- Tableau des détails -->
        <div class="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl shadow-inner">
          <h3 class="font-semibold mb-3 text-lg">Détails du produit</h3>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
            <li>
              <strong>Matériau de la monture :</strong> {{ data.frameMaterial }}
            </li>
            <li>
              <strong>Matériau des verres :</strong> {{ data.lensMaterial }}
            </li>
            <li><strong>Forme :</strong> {{ data.shape }}</li>
            <li><strong>Coupe :</strong> {{ data.fit }}</li>
            <li>
              <strong>Polarisé :</strong> {{ data.polarized ? "Oui" : "Non" }}
            </li>
          </ul>
        </div>

        <!-- Prix -->
        <div class="flex items-center gap-4 mt-4">
          <span
            class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
          >
            ${{ data.price }}
          </span>
        </div>

        <!-- Actions -->
        <ActionsButton :product="data" :currentColor="currentColor" />
      </div>
    </div>

    <Newsletter class="mt-16" />
  </section>
</template>
