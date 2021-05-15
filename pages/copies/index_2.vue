<template>
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
        <v-card
          :color="active ? undefined : 'white'"
          class="ma-1"
          height="450"
          width="525"
          @click="toggle"
        >
          <div class="fill">
            <img :src="business.preview_image" alt="" />
          </div>

          <div>
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
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
/** This page is a debgging leftover. Would be nice to properly clean up */
import { mapState } from 'vuex'

export default {
  components: {},
  data: () => ({
    model: null,
  }),
  computed: mapState({
    businesses: (state) => state.businesses,
  }),
  mounted() {
    this.$store.commit('TruncatedBusinesses', this.businesses)
    this.$store.commit('TruncatedTitles', this.businesses)
    this.$store.commit('TruncatedTags', this.businesses)
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/_variables';
@import '@/assets/_breakpoints';

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
}

.title {
  width: 270px;
  overflow: hidden;
  white-space: nowrap;
  margin-left: 20px;
  margin-top: 20px;
}
.tags {
  width: 100%;
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
  margin-left: 90px;
  margin-top: 20px;
}
</style>
