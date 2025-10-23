<script setup>
import {
  XMarkIcon,
  HeartIcon,
  MoonIcon,
  ShoppingCartIcon,
  SunIcon,
} from "@heroicons/vue/24/outline";
import { RouterLink } from "vue-router";
defineProps({
  isDark: Boolean,
  isOpen: Boolean,
  isActive: Function,
  cartQuantity: Number,
  favoriteQuantity: Number,
});

const emit = defineEmits(["close", "toggle"]);

function closeSidebar() {
  emit("close"); // ✅ tell parent to close it
}

function toggleTheme() {
  emit("toggle");
}
</script>
<template>
  <transition name="slide">
    <div
      v-if="isOpen"
      class="fixed z-50 inset-0 bg-black/40 backdrop-blur-sm flex"
      @click.self="closeSidebar"
    >
      <aside
        class="w-3/4 max-w-xs bg-[#f9fafb] dark:bg-[#0b1120] text-[#111827] dark:text-[#f3f4f6] h-full p-6 flex flex-col justify-between shadow-xl transition-colors duration-300"
      >
        <div>
          <div class="flex justify-between items-center mb-8">
            <h2 class="text-2xl font-bold text-[#2563eb] dark:text-[#60a5fa]">
              VuePhone
            </h2>
            <button @click="closeSidebar">
              <XMarkIcon class="w-6 h-6" />
            </button>
          </div>

          <ul class="space-y-6 text-lg">
            <li
              v-for="link in ['/', '/products', '/about', '/contact']"
              :key="link"
            >
              <RouterLink
                :to="link"
                @click="closeSidebar"
                :class="[
                  isActive(link)
                    ? 'text-[#2563eb] dark:text-[#60a5fa] font-semibold'
                    : 'hover:text-[#2563eb] dark:hover:text-[#60a5fa]',
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
        </div>

        <div
          class="flex items-center justify-between mt-8 pt-6 border-t border-gray-300 dark:border-gray-700"
        >
          <div class="flex gap-4">
            <RouterLink class="relative" @click="closeSidebar" to="/favorite"
              ><HeartIcon class="w-6 h-6" /><span
                v-if="favoriteQuantity > 0"
                class="absolute -top-3.5 -right-2.5 bg-blue-600 w-5 h-5 flex justify-center items-center rounded-full text-white"
                >{{ favoriteQuantity }}</span
              ></RouterLink
            >
            <RouterLink class="relative" @click="closeSidebar" to="/cart"
              ><ShoppingCartIcon class="w-6 h-6" />
              <span
                v-if="cartQuantity > 0"
                class="absolute -top-3.5 -right-2.5 bg-blue-600 w-5 h-5 flex justify-center items-center rounded-full text-white"
                >{{ cartQuantity }}</span
              ></RouterLink
            >
          </div>
          <button
            @click="toggleTheme"
            class="p-2 rounded-full border border-[#e5e7eb] dark:border-[#1f2937]"
          >
            <SunIcon v-if="isDark" class="w-5 h-5" />
            <MoonIcon v-else class="w-5 h-5" />
          </button>
        </div>
      </aside>
    </div>
  </transition>
</template>
<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
