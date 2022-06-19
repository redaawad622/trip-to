<template>
  <v-sheet min-height="100%" height="100%" class="d-flex">
    <div v-if="$vuetify.breakpoint.smAndUp" class="pa-10">
      <splash-content></splash-content>
    </div>
    <v-card
      class="pa-10"
      :img="require('../assets/splash.jpg')"
      min-height="100%"
      height="100%"
      style="flex: 1"
      flat
      tile>
      <splash-content v-if="!$vuetify.breakpoint.smAndUp"></splash-content>
    </v-card>
  </v-sheet>
</template>

<script>
  import splashContent from '../components/pages/Splash/splashContent.vue';
  export default {
    components: { splashContent },
  };
</script>

<style>
  .card__title-shadow {
    text-shadow: 0px 0px 20px #5bcef9;
  }
  .over{
    background: #5bcef9;
    width: 100%;
    height: 100%;
  }
</style>
