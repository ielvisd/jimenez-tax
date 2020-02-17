<template>
  <q-page class="post individual">
    <q-card class="bg-secondary my-card">
      <q-card-section>
        <p class="text-h4">{{ post.title.rendered }}</p>

        <p class="date">{{ post.date | niceDate }}</p>

        <div class="text-accent" v-html="post.excerpt.rendered"></div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { date } from "quasar";
const { formatDate } = date;

export default {
  filters: {
    niceDate(value) {
      return date.formatDate(value, "MMM D, YYYY");
    }
  },
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



<style lang="scss">
.infos {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;

  div {
    &:not(:last-child) {
      margin-bottom: 10px;
    }

    &.capitalize {
      text-transform: capitalize;
    }

    &.name {
      font-size: 150%;
      font-weight: bold;
    }

    i {
      margin-right: 10px;
    }
  }
}

.home {
  display: flex;
  flex-grow: 1;
  height: inherit;
}

.test {
  width: fit-content;
}

.auto {
  margin: 0 auto;
}

.auto-24btm {
  margin: 0 auto 24px auto;
}

.flex-column {
  display: flex;
  flex-direction: column;
}

.flex-center {
  display: flex;
  justify-content: center;
}

.my-card {
  width: 100%;
  max-width: 350px;
  min-width: 200px;
  margin-right: 24px;
  // border: solid green;
  // height: 100%;
  max-height: 500px;
  margin-top: 24px;
  margin-left: 24px;
}

.p-bottom-24 {
  padding-bottom: 24px;
}

.avatar-pic {
  // border: solid red;
  width: 100px;
  height: 100px;
  margin: 0 10px;
  border-radius: 100%;
}

.date {
  margin-bottom: 8px;
}

.more-link {
  display: none;
}

.flex-row {
  display: flex;
}

.categories {
  // border: solid red;
  margin-bottom: 24px;
}

.tags-list {
  // background: #f5f5f5;
  // padding: 70px 25px 25px;
  // margin-top: -65px;
}

.category {
  p {
    margin: 0;
  }
  margin-right: 8px;
}
</style>



