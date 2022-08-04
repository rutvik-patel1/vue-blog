<template>
  <div>
    <nav-bar></nav-bar>
    <blog-container v-if="!(blog && Object.keys(blog).length === 0)">
      <template v-slot:main>
        <blog-card :blog="blog"></blog-card>
      </template>
      <template v-slot:sidebar>
        <base-search></base-search>
        <author-profile :blog="blog"></author-profile>
      </template>
    </blog-container>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import BlogContainer from "../components/BlogContainer.vue";
import BlogCard from "../components/BlogCard.vue";
import AuthorProfile from "../components/AuthorProfile.vue";
import BaseSearch from "../components/BaseSearch.vue";
import { getBlogById } from "../api/blog";
export default {
  components: {
    NavBar,
    BlogContainer,
    BlogCard,
    BaseSearch,
    AuthorProfile,
  },
  created() {
    this.fetchBlogData();
  },
  data() {
    return {
      blog: {},
    };
  },
  methods: {
    fetchBlogData() {
      const id = this.$route.params.id;
      getBlogById(id)
        .then((res) => {
          if(res.data){
            this.blog = res.data;
          }
          else{
            this.$router.push({ name : '404'})
          }
        })
        .catch((err) => {
          console.log("errro", err);
        });
    },
  },
};
</script>

<style></style>
