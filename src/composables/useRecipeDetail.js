import { ref, onMounted } from 'vue'
import { getRecipeById } from '@/services/api'

export function useRecipeDetail(id) {
  const recipe = ref(null)
  const loading = ref(true)
  const error = ref(null)

  onMounted(async () => {
    try {
      recipe.value = await getRecipeById(id)
      document.title = `${recipe.value.title} — Medavie Recipe Website`
    } catch (e) {
      error.value = e.message
    } finally {
      loading.value = false
    }
  })

  return { recipe, loading, error }
}