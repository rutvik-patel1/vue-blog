<template>
  <div>
    <nav-bar></nav-bar>
    <div class="not-found">
      <h1>404 Not Found</h1>
      <router-link to="/">Back to home.....</router-link>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
export default {
  components:{
    NavBar
  }
};
</script>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 200px;
}
</style>