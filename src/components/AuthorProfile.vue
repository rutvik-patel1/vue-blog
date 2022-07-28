<template>
  <div class="profile-card">
    <div class="profile-img">
        <img src="https://miro.medium.com/fit/c/88/88/1*GLHO0ylz3WlylsOgC_GKIQ.jpeg" alt="profile pic">
    </div>
    <div class="author-name">Rutvik Patel</div>
    <div class="profile-info">
        <ul>
            <li><span class="material-symbols-outlined">visibility</span>10028 Views</li>
            <li><span class="material-symbols-outlined">rss_feed</span>56 Blogs</li>
            <li><span class="material-symbols-outlined">forum</span>125 Comments</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {

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