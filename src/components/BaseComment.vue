<template>
  <div class="comment-card">
      <div class="comment">
        <h4>Rutvik </h4>
        <p class="timestamp">{{new Date().toDateString()}}</p>
        <p>WonderFul article !!!!!</p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.comment{
  position: relative;
  padding: 10px 10px;
  background: #efefef;
  border-radius: 10px;
  margin-bottom: 10px;
}
.timestamp{
    color: #777;
    font-size: 12px;
    position: absolute;
    right: 20px;
    top: 10px;}
h4, p{
      margin: 3px 10px;
      font-size: 15px;
  }
.comment-card{
    padding:5px 50px;
}
</style>