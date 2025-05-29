<script lang="ts" setup>
import AppContainer from '@/components/AppContainer.vue'
import AppLink from '@/components/AppLink.vue'
</script>

<template>
  <AppContainer>
    <h1>Page cannot be found</h1>
    <p>Please go to the correct url</p>
    <div>
      <AppLink to="/">Go Back Home</AppLink>
    </div>
  </AppContainer>
</template>

<style scoped></style>
