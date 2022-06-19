<template>
  <v-card
    :color="item.color"
    dark
    class="mx-1"
    min-width="360px"
    :max-width="$vuetify.breakpoint.smAndUp ? '500px' : 'calc(100vw - 10px)'">
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
        <v-img :src="item.src" />
      </v-avatar>
    </div>
  </v-card>
</template>

<script>
  export default {
    props: ['item'],
  };
</script>

<style></style>
