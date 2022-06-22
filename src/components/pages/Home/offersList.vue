<template>
  <div class="py-6">
    <div class="d-flex justify-space-between align-center">
      <base-title class="px-2 px-sm-13 font-weight-black"
        >Best Offers
      </base-title>
      <router-link class="primary--text d-flex align-center" to="/moreOffers"
        >See all <v-icon color="primary">mdi-chevron-right</v-icon></router-link
      >
    </div>
    <v-slide-group
      class="py-4 px-1 px-sm-0"
      :show-arrows="$vuetify.breakpoint.smAndUp">
      <v-slide-item v-for="(item, i) in list" :key="i">
        <base-list-item :item="item"></base-list-item>
      </v-slide-item>
    </v-slide-group>
  </div>
</template>

<script>
  import BaseListItem from '../../Base/baseListItem.vue';
  import baseTitle from '../../Base/baseTitle.vue';

  export default {
    components: { baseTitle, BaseListItem },
    data() {
      return {
        list: [
          {
            color: '#1F7087',
            src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
            title: 'Supermodel',
            artist:
              'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
          },
          {
            color: '#952175',
            src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
            title: 'Halcyon Days',
            artist:
              'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form',
          },
          {
            color: '#912115',
            src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
            title: 'Halcyon Days',
            artist:
              'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form',
          },
          {
            color: '#969175',
            src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
            title: 'Halcyon Days',
            artist:
              'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form',
          },
        ],
      };
    },
  };
</script>

<style></style>
