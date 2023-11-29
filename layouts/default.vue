<template>
  <v-app :class="[{ rtl: $i18n.locale == 'ar' }, { ltr: $i18n.locale == 'en' }]">
    <!-- Start:: Layout Navbar -->
    <TheNavbar/>
    <!-- End:: Layout Navbar -->

    <Nuxt />

    <!-- Start:: Layout Footer -->
    <TheFooter/>
    <!-- End:: Layout Footer -->
  </v-app>
</template>

<script>
import TheNavbar from "~/components/structure/TheNavbar";
import TheFooter from "~/components/structure/TheFooter";

export default {
  name: 'DefaultLayout',

  head() {
    return {
      titleTemplate: "Mawthok",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t("meta.desc"),
        }
      ],
    }
  },

  components: {
    TheNavbar,
    TheFooter,
  },
}
</script>
