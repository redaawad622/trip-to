<template>
  <v-sheet class="home">
    <homeTop></homeTop>
    <homeTop2 v-if="false"></homeTop2>
    <offers-list></offers-list>
    <most-rooms-list></most-rooms-list>
  </v-sheet>
</template>

<script>
  import homeTop from '../components/pages/Home/head.vue';
  import homeTop2 from '../components/pages/Home/head2.vue';
  import MostRoomsList from '../components/pages/Home/mostRoomsList.vue';
  import OffersList from '../components/pages/Home/offersList.vue';
  // @ is an alias to /src

  export default {
    components: { homeTop, OffersList, MostRoomsList, homeTop2 },
    name: 'Home',
  };
</script>
