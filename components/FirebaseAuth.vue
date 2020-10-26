<template>
  <div id="firebaseui-auth-container"></div>
</template>

<script>
import { auth, authProviders } from '~/plugins/firebase'

export default {
  name: 'FirebaseAuth',
  mounted() {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        const firebaseui = require('firebaseui')
        const ui =
          firebaseui.auth.AuthUI.getInstance() ||
          new firebaseui.auth.AuthUI(auth)

        const config = {
          signInOptions: [authProviders.Email, authProviders.Google],
          callbacks: {
            signInSuccessWithAuthResult: (authResult) => {
              window.location.hash = 'register'
              return false
            },
          },
          signInSuccessUrl: 'register',
          signInFlow: 'popup',
          // Terms of service url.
          // tosUrl: '<your-tos-url>',
          // Privacy policy url.
          // privacyPolicyUrl: '<your-privacy-policy-url>',
        }

        ui.start('#firebaseui-auth-container', config)
      } else {
        this.$router.push('register')
      }
    })
  },
}
</script>
