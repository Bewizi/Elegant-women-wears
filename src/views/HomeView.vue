<script lang="ts" setup>
import AppContainer from '@/components/AppContainer.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import { motion } from 'motion-v'
import CTASection from '@/components/sections/CTASection.vue'
</script>

<template>
  <main>
    <HeroSection />
    <AppContainer class="mt-10">
      <motion.div :initial="{ opacity: 0 }" :whileInView="{ opacity: 1 }">
        <h1 class="font-raleway font-semibold text-7xl text-blood-red">Elegant Women Wears</h1>
        <p class="font-roboto">
          Discover carefully selected items perfect for Nigerian women aged 40-90. Comfort, quality,
          and tradition combined.
        </p>
      </motion.div>
    </AppContainer>

    <CTASection />
  </main>
</template>
