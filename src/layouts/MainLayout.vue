<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-secondary" elevated>
      <q-toolbar>
        <q-btn @click="showDrift" class="absolute-right text-accent" flat icon="chat" />
        <!-- <q-btn
          @click="logoutUser"
          v-else
          class="absolute-right"
          flat
          icon="account_circle"
          label="Logout"
        />-->

        <q-toolbar-title class="absolute-center">Leo Jimenez & Associates</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer class="bg-secondary">
      <q-tabs>
        <q-route-tab
          v-for="nav in navs"
          class="nav"
          nav.label
          :key="nav.label"
          :to="nav.to"
          :icon="nav.icon"
          :label="nav.label"
        />
      </q-tabs>
    </q-footer>

    <q-drawer
      :breakpoint="767"
      :width="250"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-secondary"
    >
      <q-list dark>
        <q-item-label class="text-accent" header>Navigation</q-item-label>
        <q-item
          class="text-accent"
          v-for="nav in navs"
          clickable
          exact
          :to="nav.to"
          :key="nav.label"
        >
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">Chat with us!</div>
        </q-card-section>

        <q-card-section
          class="q-pt-none"
        >Click the chat circle on the lower right to make an appointment.</q-card-section>

        <q-card-actions align="right">
          <q-btn label="OK" color="secondary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { dom } from "quasar";
const { ready } = dom;

export default {
  name: "MainLayout",

  mounted() {
    ready(function() {
      // ....
      console.log("READY!");
      console.log(
        document.getElementsByClassName("drift-widget-controller-overlay")
          .length
      );
      // this.showDrift();
    });
  },

  methods: {
    showDrift() {
      this.$drift.show();
      this.alert = true;
    }
  },

  components: {},

  data() {
    return {
      alert: false,
      leftDrawerOpen: false,
      navs: [
        {
          label: "Home",
          icon: "house",
          to: "/"
        },
        {
          label: "Services",
          icon: "card_travel",
          to: "/services"
        },
        {
          label: "About Us",
          icon: "nature_people",
          to: "/about"
        },
        {
          label: "Blog",
          icon: "library_books",
          to: "/blog"
        },
        {
          label: "Contact Us",
          icon: "contact_support",
          to: "/contact"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.q-tab[aria-selected="true"] {
  .q-toolbar__title,
  .q-tab__label,
  .q-tab__icon,
  .q-tab__indicator {
    color: #512b58;
  }
}

.q-toolbar__title {
  color: #512b58;
}

@media screen and (min-width: 768px) {
  .q-footer {
    display: none;
  }
}

.q-drawer {
  .q-router-link--exact-active {
    color: #512b58 !important;
  }
}

body {
  font-family: "IBMPlexSerif-Regular";
}
</style>
