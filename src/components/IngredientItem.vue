<template>
  <li>
    <label>
      <input type="checkbox" v-model="checked" class="mr-2" />
      <span :class="{ 'line-through': checked }" class="text-sm">
        {{ measure.amount }} {{ measure.unitShort }} — {{ name }}
      </span>
    </label>
  </li>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  name: String,
  measure: Object,
})

const checked = ref(false)
</script>
