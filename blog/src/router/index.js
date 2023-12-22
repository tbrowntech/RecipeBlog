import { createRouter, createWebHistory } from "vue-router";
import { inject } from "@vercel/analytics";
import HomePage from "../pages/HomePage.vue";
import AboutPage from "../pages/AboutPage.vue";
import RecipesPage from "../pages/RecipesPage.vue";
import PostDetails from "../components/PostDetails.vue";
import SwedishMeatballs from "../components/SwedishMeatballs.vue";
import AlfredoSauce from "../components/AlfredoSauce.vue";
import AirFryerMeatballs from "../components/AirFryerMeatballs.vue";
import CreamyHerbedPorkChops from "../components/CreamyHerbedPorkChops";
import ScallopedPotatoes from "../components/ScallopedPotatoes.vue";
import OatmealCookies from "../components/OatmealCookies.vue";
import NoBakeCookies from "../components/NoBakeCookies.vue";
import ChickenNoodleSoup from "../components/ChickenNoodleSoup.vue";
import BreakfastChili from "../components/BreakfastChili.vue";

inject();

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
  {
    path: "/swedishmeatballs",
    name: "SwedishMeatballs",
    component: SwedishMeatballs,
  },
  {
    path: "/alfredosauce",
    name: "AlfredoSauce",
    component: AlfredoSauce,
  },
  {
    path: "/airfryermeatballs",
    name: "AirFryerMeatballs",
    component: AirFryerMeatballs,
  },
  {
    path: "/creamyherbedporkchops",
    name: "CreamyHerbedPorkChops",
    component: CreamyHerbedPorkChops,
  },
  {
    path: "/scallopedpotatoes",
    name: "ScallopedPotatoes",
    component: ScallopedPotatoes,
  },
  {
    path: "/oatmealcookies",
    name: "OatmealCookies",
    component: OatmealCookies,
  },
  {
    path: "/nobakecookies",
    name: "NoBakeCookies",
    component: NoBakeCookies,
  },
  {
    path: "/chickennoodlesoup",
    name: "ChickenNoodleSoup",
    component: ChickenNoodleSoup,
  },
  {
    path: "/breakfastchili",
    name: "BreakfastChili",
    component: BreakfastChili,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: "pink-active", // Set the class for active links
});

export default router;
