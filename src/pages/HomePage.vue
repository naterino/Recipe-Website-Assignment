<template>
  <SearchBar v-model="query" @search="search" />
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
import SearchBar from '@/components/SearchBar.vue'
import RecipeCard from '@/components/RecipeCard.vue'
import { useRecipeSearch } from '@/composables/useRecipeSearch'

defineOptions({ name: 'HomePage' })

const { query, results, loading, error, search } = useRecipeSearch()
</script>
