<template>
  <q-page>
    <p class="bg-primary q-pa-md absolute full-width full-height flex-column">
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
              <h4 class="auto text-accent">About Us</h4>
            </div>
          </div>

          <div class="q-gutter-md q-mb-md flex auto flex-center auto-24btm">
            <q-card class="my-card bg-accent" flat bordered>
              <q-card-section horizontal>
                <q-card-section class="q-pt-xs">
                  <div class="text-h5 q-mt-sm q-mb-xs text-secondary text-center">Specialties</div>
                  <p
                    class="text-caption text-secondary"
                  >Jimenez Tax is a family business that has 6 Licensed Tax Professionals who have passed a rigorous test & background check administered by the IRS. We specialize in the tax needs of individuals and small businesses. We use our knowledge of federal, state, and al tax codes and publications to prepare tax returns and make sure our clients do not pay unnecessary taxes. We also offer advise to taxpayers in audits, investigations, and other tax related situations. Jimenez tax also offers notary, real estate, bookkeeping, and living trusts.</p>
                </q-card-section>
              </q-card-section>

              <q-separator />
            </q-card>

            <q-card class="my-card bg-accent" flat bordered>
              <q-card-section horizontal>
                <q-card-section class="q-pt-xs">
                  <div class="text-h5 q-mt-sm q-mb-xs text-secondary text-center">History</div>
                  <p class="text-caption text-secondary">
                    Established in 1965.
                    Jimenez Tax is a family business that was established in 1965. It started off with a family of brothers that worked out of this office until they branched off to start their own tax business. However, this office still keeps the tradition going with it's staff.
                  </p>
                </q-card-section>
              </q-card-section>

              <q-separator />
            </q-card>
          </div>

          <h4 class="auto text-accent text-center">Meet the Team</h4>

          <div class="q-gutter-md q-mb-md flex auto flex-center p-bottom-24">
            <q-card class="my-card bg-secondary" flat bordered>
              <q-item>
                <q-item-section avatar>
                  <q-avatar>
                    <img :src="team.leo.picture" />
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label>{{team.leo.name}}</q-item-label>
                  <q-item-label caption>Tax Preparer</q-item-label>
                </q-item-section>
              </q-item>

              <q-separator />

              <q-card-section horizontal>
                <q-card-section>{{ lorem }}</q-card-section>

                <q-separator vertical />

                <q-card-section
                  class="col-4"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</q-card-section>
              </q-card-section>

              <q-separator />

              <q-card-actions>
                <q-btn @click="showDrift" flat round icon="event" />
                <q-btn @click="showDrift" color="accent" flat>30 min</q-btn>
                <q-btn @click="showDrift" color="accent">Reserve</q-btn>
              </q-card-actions>
            </q-card>

            <q-card class="my-card bg-secondary" flat bordered>
              <q-item>
                <q-item-section avatar>
                  <q-avatar>
                    <img :src="team.susana.picture" />
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label>{{team.susana.name}}</q-item-label>
                  <q-item-label caption>Tax Preparer</q-item-label>
                </q-item-section>
              </q-item>

              <q-separator />

              <q-card-section horizontal>
                <q-card-section>{{ lorem }}</q-card-section>

                <q-separator vertical />

                <q-card-section
                  class="col-4"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</q-card-section>
              </q-card-section>

              <q-separator />

              <q-card-actions>
                <q-btn @click="showDrift" flat round icon="event" />
                <q-btn @click="showDrift" color="accent" flat>30 min</q-btn>
                <q-btn @click="showDrift" color="accent">Reserve</q-btn>
              </q-card-actions>
            </q-card>

            <q-card class="my-card bg-secondary" flat bordered>
              <q-item>
                <q-item-section avatar>
                  <q-avatar>
                    <img :src="team.diego.picture" />
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label>{{team.diego.name}}</q-item-label>
                  <q-item-label caption>Tax Preparer</q-item-label>
                </q-item-section>
              </q-item>

              <q-separator />

              <q-card-section horizontal>
                <q-card-section>{{ lorem }}</q-card-section>

                <q-separator vertical />

                <q-card-section
                  class="col-4"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</q-card-section>
              </q-card-section>

              <q-separator />

              <q-card-actions>
                <q-btn @click="showDrift" flat round icon="event" />
                <q-btn @click="showDrift" color="accent" flat>30 min</q-btn>
                <q-btn @click="showDrift" color="accent">Reserve</q-btn>
              </q-card-actions>
            </q-card>

            <q-card class="my-card bg-secondary" flat bordered>
              <q-item>
                <q-item-section avatar>
                  <q-avatar>
                    <img :src="team.emilio.picture" />
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label>{{team.emilio.name}}</q-item-label>
                  <q-item-label caption>Tax Preparer</q-item-label>
                </q-item-section>
              </q-item>

              <q-separator />

              <q-card-section horizontal>
                <q-card-section>{{ lorem }}</q-card-section>

                <q-separator vertical />

                <q-card-section
                  class="col-4"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</q-card-section>
              </q-card-section>

              <q-separator />

              <q-card-actions>
                <q-btn @click="showDrift" flat round icon="event" />
                <q-btn @click="showDrift" color="accent" flat>30 min</q-btn>
                <q-btn @click="showDrift" color="accent">Reserve</q-btn>
              </q-card-actions>
            </q-card>

            <q-card class="my-card bg-secondary" flat bordered>
              <q-item>
                <q-item-section avatar>
                  <q-avatar>
                    <img :src="team.frank.picture" />
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label>{{team.frank.name}}</q-item-label>
                  <q-item-label caption>Tax Preparer</q-item-label>
                </q-item-section>
              </q-item>

              <q-separator />

              <q-card-section horizontal>
                <q-card-section>{{ lorem }}</q-card-section>

                <q-separator vertical />

                <q-card-section
                  class="col-4"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</q-card-section>
              </q-card-section>

              <q-separator />

              <q-card-actions>
                <q-btn @click="showDrift" flat round icon="event" />
                <q-btn @click="showDrift" color="accent" flat>30 min</q-btn>
                <q-btn @click="showDrift" color="accent">Reserve</q-btn>
              </q-card-actions>
            </q-card>

            <q-card class="my-card bg-secondary" flat bordered>
              <q-item>
                <q-item-section avatar>
                  <q-avatar>
                    <img :src="team.lion6.picture" />
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label>{{team.lion6.name}}</q-item-label>
                  <q-item-label caption>Tax Preparer</q-item-label>
                </q-item-section>
              </q-item>

              <q-separator />

              <q-card-section horizontal>
                <q-card-section>{{ lorem }}</q-card-section>

                <q-separator vertical />

                <q-card-section
                  class="col-4"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</q-card-section>
              </q-card-section>

              <q-separator />

              <q-card-actions>
                <q-btn @click="showDrift" flat round icon="event" />
                <q-btn @click="showDrift" color="accent" flat>30 min</q-btn>
                <q-btn @click="showDrift" color="accent">Reserve</q-btn>
              </q-card-actions>
            </q-card>
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
    </p>

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
      team: {
        leo: {
          name: "Leo Jimenez",
          email: "jimtax@sbcglobal.net",
          phone: "(213)-413-3313",
          nationality: "USA",
          picture: "../statics/lion1.jpg"
        },
        susana: {
          name: "Susana Jimenez",
          email: "jimtax@sbcglobal.net",
          phone: "(213)-413-3313",
          nationality: "USA",
          picture: "../statics/susana.jpg"
        },
        diego: {
          name: "Diego Ortiz",
          email: "dortiztax@gmail.com",
          phone: "(213)-413-3313",
          nationality: "USA",
          picture: "../statics/diego.png"
        },
        emilio: {
          name: "Emilio Ortiz",
          email: "jimtax@sbcglobal.net",
          phone: "(213)-413-3313",
          nationality: "USA",
          picture: "../statics/lion2.jpg"
        },
        frank: {
          name: "Frank",
          email: "jimtax@sbcglobal.net",
          phone: "(213)-413-3313",
          nationality: "USA",
          picture: "../statics/lion3.jpg"
        },
        lion6: {
          name: "Tax Lion #6",
          email: "jimtax@sbcglobal.net",
          phone: "(213)-413-3313",
          nationality: "USA",
          picture: "../statics/lion4.jpg"
        }
      },
      url: "../statics/lions.jpg",
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
.test {
  width: fit-content;
  max-width: 275px;
}

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

.auto-24btm {
  margin: 0 auto 24px auto;
}

.card {
  max-width: 350px;
  min-height: 185px;

  display: flex;

  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background: rgba(255, 255, 255, 0.8);
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

.my-card {
  width: 100%;
  max-width: 350px;
  min-height: 300px;
}
</style>

