<template>
  <section class="my-8 flex flex-col items-center" aria-labelledby="search-heading">
    <h1 id="search-heading" class="mb-4">Search for a recipe...</h1>
    <SearchBar v-model="query" @search="search" class="mb-8" />
  </section>

  <p v-if="error" role="alert">{{ error }}</p>

  <section
    v-if="hasSearched || loading"
    class="flex flex-col gap-4 mb-4"
    aria-labelledby="results-heading"
  >
    <h2 id="results-heading" class="sr-only">Search Results</h2>
    <p v-if="!loading" aria-live="polite" role="status">Found {{ totalResults }} recipes.</p>
    <CuisineFilter v-if="!loading" v-model="cuisine" @update:modelValue="search" />

    <template v-if="loading">
      <span class="sr-only" role="status" aria-live="polite">Searching...</span>
      <div
        v-for="n in perPage"
        :key="n"
        class="flex flex-col md:flex-row overflow-hidden bg-(--color-bg-secondary) animate-pulse"
      >
        <div class="md:w-64 shrink-0 aspect-312/231 opacity-45 bg-(--color-text-light)"></div>
        <div class="p-4 flex-1 space-y-3">
          <div class="h-5 w-2/3 opacity-45 bg-(--color-text-light) rounded"></div>
          <div class="h-4 w-full opacity-45 bg-(--color-text-light) rounded"></div>
          <div class="h-4 w-full opacity-45 bg-(--color-text-light) rounded"></div>
          <div class="h-4 w-1/2 opacity-45 bg-(--color-text-light) rounded"></div>
        </div>
      </div>
    </template>

    <template v-else>
      <RecipeCard
        v-for="result in results"
        :key="result.id"
        :title="result.title"
        :id="result.id"
        :image="result.image"
        :summary="result.summary"
      />
    </template>

    <nav aria-label="Pagination" class="flex gap-4 mx-auto items-center">
      <button @click="prevPage" :disabled="page <= 1 || loading">Previous</button>
      <span>Page {{ page }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="page >= totalPages || loading">Next</button>
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
