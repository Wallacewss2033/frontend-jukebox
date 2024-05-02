<template>
  <div></div>
</template>
<script>
import api from "@/services/api";
import cookies from "@/services/cookies";

export default {
  name: "LogoutPage",
  mounted() {
    api
      .post("/logout")
      .then(() => {
        cookies.remove("user");
        cookies.remove("auth-token");
        this.$router.push("/login");
      })
      .catch(() => {
        this.$router.push("/home");
      });
  },
};
</script>
