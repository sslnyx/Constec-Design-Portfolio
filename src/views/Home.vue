<template>
  <div class="home">
    <!-- <h1>{{ pageContent.title.rendered }}</h1> -->
    <section class="hero m-0">
      <video autoplay muted loop playsinline>
        <source :src="pageContent.acf.hero_video.url" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>

    <section class="overview m-0">
      <div class="content">
        <h1 v-html="pageContent.acf.constec_overview.overview_title"></h1>
        <p v-html="pageContent.acf.constec_overview.overview_content"></p>
      </div>
    </section>

    <section class="swiper-gallery m-0">
      <Carrousel :images="pageContent.gallery" />
    </section>
  </div>
  <!-- <div v-else>loading...</div> -->
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";
import Carrousel from "@/components/Carrousel";

export default {
  name: "Home",
  computed: {
    ...mapGetters(["getPage"]),

    pageContent() {
      return this.getPage("front-page");
    }
  },
  // methods: {
  //   ...mapActions(["fetchPage"]),
  // },
  created() {},
  components: {
    Carrousel
  },
  mounted() {}
};
</script>


<style lang="scss">
main.page-Home {
  padding-top: 0;
  .hero {
    position: relative;
    min-height: auto;
    height: 80vh;
    video {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .overview {
    padding: 100px 0;
    .content {
      max-width: 800px;
    }
  }

  .swiper-gallery {
    padding: 100px 0;
    background: #000;
  }
}
</style>