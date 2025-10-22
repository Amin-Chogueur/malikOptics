<script setup>
const products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: "$999",
    image:
      "https://images.unsplash.com/photo-1695048136199-caa1e1cfa471?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    price: "$899",
    image:
      "https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Apple Watch Series 9",
    price: "$399",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Samsung Galaxy Watch 6",
    price: "$349",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "iPhone Case (Silicone)",
    price: "$29",
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Wireless Earbuds Pro",
    price: "$149",
    image:
      "https://images.unsplash.com/photo-1616509091252-5161b00c5e4f?q=80&w=800&auto=format&fit=crop",
  },
];
</script>

<template>
  <section class="py-16 transition-colors duration-300">
    <div class="max-w-6xl mx-auto px-6">
      <h2
        class="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-100"
      >
        Best Sellers
      </h2>

      <div class="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        <div
          v-for="product in products"
          :key="product.id"
          class="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition overflow-hidden"
        >
          <img
            :src="product.image"
            :alt="product.name"
            class="w-full h-56 object-cover"
          />
          <div class="p-5">
            <h3
              class="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1"
            >
              {{ product.name }}
            </h3>
            <p class="text-blue-600 dark:text-blue-400 font-bold mb-3">
              {{ product.price }}
            </p>
            <button
              class="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
