<template>
  <nav id="nav" ref="nav" v-scroll="handleScroll">
    <div class="content d-flex align-items-center justify-content-between">
      <router-link to="/">
        <img
          @click="open = false"
          class="site-logo"
          src="@/assets/img/constec_white.svg"
          alt="site-logo.sve"
        />
      </router-link>

      <div class="hamburger" @click="open = !open">
        <div class="bar1"></div>
        <div class="bar2"></div>
      </div>

      <div class="sideMenu" :class="{ activeMenu: open }">
        <div class="close" @click="open = false"></div>
        <ul class="router-list p-0">
          <li
            @click="open = false"
            class="m-0"
            v-for="({ name, slug }, i) in navLinks"
            :key="i"
          >
            <router-link :to="slug">{{ name }}</router-link>
          </li>
        </ul>
        <div class="h-line"></div>
        <a class="d-block mb-3" href="mailto:info@constec.ca"
          >Email: info@constec.ca</a
        >
        <div class="social-media d-flex">
          <a
            class="d-inline-block mr-3"
            href="https://www.linkedin.com/company/constecdesign"
            target="_blank"
          >
            <b-icon icon="linkedin"></b-icon>
          </a>
          <a href="https://www.instagram.com/constecdesigns/" target="_blank">
            <b-icon icon="instagram"></b-icon>
          </a>
        </div>
      </div>
    </div>
    <div class="back-drop" :class="{ 'back-drop-active': open }" @click="open = false"></div>
  </nav>
</template>

<script>
export default {
  props: ["navLinks"],
  data() {
    return {
      open: false
    };
  },
  methods: {
    handleScroll: function(evt, el) {
      if (this.$route.path === "/") {
        if (window.scrollY > 50) {
          el.classList.add("active");
        } else {
          el.classList.remove("active");
        }
      }

      //   return window.scrollY > 100;
    },
    navFn() {
      if (this.$route.path !== "/") {
        this.$refs.nav.classList.add("active");
      } else {
        this.$refs.nav.classList.remove("active");
      }
    }
  },
  mounted() {
    this.navFn();
  },
  watch: {
    $route() {
      this.navFn();
    }
  }
};
</script>

<style lang="scss">
.back-drop {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  // z-index: 10;
  pointer-events: none;
  &-active {
    pointer-events: all;
  }
}

nav {
  position: fixed;
  padding: 60px 0;
  width: 100%;
  z-index: 1000;
  transition: padding 0.5s ease, background 0.5s ease;
  background: transparent;
  .site-logo {
    height: 74px;
  }
}

nav.active {
  padding: 15px 0;
  background: #000;
}

.hamburger {
  cursor: pointer;
  padding: 15px 10px;
  .bar1,
  .bar2 {
    width: 30px;
    height: 2px;
    background: #fff;
  }
  .bar1 {
    margin-bottom: 8px;
  }
}

.sideMenu {
  position: absolute;
  width: 320px;
  z-index: 100;
  background: #000;
  right: -337px;
  height: 100vh;
  top: 0;
  transition: all 0.5s ease;
  padding: 22px;
  padding-top: 70px;
  a {
    color: #fff;
    width: 100%;
    padding: 0.5rem 0;
    display: block;
    &:hover {
      color: #fff;
    }
  }
  .router-list {
    list-style: none;
    font-size: 20px;
    font-weight: 400;
  }
  .social-media {
    a {
      width: auto;
    }
    svg {
      // padding: 0.5rem;
      // margin-right: 1rem;
      fill: white;
      width: 35px;
      height: 35px;
    }
  }
}

.activeMenu {
  right: 0;
}
@media (min-width: 768px) {
  .modal-open {
    nav {
      width: calc(100% - 17px);
    }
  }
}
</style>