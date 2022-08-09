<template>
  <div class="category">
    <div class="category-title">Popular Categories</div>
    <div class="category-mobile">
      <span>
        <router-link :to="{ name: 'Home' }" active-class="active-link" exact>
          <div class="category-badge">All</div>
        </router-link>
      </span>
      <span v-for="(item, index) in category" :key="index">
        <router-link
          
          :to="{ query: Object.assign({}, existingQueries, { category: item }) }"
          active-class="active-link"
          exact
        >
          <div class="category-badge">
            {{ item }}
          </div>
        </router-link>
      </span>
    </div>
    <br />
  </div>
</template>

<script>
import category from '../utils/category';
export default {
  data() {
    return {
      category
    };
  },
  computed:{
    existingQueries(){
      return this.$route.query
    }
  }
};
</script>

<style scoped>
.category {
  margin-top: 25px;
}
.category-badge {
  text-align: center;
  display: inline-flex;
  border: 1px solid #ccc;
  padding: 6px 15px;
  margin: 5px;
}
.category-badge:hover {
  background-color: #ddd;
}
a {
  color: inherit;
}
.category-title {
  font-weight: 600;
  margin-bottom: 20px;
  margin-left: 3px;
}
.active-link .category-badge {
  background-color: #ddd;
}

@media all and (max-width: 800px) {
  .category-mobile {
    display: flex;
    overflow-x: scroll;
  }
}
</style>
