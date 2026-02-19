<template>
  <div class="min-h-screen pt-24 pb-12 px-6">
    <div class="max-w-4xl mx-auto bg-white dark:bg-surface-800 rounded-2xl shadow-xl border border-surface-200 dark:border-surface-700 p-8">
      <h1 class="text-2xl font-bold text-surface-900 dark:text-white mb-6 flex items-center gap-3">
        <div class="p-2 bg-primary-100 dark:bg-primary-900/40 rounded-lg text-primary-600 dark:text-primary-400">
          <Icon name="lucide:pen-tool" class="w-6 h-6" />
        </div>
        Post a New Job
      </h1>
      
      <form class="space-y-8">
        <!-- Job Sections -->
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Left Column -->
          <div class="space-y-6">
            <h2 class="text-lg font-semibold text-surface-900 dark:text-white border-b border-surface-200 dark:border-surface-700 pb-2">The Basics</h2>
            
            <div class="space-y-1">
              <label class="text-sm font-medium text-surface-700 dark:text-surface-300">Job Title</label>
              <input type="text" placeholder="e.g. Barista, Service Crew" class="w-full bg-surface-50 dark:bg-surface-900 border-surface-200 dark:border-surface-700 rounded-xl px-4 py-3 text-surface-900 dark:text-white focus:border-primary-500 focus:outline-none placeholder:text-surface-400 focus:ring-2 focus:ring-primary-500/20 transition-all">
            </div>
            
            <div class="space-y-1">
              <label class="text-sm font-medium text-surface-700 dark:text-surface-300">Category</label>
              <select class="w-full bg-surface-50 dark:bg-surface-900 border-surface-200 dark:border-surface-700 rounded-xl px-4 py-3 text-surface-900 dark:text-white focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all">
                <option>Restaurant / Cafe</option>
                <option>Retail / Shop</option>
                <option>Event / Booth</option>
                <option>Other</option>
              </select>
            </div>

            <div class="space-y-1">
              <label class="text-sm font-medium text-surface-700 dark:text-surface-300">Job Type</label>
              <div class="flex flex-wrap gap-2">
                <button type="button" class="px-4 py-2 rounded-lg bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-700 font-medium text-sm">Part-time</button>
                <button type="button" class="px-4 py-2 rounded-lg bg-surface-50 dark:bg-surface-800 text-surface-600 dark:text-surface-400 border border-surface-200 dark:border-surface-700 font-medium text-sm hover:bg-surface-100 dark:hover:bg-surface-700">Full-time</button>
                <button type="button" class="px-4 py-2 rounded-lg bg-surface-50 dark:bg-surface-800 text-surface-600 dark:text-surface-400 border border-surface-200 dark:border-surface-700 font-medium text-sm hover:bg-surface-100 dark:hover:bg-surface-700">Event</button>
              </div>
            </div>
          </div>

          <!-- Right Column -->
           <div class="space-y-6">
            <h2 class="text-lg font-semibold text-surface-900 dark:text-white border-b border-surface-200 dark:border-surface-700 pb-2">Details</h2>

            <div class="space-y-1">
              <label class="text-sm font-medium text-surface-700 dark:text-surface-300">Hourly Wage (THB)</label>
              <div class="flex items-center gap-2">
                <input type="number" placeholder="Min" class="w-full bg-surface-50 dark:bg-surface-900 border-surface-200 dark:border-surface-700 rounded-xl px-4 py-3 text-surface-900 dark:text-white focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all">
                <span class="text-surface-400">-</span>
                <input type="number" placeholder="Max" class="w-full bg-surface-50 dark:bg-surface-900 border-surface-200 dark:border-surface-700 rounded-xl px-4 py-3 text-surface-900 dark:text-white focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all">
              </div>
            </div>
            
            <div class="space-y-1">
              <label class="text-sm font-medium text-surface-700 dark:text-surface-300">Location</label>
              <div class="relative">
                 <Icon name="lucide:map-pin" class="absolute left-3 top-1/2 -translate-y-1/2 text-surface-400 w-5 h-5" />
                 <input type="text" placeholder="e.g. Siam Paragon, BTS Asok" class="w-full bg-surface-50 dark:bg-surface-900 border-surface-200 dark:border-surface-700 rounded-xl pl-10 pr-4 py-3 text-surface-900 dark:text-white focus:border-primary-500 focus:outline-none placeholder:text-surface-400 focus:ring-2 focus:ring-primary-500/20 transition-all">
              </div>
            </div>
          </div>
        </div>

        <div class="space-y-1">
          <label class="text-sm font-medium text-surface-700 dark:text-surface-300">Description</label>
          <textarea rows="6" placeholder="Describe the role, responsibilities, benefits, and typical shifts..." class="w-full bg-surface-50 dark:bg-surface-900 border-surface-200 dark:border-surface-700 rounded-xl px-4 py-3 text-surface-900 dark:text-white focus:border-primary-500 focus:outline-none placeholder:text-surface-400 focus:ring-2 focus:ring-primary-500/20 transition-all"></textarea>
        </div>

        <!-- Actions -->
        <div class="pt-6 flex flex-col-reverse sm:flex-row items-center justify-end gap-3 sm:gap-4 border-t border-surface-200 dark:border-surface-700">
          <NuxtLink to="/employer/dashboard" class="w-full sm:w-auto text-center px-6 py-3 text-surface-600 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700 rounded-xl font-medium transition-colors">Cancel</NuxtLink>
          <button type="submit" class="w-full sm:w-auto px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl shadow-lg shadow-primary-500/20 active:scale-95 transition-all flex items-center justify-center gap-2">
            <Icon name="lucide:send" class="w-4 h-4" /> Publish Job
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Post a Job - PreJob'
})
</script>
