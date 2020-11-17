<template>
  <v-row justify="end">
    <!-- <v-col>
      <v-progress-linear height="25" value="15">
        <strong>いい感じ</strong>
      </v-progress-linear>
    </v-col> -->
    <v-col cols="12" sm="12" class="pt-12">
      <div class="text-h3 secondary--text">翻訳ドキュメントの一覧</div>
    </v-col>
    <v-col cols="auto">
      <v-btn to="register" height="50" dark color="red lighten-2"
        ><span class="text-h6">翻訳を依頼する</span></v-btn
      >
    </v-col>
    <v-col cols="12">
      <v-card>
        <v-card-title>
          <!-- <v-btn class="" @click="getItems">テーブルの更新</v-btn> -->
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>

        <v-data-table :headers="headers" :items="items" :search="search">
          <template v-slot:item.status="{ item }">
            <v-progress-linear
              :background-opacity="0.3"
              :buffer-value="100"
              :height="25"
              :rounded="true"
              :value="item.statusLevel"
            >
              <strong>{{ item.statusDescription }}</strong>
            </v-progress-linear>
          </template>
          <template v-slot:item.output="{ item }">
            <!-- <v-btn text icon to="/http*google.com"> -->
            <v-btn v-if="item.output" icon :href="item.output">
              <v-icon>mdi-download</v-icon>
            </v-btn>
            <!-- <v-btn v-else dark color="red lighten-2">見積もり</v-btn> -->
            <!-- <EstimateItem v-else /> -->

            <!-- </v-btn> -->
          </template>
        </v-data-table>
      </v-card></v-col
    >
  </v-row>
</template>

<script>
// import firebase from 'firebase'
import { mapState } from 'vuex'
// import { db } from '~/plugins/firebase'
// import EstimateItem from '~/components/EstimateItem.vue'

export default {
  data() {
    return {
      // items: [],
      search: '',
      dialog: false,
      headers: [
        {
          text: 'カテゴリ',
          value: 'contentCategory',
        },
        // { text: 'contentTitle ', value: 'contentTitle' },
        { text: 'タイトル', value: 'contentTitle' },
        // { text: 'categoryDescription ', value: 'categoryDescription' },
        // { text: '作成日 ', value: 'createdAt' },
        { text: 'ステータス ', value: 'status', width: '30%' },
        { text: 'input URL', value: 'contentUrl' },
        { text: '翻訳済みコンテンツ', value: 'output' },
      ],
    }
  },
  computed: {
    ...mapState('auth', ['uid', 'username', 'photoUrl', 'items']),
    // ...mapState('list', ['items']),
  },
  created() {
    this.$store.dispatch('auth/getItems')
  },
  // methods: {
  //   getItems() {
  //     db.collection('users')
  //       .doc(this.uid)
  //       .collection('items')
  //       .get()
  //       .then((querySnapshot) => {
  //         querySnapshot.forEach((doc) => {
  //           // doc.data() is never undefined for query doc snapshots
  //           console.log(doc.id, ' => ', doc.data())
  //           this.items.push(doc.data())
  //         })
  //       })
  //   },
  // },
}
</script>
