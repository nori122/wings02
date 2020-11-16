<template>
  <div>
    <Hero id="Hero" />
    <Service id="Service" />
    <Vision id="Vision" />
    <Blogs id="Blogs" />
    <Contact id="Contact" />
    <!-- <firebase-auth /> -->
  </div>
</template>

<script>
// import FirebaseAuth from '@/components/FirebaseAuth'
import Hero from '~/components/Hero.vue'
import Vision from '~/components/Vision.vue'
import Service from '~/components/Service.vue'
import Blogs from '~/components/Blogs.vue'
import Contact from '~/components/Contact.vue'

export default {
  layout: 'landing',
  name: 'Landing',
  components: {
    // FirebaseAuth,
    Hero,
    Vision,
    Service,
    Blogs,
    Contact,
  },
}
</script>
