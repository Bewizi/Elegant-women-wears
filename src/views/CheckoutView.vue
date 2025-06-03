<script setup lang="ts">
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart'
import { useRouter } from 'vue-router'
import AppContainer from '@/components/AppContainer.vue'
import { useOrderStore } from '@/stores/order'

const orderStore = useOrderStore()
const cartStore = useCartStore()
const router = useRouter()

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  paymentMethod: 'paystack',
  rememberInfo: false,
})

const states = [
  'Abia',
  'Adamawa',
  'Akwa Ibom',
  'Anambra',
  'Bauchi',
  'Bayelsa',
  'Benue',
  'Borno',
  'Cross River',
  'Delta',
  'Ebonyi',
  'Edo',
  'Ekiti',
  'Enugu',
  'FCT',
  'Gombe',
  'Imo',
  'Jigawa',
  'Kaduna',
  'Kano',
  'Katsina',
  'Kebbi',
  'Kogi',
  'Kwara',
  'Lagos',
  'Nasarawa',
  'Niger',
  'Ogun',
  'Ondo',
  'Osun',
  'Oyo',
  'Plateau',
  'Rivers',
  'Sokoto',
  'Taraba',
  'Yobe',
  'Zamfara',
]

const placeOrder = () => {
  console.log('Order placed:', form.value)

  orderStore.setLastOrder({
    id: '1234',
    paymentMethod: form.value.paymentMethod,
  })

  cartStore.clearCart()
  router.push({
    name: 'order-confirmation',
    params: { id: '1234' },
  })
}
</script>

<template>
  <AppContainer class="bg-gray-50 min-h-screen py-12">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl font-extrabold mb-8 text-gray-800 font-raleway">Checkout</h1>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Customer Information -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold mb-6 text-gray-800 font-roboto">Customer Information</h2>

          <form @submit.prevent="placeOrder" class="space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label for="firstName" class="font-roboto block text-gray-700 mb-2"
                  >First Name</label
                >
                <input
                  id="firstName"
                  v-model="form.firstName"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary font-roboto"
                />
              </div>
              <div>
                <label for="lastName" class="font-roboto block text-gray-700 mb-2">Last Name</label>
                <input
                  id="lastName"
                  v-model="form.lastName"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary font-roboto"
                />
              </div>
            </div>

            <div>
              <label for="email" class="font-roboto block text-gray-700 mb-2">Email Address</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary font-roboto"
              />
            </div>

            <div>
              <label for="phone" class="font-roboto block text-gray-700 mb-2">Phone Number</label>
              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary font-roboto"
              />
            </div>

            <div>
              <label for="address" class="font-roboto block text-gray-700 mb-2"
                >Delivery Address</label
              >
              <textarea
                id="address"
                v-model="form.address"
                required
                rows="3"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary font-roboto"
              ></textarea>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label for="city" class="font-roboto block text-gray-700 mb-2">City</label>
                <input
                  id="city"
                  v-model="form.city"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary font-roboto"
                />
              </div>
              <div>
                <label for="state" class="font-roboto block text-gray-700 mb-2">State</label>
                <select
                  id="state"
                  v-model="form.state"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary font-roboto"
                >
                  <option value="" disabled selected>Select your state</option>
                  <option v-for="state in states" :key="state" :value="state">{{ state }}</option>
                </select>
              </div>
            </div>

            <div class="flex items-center">
              <input
                id="rememberInfo"
                v-model="form.rememberInfo"
                type="checkbox"
                class="h-5 w-5 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label for="rememberInfo" class="ml-2 text-gray-700 font-roboto"
                >Save this information for next time</label
              >
            </div>
          </form>
        </div>

        <!-- Order Summary -->
        <div>
          <div class="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 class="text-xl font-bold mb-6 text-gray-800 font-raleway">Order Summary</h2>

            <div class="divide-y divide-gray-200">
              <div v-for="item in cartStore.items" :key="item.id" class="py-4 flex justify-between">
                <div class="flex">
                  <img
                    :src="`/images/products/${item.image}`"
                    :alt="item.name"
                    class="w-16 h-16 object-contain mr-4"
                  />
                  <div>
                    <h3 class="text-gray-800 font-roboto">{{ item.name }}</h3>
                    <p class="text-gray-600 font-roboto">Qty: {{ item.quantity }}</p>
                  </div>
                </div>
                <span class="text-gray-800 font-roboto"
                  >₦{{ (item.price * item.quantity).toLocaleString() }}</span
                >
              </div>
            </div>

            <div class="space-y-4 mt-6">
              <div class="flex justify-between">
                <span class="text-gray-600 font-roboto">Subtotal</span>
                <span class="font-medium font-roboto"
                  >₦{{ cartStore.totalPrice.toLocaleString() }}</span
                >
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600 font-roboto">Delivery</span>
                <span class="font-medium font-roboto">₦1,500</span>
              </div>
              <div class="flex justify-between border-t border-gray-200 pt-4">
                <span class="text-lg font-bold text-gray-800 font-roboto">Total</span>
                <span class="text-lg font-bold text-primary font-roboto"
                  >₦{{ (cartStore.totalPrice + 1500).toLocaleString() }}</span
                >
              </div>
            </div>
          </div>

          <!-- Payment Method -->
          <div class="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 class="text-xl font-bold mb-6 text-gray-800">Payment Method</h2>

            <div class="space-y-4">
              <div
                v-for="method in ['paystack', 'flutterwave', 'bank']"
                :key="method"
                class="flex items-center border rounded-lg p-4 cursor-pointer hover:border-primary transition"
                :class="{ 'border-primary': form.paymentMethod === method }"
                @click="form.paymentMethod = method"
              >
                <input
                  type="radio"
                  :id="method"
                  v-model="form.paymentMethod"
                  :value="method"
                  class="h-5 w-5 text-primary focus:ring-primary"
                />
                <label :for="method" class="ml-3 flex items-center">
                  <img :src="`/images/payment/${method}.svg`" :alt="method" class="h-8 ml-2" />
                </label>
              </div>
            </div>
          </div>

          <!-- Place Order Button -->
          <button
            @click="placeOrder"
            class="w-full bg-primary text-white px-6 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition"
          >
            Place Order
          </button>

          <p class="text-gray-500 text-sm mt-4">
            By placing your order, you agree to our
            <a href="#" class="text-primary hover:underline">Terms of Service</a> and
            <a href="#" class="text-primary hover:underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  </AppContainer>
</template>
