<template>
  <div class="about">
    <h3 class="text-aqua text-center">Creamy Herbed Pork Chops</h3>
    <p class="text-center">
      Ingredients: <br />
      4 pork chops, cut ¾ thick <br />
      1 tablespoon butter <br />
      1/3 cup finely chopped carrot <br />
      1 tablespoon snipped parsley <br />
      2 teaspoons flour <br />
      ½ teaspoon dried basil, thyme or ½ teaspoon tarragon, crushed <br />
      ½ teaspoon beef bouillon granules <br />
      2/3 cup milk <br />
      2 tablespoons water <br /><br />
      Instructions: <br />
      Trim fat from meat. If desired, sprinkle with salt and pepper. In a large
      skillet cook chops in butter over medium heat for 5 minutes. Turn chops
      and add carrot. Cook for 5-7 minutes more or until no pink remains. Remove
      chops, reserving drippings and carrot. <br />
      For sauce, stir parsley; flour; basil, thyme, or tarragon; bouillon
      granules; and ¼ tsp pepper into drippings and carrot. Add milk all at
      once. Cook and stir until thickened and bubbly. Stir in water. Return
      chops to skillet and heat through. To serve, spoon sauce over chops.
      <br />
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
