<template>
  <v-container fluid class="my-5 px-5 px-lg-8" primary>
    <v-row align="center" justify="center" class="ma-2 my-6"
      ><v-col cols="12">
        <h1 align="center" class="my-5 font-weight-medium secondary--text">
          ご利用の流れ
        </h1>
        <!-- <v-card class="mx-auto my-2" max-width="344" outlined>
          <v-img class="service-image pa-3" src="img/mt.svg" />
        </v-card> -->
      </v-col>
      <v-col v-for="(step, i) in steps" :key="i" cols="12" md="6" lg="3">
        <v-card primary height="400px">
          <v-row justify="center">
            <v-col lg="12">
              <v-card-title class="headline"
                ><v-icon class="mr-3" size="28"
                  >mdi-numeric-{{ step.number }}-circle-outline</v-icon
                >{{ step.title }}</v-card-title
              >
              <v-card-text v-text="step.detail"></v-card-text>
            </v-col>
            <v-col cols="10" lg="9">
              <v-img :src="step.src"></v-img>
            </v-col>
          </v-row>
        </v-card> </v-col
    ></v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    steps: [
      {
        number: 1,
        title: '翻訳のお申し込み',
        detail: 'コンタクトフォームからお申し込みください。',
        src: 'img/contact.svg',
      },
      {
        number: 2,
        title: '機械翻訳を実施',
        detail: 'DeepLを使用してブログ記事に対して機械翻訳を行います。',
        src: 'img/mt.svg',
      },
      {
        number: 3,
        title: 'ネイティブチェック',
        detail:
          '英語を母語とするネイティブスピーカーにより、より自然な英語へと校正します。',
        src: 'img/check.svg',
      },
      {
        number: 4,
        title: '翻訳完了',
        detail:
          '翻訳されたコンテンツをお渡しします。世界中の英語話者へ届けましょう。',
        src: 'img/done.svg',
      },
    ],
  }),
}
</script>
