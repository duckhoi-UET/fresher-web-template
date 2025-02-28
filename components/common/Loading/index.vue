<template>
  <Fragment>
    <div
      class="fixed top-0 left-0 right-0 z-[9999] h-screen"
      style="background-color: rgba(0, 0, 0, 0.45)"
    ></div>
    <div class="loader"></div>
  </Fragment>
</template>

<script>
import { Fragment } from "vue-frag";
export default {
  name: "LoadingCommon",
  components: {
    Fragment,
  },
};
</script>

<style scoped>
.loader {
  width: 175px;
  height: 80px;
  display: block;
  margin: auto;
  background-image: radial-gradient(
      circle 25px at 25px 25px,
      #fff 100%,
      transparent 0
    ),
    radial-gradient(circle 50px at 50px 50px, #fff 100%, transparent 0),
    radial-gradient(circle 25px at 25px 25px, #fff 100%, transparent 0),
    linear-gradient(#fff 50px, transparent 0);
  background-size: 50px 50px, 100px 76px, 50px 50px, 120px 40px;
  background-position: 0px 30px, 37px 0px, 122px 30px, 25px 40px;
  background-repeat: no-repeat;
  box-sizing: border-box;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 99999;
}
.loader::before {
  content: "";
  left: 60px;
  bottom: 18px;
  position: absolute;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #2563eb;
  background-image: radial-gradient(
      circle 8px at 18px 18px,
      #fff 100%,
      transparent 0
    ),
    radial-gradient(circle 4px at 18px 0px, #fff 100%, transparent 0),
    radial-gradient(circle 4px at 0px 18px, #fff 100%, transparent 0),
    radial-gradient(circle 4px at 36px 18px, #fff 100%, transparent 0),
    radial-gradient(circle 4px at 18px 36px, #fff 100%, transparent 0),
    radial-gradient(circle 4px at 30px 5px, #fff 100%, transparent 0),
    radial-gradient(circle 4px at 30px 5px, #fff 100%, transparent 0),
    radial-gradient(circle 4px at 30px 30px, #fff 100%, transparent 0),
    radial-gradient(circle 4px at 5px 30px, #fff 100%, transparent 0),
    radial-gradient(circle 4px at 5px 5px, #fff 100%, transparent 0);
  background-repeat: no-repeat;
  box-sizing: border-box;
  animation: rotationBack 3s linear infinite;
}
.loader::after {
  content: "";
  left: 94px;
  bottom: 15px;
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #2563eb;
  background-image: radial-gradient(
      circle 5px at 12px 12px,
      #fff 100%,
      transparent 0
    ),
    radial-gradient(circle 2.5px at 12px 0px, #fff 100%, transparent 0),
    radial-gradient(circle 2.5px at 0px 12px, #fff 100%, transparent 0),
    radial-gradient(circle 2.5px at 24px 12px, #fff 100%, transparent 0),
    radial-gradient(circle 2.5px at 12px 24px, #fff 100%, transparent 0),
    radial-gradient(circle 2.5px at 20px 3px, #fff 100%, transparent 0),
    radial-gradient(circle 2.5px at 20px 3px, #fff 100%, transparent 0),
    radial-gradient(circle 2.5px at 20px 20px, #fff 100%, transparent 0),
    radial-gradient(circle 2.5px at 3px 20px, #fff 100%, transparent 0),
    radial-gradient(circle 2.5px at 3px 3px, #fff 100%, transparent 0);
  background-repeat: no-repeat;
  box-sizing: border-box;
  animation: rotationBack 4s linear infinite reverse;
}

@keyframes rotationBack {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
</style>
