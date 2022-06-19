<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
    <app-bottom-nav></app-bottom-nav>
  </v-app>
</template>

<script>
  import AppBottomNav from './components/App/appBottomNav.vue';
  export default {
    name: 'App',
    components: { AppBottomNav },
  };
</script>
