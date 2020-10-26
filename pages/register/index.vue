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
          既に発信済みのブログの記事のURLから、翻訳を依頼することができます。
        </div>
      </v-col>
      <v-col cols="12" class="mt-12">
        <div class="text-center text-subtitle-2">
          翻訳を依頼するブログ記事を入力してください。
        </div>
      </v-col>
      <v-col cols="12">
        <v-row justify="center"
          ><v-col cols="8">
            <v-text-field
              v-model="contentUrl"
              placeholder="http://www.yoursite.org/your-post"
              solo
            ></v-text-field> </v-col
        ></v-row>
      </v-col>

      <v-col cols="auto" class="mt-12">
        <v-btn dark width="200px" @click="createItem">インポートする</v-btn>
      </v-col>
      <v-col cols="8" offset="4">
        <div class="text-caption">
          あなたが所有権を持つ記事のみをインポートしてください
        </div>
        <div class="text-caption">次の画面で登録を完了させます。</div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import firebase from 'firebase'
import { mapState } from 'vuex'
import { db } from '~/plugins/firebase'

export default {
  data: () => ({
    contentUrl: '',
  }),
  computed: {
    ...mapState('auth', ['uid', 'username', 'photoUrl']),
  },
  methods: {
    createItem() {
      db.collection('users')
        .doc(this.uid)
        .collection('items')
        .add({
          name: 'Tokyo',
          country: 'Japan',
          contentUrl: this.contentUrl,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then((docRef) => {
          console.log('Document written with ID: ', docRef.id)
          this.$router.push({
            path: '/confirm',
            query: { itemId: docRef.id },
          })
        })
        .catch(function (error) {
          console.error('Error adding document: ', error)
        })
    },
  },
}
</script>
<style scoped>
/* .UrlInputFields {
  width: 70%;
} */
</style>
