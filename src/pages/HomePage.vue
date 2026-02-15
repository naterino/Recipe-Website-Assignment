<template>
  <h1 class="sr-only">Recipe Search</h1>

  <section class="my-8 flex flex-col items-center" aria-labelledby="search-heading">
    <h2 id="search-heading" class="mb-4">Search for a recipe...</h2>
    <SearchBar v-model="query" @search="search" class="mb-8" />
  </section>

  <p v-if="loading" role="status" aria-live="polite">Searching...</p>
  <p v-else-if="error" role="alert">{{ error }}</p>

  <section v-if="hasSearched && !loading" class="flex flex-col gap-4 mb-4" aria-labelledby="results-heading">
    <h2 id="results-heading" class="sr-only">Search Results</h2>
    <p aria-live="polite" role="status">Found {{ totalResults }} recipes.</p>
    <CuisineFilter v-model="cuisine" @update:modelValue="search" />
    <RecipeCard
      v-for="result in results"
      :key="result.id"
      :title="result.title"
      :id="result.id"
      :image="result.image"
      :summary="result.summary"
    />
    <nav aria-label="Pagination" class="flex gap-4 mx-auto items-center">
      <button @click="prevPage" :disabled="page <= 1">Previous</button>
      <span>Page {{ page }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="page >= totalPages">Next</button>
    </nav>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import SearchBar from '@/components/SearchBar.vue'
import RecipeCard from '@/components/RecipeCard.vue'
import { useRecipeSearch } from '@/composables/useRecipeSearch'
import CuisineFilter from '@/components/CuisineFilter.vue'

defineOptions({ name: 'HomePage' })

const {
  query,
  cuisine,
  results,
  hasSearched,
  totalResults,
  page,
  perPage,
  nextPage,
  prevPage,
  loading,
  error,
  search,
} = useRecipeSearch()

const totalPages = computed(() => Math.ceil(totalResults.value / perPage))
</script>
