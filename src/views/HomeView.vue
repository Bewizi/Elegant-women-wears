<script lang="ts" setup>
import AppContainer from '@/components/AppContainer.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import CTASection from '@/components/sections/CTASection.vue'
import ProductCard from '@/components/ProductCard.vue'
import { onMounted, ref } from 'vue'
import type { Product } from '@/types'
import { allProducts } from '@/server/httpClient'

const featuredProducts = ref<Product[] | null>([])
const loading = ref<boolean>(true)
const error = ref<string>('')

onMounted(async () => {
  loading.value = true
  try {
    const data = await allProducts()
    console.log('Fetched Products:', data)

    featuredProducts.value = data.slice(0, 6)
  } catch (e) {
    // console.log('Failed fetching all products', e)
    error.value = `Failed to fetch products: ${e}`
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <main>
    <HeroSection />

    <!--    FEATURED PRODUCTS-->
    <AppContainer class="mt-32">
      <div>
        <h2 class="text-3xl font-bold mb-12 text-center text-gray-800">Featured Products</h2>

        <div v-if="loading" class="text-center py-12">Loading Products ...</div>

        <div v-else-if="error">{{ error }}</div>

        <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard v-for="product in featuredProducts" :key="product.id" :product="product" />
        </div>
      </div>
    </AppContainer>

    <CTASection />
  </main>
</template>
