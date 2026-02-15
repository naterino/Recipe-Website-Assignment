<template>
  <li>
    <label>
      <input type="checkbox" v-model="checked" />
      <span :class="{ 'line-through': checked }">
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
