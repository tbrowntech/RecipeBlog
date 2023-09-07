<template>
  <div class="meatballs">
    <h3 class="text-aqua text-center">Air Fryer Meatballs</h3>
    <img class="post-img" src="../assets/AirFryerMeatballs.png" />
    <p class="text-center">
      Ingredients: <br />
      1 pound ground meat (I use turkey) <br />
      ½ cup bread crumbs <br />
      ½ cup grated parmesan cheese <br />
      ¼ cup milk <br />
      2 cloves garlic (minced) <br />
      ½ teaspoon Italian seasoning <br />
      ¾ teaspoon salt <br />
      4 teaspoons pepper <br />
      BBQ sauce/Chik-fil-a sauce to taste <br /><br />
      Instructions: <br />
      Combine all ingredients together in a bowl and stir/sift until thoroughly
      mixed. Roll into desired ball size (ping pong/golf ball sized) and place
      them evenly spaced in air fryer tray. <br />
      Cook at 375 for 15 minutes <br />
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
