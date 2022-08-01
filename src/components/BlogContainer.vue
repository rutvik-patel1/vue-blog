<template>
  <div class="blog-container">
    <div class="main-container">
      <slot name="main"></slot>
    </div>
    <div class="sidebar">
      <slot name="sidebar"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.blog-container {
  display: flex;
  flex-wrap: wrap;
}
.main-container {
  flex: 0 0 70%;
  padding: 30px;
}
.sidebar {
  flex: 0 0 30%;
  padding: 30px;
  padding-left: 10px;
}
@media all and (max-width: 800px) {
  .sidebar {
    flex: 1 0 100%;
    padding-bottom: 0px;
  }
  .main-container {
    flex: 1 0 100%;
    width: 100%;
    padding: 18px;
    padding-top: 0px;
  }
  .blog-container {
    flex-flow: column-reverse;
  }
}
</style>