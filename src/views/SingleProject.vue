<template>
  <div class="pg-single-project">
    <!-- <h1>Single Project</h1> -->
    <section class="m-0">
      <div class="project-hero">
        <div class="drop-block"></div>
        <img :src="projectContent.gallery[randomHero].full_image_url" alt="" />

        <div class="title-wrap">
          <div>
            <h2 class="mb-3" v-html="projectContent.title.rendered"></h2>
            <p v-html="projectContent.acf.project_description"></p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="content">
        <b-row class="gallery" id="grid" ref="grid" v-if="filteredGallery">
          <b-col class="m-0" v-for="(col, i) in filteredGallery" :key="i">
            <div
              class="image-wrapper"
              v-for="({ medium_srcset, img_id }, k) in col"
              :key="img_id"
            >
              <b-icon icon="arrows-angle-expand" style="color: #fff"></b-icon>
              <img
                @click="modalOpen(), (index = k)"
                :srcset="medium_srcset"
                alt=""
              />
            </div>
          </b-col>
        </b-row>
      </div>
    </section>
    <GalleryModal :index="index" :images="projectContent.gallery" />
  </div>
</template>

<script>
import GalleryModal from "@/components/GalleryModal";
import { mapGetters } from "vuex";
// import salvattore from "@/assets/3rd/salvattore.min.js";

export default {
  name: "SingleProject",
  data() {
    return {
      randomHero: Number,
      index: ""
    };
  },
  computed: {
    ...mapGetters(["getProject"]),

    projectContent() {
      return this.getProject(this.$route.params.project);
    },

    filteredGallery() {
      let imgCol = {
        c1: {},
        c2: {}
      };
      this.projectContent.gallery.forEach((el, index) => {
        if (!(index % 2)) {
          imgCol.c1[index] = el;
        } else {
          imgCol.c2[index] = el;
        }
      });
      return imgCol;
    }
  },
  components: {
    GalleryModal
  },
  methods: {
    modalOpen() {
      this.$root.$emit("bv::show::modal", "modal-1");
    }
  },
  created() {
    this.randomHero = Math.floor(
      Math.random() * this.projectContent.gallery.length
    );
  },
  mounted() {
    // setTimeout(() => {
    //   salvattore.rescanMediaQueries(this.$refs.grid);
    //   salvattore.recreateColumns(this.$refs.grid);
    // }, 1000);
  },
  updated() {}
};
</script>

<style lang="scss">
.page-Project {
  padding-top: 0;
  .content {
    max-width: 800px;
  }
  .col {
    padding: 0px;
  }
  .project-hero {
    overflow: hidden;
    position: relative;
    height: auto;
    margin-bottom: 0;
    img {
      display: none;
      height: 100%;
      object-fit: cover;
      width: 100%;
    }
    .title-wrap {
      padding: 3rem;
      width: 100%;
      position: relative;
      padding-top: 150px;
      min-height: 300px;
      max-height: calc(100% - 140px);
      overflow-y: auto;
      bottom: 0px;
      left: 0px;
      background: rgba($color: #fff, $alpha: 0.8);
      ul {
        padding: 15px;
      }
      h2 {
        font-weight: 700;
        font-size: 2rem;
        line-height: 1.4em;
        margin: 0;
      }
    }
  }

  .gallery {
    overflow: hidden;
    padding: 0 5px;
    .image-wrapper {
      //     // height: 300px;
      //     // overflow: hidden;
      //     padding: 5px;
      position: relative;
      cursor: pointer;
      &:hover {
        svg {
          opacity: 1;
        }
        img {
          filter: brightness(0.6);
        }
      }
      // }
      img {
        padding: 5px;
      }
      //     // height: 100%;
      //     width: 100%;
      //     object-fit: cover;
      //     transition: all 0.5s ease;
    }
    svg {
      position: absolute;
      font-size: 35px;
      z-index: 100;
      transition: all 0.5s ease;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      pointer-events: none;
    }
  }

  // #grid[data-columns]::before {
  //   content: "2 .column.size-1of2";
  // }

  /* These are the classes that are going to be applied: */
  .column {
    float: left;
  }
  .size-1of2 {
    width: 50%;
  }
}

@media (min-width: 768px) {
  .page-Project {
    .project-hero {
      height: 800px;
      margin-bottom: 100px;
      .title-wrap {
        position: absolute;
        bottom: 20px;
        left: 20px;
        // height: calc(40% - 104px);
        width: 50%;
        padding-top: 3rem;
        h2 {
          font-size: 50px;
        }
      }
      img {
        display: block;
      }
    }
  }
}
</style>