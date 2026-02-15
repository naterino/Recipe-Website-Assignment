<template>
  <p v-if="loading" role="status" aria-live="polite" class="my-8">Loading recipe...</p>
  <template v-else-if="error">
    <h2>Recipe not found</h2>
    <RouterLink to="/" aria-label="Return to recipe search">Back to search</RouterLink>
  </template>
  <template v-else>
    <section class="flex flex-col md:flex-row gap-8 my-8" aria-labelledby="recipe-title">
      <div class="md:min-w-1/2">
        <img
          :src="`https://img.spoonacular.com/recipes/${recipe.id}-480x360.jpg`"
          :srcset="`
    https://img.spoonacular.com/recipes/${recipe.id}-240x150.jpg 240w,
    https://img.spoonacular.com/recipes/${recipe.id}-480x360.jpg 480w,
    https://img.spoonacular.com/recipes/${recipe.id}-636x393.jpg 636w
  `"
          sizes="(max-width: 480px) 240px, (max-width: 768px) 480px, 636px"
          :alt="recipe.title"
        />
      </div>
      <div>
        <h1 id="recipe-title" class="mb-4">{{ recipe.title }}</h1>
        <dl class="text-sm mb-4">
          <div v-if="recipe.servings">
            <dt class="sr-only">Servings</dt>
            <dd>{{ recipe.servings }} servings</dd>
          </div>
          <div v-if="recipe.readyInMinutes">
            <dt class="sr-only">Prep time</dt>
            <dd>Ready in: {{ recipe.readyInMinutes }} minutes</dd>
          </div>
        </dl>
        <ul v-if="healthLabels.length" aria-label="Health information">
          <li v-for="label in healthLabels" :key="label">{{ label }}</li>
        </ul>
      </div>
    </section>
    <p v-html="recipe.summary" class="mb-8" />
    <div class="flex flex-col md:flex-row gap-8">
      <section aria-labelledby="ingredients-heading" class="md:w-140">
        <h2 id="ingredients-heading">Ingredients</h2>
        <button
          @click="useMetric = !useMetric"
          :aria-label="`Switch to ${useMetric ? 'imperial' : 'metric'} measurements`"
        >
          {{ useMetric ? 'Switch to Imperial' : 'Switch to Metric' }}
        </button>
        <ul>
          <IngredientItem
            v-for="ing in recipe.extendedIngredients"
            :key="ing.id"
            :name="ing.name"
            :measure="useMetric ? ing.measures.metric : ing.measures.us"
          />
        </ul>
      </section>

      <section aria-labelledby="instructions-heading">
        <h2 id="instructions-heading">Cooking Steps</h2>
        <div v-html="recipe.instructions" />
      </section>
    </div>
  </template>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useRecipeDetail } from '@/composables/useRecipeDetail'
import IngredientItem from '@/components/IngredientItem.vue'

const { recipe, loading, error } = useRecipeDetail(useRoute().params.id)

const useMetric = ref(false)

const healthLabels = computed(() => {
  const labels = {
    vegetarian: 'Vegetarian',
    vegan: 'Vegan',
    glutenFree: 'Gluten Free',
    dairyFree: 'Dairy Free',
    veryHealthy: 'Very Healthy',
    lowFodmap: 'Low FODMAP',
  }

  return Object.entries(labels)
    .filter(([key]) => recipe.value[key])
    .map(([, label]) => label)
})
</script>
