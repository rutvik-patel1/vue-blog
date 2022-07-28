<template>
  <div>
    <form>
        <div>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required>
        </div>
        <div>
            <label for="comment">Comment</label>
            <textarea name="comment" id="comment" rows="5" placeholder="write comment here..."></textarea>
        </div>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
label{
    display: block;
}
textarea{
    width: 100%;
}
form{
    padding:50px;
}
input:focus,textarea:focus{
    outline:none;
    border:1px solid blue;
}
input, textarea{
    border:none;
    background-color: rgb(241, 241, 241);
    padding:10px 8px;
    border-radius:4px;
}
textarea {
   resize: none;
}

</style>