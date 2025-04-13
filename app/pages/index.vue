<template>
  <div class="min-h-screen grid-cols-3 divide-x sm:grid">
    <div class="col-span-2 flex h-screen flex-col">
      <div class="flex-1 overflow-hidden overflow-y-auto p-6">
        <base-form-section title="Profile" description="Enter your public information here">
          <div class="shadow sm:rounded-md">
            <div class="space-y-6 px-4 py-5 sm:p-6">
              <input
                class="inp"
                id="name"
                name="name"
                placeholder="Astronaut"
                autocomplete="given-name"
                v-model.trim="data.name"
              />
              <textarea
                class="inp"
                id="about"
                name="about"
                placeholder="I am an astronaut"
                rows="3"
                maxlength="120"
                v-model.trim="data.desc"
              ></textarea>
              <input
                class="inp"
                id="photo-url"
                name="photo-url"
                placeholder="https://example.com/astronaut.png"
                type="url"
                v-model.trim="data.image"
              />
            </div>
          </div>
        </base-form-section>
        <base-form-section
          title="Social Links"
          description="Add your social media profile links here"
        >
          <div class="shadow sm:overflow-hidden sm:rounded-md">
            <div class="grid grid-cols-1 gap-8 px-4 py-5 sm:grid-cols-2 sm:p-6">
              <div v-for="lnk in socialLinks" :key="lnk.key">
                <label class="lab" :for="lnk.key">
                  {{ lnk.label }}
                </label>
                <div class="mt-1 flex shadow-sm">
                  <span
                    class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 p-2"
                  >
                    <Icon :size="20" :name="lnk.icon" />
                  </span>
                  <input
                    class="inp rounded-l-none"
                    :id="lnk.key"
                    :name="lnk.key"
                    :type="lnk.type"
                    :placeholder="lnk.placeholder"
                    v-model.trim="data[lnk.key]"
                  />
                </div>
              </div>
            </div>
          </div>
        </base-form-section>
        <base-form-section title="Links" description="Add some links here">
          <template #helpertext>
            <p class="mt-1 text-xs text-zinc-600">
              Icon keys can be found at
              <a
                class="underline"
                href="https://icones.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://icones.js.org/
              </a>
            </p>
          </template>
          <div class="min-h-5">
            <div class="group relative mb-6" v-for="link in data.lnks" :key="link.id">
              <button
                class="absolute -top-3 -right-3 hidden h-6 w-6 items-center justify-center rounded-full bg-gray-300 text-zinc-600 group-hover:flex focus:ring-2 focus:ring-red-500 focus:outline-none"
                type="button"
                @click="removeLink(link.id)"
                aria-label="Remove link"
              >
                <Icon name="mdi:close-circle" size="24" />
              </button>
              <label class="lab" :for="`icon-${link.id}`">Icon Key (optional)</label>
              <input class="inp" type="text" :id="`icon-${link.id}`" v-model.trim="link.icon" />
              <label class="lab" :for="`label-${link.id}`">Label</label>
              <input
                class="inp"
                type="text"
                :id="`label-${link.id}`"
                v-model.trim="link.label"
                required
              />
              <label class="lab" :for="`url-${link.id}`">URL</label>
              <input
                class="inp"
                :id="`url-${link.id}`"
                type="url"
                v-model.trim="link.url"
                required
              />
              <p class="mt-2 text-center text-xs text-red-400" v-if="!link.label || !link.url">
                Please enter both a label and a valid URL to preview this link.
              </p>
            </div>
          </div>
          <button
            class="mt-8 block w-full rounded-lg border-2 border-gray-300 py-2 text-zinc-600 transition hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            type="button"
            @click="addLink"
            aria-label="Add new link"
          >
            <Icon name="mdi:add-circle" size="24" />
          </button>
        </base-form-section>
      </div>
      <div class="relative bottom-0 left-0 flex w-full flex-row border-y bg-gray-50">
        <button class="btn" @click="loadDemoData">
          <span class="sr-only md:not-sr-only"> Demo </span>
          <icon name="mdi:code-json" size="24" />
        </button>
        <button class="btn" @click="publishProfile">
          <span class="sr-only md:not-sr-only"> Publish </span>
          <icon name="mdi:tray-upload" size="24" />
        </button>
        <a
          class="btn"
          href="https://github.com/fayazara/onelink"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="sr-only md:not-sr-only"> Source </span>
          <icon name="mdi:code" size="24" />
        </a>
        <a
          class="btn"
          href="https://twitter.com/fayazara"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="sr-only md:not-sr-only"> Made by Fayaz </span>
          <icon name="mdi:github" size="24" />
        </a>
      </div>
    </div>
    <lazy-form-preview class="invisible sm:visible" :data="data" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { encodeData, generateId } from '../utils'
import type { Data } from '../types'

