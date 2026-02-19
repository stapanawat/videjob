<template>
  <div class="min-h-screen pt-24 pb-12 flex items-center justify-center px-6">
    <div class="w-full max-w-md bg-white dark:bg-surface-800 rounded-2xl shadow-xl border border-surface-200 dark:border-surface-700 p-8 space-y-8">
      
      <div class="text-center space-y-2">
        <h1 class="text-2xl font-bold text-surface-900 dark:text-white">Create Account</h1>
        <p class="text-surface-500 dark:text-surface-400">Join PreJob to find your next opportunity</p>
      </div>

      <!-- Account Type Selection -->
      <div class="bg-surface-50 dark:bg-surface-900 p-1 rounded-xl flex">
        <button 
          @click="accountType = 'seeker'"
          class="flex-1 py-2 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2"
          :class="accountType === 'seeker' ? 'bg-white dark:bg-surface-800 text-primary-600 dark:text-primary-400 shadow-sm' : 'text-surface-500 dark:text-surface-400'"
        >
          <Icon name="lucide:user" class="w-4 h-4" /> Job Seeker
        </button>
        <button 
           @click="accountType = 'employer'"
           class="flex-1 py-2 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2"
           :class="accountType === 'employer' ? 'bg-white dark:bg-surface-800 text-primary-600 dark:text-primary-400 shadow-sm' : 'text-surface-500 dark:text-surface-400'"
        >
          <Icon name="lucide:building-2" class="w-4 h-4" /> Employer
        </button>
      </div>

      <!-- Form -->
      <form @submit.prevent="handleRegister" class="space-y-4">
        <div class="grid grid-cols-2 gap-4">
          <div class="space-y-1">
            <label class="text-sm font-medium text-surface-700 dark:text-surface-300">First Name</label>
            <input type="text" required class="w-full bg-surface-50 dark:bg-surface-900 border-surface-200 dark:border-surface-700 rounded-xl px-4 py-3 text-surface-900 dark:text-white focus:border-primary-500 focus:outline-none placeholder:text-surface-400" placeholder="John">
          </div>
          <div class="space-y-1">
            <label class="text-sm font-medium text-surface-700 dark:text-surface-300">Last Name</label>
            <input type="text" required class="w-full bg-surface-50 dark:bg-surface-900 border-surface-200 dark:border-surface-700 rounded-xl px-4 py-3 text-surface-900 dark:text-white focus:border-primary-500 focus:outline-none placeholder:text-surface-400" placeholder="Doe">
          </div>
        </div>

        <div class="space-y-1">
          <label class="text-sm font-medium text-surface-700 dark:text-surface-300">Email Address</label>
          <div class="relative">
            <Icon name="lucide:mail" class="absolute left-3 top-1/2 -translate-y-1/2 text-surface-400 w-5 h-5" />
            <input type="email" required class="w-full bg-surface-50 dark:bg-surface-900 border-surface-200 dark:border-surface-700 rounded-xl pl-10 pr-4 py-3 text-surface-900 dark:text-white focus:border-primary-500 focus:outline-none placeholder:text-surface-400" placeholder="name@example.com">
          </div>
        </div>
        
        <div class="space-y-1">
          <label class="text-sm font-medium text-surface-700 dark:text-surface-300">Password</label>
          <div class="relative">
            <Icon name="lucide:lock" class="absolute left-3 top-1/2 -translate-y-1/2 text-surface-400 w-5 h-5" />
            <input type="password" required class="w-full bg-surface-50 dark:bg-surface-900 border-surface-200 dark:border-surface-700 rounded-xl pl-10 pr-4 py-3 text-surface-900 dark:text-white focus:border-primary-500 focus:outline-none placeholder:text-surface-400" placeholder="Create a password">
          </div>
        </div>

        <button :disabled="loading" class="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl shadow-lg shadow-primary-500/20 active:scale-95 transition-all flex items-center justify-center gap-2">
          <Icon v-if="loading" name="lucide:loader-2" class="w-5 h-5 animate-spin" />
          <span v-else>Create Account</span>
        </button>
      </form>

      <div class="text-center text-sm text-surface-500 dark:text-surface-400">
        Already have an account? 
        <NuxtLink to="/login" class="text-primary-600 dark:text-primary-400 font-semibold hover:underline">Sign In</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const loading = ref(false)
const router = useRouter()
const accountType = ref('seeker')

useSeoMeta({
  title: 'Create Account - PreJob'
})

const handleRegister = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    router.push('/')
  }, 1500)
}
</script>
