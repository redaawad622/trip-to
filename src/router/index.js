import Vue from 'vue';
import VueRouter from 'vue-router';
import Splash from '../views/Splash.vue';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import SignUp from '../views/SignUp.vue';
import Room from '../views/Room.vue';
import Resorts from '../views/Resorts.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Splash',
    component: Splash,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/resorts',
    name: 'Resorts',
    component: Resorts,
  },
  {
    path: '/room',
    name: 'Room',
    component: Room,
    alias: '/offers',
  },
];
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
