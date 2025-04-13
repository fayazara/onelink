<template>
  <li v-if="label && url">
    <a
      class="flex items-center space-x-2 rounded-xl bg-gray-100 p-1 hover:border hover:border-black/40 hover:bg-gray-200 focus:border focus:border-black/60"
      :href="url"
      rel="noopener noreferrer"
      target="_blank"
      :aria-label="`Link to ${label}`"
    >
      <div
        class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg text-zinc-600"
      >
        <Icon v-if="icon" :name="icon" size="20" />
      </div>
      <div class="w-full min-w-0 flex-grow">
        <p class="text-sm leading-6 font-medium text-zinc-900">
          {{ label }}
        </p>
      </div>
    </a>
  </li>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
  },
})
</script>
