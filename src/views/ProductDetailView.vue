<script lang="ts" setup>
import AppContainer from '@/components/AppContainer.vue'

import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import { Icon } from '@iconify/vue'
import Button from '@/components/ui/Button.vue'
import type { Product } from '@/types'
import { supabase } from '@/lib/supabaseClient.ts'

const route = useRoute()
const router = useRouter()
const cartStore = useCartStore()

const product = ref<Product>({
  id: '',
  name: '',
  price: 0,
  image: '',
  category: '',
  description: '',
  rating: 0,
  details: '',
  inStock: true,
})

const quantity = ref(1)
const selectedImage = ref('')
const sampleProducts = ref<Product[] | null>([])

onMounted(async () => {
  try {
    const { data } = await supabase.from('Products').select('*')
    // console.log(response.data)
    sampleProducts.value = data

    if (sampleProducts.value) {
      const foundProduct = sampleProducts.value.find((p) => String(p.id) === route.params.id)
      if (foundProduct) {
        product.value = foundProduct
        selectedImage.value = foundProduct.image
      }
    }
  } catch (e) {
    console.error('Error fetching product:', e)
    router.push('/products')
  }
})

const addToCart = () => {
  const productToAdd = {
    ...product.value,
    quantity: quantity.value,
  }
  cartStore.addToCart(productToAdd)
}
</script>

