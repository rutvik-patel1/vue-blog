<template>
  <div class="auth-main-container">
    <div class="auth-container">
      <div class="title">Register</div>
      <form @submit.prevent="Register">
        <label for="username">Name</label>
        <input
          id="username"
          type="text"
          v-model.trim="name"
          placeholder="Enter Name"
          :style="[
            isSubmitted && isValidName ? { border: '1px solid red' } : '',
          ]"
        />
        <div class="form-error" v-if="isSubmitted && isValidName">
          Enter valid name.
        </div>
        <label for="email">Email</label>
        <input
          id="email"
          type="email"
          v-model.trim="email"
          placeholder="Email address"
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
          type="text"
          v-model.trim="password"
          placeholder="password"
          :style="[
            isSubmitted && isValidPassword ? { border: '1px solid red' } : '',
          ]"
        />
        <div class="form-error" v-if="isSubmitted && isValidPassword">
          Enter 6 digit password.
        </div>
        <label for="confirmed-password">Confirmed Password</label>
        <input
          id="confirmed-password"
          type="password"
          v-model.trim="confirmedPassword"
          placeholder="password"
          :style="[
            isSubmitted && isValidConfiremedPassword
              ? { border: '1px solid red' }
              : '',
          ]"
        />
        <div class="form-error" v-if="isSubmitted && isValidConfiremedPassword">
          Confirmed password does't match!
        </div>
        <button type="submit">Register</button>
      </form>
      <router-link to="/login">
        Already have an account ?
        <span class="underline">Login! </span></router-link
      >
    </div>
  </div>
</template>

<script>
import { registerWithFirebase } from "../api/auth";
import Cookies from "js-cookie";
export default {
  created() {},
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmedPassword: "",
      isSubmitted: false,
    };
  },
  methods: {
    Register() {
      this.isSubmitted = true;
      if (this.validate) {
        return false;
      }
      registerWithFirebase(this.email, this.password)
        .then((res) => {
          Cookies.set("idToken", res.data.idToken, { expires: 1 / 1440 });
          Cookies.set("refreshToken", res.data.refreshToken, { expires: 365 });
          Cookies.set('isAuthenticated',true,{ expires: 365 })
          this.$router.push({ name: "Home" });
        })
        .catch((err) => {
          console.log(err.code);
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
    isValidName() {
      return this.name == "";
    },
    isValidConfiremedPassword() {
      return (
        this.confirmedPassword == "" || this.password !== this.confirmedPassword
      );
    },
    validate() {
      return (
        this.isValidEmail ||
        this.isValidPassword ||
        this.isValidConfiremedPassword ||
        this.isValidName
      );
    },
  },
};
</script>