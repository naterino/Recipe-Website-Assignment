<template>
  <section class="my-8 flex flex-col items-center">
    <h2 class="mb-4">Search for a recipe...</h2>
    <SearchBar v-model="query" @search="search" class="mb-8" />
  </section>

  <section v-if="hasSearched" class="flex flex-col gap-4 mb-4">
    <p>Found {{ totalResults }} recipes.</p>
    <CuisineFilter v-model="cuisine" @update:modelValue="search" />
    <RecipeCard
      v-for="result in results"
      :key="result.id"
      :title="result.title"
      :id="result.id"
      :image="result.image"
      :summary="result.summary"
    />
  </section>
</template>

<script setup>
import SearchBar from '@/components/SearchBar.vue'
import RecipeCard from '@/components/RecipeCard.vue'
import { useRecipeSearch } from '@/composables/useRecipeSearch'
import CuisineFilter from '@/components/CuisineFilter.vue'

defineOptions({ name: 'HomePage' })

const { query, cuisine, results, hasSearched, totalResults, loading, error, search } =
  useRecipeSearch()
</script>
