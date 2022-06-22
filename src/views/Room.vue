<template>
  <v-container
    style="max-width: 1200px"
    :class="{ 'pa-0': $vuetify.breakpoint.smAndDown }"
    class="pb-16">
    <v-row justify="center" :class="{ 'ma-0': $vuetify.breakpoint.smAndDown }">
      <v-col :class="{ 'pa-0': $vuetify.breakpoint.smAndDown }">
        <v-carousel
          :continuous="false"
          class="ma-auto"
          :cycle="cycle"
          :show-arrows="false"
          hide-delimiter-background
          delimiter-icon="mdi-minus"
          :style="
            $vuetify.breakpoint.smAndDown
              ? 'width:100vw;max-height:100vw;'
              : 'max-width: 600px; height:auto;'
          ">
          <v-carousel-item v-for="(slide, i) in room.images" :key="i">
            <v-sheet height="100%" tile @click="currentImage = i">
              <v-img :src="slide.src" max-height="100%" height="100%">
                <div
                  class="d-flex justify-space-between align-center py-3 px-2">
                  <v-btn icon color="white" @click="$router.go(-1)">
                    <v-icon>mdi-chevron-left</v-icon>
                  </v-btn>
                  <v-btn icon color="white">
                    <v-icon
                      v-text="
                        room.isFavorite ? 'mdi-heart' : 'mdi-heart-outline'
                      "></v-icon>
                  </v-btn>
                </div>
              </v-img>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col>
        <div>
          <div class="d-flex justify-space-between align-center">
            <div style="flex: 1">
              <v-card-title
                class="headline font-weight-medium text-capitalize"
                >{{ room.name }}</v-card-title
              >
              <v-card-subtitle class="font-weight-bold text-capitalize">{{
                room.type
              }}</v-card-subtitle>
            </div>
            <div>
              <v-card-title
                class="headline font-weight-bold text-capitalize primary--text"
                >{{ room.price }} EGP</v-card-title
              >
              <v-card-subtitle class="font-weight-bold text-capitalize"
                >per day</v-card-subtitle
              >
            </div>
          </div>
          <v-sheet
            class="mx-4"
            color="grey lighten-2"
            width="20px"
            height="2px"></v-sheet>

          <p class="px-4 pt-4 body-2 grey--text text-justify" v-if="more">
            {{ room.description }}
          </p>
          <p class="px-4 pt-4 body-2 grey--text text-justify" v-else>
            {{ room.description.substr(0, charNum) }}
          </p>

          <a
            @click="more = !more"
            v-if="room.description.length > charNum"
            class="text-capitalize primary--text text-decoration-none px-4"
            >{{ more ? 'read less' : 'read more'
            }}<v-icon color="primary">{{
              more ? 'mdi-chevron-up' : 'mdi-chevron-down'
            }}</v-icon></a
          >
          <v-tabs
            color="black"
            class="circle pa-4"
            hide-slider
            :show-arrows="false"
            center-active>
            <v-tab>Overview</v-tab>
            <v-tab>Content</v-tab>
            <v-tab>Map</v-tab>
            <v-tab-item
              ><v-card flat class="pa-4">
                <v-card-title class="pa-0 mb-2 font-weight-bold text-capitalize"
                  >specifications</v-card-title
                >
                <div>
                  <div
                    v-for="specification in room.specifications"
                    :key="`sp${specification.name}`">
                    <span class="me-1 font-weight-bold subtitle-2"
                      >{{ specification.name }}:</span
                    ><span class="subtitle-2">{{ specification.value }}</span>
                  </div>
                </div>
                <v-divider class="my-3"></v-divider>
                <div>
                  <span
                    class="subtitle-2 me-2"
                    v-for="feature in room.features"
                    :key="`fe${feature.name}`">
                    <v-icon small>{{ feature.icon || 'mdi-check' }}</v-icon>
                    {{ feature.name }}
                  </span>
                </div>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat class="pa-4">
                <div>
                  <span
                    class="subtitle-2 me-2"
                    v-for="content in room.contents"
                    :key="`co${content.name}`">
                    <v-icon color="success" small>{{
                      content.icon || 'mdi-check'
                    }}</v-icon>
                    {{ content.name }}
                  </span>
                </div>
              </v-card>
            </v-tab-item>
            <v-tab-item
              ><v-card flat class="pa-4">
                <iframe
                  :src="room.mapSrc"
                  style="border: 0"
                  width="100%"
                  height="auto"
                  allowfullscreen="1"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"></iframe>
              </v-card>
            </v-tab-item>
          </v-tabs>
          <v-btn
            class="floatBtn text-capitalize"
            large
            color="primary"
            width="300px"
            fixed
            bottom
            rounded>
            book now <v-icon class="ms-3">mdi-arrow-right</v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-dialog
      v-if="currentImage || currentImage == 0"
      class="ma-0"
      dark
      persistent
      :value="true"
      fullscreen>
      <v-card
        color="black"
        tile
        flat
        class="d-flex justify-center align-center">
        <v-btn @click="currentImage = null" icon absolute top right
          ><v-icon>mdi-close</v-icon></v-btn
        >
        <v-window v-model="currentImage" :show-arrows="!$vuetify.breakpoint.xs">
          <v-window-item
            v-for="(slide, i) in room.images"
            :key="i"
            class="flex justify-center">
            <img
              :src="slide.src"
              style="width: 100%; max-width: 100%; max-height: 100vh" />
          </v-window-item>
        </v-window>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        isIntersecting: false,
        currentImage: null,
        cycle: false,
        slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth'],
        more: false,
        room: {
          name: 'test text',
          type: 'studio',
          price: 350,
          isFavorite: false,
          description:
            'Situated 1.4 km from Naama Bay Beach, Sunny Lakes Resort, Revira Plus Apartment features accommodation with an outdoor swimming pool, a garden and a 24-hour front desk for your convenience.Each unit features a balcony, a fully equipped kitchen with a fridge, a seating area, a flat-screen TV, a washing machine, and a private bathroom with bidet and free toiletries. A stovetop and kettle are also available.The aparthotel offers a terrace.Popular points of interest near Sunny Lakes Resort, Revira Plus Apartment include Gardens Bay Beach, Ghibli Raceway and Sinai Grand Casino. The nearest airport is Sharm el-Sheikh International Airport, 8 km from the accommodation.Sunny Lakes Resort , Revira Plus Apartment has been welcoming Booking.com guests since 2 Oct 2021.',
          mapSrc:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3525.2121195953105!2d34.339809115501026!3d27.926141722448513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145337f279a611e3%3A0xc9de8d1058b90cfd!2sSunny%20Lakes%20Resort!5e0!3m2!1sen!2seg!4v1655828160180!5m2!1sen!2seg',
          specifications: [
            { name: 'Bedroom 1', value: '1 large double bed' },
            { name: 'Living room', value: ' 1 sofa bed' },
          ],
          features: [
            { name: 'Pool view', icon: 'mdi-pool' },
            { name: 'Garden view', icon: 'mdi-leaf-circle' },
            { name: 'Pool view', icon: 'mdi-pool' },
            { name: 'Garden view', icon: 'mdi-leaf-circle' },
            { name: 'Pool view', icon: 'mdi-pool' },
            { name: 'Garden view', icon: 'mdi-leaf-circle' },
            { name: 'Pool view', icon: 'mdi-pool' },
            { name: 'Garden view', icon: 'mdi-leaf-circle' },
          ],
          contents: [
            { name: 'Kitchen', icon: 'mdi-check' },
            { name: 'Bidet', icon: '' },
            { name: 'Sofa', icon: '' },
            { name: 'Kitchen', icon: 'mdi-check' },
            { name: 'Bidet', icon: '' },
            { name: 'Sofa', icon: '' },
            { name: 'Kitchen', icon: 'mdi-check' },
            { name: 'Bidet', icon: '' },
            { name: 'Sofa', icon: '' },
            { name: 'Kitchen', icon: 'mdi-check' },
            { name: 'Bidet', icon: '' },
            { name: 'Sofa', icon: '' },
            { name: 'Kitchen', icon: 'mdi-check' },
            { name: 'Bidet', icon: '' },
            { name: 'Sofa', icon: '' },
          ],
          images: [
            {
              color: '#1F7087',
              src: 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/321988490.jpg?k=e9c4efcaed2b97b4e9c04d2e5cc91d6bf1d8b2cee3d26427dcd082035dfb0433&o=&hp=1',
            },
            {
              color: '#952175',
              src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/cd/ee/33/telatiye-resort-hotel.jpg?w=1000&h=600&s=1',
            },
            {
              color: '#912115',
              src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
            },
            {
              color: '#969175',
              src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
            },
            {
              color: '#1F7087',
              src: 'https://atmosphereresorts.com/wp-content/uploads/2020/03/Main-pool-and-beach-at-Atmosphere-Resorts-Spa.jpg',
            },
            {
              color: '#952175',
              src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/cd/ee/33/telatiye-resort-hotel.jpg?w=1000&h=600&s=1',
            },
            {
              color: '#912115',
              src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
            },
            {
              color: '#969175',
              src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
            },
            {
              color: '#1F7087',
              src: 'https://atmosphereresorts.com/wp-content/uploads/2020/03/Main-pool-and-beach-at-Atmosphere-Resorts-Spa.jpg',
            },
            {
              color: '#952175',
              src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/cd/ee/33/telatiye-resort-hotel.jpg?w=1000&h=600&s=1',
            },
            {
              color: '#912115',
              src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
            },
            {
              color: '#969175',
              src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
            },
          ],
        },
      };
    },

    computed: {
      charNum() {
        return window.innerWidth - 125;
      },
    },
  };
</script>

<style></style>
