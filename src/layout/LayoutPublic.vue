<script setup>
import LanguageSelector from "../components/LanguageSelector.vue";
</script>

<template>
  <div
    class="flex flex-grow-1 flex-column justify-content-center w-full align-items-center"
  >
    <slot />
    <div class="p-4">
      <LanguageSelector />
    </div>
  </div>
</template>
