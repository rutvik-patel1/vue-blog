<template>
  <div>
    <form @submit.prevent="postAComment">
        <div>
            <label for="name">Name</label>
            <input type="text" id="name" v-model.trim="form.name" name="name" required>
        </div>
        <br>
        <div>
            <label for="comment">Comment</label>
            <textarea name="comment" id="comment" v-model.trim="form.comment" rows="5" placeholder="write comment here..." required></textarea>
        </div>
        <div>
            <button type="submit">Post A Comment</button>
        </div>
    </form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            form:{
                name:'',
                comment:'',
            }
        }
    },
    methods:{
        postAComment(){
            const data = {
                name:this.form.name,
                comment:this.form.comment,
                timestamp: Date.now()
            }
            this.$emit('postComment',data);
            this.form.name = ""
            this.form.comment = ""
        }
    }
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
button{
	/* margin: 10px; */
	cursor: pointer;
    margin-top: 32px;
	padding: 8px 10px;
	background: darkcyan;
	color: white;
	border: none;
    border-radius: 4px;
}
button:hover{
    background: rgb(0, 105, 105);
}
</style>