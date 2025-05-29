<script lang="ts" setup>
import AppLink from '@/components/AppLink.vue'

const props = defineProps<{
  category: {
    id: number
    name: string
    image: string
  }
}>()
</script>

<template>
  <AppLink
    :to="`/products?category=${props.category.id}`"
    class="group relative block h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
  >
    <img
      :alt="category.name"
      :src="`/images/categories/${category.image}`"
      class="w-full h-full object-cover"
    />
    <div
      class="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition flex items-center justify-center"
    >
      <h3 class="text-2xl font-bold">{{ category.name }}</h3>
    </div>
  </AppLink>
</template>

<style scoped></style>
