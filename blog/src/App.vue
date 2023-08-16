<template>
  <div class="container d-flex flex-column align-items-center vh-100">
    <nav class="mt-4 mb-4 text-aqua">
      <router-link class="mr-2 text-aqua" to="/">Home</router-link> |
      <router-link class="mx-2 text-aqua" to="/about">About</router-link> |
      <router-link class="ml-2 text-aqua" to="/recipes">Recipes</router-link>
    </nav>
    <router-view />
  </div>
</template>
