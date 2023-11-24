<template>
  <div class="nobakecookies">
    <div class="recipe">
      <h3 class="text-aqua text-center">No Bake Cookies</h3>
      <img
        class="post-img"
        src="../assets/NoBakeCookies.jpg"
        alt="No Bake Cookies"
      />
      <p class="text-center">
        <u>Ingredients:</u> <br />
        2 cups sugar <br />
        ¼ cup cocoa <br />
        ½ cup milk <br />
        ½ cup butter <br />
        1 teaspoon vanilla <br />
        pinch salt <br />
        ¾ cup peanut butter (chunky or not) <br />
        3 cups oats (preferably old fashioned) <br /><br />
      </p>
      <p class="left-align">
        Instructions: <br />
        Combine sugar, cocoa, milk, and butter in a saucepan and bring to a
        boil. Remove from heat and let cool 9-15 minutes. The more you let it
        cool, the quicker the cookies set up and the more crumbly they are.
        After letting the mixture cool, add vanilla, salt, peanut butter, and
        oats. Mix well. Scoop spoonfuls according to the size cookie you want
        onto wax paper and let cookies set up. <br />
      </p>
    </div>
    <div class="border border-dark border-padding">
      <h4 class="text-center"><u>No Bake Cookies Story</u></h4>
      <p class="left-align">
        I think no bake cookies were the first cookies that I ever made,
        probably because they're easy enough that my mom didn't mind me trying
        the recipe out on my own at a younger age. A lot of that probaly had to
        do with the fact that they literally don't need to be baked, hence the
        name: no bake cookies.
      </p>
      <p class="left-align">
        While these are easy to make because they don't require any baking, they
        are also quite delicious. Oatmeal helps them fill your stomach so you
        don't feel that you need to eat too many to be satisfied. The chocolate
        with the peanut butter is a mixture that I've always found to be
        amazing. The oats in them trick my mind into thinking they're somewhat
        healthy as well. They aren't, really, but I feel better eating them than
        a more traditional cookie, like chocolate chip.
      </p>
      <p class="left-align">
        There is a trick to getting these cookies to turn out perfect. The trick
        has to do with the time between the first and second part of the
        process. With no bake cookies, the longer you wait before adding the
        rest of the ingredients after heating the first part, the quicker the
        cookies will set up. I've seen others have to freeze them in order for
        them to set because they weren't patient enough to wait to add the
        ingredients at the second part. On the other side of that, if you wait
        too long, they cookies will be extremely crumbly, which for some is not
        as desirable. I've found that 15 minutes is plenty. Some may like more,
        some less.
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
