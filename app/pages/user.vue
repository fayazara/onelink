<template>
  <div>
    <lazy-templates-simple v-if="data" :acc="data" />
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" v-else>
      <base-loading class="size-8" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { decodeData } from '../utils'
import type { Data } from '../types'

const route = useRoute()
const param = route.query.data
const data = ref<Data | null>(null)

onMounted(() => {
  const acc = Array.isArray(param) ? param[0] : param
  if (acc && typeof acc === 'string') {
    try {
      data.value = decodeData(acc)
      if (data.value) {
        useSeoMeta({
          ogUrl: 'https://onelink-nu.vercel.app/user',
          title: `${data.value.name} - OneLink`,
          ogTitle: `${data.value.name} - OneLink`,
          twitterTitle: `${data.value.name} - OneLink`,
          description: data.value.desc,
          ogDescription: data.value.desc,
          twitterDescription: data.value.desc,
          ...(data.value.image
            ? { ogImage: data.value.image, twitterImage: data.value.image }
            : {}),
        })
      }
    } catch (error) {
      console.error('Failed to decode data:', error)
      alert('Invalid data provided in the URL.')
    }
  }
})
</script>
