<template>
  <div class="d-flex justify-center align-center">
    <v-card class="pa-2 mx-2 mx-md-4 mt-4 welcome-card text-center">
      <div class="headline-md">Implement your task here</div>
      <div class="text-body">Contact @Julian if help is needed.</div>
    </v-card>
  </div>
</template>

<script>
export default {
  components: {},
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
</style>
