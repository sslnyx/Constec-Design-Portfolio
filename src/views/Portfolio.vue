<template>
  <section>
    <!-- <h1>{{ pageContent.title.rendered }}</h1> -->

    <div class="content">
      <b-row>
        <b-col
          cols="12"
          md="6"
          v-for="project in allProjects"
          :key="project.id"
          class="project-card"
        >
          <router-link :to="`/portfolio/${project.slug}`">
            <img :src="project.gallery[0].full_image_url" alt="" />
            <h2 v-html="project.title.rendered"></h2>
          </router-link>
        </b-col>
      </b-row>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  // created() {
  //   console.log(this.allProjects);
  // },
  computed: {
    ...mapGetters(["allProjects", "getPage"]),

    pageContent() {
      return this.getPage("portfolio");
    }
  }
};
</script>


<style lang="scss">
.page-Portfolio {
  padding-top: 200px;
}
.project-card {
  // overflow: hidden;
  margin-bottom: 1.5rem;
  // overflow: hidden;

  h2 {
    color: #000;
    margin: 1.5rem 0;
    text-align: center;
    font-weight: 400;
  }
  img {
    max-height: 400px;
    width: 100%;
    object-fit: cover;
    border-radius: 3rem;
    transition: all 0.2s ease;
    position: relative;
    &:hover {
      box-shadow: 0px 0px 10px #000;
      // transform: scale(1.5);
      // z-index: 100;
    }
  }

  a:hover {
    text-decoration: none;
  }
}
</style>