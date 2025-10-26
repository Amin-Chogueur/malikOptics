<script setup>
import { RouterLink } from "vue-router";
import {
  MapIcon,
  EnvelopeIcon,
  PhoneIcon,
  DevicePhoneMobileIcon,
  ClockIcon,
} from "@heroicons/vue/24/outline";
import { ref } from "vue";

const email = ref("");
const errors = ref({});
const isPending = ref(false);
const success = ref(false);

async function subscribe() {
  if (!email.value.includes("@")) {
    errors.value.email = "Please enter a valid email.";
  } else {
    errors.value.email = "";

    email.value = "";
    isPending.value = true;
    await new Promise((r) => setTimeout(r, 2000));
    isPending.value = false;
    success.value = true;
    await new Promise((r) => setTimeout(r, 4000));
    success.value = false;
  }
}
</script>

<template>
  <footer
    class="bg-gray-100 dark:bg-[#0b1120] text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-800 mt-16"
  >
    <div class="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
      <!-- Marque -->
      <div>
        <div class="flex items-center gap-2 mb-3">
          <!-- Glasses Icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-7 h-7 text-blue-600 dark:text-blue-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 12a2.25 2.25 0 014.5 0m0 0a2.25 2.25 0 004.5 0m-9 0h9m4.5 0a2.25 2.25 0 014.5 0m0 0a2.25 2.25 0 004.5 0m-9 0h9"
            />
          </svg>

          <RouterLink
            to="/"
            class="text-2xl font-bold text-blue-600 dark:text-blue-400"
          >
            MalikOptics
          </RouterLink>
        </div>

        <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          Votre opticien de confiance pour des lunettes élégantes, confortables
          et adaptées à votre style de vie. MalikOptics allie vision, design et
          expertise pour prendre soin de vos yeux.
        </p>

        <!-- Contact -->
        <div class="mt-4 space-y-2 text-sm">
          <p class="flex items-center gap-2">
            <PhoneIcon class="w-4 h-4 text-blue-500" /> +213 555 123 456
          </p>
          <p class="flex items-center gap-2">
            <EnvelopeIcon class="w-4 h-4 text-blue-500" />
            contact@malikoptics.com
          </p>
        </div>
      </div>

      <!-- Liens -->
      <div>
        <h3
          class="font-semibold mb-3 text-gray-800 dark:text-gray-200 flex items-center gap-1"
        >
          <MapIcon class="w-5 h-5 text-blue-500" /> Navigation
        </h3>
        <ul class="space-y-2">
          <li>
            <RouterLink to="/" class="hover:text-blue-500 transition"
              >Accueil</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/Homme" class="hover:text-blue-500 transition"
              >Lunettes Homme</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/Femme" class="hover:text-blue-500 transition"
              >Lunettes Femme
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/Enfant" class="hover:text-blue-500 transition"
              >Lunettes Enfant</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/A_propos" class="hover:text-blue-500 transition"
              >À propos</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/contact" class="hover:text-blue-500 transition"
              >Contact</RouterLink
            >
          </li>
        </ul>
      </div>

      <!-- Newsletter -->
      <div>
        <h3
          class="font-semibold mb-3 text-gray-800 dark:text-gray-200 flex items-center gap-1"
        >
          <EnvelopeIcon class="w-5 h-5 text-blue-500" /> Restez informé
        </h3>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">
          Inscrivez-vous pour recevoir nos offres exclusives et les dernières
          nouveautés en matière de lunettes.
        </p>
        <form @submit.prevent="subscribe" class="flex">
          <input
            type="email"
            v-model="email"
            placeholder="Entrez votre adresse e-mail"
            class="w-full px-3 py-2 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-[#0f172a] dark:border-gray-700"
          />
          <button
            :disabled="isPending"
            type="submit"
            class="cursor-pointer bg-blue-600 text-white px-4 py-2 text-sm rounded-r-md hover:bg-blue-500 transition disabled:bg-gray-600"
          >
            {{ isPending ? "Abonnement..." : "S'abonner" }}
          </button>
        </form>
        <p v-if="errors.email" class="text-red-500">{{ errors.email }}</p>
        <p
          v-if="success"
          class="mt-4 text-green-600 dark:text-green-400 font-medium transition"
        >
          🎉 Merci pour votre abonnement !
        </p>
      </div>
    </div>

    <!-- Bas de page -->
    <div
      class="border-t border-gray-200 dark:border-gray-800 mt-8 py-4 text-center text-sm text-gray-500 dark:text-gray-400"
    >
      <div class="flex justify-center gap-2 items-center mb-2">
        <ClockIcon class="w-4 h-4 text-blue-500" />
        <p>Livraison rapide • Paiements sécurisés • Service fiable</p>
      </div>
      <p>
        © {{ new Date().getFullYear() }}
        <span class="text-blue-500 font-semibold">MalikOptics</span>. Tous
        droits réservés.
      </p>
    </div>
  </footer>
</template>