<template>
  <AppContainer class="bg-gray-50 min-h-screen py-12">
    <div>
      <!-- Breadcrumb -->
      <nav aria-label="Breadcrumb" class="flex mb-6">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <RouterLink
              class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary"
              to="/"
            >
              Home
            </RouterLink>
          </li>
          <li>
            <div class="flex items-center">
              <Icon height="24" icon="weui:arrow-filled" style="color: #00000040" width="12" />
              <RouterLink
                class="ml-1 text-sm font-medium text-gray-700 hover:text-primary md:ml-2"
                to="/products"
              >
                Products
              </RouterLink>
            </div>
          </li>
          <li aria-current="page">
            <div class="flex items-center">
              <Icon height="24" icon="weui:arrow-filled" style="color: #00000040" width="12" />
              <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2">{{ product.name }}</span>
            </div>
          </li>
        </ol>
      </nav>

      <!-- Product Details -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
          <!-- Product Images -->
          <div>
            <div class="mb-4 rounded-lg overflow-hidden">
              <img
                :alt="product.name"
                :src="`/images/products/${selectedImage}`"
                class="w-full h-[500px] object-contain rounded-lg"
              />
            </div>
            <!--            <div class="grid grid-cols-4 gap-2">-->
            <!--              <button-->
            <!--                v-for="(image, index) in product.image"-->
            <!--                :key="index"-->
            <!--                :class="{-->
            <!--                  'border-primary': selectedImage === image,-->
            <!--                  'border-transparent': selectedImage !== image,-->
            <!--                }"-->
            <!--                class="border-2 rounded-lg overflow-hidden"-->
            <!--                @click="selectedImage = image"-->
            <!--              >-->
            <!--                <img-->
            <!--                  :alt="`${product.name} thumbnail ${index + 1}`"-->
            <!--                  :src="`/images/products/${image}`"-->
            <!--                  class="w-full h-20 object-cover"-->
            <!--                />-->
            <!--              </button>-->
            <!--            </div>-->
          </div>

          <!-- Product Info -->
          <div>
            <h1 class="text-3xl font-bold text-gray-800 mb-2">{{ product.name }}</h1>
            <div class="flex items-center mb-4">
              <div class="flex items-center">
                <svg
                  v-for="star in 5"
                  :key="star"
                  :class="{
                    'text-yellow-400': star <= Math.round(product.rating || 0),
                    'text-gray-300': star > Math.round(product.rating || 0),
                  }"
                  class="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </div>
              <span class="text-gray-600 ml-2">{{ product.rating }} (24 reviews)</span>
            </div>

            <div class="mb-6">
              <span class="text-3xl font-bold text-primary"
                >₦{{ product.price.toLocaleString() }}</span
              >
              <span v-if="product.inStock" class="ml-2 text-green-600 font-medium">In Stock</span>
              <span v-else class="ml-2 text-red-600 font-medium">Out of Stock</span>
            </div>

            <p class="text-gray-700 mb-6">{{ product.description }}</p>

            <div class="mb-6">
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Details</h3>
              <p class="text-gray-600">{{ product.details }}</p>
            </div>

            <div class="flex items-center mb-8">
              <label class="text-lg font-medium text-gray-700 mr-4" for="quantity">Quantity:</label>
              <div class="flex items-center border border-gray-300 rounded-lg">
                <button
                  :class="{ 'cursor-not-allowed opacity-50': quantity === 1 }"
                  class="px-4 py-2 text-lg text-gray-600 hover:bg-gray-100"
                  @click="quantity > 1 ? quantity-- : null"
                >
                  -
                </button>
                <span class="px-4 py-2 text-lg">{{ quantity }}</span>
                <button
                  class="px-4 py-2 text-lg text-gray-600 hover:bg-gray-100"
                  @click="quantity++"
                >
                  +
                </button>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
              <Button
                :class="{ 'opacity-50 cursor-not-allowed': !product.inStock }"
                :disabled="!product.inStock"
                class="flex-1 rounded-lg text-lg font-roboto font-semibold hover:bg-purple-700 transition flex items-center justify-center"
                @click="addToCart"
              >
                <Icon
                  class="mr-4"
                  height="24"
                  icon="mdi:cart-outline"
                  style="color: #ffffff"
                  width="24"
                />

                Add to Cart
              </Button>
              <Button
                :class="{ 'opacity-50 cursor-not-allowed': !product.inStock }"
                :disabled="!product.inStock"
                class="flex-1 font-roboto px-6 py-4 rounded-lg text-lg font-semibold"
                variant="secondary"
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      <!-- Reviews Section -->
      <div class="mt-12 bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-bold mb-6 text-gray-800">Customer Reviews</h2>

        <div class="mb-8">
          <div class="flex items-center mb-4">
            <div class="flex items-center mr-4">
              <svg
                v-for="star in 5"
                :key="star"
                :class="{ 'text-yellow-400': star <= 4, 'text-gray-300': star > 4 }"
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </div>
            <span class="text-gray-700 font-medium">Based on 24 reviews</span>
          </div>

          <div class="space-y-6">
            <!-- Sample Review -->
            <div class="border-b border-gray-200 pb-6">
              <div class="flex items-center mb-2">
                <div class="flex items-center mr-4">
                  <svg
                    v-for="star in 5"
                    :key="star"
                    :class="{ 'text-yellow-400': star <= 5, 'text-gray-300': star > 5 }"
                    class="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
                <span class="text-gray-700 font-medium">Adebisi O.</span>
              </div>
              <p class="text-gray-600 mb-2">Posted on March 15, 2023</p>
              <p class="text-gray-800">
                This dress is so comfortable and beautiful! The fabric is high quality and the fit
                is perfect. I received many compliments when I wore it to my granddaughter's
                wedding.
              </p>
            </div>

            <!-- Another Sample Review -->
            <div class="border-b border-gray-200 pb-6">
              <div class="flex items-center mb-2">
                <div class="flex items-center mr-4">
                  <svg
                    v-for="star in 5"
                    :key="star"
                    :class="{ 'text-yellow-400': star <= 4, 'text-gray-300': star > 4 }"
                    class="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
                <span class="text-gray-700 font-medium">Chioma K.</span>
              </div>
              <p class="text-gray-600 mb-2">Posted on February 28, 2023</p>
              <p class="text-gray-800">
                Very nice dress, but the sizing runs a bit small. I would recommend ordering one
                size up. The colors are vibrant and the material is comfortable.
              </p>
            </div>
          </div>
        </div>

        <button class="bg-primary text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
          See All Reviews
        </button>
      </div>
    </div>
  </AppContainer>
</template>

<style scoped></style>
