<template>
  <div>
    <nav-bar></nav-bar>
    <blog-container>
      <template v-slot:main>
        <base-card
          v-for="data in blogs"
          :key="data.id"
          :blog="data"
        ></base-card>
        <div v-if="blogs.length === 0">
          No data found..! Try Something else....
        </div>
      </template>
      <template v-slot:sidebar>
        <base-search></base-search>
        <base-category></base-category>
      </template>
    </blog-container>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import BlogContainer from "../components/BlogContainer.vue";
import BaseCard from "../components/BaseCard.vue";
import BaseSearch from "../components/BaseSearch.vue";
import BaseCategory from "../components/BaseCategory.vue";
import { getAllBlog } from "../api/blog";

export default {
  name: "Home",
  components: {
    NavBar,
    BlogContainer,
    BaseCard,
    BaseSearch,
    BaseCategory,
  },
  created() {
    this.fetchBlogs();
  },
  data() {
    return {
      allBlogs: [],
      category: "",
      search: "",
    };
  },
  methods: {
    fetchBlogs() {
      getAllBlog()
        .then((res) => {
          this.allBlogs = res.data;
          this.category = this.$route.query.category;
          this.search = this.$route.query.search;
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
  },
  computed: {
    blogs() {
      if(this.category && this.search){
        return this.allBlogs.filter((each) => each.category === this.category).filter(
          (each) =>
            each.title.toLowerCase().includes(this.search.toLowerCase())||
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
            each.title.toLowerCase().includes(this.search.toLowerCase())||
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
        this.category = to.query.category;
        this.search = to.query.search;
      },
      deep: true,
    },
  },
};
</script>
