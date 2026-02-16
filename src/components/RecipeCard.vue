<template>
  <article
    class="flex flex-col md:flex-row relative group overflow-hidden bg-(--color-bg-secondary)"
  >
    <RouterLink
      class="absolute inset-0 z-10 focus-visible:outline-2 focus-visible:-outline-offset-2"
      :to="`/recipe/${props.id}`"
      :aria-label="`View recipe: ${props.title}`"
    ></RouterLink>
    <div class="overflow-hidden md:w-64 shrink-0">
      <img
        :src="props.image"
        :alt="props.title"
        width="312"
        height="231"
        class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    <div class="p-6 text-white">
      <h2 class="text-lg font-semibold mb-2">{{ props.title }}</h2>
      <p v-if="props.summary" class="text-sm line-clamp-4" v-html="stripLinks(props.summary)"></p>
    </div>
  </article>
</template>

<script setup>
import { stripLinks } from '@/utils/stripLinks'

const props = defineProps({
  id: [String, Number],
  title: String,
  image: String,
  summary: String,
})
</script>
