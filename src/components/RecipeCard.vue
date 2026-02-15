<template>
  <article
    class="flex flex-col md:flex-row relative group overflow-hidden bg-(--color-bg-secondary)"
  >
    <RouterLink
      class="absolute inset-0 z-10"
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
    <div class="p-4">
      <h2 class="text-lg font-semibold mb-2">{{ props.title }}</h2>
      <p v-if="props.summary" class="text-sm line-clamp-3" v-html="props.summary"></p>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  id: String,
  title: String,
  image: String,
  summary: String,
})
</script>
