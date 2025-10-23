<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";

import SideBar from "./SideBar.vue";
import NavBar from "./NavBar.vue";
import { useCartStore } from "@/stores/cart";
import { useFavoriteStore } from "@/stores/favorite";

const isDark = ref(false);
const isOpen = ref(false);
const route = useRoute();

const isActive = (link) => link === route.path;

onMounted(() => {
  isDark.value = localStorage.theme === "dark";
  updateTheme();
});

function toggleTheme() {
  isDark.value = !isDark.value;
  localStorage.theme = isDark.value ? "dark" : "light";
  updateTheme();
}

function updateTheme() {
  document.documentElement.classList.toggle("dark", isDark.value);
}

function handleClose() {
  isOpen.value = false;
}
function handleOpen() {
  isOpen.value = true;
}

const favoriteStore = useFavoriteStore();
const favoriteQuantity = computed(() => {
  return favoriteStore.favorite.length;
});

const cartStore = useCartStore();
const cartQuantity = computed(() => {
  return cartStore.cart.length;
});
</script>

<template>
  <!-- Navbar -->
  <NavBar
    :isOpen="isOpen"
    :isActive="isActive"
    :isDark="isDark"
    @open="handleOpen"
    @toggle="toggleTheme"
    :cartQuantity="cartQuantity"
    :favoriteQuantity="favoriteQuantity"
  />

  <!-- Sidebar (Mobile) -->
  <SideBar
    :isOpen="isOpen"
    :isDark="isDark"
    :isActive="isActive"
    @close="handleClose"
    @toggle="toggleTheme"
    :cartQuantity="cartQuantity"
    :favoriteQuantity="favoriteQuantity"
  />
</template>
