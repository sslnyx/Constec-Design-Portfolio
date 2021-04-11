<template>
  <b-modal
    ref="my-modal"
    id="modal-1"
    hide-header
    hide-footer
    centered
    title="Using Component Methods"
    @show="updateSwiper()"
  >
    <swiper ref="GallerySwiper" :options="swiperOptions">
      <swiper-slide v-for="img in images" :key="img.id">
        <img :src="img.full_image_url" :alt="img.title" />
      </swiper-slide>
    </swiper>

    <div class="close" @click="hideModal"></div>
  </b-modal>
</template>

<script>
// import { bus } from "@/main";
export default {
  props: ["index", "images"],
  created() {
    // bus.$on("modalOpen", () => {
    //   this.$refs["my-modal"].show();
    // });
  },
  computed: {},
  data() {
    return {
      init: false,
      mSwiper: "",
      swiperOptions: {
        slidesPerView: 1,
        // slideToClickedSlide: true,
        // initialSlide: Number(this.index),
      },
    };
  },
  methods: {
    hideModal() {
      this.$root.$emit("bv::hide::modal", "modal-1", "#btnShow");
    },
    updateSwiper() {
      setTimeout(() => {
        this.$refs.GallerySwiper.$swiper.update();
        this.$refs.GallerySwiper.$swiper.slideTo(this.index, 0);
      }, 10);
    },
  },
  mounted() {},
  updated() {},
};
</script>

<style lang="scss">
#modal-1 {
  // max-height: 80vh;

  .modal-dialog {
    max-width: 1080px;
    overflow: hidden;
    //   height: 100%;
    .modal-content {
      background: none;
      border: none;
      border-radius: 0;
      .modal-body {
        padding: 0;
        .close {
          top: -45px;
          right: 0;
          opacity: 1;
        }
      }
    }
    .swiper-wrapper {
      height: inherit;
      .swiper-slide {
        height: inherit;
        img {
          width: 100%;
          height: 100%;
          max-width: none;
          max-height: 80vh;
          object-fit: cover;
        }
      }
    }
  }
}
</style>