<template>
  <div class="container">
    <CreateTask @updateTasks="handlerGetTasks" :item="item" @clearItem="clearItem" />
    <div class="box-card row">
      <CardComponent :key="i" v-for="(task, i) in tasks" :id="task.id" :title="task.title"
        :description="task.description" @updateTasks="handlerGetTasks" @editTask="handlerEditTask" />

      <PaginationComponent :current-page="pagination.current_page" :total-page="pagination.total_page"
        :prev="pagination.prev_page_url" :next="pagination.next_page_url" @goPage="handlePageChange" />
    </div>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <CreateTask @updateTasks="handlerGetTasks" :item="item" @clearItem="clearItem" />
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
import PaginationComponent from "@/components/Pagination/PaginationComponent.vue";

export default {
  name: "HomePage",
  components: {
    CardComponent,
    CreateTask,
    PaginationComponent,
  },
  watch: {
    pagination: {
      handler() {
        this.handlerGetTasks();
      },
      deep: true
    },
  },
  data() {
    return {
      tasks: [],
      item: {},
      pagination: {
        current_page: null,
        per_page: null,
        total_page: null,
        prev: '',
        next: ''
      }
    };
  },
  mounted() {
    this.handlerGetTasks();
  },
  methods: {
    handlerGetTasks() {
      api
        .get(`/tasks?page=${this.pagination.current_page}`)
        .then((response) => {
          this.tasks = response.data.data;
          
          if (this.pagination.current_page !== response.data.current_page) {
            this.pagination.current_page = response.data.current_page;
          }

          this.pagination.per_page = response.data.per_page;
          this.pagination.total_page = response.data.last_page;
          this.pagination.prev = response.data.prev_page_url;
          this.pagination.next = response.data.next_page_url;
        })
        .catch(() => { });
    },
    handlerEditTask(data) {
      this.item = JSON.parse(data);
    },
    clearItem() {
      this.item = Object.assign({});
    },
    handlePageChange(pageNumber) {
      this.pagination.current_page = pageNumber;
    },
  },
};
</script>
