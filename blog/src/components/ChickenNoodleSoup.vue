<template>
  <div class="chicken_noodle">
    <h3 class="text-aqua text-center">Chicken Noodle Soup With Parmesan</h3>
    <img
      class="post-img"
      src="../assets/ChickenNoodleSoup.png"
      alt="Chicken Noodle Soup"
    />
    <p class="text-center">
      Ingredients: <br />
      2 cups chicken broth <br />
      1 teaspoon garlic powder <br />
      ½ teaspoon salt <br />
      ¼ teaspoon pepper <br />
      6oz pasta <br />
      2 10oz cans cooked chicken <br />
      ½ cup carrots (sliced) <br />
      ½ cup parmesan cheese<br /><br />
      Instructions: <br />
      Add broth, garlic powder, salt and pepper in bigger sauce pan. Bring to
      boil. Add carrots and pasta and cook for 10 minutes on medium heat. Added
      the canned chicken and cook until heated through. Parmesan cheese can be
      added to enhance the flavor, about ½ cup.
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
