<template>
  <div>
    <label for="cuisine-filter" class="text-sm">Filter by cuisine style</label>
    <select
      id="cuisine-filter"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      class="ml-4 text-sm"
    >
      <option value="">All Cuisines</option>
      <option v-for="c in cuisines" :key="c" :value="c">{{ c }}</option>
    </select>
  </div>
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
