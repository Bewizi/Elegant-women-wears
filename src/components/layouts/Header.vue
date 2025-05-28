<script lang="ts" setup>
import { ref } from 'vue'
import AppLink from '@/components/AppLink.vue'
import { Icon } from '@iconify/vue'

const isMenuOpen = ref<boolean | null>(false)
</script>

<template>
  <section class="max-w-7xl mx-auto px-5 lg:px-8">
    <header class="py-3">
      <div class="flex items-center justify-between">
        <!--      logo-->
        <div>
          <img alt="" class="object-cover w-[50px] block" src="/images/Logo.png" />
        </div>
        <!--      logo-->

        <!--        desktop navigation-->
        <nav class="hidden md:flex space-x-20 text-lg font-raleway font-medium">
          <AppLink to="">Home</AppLink>
          <AppLink to="">Products</AppLink>
          <AppLink to="">About</AppLink>
        </nav>
        <!--        desktop navigation-->

        <!--        cart and mobile menu-->
        <div class="flex items-center space-x-4">
          <AppLink to="">
            <Icon height="24" icon="mdi:cart-outline" style="color: #000000" width="24" />
          </AppLink>

          <button aria-label="Toggle Menu" class="md:hidden" @click="isMenuOpen = !isMenuOpen">
            <Icon height="24" icon="fe:bar" style="color: #000000" width="24" />
          </button>
        </div>
      </div>

      <!--      mobile menu-->
      <div v-show="isMenuOpen" class="md:hidden">
        <AppLink to="" @click="isMenuOpen = false">Home</AppLink>
        <AppLink to="" @click="isMenuOpen = false">Products</AppLink>
        <AppLink to="" @click="isMenuOpen = false">About</AppLink>
      </div>
    </header>
  </section>
</template>

<style scoped></style>
