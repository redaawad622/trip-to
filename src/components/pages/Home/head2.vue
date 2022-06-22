<template>
  <v-sheet class="px-2 pt-4">
    <div class="d-flex justify-space-between mb-3">
      <v-btn icon to="/signup">
        <v-avatar color="grey" size="36">
          <v-img
            src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
        </v-avatar>
      </v-btn>
      <div>
        <v-btn
          class="mx-6 text-decoration-none"
          icon
          small
          href="tel:01097171325"
          ><v-icon>mdi-phone-outline</v-icon></v-btn
        >
        <v-btn
          class="text-decoration-none"
          icon
          href="https://wa.me/01097171325?text=hi"
          elevation="0"
          small
          ><v-icon>mdi-whatsapp</v-icon></v-btn
        >
      </div>
    </div>
    <div class="headline font-weight-bold mb-2">Explore</div>
    <div class="body-1 grey--text text-capitalize">
      {{ $vuetify.lang.t(`$vuetify.discover amazing things`) }}
    </div>
    <v-sheet
      class="my-2 rounded"
      color="grey lighten-2"
      width="16px"
      height="3px"></v-sheet>
  </v-sheet>
</template>

<script>
  export default {};
</script>
