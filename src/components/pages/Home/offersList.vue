<template>
  <div class="py-6">
    <base-title class="px-6 font-weight-black">Best Offers</base-title>
    <v-slide-group class="pa-4">
      <v-slide-item v-for="(item, i) in list" :key="i">
        <v-card :color="item.color" dark class="mx-1" max-width="360px">
          <div class="d-flex justify-space-between">
            <div style="flex: 1">
              <v-card-title class="text-h5" v-text="item.title"></v-card-title>

              <v-card-subtitle v-text="item.artist" class=""></v-card-subtitle>

              <v-card-actions>
                <v-btn
                  v-if="item.artist === 'Ellie Goulding'"
                  class="ml-2 mt-3"
                  fab
                  icon
                  height="40px"
                  right
                  width="40px">
                  <v-icon>mdi-play</v-icon>
                </v-btn>

                <v-btn v-else class="ml-2 mt-5" outlined rounded small>
                  START RADIO
                </v-btn>
              </v-card-actions>
            </div>

            <v-avatar class="ma-3" size="125" tile>
              <v-img :src="item.src"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </div>
</template>

<script>
  import baseTitle from '../../Base/baseTitle.vue';
  export default {
    components: { baseTitle },
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
        ],
      };
    },
  };
</script>

<style></style>
