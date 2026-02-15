<script setup></script>

<template>
  <header>Recipe Website Assignment</header>
  <main>
    <RouterView v-slot="{ Component }">
      <KeepAlive include="HomePage">
        <component :is="Component" />
      </KeepAlive>
    </RouterView>
  </main>
</template>

<style scoped></style>
