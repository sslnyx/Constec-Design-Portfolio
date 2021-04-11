<template>
  <div>
    <section class="hero d-flex justify-content-center align-items-center">
      <img
        :src="serviceContent.acf.service_hero.url"
        :alt="serviceContent.acf.service_hero.title"
      />
      <h1>{{ serviceContent.title.rendered }}</h1>
      <!-- <div class="des-card" v-html="pageContent.acf.hero_card"></div> -->
    </section>
    <section>
      <div class="content">
        <div class="text-content" v-html="serviceContent.acf.service_detail"></div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Service",
  computed: {
    ...mapGetters(["getService"]),

    serviceContent() {
      return this.getService(this.$route.params.service);
    }
  }
};
</script>

<style lang="scss">
.page-Service {
  .hero {
    height: 600px;
    img {
      filter: brightness(0.8);
    }
    h1 {
      position: absolute;
      color: #fff;
    }
  }
  @media (min-width: 768px) {
    .hero {
      height: 800px;
    }
  }
}
</style>