<script setup>
import {
  CubeIcon,
  DevicePhoneMobileIcon,
  UserIcon,
} from "@heroicons/vue/24/outline";
</script>
<template>
  <div class="py-16">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-8 text-indigo-600 dark:text-indigo-400">
        Notre Mission
      </h2>
      <p class="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10">
        Notre mission est simple — offrir à chacun une vision claire, un style
        unique et un confort optimal. Chez MalikOptics, nous allions expertise
        et innovation pour vous proposer des montures et verres de haute
        qualité, adaptés à vos besoins et à votre personnalité.
      </p>

      <!-- Mission Icons -->
      <div class="grid sm:grid-cols-3 gap-8 mt-8">
        <div
          class="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition"
        >
          <DevicePhoneMobileIcon
            class="w-10 h-10 text-indigo-600 dark:text-indigo-400 mb-3"
          />
          <h3 class="font-semibold text-lg mb-1">Qualité Premium</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            Nous sélectionnons avec soin des montures et verres de haute qualité
            pour une durabilité et un confort exceptionnels.
          </p>
        </div>
        <div
          class="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition"
        >
          <CubeIcon
            class="w-10 h-10 text-indigo-600 dark:text-indigo-400 mb-3"
          />
          <h3 class="font-semibold text-lg mb-1">Marques de Confiance</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            Nous collaborons avec les plus grandes marques pour vous garantir
            style, confort et performance visuelle.
          </p>
        </div>
        <div
          class="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition"
        >
          <UserIcon
            class="w-10 h-10 text-indigo-600 dark:text-indigo-400 mb-3"
          />
          <h3 class="font-semibold text-lg mb-1">Client au Cœur</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            Votre satisfaction est au centre de tout ce que nous faisons. Chaque
            conseil et chaque monture sont pensés pour vous.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
