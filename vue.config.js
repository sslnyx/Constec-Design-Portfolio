// vue.config.js;
module.exports = {
  // options...
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
            @import "@/assets/scss/app.scss";
          `
      }
    }
  }
};
