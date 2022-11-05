<template>
  <main class="p-4 bg-white h-full w-full space-y-8 pt-12 max-w-lg mx-auto">
    <div class="text-center">
      <div
        v-if="acc.i"
        class="h-20 w-20 rounded-full overflow-hidden ring ring-slate-200 mx-auto"
      >
        <img :src="acc.i" alt="name" class="h-full w-full object-cover" />
      </div>
      <h1 v-if="acc.n" class="text-2xl font-bold mt-4 text-slate-800">
        {{ acc.n }}
      </h1>
      <p v-if="acc.d" class="text-sm mt-2 text-slate-600">
        {{ acc.d }}
      </p>
    </div>
    <div
      v-if="!allSocialLinksAreEmpty"
      class="flex items-center justify-center flex-wrap"
    >
      <span v-if="acc.f" class="p-1">
        <icon name="ph:facebook-logo-duotone" class="h-6 w-6" />
      </span>
      <span v-if="acc.t" class="p-1">
        <icon name="ph:twitter-logo-duotone" class="h-6 w-6" />
      </span>
      <span v-if="acc.ig" class="p-1">
        <icon name="ph:instagram-logo-duotone" class="h-6 w-6" />
      </span>
      <span v-if="acc.m" class="p-1">
        <icon name="ph:envelope-duotone" class="h-6 w-6" />
      </span>
      <span v-if="acc.tg" class="p-1">
        <icon name="ph:telegram-logo-duotone" class="h-6 w-6" />
      </span>
      <span v-if="acc.w" class="p-1">
        <icon name="ph:whatsapp-logo-duotone" class="h-6 w-6" />
      </span>
      <span v-if="acc.y" class="p-1">
        <icon name="ph:youtube-logo-duotone" class="h-6 w-6" />
      </span>
      <span v-if="acc.e" class="p-1">
        <icon name="ph:envelope-duotone" class="h-6 w-6" />
      </span>
      <span v-if="acc.gh" class="p-1">
        <icon name="ph:github-logo-duotone" class="h-6 w-6" />
      </span>
      <span v-if="acc.l" class="p-1">
        <icon name="ph:linkedin-logo-duotone" class="h-6 w-6" />
      </span>
    </div>
    <ul class="space-y-2">
      <ExternalLink
        v-for="(link, i) in acc.links"
        :label="link.label"
        :icon="link.icon"
        :url="link.url"
        :key="i"
      />
    </ul>
  </main>
</template>
<script setup>
const props = defineProps({
  acc: {
    type: Object,
    required: true,
  },
});

const allSocialLinksAreEmpty = computed(() => {
  return (
    !props.acc.f &&
    !props.acc.t &&
    !props.acc.ig &&
    !props.acc.m &&
    !props.acc.tg &&
    !props.acc.w &&
    !props.acc.y &&
    !props.acc.e &&
    !props.acc.gh &&
    !props.acc.l
  );
});
</script>
<style scoped></style>
