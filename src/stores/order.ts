// stores/order.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

// export const useOrderStore = defineStore('order', {
//   state: () => ({
//     lastOrder: null as any,
//   }),
//   actions: {
//     setLastOrder(order: any) {
//       this.lastOrder = order
//     },
//   },
// })

export const useOrderStore = defineStore('order', () => {
  const lastOrder = ref(null as any)

  const setLastOrder = (order: any) => {
    lastOrder.value = order
  }

  return {
    setLastOrder,
    lastOrder,
  }
})
