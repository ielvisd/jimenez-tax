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
              <h4 class="auto text-accent">Contact Us</h4>
            </div>
          </div>

          <p class="bg-accent q-mb-md">
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
          </p>

          <q-card class="bg-primary">
            <q-card-section>{{ footer }}</q-card-section>
          </q-card>
        </q-scroll-area>
      </template>
    </div>

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
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  methods: {
    showDrift() {
      this.$drift.show();
      this.alert = true;
    }
  },
  data() {
    return {
      alert: false,

      url: "../statics/hours.jpg",
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
}

.p-bottom-24 {
  padding-bottom: 24px;
}

.test {
  width: fit-content;
  max-width: 275px;
}
</style>

