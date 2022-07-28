<template>
  <div>
    <nav-bar></nav-bar>
    <blog-container>
      <template v-slot:main>
          <base-card></base-card>
          <base-card></base-card>
          <base-card></base-card>
      </template>
      <template v-slot:sidebar>
          <base-search></base-search>
      </template>
    </blog-container>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import BlogContainer from '../components/BlogContainer.vue'
import BaseCard from '../components/BaseCard.vue'
import BaseSearch from '../components/BaseSearch.vue'
export default {
  name: 'Home',
  components:{
    NavBar,
    BlogContainer,
    BaseCard,
    BaseSearch
  }

}
</script>
