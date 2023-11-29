<template>
  <div class="main_loader_wrapper">
    <img
      class="logo"
      src="~/assets/media/logo/logo1.png"
      width="200"
      height="200"
      alt="Logo"
    />
  </div>
</template>

<script>
export default {
  name: "MainLoader",
}
</script>

<style lang="scss" scoped>
.main_loader_wrapper {
  position: fixed;
  inset: 0;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  min-height: 100vh;
  max-height: 100vh;

  .logo {
    animation-name: stretch;
    animation-duration: 4.0s;
    animation-timing-function: ease-out;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-play-state: running;
    object-fit: contain;
  }
}

@keyframes stretch {
  0% {
    transform: scale(0.8);
  }

  100% {
    transform: scale(1.4);
  }
}
</style>
