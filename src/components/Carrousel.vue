<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(img, i) in images" :key="img.id">
        <img
          @click="modalOpen(i)"
          :srcset="img.medium_srcset"
          :alt="img.title"
        />
        <!-- <lazy-image @click="modalOpen(i)" :srcset="img.medium_srcset" /> -->
        <!-- <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div> -->
      </swiper-slide>

      <GalleryModal :index="index" :images="images" />

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import GalleryModal from "@/components/GalleryModal";
// import { bus } from "@/main";

export default {
  name: "carrousel",
  props: ["images"],
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
    // imageSrc() {
    //   return this.images[0].medium_srcset;
    // }
  },

  data() {
    return {
      allImageLoaded: false,
      preImages: [],
      index: "",
      swiperOptions: {
        // slidesPerView: 5,
        spaceBetween: 30,
        slidesPerView: "auto",
        centeredSlides: true,
      }
    };
  },
  methods: {
    modalOpen(val) {
      this.index = val;
      this.$root.$emit("bv::show::modal", "modal-1");
    },
    preloadImage(url) {
      var img = new Image();
      img.src = url;
    }
  },
  mounted() {
    // const asyFn = () => {
    //   return new Promise(resolve => {
    //     resolve(
    //       this.images.forEach(img => {
    //         this.preloadImage(img.full_image_url);
    //       })
    //     );
    //   });
    // };

    // const asyncCall = async () => {
    //   console.log("calling");
    //   await asyFn();
    //   // this.allImageLoaded = true;
    //   this.swiper.update();
    // };

    // asyncCall();

    // console.log("done");

    setTimeout(() => {
      this.swiper.update();
      this.swiper.slideTo(2, null, null);
    }, 1000);
  },
  components: {
    GalleryModal
  },
  updated() {}
};
</script>

<style lang="scss">
.swiper-gallery {
  .swiper-slide {
    max-width: 80%;
    width: auto;
    img {
      max-height: 200px;
    }
  }

  .swiper-wrapper {
    display: flex;
    align-items: center;
  }
}

@media (min-width: 768px) {
  .swiper-gallery {
    .swiper-slide {
      max-width: 30%;
      img {
        max-height: 300px;
        height: 100%;
        cursor: pointer;
      }
    }
  }
}
</style>