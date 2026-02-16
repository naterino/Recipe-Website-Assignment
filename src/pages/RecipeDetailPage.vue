<template>
  <p v-if="loading" role="status" aria-live="polite" class="my-8">Loading recipe...</p>
  <template v-else-if="error">
    <h1>Recipe not found</h1>
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
        <h1 class="mb-4">{{ recipe.title }}</h1>
        <dl class="text-sm mb-4 flex gap-4">
          <div v-if="recipe.servings">
            <dt class="font-semibold">Servings</dt>
            <dd>{{ recipe.servings }}</dd>
          </div>
          <div v-if="recipe.readyInMinutes">
            <dt class="font-semibold">Prep time</dt>
            <dd>{{ recipe.readyInMinutes }} min</dd>
          </div>
        </dl>
        <ul v-if="healthLabels.length" class="text-sm" aria-label="Health information">
          <li class="font-semibold">Health Information</li>
          <li v-for="label in healthLabels" :key="label">{{ label }}</li>
        </ul>
      </div>
    </section>
    <p v-html="recipe.summary" class="mb-8" />
    <section class="flex flex-col md:flex-row gap-8">
      <aside aria-labelledby="ingredients-heading" class="md:w-100">
        <h2 id="ingredients-heading">Ingredients</h2>
        <ul>
          <IngredientItem
            v-for="ing in recipe.extendedIngredients"
            :key="ing.id"
            :name="ing.name"
            :measure="ing.measures.metric"
          />
        </ul>
      </aside>

      <article aria-labelledby="instructions-heading">
        <h2 id="instructions-heading">Cooking Steps</h2>
        <div v-html="recipe.instructions" />
      </article>
    </section>
  </template>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useRecipeDetail } from '@/composables/useRecipeDetail'
import IngredientItem from '@/components/IngredientItem.vue'

const { recipe, loading, error } = useRecipeDetail(useRoute().params.id)

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
