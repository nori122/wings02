<template>
  <div>
    <v-btn color="blue" outlined @click.stop="dialog = true"> ログイン </v-btn>
    <v-dialog v-model="dialog" max-width="340">
      <v-card class="pa-7">
        <firebase-auth />
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import FirebaseAuth from '@/components/FirebaseAuth'

export default {
  components: {
    FirebaseAuth,
  },
  data() {
    return {
      dialog: false,
    }
  },
}
</script>
<style scoped>
.contact-wrapper {
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
