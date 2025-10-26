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
      const isExist = cart.value.find(
        (item) =>
          item.id === product.id && item.colors.name === product.colors.name
      );
      if (isExist) {
        return;
      } else {
        const newItem = {
          ...product,
          quantity: 1,
        };
        cart.value.push(newItem);
        toast.success("Produit ajouté au panier avec succès !");
      }
    }
    function removeFromCart(product) {
      cart.value = cart.value.filter(
        (item) =>
          !(item.id === product.id && item.colors.name === product.colors.name)
      );
    }

    function increaseQuantity(product) {
      cart.value = cart.value.map((item) =>
        item.id === product.id && item.colors.name === product.colors.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }
    function decreaseQuantity(product) {
      cart.value = cart.value.map((item) =>
        item.id === product.id &&
        item.colors.name === product.colors.name &&
        item.quantity > 1
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
          key: "vueGlasses-cart",
          storage: localStorage,
        },
      ],
    },
  }
);
