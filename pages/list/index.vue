<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col> <ItemList /> </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ItemList from '~/components/ItemList.vue'
export default {
  components: {
    ItemList,
  },
}
</script>
