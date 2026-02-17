<template>
  <form @submit.prevent="$emit('search')" class="flex gap-2 w-full max-w-xl">
    <label for="recipe-search" class="sr-only">Search recipes</label>
    <input
      id="recipe-search"
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      placeholder="Search recipes..."
      class="flex-1 px-4 py-2 bg-white box-content border-b-2 border-black text-black focus:bg-gray-300 rounded-t-lg focus:outline-0 focus:rounded-b-lg transition-all"
    />
    <button
      type="submit"
      class="px-6 py-2 bg-(--color-primary) text-white rounded-lg hover:bg-(--color-primary-hover)"
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
