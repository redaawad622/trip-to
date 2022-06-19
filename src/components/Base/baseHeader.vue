<template>
  <v-sheet color="primary darken-1">
    <v-toolbar v-if="!hideTop" tile flat color="transparent">
      <slot name="header"></slot>
    </v-toolbar>
    <div>
      <slot name="body"></slot>
    </div>
  </v-sheet>
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

<style></style>

