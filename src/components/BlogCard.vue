<template>
  <div class="card">
    <div class="line"></div>
    <div class="card-container-main">
      <div class="card-title"><h2>The Return of Infectious Disease</h2></div>
      <div
        class="d-flex author-name text-italic align-items justify-content-center"
      >
        <span class="material-symbols-outlined"> history_edu </span>Rutvik Patel
      </div>
      <div class="info-text">
        <div class="d-flex align-items justify-content-center">
          <span class="material-symbols-outlined"> schedule </span
          ><span style="color: rgb(122, 121, 121)">26july 2022 </span>&#8226;
          <span class="material-symbols-outlined"> forum </span>
          <span style="color: rgb(122, 121, 121)">785 comments</span>
        </div>
      </div>
      <div class="img-container">
        <img
          src="https://miro.medium.com/max/700/1*CkIdwzogMMFGLPXX-UuQIQ.jpeg"
          alt="blog-post"
        />
      </div>
      <div class="card-text-container">
        <div>
          <div class="blog-content-text">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
            <br />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <br />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <br />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <br />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <br />

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. >
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
    <div class="blog-comment-container">
      <div class="card-title " style="color: rgb(156, 156, 156);"><h2>Comments</h2></div>
      <comment-form></comment-form>
      <base-comment></base-comment>
      <base-comment></base-comment>
      <base-comment></base-comment>
      <base-comment></base-comment>
      <base-comment></base-comment>
      <base-comment></base-comment>
      <base-comment></base-comment>
    </div>
  </div>
</template>

<script>
import CommentForm from '../components/CommentForm.vue'
import BaseComment from '../components/BaseComment.vue';
export default {
  components:{
    CommentForm,
    BaseComment
  }
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
  position: relative;
  cursor: pointer;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 8%);
  border-radius: 10px;
  padding: 30px 10px;
  margin-bottom: 20px;
}
.card:hover {
  box-shadow: 0 5px 12px rgba(0, 0, 0, 15%);
}
a {
  color: rgb(156, 156, 156);
}
.card-text-container {
  display: flex;
  padding: 30px;
}
@media all and (max-width: 800px) {
  .card-text-container {
    display: block;
  }
}
img {
  width: 100%;
  height: 300px;
  padding: 35px;
}
.d-flex {
  display: flex;
}
.author-name {
  margin-bottom: 10px;
  text-align: center;
  color: rgb(122, 121, 121);
}
.material-symbols-outlined {
  color: rgb(122, 121, 121);
  font-size: 16px;
}
.align-items {
  align-items: center;
}
.justify-content-center {
  justify-content: center;
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
  font-weight: 400;
}
.card-title {
  padding: 0 7px;
  font-style: italic;
  text-align: center;
}
</style>
