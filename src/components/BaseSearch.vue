<template>
  <div class="search-input">    
    <span class="material-symbols-outlined">search</span>
    <input type="text" placeholder="Search by title, author and category">
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

input{
    width: 100%;
    padding:10px 10px;
    border: none;
}
.search-input{
    border:1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
}
.search-input span {
    margin:8px;
}
input:focus{
    outline:none
}

</style>