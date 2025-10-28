<script setup>
import { ref } from "vue";
import { z } from "zod";
import { useToast } from "vue-toastification";
const toast = useToast();
// 🧩 Define Zod schema
const formSchema = z.object({
  name: z.string().min(3, "Le nom doit contenir au moins 3 caractères"),
  email: z.string().email("Veuillez entrer une adresse e-mail valide"),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères"),
});

// 🧠 Reactive state
const name = ref("");
const email = ref("");
const message = ref("");
const errors = ref({ name: "", email: "", message: "" });
const isSubmiting = ref(false);

// 📨 Submit handler
async function handleSubmit() {
  // Reset errors
  errors.value = { name: "", email: "", message: "" };

  // Validate with Zod
  const result = formSchema.safeParse({
    name: name.value,
    email: email.value,
    message: message.value,
  });

  if (!result.success) {
    // Map Zod errors correctly
    result.error.issues.forEach((err) => {
      const field = err.path[0];
      if (errors.value[field] !== undefined) {
        errors.value[field] = err.message;
      }
    });
    return;
  }
  isSubmiting.value = true;
  await new Promise((r) => setTimeout(r, 2000));
  isSubmiting.value = false;
  // ✅ If all good
  toast.success("Message envoyé avec succès !");

  name.value = "";
  email.value = "";
  message.value = "";
}
</script>

<template>
  <form
    @submit.prevent="handleSubmit"
    class="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg space-y-6 text-left"
  >
    <!-- Name -->
    <div>
      <label
        for="name"
        class="block text-gray-700 dark:text-gray-200 mb-2 font-medium"
        >Nom</label
      >
      <input
        v-model="name"
        type="text"
        id="name"
        placeholder="Votre nom"
        class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder:text-gray-400"
      />
      <p v-if="errors.name" class="text-red-500 text-sm mt-1">
        {{ errors.name }}
      </p>
    </div>

    <!-- Email -->
    <div>
      <label
        for="email"
        class="block text-gray-700 dark:text-gray-200 mb-2 font-medium"
        >Email</label
      >
      <input
        v-model="email"
        type="email"
        id="email"
        placeholder="vous@example.com"
        class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder:text-gray-400"
      />
      <p v-if="errors.email" class="text-red-500 text-sm mt-1">
        {{ errors.email }}
      </p>
    </div>

    <!-- Message -->
    <div>
      <label
        for="message"
        class="block text-gray-700 dark:text-gray-200 mb-2 font-medium"
        >Message</label
      >
      <textarea
        v-model="message"
        id="message"
        rows="4"
        placeholder="Écrivez votre message..."
        class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder:text-gray-400"
      ></textarea>
      <p v-if="errors.message" class="text-red-500 text-sm mt-1">
        {{ errors.message }}
      </p>
    </div>

    <button
      :disabled="isSubmiting"
      type="submit"
      class="cursor-pointer w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 disabled:bg-gray-700"
    >
      {{ !isSubmiting ? "Envoyer le message" : "Envoi..." }}
    </button>
  </form>
</template>
