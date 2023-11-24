<template>
  <div class="scalloped">
    <div class="recipe">
      <h3 class="text-aqua text-center">Scalloped Potatoes</h3>
      <img
        class="post-img"
        src="../assets/ScallopedPotatoes.png"
        alt="Scalloped Potatoes"
      />
      <p class="text-center">
        <u>Ingredients:</u> <br />
        ½ cup chopped onion <br />
        4 tablespoons butter <br />
        4 tablespoons all-purpose flour <br />
        2 ½ cups milk <br />
        6 medium potatoes <br />
        <br /><br />
      </p>
      <p class="left-align">
        Instructions: <br />
        For sauce, cook onion in butter until tender. Stir in flour, 1 tsp salt,
        ¼ tsp pepper. Add milk all at once. Cook and stir until thickened and
        bubbly. Remove from heat. Place ½ the sliced potatoes in a greased 9x13
        dish. Cover with ½ the sauce. Repeat layers. Bake, covered, 350 for 35
        mins. Uncover, bake 30 mins or more until potatoes are tender. Let stand
        5 mins. <br /><br />
        Cheesy Potatoes: Prepare as above except reduce to ½ tsp salt, or no
        salt. You may need to experiment. Stir ¾ cup shredded cheese into
        thickened sauce until melted. Sprinkle ¼ cup cheese over top before
        serving.
        <br />
      </p>
    </div>
    <div class="border border-dark border-padding">
      <h4 class="text-center"><u>Scalloped Potatoes Story</u></h4>
      <p class="left-align">
        Growing up, scalloped potatoes and ham was the meal that my mother
        prepared only for the "important" company that our family had over.
        Anytime someone special came over, or someone I felt my parents were
        trying to impress, I knew we were going to have scalloped potatoes with
        ham. To this day, I still don't know the reason for that. I didn't
        complain though. Scalloped potatoes are amazing and the recipe that my
        mother used was delicious.
      </p>
      <p class="left-align">
        I remembered the scalloped potatoes that my mom made to be super
        tasteful and delicious. However, I think over the years my tastebuds
        acquired a slightly different taste. I asked the mom for the recipe that
        I grew up with, but they didn't seem quite like the scalloped potatoes
        that I remembered. I decided to do some tweaking to try and enhance the
        taste.
      </p>
      <p class="left-align">
        I didn't know exactly what I was looking for, but cheese always seems to
        enhance the taste of food that I enjoy. I decided to add some cheese to
        this recipe of scalloped potatoes. I found out that I can use cheese to
        customize these how I want, depending on who is eating them. Personally,
        I prefer cheddar as the main flavor, with some parmesan to give it some
        extra flavor.
      </p>
      <p class="left-align">
        After trying this recipe a couple times, I realized that I also prefer a
        thicker, creamier sauce than what I had growing up. I changed the
        scalloped potatoes recipe that my mother gave me a little to match the
        consistency that I prefer. I'm sure that whipping cream could be used in
        place of the evaporated milk, but I prefer to use evaporated milk for my
        own purposes.
      </p>
      <p class="left-align">
        Another tweak that I've added that my wife and kids have begun to love
        is the addition of ham cubes and bacon. Really any meat could be added
        to this but chopped bacon and ham turn this into a dish that includes
        carbs, fat and protein. Ham and bacon seem to pair best with scalloped
        potatoes. I don't use the bacon as often, but ham cubes work extremely
        well. The juices from this ham, mixed with the sauce, poured over the
        scalloped potatoes are a mouthwatering combination.
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
