<template>
  <v-container fluid class="contact-wrapper secondary--text">
    <h1 align="center" class="mb-5 font-weight-medium">CONTACT</h1>
    <p class="ma-5">サービスや値段についてなど、お気軽にお問い合わせください</p>
    <login />
    <div class="text-center my-6">
      <v-btn
        rounded
        color="accent"
        href="https://forms.gle/7pQ6PnjvHtTj3Bb6A"
        dark
        class="my-12"
        >お問い合わせ
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import login from '@/components/login'

export default {
  components: {
    login,
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
