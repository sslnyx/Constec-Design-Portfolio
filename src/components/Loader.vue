<template>
  <div class="loading"></div>
</template>

<script>
export default {};
</script>

<style scoped>
.loading {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 200%;
  height: 2px;
  margin: auto;
  background: linear-gradient(to right, #fff, #000, #fff) 0 0 / 50% 100%
    repeat-x;
  animation: loading 2s linear 0s infinite;
}

@keyframes loading {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
}
</style>