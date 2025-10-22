import { createRouter, createWebHistory } from "vue-router";
import AboutView from "@/views/AboutView.vue";
import HomeView from "@/views/HomeView.vue";
import ProductsView from "@/views/ProductsView.vue";
import ContactView from "@/views/ContactView.vue";
import FavoriteView from "@/views/FavoriteView.vue";
import CartView from "@/views/CartView.vue";
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
      path: "/about",
      name: "About",
      component: AboutView,
    },
    {
      path: "/products",
      name: "Products",
      component: ProductsView,
    },
    {
      path: "/products/:id",
      name: "ProductDetails",
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
