<template>
  <div class="card">
    <div><h2>Title</h2></div>
    <div>
      <span class="material-symbols-outlined"> schedule </span>26july 2022
    </div>
    <div >
      <div>
        <img
          src="https://image.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-260nw-1029506242.jpg"
          alt="blog-post"
        />
      </div>
      <div>
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </div>
        <div><button class="read-btn">Read More</button></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
}
img{
  width:100%;
}
.read-btn{
  padding:4px 8px;
  border:none;
  border-radius: 4px;
}
.read-btn:hover{
   background-color: rgb(184, 184, 184);
}
</style>