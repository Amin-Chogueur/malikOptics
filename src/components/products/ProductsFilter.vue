<script setup>
import { ref, watch, defineEmits } from "vue";
const emit = defineEmits(["filter-change"]);

const selectedCategory = ref("all");
const selectedBrand = ref("all");
const maxPrice = ref(240);

const categories = ref(["all", "Lunettes de vue", "Lunettes de soleil"]);

const brands = ref([
  "Gucci",
  "Oakley",
  "Prada",
  "Dior",
  "Versace",
  "Chanel",
  "Hugo Boss",
  "Polaroid",
  "RayBan",
  "Persol",
]);

watch([selectedCategory, selectedBrand, maxPrice], () => {
  emit("filter-change", {
    familly: selectedCategory.value,
    brand: selectedBrand.value,
    maxPrice: maxPrice.value,
  });
});
</script>

<template>
  <aside
    class="mx-auto w-full md:w-64 bg-white shadow-lg rounded-2xl p-6 space-y-6 transition-colors duration-300"
  >
    <h2 class="text-xl font-semibold text-gray-800 mb-4 flex">
      Filter Products
    </h2>
    <div>
      <div>
        <h3 class="text-sm font-semibold mb-2 text-gray-700">Category</h3>
        <select
          v-model="selectedCategory"
          class="w-full px-3 py-2 rounded-lg border text-gray-700"
        >
          <option
            v-for="(category, idx) in categories"
            :value="category"
            :key="idx"
          >
            {{ category }}
          </option>
        </select>
      </div>

      <!-- Brand -->
      <div>
        <h3 class="text-sm font-semibold mb-2 text-gray-700">Brand</h3>
        <select
          v-model="selectedBrand"
          class="w-full px-3 py-2 rounded-lg border text-gray-700"
        >
          <option value="all">All</option>
          <option v-for="brand in brands" :value="brand">
            {{ brand }}
          </option>
        </select>
      </div>

      <!-- Price -->
      <div>
        <h3 class="text-sm font-semibold mb-2 text-gray-700">Max Price</h3>
        <input
          type="range"
          v-model="maxPrice"
          min="0"
          max="240"
          step="10"
          class="w-full accent-indigo-600"
        />
        <p class="text-sm text-gray-600 mt-1">
          Up to <span class="font-semibold">{{ maxPrice }}$</span>
        </p>
      </div>
    </div>
    <!-- Category -->
  </aside>
</template>
