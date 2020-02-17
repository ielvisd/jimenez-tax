const siteURL = "https://jimeneztax.blog";

/*
this is where we will eventually hold the data for all of our posts
*/
const state = () => ({
  posts: [],
  tags: []
});

const getters = {
  posts: state => {
    return state.posts;
  },
  tags: state => {
    return state.tags;
  }
};

/*
this will update the state with the posts
*/
const mutations = {
  updatePosts: (state, posts) => {
    state.posts = posts;
  },
  updateTags: (state, tags) => {
    state.tags = tags;
  }
};

/*

actions is where we will make an API call that gathers the posts,
and then commits the mutation to update it
*/
const actions = {
  //this will be asynchronous
  async getPosts({ state, commit }) {
    console.log("👋");
    //the first thing we’ll do is check if there’s any length to the posts array in state, which means we already called the API, so don’t do it again.
    if (state.posts.length) return;
    //jimeneztax.wordpress.com/?rest_route=/wp/v2/posts/
    try {
      let posts = await fetch(
        `${siteURL}/wp-json/wp/v2/posts?page=1&per_page=20&_embed=1`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        }
      ).then(res => res.json());
      posts = posts
        .filter(el => el.status === "publish")
        .map(({ id, slug, title, excerpt, date, tags, content }) => ({
          id,
          slug,
          title,
          excerpt,
          date,
          tags,
          content
        }));
      console.log("posts are now: ", posts);
      commit("updatePosts", posts);
    } catch (err) {
      console.log("error is: ", err);
    }
  },
  async getTags({ state, commit }, posts) {
    console.log("FETCHING TAGS");
    if (state.tags.length) return;
    let allTags = posts.reduce((acc, item) => {
      return acc.concat(item.tags);
    }, []);
    allTags = allTags.join();
    try {
      let tags = await fetch(
        `${siteURL}/wp-json/wp/v2/tags?page=1&per_page=40&include=${allTags}`
      ).then(res => res.json());
      tags = tags.map(({ id, name }) => ({
        id,
        name
      }));
      commit("updateTags", tags);
    } catch (err) {
      console.log(err);
    }
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
