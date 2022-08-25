<!-- eslint-disable no-undef -->
<!-- eslint-disable no-undef -->
<template >
  <div class="auth-main-container">
    <div class="auth-container">
      <div class="title" style="color: #000">Login</div>
      <form @submit.prevent="login" autocomplete="off">
        <label for="email">Email</label>
        <input
          id="email"
          type="email"
          v-model.trim="email"
          autocomplete="off"
          placeholder="example@gmail.com"
          :style="[
            isSubmitted && isValidEmail ? { border: '1px solid red' } : '',
          ]"
        />
        <div class="form-error" v-if="isSubmitted && isValidEmail">
          Enter valid email.
        </div>
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          v-model.trim="password"
          autocomplete="off"
          placeholder="Enter password"
          :style="[
            isSubmitted && isValidPassword ? { border: '1px solid red' } : '',
          ]"
        />
        <div class="form-error" v-if="isSubmitted && isValidPassword">
          Enter 6 digit password.
        </div>
        <button type="submit">{{ isLoading ? "wait...." : "Sign In" }}</button>
        <br />
      </form>
      <!-- 
      <div
        id="g_id_onload"
        data-client_id="1065646401251-oa698lqf8rino8i62vg5lppb6jv60av3.apps.googleusercontent.com"
        data-callback="handleCredentialResponse"
      ></div> -->
      <!-- <div class="g_id_signin" data-type="standard"></div> -->
      <div style="display: flex">
        <!-- <div id="signin_button"></div> -->
        <!-- <fb:login-button
          scope="public_profile,email"
          onlogin="checkLoginState"
        >
        </fb:login-button> -->
        <!-- <button class="button" @click="logInWithFacebook"> Login with Facebook</button> -->
      </div>
      <router-link to="/signup">
        Don't have an account ?<span class="underline"> Register!</span>
      </router-link>
      <br />
      <router-link to="/resetpass">
        Forget Password ?<span class="underline"> Reset</span>
      </router-link>
    </div>
  </div>
</template>


