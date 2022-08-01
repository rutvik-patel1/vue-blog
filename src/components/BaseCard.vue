<template>
  <div class="card d-flex" @click="handleClick">
    <div class="card-container-main">
      <div class="card-title">
        <h2 style="font-weight: 400">{{ blogData.title }}</h2>
      </div>
      <div class="d-flex author-name text-italic align-items">
        <span class="material-symbols-outlined"> history_edu </span
        >{{ blogData.author }}
      </div>
      <div class="info-text">
        <div class="d-flex align-items">
          <span class="material-symbols-outlined"> schedule </span
          ><span style="color: rgb(122, 121, 121)">26july 2022 </span>&#8226;
          <span class="material-symbols-outlined"> forum </span>
          <span style="color: rgb(122, 121, 121)"
            >{{ blogData.total_comments }}comments</span
          >&#8226; <span class="material-symbols-outlined">category</span
          ><span style="color: rgb(122, 121, 121)">{{
            blogData.category
          }}</span>
        </div>
      </div>
      <div class="card-text-container">
        <div>
          <div class="blog-content-text">
            {{ blogData.content.substring(0, 200)
            }}<a href="#" class="">...Read more</a>
          </div>
        </div>
      </div>
    </div>
    <div class="img-container">
      <img :src="blogData.image_url" alt="blog-post" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["blog"],
  created() {
    this.blogId = this.blog.id;
    this.blogData = this.blog;
  },
  data() {
    return {
      blogId: "",
      blogData: {},
    };
  },
  methods: {
    handleClick() {
      this.$router.push({ name: "Blogpage", params: { id: this.blogId } });
    },
  },
};
</script>

<style scoped>
.card-container-main {
  flex: 0 0 60%;
}
.img-container {
  flex: 0 0 40%;
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
  box-shadow: 0 5px 12px rgba(0, 0, 0, 10%);
  transform: scale(1.01);
  /* border: none; */
}
a {
  color: rgb(156, 156, 156);
}
.card-text-container {
  display: flex;
  text-align: justify;
}
@media all and (max-width: 800px) {
  .card-text-container {
    display: block;
    padding-bottom: 10px;
  }
  .card-container-main {
    flex: 1 0 100%;
  }
  .img-container {
    flex: 1 0 100%;
  }
  .card {
    flex-wrap: wrap;
  }
}
img {
  width: 324px;
  height: 208px;
  max-width: 100%;
}
.d-flex {
  display: flex;
}
.author-name {
  margin-bottom: 10px;
  color: rgb(122, 121, 121);
}
.material-symbols-outlined {
  color: rgb(122, 121, 121);
  font-size: 16px;
}
.align-items {
  align-items: center;
}
.info-text {
  font-size: 14px;
  margin-bottom: 10px;
}
.text-italic {
  font-style: italic;
}
span {
  margin: 0 5px;
}
.blog-content-text {
  text-align: justify;
  margin-right: 20px;
}
.card-title {
  padding: 0 7px;
  color: hsl(209, 40%, 15%);
  /* font-style: italic; */
}
</style>
