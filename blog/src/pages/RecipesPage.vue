<template>
  <div class="container mt-4">
    <h1 class="text-center mb-4 text-aqua">Welcome to My Recipe Blog</h1>
    <div class="row">
      <div
        class="col-md-6 mb-4 text-center d-flex align-items-center"
        v-for="post in blogPosts"
        :key="post.id"
      >
        <div class="card text-aqua">
          <img
            :src="require(`@/assets/${post.imageFileName}`)"
            class="card-img-top blog-thumbnail mx-auto"
            alt="recipe image"
          />
          <div class="card-body">
            <div class="d-flex flex-column h-100 justify-content-between">
              <h2 class="card-title text-30bfbf">{{ post.title }}</h2>
              <p class="card-text">{{ post.excerpt }}</p>
              <router-link
                :to="{ name: 'PostDetails', params: { id: post.id } }"
                class="btn btn-primary"
              >
                Read More
              </router-link>
            </div>
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
          imageFileName: "SwedishMeatballs.jpg",
        },
        {
          id: 2,
          title: "Air Fryer Meatballs",
          excerpt:
            "Have them alone or mix them in with the swedish meatball recipe.",
          imageFileName: "fried-meatballs.jpg",
        },
        // Add more blog posts here
      ],
    };
  },
};
</script>
