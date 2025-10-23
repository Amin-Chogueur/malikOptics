<script setup>
import {
  CubeIcon,
  DevicePhoneMobileIcon,
  UserIcon,
} from "@heroicons/vue/24/outline";
</script>
<template>
  <div class="py-16">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <h2 class="text-3xl font-bold mb-8 text-indigo-600 dark:text-indigo-400">
        Our Mission
      </h2>
      <p class="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10">
        Our mission is simple — to deliver premium, reliable, and stylish tech
        to every customer. Whether you’re upgrading your phone, finding the
        perfect smartwatch, or protecting your devices, we make shopping
        seamless, secure, and enjoyable.
      </p>

      <!-- Mission Icons -->
      <div class="grid sm:grid-cols-3 gap-8 mt-8">
        <div
          class="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition"
        >
          <DevicePhoneMobileIcon
            class="w-10 h-10 text-indigo-600 dark:text-indigo-400 mb-3"
          />
          <h3 class="font-semibold text-lg mb-1">Premium Devices</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            We feature only top-quality tech products you can trust.
          </p>
        </div>
        <div
          class="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition"
        >
          <CubeIcon
            class="w-10 h-10 text-indigo-600 dark:text-indigo-400 mb-3"
          />
          <h3 class="font-semibold text-lg mb-1">Trusted Brands</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            Partnered with the world’s leading technology brands.
          </p>
        </div>
        <div
          class="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition"
        >
          <UserIcon
            class="w-10 h-10 text-indigo-600 dark:text-indigo-400 mb-3"
          />
          <h3 class="font-semibold text-lg mb-1">Customer First</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            Your satisfaction drives everything we do.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
