<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="12">
      <v-btn to="list">List</v-btn>
    </v-col>
    <v-col> <list /> </v-col>
  </v-row>
</template>

<script>
import list from '~/components/list.vue'
export default {
  components: {
    list,
  },
}
</script>
