<template>
  <div class="suggestion-blog">
    <div class="suggestion-title">Suggestion Based On Your Search...</div>
    <BaseCard :blog="blogData" />
  </div>
</template>

<script>
import { getBlogById } from "../api/blog";
import BaseCard from "../components/BaseCard.vue";
export default {
  components: { BaseCard },
  created() {
    this.fetchBlog();
  },
  data() {
    return {
      blogData: {},
    };
  },
  methods: {
    handleClick() {
      this.$router.push({ name: "Blogpage", params: { id: this.blogId } });
    },
    fetchBlog() {
      this.blogId = Math.floor(Math.random() * 11) + 1;
      getBlogById(this.blogId).then((res) => {
        if (res.data) {
          console.log(res.data);
          this.blogData = res.data;
        }
      });
    },
  },
  watch: {
    $route: {
      handler: function () {
        this.fetchBlog();
      },
      deep: true,
    },
  },
};
</script>

<style scoped>

.suggestion-blog {
  margin-top: 20px;
}
.suggestion-title {
  font-weight: 600;
  margin-bottom: 20px;
  margin-left: 3px;
}
</style>
