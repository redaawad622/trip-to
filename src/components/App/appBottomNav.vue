<template>
  <v-bottom-navigation
    app
    v-model="value"
    grow
    shift
    color="primary"
    background-color="#fff"
    class="elevation-0"
    v-if="$route.name !== 'Splash'">
    <v-btn
      v-for="(item, k) in list"
      :key="k + item.title"
      :to="item.to"
      class="text-decoration-none">
      <span
        class="text-capitalize"
        v-text="$vuetify.lang.t(`$vuetify.${item.title}`)"></span>

      <v-icon :color="k == value ? 'default' : 'secondary'">{{
        item.icon
      }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
  export default {
    data: () => ({
      value: 0,
      list: [
        { title: 'home', icon: 'mdi-home ', to: '/home' },
        {
          title: 'reservations',
          icon: 'mdi-calendar-check',
          to: '/reservations',
        },
        { title: 'resorts', icon: 'mdi-beach', to: '/resorts' },
        { title: 'favorites', icon: 'mdi-heart', to: '/favorites' },
      ],
    }),
    watch: {
      $route(val) {
        switch (val.name) {
          case 'Home':
            this.value = 0;
            break;
          case 'Reservations':
            this.value = 1;
            break;
          case 'Resorts':
            this.value = 2;
            break;
          case 'Favorites':
            this.value = 3;
            break;

          default:
            break;
        }
      },
    },
  };
</script>

<style></style>
