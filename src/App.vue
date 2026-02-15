<script setup></script>

<template>
  <header class="text-center py-4 bg-(--color-bg-secondary)">
    <nav aria-label="Main">
      <RouterLink to="/" class="font-bold text-2xl">Medavie Recipe Website</RouterLink>
    </nav>
  </header>
  <main class="container pb-8 min-h-screen">
    <RouterView v-slot="{ Component }">
      <KeepAlive include="HomePage">
        <component :is="Component" />
      </KeepAlive>
    </RouterView>
  </main>
  <footer class="h-100 bg-(--color-bg-secondary)" aria-hidden="true"></footer>
</template>
