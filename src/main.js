import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";

// console.log(process.env.VUE_APP_TITLE);
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

import VueAwesomeSwiper from "vue-awesome-swiper";

// import style (>= Swiper 6.x)
import "swiper/swiper-bundle.css";

import VueParallaxJs from 'vue-parallax-js';
import VueAnime from 'vue-animejs';

Vue.use(VueAnime)

// add vue-parallax-js to vue
Vue.use(VueParallaxJs)


// import style (<= Swiper 5.x)
// import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper /* { default options with global component } */);

Vue.config.productionTip = false;

export const bus = new Vue();

Vue.directive("scroll", {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener("scroll", f);
      }
    };
    window.addEventListener("scroll", f);
  },
});

new Vue({
  store,
  router,
  render: (h) => h(App),
  created() {
    this.$store.dispatch("fetchProjects");
    this.$store.dispatch("fetchPages");
    this.$store.dispatch("fetchServices");
    this.$store.dispatch("fetchBna");
  }
}).$mount("#app");
