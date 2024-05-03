<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand ms-5" href="#">
        <img src="../../assets/logo.png" alt="logo" />
      </a>
      <div id="navbarSupportedContent" class="mx-5">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li v-if="!!user" class="nav-item dropdown">
            <a
              href="#name"
              class="nav-link dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
            >
              {{ user }}
            </a>

            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" :to="'/logout'"> Sair </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import cookies from "@/services/cookies";
import "./styles.css";
export default {
  name: "HeaderComponent",
  data() {
    return {
      user: null,
    };
  },
  mounted() {
    this.user = cookies.get("user");
  },
};
</script>
