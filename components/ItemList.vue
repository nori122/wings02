<template>
  <v-row>
    <v-col cols="12">
      <v-btn @click="getItems">取得</v-btn>
    </v-col>
    <!-- <v-col>{{ items }}</v-col> -->
    <v-col>
      <table>
        <!-- テーブルヘッダー -->
        <thead>
          <tr>
            <th class="id">ID</th>
            <th class="comment">コメント</th>
            <th class="state">状態</th>
            <th class="button">-</th>
          </tr>
        </thead>
        <tbody>
          <!-- [1] ここに <tr> で ToDo の要素を1行づつ繰り返し表示したい -->
        </tbody>
      </table></v-col
    >
    <v-col cols="12">
      <v-card>
        <v-card-title>
          翻訳コンテンツの一覧
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="items"
          :search="search"
        ></v-data-table> </v-card
    ></v-col>
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
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'contentUrl',
        },
        { text: 'contentUrl', value: 'contentUrl' },
        { text: 'name ', value: 'name' },
        { text: 'country ', value: 'country' },
        { text: 'createdAt ', value: 'createdAt' },
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%',
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%',
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%',
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%',
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%',
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%',
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%',
        },
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
