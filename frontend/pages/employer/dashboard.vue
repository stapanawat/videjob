<template>
  <div class="min-h-screen pt-24 pb-12 max-w-7xl mx-auto px-6">
      <!-- Main Content -->
      <main class="w-full space-y-8">
        <!-- Header -->
        <div class="flex items-center justify-between">
          <h1 class="text-2xl font-bold text-surface-900 dark:text-white">Dashboard</h1>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white dark:bg-surface-800 p-6 rounded-2xl shadow-sm border border-surface-200 dark:border-surface-700">
            <div class="text-surface-500 dark:text-surface-400 text-sm mb-2">Active Jobs</div>
            <div class="text-3xl font-bold text-surface-900 dark:text-white">3</div>
          </div>
          <div class="bg-white dark:bg-surface-800 p-6 rounded-2xl shadow-sm border border-surface-200 dark:border-surface-700">
            <div class="text-surface-500 dark:text-surface-400 text-sm mb-2">New Applicants</div>
            <div class="text-3xl font-bold text-primary-600 dark:text-primary-400">12</div>
          </div>
          <div class="bg-white dark:bg-surface-800 p-6 rounded-2xl shadow-sm border border-surface-200 dark:border-surface-700">
            <div class="text-surface-500 dark:text-surface-400 text-sm mb-2">My Review Score</div>
            <div class="flex items-center gap-2">
              <span class="text-3xl font-bold text-surface-900 dark:text-white">4.8</span>
              <Icon name="lucide:star" class="w-6 h-6 text-amber-400 fill-current" />
            </div>
          </div>
        </div>

        <!-- Recent Applicants -->
        <div class="bg-white dark:bg-surface-800 rounded-2xl shadow-sm border border-surface-200 dark:border-surface-700 overflow-hidden">
           <div class="px-6 py-4 border-b border-surface-200 dark:border-surface-700 flex items-center justify-between">
             <h2 class="font-bold text-lg text-surface-900 dark:text-white">Recent Applicants</h2>
             <button class="text-sm text-primary-600 dark:text-primary-400 hover:underline">View All</button>
           </div>
           
           <div class="divide-y divide-surface-200 dark:divide-surface-700">
             <div v-for="applicant in applicants" :key="applicant.id" class="p-6 hover:bg-surface-50 dark:hover:bg-surface-700/50 transition-colors">
               <div class="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                 <!-- Avatar with Score -->
                 <div class="relative">
                   <div class="w-16 h-16 rounded-full bg-surface-200 dark:bg-surface-600 flex items-center justify-center text-xl font-bold text-surface-600 dark:text-surface-300">
                     {{ applicant.initials }}
                   </div>
                   <!-- Verified Badge -->
                   <div v-if="applicant.verified" class="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center border-2 border-white dark:border-surface-800 text-white" title="Verified ID">
                     <Icon name="lucide:check" class="w-3 h-3" />
                   </div>
                 </div>

                 <!-- Info -->
                 <div class="flex-1 text-center md:text-left">
                   <h3 class="font-bold text-lg text-surface-900 dark:text-white">{{ applicant.name }}</h3>
                   <div class="flex items-center justify-center md:justify-start gap-3 mt-1 text-sm">
                      <div class="flex items-center gap-1 text-amber-500">
                        <span class="font-bold">{{ applicant.rating }}</span>
                        <Icon name="lucide:star" class="w-4 h-4 fill-current" />
                      </div>
                      <span class="text-surface-400">•</span>
                      <span class="text-surface-500 dark:text-surface-400">{{ applicant.reviews }} reviews</span>
                   </div>
                   <div class="mt-2 flex flex-wrap justify-center md:justify-start gap-2">
                     <span v-for="tag in applicant.tags" :key="tag" class="px-2 py-0.5 rounded-md bg-surface-100 dark:bg-surface-700 text-xs text-surface-600 dark:text-surface-300">
                        {{ tag }}
                     </span>
                   </div>
                 </div>

                 <!-- Actions -->
                 <div class="flex items-center gap-3 w-full md:w-auto">
                    <button class="flex-1 md:flex-none px-4 py-2 border border-surface-300 dark:border-surface-600 rounded-lg text-surface-700 dark:text-surface-300 font-medium hover:bg-surface-50 dark:hover:bg-surface-700 transition-colors">
                      Profile
                    </button>
                    <button class="flex-1 md:flex-none px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium shadow-lg shadow-primary-500/20 active:scale-95 transition-all flex items-center justify-center gap-2">
                      <Icon name="lucide:calendar-check" class="w-4 h-4" />
                      Make Appointment
                    </button>
                 </div>
               </div>
               
               <!-- Review Snippet -->
               <div class="mt-4 p-3 bg-surface-50 dark:bg-surface-900/50 rounded-xl border border-surface-100 dark:border-surface-700/50 flex items-start gap-3">
                 <Icon name="lucide:quote" class="w-5 h-5 text-surface-400 flex-shrink-0" />
                 <div>
                   <p class="text-sm text-surface-600 dark:text-surface-300 italic">"{{ applicant.lastReview }}"</p>
                   <div class="text-xs text-surface-400 mt-1">— Previous Employer ({{ applicant.lastEmployer }})</div>
                 </div>
               </div>
             </div>
           </div>
        </div>
      </main>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Employer Dashboard - PreJob'
})

const applicants = [
  {
    id: 1,
    name: 'Somsak J.',
    initials: 'SJ',
    rating: 4.9,
    reviews: 12,
    verified: true,
    tags: ['Barista', 'Punctual', 'Friendly'],
    lastReview: 'Very hardworking and always on time. Highly recommended!',
    lastEmployer: 'Coffee Bean Co.'
  },
  {
    id: 2,
    name: 'Maria K.',
    initials: 'MK',
    rating: 4.5,
    reviews: 8,
    verified: true,
    tags: ['Service', 'English Speaker'],
    lastReview: 'Good service mind but sometimes struggles with rush hour.',
    lastEmployer: 'Sushi Express'
  },
  {
    id: 3,
    name: 'Ken T.',
    initials: 'KT',
    rating: 3.8,
    reviews: 5,
    verified: false,
    tags: ['Kitchen Hand', 'Fast Learner'],
    lastReview: 'Okay worker, but needs to improve communication.',
    lastEmployer: 'Burger King'
  }
]
</script>
