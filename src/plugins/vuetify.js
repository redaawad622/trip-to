import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import minifyTheme from 'minify-css-string';

Vue.use(Vuetify);

import en from '../locales/en';
import ar from '../locales/ar';

export default new Vuetify({
  lang: {
    locales: { en, ar },
    current: 'en',
  },
  theme: {
    options: {
      minifyTheme,
      customProperties: true,
      // themeCache: {
      // 	get: (key) => localStorage.getItem(key),
      // 	set: (key, value) => localStorage.setItem(key, value),
      // },
    },
    themes: {
      light: {
        primary: {
          base: '#356dfa',
          darken1: '#1b3065',
        },
        secondary: '#b8c2d7',
      },
    },
  },
});
