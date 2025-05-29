<script lang="ts" setup>
import AppContainer from '@/components/AppContainer.vue'

import { useCartStore } from '@/stores/cart'
import { RouterLink } from 'vue-router'

const cartStore = useCartStore()

const removeItem = (productId: number) => {
  cartStore.removeFromCart(productId)
}

const updateQuantity = (productId: number, quantity: number) => {
  if (quantity > 0) {
    cartStore.updateCart(productId, quantity)
  } else {
    removeItem(productId)
  }
}
</script>

<template>
  <AppContainer class="bg-gray-50 min-h-screen py-12">
    <div>
      <h1 class="text-3xl font-bold mb-8 text-gray-800">Your Shopping Cart</h1>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Cart Items -->
        <div class="lg:col-span-2">
          <div
            v-if="cartStore.items.length > 0"
            class="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div class="divide-y divide-gray-200">
              <div
                v-for="item in cartStore.items"
                :key="item.id"
                class="p-6 flex flex-col sm:flex-row"
              >
                <RouterLink :to="`/products/${item.id}`" class="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                  <img
                    :alt="item.name"
                    :src="`@/assets/images/products/${item.image}`"
                    class="w-32 h-32 object-contain"
                  />
                </RouterLink>

                <div class="flex-grow">
                  <div class="flex justify-between">
                    <div>
                      <h3 class="text-lg font-medium text-gray-800">
                        <RouterLink :to="`/products/${item.id}`">
                          {{ item.name }}
                        </RouterLink>
                      </h3>
                      <p class="mt-1 text-lg font-bold text-primary">
                        ₦{{ item.price.toLocaleString() }}
                      </p>
                    </div>
                    <button class="text-gray-400 hover:text-red-500" @click="removeItem(item.id)">
                      <svg
                        class="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        />
                      </svg>
                    </button>
                  </div>

                  <div class="mt-4 flex items-center">
                    <label class="mr-4 text-gray-700" for="quantity">Quantity:</label>
                    <div class="flex items-center border border-gray-300 rounded-lg">
                      <button
                        class="px-3 py-1 text-gray-600 hover:bg-gray-100"
                        @click="updateQuantity(item.id, (item.quantity || 1) - 1)"
                      >
                        -
                      </button>
                      <span class="px-3 py-1">{{ item.quantity }}</span>
                      <button
                        class="px-3 py-1 text-gray-600 hover:bg-gray-100"
                        @click="updateQuantity(item.id, (item.quantity || 1) + 1)"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Empty Cart -->
          <div v-else class="bg-white p-12 rounded-lg shadow-md text-center">
            <svg
              class="h-16 w-16 mx-auto text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
            <h3 class="text-xl font-medium text-gray-700 mt-4">Your cart is empty</h3>
            <p class="text-gray-500 mt-2">Start shopping to add items to your cart</p>
            <RouterLink
              class="mt-4 inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-purple-700 transition"
              to="/products"
            >
              Continue Shopping
            </RouterLink>
          </div>
        </div>

        <!-- Order Summary -->
        <div
          v-if="cartStore.items.length > 0"
          class="bg-white rounded-lg shadow-md p-6 h-fit sticky top-4"
        >
          <h2 class="text-xl font-bold mb-6 text-gray-800">Order Summary</h2>

          <div class="space-y-4">
            <div class="flex justify-between">
              <span class="text-gray-600">Subtotal</span>
              <span class="font-medium">₦{{ cartStore.totalPrice.toLocaleString() }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Delivery</span>
              <span class="font-medium">₦1,500</span>
            </div>
            <div class="flex justify-between border-t border-gray-200 pt-4">
              <span class="text-lg font-bold text-gray-800">Total</span>
              <span class="text-lg font-bold text-primary"
                >₦{{ (cartStore.totalPrice + 1500).toLocaleString() }}</span
              >
            </div>
          </div>

          <RouterLink
            class="mt-6 block w-full bg-primary text-white text-center px-6 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition"
            to="/checkout"
          >
            Proceed to Checkout
          </RouterLink>

          <div class="mt-4 flex items-center">
            <svg
              class="h-5 w-5 text-gray-400 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
            <span class="text-sm text-gray-500">Delivery in 3-5 business days</span>
          </div>

          <div class="mt-6">
            <h3 class="text-lg font-medium mb-2">Payment Options</h3>
            <div class="grid grid-cols-3 gap-2">
              <div class="border rounded-lg p-2 flex justify-center">
                <img alt="Paystack" class="h-8" src="" />
              </div>
              <div class="border rounded-lg p-2 flex justify-center">
                <img alt="Flutterwave" class="h-8" src="" />
              </div>
              <div class="border rounded-lg p-2 flex justify-center">
                <img alt="Bank Transfer" class="h-8" src="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h1>Cart View Page</h1>
  </AppContainer>
</template>

<style scoped></style>
