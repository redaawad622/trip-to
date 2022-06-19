<template>
  <v-sheet min-height="100%" height="100%" class="d-flex">
    <div v-if="$vuetify.breakpoint.smAndUp" class="pa-10">
      <splash-content></splash-content>
    </div>
    <v-card
      class="pa-10 splashCard"
      min-height="100%"
      height="100%"
      style="flex: 1"
      color="primary darken-1"
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

<style lang="scss" scoped>
  .splashCard {
    z-index: 0;

    &::before {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: url('../assets/splash2.webp') center center / cover no-repeat;
      opacity: 0.85;
      // background: url('../assets/splash.jpg') center center / cover no-repeat;
      // opacity: 0.7;
      z-index: -1;
    }
  }
</style>
