<template >
  <div class="auth-main-container">
    <div class="auth-container">
      <div class="title" style="color: #000">Reset Password</div>
      <form @submit.prevent="resetPassword" autocomplete="off">
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

        <button type="submit">Send Password Reset Link to Email</button>
      </form>
      <router-link to="/login">
        Try<span class="underline"> login!</span>
      </router-link>
      <br />
    </div>
  </div>
</template>


<script>
import { resetpasswordWithFirebase } from "../api/auth";
export default {
  created() {},
  data() {
    return {
      email: "",
      isSubmitted: false,
    };
  },
  methods: {
    resetPassword() {
      this.isSubmitted = true;
      if (this.validate) {
        return false;
      }
      resetpasswordWithFirebase(this.email)
        .then((res) => {
          console.log(res.data);
          alert("main sent successfully");
        })
        .catch((err) => {
          console.log("error");
          console.log(err);
        });
    },
  },
  computed: {
    isValidEmail() {
      return (
        this.email == "" ||
        // eslint-disable-next-line no-useless-escape
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email) != true
      );
    },
    validate() {
      return this.isValidEmail;
    },
  },
};
</script>
