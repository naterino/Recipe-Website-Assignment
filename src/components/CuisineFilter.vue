<template>
  <h3>Filter by cuisine style</h3>
  <select
    :value="modelValue"
    @change="$emit('update:modelValue', $event.target.value)"
    class="bg-(--color-bg-secondary) p-2"
  >
    <option value="">All Cuisines</option>
    <option v-for="c in cuisines" :key="c" :value="c">{{ c }}</option>
  </select>
</template>

<script setup>
defineProps({
  modelValue: String,
})
defineEmits(['update:modelValue'])

const cuisines = [
  'African',
  'Asian',
  'American',
  'British',
  'Cajun',
  'Caribbean',
  'Chinese',
  'European',
  'French',
  'German',
  'Greek',
  'Indian',
  'Irish',
  'Italian',
  'Japanese',
  'Jewish',
  'Korean',
  'Latin American',
  'Mediterranean',
  'Mexican',
  'Middle Eastern',
  'Nordic',
  'Southern',
  'Spanish',
  'Thai',
  'Vietnamese',
]
</script>
