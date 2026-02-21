<template>
  <div class="min-h-screen bg-surface-50 dark:bg-surface-950 text-surface-900 dark:text-surface-100 flex flex-col font-sans">
    
    <!-- Secondary Header / Top Nav for Context -->
    <header class="sticky top-20 z-40 bg-white/80 dark:bg-surface-900/80 backdrop-blur-md border-b border-surface-200 dark:border-surface-800 hidden md:block">
      <div class="px-6 md:px-10 py-3 flex items-center justify-between max-w-7xl mx-auto w-full">
        <div class="flex items-center gap-4">
          <div class="text-primary-600 dark:text-primary-400">
            <Icon name="lucide:briefcase" class="w-6 h-6" />
          </div>
          <h2 class="text-surface-900 dark:text-white text-lg font-bold leading-tight tracking-tight">Employer Portal</h2>
        </div>
        <div class="flex items-center gap-6">
          <button class="flex items-center gap-2 text-surface-500 hover:text-surface-800 dark:text-surface-400 dark:hover:text-white transition-colors">
            <Icon name="lucide:help-circle" class="w-4 h-4" />
            <span class="text-sm font-medium">Help Center</span>
          </button>
          <div class="h-6 w-px bg-surface-200 dark:bg-surface-700"></div>
          <NuxtLink :to="localePath('/employer/dashboard')" class="flex items-center gap-2 text-surface-500 hover:text-rose-600 dark:hover:text-rose-400 transition-colors">
            <span class="text-sm font-bold">Cancel</span>
          </NuxtLink>
        </div>
      </div>
    </header>

    <!-- Main Content Area -->
    <main class="flex-grow w-full max-w-7xl mx-auto px-4 md:px-10 py-8 md:pt-12">
      <div class="flex flex-col lg:flex-row gap-8 relative">
        
        <!-- Left Column: The Form -->
        <div class="w-full lg:w-2/3 flex flex-col gap-8">
          
          <!-- Header Section -->
          <div class="flex flex-col gap-2">
            <nav class="flex items-center text-sm text-surface-500 mb-2">
              <NuxtLink :to="localePath('/jobs')" class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Jobs</NuxtLink>
              <span class="mx-2">/</span>
              <NuxtLink :to="localePath('/employer/dashboard')" class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Manage</NuxtLink>
              <span class="mx-2">/</span>
              <span class="text-surface-900 dark:text-white font-medium">Post New</span>
            </nav>
            <h1 class="text-3xl md:text-4xl font-black text-surface-900 dark:text-white tracking-tight">{{ $t('employer_post_job.title') }}</h1>
            <p class="text-surface-500 dark:text-surface-400 text-lg">{{ $t('employer_post_job.subtitle') }}</p>
          </div>

          <!-- Progress Steps -->
          <div class="bg-white dark:bg-surface-800 rounded-xl p-6 shadow-sm border border-surface-200 dark:border-surface-700">
            <div class="flex items-center justify-between mb-3 text-sm">
              <span class="text-primary-600 dark:text-primary-400 font-bold">{{ $t('employer_post_job.step_1') }}</span>
              <span class="text-surface-500 dark:text-surface-400 font-medium">25% completed</span>
            </div>
            <div class="h-2 w-full bg-surface-100 dark:bg-surface-700 rounded-full overflow-hidden">
              <div class="h-full bg-primary-600 w-1/4 rounded-full transition-all duration-500"></div>
            </div>
          </div>

          <!-- Section 1: Job Details -->
          <section class="bg-white dark:bg-surface-800 rounded-xl shadow-sm border border-surface-200 dark:border-surface-700 overflow-hidden">
            <div class="p-6 border-b border-surface-100 dark:border-surface-700 bg-surface-50/50 dark:bg-surface-800/50">
              <h2 class="text-xl font-bold text-surface-900 dark:text-white flex items-center gap-3">
                <span class="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-bold">1</span>
                {{ $t('employer_post_job.step_1_title') }}
              </h2>
            </div>
            <div class="p-6 md:p-8 flex flex-col gap-6">
              <!-- Job Title -->
              <div class="flex flex-col gap-2">
                <label class="text-sm font-semibold text-surface-700 dark:text-surface-300" for="job-title">{{ $t('employer_post_job.job_title') }} <span class="text-rose-500">*</span></label>
                <input v-model="form.title" type="text" id="job-title" :placeholder="$t('employer_post_job.job_title_placeholder')" class="w-full rounded-lg border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-900 text-surface-900 dark:text-white shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none px-4 py-2.5 transition-shadow">
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Category -->
                <div class="flex flex-col gap-2">
                  <label class="text-sm font-semibold text-surface-700 dark:text-surface-300" for="category">{{ $t('employer_post_job.category') }}</label>
                  <select v-model="form.category" id="category" class="w-full rounded-lg border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-900 text-surface-900 dark:text-white shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none px-4 py-2.5 transition-shadow appearance-none">
                    <option>Design & Creative</option>
                    <option>Engineering</option>
                    <option>Marketing</option>
                    <option>Sales</option>
                    <option>Service & Retail</option>
                  </select>
                </div>
                <!-- Employment Type -->
                <div class="flex flex-col gap-2">
                  <label class="text-sm font-semibold text-surface-700 dark:text-surface-300" for="emp-type">{{ $t('employer_post_job.job_type') }}</label>
                  <select v-model="form.type" id="emp-type" class="w-full rounded-lg border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-900 text-surface-900 dark:text-white shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none px-4 py-2.5 transition-shadow appearance-none">
                    <option>{{ $t('job_types.full_time') }}</option>
                    <option>{{ $t('job_types.part_time') }}</option>
                    <option>Contract</option>
                    <option>{{ $t('job_types.freelance') }}</option>
                    <option>Internship</option>
                  </select>
                </div>
              </div>
              
              <!-- Salary Range -->
              <div class="flex flex-col gap-2">
                <label class="text-sm font-semibold text-surface-700 dark:text-surface-300">{{ $t('employer_post_job.salary_range') }}</label>
                <div class="flex items-center gap-4">
                  <div class="relative w-full">
                    <span class="absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 font-medium">฿</span>
                    <input v-model="form.salaryMin" type="number" placeholder="Min" class="w-full pl-8 pr-4 py-2.5 rounded-lg border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-900 text-surface-900 dark:text-white shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-shadow">
                  </div>
                  <span class="text-surface-400 dark:text-surface-500 font-medium">-</span>
                  <div class="relative w-full">
                    <span class="absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 font-medium">฿</span>
                    <input v-model="form.salaryMax" type="number" placeholder="Max" class="w-full pl-8 pr-4 py-2.5 rounded-lg border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-900 text-surface-900 dark:text-white shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-shadow">
                  </div>
                </div>
              </div>
              
              <!-- Location -->
              <div class="flex flex-col gap-2">
                <label class="text-sm font-semibold text-surface-700 dark:text-surface-300" for="location">{{ $t('employer_post_job.location') }}</label>
                <div class="relative">
                  <Icon name="lucide:map-pin" class="absolute left-3 top-1/2 -translate-y-1/2 text-surface-400 w-5 h-5" />
                  <input v-model="form.location" type="text" id="location" :placeholder="$t('employer_post_job.location_placeholder')" class="w-full pl-10 pr-4 py-2.5 rounded-lg border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-900 text-surface-900 dark:text-white shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-shadow">
                </div>
              </div>
            </div>
          </section>

          <!-- Section 2: Description -->
          <section class="bg-white dark:bg-surface-800 rounded-xl shadow-sm border border-surface-200 dark:border-surface-700 overflow-hidden">
            <div class="p-6 border-b border-surface-100 dark:border-surface-700 bg-surface-50/50 dark:bg-surface-800/50">
              <h2 class="text-xl font-bold text-surface-900 dark:text-white flex items-center gap-3">
                <span class="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-bold">2</span>
                {{ $t('employer_post_job.step_2_title') }}
              </h2>
            </div>
            <div class="p-6 md:p-8 flex flex-col gap-6">
              <div class="flex flex-col gap-2">
                <label class="text-sm font-semibold text-surface-700 dark:text-surface-300">{{ $t('employer_post_job.job_description') }}</label>
                <div class="border border-surface-300 dark:border-surface-600 rounded-lg overflow-hidden bg-white dark:bg-surface-900 focus-within:ring-1 focus-within:ring-primary-500 focus-within:border-primary-500 transition-shadow">
                  <!-- Toolbar -->
                  <div class="flex items-center gap-1 p-2 border-b border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-800 gap-x-0.5">
                    <button type="button" class="p-1.5 rounded-md hover:bg-surface-200 dark:hover:bg-surface-700 text-surface-600 dark:text-surface-400 transition-colors">
                      <Icon name="lucide:bold" class="w-4 h-4" />
                    </button>
                    <button type="button" class="p-1.5 rounded-md hover:bg-surface-200 dark:hover:bg-surface-700 text-surface-600 dark:text-surface-400 transition-colors">
                      <Icon name="lucide:italic" class="w-4 h-4" />
                    </button>
                    <button type="button" class="p-1.5 rounded-md hover:bg-surface-200 dark:hover:bg-surface-700 text-surface-600 dark:text-surface-400 transition-colors">
                      <Icon name="lucide:underline" class="w-4 h-4" />
                    </button>
                    <div class="w-px h-4 bg-surface-300 dark:bg-surface-600 mx-1"></div>
                    <button type="button" class="p-1.5 rounded-md hover:bg-surface-200 dark:hover:bg-surface-700 text-surface-600 dark:text-surface-400 transition-colors">
                      <Icon name="lucide:list" class="w-4 h-4" />
                    </button>
                    <button type="button" class="p-1.5 rounded-md hover:bg-surface-200 dark:hover:bg-surface-700 text-surface-600 dark:text-surface-400 transition-colors">
                      <Icon name="lucide:list-ordered" class="w-4 h-4" />
                    </button>
                  </div>
                  <textarea v-model="form.description" rows="8" :placeholder="$t('employer_post_job.job_description_placeholder')" class="w-full border-none p-4 bg-transparent text-surface-900 dark:text-white focus:ring-0 resize-y outline-none"></textarea>
                </div>
                <p class="text-xs text-surface-500">{{ $t('employer_post_job.job_description_hint') }}</p>
              </div>
            </div>
          </section>

          <!-- Section 3: Benefits -->
          <section class="bg-white dark:bg-surface-800 rounded-xl shadow-sm border border-surface-200 dark:border-surface-700 overflow-hidden">
            <div class="p-6 border-b border-surface-100 dark:border-surface-700 bg-surface-50/50 dark:bg-surface-800/50">
              <h2 class="text-xl font-bold text-surface-900 dark:text-white flex items-center gap-3">
                <span class="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-bold">3</span>
                {{ $t('employer_post_job.step_3_title') }}
              </h2>
            </div>
            <div class="p-6 md:p-8">
              <div class="flex flex-col gap-4">
                <label class="text-sm font-semibold text-surface-700 dark:text-surface-300">{{ $t('employer_post_job.select_benefits') }}</label>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  <label v-for="benefit in availableBenefits" :key="benefit.id" class="flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all group" :class="form.benefits.includes(benefit.id) ? 'border-primary-500 bg-primary-50/50 dark:bg-primary-900/10' : 'border-surface-200 dark:border-surface-700 hover:border-primary-300 dark:hover:border-primary-700 hover:bg-surface-50 dark:hover:bg-surface-800/50'">
                    <input type="checkbox" :value="benefit.id" v-model="form.benefits" class="w-4 h-4 rounded text-primary-600 border-surface-300 focus:ring-primary-500 dark:border-surface-600 dark:bg-surface-700" />
                    <span class="text-sm font-medium transition-colors" :class="form.benefits.includes(benefit.id) ? 'text-primary-700 dark:text-primary-300' : 'text-surface-700 dark:text-surface-300 group-hover:text-surface-900 dark:group-hover:text-white'">{{ $t('benefits.' + benefit.id) }}</span>
                  </label>
                </div>
              </div>
            </div>
          </section>

          <!-- Section 4: Settings -->
          <section class="bg-white dark:bg-surface-800 rounded-xl shadow-sm border border-surface-200 dark:border-surface-700 overflow-hidden">
            <div class="p-6 border-b border-surface-100 dark:border-surface-700 bg-surface-50/50 dark:bg-surface-800/50">
              <h2 class="text-xl font-bold text-surface-900 dark:text-white flex items-center gap-3">
                <span class="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-bold">4</span>
                {{ $t('employer_post_job.step_4_title') }}
              </h2>
            </div>
            <div class="p-6 md:p-8">
              <div class="flex items-center justify-between gap-4 p-5 rounded-xl border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-800/50">
                <div>
                  <h3 class="text-sm font-bold text-surface-900 dark:text-white">{{ $t('employer_post_job.allow_reviews') }}</h3>
                  <p class="text-sm text-surface-500 mt-1">{{ $t('employer_post_job.allow_reviews_desc') }}</p>
                </div>
                <!-- Toggle -->
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" v-model="form.allowReviews" class="sr-only peer">
                  <div class="w-11 h-6 bg-surface-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-surface-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                </label>
              </div>
            </div>
          </section>

          <!-- Action Footer -->
          <div class="flex flex-col-reverse sm:flex-row gap-4 justify-between items-center py-6 border-t border-surface-200 dark:border-surface-700">
            <button type="button" class="w-full sm:w-auto px-6 py-3 rounded-xl border border-surface-300 dark:border-surface-600 text-surface-700 dark:text-surface-300 font-bold hover:bg-surface-50 dark:hover:bg-surface-800 transition-colors">
              {{ $t('employer_post_job.save_draft') }}
            </button>
            <div class="flex w-full sm:w-auto gap-3 sm:gap-4">
              <button type="button" class="flex-1 sm:flex-none px-6 py-3 rounded-xl text-primary-600 dark:text-primary-400 font-bold hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors">
                {{ $t('employer_post_job.preview') }}
              </button>
              <button type="button" class="flex-1 sm:flex-none px-8 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-bold shadow-lg shadow-primary-500/20 active:scale-95 transition-all">
                {{ $t('employer_post_job.post_job') }}
              </button>
            </div>
          </div>
          
        </div>

        <!-- Right Column: Sticky Sidebar / Live Preview -->
        <aside class="w-full lg:w-1/3 hidden lg:block">
          <div class="sticky top-28 flex flex-col gap-6">
            <div class="flex items-center gap-2 mb-2">
              <Icon name="lucide:eye" class="w-5 h-5 text-surface-500" />
              <h3 class="text-sm font-bold uppercase tracking-wider text-surface-500">{{ $t('employer_post_job.live_preview') }}</h3>
            </div>
            
            <!-- Preview Card -->
            <div class="bg-white dark:bg-surface-800 rounded-2xl shadow-lg border border-surface-200 dark:border-surface-700 overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
              <!-- Card Header Image -->
              <div class="h-32 bg-gradient-to-r from-primary-600 to-indigo-600 relative p-6 flex items-end">
                <div class="absolute -bottom-6 left-6 w-16 h-16 bg-white dark:bg-surface-800 p-1 rounded-xl shadow-md border border-surface-100 dark:border-surface-700">
                  <div class="w-full h-full bg-surface-50 dark:bg-surface-700 rounded-lg flex items-center justify-center text-surface-400">
                    <Icon name="lucide:building-2" class="w-8 h-8 opacity-50" />
                  </div>
                </div>
              </div>
              <div class="pt-10 px-6 pb-6">
                <div class="flex justify-between items-start mb-2">
                  <div>
                    <h4 class="text-xl font-bold text-surface-900 dark:text-white line-clamp-1 break-all">{{ form.title || $t('employer_post_job.job_title') }}</h4>
                    <p class="text-sm text-primary-600 dark:text-primary-400 font-medium mt-1">{{ form.category || $t('employer_post_job.category') }} • {{ form.type || $t('job_types.full_time') }}</p>
                  </div>
                  <button class="text-surface-400 hover:text-primary-500 transition-colors shrink-0">
                    <Icon name="lucide:bookmark" class="w-5 h-5" />
                  </button>
                </div>
                
                <div class="flex flex-wrap gap-2 my-4">
                  <span class="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-surface-100 dark:bg-surface-700 text-surface-700 dark:text-surface-300 text-xs font-semibold">
                    <Icon name="lucide:map-pin" class="w-3.5 h-3.5" />
                    {{ form.location || $t('employer_post_job.location') }}
                  </span>
                  <span class="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
                    <Icon name="lucide:banknote" class="w-3.5 h-3.5" />
                    ฿{{ form.salaryMin || '0' }} - ฿{{ form.salaryMax || '0' }}
                  </span>
                </div>
                
                <div class="text-surface-600 dark:text-surface-400 line-clamp-3 mb-6 text-sm leading-relaxed min-h-[4rem]">
                   {{ form.description || $t('employer_post_job.job_description') }}
                </div>
                
                <!-- Benefits Preview -->
                <div class="flex flex-wrap gap-2 mb-6 min-h-[1.5rem]">
                  <span v-for="bId in form.benefits.slice(0, 3)" :key="bId" class="px-2.5 py-1 rounded-md border border-surface-200 dark:border-surface-600 text-[10px] text-surface-500 dark:text-surface-400 uppercase font-bold tracking-wider">
                    {{ $t('benefits.' + bId) }}
                  </span>
                  <span v-if="form.benefits.length > 3" class="px-2.5 py-1 rounded-md bg-surface-100 dark:bg-surface-800 text-[10px] text-surface-500 dark:text-surface-400 font-bold">+{{ form.benefits.length - 3 }}</span>
                </div>
                
                <button class="w-full py-3 bg-surface-900 dark:bg-white text-white dark:text-surface-900 font-bold rounded-xl hover:opacity-90 active:scale-95 transition-all text-sm">
                  {{ $t('employer_post_job.apply_now') }}
                </button>
              </div>
            </div>

            <!-- Hiring Team Preview (Mini Card) -->
            <div class="bg-white dark:bg-surface-800 rounded-xl shadow-sm border border-surface-200 dark:border-surface-700 p-4 flex items-center gap-4">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 flex items-center justify-center shrink-0 border border-indigo-200 dark:border-indigo-800/50">
                <span class="text-indigo-700 dark:text-indigo-300 font-bold text-lg leading-none">SJ</span>
              </div>
              <div>
                <p class="text-[10px] text-surface-500 font-bold uppercase tracking-wider mb-0.5">{{ $t('employer_post_job.hiring_manager') }}</p>
                <p class="text-sm font-bold text-surface-900 dark:text-white">Sarah Jenkins</p>
              </div>
            </div>

            <!-- Help Box -->
            <div class="bg-primary-50 dark:bg-primary-900/10 rounded-xl p-5 border border-primary-100 dark:border-primary-800/50">
              <div class="flex items-start gap-3">
                <Icon name="lucide:lightbulb" class="w-5 h-5 text-primary-600 dark:text-primary-400 shrink-0 mt-0.5" />
                <div>
                  <h4 class="text-sm font-bold text-primary-700 dark:text-primary-400 mb-1">{{ $t('employer_post_job.pro_tip') }}</h4>
                  <p class="text-xs text-primary-800/70 dark:text-primary-200/70 leading-relaxed">
                    {{ $t('employer_post_job.pro_tip_desc') }}
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </aside>

      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

useSeoMeta({
  title: 'Post a New Job - PreJob Employer'
})

definePageMeta({
  layout: 'default' // keep the main navbar and footer, though we have a secondary header here
})

// Form state mapped to preview
const form = reactive({
  title: '',
  category: 'Design & Creative',
  type: 'Full-time',
  salaryMin: '',
  salaryMax: '',
  location: '',
  description: '',
  benefits: ['remote', 'health'],
  allowReviews: true
})

const availableBenefits = [
  { id: 'health', label: 'Health Insurance' },
  { id: 'remote', label: 'Remote Work' },
  { id: 'pto', label: 'Paid Time Off' },
  { id: 'provident', label: 'Provident Fund' },
  { id: 'gym', label: 'Gym Membership' },
  { id: 'commute', label: 'Commuter Benefits' },
]
</script>
