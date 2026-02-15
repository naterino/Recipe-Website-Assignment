import { ref } from 'vue'
import { searchRecipes } from '@/services/api'

export function useRecipeSearch() {
  const results = ref([])
  const totalResults = ref(0)
  const hasSearched = ref(false)
  const query = ref('')
  const loading = ref(false)
  const cuisine = ref(null)
  const error = ref(null)

  async function search() {
    loading.value = true
    error.value = null
    try {
      const data = await searchRecipes({
        query: query.value,
        cuisine: cuisine.value
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

  function applyFilter() {
    search()
  }

  return { query, cuisine, hasSearched, results, totalResults, loading, error, search, applyFilter }
}