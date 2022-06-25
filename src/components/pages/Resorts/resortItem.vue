<template>
  <v-card class="mb-8" flat tile>
    <v-img :src="$imgUrl + resort.logo" class="rounded"></v-img>
    <v-card-title class="px-0 py-1 text-capitalize">{{
      resort.name
    }}</v-card-title>
    <v-rating
      readonly
      :length="resort.rate"
      class="mx-0"
      :value="resort.rate"
      color="amber"></v-rating>
  </v-card>
</template>

<script>
  export default {
    props: {
      resort: {
        type: Object,
        required: true,
      },
    },
  };
</script>

<style></style>
