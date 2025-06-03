import type { Product } from '@/types'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref<Product[]>([])
  const tottalItems = computed(() =>
    items.value.reduce((total, item) => total + (item.quantity || 1), 0),
  )
  const totalPrice = computed(() =>
    items.value.reduce((total, item) => total + item.price * (item.quantity || 1), 0),
  )

  const addToCart = (product: Product) => {
    const existingItems = items.value.find((item) => item.id === product.id)
    if (existingItems) {
      existingItems.quantity = (existingItems.quantity || 1) + 1
    } else {
      items.value.push({ ...product, quantity: 1 })
    }
  }

  const removeFromCart = (productId: string) => {
    items.value = items.value.filter((item) => item.id !== productId)
  }

  const updateCart = (productId: string, quantity: number) => {
    const item = items.value.find((item) => item.id === productId)
    if (item) {
      item.quantity = quantity
    }
  }

  const clearCart = () => {
    items.value = []
  }
  return {
    items,
    tottalItems,
    totalPrice,
    addToCart,
    removeFromCart,
    updateCart,
    clearCart,
  }
})
