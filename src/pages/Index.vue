<template>
  <q-page>
    <div class="bg-primary q-pa-md absolute full-width full-height flex-column">
      <template>
        <q-scroll-area class="home">
          <div class="full-width">
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

          <div class="q-gutter-md q-mb-md">
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
                <p class="text-subtitle1 text-bold">Services</p>
                <q-icon name="style" size="56px" />
                <div class="q-mt-md text-center">
                  <p class="text-bold">Tax Preparation</p>
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
          </div>

          <q-card class="bg-accent q-mb-md">
            <!-- <q-card-section class="flex flex-column">
          <div>
            <p class="text-secondary">Leo Jimenez & Associates</p>
            <p class="text-secondary">2514 Sunset Blvd. Los Angeles, CA 90026</p>
            <p class="text-secondary">Tel: (213)-413-3313</p>
            <p class="text-secondary">Fax: (213)-413-5006</p>
            <p class="text-secondary">Email: jimtax@sbcglobal.net</p>
          </div>
          <div>
            <q-img class="rounded-borders" src="https://cdn.quasar.dev/img/parallax2.jpg" />
          </div>
            </q-card-section>-->
            <!-- <q-card-section class="col-5 flex flex-center">
          <q-img class="rounded-borders" src="https://cdn.quasar.dev/img/parallax2.jpg" />
            </q-card-section>-->
            <q-card-section horizontal>
              <q-card-section class="q-pt-xs">
                <div class="text-overline text-primary">Visit Us!</div>
                <div class="text-h5 q-mt-sm q-mb-xs text-primary">Leo Jimenez & Associates</div>
                <div class="text-caption text-primary">
                  <p>
                    2514 Sunset Blvd. Los Angeles, CA 90026
                    <br />Open 7 Days a Week
                    <br />Hours (January - April): 9am - 9pm
                    <br />Hours (May - December): 11am - 4pm
                    <br />Tel: (213)-413-3313
                    <br />Fax: (213)-413-5006
                    <br />Email: jimtax@sbcglobal.net
                  </p>
                </div>
              </q-card-section>
            </q-card-section>
          </q-card>

          <q-card class="bg-primary">
            <q-card-section>{{ footer }}</q-card-section>
          </q-card>
        </q-scroll-area>
      </template>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      url: "../statics/lion.jpg",
      slide: "style",
      address: "Leo Jimenez & Associates </br>oijoj",
      footer: "Copyright © 2020 Leo Jimenez & Associates. All rights reserved.",
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo."
    };
  }
};
</script>


<style lang="scss">
.home {
  display: flex;
  flex-grow: 1;
  height: inherit;
}

.test {
  width: fit-content;
  max-width: 275px;
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
</style>

