<template>
  <v-row>
    <v-col cols="12">
      <v-btn @click="getItems">取得</v-btn>
    </v-col>
    <v-col>{{ items }}</v-col>
  </v-row>
</template>

<script>
// import firebase from 'firebase'
import { mapState } from 'vuex'
import { db } from '~/plugins/firebase'

export default {
  data() {
    return {
      items: [],
    }
  },
  computed: {
    ...mapState('auth', ['uid', 'username', 'photoUrl']),
  },
  methods: {
    getItems() {
      db.collection('users')
        .doc(this.uid)
        .collection('items')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            const item = doc.data()
            console.log(doc.id, ' => ', item)
            this.items.push(item)
          })
        })
    },
  },
}
</script>
