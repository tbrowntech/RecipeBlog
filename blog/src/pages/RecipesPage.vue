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
              <div class="card-excerpt">
                <p class="card-text">{{ post.excerpt }}</p>
              </div>
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
          imageFileName: "AirFryerMeatballs.png",
          routeName: "AirFryerMeatballs",
        },
        {
          id: 3,
          title: "Alfredo Sauce",
          excerpt:
            "Alfredo sauce that mimics the taste of sauce from Olive Garden.",
          imageFileName: "AlfredoSauce.png",
          routeName: "AlfredoSauce",
        },
        {
          id: 4,
          title: "Creamy Herbed Pork Chops",
          excerpt:
            "Creamy sauce to pour over pork chops, steak, etc. Goes well on pasta.",
          imageFileName: "CreamyHerbedPorkchops.png",
          routeName: "CreamyHerbedPorkChops",
        },
        {
          id: 5,
          title: "Scalloped Potatoes",
          excerpt: "Tasty scalloped potatoes, especially the cheesy version.",
          imageFileName: "ScallopedPotatoes.png",
          routeName: "ScallopedPotatoes",
        },
        {
          id: 6,
          title: "Oatmeal Cookies",
          excerpt:
            "These yummy cookies can be used as a base for many different combinations.",
          imageFileName: "OatmealCookies.png",
          routeName: "OatmealCookies",
        },
        {
          id: 7,
          title: "No Bake Cookies",
          excerpt:
            "A chocolate goodness that is quick and easy to make without heating up the house",
          imageFileName: "noImage.png",
          routeName: "NoBakeCookies",
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
