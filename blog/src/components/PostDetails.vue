<template>
  <div class="container mt-4">
    <div class="card text-aqua">
      <img
        :src="require(`@/assets/${post.imageFileName}`)"
        class="card-img-top post-image"
        alt="recipe image"
      />
      <div class="card-body">
        <h2 class="card-title text-30bfbf">{{ post.title }}</h2>
        <p class="card-text">{{ post.excerpt }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostDetails",
  props: {
    // Receive the id parameter from the route
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      post: null, // Placeholder for the blog post data
    };
  },
  created() {
    // Simulate fetching post data using the received id
    this.fetchPostData();
  },
  methods: {
    fetchPostData() {
      // Replace this with your actual API call or data retrieval logic
      // Example: Fetch data from an API using this.id
      this.post = {
        id: this.id,
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
        // Add more post data as needed
      };
    },
  },
};
</script>
