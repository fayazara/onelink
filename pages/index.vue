<template>
  <div class="flex h-screen divide-x">
    <div
      class="flex flex-col h-screen bg-slate-100"
      :class="isPreviewOpen ? 'lg:w-9/12' : 'w-full'"
    >
      <div class="overflow-y-auto flex-1 p-4 space-y-4 lg:space-y-0 lg:p-8">
        <app-form-profile
          v-model:name="data.n"
          v-model:desc="data.d"
          v-model:image="data.i"
        />
        <app-form-hr />
        <app-form-social-links
          v-model:facebook="data.f"
          v-model:twitter="data.t"
          v-model:instagram="data.ig"
          v-model:github="data.gh"
          v-model:telegram="data.tg"
          v-model:linkedin="data.l"
          v-model:email="data.e"
          v-model:whatsapp="data.w"
          v-model:youtube="data.y"
        />
        <app-form-hr />
        <app-form-links v-model="data.ls" />
      </div>
      <div
        class="flex flex-col justify-between items-center bg-white border-t md:px-4 md:flex-row"
      >
        <div class="flex items-center border-b">
          <button
            @click="prefillDemoData"
            class="flex items-center px-4 space-x-2 h-12 text-xs font-medium bg-white border-r text-slate-700"
          >
            <span class="capitalize"
              ><span class="hidden md:inline">Add</span> demo data
            </span>
            <icon name="mdi:code-json" class="w-4 h-4" />
          </button>
          <button
            @click="togglePreview(true)"
            class="flex items-center px-4 space-x-2 h-12 text-xs font-medium bg-white border-r md:hidden text-slate-700"
          >
            <span class="capitalize"
              >Preview
            </span>
            <icon name="mdi:eye-outline" class="w-4 h-4" />
          </button>
          <button
            @click="publish"
            class="flex items-center px-4 space-x-2 h-12 text-xs font-medium bg-white border-r text-slate-700"
          >
            <span> Publish </span>
            <icon name="ph:paper-plane-tilt-bold" class="w-4 h-4" />
          </button>
        </div>
        <div class="flex items-center">
          <a
            href="https://github.com/fayazara/onelink"
            target="_blank"
            class="flex items-center px-4 space-x-2 h-12 text-xs font-medium bg-white border-r text-slate-700"
          >
            <span> Github </span>
            <icon name="mdi:github" class="w-4 h-4" />
          </a>
          <a
            href="https://twitter.com/fayazara"
            target="_blank"
            class="flex items-center px-4 space-x-2 h-12 text-xs font-medium bg-white text-slate-70"
          >
            Made by Fayaz
          </a>
        </div>
      </div>
    </div>
    <app-form-preview
      v-if="isPreviewOpen"
      :data="data"
      @toggle="togglePreview"
    />
  </div>
</template>

<script setup>
import { encodeData } from "../utils/transformer";
import { data as demoData } from "~/constants/demo";
import { ref } from "vue";
import { useWindowSize } from "@vueuse/core";

const data = ref({
  n: "",
  d: "",
  i: "",
  f: "",
  t: "",
  ig: "",
  gh: "",
  tg: "",
  l: "",
  e: "",
  w: "",
  y: "",
  ls: [],
});

const { width } = useWindowSize();
console.log('width.value > 767', width.value > 767)
let isPreviewOpen = width.value > 767;

const prefillDemoData = () => {
  isPreviewOpen = true;
  data.value = demoData;
};

const publish = () => {
  const url = `${window.location.origin}/1?data=${encodeData(data.value)}`;
  navigator.clipboard.writeText(url).then(() => {
    alert("Link copied to clipboard");
  });
};

const togglePreview = (val) => {
  setTimeout(() => (isPreviewOpen = val), 100);
};
</script>
