<script setup>
const newArrivals = [
  {
    id: 1,
    name: "Google Pixel 9 Pro",
    price: "$849",
    image:
      "https://images.unsplash.com/photo-1696162253192-79a37b6a4a2a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Apple Watch Ultra 2",
    price: "$799",
    image:
      "https://images.unsplash.com/photo-1676385900407-53cf0bf650a6?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Sony WH-1000XM5 Headphones",
    price: "$399",
    image:
      "https://images.unsplash.com/photo-1606220945770-bb4fa8d4f78b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "MagSafe Power Bank",
    price: "$99",
    image:
      "https://images.unsplash.com/photo-1625842275809-0025da9b8e97?q=80&w=800&auto=format&fit=crop",
  },
];
</script>

<template>
  <section class="py-16 transition-colors duration-300">
    <div class="max-w-6xl mx-auto px-6">
      <h2
        class="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-100"
      >
        New Arrivals
      </h2>

      <div class="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        <div
          v-for="item in newArrivals"
          :key="item.id"
          class="bg-gray-50 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition overflow-hidden"
        >
          <img
            :src="item.image"
            :alt="item.name"
            class="w-full h-52 object-cover"
          />
          <div class="p-4 text-center">
            <h3
              class="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1"
            >
              {{ item.name }}
            </h3>
            <p class="text-blue-600 dark:text-blue-400 font-bold mb-3">
              {{ item.price }}
            </p>
            <button
              class="px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition"
            >
              View Product
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
