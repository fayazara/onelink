<template>
  <div class="grid max-h-screen place-items-center overflow-auto p-4">
    <div
      class="h-[720px] w-[340px] overflow-hidden overflow-y-auto rounded-[3rem] ring-8 ring-gray-800"
      title="Preview"
    >
      <templates-simple :acc="data" />
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
})
</script>
