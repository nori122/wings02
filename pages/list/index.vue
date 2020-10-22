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
import { mapState } from 'vuex'
import { db } from '~/plugins/firebase'

export default {
  computed: {
    ...mapState('auth', ['uid', 'username', 'photoUrl']),
  },
  methods: {
    createUser() {
      db.collection('users')
        .add({
          first: 'Ada',
          last: 'Lovelace',
          born: 1815,
        })

        .then(function (docRef) {
          console.log('Document written with ID: ', docRef.id)
        })
        .catch(function (error) {
          console.error('Error adding document: ', error)
        })
    },
  },
}
</script>
