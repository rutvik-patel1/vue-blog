/* eslint-disable no-undef */
export default {
  mounted() {

    google.accounts.id.initialize({
      client_id: "1065646401251-oa698lqf8rino8i62vg5lppb6jv60av3.apps.googleusercontent.com",
      cancel_on_tap_outside: false,
      callback: this.handleCredentialResponse,
    });
    google.accounts.id.renderButton(
      document.getElementById("signin_button"),
      { theme: "outline", size: "large",text:"continue_with" } // customization attributes
    );

    // google.accounts.id.prompt();
    google.accounts.id.prompt((notification) => {
      if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
          // try next provider if OneTap is not displayed or skipped
          console.log("not displayed")
      }
     });

    function loadFBsdk(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
      console.log("loaded")
    }

    loadFBsdk(document, 'script', 'facebook-jssdk')

  },
}