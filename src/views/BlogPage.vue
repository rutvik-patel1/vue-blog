<template>
  <div>
    <nav-bar></nav-bar>
    <blog-container>
        <template v-slot:main>
          <blog-card></blog-card>
        </template>
        <template v-slot:sidebar>
            <base-search></base-search>
            <author-profile></author-profile>
        </template>
    </blog-container>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import BlogContainer from '../components/BlogContainer.vue'
import BlogCard from '../components/BlogCard.vue'
import AuthorProfile from '../components/AuthorProfile.vue'
import BaseSearch from '../components/BaseSearch.vue'
export default {
components:{
    NavBar,
    BlogContainer,
    BlogCard,
    BaseSearch,
    AuthorProfile
}
}
</script>

<style>

</style>