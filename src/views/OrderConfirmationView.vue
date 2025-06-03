<script setup lang="ts">
import AppContainer from '@/components/AppContainer.vue'
import { useRoute } from 'vue-router'
import { RouterLink } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import { computed } from 'vue'
import { useOrderStore } from '@/stores/order'

const orderStore = useOrderStore()
const cartStore = useCartStore()
const route = useRoute()
const orderId = route.params.id
const paymentMethod = computed(() => orderStore.lastOrder?.paymentMethod || 'paystack')
</script>

<template>
  <AppContainer class="bg-gray-50 min-h-screen py-12">
    <div class="container mx-auto px-4">
      <div class="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 text-center">
        <div
          class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 class="text-3xl font-extrabold mb-4 text-gray-800 font-raleway">Order Confirmed!</h1>
        <p class="text-lg text-gray-600 mb-6">
          Thank you for your order. We've received it and are getting it ready for delivery.
        </p>

        <div class="bg-gray-50 rounded-lg p-6 mb-8 text-left">
          <h2 class="text-xl font-semibold mb-4 text-gray-800 font-raleway">Order Details</h2>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <p class="text-gray-600 font-roboto">Order Number</p>
              <p class="font-medium font-roboto">{{ orderId }}</p>
            </div>
            <div>
              <p class="text-gray-600 font-roboto">Date</p>
              <p class="font-medium font-roboto">{{ new Date().toLocaleDateString() }}</p>
            </div>
            <div>
              <p class="text-gray-600 font-roboto">Total</p>
              <p class="font-medium font-roboto">
                ₦{{ (cartStore.totalPrice + 1500).toLocaleString() }}
              </p>
            </div>
            <div>
              <p class="text-gray-600 font-roboto">Payment Method</p>
              <p class="font-medium font-roboto tracking-widest">{{ paymentMethod }}</p>
            </div>
          </div>
        </div>

        <p class="text-gray-600 mb-8 font-roboto">
          We've sent a confirmation email with your order details. You'll receive another email when
          your order ships.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <RouterLink
            to="/products"
            class="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition"
          >
            Continue Shopping
          </RouterLink>
          <RouterLink
            to=""
            class="border-2 border-primary text-primary px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary hover:text-white transition"
          >
            View Your Orders
          </RouterLink>
        </div>
      </div>
    </div>
  </AppContainer>
</template>
