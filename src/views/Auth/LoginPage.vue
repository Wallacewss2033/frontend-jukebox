<template>
  <main class="form-signin w-100 m-auto">
    <form @submit.stop.prevent="submit">
      <div class="d-flex align-items-center justify-content-center">
        <h1 class="h3 mb-3 fw-normal">
          <img alt="logo" src="../../assets/logo.png" />
          MyTaks
        </h1>
      </div>

      <div class="form-floating">
        <input
          id="validationCustom01"
          v-model="email"
          type="email"
          class="form-control"
          placeholder="name@example.com"
          required
        />
        <label for="floatingInput">Email</label>
      </div>

      <div class="form-floating">
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label for="floatingPassword">Password</label>
      </div>

      <button class="btn btn-primary w-100 py-2" type="submit">Entrar</button>
    </form>
  </main>
</template>

<script>
import { useToast } from "vue-toastification";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "@/firebase";
import api from "@/services/api";
import "./styles.css";
import cookies from "@/services/cookies";

export default {
  name: "LoginPage",
  data() {
    return {
      email: null,
      password: null,
      messages: [],
      toast: useToast(),
    };
  },
  mounted() {
    api
      .get("/check")
      .then(() => {
        this.$router.push("/");
      })
      .catch(() => {});
  },
  methods: {
    submit() {
      const auth = getAuth(app);
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user.accessToken);
          let payload = {
            email: this.email,
            password: this.password,
            provider: user.providerId,
          };

          api
            .post("/login-firebase", payload, {
              headers: { Authorization: `Bearer ${user.accessToken}` },
            })
            .then((response) => {
              this.toast.success(response.data.message);
              cookies.set("auth-token", response.data.authorization.token);
              cookies.set("user", response.data.user.name);
              this.$router.push("/");
            })
            .catch((error) => {
              this.toast.error(error.message);
            });
        })
        .catch(() => {
          this.toast.error("Credenciais inválidas");
        });
    },
  },
};
</script>

<style>
html,
body {
  height: 100%;
}

.form-signin {
  max-width: 330px;
  padding: 1rem;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
