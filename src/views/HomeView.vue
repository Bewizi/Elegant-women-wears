<script lang="ts" setup>
import AppContainer from '@/components/AppContainer.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import CTASection from '@/components/sections/CTASection.vue'
import ProductCard from '@/components/ProductCard.vue'
import { onMounted, ref } from 'vue'
// import { supabase } from '@/lib/supabaseClient.ts'
import type { Product } from '@/types'
import { httpClient } from '@/server/httpClient'

const featuredProducts = ref<Product[] | null>([])

onMounted(async () => {
  try {
    const response = await httpClient.get('/allProducts')
    console.log('Fetched Products:', response.data)

    featuredProducts.value = response.data.slice(0, 6)
    // debugger

    // if (response) {
    //   featuredProducts.value = response.data.slice(0, 3)
    // }

    // if (error) {
    //   alert(error.message)
    //   console.log('Error Fetching Data', error)
    // }
  } catch (e) {
    console.log('Error Fetching Data', e)
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

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard v-for="product in featuredProducts" :key="product.id" :product="product" />
        </div>
      </div>
    </AppContainer>

    <CTASection />
  </main>
</template>
