<script setup>
import { RouterLink } from "vue-router";
import ActionsButton from "../ui/ActionsButton.vue";
import { computed, ref } from "vue";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
  view: {
    type: String,
  },
});

const currentColor = ref(props.product.colors[0].name);
const currentImage = computed(() => {
  return props.product.colors.find(
    (color) => color.name === currentColor.value && color.image
  );
});
</script>

<template>
  <div
    class="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
  >
    <!-- Product Image -->
    <div
      class="relative h-64 bg-gray-100 dark:bg-gray-100 flex justify-center items-center"
    >
      <img
        :src="currentImage.image"
        :alt="props.product.name"
        class="w-full h-auto transition-transform duration-500 group-hover:scale-105"
      />

      <!-- New Badge -->
      <span
        v-if="props.product.isNew"
        class="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm"
      >
        NEW
      </span>

      <!-- Overlay -->
      <div
        class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex justify-center items-end transition-opacity duration-500 pb-5"
      >
        <RouterLink
          :to="`${props.product.category}/${props.product.id}`"
          class="bg-white text-gray-900 hover:bg-blue-600 hover:text-white font-semibold px-5 py-2 rounded-xl shadow-md transition-all duration-300"
        >
          See Details
        </RouterLink>
      </div>
    </div>

    <!-- Product Info -->
    <div class="flex flex-col flex-1 p-5">
      <h3
        class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1 truncate"
      >
        {{ props.product.name }}
      </h3>

      <div
        class="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-3"
      >
        <span
          >Brand:
          <strong class="text-gray-700 dark:text-gray-200">{{
            props.product.brand
          }}</strong></span
        >
        <span class="capitalize">{{ props.product.category }}</span>
      </div>

      <!-- Color Selector -->
      <div class="flex flex-wrap items-center gap-2 mb-3">
        <button
          v-for="color in props.product.colors"
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

      <p
        v-if="props.view !== 'home'"
        class="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2"
      >
        {{ props.product.description }}
      </p>

      <!-- Price and Actions -->
      <div class="mt-auto flex justify-between items-center">
        <span class="text-lg font-bold text-blue-600 dark:text-blue-400">
          ${{ props.product.price }}
        </span>

        <ActionsButton :product="props.product" :currentColor="currentColor" />
      </div>
    </div>
  </div>
</template>
