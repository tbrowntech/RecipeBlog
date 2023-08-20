<template>
  <div class="container mt-4" v-if="post">
    <div class="card text-aqua">
      <img
        :src="require(`@/assets/${post.imageFileName}`)"
        class="card-img-top post-image blog-thumbnail"
        alt="recipe image"
      />
      <div class="card-body">
        <h2 class="card-title text-30bfbf">{{ post.title }}</h2>
        <p class="card-text">{{ post.excerpt }}</p>
        <div class="card-text">{{ post.content }}</div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "PostDetails",
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      post: null,
    };
  },
  created() {
    this.fetchPostData();
  },
  methods: {
    async fetchPostData() {
      try {
        const response = await fetch("/posts.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const posts = await response.json();

        this.post = posts.find((post) => post.id === this.id);
      } catch (error) {
        console.error("Error fetching post data:", error);
      }
    },
  },
};
</script>
