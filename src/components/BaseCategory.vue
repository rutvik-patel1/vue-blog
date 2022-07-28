<template>
  <div class="category">
    <div class="category-title">Popular Categories</div>
    <div v-for="(item, index) in category" :key="index" class="category-badge">
      <router-link :to="{ name: 'Home', query: { category: item } }">{{
        item
      }}</router-link>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      category: [
        "Food",
        "Travel",
        "Health",
        "LifeStyle",
        "Fashion",
        "Beauty",
        "Music",
        "Business",
        "Sports",
        "News",
        "Movies",
        "Religion",
        "Political",
        "Art",
        "Design",
        "Book",
        "Photography",
      ],
    };
  },
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
  padding: 6px 8px;
  margin: 5px;
}
.category-badge:hover {
  background-color: #ddd;
}
a {
  color: inherit;
}
.category-title{
  font-weight: 600;
  margin-bottom: 20px;
  margin-left:3px;
}
</style>
