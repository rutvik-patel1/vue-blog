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
          <h2>Sidebar</h2>
      </template>
    </blog-container>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import BlogContainer from '../components/BlogContainer.vue'
import BaseCard from '../components/BaseCard.vue'
export default {
  name: 'Home',
  components:{
    NavBar,
    BlogContainer,
    BaseCard
  }

}
</script>
