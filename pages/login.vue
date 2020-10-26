<template class="wrapper">
  <v-row justify="center" align="center">
    <v-col class="my-5 pa-10" cols="12" md="5">
      <p class="text-h3 my-10">Wingsへようこそ</p>
      <p>
        WINGSは、個人クリエイターの発信を世界中の人々に届けるために創られました。
      </p>
      <p>
        高精度翻訳エンジンと、世界中のネイティブスピーカーの校正により、あなたの文章を全世界へ届けましょう。
      </p>
    </v-col>
    <v-col cols="12" md="5">
      <v-card class="py-12">
        <p class="text-h4 text-center primary--text py-10 mb-10">
          Wingsにログインする
        </p>
        <firebase-auth />
      </v-card>
    </v-col>
  </v-row>
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
<style scoped>
.wrapper {
  background-color: red;
}
</style>
