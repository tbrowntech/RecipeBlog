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
    console.log("PostDetails created with id:", this.id);
    this.fetchPostData();
  },
  methods: {
    fetchPostData() {
      if (this.id === 1) {
        this.post = {
          id: 1,
          title: "Swedish Meatball Sauce",
          excerpt: "Delicious sauce to put over meatballs, pasta, etc.",
          imageFileName: "SwedishMeatballs.jpg",
          content: `
          Sauce:
          2 cups beef stock
          2 cups evaporated milk
          6 tablespoons flour
          2 tablespoons soy sauce
          1 tablespoon worcestershire sauce
          2 teaspoon black pepper
          1 teaspoon dried rosemary
          ½ cup parmesan cheese
          16 ounces meatballs
          Whisk together stock, milk, flour, soy sauce, worcestershire sauce, 
          pepper and rosemary in a large saucepan over medium heat, until 
          smooth. Cook, stirring occasionally, until thickened, about 10-15 
          minutes. Taste and adjust seasonings to desired taste. Stir in cooked 
          meatballs and desired pasta.
          `,
        };
      } else if (this.id === 2) {
        this.post = {
          id: 2,
          title: "Air Fryer Meatballs",
          excerpt:
            "Have them alone or mix them in with the swedish meatball recipe.",
          imageFileName: "fried-meatballs.jpg",
          content: `
          Recipe follows...
          `,
        };
      }
    },
  },
};
</script>
