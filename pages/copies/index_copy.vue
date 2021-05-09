<!--<script src="https://unpkg.com/vue/dist/vue.js"></script>-->
<!--<script src="https://unpkg.com/vuetify/dist/vuetify.min.js"></script>-->
<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.7/js/swiper.min.js"></script>-->
<!--<script src="https://cdn.jsdelivr.net/npm/vue-awesome-swiper@3.1.2/dist/vue-awesome-swiper.js"></script>-->
<!--<link-->
<!--  href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.7/css/swiper.min.css"-->
<!--  rel="stylesheet"-->
<!--/>-->
<!--<link href="https://unpkg.com/vuetify/dist/vuetify.min.css" rel="stylesheet" />-->

<template>
  <!--  <div class="d-flex justify-center align-center">-->
  <!--<v-card class="pa-2 mx-2 mx-md-4 mt-4 welcome-card text-center">-->
  <!--<div class="headline-md">Implement your task here</div>-->
  <!--<div class="text-body">Contact @Julian if help is needed.</div>-->
  <!--</v-card>-->
  <!--    <template>-->
  <!--  <div>-->
  <v-sheet class="mx-auto" elevation="8" max-width="900">
    <v-flex fill-height>
      <h1 class="text-body-lead">Einzigartige [TYPE] aus [CITY]</h1>
    </v-flex>
    <v-sheet>
      <v-slide-group
        v-model="model"
        class="pa-0"
        active-class="success"
        show-arrows="show-arrows"
      >
        <v-slide-item
          v-for="business in businesses"
          :key="business.id"
          v-slot="{ active, toggle }"
          class="item"
        >
          <v-layout align-center lass="item">
            <v-flex>
              <v-card
                :color="active ? undefined : 'grey lighten-1'"
                class="ma-4"
                height="300"
                width="300"
                @click="toggle"
              >
                <v-row align="start">
                  <v-col>
                    <v-flex>
                      <v-img contain :src="business.preview_image"></v-img>
                    </v-flex>
                  </v-col>
                </v-row>
                <v-btn class="mx-2" fab dark small color="pink">
                  <v-icon dark> mdi-heart </v-icon>
                </v-btn>
                <v-card-title> {{ business.title }}</v-card-title>
                <v-card-text>
                  {{ business.description }}
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </v-sheet>
  <!--  </div>-->
  <!--    </template>-->
  <!--  </div>-->
</template>

<script>
// import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'
// import '@mdi/font'
// import '@mdi/font/css/materialdesignicons.css'
// eslint-disable-next-line no-unused-vars
import { mapState } from 'vuex'
// eslint-disable-next-line no-unused-vars
import { getters } from '../../store'

export default {
  components: {},
  data: () => ({
    model: null,
    st:
      'Wir sind fit für die Herausforderungen von morgen und besitzen\n' +
      '                die Expertise für die Durchführung anspruchsvoller Baumaßnahmen\n' +
      '                und die Leidenschaft für die Entwicklung neuer intelligenter\n' +
      '                Lösungen, die Zukunftshorizonte eröffnen. Mit Blick auf morgen\n' +
      '                bauen und zuverlässig höchste Qualität von der Planung bis zur\n' +
      '                Fertigstellung bieten: Das war die Leitidee unseres\n' +
      '                Firmengründers Hans Berger im Jahr 1905. Aus dem Baugeschäft\n' +
      '                Hans Berger hat sich die BERGER GRUPPE entwickelt, ein\n' +
      '                familiengeführter, mittelständischer Unternehmensverbund der\n' +
      '                Bau- und Baustoffindustrie mit zahlreichen Niederlassungen,\n' +
      '                Tochter- und Beteiligungsgesellschaften im In- und Ausland und\n' +
      '                mit dem Hauptsitz in Passau. Heute sind wir eine feste Größe in\n' +
      '                der Bauindustrie.',
    obs: null,
  }),
  computed: mapState({
    // arrow functions can make the code very succinct!
    businesses: (state) => state.businesses,

    // passing the string value 'count' is same as `state => state.count`
    // countAlias: 'count',

    // to access local state with `this`, a normal function must be used
    // countPlusLocalState (state) {
    //   return state.count + this.localCount
    // }
  }),
  mounted() {
    // console.log('0000: ', this.count[0].description)
    // console.log('555: ', this.count[0])
    // this.obs = this.businesses.slice()

    // this.obs.forEach(truncate)
    this.$store.commit('TruncatedBusinesses', this.businesses)
    console.log('obs: ', this.businesses[0].description)
    console.log('obs: ', this.businesses[1].description)
    console.log('obs: ', this.businesses[2].description)

    const maxLength = 130
    this.st = this.st.substring(0, maxLength) + '...'
  },
  // this.ob = await this.$store.getters.getBusinesses()
  //   await console.log(this.count)
  //   await console.log(this.ob)
  // },
}
</script>

<style lang="scss" scoped>
@import '@/assets/_variables';
@import '@/assets/_breakpoints';

//.my-slider > .v-slide-group__next.theme--light.v-icon {
//  color: rgb(234, 10, 10) !important;
//}

.welcome-card {
  background: $colorPrimaryWhite;
  height: 300px;
  width: 300px;
  @include md-and-up {
    width: 600px;
  }
}

.item {
  padding: 0;
  margin: 0;
}
</style>

<!--swiperSlides: [-->
<!--'pink',-->
<!--'red',-->
<!--'yellow',-->
<!--'purple',-->
<!--'green',-->
<!--'orange',-->
<!--'blue',-->
<!--],-->
<!--swiperOption: {-->
<!--initialSlide: 0,-->
<!--slidesPerView: 4,-->
<!--spaceBetween: 20,-->
<!--freeMode: true,-->
<!--watchOverflow: true,-->
<!--breakpoints: {-->
<!--1904: {-->
<!--slidesPerView: 4,-->
<!--spaceBetween: 20,-->
<!--},-->
<!--1264: {-->
<!--slidesPerView: 4,-->
<!--spaceBetween: 20,-->
<!--},-->
<!--960: {-->
<!--slidesPerView: 4,-->
<!--spaceBetween: 50,-->
<!--},-->
<!--600: {-->
<!--slidesPerView: 3,-->
<!--spaceBetween: 150,-->
<!--},-->
<!--400: {-->
<!--slidesPerView: 2,-->
<!--spaceBetween: 150,-->
<!--},-->
<!--},-->
<!--pagination: {-->
<!--el: '.swiper-pagination',-->
<!--clickable: true,-->
<!--},-->
<!--navigation: {-->
<!--nextEl: '.swiper-button-next',-->
<!--prevEl: '.swiper-button-prev',-->
<!--},-->
<!--},-->

<!--// computed: {-->
<!--//   swiper() {-->
<!--//     return this.$refs.mySwiper.swiper-->
<!--//   },-->
<!--// },-->
<!--// mounted() {-->
<!--//   // current swiper instance-->
<!--//   this.swiper.slideTo(3, 1000, false)-->
<!--// },-->
<!--// methods: {-->
<!--//   callback() {-->
<!--//     // read the API docs to see which slider events are available-->
<!--//   },-->
<!--// },-->
