<script lang="ts" setup>
import { RouterView } from 'vue-router'
import Header from '@/components/layouts/AppHeader.vue'
import Footer from '@/components/layouts/AppFooter.vue'
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<style scoped></style>
