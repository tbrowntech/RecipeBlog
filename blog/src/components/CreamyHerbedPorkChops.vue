<template>
  <div class="pork-chops">
    <div class="recipe">
      <h3 class="text-aqua text-center">Creamy Herbed Pork Chops</h3>
      <img
        class="post-img"
        src="../assets/CreamyHerbedPorkchops.png"
        alt="Creamy Herbed Porkchops"
      />
      <p class="text-center">
        <u>Ingredients:</u> <br />
        4 pork chops, cut ¾" thick <br />
        1 tablespoon butter <br />
        1/3 cup finely chopped carrot <br />
        1 tablespoon snipped parsley <br />
        2 tablespoons flour <br />
        ½ teaspoon dried basil, crushed <br />
        ½ teaspoon beef bouillon granules <br />
        2/3 cup milk (evaporated for a creamier sauce)<br />
        2 tablespoons water <br /><br />
      </p>
      <p class="left-align">
        Instructions: <br />
        Trim fat from meat. If desired, sprinkle with salt and pepper. In a
        large skillet cook chops in butter over medium heat for 5 minutes. Turn
        chops and add carrot. Cook for 5-7 minutes more or until no pink
        remains. Remove chops, reserving drippings and carrot. <br />
        For sauce, stir parsley; flour; basil; bouillon granules; and ¼ tsp
        pepper into drippings and carrot. Add milk all at once. Cook and stir
        until thickened and bubbly. Stir in water. Return chops to skillet and
        heat through. To serve, spoon sauce over chops.
        <br /><br />
        Note: I like to substitute steak for the pork chops sometimes. <br />
        The sauce goes well over pasta. Double the recipe to mix with 16 oz
        pasta.
        <br />
      </p>
    </div>
    <div class="border border-dark border-padding">
      <h4 class="text-center"><u>Creamy Herbed Pork Chops Story</u></h4>
      <p class="left-align">
        Creamy herbed pork chops weren't introduced to me until much later in my
        life, toward the end of high school. Still to this day I haven't had
        them as they're technically supposed to be prepared. I've always had
        creamy herbed pork chops with the pork chops on the side and the sauce
        doubled and mixed in with some sort of pasta. The creamy herbed sauce is
        supposed to be poured over pork chops as a dressing with the pork chops
        as the main dish.
      </p>
      <p class="left-align">
        The recipe itself is easy to make, and the meat can be substituted for
        something that works for you. I have found that steak works really well
        as a substitute for pork chops and the creamy herbed sauce still pairs
        well with the steak. Sometimes, when I don't want to have a bunch of
        separate dishes, I cut up the steak or pork chops and mix it all
        together; creamy herbed sauce, pork chops or steak, and pasta,
        altogether make a great casserole-style dish.
      </p>
      <p>
        I made these creamy herbed pork chops, in the way that I grew up with,
        mixed with pasta, for my wife and now it's her favorite dish. Whenever
        we have company over, it's a special occasion for her, or something of
        that sort, this is the dish that she requests. The carrots give it a
        wonderfully sweet taste and the pasta makes these creamy herbed pork
        chops a full, pretty well-balanced meal.
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
