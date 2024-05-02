<template>
  <div class="card text-start bg-white border-white">
    <div class="card-header bg-white">
      <p class="card-title">{{ title }}</p>
    </div>
    <div class="card-body text-start">
      <p class="card-text">
        {{ description }}
      </p>
    </div>
    <div class="card-footer text-body-secondary bg-white">
      <div class="text-start d-flex justify-content-between">
        <span>
          <a href="#" class="m-1 text-dark"><i class="fas fa-pen"></i></a>
          <a href="#" class="m-1 text-dark" @click="handlerDelete(id)">
            <i class="fas fa-trash-alt" />
          </a>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import "./styles.css";
export default {
  name: "CardComponent",
  props: {
    id: Number,
    title: String,
    description: {
      type: String,
      required: true,
    },
  },
  methods: {
    handlerDelete(id) {
      console.log(id);
    },
  },
};
</script>
