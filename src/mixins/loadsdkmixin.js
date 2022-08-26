/* eslint-disable no-undef */
export default {
  mounted: function () {

    google.accounts.id.initialize({
      client_id: "1065646401251-oa698lqf8rino8i62vg5lppb6jv60av3.apps.googleusercontent.com",
      callback: this.handleCredentialResponse,
    });
    google.accounts.id.renderButton(
      document.getElementById("signin_button"),
      { theme: "outline", size: "large" } // customization attributes
    );

    google.accounts.id.prompt();

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

  },
}