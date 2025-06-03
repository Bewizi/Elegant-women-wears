<script lang="ts" setup>
import AppContainer from '@/components/AppContainer.vue'
import AppLink from '@/components/AppLink.vue'
</script>

<template>
  <AppContainer class="h-screen py-12 grid place-content-center text-center">
    <div class="mx-auto mb-5">
      <img src="/404.jpg" alt="A 404 Image" class="block w-[200px]" />
    </div>
    <h1 class="font-raleway font-extrabold text-6xl mb-6">Page cannot be found</h1>
    <p class="text-medium font-roboto text-xl mb-5">Please go to the correct url</p>
    <div>
      <AppLink to="/" class="text-blue-600 font-roboto">Go Back Home</AppLink>
    </div>
  </AppContainer>
</template>

<style scoped></style>
