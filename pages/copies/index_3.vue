<template>
  <!--  <v-sheet class="mx-auto" elevation="8" max-width="900">-->
  <!--  <div id="outer">-->
  <!--    <div id="inner">-->

  <!--      <v-layout>-->
  <v-sheet class="mx-auto sheet elevation-0" elevation="8" max-width="2000">
    <div class="head-title">
      <h1 class="headline-md">
        Einzigartige <b>Arbeitgeber</b> aus <b>Passau</b>
      </h1>
    </div>
    <v-slide-group
      v-model="model"
      class="pa-0"
      active-class="success"
      center-active
      show-arrows
    >
      <v-slide-item
        v-for="business in businesses"
        :key="business.id"
        v-slot="{ active, toggle }"
      >
        <!--          <v-layout align-center class="item">-->
        <!--            <v-flex>-->
        <v-card
          :color="active ? undefined : 'white'"
          class="ma-1"
          height="450"
          width="525"
          @click="toggle"
        >
          <div class="fill">
            <img :src="business.preview_image" />
          </div>

          <div>
            <!--                  <div class="title format_bold">-->
            <div class="title">
              <span class="headline-sm">{{ business.title }}</span>
            </div>
            <div class="tags">
              <div class="block">
                <v-card class="tag_card" height="25">
                  <span>{{ business.tags[0] }}</span>
                </v-card>
              </div>
              <div v-if="business.tags.length > 1" class="block">
                <span class="op_tag"
                  >+{{ business.tags.length - 1 }} weitere</span
                >
              </div>
            </div>

            <v-card-text class="desc">
              {{ business.description }}
            </v-card-text>
          </div>
        </v-card>
        <!--            </v-flex>-->
        <!--          </v-layout>-->
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
  <!--    </div>-->
  <!--        </v-layout>-->
  <!--  </div>-->

  <!--  </v-sheet>-->
</template>

<script>
/** This page is a debgging leftover. Would be nice to properly clean up */

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
    this.$store.commit('TruncatedTitles', this.businesses)
    this.$store.commit('TruncatedTags', this.businesses)
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
  //height: 500px;
}

.fill {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.fill img {
  flex-shrink: 0;
  min-width: 100%;
  min-height: 70%;
  max-height: 250px;
  //max-width: 100px;
}

.title {
  width: 270px;
  overflow: hidden;
  white-space: nowrap;
  margin-left: 20px;
  margin-top: 20px;
}
#inner {
  display: table;
  margin: 0 auto;
}

#outer {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  font-family: europa, sans-serif;
}
.tags {
  width: 100%;
  //text-align: left;
  margin-left: 20px;
  border-radius: 16px;
  font-size: 14px;
  height: 32px;
  margin-top: 10px;
  border-color: rgba(0, 0, 0, 0.12);
  color: rgba(0, 0, 0, 0.87);
  font-family: europa, sans-serif !important;
}

.block {
  width: 100px;
  margin-left: 0;
  padding-left: 0;
  display: inline-block; // display inline with ability to provide width/height
}
.tag_card {
  border-width: thin;
  display: block;
  max-width: 100%;
  line-height: 20px;
  outline: none;
  text-decoration: none;
  transition-property: box-shadow, opacity;
  word-wrap: break-word;
  white-space: nowrap;
  color: rgba(0, 0, 0, 0.87);
  position: relative;
  text-align: center;
  font-family: europa, sans-serif !important;

  //display: inline-flex;
  //height: 100%;
}
.v-application,
body {
  font-family: europa, sans-serif !important;
}

.op_tag {
  margin-left: 30px;
}

.desc {
  color: #555;
  font-size: 16px;
  letter-spacing: -0.03em;
  font-weight: 400;
  font-family: europa, sans-serif !important;
  line-height: 1.5;
}

.swiper-container {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
}
.sheet {
  margin: 0;
  padding: 0;
}

.head-title {
  margin-left: 70px;
  margin-top: 20px;
}
</style>
