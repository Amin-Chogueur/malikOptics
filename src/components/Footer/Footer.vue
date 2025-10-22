<script setup>
import { RouterLink } from "vue-router";
import {
  ShoppingBagIcon,
  BuildingOfficeIcon,
  EnvelopeIcon,
  PhoneIcon,
  DevicePhoneMobileIcon,
  ClockIcon,
  ShieldCheckIcon,
} from "@heroicons/vue/24/outline";
</script>

<template>
  <footer
    class="bg-gray-100 dark:bg-[#0b1120] text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-800 mt-16"
  >
    <div class="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
      <!-- Brand -->
      <div>
        <div class="flex items-center gap-2 mb-3">
          <DevicePhoneMobileIcon
            class="w-7 h-7 text-blue-600 dark:text-blue-400"
          />
          <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400">
            VuePhone
          </h2>
        </div>
        <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          Your trusted destination for premium smartphones, smartwatches, and
          accessories that redefine style and performance.
        </p>

        <!-- Contact -->
        <div class="mt-4 space-y-2 text-sm">
          <p class="flex items-center gap-2">
            <PhoneIcon class="w-4 h-4 text-blue-500" /> +213 555 123 456
          </p>
          <p class="flex items-center gap-2">
            <EnvelopeIcon class="w-4 h-4 text-blue-500" />
            support@vuephone.com
          </p>
        </div>
      </div>

      <!-- Shop Links -->
      <div>
        <h3
          class="font-semibold mb-3 text-gray-800 dark:text-gray-200 flex items-center gap-1"
        >
          <ShoppingBagIcon class="w-5 h-5 text-blue-500" /> Shop
        </h3>
        <ul class="space-y-2">
          <li>
            <RouterLink to="/products" class="hover:text-blue-500 transition"
              >All Products</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/category/phones"
              class="hover:text-blue-500 transition"
              >Phones</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/category/watches"
              class="hover:text-blue-500 transition"
              >Watches</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/category/accessories"
              class="hover:text-blue-500 transition"
              >Accessories</RouterLink
            >
          </li>
        </ul>
      </div>

      <!-- Company Links -->
      <div>
        <h3
          class="font-semibold mb-3 text-gray-800 dark:text-gray-200 flex items-center gap-1"
        >
          <BuildingOfficeIcon class="w-5 h-5 text-blue-500" /> Company
        </h3>
        <ul class="space-y-2">
          <li>
            <RouterLink to="/about" class="hover:text-blue-500 transition"
              >About Us</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/contact" class="hover:text-blue-500 transition"
              >Contact</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/faq" class="hover:text-blue-500 transition"
              >FAQ</RouterLink
            >
          </li>
        </ul>
      </div>

      <!-- Newsletter -->
      <div>
        <h3
          class="font-semibold mb-3 text-gray-800 dark:text-gray-200 flex items-center gap-1"
        >
          <EnvelopeIcon class="w-5 h-5 text-blue-500" /> Stay Updated
        </h3>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">
          Subscribe to receive exclusive deals and the latest product updates.
        </p>
        <form class="flex">
          <input
            type="email"
            placeholder="Enter your email"
            class="w-full px-3 py-2 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-[#0f172a] dark:border-gray-700"
          />
          <button
            type="submit"
            class="bg-blue-600 text-white px-4 py-2 text-sm rounded-r-md hover:bg-blue-500 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

    <!-- Bottom -->
    <div
      class="border-t border-gray-200 dark:border-gray-800 mt-8 py-4 text-center text-sm text-gray-500 dark:text-gray-400"
    >
      <div class="flex justify-center gap-2 items-center mb-2">
        <ClockIcon class="w-4 h-4 text-blue-500" />
        <p>Fast Delivery • Secure Payments • Trusted Service</p>
      </div>
      <p>
        © {{ new Date().getFullYear() }}
        <span class="text-blue-500 font-semibold">VuePhone</span>. All rights
        reserved.
      </p>
    </div>
  </footer>
</template>
