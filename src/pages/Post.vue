<template>
  <q-page class="post individual">
    <h4>{{ post.title.rendered }}</h4>
    <section v-html="post.content.rendered"></section>
  </q-page>
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
    },
    post() {
      console.log("test");
      console.log("posts are: ", this.posts);
      return this.posts.find(el => el.slug === this.slug);
    }
  },
  data() {
    return {
      slug: this.$route.params.post
    };
  },
  created() {
    this.getPosts();
  }
};
</script>
