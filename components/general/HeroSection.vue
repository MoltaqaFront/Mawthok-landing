<template>
  <div id="hero_section" class="hero_section_wrapper">
    <!-- Start:: Section Content -->
    <div class="slider_image_wrapper">
      <div class="slide_content_wrapper">
        <div class="container-xl">
          <div class="slide_desc_content_wrapper">

            <h4 class="subtitle">{{ $t('mainSlider')[0].mainTitle }}</h4>
            <h2 class="slide_title">{{ $t('mainSlider')[0].title }}</h2>

            <div class="slide_desc">
              {{ $t('mainSlider')[0].desc }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End:: Section Content -->

    <!-- Start:: Mobile Mockup -->
    <div
      class="mobile_mockup_wrapper focus_screen"
      data-aos-once="true"
      data-aos="zoom-in"
      data-aos-delay="500"
      data-aos-duration="1000"
    >
      <!-- <client-only>
        <nuxt-img
          provider="static"
          src="~/assets/media/images/mobileScreens/logoScreen.png"
          alt="App Splash"
          format="webp"
          width="450"
          height="300"
          quality="100"
          loading="lazy"
        />
      </client-only> -->
        <img
          src="~/assets/media/images/mobileScreens/DarkClay.png"
          width="450"
          height="300"
          alt="App Splash"
          loading="lazy"
      />
    </div>
    <!-- End:: Mobile Mockup -->
  </div>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>
