<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12" class="py-12">
      <div class="text-h3">翻訳ドキュメントの追加</div>
      <div class="text-h5">URLからインポート</div>
      <v-divider></v-divider>
    </v-col>
    <v-col cols="12" class="ma-5">
      <div class="text-center text-subtitle-1">
        既に発信済みのブログの記事のURLから、翻訳を依頼することができます。
      </div>
    </v-col>
    <v-col cols="12" class="mt-12">
      <div class="text-center text-subtitle-2">
        翻訳を依頼するブログ記事を入力してください。
      </div>
    </v-col>
    <v-col cols="10">
      <v-spacer>
        <v-text-field
          placeholder="http://www.yoursite.org/your-post"
          solo
        ></v-text-field>
      </v-spacer>
    </v-col>

    <v-col cols="auto" class="mt-12">
      <v-btn dark width="200px">インポートする</v-btn>
    </v-col>
    <v-col cols="8" offset="4">
      <div class="text-caption">
        インポート後に文章を編集することができます。
      </div>
      <div class="text-caption">
        あなたが所有権を持つ記事のみをインポートしてください
      </div>
    </v-col>
  </v-row>
</template>
