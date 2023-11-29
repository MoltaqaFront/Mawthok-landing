<template>
  <v-app :class="[{ rtl: $i18n.locale == 'ar' }, { ltr: $i18n.locale == 'en' }]">
    <TheNavbar/>


    <Nuxt />

    <DownloadApp/>
    <TheFooter/>
  </v-app>
</template>

<script>
import TheNavbar from "~/components/structure/TheNavbar";
import HeroSection from "~/components/general/HeroSection.vue";
import DownloadApp from "~/components/general/DownloadApp.vue";
import TheFooter from "~/components/structure/TheFooter";

export default {
  name: 'StaticContent',

  head() {
    return {
      titleTemplate: "Mawthok - %s",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Static Content Description'
        }
      ],
    }
  },

  components: {
    TheNavbar,
    HeroSection,
    DownloadApp,
    TheFooter,
  },
}
</script>

<style lang="scss" scoped>
.static_content_header {
  position: relative;
  height: 100vh;
  background-image: url("~/assets/media/images/slider/slider01.jpg");
  background-size: 100%;
  .overlay {
    position: absolute;
    inset: 0;
    background-color: rgba(21, 50, 82, 0.85);
    z-index: 1;
  }
  .section_shape {
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 104%;
    z-index: 2;
    img {
      width: 100%;
    }
  }
}
.header_content_wrapper {
    position: sticky;
    background: var(--main_theme_clr);
}
</style>
