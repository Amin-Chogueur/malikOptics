<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

import SideBar from "./SideBar.vue";
import NavBar from "./NavBar.vue";

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
</script>

<template>
  <!-- Navbar -->
  <NavBar
    :isOpen="isOpen"
    :isActive="isActive"
    :isDark="isDark"
    @open="handleOpen"
    @toggle="toggleTheme"
  />

  <!-- Sidebar (Mobile) -->
  <SideBar
    :isOpen="isOpen"
    :isDark="isDark"
    :isActive="isActive"
    @close="handleClose"
    @toggle="toggleTheme"
  />
</template>
