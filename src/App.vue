<script setup></script>

<template>
  <header class="text-center py-4 bg-(--color-bg-secondary)">
    <RouterLink to="/" class="font-bold text-2xl">Medavie Recipe Website</RouterLink>
  </header>
  <main class="container pb-8">
    <RouterView v-slot="{ Component }">
      <KeepAlive include="HomePage">
        <component :is="Component" />
      </KeepAlive>
    </RouterView>
  </main>
  <footer class="h-100 bg-(--color-bg-secondary)"></footer>
</template>
