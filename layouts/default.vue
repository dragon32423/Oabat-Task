<template>
  <v-app>
    <v-app-bar fixed app class="d-flex justify-center box-shadow-1">
      <img height="90%" :src="require('@/static/logo-large.png')" />
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <v-footer app class="box-shadow-2">
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>
