<template>
  <div id="services_section" class="services_section_content_wrapper">
    <div class="container-xl">
      <div class="row justify-content-center">
        <div class="col-md-4" v-for="(item,index) in $t('feature')" :key="item.id">
          <div
            class="service_card"
            data-aos-once="false"
            data-aos="fade"
            :data-aos-delay="'300' * (index + 1)"
            data-aos-duration="1000"
          >
            <!-- <img
              class="icon"
              :src="require(`@/assets/media/images/icons/${item.image}`)"
              width="80"
              height="80"
              alt="icon"
            /> -->
            <p class="card_title">{{ item.title }}</p>
            <div class="card_desc">
              {{ item.desc }}
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "ServicesSection",
};
</script>

<style lang="scss" scoped>
.services_section_content_wrapper {
  background-color: #f8f8f8;
  padding-block: 80px 20px;
  .row {
    div[class*="col-"] {
      &:nth-child(2) {
        .service_card {
          transform: translateY(-60px);
        }
      }
    }
    .service_card {
      padding: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      row-gap: 20px;
      .icon {
        object-fit: cover;
      }
      .card_title {
        margin: 0;
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--secondary_theme_clr);
      }
      .card_desc {
        word-break: break-word;
        word-spacing: 2px;
        font-size: 16px;
        color: var(--light_gray_clr);
        line-height: 1.6;
        text-align: center;
        width: 80%;
      }
      .links_wrapper {
        @include flexCenterAlignment;
        column-gap: 10px;
        row-gap: 10px;
      }
    }
  }
}

@media (max-width: 850px) {
  .services_section_content_wrapper {
    padding-block: 20px;
    .row {
      div[class*="col-"] {
        &:nth-child(2) {
          .service_card {
            transform: translateY(0);
          }
        }
      }
    }
  }
}
.service_card.aos-init.aos-animate {
    text-align: center;
}
</style>
