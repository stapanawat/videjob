<template>
  <button
    @click="toggleColorMode"
    class="p-2 rounded-lg bg-surface-100 dark:bg-surface-800 hover:bg-surface-200 dark:hover:bg-surface-700 text-surface-600 dark:text-surface-300 transition-colors"
    :title="colorMode.value === 'dark' ? 'Light Mode' : 'Dark Mode'"
  >
    <Icon
      :name="colorMode.value === 'dark' ? 'lucide:sun' : 'lucide:moon'"
      class="w-5 h-5"
    />
  </button>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const toggleColorMode = () => {
  console.log('Toggling color mode. Current value:', colorMode.value)
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  console.log('New preference set to:', colorMode.preference)
}
</script>
