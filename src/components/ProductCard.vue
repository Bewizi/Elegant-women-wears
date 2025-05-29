<script lang="ts" setup>
import { useCartStore } from '@/stores/cart.ts'
import AppContainer from '@/components/AppContainer.vue'
import AppLink from '@/components/AppLink.vue'
import Button from '@/components/ui/Button.vue'
import { Icon } from '@iconify/vue'

const props = defineProps<{
  product: {
    id: number
    name: string
    price: number
    image: string
  }
}>()

const cartStore = useCartStore()
</script>

<template>
  <AppContainer
    class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition py-8"
  >
    <AppLink :to="`/products/${product.id}`">
      <img
        :alt="product.name"
        :src="`/images/products/${product.image}`"
        class="w-full h-64 object-cover block mb-2"
      />
    </AppLink>

    <div>
      <h3 class="text-xl font-semibold font-raleway text-gray-800 mb-3">
        <AppLink :to="`/products/${product.id}`">
          {{ product.name }}
        </AppLink>
      </h3>

      <div class="flex flex-col items-center">
        <span class="text-lg font-roboto font-bold flex items-center">
          <Icon height="24" icon="tabler:currency-naira" style="color: #000000" width="24" />
          {{ product.price.toLocaleString() }}
        </span>
        <Button class="rounded-lg mt-2" @click="cartStore.addToCart(product)">Add to Cart</Button>
      </div>
    </div>
  </AppContainer>
</template>

<style scoped></style>
