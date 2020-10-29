<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="red lighten-2"
        dark
        v-bind="attrs"
        v-on="on"
        @click="estimateItem"
      >
        見積もり依頼（無料）
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="headline grey lighten-2">
        見積もり依頼を受領しました☺️
      </v-card-title>

      <v-card-text class="my-5">
        見積もりをご依頼いただきありがとうございます。<br />
        48時間以内にご登録のメールアドレスまで見積もりをお送りします。
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn to="list" color="primary" text @click="dialog = false">
          一覧に戻る
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from 'vuex'
import { db } from '~/plugins/firebase'

export default {
  data() {
    return {
      dialog: false,
      itemId: this.$route.query.itemId,
    }
  },
  computed: {
    ...mapState('auth', ['uid', 'username', 'photoUrl']),
  },
  methods: {
    estimateItem() {
      db.collection('users')
        .doc(this.uid)
        .collection('items')
        .doc(this.itemId)
        .set(
          {
            statusDescription: '見積もり中',
            statusLevel: 30,
          },
          { merge: true }
        )
        .then((docRef) => {
          console.log('Document written with ID: ', this.itemId)
        })
        .catch(function (error) {
          console.error('Error adding document: ', error)
        })
    },
  },
}
</script>
