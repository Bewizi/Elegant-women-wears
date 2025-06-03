<script lang="ts" setup>
import { ref } from 'vue'
import AppLink from '@/components/AppLink.vue'
import { Icon } from '@iconify/vue'
import { useCartStore } from '@/stores/cart.ts'
import AppContainer from '@/components/AppContainer.vue'
import { motion } from 'motion-v'

const isMenuOpen = ref<boolean | null>(false)
const cartStore = useCartStore()
</script>

<template>
  <section class="bg-white shadow-md sticky top-0 z-50">
    <AppContainer class="max-w-7xl mx-auto px-5 lg:px-8">
      <header class="py-3">
        <div class="flex items-center justify-between">
          <!--      logo-->
          <div>
            <img alt="" class="object-cover w-[50px] block" src="/images/Logo.png" />
          </div>
          <!--      logo-->

          <!--        desktop navigation-->
          <nav class="hidden md:flex space-x-20 text-lg font-raleway font-medium">
            <AppLink to="/">Home</AppLink>
            <AppLink to="/products">Products</AppLink>
            <AppLink to="/about">About</AppLink>
          </nav>
          <!--        desktop navigation-->

          <!--        cart and mobile menu-->
          <div class="flex items-center space-x-4">
            <AppLink class="relative p-2" to="/cart">
              <Icon height="24" icon="mdi:cart-outline" style="color: #000000" width="24" />
              <span
                v-if="cartStore.tottalItems > 0"
                class="absolute -top-1 -right-1 bg-gray-800 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm"
              >
                {{ cartStore.tottalItems }}
              </span>
            </AppLink>

            <button aria-label="Toggle Menu" class="md:hidden" @click="isMenuOpen = !isMenuOpen">
              <Icon height="24" icon="fe:bar" style="color: #000000" width="24" />
            </button>
          </div>
        </div>

        <!--      mobile menu-->
        <motion.div
          :animate="{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : 20 }"
          :initial="{ opacity: 0, y: 20 }"
          :transition="{ duration: 0.3, ease: 'easeOut' }"
          v-show="isMenuOpen"
          class="md:hidden mt-6"
        >
          <nav class="flex flex-col font-raleway font-medium space-y-8">
            <AppLink to="/" @click="isMenuOpen = false">Home</AppLink>
            <AppLink to="/products" @click="isMenuOpen = false">Products</AppLink>
            <AppLink to="/about" @click="isMenuOpen = false">About</AppLink>
          </nav>
        </motion.div>
      </header>
    </AppContainer>
  </section>
</template>

<style scoped></style>
