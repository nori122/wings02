<template>
  <v-app>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-img src="img/icon.png" max-height="40" max-width="40" contain></v-img>
      <v-img src="img/wings.png" max-height="40" max-width="90" contain></v-img>
      <v-spacer />
      <login />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="mt-4 wings">Wings</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          @click.prevent="onClick(item.path)"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <!-- <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>-->
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }} {{ title }}</span>
    </v-footer>
  </v-app>
</template>
<style scoped>
.wings {
  font-family: 'Kalam', serif;
  font-size: 40px;
}
</style>
<script>
import login from '@/components/login'

export default {
  components: {
    login,
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Top',
          path: '#Hero',
        },
        {
          icon: 'mdi-lightbulb-on-outline',
          title: 'Vision',
          path: '#Vision',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Service',
          path: '#Service',
        },
        {
          icon: 'mdi-post-outline',
          title: 'ブログ',
          path: '#Blogs',
        },
        {
          icon: 'mdi-message-text-outline',
          title: 'お問い合わせ',
          path: '#Contact',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'WINGS',
    }
  },
  methods: {
    isInternalLink(path) {
      return !/^https?:\/\//.test(path)
    },
    onClick(path) {
      if (this.isInternalLink(path)) {
        this.$router.push(path)
      } else {
        location.href = path
      }
    },
  },
}
</script>
