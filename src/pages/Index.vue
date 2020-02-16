<template>
  <q-page>
    <div class="bg-primary q-pa-md absolute full-width full-height column">
      <div class="flex-column">
        <div class="row auto-24btm test">
          <img class="test" alt="Jimenez Tax logo" src="~assets/jimenez-logo.svg" />
        </div>
        <div class="row auto-24btm">
          <q-img
            class="auto-24btm"
            :src="url"
            spinner-color="white"
            style="height: auto; max-width: 350px"
          />
        </div>
      </div>
      <div class="q-gutter-md">
        <q-carousel
          v-model="slide"
          transition-prev="scale"
          transition-next="scale"
          swipeable
          animated
          control-color="accent"
          navigation
          padding
          arrows
          height="300px"
          class="bg-secondary text-accent shadow-1 rounded-borders"
        >
          <q-carousel-slide name="style" class="column no-wrap flex-center">
            <p>Services</p>
            <q-icon name="style" size="56px" />
            <div class="q-mt-md text-center">
              <p>Tax Preparation</p>
              {{ lorem }}
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="gavel" class="column no-wrap flex-center">
            <p>Services</p>
            <q-icon name="gavel" size="56px" />
            <div class="q-mt-md text-center">
              <p>Notary Public</p>
              {{ lorem }}
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="face" class="column no-wrap flex-center">
            <p>Services</p>
            <q-icon name="face" size="56px" />
            <div class="q-mt-md text-center">
              <p>Living Trusts</p>
              {{ lorem }}
            </div>
          </q-carousel-slide>
        </q-carousel>

        <q-card class="my-card">
          <q-card-section>{{ footer }}</q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      url: "../statics/home-image.jpg",
      slide: "style",
      footer: "Copyright © 2020 Leo Jimenez & Associates. All rights reserved.",
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo."
    };
  }
};
</script>


<style lang="scss">
.test {
  width: fit-content;
}

.auto-24btm {
  margin: 0 auto 24px auto;
}
</style>

