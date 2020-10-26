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
        <v-data-table :headers="headers" :items="desserts" :search="search">
          <template v-slot:item.fat="{ item }">
            <v-progress-linear
              :background-opacity="0.3"
              :buffer-value="100"
              :height="25"
              :width="150"
              :rounded="true"
              :value="item.statusLevel"
            >
              <strong>{{ item.status }}</strong>
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
          text: '最初の項目',
          align: 'start',
          sortable: false,
          value: 'contentUrl',
        },
        // { text: 'contentUrl', value: 'contentUrl' },
        // { text: 'name ', value: 'name' },
        // { text: 'country ', value: 'country' },
        // { text: 'createdAt ', value: 'createdAt' },
        { text: 'Fat (g)', value: 'fat' },
      ],
      desserts: [
        {
          name: 'test',
          calories: 159,
          fat: 6.0,
          status: '見積もり中',
          statusLevel: 25,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          status: '翻訳中',
          statusLevel: 50,
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
