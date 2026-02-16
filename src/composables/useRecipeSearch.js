import { ref } from 'vue'
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
  const query = ref(route.query.q || '')
  const cuisine = ref(route.query.cuisine || '')
  const page = ref(Number(route.query.page) || 1)
  const perPage = 5

  function syncURL() {
    const params = {}
    if (query.value) params.q = query.value
    if (cuisine.value) params.cuisine = cuisine.value
    if (page.value > 1) params.page = page.value
    router.replace({ query: params })
  }

  async function search() {
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
      // Keep params in URL
      syncURL()
    } catch (e) {
      error.value = e.message
    } finally {
      loading.value = false
    }
  }

  function nextPage() {
    page.value++
    search()
  }

  function prevPage() {
    if (page.value > 1) {
      page.value--
      search()
    }
  }

  // Make sure we're not persisting paginating when filtering or searching
  function resetAndSearch() {
    page.value = 1
    search()
  }

  // Auto-search if URL has query params
  if (route.query.q) {
    search()
  }

  return { query, cuisine, hasSearched, results, totalResults, loading, error, page, perPage, search, nextPage, prevPage, resetAndSearch }
}
