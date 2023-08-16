<template>
  <div class="recipes">
    <h1>Blog</h1>
    <div v-for="post in posts" :key="post.id" class="blog-post">
      <h2>{{ post.title }}</h2>
      <p>{{ post.date }}</p>
      <div v-html="post.content" class="post-content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipesView",
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "First Blog Post",
          date: "August 16, 2023",
          content: "<p>This is the content of the first blog post.</p>",
        },
        {
          id: 2,
          title: "Second Blog Post",
          date: "August 18, 2023",
          content: "<p>This is the content of the second blog post.</p>",
        },
        // Add more blog posts as needed
      ],
    };
  },
};
</script>

<style>
/* Add your styling here */
</style>
