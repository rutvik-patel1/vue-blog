<template>
  <div class="auth-container">
    <div class="title">Register</div>
    <form @submit.prevent="Register">
      <label for="username">Name</label>
      <input
        id="username"
        type="text"
        v-model="name"
        placeholder="Enter Name"
        required
      />
      <div class="form-error">Enter valid name..!</div>
      <label for="email">Email</label>
      <input
        id="email"
        type="email"
        v-model="email"
        placeholder="Email address"
        required
      />
      <div class="form-error">Enter valid email address..!</div>
      <label for="password">Password</label>
      <input
        id="password"
        type="text"
        v-model="password"
        placeholder="password"
        required
      />
      <div class="form-error">Enter 6 character password</div>
      <label for="confirmed-password">Confirmed Password</label>
      <input
        id="confirmed-password"
        type="password"
        v-model="confirmedPassword"
        placeholder="password"
        required
      />
      <div class="form-error">Enter valid confirmed password!</div>
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
      email: "",
      password: "",
      confirmedPassword: "",
      name: "",
    };
  },
  methods: {
    Register() {
      
    },
  },
};
</script>