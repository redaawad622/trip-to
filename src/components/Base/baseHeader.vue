<template>
  <v-card flat tile :img="require('../../assets/bc.png')" elevation="0" color="primary darken-1" >
    <v-toolbar v-if="!hideTop" tile flat color="transparent">
      <slot name="header"></slot>
    </v-toolbar>
    <div>
      <slot name="body"></slot>
    </div>
  </v-card>
</template>

<script>
  export default {
    props: {
      hideTop: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>
<style lang="scss" scoped>
  .wrapper {
    position: relative;
    &::before {
      content: '';
      width: 100%;
      height: 100%;
      background-image: url('../../assets/p3.png');
      position: absolute;
      background-size: contain;
      background-position: center center;
      opacity: 0.02;
      background-repeat: repeat;
    }
  }
</style>
