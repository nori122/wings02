<template>
  <v-row>
    <!-- <v-col>
      <v-progress-linear height="25" value="15">
        <strong>いい感じ</strong>
      </v-progress-linear>
    </v-col> -->
    <v-col cols="12">
      <v-card>
        <v-card-title>
          <span>翻訳コンテンツの一覧</span>
          <v-btn class="ml-10" @click="getItems">テーブルの更新</v-btn>
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
              :width="150"
              :rounded="true"
              :value="item.statusLevel"
            >
              <strong>{{ item.statusDescription }}</strong>
            </v-progress-linear>
          </template>
        </v-data-table>
      </v-card></v-col
    >
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
      search: '',
      headers: [
        {
          text: 'カテゴリ',
          align: 'start',
          sortable: false,
          value: 'contentCategory',
        },
        // { text: 'contentTitle ', value: 'contentTitle' },
        { text: 'タイトル', value: 'contentTitle' },
        // { text: 'categoryDescription ', value: 'categoryDescription' },
        { text: 'URL', value: 'contentUrl' },
        // { text: '作成日 ', value: 'createdAt' },
        { text: 'status ', value: 'status' },
      ],
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
            console.log(doc.id, ' => ', doc.data())
            this.items.push(doc.data())
          })
        })
    },
  },
}
</script>
