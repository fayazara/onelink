<template>
  <div class="my-2 py-2 md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <div class="sticky top-0 px-4 sm:px-0">
        <h3 class="text-lg font-medium">
          {{ title }}
        </h3>
        <p class="mt-1 text-sm text-zinc-600">
          {{ description }}
        </p>
        <slot name="helpertext" />
      </div>
    </div>
    <div class="relative mt-5 border-b-2 border-gray-300 md:col-span-2 md:mt-0">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: { type: String, default: '' },
  description: { type: String, default: '' },
})
</script>
