<template>
  <div id="firebaseui-auth-container"></div>
</template>

<script>
// import * as firebaseui from 'firebaseui'
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
              window.location.href = '../list'
              return false
            },
          },
          signInSuccessUrl: '../list',
          signInFlow: 'popup',
          // Terms of service url.
          // tosUrl: '../tos',
          // Privacy policy url.
          // privacyPolicyUrl: '../privacyPolicy',
        }

        ui.start('#firebaseui-auth-container', config)
      } else {
        this.$router.push('../list')
      }
    })
  },
}
</script>
