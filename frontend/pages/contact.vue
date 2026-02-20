<template>
  <div class="min-h-screen py-24 relative">
    <!-- Background Elements -->
    <div class="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary-900/10 to-transparent -z-10"></div>

    <div class="max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-surface-900 via-primary-800 to-surface-900 dark:from-white dark:via-primary-200 dark:to-white mb-4">
          {{ $t('contact.title') }}
        </h1>
        <p class="text-lg text-surface-600 dark:text-surface-300 max-w-2xl mx-auto">
          {{ $t('contact.subtitle') }}
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-start">
        <!-- Contact Information -->
        <div class="glass p-8 rounded-3xl border border-surface-200/50 dark:border-surface-700/50 shadow-xl backdrop-blur-xl relative overflow-hidden group">
          <div class="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary-500/20 transition-all duration-700"></div>
          
          <h2 class="text-2xl font-bold text-surface-900 dark:text-white mb-6 relative z-10">{{ $t('contact.info_title') }}</h2>
          <p class="text-surface-600 dark:text-surface-300 mb-8 relative z-10">{{ $t('contact.info_subtitle') }}</p>

          <div class="space-y-6 relative z-10">
            <div class="flex items-start gap-4 p-4 rounded-xl bg-surface-50/50 dark:bg-surface-800/50 hover:bg-white dark:hover:bg-surface-700/50 transition-colors border border-transparent hover:border-surface-200 dark:hover:border-surface-600">
              <div class="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center shrink-0">
                <Icon name="lucide:mail" class="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <p class="text-sm font-medium text-surface-500 dark:text-surface-400">{{ $t('contact.email') }}</p>
                <a href="mailto:contact@prejob.com" class="text-lg font-semibold text-surface-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">contact@prejob.com</a>
              </div>
            </div>

            <div class="flex items-start gap-4 p-4 rounded-xl bg-surface-50/50 dark:bg-surface-800/50 hover:bg-white dark:hover:bg-surface-700/50 transition-colors border border-transparent hover:border-surface-200 dark:hover:border-surface-600">
              <div class="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
                <Icon name="lucide:phone" class="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <p class="text-sm font-medium text-surface-500 dark:text-surface-400">{{ $t('contact.phone') }}</p>
                <a href="tel:02-123-4567" class="text-lg font-semibold text-surface-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">02-123-4567</a>
              </div>
            </div>

            <div class="flex items-start gap-4 p-4 rounded-xl bg-surface-50/50 dark:bg-surface-800/50 hover:bg-white dark:hover:bg-surface-700/50 transition-colors border border-transparent hover:border-surface-200 dark:hover:border-surface-600">
              <div class="w-12 h-12 rounded-lg bg-[#06C755]/10 flex items-center justify-center shrink-0">
                <Icon name="simple-icons:line" class="w-6 h-6 text-[#06C755]" />
              </div>
              <div>
                <p class="text-sm font-medium text-surface-500 dark:text-surface-400">{{ $t('contact.line') }}</p>
                <span class="text-lg font-semibold text-surface-900 dark:text-white">@prejob</span>
              </div>
            </div>

            <div class="flex items-start gap-4 p-4 rounded-xl bg-surface-50/50 dark:bg-surface-800/50 hover:bg-white dark:hover:bg-surface-700/50 transition-colors border border-transparent hover:border-surface-200 dark:hover:border-surface-600">
              <div class="w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center shrink-0">
                <Icon name="lucide:map-pin" class="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <p class="text-sm font-medium text-surface-500 dark:text-surface-400">{{ $t('contact.address') }}</p>
                <p class="text-surface-900 dark:text-white leading-relaxed">
                  123 Siam Square One, Pathum Wan,<br />
                  Bangkok 10330, Thailand
                </p>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="mt-8 flex gap-4 justify-center">
            <a href="#" class="w-10 h-10 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center text-surface-600 dark:text-surface-400 hover:bg-blue-600 hover:text-white transition-all">
              <Icon name="lucide:facebook" class="w-5 h-5" />
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center text-surface-600 dark:text-surface-400 hover:bg-sky-500 hover:text-white transition-all">
              <Icon name="lucide:twitter" class="w-5 h-5" />
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center text-surface-600 dark:text-surface-400 hover:bg-pink-600 hover:text-white transition-all">
              <Icon name="lucide:instagram" class="w-5 h-5" />
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center text-surface-600 dark:text-surface-400 hover:bg-blue-700 hover:text-white transition-all">
              <Icon name="lucide:linkedin" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="glass p-8 rounded-3xl border border-surface-200/50 dark:border-surface-700/50 shadow-xl backdrop-blur-xl relative">
          <h2 class="text-2xl font-bold text-surface-900 dark:text-white mb-6">{{ $t('contact.form_title') }}</h2>
          
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label for="name" class="text-sm font-medium text-surface-700 dark:text-surface-300">{{ $t('contact.form_name') }}</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name"
                  required
                  class="w-full px-4 py-3 rounded-xl bg-surface-50 dark:bg-surface-800/50 border border-surface-200 dark:border-surface-700 text-surface-900 dark:text-white placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div class="space-y-2">
                <label for="email" class="text-sm font-medium text-surface-700 dark:text-surface-300">{{ $t('contact.form_email') }}</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email"
                  required
                  class="w-full px-4 py-3 rounded-xl bg-surface-50 dark:bg-surface-800/50 border border-surface-200 dark:border-surface-700 text-surface-900 dark:text-white placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div class="space-y-2">
              <label for="subject" class="text-sm font-medium text-surface-700 dark:text-surface-300">{{ $t('contact.form_subject') }}</label>
              <div class="relative">
                <select 
                  id="subject" 
                  v-model="form.subject"
                  class="w-full px-4 py-3 rounded-xl bg-surface-50 dark:bg-surface-800/50 border border-surface-200 dark:border-surface-700 text-surface-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all appearance-none"
                >
                  <option value="general">{{ $t('contact.subjects.general') }}</option>
                  <option value="support">{{ $t('contact.subjects.support') }}</option>
                  <option value="business">{{ $t('contact.subjects.business') }}</option>
                  <option value="other">{{ $t('contact.subjects.other') }}</option>
                </select>
                <Icon name="lucide:chevron-down" class="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-surface-400 pointer-events-none" />
              </div>
            </div>

            <div class="space-y-2">
              <label for="message" class="text-sm font-medium text-surface-700 dark:text-surface-300">{{ $t('contact.form_message') }}</label>
              <textarea 
                id="message" 
                v-model="form.message"
                required
                rows="5"
                class="w-full px-4 py-3 rounded-xl bg-surface-50 dark:bg-surface-800/50 border border-surface-200 dark:border-surface-700 text-surface-900 dark:text-white placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              :disabled="loading"
              class="w-full py-4 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-bold rounded-xl shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <Icon v-if="loading" name="lucide:loader-2" class="w-5 h-5 animate-spin" />
              <div v-else class="flex items-center gap-2">
                <span>{{ $t('contact.send_message') }}</span>
                <Icon name="lucide:send" class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  title: 'Contact Us'
})

const loading = ref(false)
const form = ref({
  name: '',
  email: '',
  subject: 'general',
  message: ''
})

const handleSubmit = async () => {
  loading.value = true
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  loading.value = false
  alert('Message sent successfully! (This is a demo)')
  
  // Reset form
  form.value = {
    name: '',
    email: '',
    subject: 'general',
    message: ''
  }
}
</script>

<style scoped>
.glass {
  background: rgba(255, 255, 255, 0.7);
}
.dark .glass {
  background: rgba(15, 23, 42, 0.6);
}
</style>
