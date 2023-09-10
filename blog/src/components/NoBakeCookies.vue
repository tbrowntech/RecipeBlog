<template>
  <div class="nobakecookies">
    <h3 class="text-aqua text-center">No Bake Cookies</h3>
    <img class="post-img" src="../assets/noImage.png" />
    <p class="text-center">
      Ingredients: <br />
      2 cups sugar <br />
      ¼ cup cocoa <br />
      ½ cup milk <br />
      ½ cup butter <br />
      1 teaspoon vanilla <br />
      pinch salt <br />
      ¾ cup peanut butter (chunky or not) <br />
      3 cups oats (preferably old fashioned) <br /><br />
      Instructions: <br />
      Combine sugar, cocoa, milk, and butter in a saucepan and bring to a boil.
      Remove from heat and let cool 7-12 minutes. The more you let it cool, the
      quicker the cookies set up and the more crumbly they are. After letting
      the mixture cool, add vanilla, salt, peanut butter, and oats. Mix well.
      Scoop spoonfuls according to the size cookie you want onto wax paper and
      let cookies set up. <br />
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
