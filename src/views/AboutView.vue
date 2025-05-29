<script lang="ts" setup>
import AppContainer from '@/components/AppContainer.vue'
import CTASection from '@/components/sections/CTASection.vue'
import { Icon } from '@iconify/vue'

const teamMembers = [
  {
    name: 'Pauline Ultimate',
    role: 'Founder & CEO',
    bio: "With over 20 years of experience in retail, Amina started Nana's Market to serve the needs of Nigerian women like her mother who struggled to find quality products tailored for older women.",
    image: 'Pauline-Ultimate.jpeg',
  },
  {
    name: 'Chinedu Okoro',
    role: 'Head of Operations',
    bio: 'Chinedu ensures our products meet the highest quality standards and that our delivery network reaches every corner of Nigeria efficiently.',
    image: 'Chinedud Okoro.png',
  },
  {
    name: 'Funke Adeoye',
    role: 'Customer Support',
    bio: 'Funke leads our support team with patience and understanding, helping our customers navigate both our products and technology with ease.',
    image: 'funke.png',
  },
]
</script>

<template>
  <AppContainer>
    <!--    hero section-->
    <section class="mb-10 bg-gradient-to-r from-primary to-secondary py-20 text-white">
      <div class="text-center px-4">
        <h1 class="font-raleway font-bold text-4xl lg:text-6xl mb-2">
          About Pauline Ultimate Stitches
        </h1>
        <p class="font-roboto">
          Serving Nigerian women aged 40-90 with dignity, quality, and respect.
        </p>
      </div>
    </section>

    <!--    out story-->
    <section class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
      <div>
        <h2 class="text-4xl font-raleway font-semibold mb-5">Our Story</h2>
        <p class="font-roboto mb-5">
          Nana's Market was founded in 2020 with a simple mission: to provide quality products
          tailored specifically for Nigerian women aged 40-90.
        </p>
        <p class="font-roboto mb-5">
          Our founder, Amina Mohammed, noticed how her own mother struggled to find comfortable,
          well-fitting clothing and accessories that respected her traditions while meeting modern
          needs. This inspired her to create a marketplace that celebrates and serves this often
          overlooked demographic.
        </p>
        <p class="font-roboto">
          Today, we carefully curate products that combine comfort, quality, and cultural relevance,
          all while providing exceptional customer service that understands the unique needs of our
          customers.
        </p>
      </div>
      <div>
        <img alt="Ankara Fabric" src="/images/ankara patterns.png" />
      </div>
    </section>

    <!-- Our Values -->
    <section class="py-16 bg-gray-50 mb-32">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center text-gray-800">Our Values</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-lg shadow-md text-center">
            <div
              class="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Icon class="text-primary" height="32" icon="mage:stars-c" width="32" />
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-800">Quality</h3>
            <p class="text-gray-600">
              We source only the highest quality products that meet the needs of our customers, with
              attention to comfort, durability, and cultural appropriateness.
            </p>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-md text-center">
            <div
              class="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Icon class="text-primary" height="32" icon="mingcute:group-3-line" width="32" />
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-800">Respect</h3>
            <p class="text-gray-600">
              We treat every customer with the dignity and respect they deserve, recognizing their
              life experience and wisdom.
            </p>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-md text-center">
            <div
              class="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Icon class="text-primary" height="32" icon="codicon:workspace-trusted" width="32" />
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-800">Trust</h3>
            <p class="text-gray-600">
              We build trust through transparent business practices, reliable products, and patient
              customer support that understands technology can be challenging.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Team -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center text-gray-800">Meet Our Team</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="member in teamMembers"
            :key="member.name"
            class="bg-gray-50 rounded-lg overflow-hidden shadow-md"
          >
            <img
              :alt="member.name"
              :src="`/images/teams/${member.image}`"
              class="w-full h-[500px] object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800">{{ member.name }}</h3>
              <p class="text-primary font-medium mb-3">{{ member.role }}</p>
              <p class="text-gray-600">{{ member.bio }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <CTASection />
  </AppContainer>
</template>

<style scoped></style>
