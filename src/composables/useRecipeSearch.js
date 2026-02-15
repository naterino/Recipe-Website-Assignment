import { ref } from 'vue'
import { searchRecipes } from '@/services/api'

export function useRecipeSearch() {
  const results = ref([])
  const totalResults = ref(0)
  const hasSearched = ref(false)
  const loading = ref(false)
  const error = ref(null)
  const query = ref('')
  const cuisine = ref(null)
  const page = ref(1)
  const perPage = 5

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



  function applyFilter() {
    search()
  }

  return { query, cuisine, hasSearched, results, totalResults, loading, error, page, perPage, search, nextPage, prevPage, applyFilter }
}