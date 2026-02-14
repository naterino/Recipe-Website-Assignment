<template>
  <article>
    <RouterLink class="recipe-link" :to="`/recipe/${props.id}`"></RouterLink>
    <img :src="props.image" :alt="props.title" width="312" height="231" />
    <h2>{{ props.title }}</h2>
  </article>
</template>

<script setup>
const props = defineProps({
  id: String,
  title: String,
  image: String,
})
</script>

<style scoped>
article {
  position: relative;
  display: flex;
  flex-direction: column;
}

.recipe-link {
  position: absolute;
  inset: 0;
  z-index: 10;
}
</style>
