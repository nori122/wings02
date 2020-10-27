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
        <div class="text-subtitle-1">
          既に発信済みのブログの記事のURLから、翻訳を依頼することができます。
        </div>
      </v-col>
      <v-col cols="8" class="mt-12">
        <div class="text-subtitle-2">
          翻訳を依頼するコンテンツのカテゴリを選択してください。
        </div>
        <v-col cols="12">
          <v-select
            v-model="contentCategory"
            :items="category"
            label="コンテンツのカテゴリ"
            dense
            solo
          ></v-select>
        </v-col>
        <!-- <hr /> -->
        <div class="text-subtitle-2">
          コンテンツのカテゴリで「その他」を選択された場合は、文章の種類について簡単に記述ください
        </div>
        <v-col cols="12">
          <v-text-field
            v-model="categoryDescription"
            placeholder="（例）Wings Blogsの米国Appストアにおける説明文章"
            solo
          ></v-text-field>
        </v-col>
        <div class="text-subtitle-2">
          コンテンツにタイトルをつけてください。このデータは、ご自身の翻訳コンテンツの一覧、検索等で使用されます。
        </div>
        <v-col cols="12">
          <v-text-field
            v-model="contentTitle"
            placeholder="（例）海外のユーザーを獲得したい方へ！英語圏の定番プラットフォーム4選"
            solo
          ></v-text-field>
        </v-col>
        <div class="text-subtitle-2">
          翻訳を依頼するブログ記事を入力してください。
        </div>
        <v-col cols="12">
          <v-text-field
            v-model="contentUrl"
            placeholder="（例）http://www.yoursite.org/your-post"
            solo
          ></v-text-field>
        </v-col>
      </v-col>
      <v-col cols="12">
        <v-row align="center" justify="center">
          <v-col cols="auto" class="mt-5">
            <v-btn dark width="200px" @click="createItem">インポートする</v-btn>
          </v-col>
          <v-col cols="12">
            <div class="text-center text-caption">
              あなたが所有権を持つ記事のみをインポートしてください
            </div>
            <div class="text-center text-caption">
              次の画面で登録を完了させます。
            </div>
          </v-col>
        </v-row>
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
    category: [
      'ブログ記事',
      'ホームページ',
      'Webアプリ',
      'ネイティブアプリ',
      'その他（以下に詳細を記載）',
    ],
    contentCategory: '',
    categoryDescription: '',
    contentTitle: '',
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
          contentCategory: this.contentCategory,
          categoryDescription: this.categoryDescription,
          contentTitle: this.contentTitle,
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
