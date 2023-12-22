<template>
  <div class="meatballs">
    <div class="recipe">
      <h3 class="text-aqua text-center">Air Fryer Meatballs</h3>
      <img
        class="post-img"
        src="../assets/AirFryerMeatballs.png"
        alt="Air Fryer Meatballs"
      />
      <p class="text-center">
        <u>Ingredients:</u> <br />
        1 pound ground meat (I use turkey) <br />
        ½ cup bread crumbs <br />
        ½ cup grated parmesan cheese <br />
        ¼ cup milk <br />
        2 cloves garlic (minced) <br />
        ½ teaspoon Italian seasoning <br />
        ¾ teaspoon salt <br />
        4 teaspoons pepper <br />
        BBQ sauce/Chik-fil-a sauce to taste <br /><br />
      </p>
      <p class="left-align">
        Instructions: <br />
        Combine all ingredients together in a bowl and stir/sift until
        thoroughly mixed. Roll into desired ball size (ping pong/golf ball sized
        is what I usually do) and place them evenly spaced in air fryer tray.
        Cook at 375 for 15 minutes. <br />
      </p>
    </div>
    <div class="border border-dark border-padding">
      <h4 class="text-center"><u>Meatball Story</u></h4>
      <p class="left-align">
        Growing up I remember my mother hated making meatballs, even though they
        were something the entire family loved. The reason she hated making them
        so much was because of the time that it took to prepare and cook the
        meatballs. We only had meatballs once or twice a year, at most, because
        of her dislike of preparing and cooking meatballs.
      </p>
      <p class="left-align">
        I set out on a quest to find my own meatball recipe that was quick and
        easy to prepare. I use an air fryer often, for a number of reasons. I
        like the air fryer because it is usually rather quick compared to an
        oven, healthier than a traditional fryer, and doesn't heat up the house
        in the summer like an oven does. I was searching for a meatball recipe
        that was specific to an air fryer and I found one.
      </p>
      <p class="left-align">
        These meatballs are super quick and easy to make. The preparation is
        only about 5 minutes and the actual cooking time is only 15 minutes per
        batch. Each batch is going to a different amount of meatballs depending
        on how big your air fryer is. I just throw all the ingredients into a
        bowl and mix it up. I prefer to use a fork, but sometimes it's necessary
        to use my hands in order to get everything thoroughly mixed.
      </p>
      <p class="left-align">
        The nice thing about this recipe as well is that it can be altered to
        whatever taste you would like. If you're craving some barbeque
        meatballs, then add a couple tablespoons of barbeque sauce. If you just
        want plain, seasoned meatballs then don't add any sauce and use the
        spices and herbs that you prefer. For a nice smokey flavor, you can add
        liquid smoke. You can experiment with different cheeses, teriyaki, etc.
        The possibilities are endless. I just adjust the amount of milk when I'm
        adding extra liquid (sauces).
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
