<script setup>
import BestSellers from "@/components/home/BestSellers.vue";
import Feature from "@/components/home/Feature.vue";
import Hero from "@/components/home/Hero.vue";
import NewArrivals from "@/components/home/NewArrivals.vue";
import Newsletter from "@/components/home/Newsletter.vue";
import Testimonials from "@/components/home/Testimonials.vue";

import { useQuery } from "@tanstack/vue-query";
import axios from "axios";
import { computed } from "vue";

const apiUrl = import.meta.env.VITE_API_URL;

async function getProducts() {
  try {
    const res = await axios.get(apiUrl);
    return res.data.slice(0, 46);
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to load products. Please try again later.");
  }
}

// Query
const { isPending, isError, data, error } = useQuery({
  queryKey: ["products"],
  queryFn: getProducts,
  staleTime: 600000,
});

const bestSellers = computed(() => {
  return data.value?.slice(0, 8) || [];
});
const newArrivals = computed(() => {
  return data.value?.slice(0, 4) || [];
});
</script>
<template>
  <div class="space-y-12">
    <Hero />
    <Feature />
    <BestSellers :bestSellers="bestSellers" />
    <NewArrivals :newArrivals="newArrivals" />
    <Testimonials />
    <Newsletter />
  </div>
</template>
