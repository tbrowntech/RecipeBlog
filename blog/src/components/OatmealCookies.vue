<template>
  <div class="oatmealcookies">
    <div class="recipe">
      <h3 class="text-aqua text-center">Oatmeal Chocolate Chip Cookies</h3>
      <img
        class="post-img"
        src="../assets/OatmealCookies.png"
        alt="Oatmeal Chocolate Chip Cookies"
      />
      <p class="text-center">
        <u>Ingredients:</u> <br />
        1 cup butter <br />
        ¾ cup dark brown sugar <br />
        ½ cup white sugar <br />
        1 egg <br />
        1 teaspoon vanilla <br />
        2 cups flour <br />
        1 teaspoon baking soda <br />
        1 teaspoon salt <br />
        1 ½ cups old fashioned oatmeal <br />
        2 teaspoons cinnamon <br />
        ½ bag of chocolate chips <br /><br />
      </p>
      <p class="left-align">
        Instructions: <br />
        Mix sugars, butter, eggs, and vanilla. Add the rest of the dry
        ingredients, mix well. The dough will end in a somewhat crumbly
        consistency, that is normal. Roll into a ball, place on baking sheet and
        push down with a fork. Bake at 350 degrees for 12 minutes. If desired,
        you can add nuts 1/4 teaspoon nutmeg, or substitiute chocolate chips
        with raisins. <br />
      </p>
    </div>
    <div>
      <br />
      <button class="btn btn-primary" @click="goBack">Back to Recipes</button>
      <br />
      <br />
    </div>
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
