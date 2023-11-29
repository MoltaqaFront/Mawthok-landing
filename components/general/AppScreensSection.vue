<template>
  <div id="app_screens_section" class="app_screens_section_content_wrapper">
    <div class="container-xl">
      <!-- Start:: Section Title -->
      <div class="section_title_wrapper">
        <h2 class="section_title">{{ $t("nav.screen") }}</h2>
      </div>
      <!-- End:: Section Title -->

      <!-- Start:: Carousel -->
      <AppScreensCarousel data-aos-once="true" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000"/>

      <!-- End:: Carousel -->
    </div>
  </div>
</template>

<script>
import AppScreensCarousel from "~/components/carousels/AppScreensCarousel.vue";

export default {
  name: "AppScreensSection",

  components: {
    AppScreensCarousel,
  },

  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.app_screens_section_content_wrapper {
  padding-block: 50px;
  background-color: #f8f8f8;
  .section_title_wrapper {
    margin-bottom: 20px;
    text-align: center;
    .section_title {
      color: var(--main_theme_clr);
      font-size: 45px;
      font-weight: 600;
    }
  }
}
</style>
