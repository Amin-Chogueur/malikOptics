<script setup>
// No logic needed — purely presentational
</script>

<template>
  <section
    class="h-[calc(100vh-80px)] flex flex-col md:flex-row items-center justify-between gap-10 text-[#111827] dark:text-[#f3f4f6] transition-colors duration-500 mt-16 md:mt-10"
  >
    <!-- Text Content -->
    <div class="flex-1 space-y-6">
      <h1 class="text-2xl md:text-4xl font-extrabold leading-tight">
        Discover the Latest
        <span class="text-[#2563eb] dark:text-[#60a5fa]">Smartphones</span
        >,<br />
        <span class="text-[#2563eb] dark:text-[#60a5fa]">Watches</span>, and
        <span class="text-[#2563eb] dark:text-[#60a5fa]">Protection</span>
        Accessories
      </h1>

      <p class="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
        Upgrade your lifestyle with high-quality tech essentials. Explore our
        exclusive collection of phones, smartwatches, and stylish protection
        cases that combine innovation with elegance.
      </p>

      <div class="flex flex-wrap items-center gap-4">
        <RouterLink
          to="/products"
          class="bg-[#2563eb] hover:bg-[#1d4ed8] dark:bg-[#3b82f6] dark:hover:bg-[#2563eb] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
        >
          Shop Now
        </RouterLink>

        <RouterLink
          to="/about"
          class="border border-[#2563eb] dark:border-[#60a5fa] text-[#2563eb] dark:text-[#60a5fa] hover:bg-[#2563eb] hover:text-white dark:hover:bg-[#60a5fa] dark:hover:text-[#0b1120] font-medium py-3 px-6 rounded-lg transition-colors duration-300"
        >
          Learn More
        </RouterLink>
      </div>
    </div>

    <!-- Image Section -->
    <div class="flex-1 flex justify-center items-center relative">
      <img
        src="https://www.macworld.com/wp-content/uploads/2023/01/android-wear-iphone-lead-100728986-orig.jpg?quality=50&strip=all"
        alt="Latest smartphones and accessories"
        class="w-full max-w-md rounded-2xl shadow-2xl object-cover"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"
      ></div>
    </div>
  </section>
</template>
