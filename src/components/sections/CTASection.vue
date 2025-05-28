<script lang="ts" setup>
import AppLink from '@/components/AppLink.vue'
import AppContainer from '@/components/AppContainer.vue'
</script>

<template>
  <section class="bg-gray-50 py-16 mt-32">
    <AppContainer>
      <div class="text-center">
        <h2 class="font-raleway font-semibold mb-6 text-4xl text-rich-black">
          Need Help With Your Order?
        </h2>
        <p class="max-w-3xl mx-auto mb-8 font-roboto text-[#232323]">
          Our dedicated support team is available to assist you with any questions or concerns. We
          understand technology can be challenging and we're here to help every step of the way.
        </p>
      </div>
      <div class="flex flex-col sm:flex-row justify-center gap-4 text-center">
        <a class="bg-[#00111c] text-white px-8 py-4 rounded-lg" href="tel:+2348000000000">
          Call Us: 0800 000 0000
        </a>
        <AppLink class="border-2 border-[#232323] text-[#232323] px-8 py-4 rounded-lg" to=""
          >Contact Support
        </AppLink>
      </div>
    </AppContainer>
  </section>
</template>

<style scoped></style>
