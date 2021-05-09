<template>
  <v-sheet
    class="mx-auto sheet elevation-0 border"
    elevation="8"
    max-width="2000"
  >
    <div class="head-title">
      <h1 class="headline-md">Einzigartige <b>[TYPE]</b> aus <b>[CITY]</b></h1>
    </div>
    <v-slide-group v-model="model" class="pa-0 border" multiple show-arrows>
      <v-slide-item
        v-for="business in businesses"
        :key="business.id"
        v-slot="{ active, toggle }"
      >
        <v-card
          :color="active ? 'grey' : 'white'"
          class="ma-1"
          height="450"
          width="525"
          @click="toggle"
        >
          <div class="fill">
            <img
              v-if="business.logo"
              :src="business.logo"
              class="logo"
              alt=""
            />
            <img v-else src="../assets/oabat.jpg" class="logo" alt="" />
            <img :src="business.preview_image" alt="" />

            <v-btn
              class="mx-4 button"
              fab
              dark
              large
              color="white"
              @click="like(business)"
            >
              <v-icon color="black" large> mdi-heart </v-icon>
            </v-btn>
          </div>

          <div>
            <div class="title">
              <span class="headline-sm">{{ business.title }}</span>
            </div>
            <div class="tags">
              <div class="block">
                <v-card class="tag_card text-details" height="30" width="100">
                  <p>{{ business.tags[0] }}</p>
                </v-card>
              </div>
              <div v-if="business.tags.length > 1" class="block">
                <span class="op_tag text-details"
                  >+{{ business.tags.length - 1 }} weitere</span
                >
              </div>
            </div>

            <v-card-text class="text-body desc">
              {{ business.description }}
            </v-card-text>
          </div>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {},
  data: () => ({
    model: [],
  }),
  computed: mapState({
    businesses: (state) => state.businesses,
  }),
  mounted() {
    this.$store.commit('TruncatedBusinesses', this.businesses)
    this.$store.commit('TruncatedTitles', this.businesses)
    this.$store.commit('TruncatedTags', this.businesses)
  },
  methods: {
    like(business) {
      this.$store.commit('LikeBusiness', business.id)
    },
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
  border-radius: 25px;
}
.fill img {
  flex-shrink: 0;
  min-width: 100%;
  min-height: 70%;
  max-height: 220px;
  border-radius: 25px;
}

.title {
  width: 470px;
  overflow: hidden;
  white-space: nowrap;
  margin-left: 20px;
  margin-top: 35px;
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
  transition-property: box-shadow, opacity;
  word-wrap: break-word;
  white-space: nowrap;
  color: rgba(0, 0, 0, 0.87);
  position: relative;
  text-align: center;
  line-height: 24px;
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

.sheet {
  margin: 0;
  padding: 0;
}

.head-title {
  margin-left: 90px;
  margin-top: 20px;
}

img.logo {
  height: 100px;
  width: 100px;
  position: absolute;
  margin-left: 15px;
  border-radius: 25px;
  top: 150px;
  left: 0;
  right: 0;
  flex-shrink: 0;
  min-width: 0;
  min-height: 0;
}

.button {
  position: absolute;
  bottom: 200px;
  right: 10px;
}
</style>
