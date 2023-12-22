<template>
  <div class="bfchili">
    <h3 class="text-aqua text-center">Breakfast Chili</h3>
    <img
      class="post-img"
      src="../assets/BreakfastChili.png"
      alt="Breakfast Chili"
    />
    <p class="text-center">
      <u>Ingredients:</u> <br />
      1 onion, diced <br />
      1 bell pepper (choose your color/flavor), diced <br />
      4 garlic cloves, minced <br />
      1/2 teaspoon salt <br />
      1/2 teaspoon pepper <br />
      1 pound ground turkey sausage <br />
      2 pounds bacon <br />
      2 tablespoons chili powder <br />
      2 teaspoons paprika <br />
      1 teaspoon dried oregano <br />
      1 teaspoon cumin <br />
      1/4 teaspoon crushed red pepper flakes <br />
      1 (14 ounce) can fire roasted tomatoes <br />
      1 (15 ounce) can pinto beans <br />
      1/2 to 3/4 cups beef/chicken stock <br />
      1/4 cup pure maple syrup <br /><br />
    </p>
    <p class="left-align">
      <u>Instructions:</u> <br />
      In a skillet, cook bacon on medium heat to desired crisp. Move bacon from
      skillet to crockpot, leaving bacon grease in skillet. Sausage can be
      cooked in a separate skillet or in bacon grease. It will cook quicker in
      the bacon grease so this is recommended. Once sausage is cooked (165
      degrees) move meat to crockpot, leaving all grease in the skillet. Add the
      onions, peppers, and garlic with a pinch of salt and pepper to the
      skillet. Cook these in the grease until softened, then remove and add to
      the crockpot, leaving the grease in the skillet. Add the chili powder,
      paprika, oregano, cumin, and red pepper flakes to the crockpot. Add the
      tomatoes, beans, beef stock, and maple syrup to the crockpot. Stir all
      ingredients to ensure everything is mixed well together. Cook in a
      crockpot, on high, for 2-4 hours.
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
