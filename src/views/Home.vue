<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
        <nav-bar></nav-bar>
        <blog-container>
          <template v-slot:main>
            <base-card
              v-for="data in blogs"
              :key="data.id"
              :blog="data"
            ></base-card>
            <div class="no-data-text" v-if="blogs.length === 0">
              No data found..! Try Something else....
            </div>
            <suggestion-blog v-if="blogs.length === 0" />
          </template>
          <template v-slot:sidebar>
            <base-search></base-search>
            <base-category></base-category>
          </template>
        </blog-container>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import BlogContainer from "../layout/BlogContainer.vue";
import BaseCard from "../components/BaseCard.vue";
import BaseSearch from "../components/BaseSearch.vue";
import BaseCategory from "../components/BaseCategory.vue";
import { getAllBlog } from "../api/blog";
import SuggestionBlog from "../components/SuggestionBlog.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    BlogContainer,
    BaseCard,
    BaseSearch,
    BaseCategory,
    SuggestionBlog,
  },
  created() {
    this.fetchBlogs();
  },
  data() {
    return {
      allBlogs: [],
      category: "",
      search: "",
      isLoading: false,
    };
  },
  methods: {
    fetchBlogs() {
      this.isLoading = true;
      getAllBlog()
        .then((res) => {
          this.allBlogs = res.data;
          this.category = this.$route.query.category;
          this.search = this.$route.query.search;
          this.isLoading = false;
        })
        .catch((err) => {
          console.log("err", err);
          this.isLoading = false;
        });
    },
  },
  computed: {
    blogs() {
      if (this.category && this.search) {
        return this.allBlogs
          .filter((each) => each.category === this.category)
          .filter(
            (each) =>
              each.title.toLowerCase().includes(this.search.toLowerCase()) ||
              each.author.toLowerCase().includes(this.search.toLowerCase()) ||
              each.category.toLowerCase().includes(this.search.toLowerCase()) ||
              each.content.toLowerCase().includes(this.search.toLowerCase())
          );
      }
      if (this.category) {
        return this.allBlogs.filter((each) => each.category === this.category);
      }
      if (this.search) {
        return this.allBlogs.filter(
          (each) =>
            each.title.toLowerCase().includes(this.search.toLowerCase()) ||
            each.author.toLowerCase().includes(this.search.toLowerCase()) ||
            each.category.toLowerCase().includes(this.search.toLowerCase()) ||
            each.content.toLowerCase().includes(this.search.toLowerCase())
        );
      }
      return this.allBlogs;
    },
  },
  watch: {
    $route: {
      handler: function (to) {
        this.isLoading = true;
        this.category = to.query.category;
        this.search = to.query.search;
        this.isLoading = false;
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.no-data-text {
  font-size: 28px;
  font-weight: 600;
}
</style>