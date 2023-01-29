<template>
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0 sticky top-0">
        <h3 class="text-lg font-medium leading-6 text-gray-900">
          {{ title }}
        </h3>
        <p class="mt-1 text-sm text-gray-600">
          {{ description }}
        </p>
        <slot name="helpertext" />
      </div>
    </div>
    <div class="mt-5 md:col-span-2 md:mt-0 relative">
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: { type: String, default: "" },
  description: { type: String, default: "" },
});
</script>
