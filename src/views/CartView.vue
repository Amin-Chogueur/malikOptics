<script setup>
import CartItem from "@/components/cart/CartItem.vue";
import CheckoutForm from "@/components/cart/CheckoutForm.vue";
import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();
</script>

<template>
  <section
    class="min-h-screen text-gray-800 dark:text-gray-200 transition-colors duration-500 mt-14 px-2 lg:px-8"
  >
    <!-- Page Header -->
    <h2
      class="text-3xl font-bold text-center text-blue-600 dark:text-blue-400 mb-10"
    >
      Your Shopping Cart
    </h2>

    <!-- Grid Layout: Cart Items + Checkout -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Cart Items Section -->
      <div
        class="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow p-2"
      >
        <h3 class="text-xl font-semibold mb-4 border-b pb-2">Cart Items</h3>

        <div v-if="cartStore.cart.length" class="space-y-4">
          <CartItem
            v-for="item in cartStore.cart"
            :key="item._id"
            :item="item"
          />
        </div>

        <div v-else class="text-center py-10 text-gray-500">
          Your cart is empty 🛒
        </div>
      </div>

      <!-- Checkout Section -->
      <aside
        class="bg-white dark:bg-gray-800 rounded-2xl shadow p-2 h-fit sticky top-24"
      >
        <h3 class="text-xl font-semibold mb-4 border-b pb-2">
          Checkout Details
        </h3>

        <!-- Summary -->
        <div class="flex justify-between text-sm mb-3">
          <span>Total Items:</span>
          <span>{{ cartStore.cart.length }}</span>
        </div>

        <div class="flex justify-between text-lg font-semibold mb-5">
          <span>Total Price:</span>
          <span class="text-blue-600 dark:text-blue-400">
            ${{ cartStore.totalPrice.toFixed(2) }}
          </span>
        </div>

        <!-- Checkout Form -->
        <CheckoutForm />
      </aside>
    </div>
  </section>
</template>
