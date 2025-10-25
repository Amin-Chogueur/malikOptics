import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
const toast = useToast();
export const useCartStore = defineStore(
  "cart",
  () => {
    const cart = ref([]);
    const totalPrice = computed(() => {
      return cart.value.reduce((acu, cur) => acu + cur.quantity * cur.price, 0);
    });
    function addToCart(product) {
      const isExist = cart.value.find((item) => item.id === product._id);
      if (isExist) {
        return;
      } else {
        cart.value.push(product);
        toast.success("✅ Product added to cart successfully!");
      }
    }
    function removeFromCart(id) {
      cart.value = cart.value.filter((item) => item._id !== id);
    }

    function increaseQuantity(id) {
      cart.value = cart.value.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
    }
    function decreaseQuantity(id) {
      cart.value = cart.value.map((item) =>
        item._id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    }
    function clearCart() {
      cart.value = [];
    }
    return {
      cart,
      totalPrice,
      addToCart,
      removeFromCart,
      increaseQuantity,
      decreaseQuantity,
      clearCart,
    };
  },
  {
    // 🧠 Persist cart data in localStorage
    persist: {
      enabled: true,
      strategies: [
        {
          key: "vuephone-cart",
          storage: localStorage,
        },
      ],
    },
  }
);
