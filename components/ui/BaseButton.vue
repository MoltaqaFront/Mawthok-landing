<template>
  <button>
    {{btnText}}
    <span class="btn_loader" v-if="isLoading"></span>
  </button>
</template>

<script>
export default {
  name: "BaseButton",

  props: {
    btnText: {
      required: true,
      type: String,
    },

    isLoading: {
      type: Boolean,
      required: false,
      default: false
    },
  },
}
</script>

<style lang="scss" scoped>
button {
  text-decoration: none;
  position: relative;
  display: inline-block;
  width: 150px;
  text-align: center;
  margin-top: 10px;
  padding: 8px 20px;
  font-size: 18px;
  color: var(--white_clr);
  border-radius: 10px;
  background-image: linear-gradient(
    90deg,
    transparent 50%,
    var(--dark_secondary_theme_clr) 50%
  );
  background-position: 100%;
  background-size: 400%;
  border: 1px solid var(--dark_secondary_theme_clr);
  @include transitioning(0.6s);
  .btn_loader {
    position: absolute;
    left: 15px;
    top: 30%;
    width: 20px;
    height: 20px;
    padding: 2px;
    border: 3px dotted var(--white_clr);
    border-style: solid solid dotted dotted;
    @include borderRadius(50%);
    @include transitioning(0.4s);
    display: inline-block;
    animation: rotation 2s linear infinite;
  }
  &:hover {
    background-position: 0;
    color: var(--dark_secondary_theme_clr);
    .btn_loader {
      border: 3px dotted var(--dark_secondary_theme_clr);
    }
  }
}
</style>
