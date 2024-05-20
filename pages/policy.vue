<template>
  <div class="static_page_content_wrapper">
    <MainLoader v-if="isLoading" />

    <div class="container">
      <div class="page_title">
        <h2>{{ terms_title }}</h2>
      </div>

      <div class="page_content">
        <p class="item_content" v-html="terms_content"></p>
      </div>
    </div>
  </div>
</template>

<script>
import MainLoader from "~/components/ui/MainLoader.vue";
export default {
  name: "PrivacyPolicy",

  layout: "staticContent",

  head() {
    return {
      title: this.$t("meta.policy"),
      meta: [
        {
          hid: "title",
          name: "title",
          content: this.$t("meta.policy"),
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.$t("meta.policy"),
        },
        {
          hid: "description",
          name: "description",
          content: this.$t("meta.desc"),
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.$t("meta.desc"),
        },
      ],
    }
  },

  components: {
    MainLoader,
  },

  data() {
    return {
      isLoading: false,
      terms_title: '',
      terms_content: ''
    };
  },

  methods: {
    async getData() {
      try {
        return await this.$axios.get(`get-settings?key=app-privacy`).then(response => {
          this.isLoading = true;
          this.terms_content = response.data.data[0].value;
          this.terms_title = response.data.data.staticPage.title;
          // console.log(response.data.body.homepage.privacy_policy.title)
        }).catch(error => {
          console.log(error)
        })
      } catch (error) {
        console.log("catch : " + error)
      }
    }
  },

  mounted() {
    this.getData();
    setTimeout(() => {
      this.isLoading = false;
      document.body.style.overflow = "unset";
    }, 2000);
  }
};
</script>

<style lang="scss" scoped>
.static_page_content_wrapper {
  padding-block: 30px 40px;
  background-color: #f8f8f8;

  .page_title {
    h2 {
      margin-bottom: 20px;
      text-align: center;
      font-size: 35px;
      color: var(--main_theme_clr);
    }
  }

  .page_content {
    margin-top: 25px;

    .item_title,
    .item_content {
      word-break: break-word;
      word-spacing: 2px;
      line-height: 1.6;
      text-align: start;
    }

    .item_title {
      font-size: 22px;
      color: var(--main_theme_clr);
    }

    .item_content {
      font-size: 17px;
      color: var(--light_gray_clr);
    }
  }
}
</style>
