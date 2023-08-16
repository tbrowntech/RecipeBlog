<template>
  <div class="container d-flex flex-column align-items-center vh-100">
    <nav class="mt-4 mb-4">
      <router-link class="mr-2" to="/">Home</router-link> |
      <router-link class="mx-2" to="/about">About</router-link> |
      <router-link class="ml-2" to="/recipes">Recipes</router-link>
    </nav>
    <router-view />
  </div>
</template>
