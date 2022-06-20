<template>
  <base-header :hideTop="true">
    <template #body>
      <div class="text-center py-8">
        <p
          class="white--text title text-capitalize font-weight-bold"
          v-text="$vuetify.lang.t(`$vuetify.discover amazing things`)"></p>
        <div class="d-flex justify-space-between px-4 align-center">
          <v-btn fab elevation="0" small
            ><v-icon color="primary">mdi-phone</v-icon></v-btn
          >
          <v-btn
            to="/signup"
            rounded
            color="primary"
            large
            :elevation="0"
            class="text-capitalize text-doc text-decoration-none"
            v-text="$vuetify.lang.t(`$vuetify.create account`)"></v-btn>
          <v-btn fab elevation="0" small
            ><v-icon color="primary">mdi-whatsapp</v-icon></v-btn
          >
        </div>
      </div>
    </template>
  </base-header>
</template>

<script>
  import baseHeader from '../../Base/baseHeader.vue';
  export default {
    components: { baseHeader },
  };
</script>
