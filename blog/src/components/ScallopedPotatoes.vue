<template>
  <div class="scalloped">
    <h3 class="text-aqua text-center">Scalloped Potatoes</h3>
    <img
      class="post-img"
      src="../assets/ScallopedPotatoes.png"
      alt="Scalloped Potatoes"
    />
    <p class="text-center">
      Ingredients: <br />
      ½ cup chopped onion <br />
      4 tablespoons butter <br />
      4 tablespoons all-purpose flour <br />
      2 ½ cups milk <br />
      6 medium potatoes <br />
      <br /><br />
      Instructions: <br />
      Four sauce, cook onion in butter until tender. Stir in flour, 1 tsp salt,
      ¼ tsp pepper. Add milk all at once. Cook and stir until thickened and
      bubbly. Remove from heat. Place ½ the sliced potatoes in a greased 9x13
      dish. Cover with ½ the sauce. Repeat layers. Bake, covered, 350 for 35
      mins. Uncover, bake 30 mins or moree until potatoes are tender. Let stand
      5 mins. <br /><br />
      Cheesy Potatoes: Prepare as above except reduce to ½ tsp salt. Stir ¾ cup
      shredded cheese into thickened sauce until melted. Sprinkle ¼ cup cheese
      over top before serving.
      <br /><br />
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
