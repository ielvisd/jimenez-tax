<template>
  <q-page>
    <div class="bg-primary q-pa-md absolute full-width full-height flex-column">
      <template>
        <q-scroll-area class="home">
          <div class="full-width">
            <div class="flex-column auto-24btm">
              <img class="test auto" alt="Jimenez Tax logo" src="~assets/jimenez-logo.svg" />
            </div>
            <div class="flex-column auto-24btm">
              <q-img
                class="auto-24btm"
                :src="url"
                spinner-color="white"
                style="height: auto; max-width: 350px"
              />
              <h4 class="auto text-accent">Blog</h4>
            </div>
          </div>
          <div class="posts flex-center">
            <!-- here we loop through the posts -->
            <q-card class="bg-secondary my-card" v-for="post in posts" :key="post.id">
              <q-card-section>
                <p class="text-h6 text-accent">
                  <!-- for each one of them, we’ll render their title, and link off to their individual page -->
                  <a :href="`#/blogPost/${post.slug}`">{{ post.title.rendered }}</a>
                </p>
                <p class="date">{{ post.date | niceDate }}</p>

                <div class="text-accent" v-html="post.excerpt.rendered"></div>
                <a :href="`#/blogPost/${post.slug}`" class="readmore">Read more ⟶</a>
              </q-card-section>
            </q-card>
          </div>
        </q-scroll-area>
      </template>
    </div>
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
  data() {
    return {
      url: "../statics/writing.jpg"
    };
  },
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


<style lang="scss">
.avatar {
  width: 100px;
  height: 100px;
  margin-right: 10px;
  border-radius: 50%;
}

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

.bsr {
  border: solid red;
}

.bsg {
  border: solid green;
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
  margin-right: 24px;
  // border: solid green;
  // height: 100%;
  max-height: 500px;
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
</style>


