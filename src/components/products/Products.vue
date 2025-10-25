<script setup>
import { ref, computed } from "vue";
import Product from "@/components/products/Product.vue";
import ProductsFilter from "./ProductsFilter.vue";
import { FunnelIcon } from "@heroicons/vue/24/outline";
import Model from "../ui/Model.vue";
import NotFound from "../ui/NotFound.vue";

const showModal = ref(false);

function openModal() {
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
}

const props = defineProps({
  allProducts: {
    type: Array,
    required: true,
  },
});
const products = ref(props.allProducts);
const filters = ref({
  category: "all",
  brand: "all",
  maxPrice: 2000,
});

const filteredProducts = computed(() => {
  return products.value.filter((p) => {
    const byCategory =
      filters.value.category === "all" || p.category === filters.value.category;
    const byBrand =
      filters.value.brand === "all" || p.brand === filters.value.brand;
    const byPrice = p.price <= filters.value.maxPrice;
    return byCategory && byBrand && byPrice;
  });
});

function handleFilterChange(newFilters) {
  filters.value = newFilters;
}
</script>

<template>
  <section
    class="min-h-screen text-gray-800 dark:text-gray-200 transition-colors duration-500 mt-6"
  >
    <Model v-show="showModal" @closeModel="closeModal">
      <ProductsFilter @filter-change="handleFilterChange" />
    </Model>
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 p-3">
      <button
        @click="openModal"
        title="filter"
        class="fixed z-40 left-1 lg:left-10 top-30 flex gap-2 items-center p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition cursor-pointer"
      >
        <FunnelIcon class="w-6 h-6 text-gray-300" />
      </button>

      <!-- Products -->
      <div
        v-if="filteredProducts.length > 0"
        class="flex-1 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <Product
          v-for="product in filteredProducts"
          :key="product._id"
          :product="product"
          :componentType="'product'"
        />
      </div>
    </div>
    <NotFound v-if="filteredProducts.length === 0" />
  </section>
</template>
