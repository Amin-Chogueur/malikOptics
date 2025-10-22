<script setup>
import {
  UserIcon,
  DevicePhoneMobileIcon,
  CubeIcon,
} from "@heroicons/vue/24/outline";
</script>

<template>
  <section
    class="min-h-screen text-gray-800 dark:text-gray-200 transition-colors duration-500"
  >
    <!-- Hero Section -->
    <div
      class="relative bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white py-20 text-center"
    >
      <h1 class="text-4xl sm:text-5xl font-extrabold mb-4">About VuePhone</h1>
      <p class="text-lg sm:text-xl text-indigo-100 max-w-2xl mx-auto">
        Innovation. Style. Performance. Discover why VuePhone is the go-to
        destination for tech enthusiasts.
      </p>
    </div>

    <!-- Story Section -->
    <div
      class="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center"
    >
      <div>
        <img
          src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80"
          alt="Smartphones on desk"
          class="rounded-xl shadow-lg mb-4 w-full h-86"
        />
      </div>
      <div>
        <h2
          class="text-3xl font-bold mb-4 text-indigo-600 dark:text-indigo-400"
        >
          Our Story
        </h2>
        <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
          Founded in 2022, <strong>VuePhone</strong> was born from a passion for
          cutting-edge technology and sleek design. We believe your devices
          should do more than just work — they should inspire, connect, and
          simplify your life. From smartphones to smartwatches, we carefully
          select products that merge innovation with style.
        </p>
      </div>
    </div>

    <!-- Mission Section -->
    <div class="py-16">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <h2
          class="text-3xl font-bold mb-8 text-indigo-600 dark:text-indigo-400"
        >
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

    <!-- Team Section -->
    <div class="max-w-6xl mx-auto px-6 py-16 text-center">
      <h2 class="text-3xl font-bold mb-10 text-indigo-600 dark:text-indigo-400">
        Meet Our Team
      </h2>
      <div class="grid sm:grid-cols-3 gap-8">
        <div
          class="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition"
        >
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80"
            alt="Team member"
            class="w-24 h-24 rounded-full mb-4 object-cover"
          />
          <h3 class="font-semibold text-lg">Amin Chogueur</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            Founder & Frontend Developer
          </p>
        </div>
        <div
          class="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition"
        >
          <img
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80"
            alt="Team member"
            class="w-24 h-24 rounded-full mb-4 object-cover"
          />
          <h3 class="font-semibold text-lg">Sara Benali</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            Marketing Specialist
          </p>
        </div>
        <div
          class="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition"
        >
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80"
            alt="Team member"
            class="w-24 h-24 rounded-full mb-4 object-cover"
          />
          <h3 class="font-semibold text-lg">Youssef Haddad</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            Customer Support Lead
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
