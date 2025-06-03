<script lang="ts" setup>
import AppContainer from '@/components/AppContainer.vue'
import AppLink from '@/components/AppLink.vue'
import Button from '@/components/ui/Button.vue'
import { motion } from 'motion-v'
import { onMounted } from 'vue'

// Preload image
onMounted(() => {
  const link = document.createElement('link')
  link.rel = 'preload'
  link.as = 'image'
  link.href = '/images/Ankara-Fabric.png'
  document.head.appendChild(link)
})
</script>

<template>
  <section
    class="bg-[url('/images/Ankara-Fabric.png')] object-cover bg-cover bg-no-repeat h-screen bg-black/50 bg-blend-darken"
    type="image/png"
  >
    <AppContainer class="py-16">
      <section class="grid place-items-center h-screen">
        <motion.div
          :animate="{ opacity: 1, y: 0 }"
          :initial="{ opacity: 0, y: 100 }"
          :transition="{ duration: 0.6, delay: 0.9, ease: 'easeIn' }"
          class="text-white grid place-items-center text-center"
        >
          <h1 class="text-4xl md:text-7xl font-raleway font-bold">
            Quality Products for Our Esteemed Mothers
          </h1>
          <p class="md:text-lg text-blood-red">
            Discover carefully selected items perfect for Nigerian women aged 40-90. Comfort,
            quality, and tradition combined.
          </p>
        </motion.div>

        <!--      button-->
        <div class="flex items-center space-x-4">
          <AppLink to="/products">
            <Button class="rounded-lg">Shop Now</Button>
          </AppLink>

          <AppLink to="/about">
            <Button class="rounded-lg text-white border-white" variant="secondary"
              >Learn More
            </Button>
          </AppLink>
        </div>
        <!--      button-->
      </section>
    </AppContainer>
  </section>
</template>

<style scoped></style>
