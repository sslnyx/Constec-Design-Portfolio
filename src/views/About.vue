<template>
  <div v-scroll="handleScroll">
    <section class="hero">
      <img
        :src="pageContent.acf.hero_image.url"
        :alt="pageContent.acf.hero_image.title"
      />
      <div class="des-card" v-html="pageContent.acf.hero_card"></div>
    </section>

    <section class="page-des content">
      <p v-html="pageContent.acf.page_des"></p>
    </section>

    <section class="stats mb-0">
      <div class="contetn text-white">
        <b-row class="text-center">
          <b-col
            cols="12"
            md="4"
            v-for="({ title, num }, i) in aniNum"
            :key="i"
          >
            <p class="aniNum">{{ num }}</p>
            <h3 v-html="title"></h3>
          </b-col>
        </b-row>
      </div>
    </section>

    <section class="desingerContainer">
      <b-row class="m-0">
        <b-col cols="12" md="6"></b-col>
        <b-col cols="12" md="6" class="p-0">
          <div class="designer-1 content">
            <p v-html="pageContent.acf.designer1"></p>
          </div>
        </b-col>
      </b-row>
      <b-row class="m-0">
        <b-col cols="12" md="6" class="p-0">
          <div
            class="designer-2 content"
            v-html="pageContent.acf.designer2"
          ></div>
        </b-col>
        <b-col cols="12" md="6"></b-col>
      </b-row>

      <img
        class="designer-bg"
        v-parallax="0.8"
        :src="pageContent.acf.background.url"
        alt="about-bg.jpg"
      />
    </section>

    <section class="company-des">
      <div class="content text-center">
        <img
          src="@/assets/img/constec_black.svg"
          alt="constec_black.svg"
          class="site-logo-black mb-5"
        />

        <h3>{{ pageContent.acf.slogan }}</h3>
      </div>
    </section>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  name: "About",
  data() {
    return {
      init: false,
      aniNum: [
        { title: "Aquisitions($M)", num: 0, desNum: 70 },
        { title: "Properties", num: 0, desNum: 20 },
        { title: "Construction($M)", num: 0, desNum: 70 }
      ]
    };
  },
  computed: {
    ...mapGetters(["getPage"]),

    pageContent() {
      return this.getPage("about");
    }
  },
  components: {},
  methods: {
    handleScroll: function() {
      // console.log(window.scrollY);
      if (window.scrollY > 300 && this.init === false) {
        this.aniNum.forEach(val => {
          this.$anime({
            targets: val,
            num: val.desNum,
            round: 1,
            easing: "easeOutExpo",
            duration: 3000
          });
        });
        this.init = true;
      }
    }
  },
  mounted() {}
};
</script>

<style lang="scss">
.page-About {
  .hero {
    height: auto;
    img {
      display: none;
    }
  }
  .page-des {
    max-width: 600px;
    margin: 0 auto;
    text-align: left;
    margin-bottom: 80px;
    margin-top: 80px;
  }

  .stats {
    background: #000;
    padding: 50px 0;
    // padding-bottom: 70px;
    .aniNum {
      font-size: 72px;
      margin: 0;
      background: none;
      color: #fff;
      width: 100%;
      text-align: center;
      border: none;
      pointer-events: none;
    }
  }

  [class*="designer-"] {
    background: #000;
    padding: 5rem 22px;
    color: #fff;
    p:last-child {
      margin-bottom: 0;
    }
  }

  .desingerContainer {
    position: relative;
    overflow: hidden;
    .row {
      position: relative;
      z-index: 100;
    }
    img.designer-bg {
      padding: 0;
      position: absolute;
      top: 0;
      z-index: -1;
      height: 120vh;
      width: 100%;
      object-fit: cover;
      left: 0;
    }

    .designer-1 {
      padding-bottom: 0;
    }

    .designer-2 {
      margin-bottom: 400px;
    }

    .designer-2,
    .designer-1 {
      p {
        max-width: 450px;
        margin: 0 auto;
        text-align: center;
      }
    }
  }

  .company-des {
    img {
      max-width: 400px;
    }
  }
}

@media (min-width: 768px) {
  .page-About {
    .hero {
      height: 80vh;
      position: relative;
      margin-bottom: 150px;
      .des-card {
        position: absolute;
        bottom: 35px;
        left: 35px;
        padding: 3rem;
      }

      img {
        object-fit: cover;
        height: 100%;
        width: 100%;
        display: block;
      }
    }
    .page-des {
      text-align: center;
      margin-top: 150px;
      margin-bottom: 150px;
    }

    [class*="designer-"] {
      padding: 5rem;
      p:last-child {
        margin-bottom: 0;
      }
    }

    .desingerContainer {
      .designer-1 {
        margin-bottom: 0px;
        padding-bottom: 5rem;
      }
      .designer-2 {
        margin-bottom: 0px;
      }
    }
  }
}
</style>