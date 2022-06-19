<template>
  <base-header :hideTop="true">
    <template #body>
      <div class="text-center py-8">
        <p
          class="white--text title text-capitalize font-weight-bold"
          v-text="$vuetify.lang.t(`$vuetify.discover amazing things`)"></p>
        <div class="d-flex justify-space-between px-4">
          <v-btn icon dark large><v-icon>mdi-phone</v-icon></v-btn>
          <v-btn
            rounded
            color="primary"
            large
            :elevation="0"
            class="text-capitalize"
            v-text="$vuetify.lang.t(`$vuetify.create account`)"></v-btn>
          <v-btn icon dark large><v-icon>mdi-whatsapp</v-icon></v-btn>
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

