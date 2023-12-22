<template>
  <div class="alfredo">
    <div class="recipe">
      <h3 class="text-aqua text-center">Alfredo Sauce</h3>
      <img
        class="post-img"
        src="../assets/AlfredoSauce.png"
        alt="Alfredo Sauce"
      />
      <p class="text-center">
        <u>Ingredients:</u> <br />
        1 12 oz can evaporated milk <br />
        ½ cup butter <br />
        2 tablespoons cream cheese <br />
        1 – 1½ cup fresh parmesan cheese <br />
        1 teaspoon garlic powder <br />
        Salt and pepper, to taste <br /><br />
      </p>
      <p class="left-align">
        Instructions: <br />
        In a saucepan combine evaporated milk, butter and cream cheese. Bring to
        a simmer, then keep it simmering until all is melted and mixed well.
        Whisk in the parmesan cheese and garlic powder. Simmer for 15-20 minutes
        on medium-low heat, just until it thickens enough to coat a spoon. Salt
        and pepper to taste. Serve over hot pasta, in place of pizza sauce, or
        for dipping. It's great with shrimp or grilled chicken as well.
      </p>
    </div>
    <div class="border border-dark border-padding">
      <h4 class="text-center"><u>Alfredo Sauce Story</u></h4>
      <p class="left-align">
        My favorite all-time dish has been fettucine alfredo for as long as I
        can remember. There was a simple, quick recipe that I always loved to
        make as a kid that I found from Better Homes & Gardens. I don't remember
        when the first time was that I went to Olive Garden but naturally the
        dish I ordered from Olive Garden was fettucine alfredo. That first bite
        had me hooked. I loved the Olive Garden's alfredo sauce over fettucine.
      </p>
      <p class="left-align">
        I knew my parents weren't going to take us to Olive Garden very often,
        but I had to have that alfredo sauce more than once every couple of
        years. I set out to find an Olive Garden copycat recipe so I could have
        alfredo sauce more often. I found one that mimiced the taste of alfredo
        sauce from Olive Garden and surprisingly it was not very difficult to
        make.
      </p>
      <p class="left-align">
        The trick with the recipe that I found was to simmer the sauce, once all
        the ingredients are combined, for as long as possible, but no less than
        20 minutes. I changed the ingredients slightly to match the ingredients
        that I keep in my own fridge and cupboards. Even with my changes, it
        still comes really close to the taste of the Olive Garden alfredo sauce.
        I know because I still eat at Olive Garden every once in a while. This
        alfredo sauce is amazing every time I make it.
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
