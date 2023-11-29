<template>
  <client-only>
    <div id="download_app_section" class="download_app_section_content_wrapper">
      <div class="container-xl">
        <div class="row align-items-center justify-content-between">
          <!-- Start:: Section Text -->
          <div class="col-lg-6" data-aos-once="true" :data-aos="$i18n.locale == 'ar' ? 'fade-left' : 'fade-right'" data-aos-delay="500" data-aos-duration="1000">
            <div class="section_text_wrapper">
              <h2 class="section_title">
                {{ $t("nav.download") }}
              </h2>

              <p class="section_desc" v-html="$t('downloadText')"></p>

              <div class="download_btns_wrapper">
                <a
                  href="#"
                  target="_blank"
                >
                  <img
                    src="~/assets/media/stores/apple-store.svg"
                    alt="apple store"
                    loading="lazy"
                  />
                </a>

                <a
                  href="#"
                  target="_blank"
                >
                  <img
                    src="~/assets/media/stores/google-play.svg"
                    alt="google play"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
          </div>
          <!-- End:: Section Text -->

          <!-- Start:: Section Image -->
          <div class="col-lg-5">
            <div class="section_image_wrapper">
              <img
                class="logo"
                src="~/assets/media/logo/logo.png"
                alt="Logo"
                width="250"
                height="250"
                loading="lazy"
              />

              <img
                class="screen"
                src="~/assets/media/images/mobileScreens/downloadScreen.png"
                alt="download_screen"
                width="250"
                height="250"
                loading="lazy"
              />
            </div>
          </div>
          <!-- End:: Section Image -->
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>
export default {
  name: "DownloadAppSection",
};
</script>

<style lang="scss" scoped>
.download_app_section_content_wrapper {
  padding-block: 80px;
  background-color: var(--main_theme_clr);
  overflow-x: hidden;
  .section_text_wrapper {
    .section_title {
      margin: 0;
      color: var(--white_clr);
      font-size: 38px;
      font-weight: 700;
    }
    .section_desc {
      margin-block: 30px;
      word-break: break-word;
      word-spacing: 2px;
      font-size: 16px;
      color: var(--white_clr);
      line-height: 1.6;
      text-align: start;
    }
    .download_btns_wrapper {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      column-gap: 15px;
      a {
        img {
          width: 155px;
          height: 65px;
        }
      }
    }
  }
  .section_image_wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .logo {
      width: 90%;
      height: auto;
      opacity: 0.1;
      transform: translateX(30%);
    }
    .screen {
      position: absolute;
      top: 50%;
      left: -20%;
      transform: translateY(-40%);
      width: 100%;
      height: auto;
    }
  }
}
</style>
