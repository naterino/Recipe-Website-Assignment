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
    <p v-html="recipe.summary"></p>
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
import { useRoute } from 'vue-router'
import { useRecipeDetail } from '@/composables/useRecipeDetail'

const { recipe, loading, error } = useRecipeDetail(useRoute().params.id)
</script>
