<template>
  <h1>Homepage</h1>
  <form @submit.prevent="search">
    <input type="text" v-model="query" />
    <input type="submit" value="Search" />
  </form>
  <section v-if="results.length">
    <RecipeCard
      v-for="result in results"
      :key="result.id"
      :title="result.title"
      :id="result.id"
      :image="result.image"
    />
  </section>
</template>

<script setup>
import RecipeCard from '@/components/RecipeCard.vue'
import { useRecipeSearch } from '@/composables/useRecipeSearch'

defineOptions({ name: 'HomePage' })

const { query, results, loading, error, search } = useRecipeSearch()
</script>
