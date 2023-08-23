import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import AboutPage from "../pages/AboutPage.vue";
import RecipesPage from "../pages/RecipesPage.vue";
import PostDetails from "../components/PostDetails.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "about",
    component: AboutPage,
  },
  {
    path: "/recipes",
    name: "recipes",
    component: RecipesPage,
  },
  {
    path: "/post/:id",
    name: "PostDetails",
    component: PostDetails,
    props: (route) => {
      return { ...route.params, id: Number(route.params.id) };
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: "pink-active", // Set the class for active links
});

export default router;
