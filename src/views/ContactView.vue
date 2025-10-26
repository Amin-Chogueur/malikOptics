<script setup></script>
<template>
  <section class="py-20">
    <div class="max-w-6xl mx-auto text-center">
      <h2
        class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4"
      >
        Contactez-nous
      </h2>
      <p class="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
        Une question, un avis ou une idée de collaboration ? L’équipe de
        <strong>Malik Opticien</strong> serait ravie d’échanger avec vous !
      </p>

      <div class="grid md:grid-cols-2 gap-10">
        <!-- Contact Info -->
        <div class="space-y-8 text-left">
          <div class="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-blue-600 dark:text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M2.25 6.75l8.955 4.77a2.25 2.25 0 002.09 0l8.955-4.77M2.25 6.75v10.5a2.25 2.25 0 002.25 2.25h15a2.25 2.25 0 002.25-2.25V6.75m-18 0L12 12.75m0 0l7.5-6"
              />
            </svg>
            <div>
              <h4 class="font-semibold text-gray-800 dark:text-white">Email</h4>
              <p class="text-gray-600 dark:text-gray-300">
                contact@malikopticien.com
              </p>
            </div>
          </div>

          <div class="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-blue-600 dark:text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M2.25 3.75l3.5 1.167a2.25 2.25 0 011.27 1.27l1.167 3.5a2.25 2.25 0 01-.636 2.384l-1.385 1.385a11.048 11.048 0 005.857 5.857l1.385-1.385a2.25 2.25 0 012.384-.636l3.5 1.167a2.25 2.25 0 011.27 1.27l1.167 3.5"
              />
            </svg>
            <div>
              <h4 class="font-semibold text-gray-800 dark:text-white">
                Téléphone
              </h4>
              <p class="text-gray-600 dark:text-gray-300">+213 555 123 456</p>
            </div>
          </div>

          <div class="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-blue-600 dark:text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M12 2.25c4.97 0 9 4.03 9 9 0 7.313-9 10.5-9 10.5S3 18.563 3 11.25c0-4.97 4.03-9 9-9z"
              />
              <circle cx="12" cy="11.25" r="2.25" />
            </svg>
            <div>
              <h4 class="font-semibold text-gray-800 dark:text-white">
                Adresse
              </h4>
              <p class="text-gray-600 dark:text-gray-300">
                45 Rue de la Vision, Alger, Algérie
              </p>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <form
          class="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg space-y-6 text-left"
        >
          <div>
            <label
              for="name"
              class="block text-gray-700 dark:text-gray-200 mb-2 font-medium"
              >Nom</label
            >
            <input
              type="text"
              id="name"
              placeholder="Votre nom"
              class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder:text-gray-400"
            />
          </div>

          <div>
            <label
              for="email"
              class="block text-gray-700 dark:text-gray-200 mb-2 font-medium"
              >Email</label
            >
            <input
              type="email"
              id="email"
              placeholder="vous@example.com"
              class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder:text-gray-400"
            />
          </div>

          <div>
            <label
              for="message"
              class="block text-gray-700 dark:text-gray-200 mb-2 font-medium"
              >Message</label
            >
            <textarea
              id="message"
              rows="4"
              placeholder="Écrivez votre message..."
              class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder:text-gray-400"
            ></textarea>
          </div>

          <button
            type="submit"
            class="cursor-pointer w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Envoyer le message
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
