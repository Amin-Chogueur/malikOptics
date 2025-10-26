import { createRouter, createWebHistory } from "vue-router";
import AboutView from "@/views/AboutView.vue";
import HomeView from "@/views/HomeView.vue";
import ContactView from "@/views/ContactView.vue";
import FavoriteView from "@/views/FavoriteView.vue";
import CartView from "@/views/CartView.vue";
import MenView from "@/views/MenView.vue";
import WomenView from "@/views/WomenView.vue";
import KidsView from "@/views/KidsView.vue";
import ProductDetails from "@/views/ProductDetails.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/A_propos",
      name: "About",
      component: AboutView,
    },
    {
      path: "/Homme",
      name: "Men",
      component: MenView,
    },
    {
      path: "/Homme/:id",
      name: "MenProductDetails",
      component: ProductDetails,
    },
    {
      path: "/Femme",
      name: "Women",
      component: WomenView,
    },
    {
      path: "/Femme/:id",
      name: "WomenProductDetails",
      component: ProductDetails,
    },
    {
      path: "/Enfant",
      name: "Kids",
      component: KidsView,
    },
    {
      path: "/Enfant/:id",
      name: "KidsProductDetails",
      component: ProductDetails,
    },
    {
      path: "/contact",
      name: "Contact",
      component: ContactView,
    },

    {
      path: "/favorite",
      name: "Favorite",
      component: FavoriteView,
    },

    {
      path: "/cart",
      name: "Cart",
      component: CartView,
    },
  ],

  // 👇 Add this INSIDE the createRouter options
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // If the user used browser back/forward button
      return savedPosition;
    } else {
      // Always scroll to top
      return { top: 0, behavior: "instant" }; // 👈 optional smooth scroll
    }
  },
});

export default router;
