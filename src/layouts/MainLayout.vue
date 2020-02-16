<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-secondary" elevated>
      <q-toolbar>
        <q-btn
          class="absolute-right text-accent"
          flat
          icon="meeting_room"
          label="Make an appointment"
          to="/appointments"
        />
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

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",

  components: {},

  data() {
    return {
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
          label: "Make an Appointment",
          icon: "meeting_room",
          to: "/appointments"
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
