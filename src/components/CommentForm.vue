<template>
  <div>
    <form @submit.prevent="postAComment" v-if="isAuthenticated">
      <div>
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          v-model.trim="form.name"
          name="name"
          required
        />
      </div>
      <br />
      <div>
        <label for="comment">Comment</label>
        <textarea
          name="comment"
          id="comment"
          v-model.trim="form.comment"
          rows="3"
          placeholder="write comment here..."
          required
        ></textarea>
      </div>
      <div>
        <button type="submit">Post A Comment</button>
      </div>
    </form>
    <div class="login-btn-comment" v-else>
      <router-link to="/login">Please Login To Comment</router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      form: {
        name: "",
        comment: "",
      },
    };
  },
  computed: {
    ...mapState(["isAuthenticated"]),
  },
  methods: {
    postAComment() {
      const data = {
        name: this.form.name,
        comment: this.form.comment,
        timestamp: new Date().toDateString(),
      };
      this.$emit("postComment", data);
      this.form.name = "";
      this.form.comment = "";
    },
  },
};
</script>

<style scoped>
label {
  display: block;
}
textarea {
  width: 100%;
}
form {
  padding: 50px;
}
input:focus,
textarea:focus {
  outline: none;
  border: 1px solid blue;
}
input,
textarea {
  border: none;
  background-color: rgb(241, 241, 241);
  padding: 12px 12px;
  border-radius: 4px;
  font-family: inherit;
}
textarea {
  resize: none;
}
button {
  /* margin: 10px; */
  cursor: pointer;
  margin-top: 32px;
  padding: 12px 12px;
  background: darkcyan;
  color: white;
  border: none;
  border-radius: 4px;
}
a {
  /* margin: 10px; */

  cursor: pointer;
  margin-top: 32px;
  padding: 12px 12px;
  background: darkcyan;
  color: white;
  border: none;
  border-radius: 4px;
}
.login-btn-comment {
  margin-bottom: 10px;
  padding: 50px;
  text-align: center;
}
button:hover {
  background: rgb(0, 105, 105);
}
</style>