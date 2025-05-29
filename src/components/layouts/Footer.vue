<script lang="ts" setup>
import AppLink from '@/components/AppLink.vue'
import { Icon } from '@iconify/vue'
</script>

<template>
  <footer class="bg-gray-800 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- About -->
        <div class="md:col-span-2">
          <img alt="" class="object-cover w-[100px] block bg-white mb-5" src="/images/Logo.png" />
          <p class="mb-4 max-w-sm">
            Serving Nigerian women aged 40-90 with quality products that meet their needs and
            respect their traditions.
          </p>
          <div class="flex space-x-4">
            <a class="hover:text-primary transition" href="#">
              <Icon height="40" icon="ic:baseline-facebook" style="color: #fff" width="40" />
            </a>
            <a class="hover:text-primary transition" href="#">
              <Icon height="40" icon="ic:baseline-whatsapp" style="color: #fff" width="40" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-xl font-bold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li>
              <AppLink class="hover:text-primary transition" to="/">Home</AppLink>
            </li>
            <li>
              <AppLink class="hover:text-primary transition" to="/products">Products</AppLink>
            </li>
            <li>
              <AppLink class="hover:text-primary transition" to="/about">About Us</AppLink>
            </li>
            <li>
              <AppLink class="hover:text-primary transition" to="/cart">Your Cart</AppLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-xl font-bold mb-4">Contact Us</h3>
          <address class="not-italic">
            <p class="mb-2">123 Market Street</p>
            <p class="mb-2">Lagos, Nigeria</p>
            <p class="mb-2">Phone: 0800 000 0000</p>
            <p class="mb-2">Email: help@nanasmarket.ng</p>
          </address>
        </div>
      </div>

      <div class="border-t border-gray-700 mt-8 pt-8 text-center">
        <p>&copy; {{ new Date().getFullYear() }} Nana's Market. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
