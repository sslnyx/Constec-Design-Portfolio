<template>
  <footer>
    <div class="content text-center text-md-left">
      <b-row class="mb-5">
        <b-col cols="12" md="2" class="mb-5 mb-md-0">
          <h4>NAVIGATE</h4>
          <p class="mb-0" v-for="({ name, slug }, i) in navLinks" :key="i">
            <router-link :to="slug">{{ name }}</router-link>
          </p>
        </b-col>
        <b-col class="mb-5 mb-md-0" cols="12" md="2">
          <h4>PROJECTS</h4>
          <p class="mb-0" v-for="{ title, id, slug } in allProjects" :key="id">
            <router-link
              :to="`/portfolio/${slug}`"
              v-html="title.rendered"
            ></router-link>
          </p>
        </b-col>
        <b-col class="mb-5 mb-md-0" cols="12" md="2">
          <h4>OUR SERVICES</h4>
          <p class="mb-0" v-for="{ title, id, slug } in allServices" :key="id">
            <router-link
              :to="`/services/${slug}`"
              v-html="title.rendered"
            ></router-link>
          </p>
        </b-col>

        <b-col class="text-center text-md-right" cols="12" md="6">
          <h4>CONTACT US</h4>
          <p>
            <span>Email: </span>
            <a href="mailto:info@constec.ca">info@constec.ca</a>
          </p>
        </b-col>
      </b-row>

      <b-row class="align-items-end">
        <b-col order="2">
          <p class="m-0">
            &copy; {{ new Date().getFullYear() }} CONSTEC DESIGN &nbsp;
            CONTRACTING LTD.
          </p>
        </b-col>
        <b-col
          order="1"
          order-md="2"
          cols="12"
          md="6"
          class="mb-3 mb-md-0 d-flex justify-content-center justify-content-md-end align-items-end"
        >
          <div class="social-media">
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
        </b-col>
      </b-row>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["navLinks"],
  computed: {
    ...mapGetters(["allProjects"]),
    ...mapGetters(["allServices"])
  }
};
</script>

<style lang="scss">
footer {
  background: rgb(240, 240, 240);
  padding: 100px 0;
  .content {
    p {
      line-height: 2;
    }
    a {
      color: #2c3e50;
    }
  }
  .social-media {
    svg {
      margin-right: 1rem;
      width: 30px;
      height: 30px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>