<template>
  <div class="posts">
    <main>
      <h2>Posts</h2>
      <!-- here we loop through the posts -->
      <div class="post" v-for="post in posts" :key="post.id">
        <h3>
          <!-- for each one of them, we’ll render their title, and link off to their individual page -->
          <a :href="`#/blogPost/${post.slug}`">{{ post.title.rendered }}</a>
        </h3>
        <div v-html="post.excerpt.rendered"></div>
        <a :href="`#/blogPost/${post.slug}`" class="readmore">Read more ⟶</a>
      </div>
    </main>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  methods: {
    ...mapActions("blog", ["getPosts"])
  },
  computed: {
    posts() {
      return this.$store.state.blog.posts;
    }
  },
  created() {
    console.log("🤷‍♀");
    this.getPosts();
  }
};
</script>
