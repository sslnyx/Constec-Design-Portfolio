<template>
  <div>
    <section class="hero mb-0 d-flex justify-content-center align-items-center">
      <img
        :src="pageContent.acf.hero_image.url"
        :alt="pageContent.acf.hero_image.title"
      />
      <h1>Contact Us</h1>
      <!-- <div class="des-card" v-html="pageContent.acf.hero_card"></div> -->
    </section>
    <!-- <img src="" alt="" /> -->
    <Form></Form>
  </div>
</template>

<script>
import Form from "../components/Form";
import { mapGetters } from "vuex";
export default {
  name: "Contact",
  computed: {
    ...mapGetters(["getPage"]),

    pageContent() {
      return this.getPage("contact-us");
    }
  },
  components: {
    Form
  }
};
</script>

<style lang="scss">
.page-Contact {
  position: relative;
  .hero {
    height: 600px;
    min-height: auto;
    h1 {
      position: absolute;
      color: #fff;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }

  .form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: #495057;
    outline: 0;
    box-shadow: 0 0 0 2px #495057;
  }
}
</style>