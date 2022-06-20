<template>
  <v-sheet
    width="100%"
    height="100%"
    class="d-flex justify-center align-center">
    <v-card
      class="pa-6 rounded-xl"
      max-width="400px"
      width="100%"
      :tile="!$vuetify.breakpoint.smAndUp"
      :flat="!$vuetify.breakpoint.smAndUp">
      <v-card-title class="display-1 font-weight-bold mb-5 px-1"
        >Begin Your
        <span class="mx-1 primary--text"> Trip To</span></v-card-title
      >
      <div>
        <label class="text-capitalize font-weight-medium">email</label>
        <v-text-field
          outlined
          color="black"
          type="email"
          placeholder="example@example.com"></v-text-field>
        <label class="text-capitalize font-weight-medium">phone</label>
        <v-text-field
          outlined
          color="black"
          placeholder="0100 000 0000"></v-text-field>

        <label class="text-capitalize font-weight-medium">password</label>
        <v-text-field
          outlined
          color="black"
          :type="show1 ? 'text' : 'password'"
          @click:append="show1 = !show1"
          hide-details
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"></v-text-field>
        <v-btn
          link
          to="/login"
          plain
          color="primary"
          class="text-capitalize font-weight-bold px-0 float-end mb-3 mt-1"
          >have account?</v-btn
        >
      </div>
      <v-btn color="black" block dark class="text-capitalize font-weight-bold"
        >sign up</v-btn
      >
      <div class="my-3 text-center font-weight-bold grey--text text--lighten-1">
        OR
      </div>
      <div class="font-weight-medium grey--text text--darken-1">
        Join us with your favorite social media account :
      </div>
      <div class="d-flex justify-space-between mt-5">
        <v-btn
          v-for="social in socials"
          :key="social.name"
          class="rounded-lg"
          color="grey lighten-2"
          width="50px"
          height="50px"
          min-width="auto"
          outlined
          ><v-img :src="require(`../assets/social/${social.img}`)"></v-img
        ></v-btn>
      </div>
    </v-card>
  </v-sheet>
</template>

<script>
  export default {
    data() {
      return {
        show1: false,
        socials: [
          {
            name: 'google',
            img: 'google.png',
            to: 'google.com',
          },
          {
            name: 'apple',
            img: 'apple.png',
            to: 'apple.com',
          },
          {
            name: 'facebook',
            img: 'facebook.png',
            to: 'facebook.com',
          },
          {
            name: 'twitter',
            img: 'twitter.png',
            to: 'twitter.com',
          },
        ],
      };
    },
  };
</script>

<style></style>
