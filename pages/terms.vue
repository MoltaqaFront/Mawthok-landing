<template>
  <div class="static_page_content_wrapper">
    <MainLoader v-if="isLoading" />

    <div class="container">
      <div class="page_title">
        <h2>{{ $t("terms.title") }}</h2>
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
  name: "TermsAndConditions",

  layout: "staticContent",

  components: {
    MainLoader,
  },


  head() {
    return {
      title: this.$t("meta.terms"),
      meta: [
        {
          hid: "title",
          name: "title",
          content: this.$t("meta.terms"),
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.$t("meta.terms"),
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

  data() {
    return {
      isLoading:false,
      terms_title: '',
      terms_content: ''
    };
  },

  methods:{
    async getData() {
    try {
      return await this.$axios.get(`/dashboard-api/v1/staticPages/2`).then(response => {
        this.isLoading=true;
        this.terms_content = response.data.data.staticPage.content;
        this.terms_title = response.data.data.title;
        // console.log(response.data.body.homepage.terms_and_conditions.title)
      }).catch(error => {
        console.log(error)
      })
    } catch (error) {
      console.log("catch : " + error)
    }
    }
  },

  mounted(){
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
