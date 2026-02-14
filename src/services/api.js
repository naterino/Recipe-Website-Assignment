const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY
const BASE_URL = 'https://api.spoonacular.com'

async function request(endpoint, params = {}) {
  const url = new URL(`${BASE_URL}${endpoint}`)

  Object.entries(params).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      url.searchParams.append(key, value)
    }
  })

  const response = await fetch(url, {
    headers: { 'x-api-key': API_KEY },
  })

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`)
  }

  return response.json()
}

export function getRecipeById(id) {
  return request(`/recipes/${id}/information`)
}

export function searchRecipes({ query, cuisine, number = 5, offset = 0 }) {
  return request('/recipes/complexSearch', { query, cuisine, number, offset })
}