import { ref, onMounted } from 'vue'
import { searchRecipes } from '@/services/api'

export function useRecipeSearch() {
  const results = ref([])
  const query = ref('')
  const loading = ref(true)
  const error = ref(null)

  async function search() {
    try {
      const data = await searchRecipes({
        query: query.value
      })
      results.value = data.results
    } catch (e) {
      error.value = e.message
    } finally {
      loading.value = false
    }
  }

  return { query, results, loading, error, search }
}