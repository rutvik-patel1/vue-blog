<template>
  <div class="profile-card">
    <div class="profile-img">
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="profile pic">
    </div>
    <div class="author-name">{{blog.author}}</div>
    <div class="profile-info">
        <ul>
            <li><span class="material-symbols-outlined">visibility</span>{{blog.views}} Views</li>
            <li><span class="material-symbols-outlined">rss_feed</span>{{blog.total_blogs}} Blogs</li>
            <li><span class="material-symbols-outlined">forum</span>{{blog.total_comments}} Comments</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    props:['blog'],
}
</script>

<style scoped>
.profile-card{
    margin-top:25px;
}
.profile-img{
    text-align: center;
}
img{
    height: 88px;
    width: 88px;
    border-radius: 50%;
    border: 1px solid #777;
}
.author-name{
    text-align: center;
    margin-top: 10px;
    font-weight: 600;
    font-size: large;
}
.profile-info{
    margin-top: 10px;
}
li{
    display: flex;
    margin-top: 18px;
    margin-left: 110px;
    font-weight: 300;
    color: #555;
}
</style>