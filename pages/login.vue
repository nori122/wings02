<template>
  <div>
    <v-card class="pa-5">
      <p class="text-center">ユーザー登録/ログイン</p>
      <firebase-auth />
    </v-card>
  </div>
</template>

<script>
import FirebaseAuth from '@/components/FirebaseAuth'

export default {
  name: 'Login',
  components: {
    FirebaseAuth,
  },
}
</script>
