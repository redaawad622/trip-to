<template>
  <div class="px-2 py-5">
    <div v-if="loading">
      <v-skeleton-loader
        v-for="i in 3"
        :key="'loader' + i"
        class="mx-auto mb-5"
        type="card"></v-skeleton-loader>
    </div>
    <div v-else>
      <resort-item
        v-for="resort in resorts"
        :resort="resort"
        :key="resort.id + 'resort'"></resort-item>
    </div>
  </div>
</template>

<script>
  import resortItem from '../components/pages/Resorts/resortItem.vue';
  export default {
    components: { resortItem },
    computed: {
      resorts() {
        return this.$store.getters['ResortsModule/resorts'];
      },
      loading() {
        return this.$store.getters['ResortsModule/loading'];
      },
    },
    created() {
      this.$store.dispatch('ResortsModule/fetchResorts');
    },
  };
</script>
