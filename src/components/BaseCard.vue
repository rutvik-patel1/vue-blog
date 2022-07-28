<template>
  <div class="card d-flex" @click="handleClick">
    <div class="card-container-main">
      <div class="card-title"><h2>Title</h2></div>
      <div class="d-flex author-name text-italic align-items">
        <span class="material-symbols-outlined"> history_edu </span>Rutvik Patel
      </div>
      <div class="info-text">
        <div class="d-flex align-items"><span class="material-symbols-outlined"> schedule </span><span style="color:rgb(122, 121, 121)">26july 2022 </span>&#8226; <span class="material-symbols-outlined">
      forum
      </span> <span style="color:rgb(122, 121, 121)">785 comments</span> </div>
      </div>
      <div class="card-text-container">
        <div>
          <div class="blog-content-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.<a href="#" class="">...Read more</a>
          </div>
        </div>
      </div>
    </div>
    <div class="img-container">
        <img
          src="https://image.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-260nw-1029506242.jpg"
          alt="blog-post"
        />
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    handleClick(){
      this.$router.push({ name: 'Blogpage', params: { id:1 } })
    }
  }
};
</script>

<style scoped>
.card-container-main{
  flex:0 0 60%;
}
.img-container{
  flex:0 0 40%;
}
.card {
  border: 1px solid #ccc;
  cursor: pointer;
  /* box-shadow: 0 5px 12px rgba(0, 0, 0, 5%); */
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;
  display: flex;
}
.card:hover {
box-shadow: 0 5px 12px rgba(0, 0, 0, 15%);
border: none;
}
a {
  color:rgb(156, 156, 156)
}
.card-text-container {
  display: flex;
}
@media all and (max-width: 800px) {
  .card-text-container {
    display: block;
  }
}
img {
  width: 100%;
}
.d-flex{
  display: flex;
}
.author-name{
  margin-bottom: 10px;
  color: rgb(122, 121, 121);
}
.material-symbols-outlined{
  color:rgb(122, 121, 121);
  font-size: 16px;
}
.align-items{
  align-items: center;
}
.info-text{
  font-size: 14px;
  margin-bottom: 10px;
}
.text-italic{
  font-style: italic;
}
span{
  margin:0 5px;
}
.blog-content-text{
  text-align: justify;
  margin-right:20px;
}
.card-title{
  padding: 0 7px;
  font-style: italic;
}


</style>
