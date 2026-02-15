<template>
  <form @submit.prevent="$emit('search')" class="flex gap-2 w-full max-w-xl">
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      placeholder="Search recipes..."
      class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button type="submit" class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
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
