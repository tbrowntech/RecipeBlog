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
    <div class="border border-dark border-padding">
      <h4 class="text-center"><u>Oatmeal Cookies Story</u></h4>
      <p class="left-align">
        Oatmeal cookies were something that I didn't really crave a lot growing
        up, but when they were made I never turned them down. I love the oatmeal
        in the cookies, along with the peanut butter I don't have to have very
        many to feel filled. They aren't my go-to cookie, but these are
        delicious and filling, and a must-have in my recipe arsenal.
      </p>
      <p class="left-align">
        I don't mind eating cookies, but I'm not a huge fan of sugar. Whenever I
        can use a cookie recipe that uses a little less sugar I jump at the
        opportunity. This recipe still have plenty of sugar, but instead of all
        white sugar, there is some brown mixed in. Some addition of cinnamon to
        these oatmeal cookies really enhances the flavor as well. Whenever less
        sugar is used, adding some cinnamon can help to enhance the flavor. The
        extra bite of the added cinnamon flavor really makes these oatmeal
        cookies rather enjoyable.
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
