<template>
  <v-container fluid>
    <v-row class="mx-12" justify="center" align="center" align-content="start">
      <v-col cols="12" sm="12" class="pt-12">
        <div class="text-h3">翻訳ドキュメントの追加</div>
      </v-col>
      <v-col cols="12">
        <div class="text-h5">URLからインポート</div>
        <v-divider></v-divider>
      </v-col>
      <v-col cols="12" class="ma-5">
        <div class="text-center text-subtitle-1">
          ドキュメントをインポートしました。：{{ this.$route.query.itemId }}
        </div>
      </v-col>
      <v-col cols="12" class="mt-12">
        <div class="text-center text-subtitle-2">
          続けて見積もりを行いますか？
        </div>
      </v-col>
      <v-col cols="auto">
        <v-btn class="ma-5" to="list">一覧に戻る</v-btn>
        <EstimateItem />
      </v-col>
      <!-- <v-btn @click="estimateItem">テスト</v-btn> -->
    </v-row>
  </v-container>
</template>
<script>
import { mapState } from 'vuex'
import { db } from '~/plugins/firebase'

import EstimateItem from '~/components/EstimateItem.vue'
export default {
  data() {
    return {
      dialog: false,
      itemId: this.$route.query.itemId,
    }
  },
  components: {
    EstimateItem,
  },
  computed: {
    ...mapState('auth', ['uid', 'username', 'photoUrl']),
  },
  methods: {
    uidCheck() {
      console.log(this.itemId)
    },
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
