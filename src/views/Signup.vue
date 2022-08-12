<template>
  <div class="auth-container">
    <div class="title">Register</div>
    <form @submit.prevent="Register">
      <label for="username">Name</label>
      <input
        id="username"
        type="text"
        v-model.trim="name"
        placeholder="Enter Name"
        :style="[isSubmitted && isValidName ? { border: '1px solid red' } : '']"
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
</template>

<script>
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
      console.log("true");
    },
  },
  computed: {
    isValidEmail() {
      return (
        this.email == "" ||
        /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(this.email) != true
      );
    },
    isValidPassword() {
      return this.password == "" || this.password.length < 6;
    },
     isValidName(){
      return (this.name == '')
    },
    isValidConfiremedPassword(){
      return (this.confirmedPassword == '' || this.password !== this.confirmedPassword)
    },
    validate() {
      return (this.isValidEmail || this.isValidPassword || this.isValidConfiremedPassword || this.isValidName)
    },
  },
};
</script>