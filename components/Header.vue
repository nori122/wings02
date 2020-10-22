<template>
<v-toolbar>
    <v-spacer>
    <v-toolbar-items hidden-sm-and-down>
      <v-btn {{username}}></v-btn>
      <v-btn v-if="isLoggedIn" @click="logout"> Logout </v-btn>
    </v-toolbar-items>
</v-toolbar>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapState("auth", [
      "username"
    ]),
    ...mapGetters("auth", [
      "isLoggedIn"
    ])
  },
  methods: {
    ...mapActions("auth", ["logout"])
  }
}
</script>
