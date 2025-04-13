<template>
  <main class="mx-auto h-full w-full max-w-lg space-y-8 bg-gray-50 p-4 pt-12" role="main">
    <section class="text-center" aria-labelledby="bio-title">
      <h2 class="sr-only" id="bio-title">Bio</h2>
      <div
        class="mx-auto h-20 w-20 overflow-hidden rounded-full ring ring-gray-200 transition focus-within:ring-2 focus-within:ring-indigo-500 hover:scale-105 focus:outline-none"
        v-if="acc.image"
        tabindex="0"
        aria-label="User avatar"
      >
        <img
          class="h-full w-full object-cover"
          :src="acc.image"
          loading="lazy"
          :alt="`${acc.name || 'User'}'s avatar`"
        />
      </div>
      <h1 class="mt-4 text-3xl font-bold text-zinc-800">{{ acc.name }}</h1>
      <p class="mt-2 text-zinc-600">{{ acc.desc }}</p>
    </section>
    <section v-if="hasSocialLinks" role="navigation" aria-labelledby="social-title">
      <h2 class="mb-2 text-center text-lg font-bold text-zinc-700" id="social-title">
        Social Links
      </h2>
      <div class="flex flex-wrap items-center justify-center gap-2">
        <template v-for="(url, key) in links" :key="key">
          <a
            class="group rounded-full p-2 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            v-if="url"
            :href="url"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="labels[key]"
          >
            <Icon
              class="transition-transform duration-200 group-hover:scale-110 group-focus:scale-110"
              :name="icons[key]"
              size="30"
              aria-hidden="true"
            />
          </a>
        </template>
      </div>
    </section>

    <section v-if="acc.lnks?.length" aria-labelledby="other-title">
      <h2 class="mb-2 text-center text-lg font-bold text-zinc-700" id="other-title">Other Links</h2>
      <ul class="space-y-2" aria-label="External profile links">
        <ExternalLink v-for="link in acc.lnks" :key="link.id" v-bind="link" />
      </ul>
    </section>
  </main>
</template>

<script setup lang="ts">
import type { Data } from '@/types'

const props = defineProps<{ acc: Data }>()

const links = computed(() => ({
  facebook: props.acc.facebook,
  twitter: props.acc.twitter,
  instagram: props.acc.instagram,
  telegram: props.acc.telegram,
  whatsapp: props.acc.whatsapp && `https://wa.me/${props.acc.whatsapp}`,
  youtube: props.acc.youtube,
  bluesky: props.acc.bluesky,
  devto: props.acc.devto,
  email: props.acc.email && `mailto:${props.acc.email}`,
  github: props.acc.github,
  linkedin: props.acc.linkedin,
}))
const hasSocialLinks = computed(() => Object.values(links.value).some(Boolean))
const icons = {
  facebook: 'simple-icons:facebook',
  twitter: 'simple-icons:twitter',
  instagram: 'simple-icons:instagram',
  telegram: 'simple-icons:telegram',
  whatsapp: 'simple-icons:whatsapp',
  youtube: 'simple-icons:youtube',
  bluesky: 'simple-icons:bluesky',
  devto: 'simple-icons:devdotto',
  email: 'simple-icons:gmail',
  github: 'simple-icons:github',
  linkedin: 'simple-icons:linkedin',
}
const labels = {
  facebook: 'Facebook',
  twitter: 'Twitter',
  instagram: 'Instagram',
  telegram: 'Telegram',
  whatsapp: 'WhatsApp',
  youtube: 'YouTube',
  bluesky: 'BlueSky',
  devto: 'DevTo',
  email: 'Email',
  github: 'GitHub',
  linkedin: 'LinkedIn',
}
</script>
