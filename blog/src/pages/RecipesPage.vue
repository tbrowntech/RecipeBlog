<template>
  <div class="container mt-4">
    <h1 class="text-center mb-4 text-aqua">Recipe Blog</h1>
    <div class="row">
      <div class="card-grid">
        <div class="col-md-4 mb-4" v-for="post in blogPosts" :key="post.id">
          <div class="card text-aqua">
            <img
              :src="require(`@/assets/${post.imageFileName}`)"
              class="card-img-top blog-thumbnail mx-auto"
              alt="recipe image"
            />
            <div class="card-body text-center">
              <h2 class="card-title text-30bfbf">{{ post.title }}</h2>
              <p class="card-text">{{ post.excerpt }}</p>
              <router-link
                :to="{ name: post.routeName }"
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
  name: "RecipesPage",
  data() {
    return {
      blogPosts: [
        {
          id: 1,
          title: "Swedish Meatballs",
          excerpt: "Delicious sauce to put over meatballs, pasta, etc.",
          imageFileName: "SwedishMeatballs.jpg",
          routeName: "SwedishMeatballs",
        },
        {
          id: 2,
          title: "Air Fryer Meatballs",
          excerpt:
            "Have them alone or mix them in with the swedish meatball recipe.",
          imageFileName: "fried-meatballs.jpg",
          routeName: "AirFryerMeatballs",
        },
        {
          id: 3,
          title: "Alfredo Sauce",
          excerpt:
            "Alfredo sauce that mimics the taste of sauce from Olive Garden.",
          imageFileName: "AlfredoSauce.jpg",
          routeName: "AlfredoSauce",
        },
        {
          id: 4,
          title: "Creamy Herbed Porkchops",
          excerpt:
            "Creamy sauce to pour over porkchops, steak, etc. Goes well on pasta.",
          imageFileName: "noImage.png",
          routeName: "CreamyHerbedPorkChops",
        },
      ],
      selectedPost: null,
    };
  },
  methods: {
    openModal(post) {
      this.selectedPost = post;
    },
    closeModal() {
      this.selectedPost = null;
    },
  },
};
</script>
