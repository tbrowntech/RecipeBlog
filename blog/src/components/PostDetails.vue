<template>
  <div class="container mt-4" v-if="post">
    <div class="card text-aqua">
      <img
        :src="require(`@/assets/${post.imageFileName}`)"
        class="card-img-top post-image blog-thumbnail"
        alt="recipe image"
      />
      <div class="card-body">
        <h2 class="card-title text-30bfbf">{{ post.title }}</h2>
        <p class="card-text">{{ post.excerpt }}</p>
        <!--<div class="card-text">{{ post.content }}</div>-->
        <div
          class="card-text"
          v-html="post.content"
          style="white-space: pre-line"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostDetails",
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      post: null,
    };
  },
  created() {
    this.fetchPostData();
  },
  methods: {
    fetchPostData() {
      const blogPosts = [
        {
          id: 1,
          title: "Swedish Meatball Sauce",
          excerpt: "Delicious sauce to put over meatballs, pasta, etc.",
          imageFileName: "SwedishMeatballs.jpg",
          content: `Sauce: <br> 
                    2 cups beef stock <br>
                    2 cups evaporated milk <br>
                    6 tablespoons flour <br>
                    2 tablespoons soy sauce <br>
                    1 tablespoon Worcestershire sauce <br>
                    2 teaspoons black pepper <br>
                    1 teaspoon dried rosemary <br>
                    ½ cup parmesan cheese <br>
                    16 ounces meatballs <br><br>
                    Whisk together stock, milk, flour, soy sauce, worcestershire 
                    sauce, pepper and rosemary in a large saucepan over medium 
                    heat, until smooth. Cook, stirring occasionally, until 
                    thickened, about 10-15 minutes. Taste and adjust seasonings 
                    to desired taste. Stir in cooked meatballs and desired 
                    pasta.`,
        },
        {
          id: 2,
          title: "Air Fryer Meatballs",
          excerpt:
            "Have them alone or mix them in with the Swedish meatball recipe.",
          imageFileName: "fried-meatballs.jpg",
          content: `Ingredients: <br>
                    1 pound ground meat (I use turkey) <br>
                    ½ cup bread crumbs <br>
                    ½ cup grated parmesan cheese <br>
                    ¼ cup milk <br>
                    2 cloves garlic (minced) <br>
                    ½ teaspoon Italian seasoning <br>
                    ¾ teaspoon salt <br>
                    4 teaspoons pepper <br>
                    BBQ sauce/Chik-fil-a sauce to taste <br><br>
                    Instructions: <br>
                    Combine all ingredients together in a bowl and stir/sift 
                    until thoroughly mixed. Roll into desired ball size 
                    (ping pong/golf ball sized) and place them evenly spaced in 
                    air fryer tray. <br>
                    Cook at 375 for 15 minutes <br>`,
        },
        {
          id: 3,
          title: "Alfredo Sauce",
          excerpt:
            "Alfredo sauce that mimics the taste of sauce from Olive Garden.",
          imageFileName: "SwedishMeatballs.jpg",
          content: `Ingredients: <br>
                    1 evaporated milk <br>
                    ½ cup butter <br>
                    2 tablespoons cream cheese <br>
                    1 – 1½ cup fresh parmesan cheese <br>
                    1 teaspoon garlic powder <br>
                    Salt and pepper, to taste <br><br>
                    Instructions: <br>
                    In a saucepan combine evaporated milk, butter and cream 
                    cheese. Bring to a simmer, then keep it simmering until all
                    is melted and mixed well. Whisk in the parmesan cheese and
                    garlic powder. Simmer for 15-20 minutes on medium-low heat, 
                    just until it thickens enough to coat a spoon. Salt and 
                    pepper to taste. Serve over hot pasta, in place of pizza 
                    sauce, or for dipping. It's great with shrimp or grilled
                    chicken as well.`,
        },
        // Add more posts here
      ];

      this.post = blogPosts.find((post) => post.id === this.id);
    },
  },
};
</script>
