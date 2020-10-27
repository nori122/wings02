<template>
  <v-container fluid fill-height class="cyan lighten-5">
    <v-row justify="center" align="center">
      <v-col class="my-md-5 pa-md-10" cols="12" md="5">
        <p class="text-h4 text-md-h3 my-md-10">Wingsへようこそ</p>
        <p>
          WINGSは、個人クリエイターの発信を世界中の人々に届けるために創られました。
        </p>
        <p>
          高精度翻訳エンジンと、世界中のネイティブスピーカーの校正により、あなたの文章を全世界へ届けましょう。
        </p>
      </v-col>
      <v-col cols="12" md="5">
        <v-card class="py-5 py-md-5">
          <p
            class="text-h5 text-md-h4 text-center primary--text py-md-10 mb-10 mb-md-10"
          >
            Wingsにログインする
          </p>
          <firebase-auth />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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
