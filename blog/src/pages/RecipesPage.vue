<template>
  <div class="container mt-4">
    <h1 class="text-center mb-4 text-aqua">Welcome to My Recipe Blog</h1>
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
                :to="{ name: 'PostDetails', params: { id: +post.id } }"
                class="btn btn-primary"
                @click="selectedPost = post"
              >
                Read More
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-overlay" v-if="selectedPost">
      <div class="modal">
        <div class="modal-content">
          <button @click="closeModal" class="close-button">×</button>
          <div class="modal-card">
            <!-- Display selected post's details in the modal -->
            <h2>{{ selectedPost.title }}</h2>
            <div
              class="modal-text"
              v-html="selectedPost.content"
              style="white-space: pre-line"
            ></div>
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
        },
        {
          id: 2,
          title: "Air Fryer Meatballs",
          excerpt:
            "Have them alone or mix them in with the swedish meatball recipe.",
          imageFileName: "fried-meatballs.jpg",
        },
        {
          id: 3,
          title: "Alfredo Sauce",
          excerpt:
            "Alfredo sauce that mimics the taste of sauce from Olive Garden.",
          imageFileName: "AlfredoSauce.jpg",
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
