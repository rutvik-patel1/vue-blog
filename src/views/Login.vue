<template >
  <div class="auth-main-container">
    <div class="auth-container">
      <div class="title" style="color: #000">Login</div>
      <form @submit.prevent="login" autocomplete="off">
        <label for="email">Email</label>
        <input
          id="email"
          type="email"
          v-model.trim="email"
          autocomplete="off"
          placeholder="example@gmail.com"
          :style="[
            isSubmitted && isValidEmail ? { border: '1px solid red' } : '',
          ]"
        />
        <div class="form-error" v-if="isSubmitted && isValidEmail">
          Enter valid email.
        </div>
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          v-model.trim="password"
          autocomplete="off"
          placeholder="Enter password"
          :style="[
            isSubmitted && isValidPassword ? { border: '1px solid red' } : '',
          ]"
        />
        <div class="form-error" v-if="isSubmitted && isValidPassword">
          Enter 6 digit password.
        </div>
        <button type="submit">{{ isLoading ? "wait...." : "Sign In" }}</button>
        <br />
      </form>
      <router-link to="/signup">
        Don't have an account ?<span class="underline"> Register!</span>
      </router-link>
      <br />
      <router-link to="/resetpass">
        Forget Password ?<span class="underline"> Reset</span>
      </router-link>
    </div>
  </div>
</template>


<script>
import { loginWithFirebase } from "../api/auth";
import Cookies from "js-cookie";
export default {
  created() {},
  data() {
    return {
      email: "",
      password: "",
      isLoading: false,
      isSubmitted: false,
    };
  },
  methods: {
    login() {
      this.isSubmitted = true;
      if (this.validate) {
        return false;
      }
      loginWithFirebase(this.email, this.password)
        .then((res) => {
          Cookies.set("idToken", res.data.idToken, { expires: 1 / 1440 });
          Cookies.set("refreshToken", res.data.refreshToken, { expires: 365 });
          this.$router.push({ name: "Home" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  computed: {
    isValidEmail() {
      return (
        this.email == "" ||
        // eslint-disable-next-line no-useless-escape
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          this.email
        ) != true
      );
    },
    isValidPassword() {
      return this.password == "" || this.password.length < 6;
    },
    validate() {
      return this.isValidEmail || this.isValidPassword;
    },
  },
};
</script>


<style>
.auth-container {
  background-color: #fff;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
    5px 5px 29px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: block;
  max-width: 500px;
  text-align: center;
}
.auth-container .title {
  text-align: center;
  font-size: 28px;
  margin: 10px;
  color: #121212;
}
.auth-container input {
  display: block;
  width: -moz-available;
  width: -webkit-fill-available;
  width: 100%;
  padding: 12px;
  font-family: inherit;
  font-size: inherit;
  color: #121212;
  border: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 2px auto;
  margin-bottom: 16px;
}
.auth-container input:focus {
  outline: none;
  border: 1px solid blue;
}
.auth-container button {
  display: block;
  width: 100%;
  padding: 12px;
  font-size: 16px;
  font-family: inherit;
  border: none;
  background-color: rgb(63, 106, 247);
  color: azure;
  border-radius: 8px;
}
.auth-container button:hover {
  background-color: rgb(8, 36, 131);
}
.auth-container label {
  text-align: left;
  display: block;
}
.auth-container form {
  margin-bottom: 20px;
}
.auth-container a {
  font-size: 16px;
  color: #121212;
}
.underline {
  text-decoration: underline;
}
.form-error {
  text-align: initial;
  margin-top: -16px;
  color: red;
  font-size: small;
  margin-bottom: 5px;
}
.red-border {
  border: 1px soilid red !important;
}
.auth-main-container {
  height: 100vh;
  background-color: whitesmoke;
  padding-top: 40px;
}
@media all and (max-width: 800px) {
  .auth-container {
    box-shadow: none;
  }
}
</style>