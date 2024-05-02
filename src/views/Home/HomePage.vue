<template>
  <div class="container">
    <CreateTask @updateTasks="handlerGetTasks" :item="item" @cancelUpdate="clearItem" />
    <div class="box-card row">
      <CardComponent
        :key="i"
        v-for="(task, i) in tasks"
        :id="task.id"
        :title="task.title"
        :description="task.description"
        @updateTasks="handlerGetTasks"
        @editTask="handlerEditTask"
      />
    </div>
  </div>

  <!-- Modal -->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <CreateTask
            @updateTasks="handlerGetTasks"
            :item="item"
            @clearItem="clearItem"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardComponent from "@/components/Card/CardComponent.vue";
import CreateTask from "@/components/CreateTask/CreateTask.vue";
import "./styles.css";
import api from "@/services/api";

export default {
  name: "HomePage",
  components: {
    CardComponent,
    CreateTask,
  },
  data() {
    return {
      tasks: [],
      item: {},
    };
  },
  mounted() {
    this.handlerGetTasks();
  },
  methods: {
    handlerGetTasks() {
      api
        .get("/tasks")
        .then((response) => {
          this.tasks = response.data.data;
        })
        .catch(() => {});
    },
    handlerEditTask(data) {
      this.item = JSON.parse(data);
    },
    clearItem() {
      this.item = Object.assign({});
    },
  },
};
</script>
