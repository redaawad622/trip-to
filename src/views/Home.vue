<template>
  <v-sheet class="home">
    <homeTop></homeTop>
    <offers-list></offers-list>
    <most-rooms-list></most-rooms-list>
  </v-sheet>
</template>

<script>
  import homeTop from '../components/pages/Home/head.vue';
  import MostRoomsList from '../components/pages/Home/mostRoomsList.vue';
  import OffersList from '../components/pages/Home/offersList.vue';
  // @ is an alias to /src

  export default {
    components: { homeTop, OffersList, MostRoomsList },
    name: 'Home',
  };
</script>
