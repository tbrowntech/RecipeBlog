<template>
  <div class="about">
    <h3 class="text-aqua text-center">Alfredo Sauce</h3>
    <img class="post-img" src="../assets/AlfredoSauce.jpg" />
    <p class="text-center">
      Ingredients: <br />
      1 evaporated milk <br />
      ½ cup butter <br />
      2 tablespoons cream cheese <br />
      1 – 1½ cup fresh parmesan cheese <br />
      1 teaspoon garlic powder <br />
      Salt and pepper, to taste <br /><br />
      Instructions: <br />
      In a saucepan combine evaporated milk, butter and cream cheese. Bring to a
      simmer, then keep it simmering until all is melted and mixed well. Whisk
      in the parmesan cheese and garlic powder. Simmer for 15-20 minutes on
      medium-low heat, just until it thickens enough to coat a spoon. Salt and
      pepper to taste. Serve over hot pasta, in place of pizza sauce, or for
      dipping. It's great with shrimp or grilled chicken as well.
    </p>
    <button class="btn btn-primary" @click="goBack">Back to Recipes</button>
  </div>
</template>

<script>
export default {
  name: "IndividualBlogPost",
  data() {
    return {
      post: {}, // Individual blog post data
    };
  },
  methods: {
    goBack() {
      this.$router.push({ name: "recipes" }); // Navigate back to main recipes page
    },
  },
  created() {
    // Fetch individual blog post data using this.$route.params.id
    // Assign the data to this.post
  },
};
</script>
