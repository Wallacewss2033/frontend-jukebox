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
          <a
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            class="m-1 text-warning"
            @click="handlerEdit(id)"
          >
            <i class="fas fa-pen"></i>
          </a>
          <a type="button" class="m-1 text-warning" @click="handlerDelete(id)">
            <i class="fas fa-trash-alt" />
          </a>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import api from "@/services/api";
import "./styles.css";
import { useToast } from "vue-toastification";
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
  data() {
    return {
      toast: useToast(),
    };
  },
  methods: {
    handlerDelete(id) {
      api
        .delete(`/tasks/${id}`)
        .then(() => {
          this.toast.success("A tarefa foi excluida.");
          this.$emit("update-tasks");
        })
        .catch(() => this.toast.error("Não foi possível deletar a tarefa."));
    },
    handlerEdit(id) {
      api
        .get(`/tasks/${id}`)
        .then((response) => {
          const { title, description } = response.data;
          this.$emit("edit-task", JSON.stringify({ id, title, description }));
        })
        .catch(() => this.toast.error("Não foi possível deletar a tarefa."));
    },
  },
};
</script>
