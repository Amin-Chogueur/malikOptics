<template>
  <section
    class="h-[calc(100vh-80px)] flex flex-col md:flex-row items-center justify-between gap-10 text-[#111827] dark:text-[#f3f4f6] transition-colors duration-500 mt-16 md:mt-10"
  >
    <div class="flex-1 space-y-6">
      <h1 class="text-2xl md:text-4xl font-extrabold leading-tight">
        Découvrez les dernières
        <span class="text-[#2563eb] dark:text-[#60a5fa]">lunettes de vue</span>,
        <br />
        <span class="text-[#2563eb] dark:text-[#60a5fa]"
          >lunettes de soleil</span
        >, et
        <span class="text-[#2563eb] dark:text-[#60a5fa]">lentilles</span>
      </h1>

      <p class="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
        Améliorez votre style de vie avec des accessoires de haute qualité.
        Explorez notre collection exclusive de téléphones, montres connectées et
        étuis de protection élégants qui allient innovation et sophistication.
      </p>

      <div class="flex flex-wrap items-center gap-4">
        <RouterLink
          to="/Homme"
          class="bg-[#2563eb] hover:bg-[#1d4ed8] dark:bg-[#3b82f6] dark:hover:bg-[#2563eb] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
        >
          Acheter Maintenant
        </RouterLink>

        <RouterLink
          to="/A_propos"
          class="border border-[#2563eb] dark:border-[#60a5fa] text-[#2563eb] dark:text-[#60a5fa] hover:bg-[#2563eb] hover:text-white dark:hover:bg-[#60a5fa] dark:hover:text-[#0b1120] font-medium py-3 px-6 rounded-lg transition-colors duration-300"
        >
          En Savoir Plus
        </RouterLink>
      </div>
    </div>

    <!-- Image Section -->
    <div class="flex-1 flex justify-center items-center">
      <img
        src="/images/hero.webp"
        alt="glasses"
        class="w-full h-80 md:h-120 max-w-md rounded-2xl"
      />
    </div>
  </section>
</template>
