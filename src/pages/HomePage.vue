<template>
  <section class="my-8 flex flex-col items-center" aria-labelledby="search-heading">
    <h1 id="search-heading" class="mb-4">Search for a recipe</h1>
    <SearchBar v-model="query" @search="resetAndSearch" class="mb-8" />
  </section>

  <p v-if="error" role="alert">{{ error }}</p>

  <section
    v-if="hasSearched || loading"
    class="flex flex-col gap-4 mb-4"
    aria-labelledby="results-heading"
  >
    <h2 id="results-heading" class="sr-only">Search Results</h2>
    <div class="flex justify-between">
      <p v-if="!loading" aria-live="polite" role="status" class="text-sm">
        Found {{ totalResults }} recipes.
      </p>
      <CuisineFilter v-if="!loading" v-model="cuisine" @update:modelValue="resetAndSearch" />
    </div>

    <template v-if="loading">
      <span class="sr-only" role="status" aria-live="polite">Searching...</span>
      <RecipeCardSkeleton v-for="n in perPage" :key="n" />
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

    <nav v-if="totalResults > 5" aria-label="Pagination" class="flex gap-4 mx-auto items-center">
      <button class="w-30" @click="prevPage" :disabled="page <= 1 || loading">Previous</button>
      <span>Page {{ page }} of {{ totalPages }}</span>
      <button class="w-30" @click="nextPage" :disabled="page >= totalPages || loading">Next</button>
    </nav>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import SearchBar from '@/components/SearchBar.vue'
import RecipeCard from '@/components/RecipeCard.vue'
import { useRecipeSearch } from '@/composables/useRecipeSearch'
import CuisineFilter from '@/components/CuisineFilter.vue'
import RecipeCardSkeleton from '@/components/RecipeCardSkeleton.vue'

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
  resetAndSearch,
} = useRecipeSearch()

const totalPages = computed(() => Math.ceil(totalResults.value / perPage))
</script>
