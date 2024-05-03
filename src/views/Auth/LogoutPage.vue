<template>
  <div></div>
</template>
<script>
import cookies from "@/services/cookies";
import { signOut, getAuth } from "firebase/auth";
import { app } from "@/firebase";
export default {
  name: "LogoutPage",
  mounted() {
    const auth = getAuth(app);
    signOut(auth)
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