<script>
import { loginWithFirebase } from "../api/auth";
import Cookies from "js-cookie";
export default {
  created() {
    let script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.defer = true;
    document.body.appendChild(script);
  },
  // mounted: function () {
  //   let googleScript = document.createElement("script");
  //   googleScript.src = "https://accounts.google.com/gsi/client";
  //   document.head.appendChild(googleScript);

  //   window.addEventListener("load", () => {
  //     this.loadFacebookSDK(document, "script", "facebook-jssdk");
  //     console.log(window.google);

      
  //       // eslint-disable-next-line no-undef
  //       window.FB.init({
  //         appId: "374721328011694",
  //         cookie: true,
  //         xfbml: true,
  //         version: "v13.0",
  //       });

  //       // eslint-disable-next-line no-undef
  //       window.FB.AppEvents.logPageView();
   

  //     window.google.accounts.id.initialize({
  //       client_id:
  //         "1065646401251-oa698lqf8rino8i62vg5lppb6jv60av3.apps.googleusercontent.com",
  //       callback: this.handleCredentialResponse,
  //     });
  //     window.google.accounts.id.renderButton(
  //       document.getElementById("signin_button"),
  //       { theme: "outline", size: "large" } // customization attributes
  //     );
  //     window.google.accounts.id.prompt();
  //   });
  // },
  data() {
    return {
      email: "",
      password: "",
      isLoading: false,
      isSubmitted: false,
    };
  },
  methods: {
    // async logInWithFacebook() {
    //   await this.loadFacebookSDK(document, "script", "facebook-jssdk");
    //   await this.initFacebook();
    //   // eslint-disable-next-line no-undef
    //   FB.login().then((res)=>{
    //     console.log(res)
    //   })
    // },
    // async initFacebook() {
    //   window.fbAsyncInit = function() {
    //     window.FB.init({
    //       appId: "374721328011694", //You will need to change this
    //       cookie: true, // This is important, it's not enabled by default
    //       xfbml      : true,
    //       version: "v13.0"
    //     });
    //   };
    // },
    // async loadFacebookSDK(d, s, id) {
    //   var js,
    //     fjs = d.getElementsByTagName(s)[0];
    //   if (d.getElementById(id)) {
    //     return;
    //   }
    //   js = d.createElement(s);
    //   js.id = id;
    //   js.src = "https://connect.facebook.net/en_US/sdk.js";
    //   fjs.parentNode.insertBefore(js, fjs);
    // }

    // async initFacebook() {
    //   // eslint-disable-next-line no-undef

    //   // eslint-disable-next-line no-undef
    //   FB.init({
    //     appId: "374721328011694", //You will need to change this
    //     cookie: true, // This is important, it's not enabled by default
    //     version: "v13.0",
    //   });
    // },
// ,
    handleCredentialResponse(response) {
      console.log("Encoded JWT ID token:2 ", response);
      const responsePayload = this.decodeJwtResponse(response.credential);
      console.log(responsePayload);
      console.log("ID: " + responsePayload.sub);
      console.log("Full Name: " + responsePayload.name);
      console.log("Given Name: " + responsePayload.given_name);
      console.log("Family Name: " + responsePayload.family_name);
      console.log("Image URL: " + responsePayload.picture);
      console.log("Email: " + responsePayload.email);
    },
    decodeJwtResponse(token) {
      let base64Url = token.split(".")[1];
      let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      let jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );
      return JSON.parse(jsonPayload);
    },
    login() {
      this.isSubmitted = true;
      if (this.validate) {
        return false;
      }
      loginWithFirebase(this.email, this.password)
        .then((res) => {
          Cookies.set("idToken", res.data.idToken, { expires: 1 / 1440 });
          Cookies.set("refreshToken", res.data.refreshToken, { expires: 365 });
          this.$router.push({ name: "Home" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  computed: {
    isValidEmail() {
      return (
        this.email == "" ||
        // eslint-disable-next-line no-useless-escape
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          this.email
        ) != true
      );
    },
    isValidPassword() {
      return this.password == "" || this.password.length < 6;
    },
    validate() {
      return this.isValidEmail || this.isValidPassword;
    },
  },
};
</script>


<style>
.auth-container {
  background-color: #fff;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
    5px 5px 29px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: block;
  max-width: 500px;
  text-align: center;
}
.auth-container .title {
  text-align: center;
  font-size: 28px;
  margin: 10px;
  color: #121212;
}
.auth-container input {
  display: block;
  width: -moz-available;
  width: -webkit-fill-available;
  width: 100%;
  padding: 12px;
  font-family: inherit;
  font-size: inherit;
  color: #121212;
  border: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 2px auto;
  margin-bottom: 16px;
}
.auth-container input:focus {
  outline: none;
  border: 1px solid blue;
}
.auth-container button {
  display: block;
  width: 100%;
  padding: 12px;
  font-size: 16px;
  font-family: inherit;
  border: none;
  background-color: rgb(63, 106, 247);
  color: azure;
  border-radius: 8px;
}
.auth-container button:hover {
  background-color: rgb(8, 36, 131);
}
.auth-container label {
  text-align: left;
  display: block;
}
.auth-container form {
  margin-bottom: 20px;
}
.auth-container a {
  font-size: 16px;
  color: #121212;
}
.underline {
  text-decoration: underline;
}
.form-error {
  text-align: initial;
  margin-top: -16px;
  color: red;
  font-size: small;
  margin-bottom: 5px;
}
.red-border {
  border: 1px soilid red !important;
}
.auth-main-container {
  height: 100vh;
  background-color: whitesmoke;
  padding-top: 40px;
}
@media all and (max-width: 800px) {
  .auth-container {
    box-shadow: none;
  }
}
</style>