<script lang="ts" setup>
defineProps<{
  to: string
}>()
</script>

<template>
  <router-link :to="to">
    <slot />
  </router-link>
</template>

<style scoped></style>
