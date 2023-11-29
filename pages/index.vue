<template>
  <div>
    <MainLoader v-if="isLoading" />

    <div class="home_page_content_wrapper">
      <!-- Start:: Hero Section -->
      <HeroSection />
      <!-- End:: Hero Section -->

      <!-- Start:: Services Section -->
      <ServicesSection />
      <!-- End:: Services Section -->

      <!-- Start:: About Section -->
      <AboutSection />
      <!-- End:: About Section -->

      <!-- Start:: App Screens Section -->
      <AppScreensSection />
      <!-- End:: App Screens Section -->

      <!-- Start:: Download App Section -->
      <DownloadApp />
      <!-- End:: Download App Section -->
    </div>
  </div>
</template>

<script>
import MainLoader from "~/components/ui/MainLoader.vue";

// Start:: Importing Home Page Components
import HeroSection from "~/components/general/HeroSection.vue";
import ServicesSection from "~/components/general/ServicesSection.vue";
import AboutSection from "~/components/general/AboutSection.vue";
import AppScreensSection from "~/components/general/AppScreensSection.vue";
import DownloadApp from "~/components/general/DownloadApp.vue";
import BaseInput from "~/components/FormInputs/BaseInput.vue";
// End:: Importing Home Page Components

export default {
  name: "HomePage",

  head() {
  },

  // asyncData(context) {
  //   console.log("ASYNC DATA CONTEXT ==>", context);
  // },

  components: {
    MainLoader,
    HeroSection,
    ServicesSection,
    AboutSection,
    AppScreensSection,
    DownloadApp,
    BaseInput,
  },

  data() {
    return {
      isLoading: true,
    };
  },

  mounted() {
    setTimeout(() => {
      this.isLoading = false;
      document.body.style.overflow = "unset";
    }, 1000);
  },
};
</script>
