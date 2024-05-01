<template>
  <div class="container" style="background-color: brown;">
    <div class="box-card row" style="background-color: aqua;">
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
    </div>
  </div>
</template>

<script>
import CardComponent from "@/components/Card/CardComponent.vue";
import './styles.css';

export default {
  name: "HomePage",
  components: {
    CardComponent,
  },
};
</script>
