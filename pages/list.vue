<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <p>testにゃーん</p>
      <p>{{ username }}</p>
      <v-btn v-if="isLoggedIn" @click="logout">logout</v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('auth', ['username']),
    ...mapGetters('auth', ['isLoggedIn']),
  },
  methods: {
    ...mapActions('auth', ['logout']),
  },
}
</script>
