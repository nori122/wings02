<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <p class="text-center text-h4">indexページ</p>
      </v-col>
      <v-col cols="auto">
        <v-btn width="120px" to="list">List</v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn width="120px" to="register">register</v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn width="120px" to="confirm">confirm</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  auth: false,
}
</script>
