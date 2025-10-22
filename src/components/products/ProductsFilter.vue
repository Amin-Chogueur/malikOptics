<script setup>
import { ref, watch, defineEmits, computed } from "vue";
const emit = defineEmits(["filter-change"]);

const selectedCategory = ref("all");
const selectedBrand = ref("all");
const maxPrice = ref(2000);

const categories = ref(["all", "phone", "phone case", "watch"]);
const brands = ref([
  { phone: ["Apple", "Samsung", "Asuz"] },
  {
    "phone case": [
      "Artistic",
      "Trandafiri",
      "Lavish",
      "Albinuta",
      "Next Door",
      "Shield",
      " Joker",
      "Samsung",
    ],
  },
  { watch: ["Apple", "Coros-apex", "Fossil", "Google", "Huawe"] },
]);

const computedBrands = computed(() => {
  if (selectedCategory.value === "all") {
    return brands.value.flatMap((b) => Object.values(b)[0]);
  }
  return Array.from(
    Object.values(
      brands.value.filter((brand) =>
        selectedCategory.value === "all" ? brand : brand[selectedCategory.value]
      )[0]
    )[0]
  );
});

watch([selectedCategory, selectedBrand, maxPrice], () => {
  emit("filter-change", {
    category: selectedCategory.value,
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
          <option v-for="brand in computedBrands" :value="brand">
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
          max="3000"
          step="50"
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
