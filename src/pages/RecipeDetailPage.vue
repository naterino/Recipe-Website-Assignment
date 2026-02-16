<template>
  <template v-if="loading">
    <RecipeSkeleton />
  </template>
  <template v-else-if="error">
    <h1>Recipe not found</h1>
    <RouterLink to="/" aria-label="Return to recipe search">Back to search</RouterLink>
  </template>
  <template v-else>
    <section class="flex flex-col md:flex-row gap-8 my-12" aria-labelledby="recipe-title">
      <div class="md:min-w-1/2">
        <img
          :src="`https://img.spoonacular.com/recipes/${recipe.id}-480x360.jpg`"
          :srcset="`
    https://img.spoonacular.com/recipes/${recipe.id}-240x150.jpg 240w,
    https://img.spoonacular.com/recipes/${recipe.id}-480x360.jpg 480w,
    https://img.spoonacular.com/recipes/${recipe.id}-636x393.jpg 636w
  `"
          sizes="(max-width: 480px) 240px, (max-width: 768px) 480px, 636px"
          width="636"
          height="393"
          :alt="recipe.title"
          class="w-full h-auto"
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
    <p v-html="stripLinks(recipe.summary)" class="mb-12" />
    <section class="flex flex-col md:flex-row gap-8">
      <aside aria-labelledby="ingredients-heading" class="md:w-60 shrink-0">
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
        <ol v-for="(group, i) in recipe.analyzedInstructions" :key="i" class="list-decimal pl-6">
          <li v-for="step in group.steps" :key="step.number">
            {{ step.step }}
          </li>
        </ol>
      </article>
    </section>
  </template>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useRecipeDetail } from '@/composables/useRecipeDetail'
import IngredientItem from '@/components/IngredientItem.vue'
import { stripLinks } from '@/utils/stripLinks'
import RecipeSkeleton from '@/components/RecipeSkeleton.vue'

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