useSeoMeta({
  ogUrl: 'https://onelink-nu.vercel.app/',
  title: 'OneLink - no-login link-in-bio',
  ogTitle: 'OneLink - no-login link-in-bio',
  twitterTitle: 'OneLink - no-login link-in-bio',
  description: 'Onelink is a link-in-bio tool, where the data lives in the URL.',
  ogDescription: 'Onelink is a link-in-bio tool, where the data lives in the URL.',
  twitterDescription: 'Onelink is a link-in-bio tool, where the data lives in the URL.',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://onelink-nu.vercel.app/' }],
})

// Reactive data
const data = ref<Data>({
  name: '',
  desc: '',
  image: '',
  facebook: '',
  twitter: '',
  instagram: '',
  email: '',
  github: '',
  youtube: '',
  bluesky: '',
  devto: '',
  telegram: '',
  whatsapp: '',
  linkedin: '',
  lnks: [],
})

// Social links configuration
const socialLinks = [
  {
    key: 'facebook',
    label: 'Facebook',
    icon: 'mdi:facebook',
    type: 'url',
    placeholder: 'https://facebook.com/yourname',
  },
  {
    key: 'twitter',
    label: 'Twitter',
    icon: 'mdi:twitter',
    type: 'url',
    placeholder: 'https://twitter.com/yourname',
  },
  {
    key: 'instagram',
    label: 'Instagram',
    icon: 'mdi:instagram',
    type: 'url',
    placeholder: 'https://instagram.com/yourname',
  },
  {
    key: 'email',
    label: 'Email',
    icon: 'mdi:email',
    type: 'email',
    placeholder: 'you@example.com',
  },
  {
    key: 'github',
    label: 'GitHub',
    icon: 'mdi:github',
    type: 'url',
    placeholder: 'https://github.com/yourname',
  },
  {
    key: 'youtube',
    label: 'YouTube',
    icon: 'mdi:youtube',
    type: 'url',
    placeholder: 'https://youtube.com/@yourchannel',
  },
  {
    key: 'bluesky',
    label: 'Bluesky',
    icon: 'mdi:cloud-outline',
    type: 'url',
    placeholder: 'https://bsky.app/profile/you',
  },
  {
    key: 'devto',
    label: 'Dev.to',
    icon: 'mdi:dev-to',
    type: 'url',
    placeholder: 'https://dev.to/yourname',
  },
  {
    key: 'telegram',
    label: 'Telegram',
    icon: 'mdi:telegram',
    type: 'url',
    placeholder: 'https://t.me/yourhandle',
  },
  {
    key: 'whatsapp',
    label: 'WhatsApp',
    icon: 'mdi:whatsapp',
    type: 'tel',
    placeholder: '+1234567890',
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    icon: 'mdi:linkedin',
    type: 'url',
    placeholder: 'https://linkedin.com/in/yourname',
  },
]

// Methods
const loadDemoData = () => {
  data.value = {
    name: 'John Snow',
    desc: "I'm John Snow, the king in the north. I know Nothing.",
    image: 'https://placehold.co/200?text=J',
    facebook: 'https://www.facebook.com/john_snow',
    twitter: 'https://twitter.com/john_snow',
    instagram: 'https://www.instagram.com/john_snow',
    email: 'mail@john_snow.cc',
    github: 'https://github.com/john_snow',
    youtube: 'https://youtube.com/@john_snow',
    bluesky: 'https://bsky.app/profile/johnsnow.bsky.social',
    devto: 'https://dev.to/johnsnow',
    telegram: 'https://t.me/john_snow',
    whatsapp: '+918888888888',
    linkedin: 'https://linkedin.com/john_snow',
    lnks: [
      {
        id: generateId(),
        label: 'Portfolio',
        icon: 'mdi:globe',
        url: 'https://johnsnow.com',
      },
      {
        id: generateId(),
        label: 'Resume',
        icon: 'mdi:file-document',
        url: 'https://johnsnow.com/resume',
      },
    ],
  }
}

const publishProfile = async () => {
  if (!data.value.name.trim() || !data.value.desc.trim()) {
    alert('Please fill in both name and description before publishing.')
    return
  }

  try {
    const { copy, copied } = useClipboard()
    const url = `${window.location.origin}/user?data=${encodeData(data.value)}`

    await copy(url)

    if (copied.value) {
      alert('Link copied to clipboard!')
    } else {
      alert('Failed to copy. Please copy manually: ' + url)
    }
  } catch (error) {
    console.error('Error during publishing:', error)
    alert('An unexpected error occurred. Please try again.')
  }
}

const addLink = () => {
  data.value.links.push({
    id: generateId(),
    label: '',
    icon: '',
    url: '',
  })
}

const removeLink = (id: string) => {
  data.value.lnks = data.value.links.filter((link) => link.id !== id)
}
</script>

<style scoped>
@reference "@/main.css";

.btn {
  @apply flex h-12 items-center space-x-2 border-x bg-gray-100 px-4 text-sm font-medium text-zinc-700 hover:bg-gray-200 sm:text-base;
}
</style>
