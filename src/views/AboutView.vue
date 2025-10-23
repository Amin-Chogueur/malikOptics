<script setup>
import HeroAbout from "@/components/about/HeroAbout.vue";
import OurMission from "@/components/about/OurMission.vue";
import OurTeam from "@/components/about/OurTeam.vue";
import Story from "@/components/about/Story.vue";
import Newsletter from "@/components/home/Newsletter.vue";
</script>

<template>
  <section
    class="min-h-screen text-gray-800 dark:text-gray-200 transition-colors duration-500"
  >
    <HeroAbout />
    <Story />
    <OurMission />
    <OurTeam />
    <Newsletter />
  </section>
</template>
