<template>
  <div class="min-h-screen pt-24 pb-12 flex items-center justify-center px-6">
    <div class="relative z-10 w-full max-w-md bg-white dark:bg-surface-800 rounded-2xl shadow-xl border border-surface-200 dark:border-surface-700 p-8 space-y-8">
      
      <div class="text-center space-y-2">
        <h1 class="text-2xl font-bold text-surface-900 dark:text-white">{{ $t('auth.welcome') }}</h1>
        <p class="text-surface-500 dark:text-surface-400">{{ $t('auth.signin_subtitle') }}</p>
      </div>

      <!-- Social Login -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button class="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-surface-200 dark:border-surface-600 hover:bg-surface-50 dark:hover:bg-surface-700 transition-colors text-surface-700 dark:text-surface-200 font-medium">
          <Icon name="logos:google-icon" class="w-5 h-5" /> Google
        </button>
        <button class="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-surface-200 dark:border-surface-600 hover:bg-surface-50 dark:hover:bg-surface-700 transition-colors text-surface-700 dark:text-surface-200 font-medium">
          <Icon name="logos:facebook" class="w-5 h-5" /> Facebook
        </button>
      </div>

      <div class="relative flex items-center justify-center">
        <div class="absolute inset-x-0 h-px bg-surface-200 dark:bg-surface-700"></div>
        <span class="relative bg-white dark:bg-surface-800 px-4 text-sm text-surface-500 dark:text-surface-400 font-medium">Or continue with</span>
      </div>

      <!-- Form -->
      <form @submit.prevent="handleLogin" class="space-y-4">
        <div class="space-y-1">
          <label class="text-sm font-medium text-surface-700 dark:text-surface-300">{{ $t('auth.email_user') }}</label>
          <div class="relative">
            <Icon name="lucide:user" class="absolute left-3 top-1/2 -translate-y-1/2 text-surface-400 w-5 h-5" />
            <input type="text" required class="w-full bg-surface-50 dark:bg-surface-900 border-surface-200 dark:border-surface-700 rounded-xl pl-10 pr-4 py-3 text-surface-900 dark:text-white focus:border-primary-500 focus:outline-none placeholder:text-surface-400" :placeholder="$t('hero.search_placeholder')">
          </div>
        </div>
        
        <div class="space-y-1">
          <div class="flex items-center justify-between">
            <label class="text-sm font-medium text-surface-700 dark:text-surface-300">{{ $t('auth.password') }}</label>
            <a href="#" class="text-xs text-primary-600 dark:text-primary-400 hover:underline">{{ $t('auth.forgot') }}</a>
          </div>
          <div class="relative">
            <Icon name="lucide:lock" class="absolute left-3 top-1/2 -translate-y-1/2 text-surface-400 w-5 h-5" />
            <input type="password" required class="w-full bg-surface-50 dark:bg-surface-900 border-surface-200 dark:border-surface-700 rounded-xl pl-10 pr-4 py-3 text-surface-900 dark:text-white focus:border-primary-500 focus:outline-none placeholder:text-surface-400" placeholder="••••••••">
          </div>
        </div>

        <button :disabled="loading" class="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl shadow-lg shadow-primary-500/20 active:scale-95 transition-all flex items-center justify-center gap-2">
          <Icon v-if="loading" name="lucide:loader-2" class="w-5 h-5 animate-spin" />
          <span v-else>{{ $t('auth.signin_button') }}</span>
        </button>
      </form>

      <div class="text-center text-sm text-surface-500 dark:text-surface-400">
        {{ $t('auth.no_account') }} 
        <NuxtLink :to="localePath('/register')" class="text-primary-600 dark:text-primary-400 font-semibold hover:underline">{{ $t('auth.create_account') }}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const loading = ref(false)
const router = useRouter()

useSeoMeta({
  title: `${t('auth.signin')} - PreJob`
})

const { login } = useAuth()

const handleLogin = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    // Mock successful login
    login({
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff'
    })
    router.push(localePath('/'))
  }, 1500)
}
</script>
