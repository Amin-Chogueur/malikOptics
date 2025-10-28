<script setup>
import { useCartStore } from "@/stores/cart";
import { ref } from "vue";
import { useToast } from "vue-toastification";
import { z } from "zod";

const toast = useToast();
const cartStore = useCartStore();

// 🧩 Define Zod schema for validation
const orderSchema = z.object({
  fullName: z.string().min(3, "Veuillez entrer votre nom complet."),
  email: z.string().email("Veuillez entrer une adresse e-mail valide."),
  phone: z.string().min(8, "Veuillez entrer un numéro de téléphone valide."),
  address: z.string().min(5, "Veuillez entrer votre adresse."),
});

// 🧠 Reactive states
const form = ref({
  fullName: "",
  email: "",
  phone: "",
  address: "",
});
const errors = ref({
  fullName: "",
  email: "",
  phone: "",
  address: "",
});
const isPending = ref(false);

// 📨 Submit handler
async function submitOrder() {
  // Reset previous errors
  errors.value = { fullName: "", email: "", phone: "", address: "" };

  // Validate using Zod
  const result = orderSchema.safeParse(form.value);

  if (!result.success) {
    // Map Zod validation errors
    result.error.issues.forEach((issue) => {
      const field = issue.path[0];
      if (errors.value[field] !== undefined) {
        errors.value[field] = issue.message;
      }
    });
    return;
  }

  // ✅ If validation passes
  isPending.value = true;
  await new Promise((r) => setTimeout(r, 2000)); // simulate delay

  toast.success("Merci ! Votre commande a été passée avec succès.");

  // Reset form
  form.value = { fullName: "", email: "", phone: "", address: "" };
  isPending.value = false;
  cartStore.clearCart();
}
</script>

<template>
  <div
    class="max-w-md mx-auto bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md mt-6"
  >
    <h2
      class="text-2xl font-bold text-center mb-4 text-blue-600 dark:text-blue-400"
    >
      Formulaire de Commande
    </h2>

    <form @submit.prevent="submitOrder" class="space-y-4">
      <!-- Nom complet -->
      <div>
        <label class="block text-sm font-medium mb-1">Nom complet</label>
        <input
          v-model.trim="form.fullName"
          type="text"
          placeholder="Entrez votre nom complet"
          class="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500"
        />
        <p v-if="errors.fullName" class="text-red-500 text-sm mt-1">
          {{ errors.fullName }}
        </p>
      </div>

      <!-- Email -->
      <div>
        <label class="block text-sm font-medium mb-1">Email</label>
        <input
          v-model.trim="form.email"
          type="email"
          placeholder="exemple@email.com"
          class="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500"
        />
        <p v-if="errors.email" class="text-red-500 text-sm mt-1">
          {{ errors.email }}
        </p>
      </div>

      <!-- Téléphone -->
      <div>
        <label class="block text-sm font-medium mb-1">Téléphone</label>
        <input
          v-model.trim="form.phone"
          type="tel"
          placeholder="+213 555 123 456"
          class="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500"
        />
        <p v-if="errors.phone" class="text-red-500 text-sm mt-1">
          {{ errors.phone }}
        </p>
      </div>

      <!-- Adresse -->
      <div>
        <label class="block text-sm font-medium mb-1">Adresse</label>
        <textarea
          v-model.trim="form.address"
          rows="3"
          placeholder="Votre adresse de livraison"
          class="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500"
        ></textarea>
        <p v-if="errors.address" class="text-red-500 text-sm mt-1">
          {{ errors.address }}
        </p>
      </div>

      <!-- Bouton -->
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
