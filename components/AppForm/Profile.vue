<template>
  <base-form-section
    title="Profile"
    description="Some public information about you"
  >
    <div class="shadow sm:overflow-hidden sm:rounded-md">
      <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
        <div class="col-span-6 sm:col-span-3">
          <label for="name" class="block text-sm font-medium text-gray-700"
            >Name</label
          >
          <input
            type="text"
            name="name"
            id="name"
            autocomplete="given-name"
            :value="name"
            @input="$emit('update:name', $event.target.value)"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label for="about" class="block text-sm font-medium text-gray-700"
            >About yourself</label
          >
          <div class="mt-1">
            <textarea
              id="about"
              name="about"
              rows="3"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm placeholder-slate-400"
              placeholder="I am an astronaut"
              maxlength="100"
              :value="desc"
              @input="$emit('update:desc', $event.target.value)"
            ></textarea>
          </div>
        </div>

        <div class="flex-grow col-span-6 sm:col-span-3">
          <label for="photo-url" class="block text-sm font-medium text-gray-700"
            >Photo Url</label
          >
          <input
            type="text"
            name="photo-url"
            id="photo-url"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            :value="image"
            @input="$emit('update:image', $event.target.value)"
          />
        </div>
      </div>
    </div>
  </base-form-section>
</template>
<script setup>
const props = defineProps(["name", "desc", "image"]);
</script>
