<template>
  <div class="app_screens_carousel_wrapper">
    <client-only>
      <owl-carousel
        dir="ltr"
        :nav="true"
        :dots="false"
        :items="5"
        :loop="true"
        :autoplay="true"
        :autoplayTimeout="6000"
        :dragEndSpeed="2000"
        :smartSpeed="2000"
        :center="true"
        :margin="8"
        :responsive=" {
          0: {
            items: 1,
            nav: true
          },
          480: {
            items: 3,
            nav: true
          },
          1042: {
            items: 5,
            nav: true
          },
        }
      "
    >
        <!-- Start:: Slider Item -->
        <div
          dir="ltr"
          class="slider_image_wrapper"
          v-for="item in appScreens"
          :key="item.id"
        >
          <img
            :src="item.url"
            alt="App Screen"
            width="260"
            height="560"
            loading="lazy"
          />
        </div>
        <!-- END:: Slider Item -->
      </owl-carousel>
    </client-only>
    <!-- Start:: Phone Frame -->
    <img
      class="phone_frame"
      src="~/assets/media/shapes/phoneFrame.png"
      alt="Phone Frame"
      width="280"
      height="560"
      loading="lazy"
    />
    <!-- End:: Phone Frame -->
  </div>
</template>

<script>
export default {
  name: "AppScreensCarousel",

  data() {
    return {
      appScreens: [
        {
          id: 1,
          url: require("~/assets/media/images/mobileScreens/screen1.png"),
        },
        {
          id: 2,
          url: require("~/assets/media/images/mobileScreens/screen2.png"),
        },
        {
          id: 3,
          url: require("~/assets/media/images/mobileScreens/screen3.png"),
        },
        {
          id: 4,
          url: require("~/assets/media/images/mobileScreens/screen4.png"),
        },
        {
          id: 5,
          url: require("~/assets/media/images/mobileScreens/screen5.png"),
        },
        {
          id: 6,
          url: require("~/assets/media/images/mobileScreens/screen6.png"),
        },
        {
          id: 7,
          url: require("~/assets/media/images/mobileScreens/screen7.png"),
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.app_screens_carousel_wrapper {
  position: relative;
  .owl-carousel {
    position: relative;
    .owl-stage-outer {
      padding-block: 35px !important;
      .owl-item {
        .slider_image_wrapper {
          img {
            border-radius: 20px;
            transition: all 0.4s linear;
          }
        }

        &.center {
          .slider_image_wrapper {
            img {
              transform: scale(1.1);
            }
          }
        }
      }
    }

    .owl-nav {
      position: absolute;
      bottom: -50px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: 25px;

      .owl-prev,
      .owl-next {
        // background-color: var(--mid_main_theme_clr);
        margin: 0;
        padding: 18px 25px;
        color: var(--mid_main_theme_clr);
      }

      .owl-prev {
        span {
          opacity: 0;
        }
        &::before {
          content: "";
          display: block;
          width: 38px;
          height: 15px;
          background-image: url("../../assets/media/icons/ui_icons/arrowLeft.svg")
        }
      }

      .owl-next {
        span {
          opacity: 0;
        }
        &::before {
          content: "";
          display: block;
          width: 38px;
          height: 15px;
          background-image: url("../../assets/media/icons/ui_icons/arrowRight.svg")
        }
      }
    }
  }

  .phone_frame {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.12);
    z-index: 2;
  }
}

@media (max-width: 850px) {
.app_screens_carousel_wrapper {
  .owl-carousel {
    .owl-stage-outer {
      .owl-item {
        .slider_image_wrapper {
          display: flex;
          justify-content: center;
          img {
            width: unset;
          }
        }

        &.center {
          .slider_image_wrapper {
            img {
              transform: scale(1);
            }
          }
        }
      }
    }
  }

  .phone_frame {
    transform: translate(-50%, -50%) scale(1.01);
  }
}
}

@media (max-width: 1042px) {
.app_screens_carousel_wrapper {
  .owl-carousel {
    .owl-stage-outer {
      .owl-item {
        .slider_image_wrapper {
          display: flex;
          justify-content: center;
          img {
            width: unset;
            transform: scale(0.8);
          }
        }

        &.center {
          .slider_image_wrapper {
            img {
              transform: scale(1);
            }
          }
        }
      }
    }
  }

  .phone_frame {
    transform: translate(-50%, -50%) scale(1.01);
  }
}
}
</style>
