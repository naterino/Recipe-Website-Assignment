import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { searchRecipes } from '@/services/api'

export function useRecipeSearch() {
  const route = useRoute()
  const router = useRouter()
  const results = ref([])
  const totalResults = ref(0)
  const hasSearched = ref(false)
  const loading = ref(false)
  const error = ref(null)
  const query = ref('')
  const cuisine = ref('')
  const page = ref(1)
  const perPage = 5

  function navigate(params) {
    const queryParams = {}
    if (params.q) queryParams.q = params.q
    if (params.cuisine) queryParams.cuisine = params.cuisine
    if (params.page > 1) queryParams.page = params.page
    router.push({ query: queryParams })
  }

  async function fetchResults() {
    loading.value = true
    error.value = null
    try {
      const data = await searchRecipes({
        query: query.value,
        cuisine: cuisine.value,
        number: perPage,
        offset: (page.value - 1) * perPage,
      })
      results.value = data.results
      totalResults.value = data.totalResults
      hasSearched.value = true
    } catch (e) {
      error.value = e.message
    } finally {
      loading.value = false
    }
  }

  watch(
    () => route.query,
    (newQuery) => {
      query.value = newQuery.q || ''
      cuisine.value = newQuery.cuisine || ''
      page.value = Number(newQuery.page) || 1

      if (newQuery.q) {
        fetchResults()
      } else {
        results.value = []
        totalResults.value = 0
        hasSearched.value = false
      }
    },
    { immediate: true },
  )

  function nextPage() {
    navigate({ q: query.value, cuisine: cuisine.value, page: page.value + 1 })
  }

  function prevPage() {
    if (page.value > 1) {
      navigate({ q: query.value, cuisine: cuisine.value, page: page.value - 1 })
    }
  }

  function resetAndSearch() {
    navigate({ q: query.value, cuisine: cuisine.value, page: 1 })
  }

  return {
    query,
    cuisine,
    hasSearched,
    results,
    totalResults,
    loading,
    error,
    page,
    perPage,
    nextPage,
    prevPage,
    resetAndSearch,
  }
}
