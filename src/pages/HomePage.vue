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
    <div class="flex gap-4 mx-auto items-center">
      <button @click="prevPage" :disabled="page <= 1">Previous</button>
      <span>Page {{ page }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="page >= totalPages">Next</button>
    </div>
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
