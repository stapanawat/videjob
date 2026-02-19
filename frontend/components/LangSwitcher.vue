<template>
  <div class="relative" ref="dropdownRef">
    <button 
      @click="isOpen = !isOpen"
      class="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-100 dark:bg-surface-800 hover:bg-surface-200 dark:hover:bg-surface-700 text-surface-700 dark:text-surface-300 transition-colors"
    >
      <Icon name="lucide:languages" class="w-4 h-4" />
      <span class="text-sm font-medium uppercase">{{ locale }}</span>
      <Icon name="lucide:chevron-down" class="w-3 h-3 transition-transform duration-200" :class="{ 'rotate-180': isOpen }" />
    </button>
    
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 scale-95 -translate-y-1"
      enter-to-class="opacity-100 scale-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 scale-100 translate-y-0"
      leave-to-class="opacity-0 scale-95 -translate-y-1"
    >
      <div v-show="isOpen" class="absolute right-0 top-full mt-2 w-36 bg-white dark:bg-surface-800 rounded-xl shadow-lg border border-surface-200 dark:border-surface-700 py-1.5 z-50 origin-top-right">
        <button
          v-for="l in allLocales"
          :key="l.code"
          @click="switchLang(l.code)"
          class="w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center gap-3"
          :class="locale === l.code 
            ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 font-semibold' 
            : 'text-surface-700 dark:text-surface-300 hover:bg-surface-50 dark:hover:bg-surface-700'"
        >
          <span>{{ l.name }}</span>
          <Icon v-if="locale === l.code" name="lucide:check" class="w-4 h-4 ml-auto" />
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const { locale, setLocale, locales } = useI18n()

const isOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

const allLocales = computed(() => locales.value as any[])

const switchLang = (code: string) => {
  setLocale(code)
  isOpen.value = false
}

// Close on click outside
const onClickOutside = (e: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target as Node)) {
    isOpen.value = false
  }
}

onMounted(() => document.addEventListener('click', onClickOutside))
onUnmounted(() => document.removeEventListener('click', onClickOutside))
</script>
