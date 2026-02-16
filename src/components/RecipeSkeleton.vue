<template>
  <div class="animate-pulse" role="status" aria-live="polite">
    <span class="sr-only">Loading recipe...</span>
    <section class="flex flex-col md:flex-row gap-8 my-12">
      <div class="md:min-w-1/2">
        <div class="h-64 bg-gray-200 rounded"></div>
      </div>
      <div class="flex-1">
        <div class="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div class="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
        <div class="h-4 bg-gray-200 rounded w-1/3"></div>
      </div>
    </section>
    <div class="mb-12 space-y-2">
      <div class="h-4 bg-gray-200 rounded"></div>
      <div class="h-4 bg-gray-200 rounded w-5/6"></div>
    </div>
    <section class="flex flex-col md:flex-row gap-8">
      <div class="md:w-60 shrink-0 space-y-2">
        <div class="h-6 bg-gray-200 rounded w-32 mb-4"></div>
        <div class="h-4 bg-gray-200 rounded"></div>
        <div class="h-4 bg-gray-200 rounded"></div>
        <div class="h-4 bg-gray-200 rounded"></div>
      </div>
      <div class="flex-1 space-y-2">
        <div class="h-6 bg-gray-200 rounded w-40 mb-4"></div>
        <div class="h-4 bg-gray-200 rounded"></div>
        <div class="h-4 bg-gray-200 rounded w-4/5"></div>
      </div>
    </section>
  </div>
</template>
