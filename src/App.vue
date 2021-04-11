<template>
  <div
    id="app"
    v-if="
      $store.state.data.allProjectsLoaded &&
      $store.state.data.allPagesLoaded &&
      $store.state.data.allServicesLoaded &&
      $store.state.data.allBnaLoaded
    "
  >
    <Nav :navLinks="navLinks" />

    <main :class="`page-${$route.name}`">
      <router-view />
    </main>
    <Footer :navLinks="navLinks" />

    <div ref="transBlock" class="trans-block"></div>
  </div>
  <div v-else><Loader /></div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

export default {
  name: "APP",
  data() {
    return {
      navLinks: [
        { name: "Home", slug: "/" },
        { name: "About", slug: "/about" },
        { name: "Our Services", slug: "/Services" },
        { name: "Portfolio", slug: "/portfolio" },
        { name: "Before and After", slug: "/before-and-after" },
        { name: "Contact Us", slug: "/contact-us" }
      ]
    };
  },
  methods: {},
  components: {
    Nav,
    Footer,
    Loader
  }
};
</script>

<style>
</style>
