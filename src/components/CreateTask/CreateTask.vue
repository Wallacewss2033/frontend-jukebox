<template>
  <div class="d-flex justify-content-center align-items-center">
    <div class="box-create-task">
      <div class="form-floating">
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control-plaintext"
            id="floatingEmptyPlaintextInput"
            placeholder="title"
            v-model="title"
          />
          <label for="floatingEmptyPlaintextInput">Title</label>
        </div>
        <div class="form-floating mb-3">
          <textarea
            class="form-control-plaintext"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style="height: 100px"
            v-model="description"
          ></textarea>
          <label for="floatingTextarea2">Descrição</label>
        </div>
        <div class="d-flex justify-content-end m-2">
          <button
            v-show="isEditMode"
            type="button"
            class="btn btn-secondary text-white mx-2"
            data-bs-dismiss="modal"
            @click="handlerClearItem()"
          >
            Cancelar
          </button>

          <button
            type="button"
            class="btn btn-warning text-white"
            :data-bs-dismiss="isEditMode ? 'modal' : ''"
            @click="
              () => {
                isEditMode ? handlerUpdateTask() : handlerCreateTask();
                handlerClearItem();
              }
            "
          >
            {{ isEditMode ? "Atualizar" : "Criar" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from "@/services/api";
import { useToast } from "vue-toastification";
import "./styles.css";
export default {
  name: "CreateTask",
  props: {
    item: {},
  },
  watch: {
    item(newData) {
      if (newData) {
        const { title, description } = { ...newData };
        if (Object.keys(this.item).length !== 0) {
          this.title = title;
          this.description = description;
          this.isEditMode = true;
        } else {
          this.isEditMode = false;
          this.description = null;
          this.title = null;
        }
      }
    },
  },
  data() {
    return {
      title: null,
      description: null,
      isEditMode: false,
      toast: useToast(),
    };
  },
  mounted() {
    if (Object.keys(this.item).length !== 0) {
      this.title = this.item.title;
      this.description = this.item.description;
      this.isEditMode = true;
    }
  },
  methods: {
    handlerCreateTask() {
      const data = {
        title: this.title,
        description: this.description,
      };

      api
        .post("/tasks", data)
        .then(() => {
          this.toast.success(`Tarefa criada com sucesso!`);
          this.$emit("update-tasks");
        })
        .catch(() => {
          this.toast.error(`Não foi possível criar tarefa`);
        });
    },
    handlerUpdateTask() {
      const data = {
        title: this.title,
        description: this.description,
      };
      api
        .put(`/tasks/${this.item.id}`, data)
        .then(() => {
          this.title = null;
          this.description = null;
          this.toast.success(`Tarefa atualizada com sucesso!`);
          this.$emit("update-tasks");
        })
        .catch(() => {
          this.toast.error(`Não foi possível atualizar tarefa`);
        });
    },
    handlerClearItem() {
      this.$emit("clear-item");
    },
  },
};
</script>
