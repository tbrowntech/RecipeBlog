<template>
  <div class="container mt-4">
    <h1 class="text-center mb-4 text-aqua">Welcome to My Recipe Blog</h1>
    <div class="row">
      <div class="col-md-6 mb-4" v-for="post in blogPosts" :key="post.id">
        <div class="card text-aqua">
          <img
            :src="post.imageUrl"
            class="card-img-top"
            alt="Swedish Meatballs"
          />
          <div class="card-body">
            <h2 class="card-title text-30bfbf">{{ post.title }}</h2>
            <p class="card-text">{{ post.excerpt }}</p>
            <!--<router-link
              :to="{ name: 'PostDetails', params: { id: post.id } }"
              class="btn btn-primary"
            >
              Read More
            </router-link>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogPage",
  data() {
    return {
      blogPosts: [
        {
          id: 1,
          title: "Swedish Meatball Sauce",
          excerpt: "Delicious sauce to put over meatballs, pasta, etc.",
          imageUrl: "@/assets/SwedishMeatballs.jpg",
        },
        {
          id: 2,
          title: "Another Blog Post",
          excerpt:
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          imageUrl: "path/to/image2.jpg",
        },
        // Add more blog posts here
      ],
    };
  },
};
</script>
