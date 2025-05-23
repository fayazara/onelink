<template>
  <div class="flex fixed inset-0 flex-col justify-center items-center px-4 space-y-6 h-screen bg-white md:flex-row md:relative lg:w-3/12">
    <icon name="fluent:dismiss-24-regular" class="w-4 h-4 text-gray-600 opacity-100 md:opacity-0" @click="hidePreview" />
    <div
      class="h-[calc(100vh-120px)] lg:h-[729px]  lg:w-3/4 overflow-y-auto rounded-[3rem] ring-8 ring-slate-800 overflow-hidden"
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
  }
});

const emit = defineEmits(['toggle'])

const hidePreview = () => {
  emit('toggle', false)
}
</script>
<style scoped></style>
