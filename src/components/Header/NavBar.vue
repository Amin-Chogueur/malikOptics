<script setup>
import { RouterLink } from "vue-router";

// Icons
import {
  ShoppingCartIcon,
  HeartIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
} from "@heroicons/vue/24/outline";
defineProps({
  isDark: Boolean,
  isOpen: Boolean,
  isActive: Function,
});

const emit = defineEmits(["open", "toggle"]);

function openSidebar() {
  emit("open"); // ✅ tell parent to close it
}
function toggleTheme() {
  emit("toggle");
}
</script>

<template>
  <nav
    class="fixed top-0 left-o right-0 w-full z-50 flex justify-between items-center py-4 px-6 bg-[#f9fafb] text-[#111827] dark:bg-[#0b1120] dark:text-[#f3f4f6] border-b border-[#e5e7eb] dark:border-[#1f2937] shadow-sm transition-colors duration-300"
  >
    <!-- Logo -->
    <h1
      class="text-2xl font-extrabold tracking-wide text-[#2563eb] dark:text-[#60a5fa]"
    >
      VuePhone
    </h1>

    <!-- Desktop Links -->
    <ul class="hidden md:flex flex-1 justify-center items-center gap-8">
      <li v-for="link in ['/', '/products', '/about', '/contact']" :key="link">
        <RouterLink
          :to="link"
          :class="[
            isActive(link)
              ? 'text-[#2563eb] dark:text-[#60a5fa] font-semibold'
              : 'hover:text-[#2563eb] dark:hover:text-[#60a5fa] transition-colors',
          ]"
        >
          {{
            link === "/"
              ? "Home"
              : link === "/products"
              ? "Products"
              : link === "/about"
              ? "About"
              : "Contact"
          }}
        </RouterLink>
      </li>
    </ul>

    <!-- Icons -->
    <ul class="hidden md:flex justify-center items-center gap-6">
      <li>
        <RouterLink
          :class="[
            isActive('/favorite')
              ? 'text-[#2563eb] dark:text-[#60a5fa]'
              : 'hover:text-[#2563eb] dark:hover:text-[#60a5fa]',
          ]"
          to="/favorite"
        >
          <HeartIcon class="w-6 h-6" />
        </RouterLink>
      </li>
      <li>
        <RouterLink
          :class="[
            isActive('/cart')
              ? 'text-[#2563eb] dark:text-[#60a5fa]'
              : 'hover:text-[#2563eb] dark:hover:text-[#60a5fa]',
          ]"
          to="/cart"
        >
          <ShoppingCartIcon class="w-6 h-6" />
        </RouterLink>
      </li>

      <!-- Theme Toggle -->
      <li>
        <button
          @click="toggleTheme"
          class="p-2 rounded-full border border-[#e5e7eb] dark:border-[#1f2937] hover:bg-[#e5e7eb] dark:hover:bg-[#1f2937] transition-colors duration-200"
        >
          <SunIcon v-if="isDark" class="w-5 h-5" />
          <MoonIcon v-else class="w-5 h-5" />
        </button>
      </li>
    </ul>

    <!-- Mobile Menu Button -->
    <button @click="openSidebar" class="md:hidden">
      <Bars3Icon class="w-7 h-7 text-[#2563eb] dark:text-[#60a5fa]" />
    </button>
  </nav>
</template>
