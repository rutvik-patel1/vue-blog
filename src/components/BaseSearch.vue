<template>
  <div>
    <div class="search-input" :class="{ 'error-border': isError }">
      <span class="material-symbols-outlined">search</span>
      <input
        type="text"
        placeholder="Search by title, author and category"
        @keyup.enter="handleSearch"
        v-model.trim="search"
      />
    </div>
    <span v-if="isError" class="error">Enter valid search !!</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      isError: false,
    };
  },
  methods: {
    handleSearch() {
      if (this.search) {
        this.$router.push({ name:'Home', query: Object.assign({}, this.$route.query, { search: this.search }) });
        this.search = "";
      } else {
        this.isError = true;
        setTimeout(() => {
          this.isError = false;
        }, 3000);
      }
    },
  },
};
</script>

<style scoped>
input {
  width: 100%;
  padding: 10px 10px;
  border: none;
  font-size: 16px;
  font-family: inherit;
}
.search-input {
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
}
.search-input span {
  margin: 8px;
}
input:focus {
  outline: none;
}
.error {
  font-weight: 400;
  color: red;
}
.error-border {
  border: 2px solid red;
}
</style>