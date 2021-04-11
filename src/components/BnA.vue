<template>
  <div ref="bnaContainer" class="bna-container">
    <img
      class="after-img"
      :src="project.acf['b_&_a'].before_image.sizes.large"
      :alt="project.acf['b_&_a'].before_image.title"
    />
    <img
      ref="beforeWrapper"
      class="before-img"
      :src="project.acf['b_&_a'].after_image.sizes.large"
      :alt="project.acf['b_&_a'].after_image.title"
    />

    <input
      type="range"
      min="0"
      max="100"
      value="50"
      id="slider"
      v-model="slideWidth"
      @input="moveDivisor()"
    />
    <div ref="divLine" class="center-line"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slideWidth: 50,
      clipWidth: "",
      clipHeight: ""
    };
  },
  name: "BnA",
  props: ["project"],
  methods: {
    moveDivisor() {
      // console.log(this.clipWidth);

      this.clipWidth =
        this.$refs.beforeWrapper.offsetWidth * (this.slideWidth / 100);

      this.clipHeight = this.$refs.beforeWrapper.offsetHeight;
      this.$refs.beforeWrapper.style.clip = `rect(0px, ${this.clipWidth}px, ${this.clipHeight}px, 0px)`;

      this.$refs.divLine.style.left = this.slideWidth + "%";
    }
  },
  mounted() {
    // console.log(this.slideWidth);
    this.moveDivisor();
  }
};
</script>

<style lang="scss">
.bna-container {
  position: relative;
  max-height: 400px;
  height: 400px;
  width: 100%;
  overflow: hidden;

  .before-img,
  .after-img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left;
    top: 0;
    left: 0;
  }
  .bna-divicsor {
    height: 100%;
    overflow: hidden;
  }

  .before-img {
    top: 0;
    width: 100%;
    height: 100%;
  }

  input {
    z-index: 100;
    position: absolute;
  }

  #slider {
    -webkit-appearance: none;
    width: calc(100% + 50px);
    transform: translateX(-50%);
    left: 50%;
    height: 10px;
    top: 50%;
    position: absolute;
    border-radius: 5px;
    background: transparent;
    outline: none;
    opacity: 1;
    -webkit-transition: 0.2s;
    pointer-events: none;
    transition: opacity 0.2s;
  }

  #slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    pointer-events: all;
    appearance: none;
    width: 50px;
    height: 50px;
    border: 5px solid #fff;
    border-radius: 50%;
    background: url("~@/assets/img/arrows-alt-h-solid.svg");
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: center;

    cursor: pointer;
  }
  .center-line {
    position: absolute;
    left: 50%;
    height: 100%;
    z-index: 1;
    transform: translateX(-50%);
    &::before {
      content: "";
      top: 0;
      display: block;
      height: calc(50% - 20px);
      width: 5px;
      background: #fff;
    }
    &::after {
      content: "";
      display: block;
      bottom: 0;
      position: absolute;
      height: calc(50% - 30px);
      width: 5px;
      background: #fff;
    }
  }
}
</style>