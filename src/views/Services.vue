<template>
  <div>
    <section class="hero d-flex justify-content-center align-items-center">
      <img
        :src="pageContent.acf.hero_image.url"
        :alt="pageContent.acf.hero_image.title"
      />
      <h1>Services</h1>

      <!-- <div class="des-card" v-html="pageContent.acf.hero_card"></div> -->
    </section>
    <section>
      <div class="content s-overview">
        <p v-html="pageContent.acf.services_overview"></p>
      </div>
    </section>
    <section>
      <div class="content">
        <b-row>
          <b-col
            class=""
            cols="12"
            md="4"
            v-for="{ acf, id, title, slug } in allServices"
            :key="id"
          >
            <router-link :to="`services/${slug}`">
              <div class="s-card">
                <div class="s-img-wrapper">
                  <img :src="acf.service_hero.sizes.large" alt="" />
                  <div class="service-title" v-html="title.rendered"></div>
                </div>

                <div class="service-excerpt" v-html="acf.excerpt"></div>
              </div>
            </router-link>
          </b-col>
        </b-row>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Services",
  computed: {
    ...mapGetters(["allServices", "getPage"]),

    pageContent() {
      return this.getPage("services");
    }
  }
};
</script>


<style lang="scss">
.page-Services {
  .hero {
    height: 600px;
    min-height: auto;
    margin-bottom: 80px;
    h1 {
      position: absolute;
      color: #fff;
    }
  }

  .s-overview {
    max-width: 800px;
    margin: 0 auto;
  }
  a {
    text-decoration: none;
  }
  .s-card {
    height: calc(100% - 400px);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: right;
    }

    .s-img-wrapper {
      height: 400px;
      position: relative;
      .service-title {
        padding: 1rem;
        position: absolute;
        bottom: 0;
        background: #000;
        color: #fff;
        text-transform: uppercase;
        font-weight: bold;
        right: 0;
        font-size: 1rem;
      }
    }
    .service-excerpt {
      padding: 2rem;
      height: 100%;
      color: #fff;
      background: #000;
    }
  }
}

@media (min-width: 768px) {
  .page-Services {
    .hero {
      margin-bottom: 150px;
    }
    .s-card {
      height: calc(100% - 500px);
      .s-img-wrapper {
        height: 500px;
      }
    }
  }
}
</style>