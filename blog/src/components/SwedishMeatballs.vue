<template>
  <div class="swedish">
    <div class="recipe">
      <h3 class="text-aqua text-center">Swedish Meatballs</h3>
      <img
        class="post-img"
        src="../assets/SwedishMeatballs.jpg"
        alt="Swedish Meatballs"
      />
      <p class="text-center">
        Estimated prep time: 5 minutes <br />
        Estimated cook time: 15 minutes <br />
        <br />
        <u>Ingredients (Sauce):</u> <br />
        2 cups beef stock <br />
        2 cups evaporated milk <br />
        6 tablespoons flour <br />
        2 tablespoons soy sauce <br />
        1 tablespoon Worcestershire sauce <br />
        2 teaspoons black pepper <br />
        1 teaspoon dried rosemary <br />
        ½ cup parmesan cheese <br />
        16 ounces meatballs <br /><br />
      </p>
      <p class="left-align">
        <u>Instructions:</u> <br />
        Whisk together stock, milk, flour, soy sauce, worcestershire sauce,
        pepper and rosemary in a large saucepan over medium heat, until smooth.
        Cook, stirring occasionally, until thickened, about 10-15 minutes. Taste
        and adjust seasonings to desired taste. Stir in cooked
        <a
          href="https://taylor-recipe-blog.vercel.app/airfryermeatballs"
          target="_blank"
          >meatballs</a
        >
        and desired (cooked) pasta. Voila! Swedish meatballs! Yum!
      </p>
      <br />
    </div>
    <div class="border border-dark border-padding">
      <h4 class="text-center"><u>Swedish Meatball Story</u></h4>
      <p class="left-align">
        I always loved eating swedish meatballs while growing up. They were one
        of my favorite recipes that my mother prepared. She hated doing it,
        mostly because she made the meatballs from scratch and that took a ton
        of work.
      </p>
      <p class="left-align">
        She always wanted to make sure that we got enough food while growing up
        so she used egg noodles to add in some extra carbs. The creamy sauce
        poured over the egg noodles, mixed in with the savory meatballs was
        always to die for in my opinion.
      </p>
      <p class="left-align">
        I have tried a couple different recipes over the years, including the
        one that she supposedly used during my childhood years. I tried some
        frozen, pre-made swedish meatball meals as well. Nothing every turned
        out quite like I was expecting it to. None of those recipes or meals
        every satisfied me because they just weren't quite right. They weren't
        the swedish meatballs that I remembered.
      </p>
      <p class="left-align">
        I decided to find a recipe that I could make my own. I found one but it
        needed some tweaking so I changed it to make it my own. That recipe,
        swedish meatballs, is the recipe above. The sauce is so creamy and
        delectable. Almost any type of noodle can be used, such as: penne,
        rigatoni, elbow, fettucine, egg noodles, etc. I recommend these swedish
        meatballs to anyone who is looking for a delicious, mouthwatering meal.
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
