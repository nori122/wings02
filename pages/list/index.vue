<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12">
      <p>testにゃーん</p>
      <p>uid: {{ uid }}</p>
      <p>username: {{ username }}</p>
      <p>photoUrl: {{ photoUrl }}</p>
    </v-col>
    <v-col>
      <v-btn @click="createUser">書き込み</v-btn>
    </v-col>
  </v-row>
</template>

<script>
import firebase from 'firebase'
import { mapState } from 'vuex'
import { db } from '~/plugins/firebase'

export default {
  computed: {
    ...mapState('auth', ['uid', 'username', 'photoUrl']),
  },
  methods: {
    createUser() {
      db.collection('users')
        .doc(this.uid)
        .set({
          uid: this.uid,
          username: this.username,
          photoUrl: this.photoUrl,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(function () {
          console.log('Document successfully written!')
        })
        .then(function () {
          // window.location.href = 'register'
          window.location.href = 'https://wings02-acd9a.web.app/register'
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })
    },
  },
}
</script>
