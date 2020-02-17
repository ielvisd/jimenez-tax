import Vue from "vue";
import Vuex from "vuex";
import VueDrift from "vue-drift";

// import example from './module-example'
import blog from "./store-blog";

Vue.use(Vuex);
Vue.use(VueDrift, {
  appId: "4v2nvs8skwxf"
});

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // example
      blog
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  });

  return Store;
}
