<script setup></script>

<template>
  <header>
    Recipe Website Assignment
    <nav>
      <RouterLink to="/">Go to Home</RouterLink>
      <RouterLink to="/recipes/2313">Go to Recipe</RouterLink>
    </nav>
  </header>
  <input placeholder="Search Todo" />
  <main>
    <RouterView v-slot="{ Component }">
      <KeepAlive include="HomePage">
        <component :is="Component" />
      </KeepAlive>
    </RouterView>
  </main>
</template>

<style scoped></style>
