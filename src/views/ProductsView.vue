<script lang="ts" setup>
import AppContainer from '@/components/AppContainer.vue'
import { useRoute } from 'vue-router'
import ProductCard from '@/components/ProductCard.vue'
import { computed, ref } from 'vue'

const route = useRoute()

const products = ref([
  {
    id: 1,
    name: 'Traditional Ankara Dress',
    price: 15000,
    image: 'Beautiful-Green-Asooke-For-you.jpeg',
    category: 'clothing',
    description: 'Beautiful handcrafted Ankara dress with comfortable fit for all occasions.',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Comfortable Walking Shoes',
    price: 12000,
    image: 'A-beautiful-lady-on-glasses.jpeg',
    category: 'footwear',
    description: 'Soft, supportive shoes perfect for daily walks and errands.',
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Handwoven Basket',
    price: 8000,
    image: 'basket.jpg',
    category: 'accessories',
    description: 'Traditional handwoven basket for shopping or home decoration.',
    rating: 4.2,
  },
  {
    id: 4,
    name: 'Head Tie (Gele)',
    price: 5000,
    image: 'gele.jpg',
    category: 'accessories',
    description: 'Elegant head tie for special occasions, easy to tie.',
    rating: 4.7,
  },
  {
    id: 5,
    name: 'Loose-Fit Blouse',
    price: 9500,
    image: 'blouse.jpg',
    category: 'clothing',
    description: 'Comfortable loose-fit blouse with traditional Nigerian patterns.',
    rating: 4.3,
  },
  {
    id: 6,
    name: 'Orthopedic Sandals',
    price: 13500,
    image: 'sandals.jpg',
    category: 'footwear',
    description: 'Supportive sandals with arch support for all-day comfort.',
    rating: 4.9,
  },
])

const searchQuery = ref('')
// const selectedCategory = ref(route.query.category?.toString || 'all')

const filteredProducts = computed(() => {
  return products.value.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    // const matchesCategory =
    //   selectedCategory.value === 'all' || product.category === selectedCategory.value
    return matchesSearch
  })
})

const categories = computed(() => {
  const uniqueCategories = new Set(products.value.map((product) => product.category))
  return ['all', ...uniqueCategories]
})
</script>

<template>
  <AppContainer class="mt-32">
    <div>
      <h1 class="text-6xl font-bold font-raleway">Our Products</h1>

      <!-- Filters -->
      <div class="bg-white shadow-md rounded-lg p-6 mb-8">
        <div class="grid gird-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-lg text-rich-black font-medium font-roboto mb-2" for="search"
              >Search</label
            >
            <input
              id="search"
              v-model="searchQuery"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="Search Products..."
              type="text"
            />
          </div>
        </div>

        <!--        <label class="block text-lg font-medium text-gray-700 mb-2" for="category">Category</label>-->
        <!--        <select-->
        <!--          id="category"-->
        <!--          v-model="selectedCategory"-->
        <!--          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"-->
        <!--          name="category"-->
        <!--        >-->
        <!--          <option-->
        <!--            v-for="category in categories"-->
        <!--            :key="category"-->
        <!--            class="capitalize"-->
        <!--            value="category"-->
        <!--          >-->
        <!--            {{ category === 'all' ? 'All Categories' : category }}-->
        <!--          </option>-->
        <!--        </select>-->
      </div>

      <!-- Products Grid -->
      <div
        v-if="filteredProducts.length > 0"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
      </div>

      <!-- Empty State -->
      <div v-else class="bg-white p-12 rounded-lg shadow-md text-center">
        <svg
          class="h-16 w-16 mx-auto text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </svg>
        <h3 class="text-xl font-medium text-gray-700 mt-4">No products found</h3>
        <p class="text-gray-500 mt-2">Try adjusting your search or filter criteria</p>
        <button
          class="mt-4 px-6 py-3 bg-primary text-white rounded-lg hover:bg-purple-700 transition"
          @click="searchQuery = ''"
        >
          Reset Filters
        </button>
      </div>
    </div>
  </AppContainer>
</template>

<style scoped></style>
