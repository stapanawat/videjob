<template>
  <div class="min-h-screen pt-24 pb-12 flex items-center justify-center px-6">
    <div class="w-full max-w-lg bg-white dark:bg-surface-800 rounded-2xl shadow-xl border border-surface-200 dark:border-surface-700 p-8">
      
      <div v-if="!submitted">
        <h1 class="text-2xl font-bold text-surface-900 dark:text-white mb-2 text-center">{{ $t('review_create.title') }}</h1>
        <p class="text-center text-surface-500 dark:text-surface-400 mb-8">{{ $t('review_create.job') }} Barista @ Aroma Coffee (20 Feb)</p>

        <!-- Rating Stars -->
        <div class="flex justify-center gap-2 mb-8">
          <button v-for="i in 5" :key="i" @click="rating = i" class="transition-transform hover:scale-110 focus:outline-none">
            <Icon name="lucide:star" class="w-10 h-10 transition-colors" :class="rating >= i ? 'text-amber-400 fill-current' : 'text-surface-300 dark:text-surface-600'" />
          </button>
        </div>
        
        <form @submit.prevent="submitReview" class="space-y-6">
          <!-- Criteria -->
          <div class="space-y-4 bg-surface-50 dark:bg-surface-900 p-4 rounded-xl border border-surface-100 dark:border-surface-700">
             <div class="flex flex-wrap items-center justify-between gap-2">
               <span class="text-sm font-medium text-surface-700 dark:text-surface-300">{{ $t('review_create.criteria_punctuality') }}</span>
               <div class="flex gap-1 text-surface-300">
                 <Icon name="lucide:star" class="w-4 h-4" v-for="n in 5" style="fill:currentColor" :class="n <= 4 ? 'text-amber-400' : ''"/>
               </div>
             </div>
             <div class="flex flex-wrap items-center justify-between gap-2">
               <span class="text-sm font-medium text-surface-700 dark:text-surface-300">{{ $t('review_create.criteria_effort') }}</span>
               <div class="flex gap-1 text-surface-300">
                 <Icon name="lucide:star" class="w-4 h-4" v-for="n in 5" style="fill:currentColor" :class="n <= rating ? 'text-amber-400' : ''"/>
               </div>
             </div>
          </div>

          <div class="space-y-2">
            <label class="text-sm font-medium text-surface-700 dark:text-surface-300">{{ $t('review_create.additional_comment') }}</label>
            <textarea v-model="comment" rows="4" :placeholder="$t('review_create.comment_placeholder')" class="w-full bg-surface-50 dark:bg-surface-900 border-surface-200 dark:border-surface-700 rounded-xl px-4 py-3 text-surface-900 dark:text-white focus:border-primary-500 focus:outline-none placeholder:text-surface-400"></textarea>
          </div>

          <div class="flex items-center gap-3">
             <input type="checkbox" id="anon" class="w-4 h-4 rounded border-surface-300 text-primary-600 focus:ring-primary-500">
             <label for="anon" class="text-sm text-surface-600 dark:text-surface-400">{{ $t('review_create.anonymous') }}</label>
          </div>

          <button type="submit" :disabled="rating === 0" class="w-full py-3 bg-primary-600 hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl shadow-lg shadow-primary-500/20 active:scale-95 transition-all">
            {{ $t('review_create.submit') }}
          </button>
        </form>
      </div>

      <!-- Success State -->
      <div v-else class="text-center py-8">
        <div class="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400 mx-auto mb-6 animate-bounce-slow">
          <Icon name="lucide:check" class="w-10 h-10" />
        </div>
        <h2 class="text-2xl font-bold text-surface-900 dark:text-white mb-2">{{ $t('review_create.success_title') }}</h2>
        <p class="text-surface-500 dark:text-surface-400 mb-8">{{ $t('review_create.success_desc') }}</p>
        <NuxtLink :to="localePath('/')" class="inline-block px-8 py-3 bg-surface-100 dark:bg-surface-700 hover:bg-surface-200 dark:hover:bg-surface-600 text-surface-900 dark:text-white font-medium rounded-xl transition-colors">
          {{ $t('review_create.back_home') }}
        </NuxtLink>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const rating = ref(0)
const comment = ref('')
const submitted = ref(false)

useSeoMeta({
  title: 'Write a Review - PreJob'
})

const submitReview = () => {
  submitted.value = true
}
</script>
