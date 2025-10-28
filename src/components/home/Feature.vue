<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <section class="py-16 transition-colors duration-300 mt-[120px] md:mt-0">
    <h2
      class="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-100"
    >
      Acheter par Catégorie
    </h2>

    <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
      <!-- Hommes -->
      <RouterLink
        to="/Homme"
        class="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition"
      >
        <img
          src="/images/homme.webp"
          alt="Lunettes Hommes"
          class="rounded-md mb-4 w-full h-56 object-cover"
        />
        <h3 class="text-xl font-semibold mb-2">Hommes</h3>
        <p class="text-gray-500 dark:text-gray-400">
          Découvrez notre collection de lunettes de vue et lunettes de soleil
          pour hommes.
        </p>
      </RouterLink>

      <!-- Femmes -->
      <RouterLink
        to="/Femme"
        class="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition"
      >
        <img
          src="/images/femme.webp"
          alt="Lunettes Femmes"
          class="rounded-md mb-4 w-full h-56 object-cover"
        />
        <h3 class="text-xl font-semibold mb-2">Femmes</h3>
        <p class="text-gray-500 dark:text-gray-400">
          Trouvez des lunettes de vue tendance, élégantes lunettes de soleil et
          lentilles pour femmes.
        </p>
      </RouterLink>

      <!-- Enfants -->
      <RouterLink
        to="/Enfant"
        class="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition"
      >
        <img
          src="/images/enfant.webp"
          alt="Lunettes Enfants"
          class="rounded-md mb-4 w-full h-56 object-cover"
        />
        <h3 class="text-xl font-semibold mb-2">Enfants</h3>
        <p class="text-gray-500 dark:text-gray-400">
          Protégez les yeux des plus jeunes avec des lunettes de soleil,
          lunettes de vue et lentilles colorées pour enfants.
        </p>
      </RouterLink>
    </div>
  </section>
</template>
