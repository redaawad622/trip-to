<template>
  <v-sheet
    height="100%"
    :elevation="0"
    tile
    :class="{ 'd-flex flex-column transparent': !$vuetify.breakpoint.smAndUp }">
    <h1
      class="text-uppercase mb-5"
      :class="{
        'white--text card__title-shadow': !$vuetify.breakpoint.smAndUp,
      }">
      <div>{{ $vuetify.lang.t('$vuetify.life is short') }}</div>
      <div>{{ $vuetify.lang.t('$vuetify.and the world') }}</div>
      <div>{{ $vuetify.lang.t('$vuetify.is wide') }}</div>
    </h1>
    <v-btn
      class="text-capitalize mt-auto"
      style="min-width: 80%"
      v-text="$vuetify.lang.t('$vuetify.get started')"
      to="/home"></v-btn>
  </v-sheet>
</template>

<script>
  export default {};
</script>

<style></style>
