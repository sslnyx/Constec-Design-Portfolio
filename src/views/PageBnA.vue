<template>
  <div class="page-bna-container">
    <section>
      <div
        class="page-bna-wrapper"
        v-for="project in filteredProjects"
        :key="project.id"
      >
        <div class="content">
          <b-row class="p-0 pb-5 p-md-5">
            <b-col class="d-flex align-items-center" cols="12" md="4">
              <h1 v-html="project.title.rendered"></h1>
            </b-col>
            <b-col cols="12" md="8">
              <Bna :project="project" />
            </b-col>
          </b-row>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Bna from "@/components/BnA";

export default {
  name: "BeforeAndAfter",
  data() {
    return {
      filteredProjects: null
    };
  },
  computed: {
    ...mapGetters(["allBna"])
  },
  components: {
    Bna
  },
  created() {
    this.filteredProjects = this.allBna.filter(
      project => project.acf["b_&_a"] && project.acf["b_&_a"].after_image
    );
  }
};
</script>

<style lang="scss" >

.page-PageBnA{
  padding-top: 80px;
}
.page-bna-container {
  background: #000;
  // padding-top: 150px;
  h1 {
    font-weight: bold;
    font-size: 50px;
    margin: 2rem 0;
    text-align: center;
    width: 100%;
  }
  .page-bna-wrapper {
    color: #fff;
  }
  .page-bna-wrapper:nth-child(2n) {
    background: #fff;
    color: #2c3e50;
  }
}
</style>