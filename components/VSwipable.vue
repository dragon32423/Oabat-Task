<!--<template>-->
  <!--<div ref="container" class="swiper-container">-->
    <!--<div class="swiper-wrapper">-->
      <!--<div v-if="swipeRight" class="swiper-slide">-->
        <!--<slot name="right-content"/>-->
      <!--</div>-->
      <!--<div class="swiper-slide">-->
        <!--<slot/>-->
      <!--</div>-->
      <!--<div v-if="swipeLeft" class="swiper-slide">-->
        <!--<slot name="left-content"/>-->
      <!--</div>-->
    <!--</div>-->
  <!--</div>-->
<!--</template>-->

<!--<script lang="ts">-->
  <!--import Swiper, { SelectableElement } from 'swiper';-->
  <!--import 'swiper/css/swiper.css';-->
  <!--import Vue from 'vue';-->

  <!--export default Vue.extend({-->
    <!--mounted() {-->
      <!--const swiper = new Swiper(this.$refs.container as SelectableElement, {-->
        <!--initialSlide: this.swipeRight ? 1 : 0,-->
        <!--resistanceRatio: 0,-->
        <!--speed: 150,-->
      <!--});-->

      <!--swiper.on('transitionEnd', () => {-->
        <!--// slide index  swipe mode-->
        <!--//   0   1       R-->
        <!--//   0   1   2   R   L-->
        <!--//       0   1   L-->
        <!--switch (true) {-->
          <!--case this.swipeRight && swiper.activeIndex === 0:-->
            <!--this.$emit('swipedRight');-->
            <!--break;-->
          <!--case this.swipeRight && swiper.activeIndex === 2:-->
            <!--this.$emit('swipedLeft');-->
            <!--break;-->
          <!--case !this.swipeRight && swiper.activeIndex === 1:-->
            <!--this.$emit('swipedLeft');-->
            <!--break;-->
          <!--default:-->
        <!--}-->


        <!--switch (swiper.activeIndex) {-->
          <!--case 0:-->
            <!--this.$emit('swipedRight');-->
            <!--break;-->
          <!--case 2:-->
            <!--this.$emit('swipedLeft');-->
            <!--break;-->
          <!--default:-->
        <!--}-->
      <!--});-->
    <!--},-->
    <!--props: {-->
      <!--swipeLeft: Boolean,-->
      <!--swipeRight: Boolean,-->
    <!--},-->
  <!--});-->
<!--</script>-->
