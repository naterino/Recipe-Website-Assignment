<script setup></script>

<template>
  <header class="text-center py-4 bg-(--color-bg-secondary)">
    <nav aria-label="Main">
      <RouterLink to="/" class="font-bold text-2xl">Medavie Recipe Website</RouterLink>
    </nav>
  </header>
  <main class="container pb-8 flex-1">
    <RouterView v-slot="{ Component }">
      <KeepAlive include="HomePage">
        <component :is="Component" />
      </KeepAlive>
    </RouterView>
  </main>
  <footer class="py-16 text-center flex flex-col bg-(--color-bg-secondary)" aria-hidden="true">
    *Footer section todo*
  </footer>
</template>
