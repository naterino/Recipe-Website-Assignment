<script setup></script>

<template>
  <header class="text-center py-8 bg-(--color-primary)">
    <nav aria-label="Main">
      <RouterLink to="/" class="font-bold text-white text-2xl">Medavie Recipe Website</RouterLink>
    </nav>
  </header>
  <main class="container pb-8 flex-1">
    <RouterView v-slot="{ Component }">
      <KeepAlive include="HomePage">
        <component :is="Component" />
      </KeepAlive>
    </RouterView>
  </main>
  <footer
    class="py-16 text-center text-white flex flex-col bg-(--color-bg-secondary)"
    aria-hidden="true"
  >
    Copyright 2026 Nathaniel Oliver
  </footer>
</template>
