<script lang="ts" setup>
const props = defineProps<{
  variant?: 'primary' | 'secondary'
}>()

const buttonClasses = {
  primary: 'bg-[#111111] py-2 px-8 text-white',
  secondary: 'border-2 border-[#111111] py-2 px-8 text-[#0F0606]',
}
</script>

<template>
  <button :class="buttonClasses[props.variant || 'primary']">
    <slot />
  </button>
</template>

<style scoped></style>
