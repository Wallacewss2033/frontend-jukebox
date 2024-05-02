<template>
  <div class="container" style="background-color: brown">
    <div class="box-card row" style="background-color: aqua">
      <CardComponent
        :key="i"
        v-for="(task, i) in tasks"
        :id="task.id"
        :title="task.title"
        :description="task.description"
      />
    </div>
  </div>
</template>

<script>
import CardComponent from "@/components/Card/CardComponent.vue";
import "./styles.css";
import api from "@/services/api";

export default {
  name: "HomePage",
  components: {
    CardComponent,
  },
  data() {
    return {
      tasks: [],
    };
  },
  mounted() {
    this.handleGetTasks();
  },
  methods: {
    handleGetTasks() {
      api
        .get("/tasks")
        .then((response) => {
          this.tasks = response.data.data;
          console.log(this.tasks);
        })
        .catch(() => {});
    },
  },
};
</script>
