<template>
  <router-view />
</template>

<script>
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-variation-settings: "slnt" 0;
}

* {
  margin: 0;
  padding: 0;
}

@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap");
</style>
