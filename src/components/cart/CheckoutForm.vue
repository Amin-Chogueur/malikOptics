<script setup>
import { useCartStore } from "@/stores/cart";
import { ref } from "vue";
import { useToast } from "vue-toastification";
const toast = useToast();
const cartStore = useCartStore();

const form = ref({
  fullName: "",
  email: "",
  phone: "",
  address: "",
});

const errors = ref({});
const isPending = ref(false);

async function submitOrder() {
  if (!form.value.email.includes("@")) {
    errors.value.email = "Veuillez entrer une adresse e-mail valide.";
  }
  if (!form.value.fullName) {
    errors.value.fullName = "Veuillez entrer votre nom complet.";
  }
  if (!form.value.phone) {
    errors.value.phone = "Veuillez entrer votre numéro de téléphone.";
  }
  if (!form.value.address) {
    errors.value.address = "Veuillez entrer votre adresse.";
  } else {
    errors.value = {};

    form.value = { fullName: "", email: "", phone: "", address: "" }; // réinitialiser le formulaire
    isPending.value = true;
    await new Promise((r) => setTimeout(r, 2000));
    isPending.value = false;
    toast.success("Merci ! Votre commande a été passée avec succès.");
    await new Promise((r) => setTimeout(r, 1000));
    cartStore.clearCart();
  }
}
</script>

<template>
  <div
    class="max-w-md mx-auto bg-white dark:bg-gray-800 p-2 rounded-xl shadow-md mt-6"
  >
    <h2
      class="text-2xl font-bold text-center mb-4 text-blue-600 dark:text-blue-400"
    >
      Formulaire de Commande
    </h2>
    <form @submit.prevent="submitOrder" class="space-y-4">
      <div>
        <label class="block text-sm font-medium mb-1">Nom complet</label>
        <input
          v-model.trim="form.fullName"
          type="text"
          placeholder="Entrez votre nom complet"
          class="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500"
        />
        <p v-if="errors.fullName" class="text-red-500">{{ errors.fullName }}</p>
      </div>

      <div>
        <label class="block text-sm font-medium mb-1">Email</label>
        <input
          v-model.trim="form.email"
          type="email"
          placeholder="exemple@email.com"
          class="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500"
        />
        <p v-if="errors.email" class="text-red-500">{{ errors.email }}</p>
      </div>

      <div>
        <label class="block text-sm font-medium mb-1">Téléphone</label>
        <input
          v-model.trim="form.phone"
          type="tel"
          placeholder="+213 555 123 456"
          class="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500"
        />
        <p v-if="errors.phone" class="text-red-500">{{ errors.phone }}</p>
      </div>

      <div>
        <label class="block text-sm font-medium mb-1">Adresse</label>
        <textarea
          v-model.trim="form.address"
          rows="3"
          placeholder="Votre adresse de livraison"
          class="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500"
        ></textarea>
        <p v-if="errors.address" class="text-red-500">{{ errors.address }}</p>
      </div>

      <button
        :disabled="isPending"
        type="submit"
        class="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer disabled:bg-gray-700"
      >
        {{ isPending ? "Envoi..." : "Passer la commande" }}
      </button>
    </form>
  </div>
</template>
