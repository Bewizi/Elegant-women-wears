<script lang="ts" setup>
import AppContainer from '@/components/AppContainer.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import { motion } from 'motion-v'
import CTASection from '@/components/sections/CTASection.vue'
import ProductCard from '@/components/ProductCard.vue'
import CategoryCard from '@/components/CategoryCard.vue'
import Footer from '@/components/layouts/Footer.vue'

const featuredProducts = [
  {
    id: 1,
    name: 'Traditional Ankara Dress',
    price: 15000,
    image: 'Beautiful-Green-Asooke-For-you.jpeg',
  },
  {
    id: 2,
    name: 'Comfortable Walking Shoes',
    price: 12000,
    image: 'A-beautiful-lady-on-glasses.jpeg',
  },
  {
    id: 3,
    name: 'Handwoven Basket',
    price: 8000,
    image: 'Dress-hung-on-a-domie.jpeg',
  },
]

const categories = [
  {
    id: 1,
    name: 'Clothing',
    image: '',
  },
  {
    id: 2,
    name: 'Footwear',
    image: '',
  },
  {
    id: 3,
    name: 'Accessories',
    image: '',
  },
]
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

    <!--    CATEGORIES-->
    <AppContainer class="mt-32">
      <div>
        <h2 class="text-3xl font-bold mb-12 text-center text-gray-800">Shop by Category</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <CategoryCard v-for="category in categories" :key="category.id" :category="category" />
        </div>
      </div>
    </AppContainer>

    <CTASection />

    <Footer />
  </main>
</template>
