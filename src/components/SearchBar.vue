<template>
  <form @submit.prevent="$emit('search')" class="flex gap-2 w-full max-w-xl">
    <label for="recipe-search" class="sr-only">Search recipes</label>
    <input
      id="recipe-search"
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      placeholder="Search recipes..."
      class="flex-1 px-4 py-2 bg-(--color-bg-secondary) rounded-lg focus:outline-none focus:ring-2 focus:ring-(--color-accent)"
    />
    <button
      type="submit"
      class="px-6 py-2 bg-(--color-accent) text-white rounded-lg hover:bg-(--color-accent-hover)"
    >
      Search
    </button>
  </form>
</template>

<script setup>
defineProps({
  modelValue: String,
})
defineEmits(['update:modelValue', 'search'])
</script>
