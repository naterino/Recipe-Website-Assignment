<template>
  <template v-if="loading">Loading</template>
  <template v-else-if="error">
    <h2>Recipe not found</h2>
    <RouterLink to="/">Back to search</RouterLink>
  </template>
  <template v-else>
    <h1>{{ recipe.title }}</h1>
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

    <h2>Health Information</h2>
    <ul class="health-information">
      <li v-for="label in healthLabels" :key="label">{{ label }}</li>
    </ul>

    <h2>Ingredients</h2>
    <button @click="useMetric = !useMetric">
      {{ useMetric ? 'Metric' : 'Imperial' }}
    </button>
    <ul>
      <IngredientItem
        v-for="ing in recipe.extendedIngredients"
        :key="ing.id"
        :name="ing.name"
        :measure="useMetric ? ing.measures.metric : ing.measures.us"
      />
    </ul>

    <p v-html="recipe.summary" />
    <h2>Cooking Steps</h2>
    <div v-for="(group, i) in recipe.analyzedInstructions" :key="i">
      <h3 v-if="group.name">{{ group.name }}</h3>
      <ul>
        <li v-for="step in group.steps" :key="step.number">
          <span>{{ step.number }}:</span>{{ step.step }}
        </li>
      </ul>
    </div>
  </template>
  Recipe Info:
  <pre>{{ recipe }}</pre>
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
