<template>
  <nav>
    <ul class="pagination justify-content-center">

      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <a
          class="page-link"
          @click.prevent="handlerGoPage(currentPage - 1)"
          aria-label="Previous"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>

      <li
        class="page-item "
        v-for="pageNumber in totalPage"
        :key="pageNumber"
        :class="{ active: currentPage === pageNumber }"
      >
        <a class="page-link" @click.prevent="handlerGoPage(pageNumber)">{{
          pageNumber
        }}</a>
      </li>

      <li class="page-item" :class="{ disabled: currentPage === totalPage }">
        <a
          class="page-link"
          @click.prevent="handlerGoPage(currentPage + 1)"
          aria-label="Next"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import './styles.css';
export default {
  name: "PaginationComponent",
  props: {
    currentPage: Number,
    totalPage: Number,
    prev: String, 
    next: String,
  },
  watch: {
    totalPage() {
      
    }
  },
  methods: {
    handlerGoPage(value) {
      this.$emit('go-page', value)
    },
  },
};
</script>
