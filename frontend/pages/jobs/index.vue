<template>
  <div class="pt-24 pb-12 max-w-7xl mx-auto px-6">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-2 text-surface-900 dark:text-white">{{ $t('jobs.title') }}</h1>
      <p class="text-surface-500 dark:text-surface-400">{{ $t('jobs.subtitle') }}</p>
    </div>

    <div class="grid lg:grid-cols-4 gap-8">
      <!-- Filters Sidebar (Desktop) -->
      <aside class="hidden lg:block space-y-8 sticky top-24 h-fit">
        <!-- Job Type Filter -->
        <div class="p-6 rounded-xl bg-white dark:bg-surface-800 shadow-sm border border-surface-200 dark:border-surface-700">
          <h3 class="font-semibold mb-4 flex items-center gap-2 text-surface-900 dark:text-white">
            <Icon name="lucide:briefcase" class="text-primary-600 dark:text-primary-400" />
            {{ $t('jobs.job_type') }}
          </h3>
          <div class="space-y-3">
            <label v-for="type in jobTypes" :key="type.id" class="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" v-model="selectedTypes" :value="type.id" class="w-4 h-4 rounded border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-primary-600 focus:ring-primary-500">
              <span class="text-sm text-surface-600 dark:text-surface-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{{ type.label }}</span>
            </label>
          </div>
        </div>

        <!-- Salary Range -->
        <div class="p-6 rounded-xl bg-white dark:bg-surface-800 shadow-sm border border-surface-200 dark:border-surface-700">
          <h3 class="font-semibold mb-4 flex items-center gap-2 text-surface-900 dark:text-white">
            <Icon name="lucide:banknote" class="text-primary-600 dark:text-primary-400" />
            {{ $t('jobs.salary_range') }}
          </h3>
          <div class="space-y-4">
            <div class="flex items-center gap-2">
              <input v-model.number="salaryMin" type="number" placeholder="Min" class="w-full bg-surface-50 dark:bg-surface-700 border-surface-200 dark:border-surface-600 rounded-lg px-3 py-2 text-sm focus:border-primary-500 focus:outline-none text-surface-900 dark:text-white placeholder:text-surface-400">
              <span class="text-surface-500 dark:text-surface-400">-</span>
              <input v-model.number="salaryMax" type="number" placeholder="Max" class="w-full bg-surface-50 dark:bg-surface-700 border-surface-200 dark:border-surface-600 rounded-lg px-3 py-2 text-sm focus:border-primary-500 focus:outline-none text-surface-900 dark:text-white placeholder:text-surface-400">
            </div>
            <button @click="salaryMin = null; salaryMax = null" class="w-full py-2 bg-surface-100 dark:bg-surface-700 hover:bg-surface-200 dark:hover:bg-surface-600 text-surface-600 dark:text-surface-300 text-sm font-medium rounded-lg transition-colors">
              {{ $t('jobs.clear_filters') }}
            </button>
          </div>
        </div>

        <!-- Location -->
        <div class="p-6 rounded-xl bg-white dark:bg-surface-800 shadow-sm border border-surface-200 dark:border-surface-700">
          <h3 class="font-semibold mb-4 flex items-center gap-2 text-surface-900 dark:text-white">
            <Icon name="lucide:map-pin" class="text-primary-600 dark:text-primary-400" />
            {{ $t('jobs.location') }}
          </h3>
          <div class="space-y-3">
            <label v-for="area in areas" :key="area.id" class="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" v-model="selectedAreas" :value="area.id" class="w-4 h-4 rounded border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-primary-600 focus:ring-primary-500">
              <span class="text-sm text-surface-600 dark:text-surface-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{{ area.label }}</span>
            </label>
          </div>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="lg:col-span-3">
        <!-- Search Bar -->
        <div class="p-4 rounded-2xl mb-6 flex flex-col md:flex-row gap-4 bg-white dark:bg-surface-800 shadow-sm border border-surface-200 dark:border-surface-700">
          <div class="flex-1 relative">
            <Icon name="lucide:search" class="absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 w-5 h-5" />
            <input v-model="searchQuery" type="text" :placeholder="$t('hero.search_placeholder')" 
                   class="w-full bg-surface-50 dark:bg-surface-700 border border-surface-200 dark:border-surface-600 rounded-xl pl-12 pr-4 py-3 text-surface-900 dark:text-white placeholder:text-surface-400 focus:border-primary-500 focus:outline-none transition-colors">
          </div>
          <div class="flex gap-2">
            <button @click="showMobileFilters = true" class="lg:hidden px-4 py-3 bg-surface-100 dark:bg-surface-700 hover:bg-surface-200 dark:hover:bg-surface-600 text-surface-700 dark:text-surface-300 font-semibold rounded-xl flex items-center justify-center gap-2 transition-all">
              <Icon name="lucide:filter" class="w-5 h-5" />
              <span class="hidden sm:inline">{{ $t('jobs.filters') }}</span>
            </button>
            <button @click="() => {}" class="flex-1 md:flex-none px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary-500/20">
              <Icon name="lucide:search" class="w-5 h-5" />
              {{ $t('hero.search_button') }}
            </button>
          </div>
        </div>

        <!-- Active Filters -->
        <div v-if="hasActiveFilters" class="flex flex-wrap items-center gap-2 mb-4">
          <span class="text-sm text-surface-500 dark:text-surface-400">{{ $t('jobs.filters') }}:</span>
          <span v-for="type in selectedTypes" :key="type" 
                class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-medium">
            {{ jobTypes.find(t => t.id === type)?.label }}
            <button @click="selectedTypes = selectedTypes.filter(t => t !== type)" class="hover:text-primary-800 dark:hover:text-primary-200">
              <Icon name="lucide:x" class="w-3 h-3" />
            </button>
          </span>
          <span v-for="area in selectedAreas" :key="area" 
                class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-medium">
            {{ areas.find(a => a.id === area)?.label }}
            <button @click="selectedAreas = selectedAreas.filter(a => a !== area)" class="hover:text-indigo-800 dark:hover:text-indigo-200">
              <Icon name="lucide:x" class="w-3 h-3" />
            </button>
          </span>
          <button @click="clearAllFilters" class="text-xs text-surface-500 dark:text-surface-400 hover:text-danger-500 underline ml-2">{{ $t('jobs.clear_all') }}</button>
        </div>

        <!-- Results Info & View Toggle -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <span class="text-surface-500 dark:text-surface-400">{{ $t('jobs.found') }} <span class="text-primary-600 dark:text-primary-400 font-semibold">{{ filteredJobs.length }}</span> {{ $t('jobs.positions') }}</span>
          
          <div class="flex items-center gap-4">
            <!-- View Toggle -->
            <div class="hidden sm:flex items-center gap-1 p-1 bg-surface-100 dark:bg-surface-800 rounded-lg border border-surface-200 dark:border-surface-700">
               <button @click="viewMode = 'list'" 
                       :class="['p-1.5 rounded-md transition-all', viewMode === 'list' ? 'bg-white dark:bg-surface-700 text-primary-600 dark:text-primary-400 shadow-sm' : 'text-surface-500 hover:text-surface-700']">
                 <Icon name="lucide:list" class="w-5 h-5" />
               </button>
               <button @click="viewMode = 'grid'" 
                       :class="['p-1.5 rounded-md transition-all', viewMode === 'grid' ? 'bg-white dark:bg-surface-700 text-primary-600 dark:text-primary-400 shadow-sm' : 'text-surface-500 hover:text-surface-700']">
                 <Icon name="lucide:layout-grid" class="w-5 h-5" />
               </button>
            </div>

            <div class="w-px h-6 bg-surface-200 dark:bg-surface-700 hidden sm:block"></div>

            <div class="flex items-center gap-2 text-sm text-surface-500 dark:text-surface-400">
              <span class="whitespace-nowrap">{{ $t('jobs.sort_by') }}:</span>
              <select v-model="sortBy" class="bg-transparent border-none text-surface-900 dark:text-white font-medium focus:ring-0 cursor-pointer py-0 pl-2 pr-8">
                <option value="latest">{{ $t('jobs.sort_latest') }}</option>
                <option value="highest">{{ $t('jobs.sort_highest') }}</option>
                <option value="lowest">{{ $t('jobs.sort_lowest') }}</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Job List -->
        <div :class="viewMode === 'list' ? 'space-y-4' : 'grid grid-cols-1 md:grid-cols-2 gap-4'" v-auto-animate>
          <div v-if="filteredJobs.length === 0" class="col-span-full text-center py-16">
            <Icon name="lucide:search-x" class="w-16 h-16 text-surface-300 dark:text-surface-600 mx-auto mb-4" />
            <h3 class="text-lg font-semibold text-surface-700 dark:text-surface-300 mb-2">{{ $t('jobs.no_results') }}</h3>
            <p class="text-surface-500 dark:text-surface-400">{{ $t('jobs.try_changing') }}</p>
            <button @click="clearAllFilters" class="mt-4 px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-sm font-medium transition-colors">{{ $t('jobs.clear_filters') }}</button>
          </div>

          <NuxtLink v-for="job in filteredJobs" :key="job.id" :to="localePath(`/jobs/${job.id}`)"
               :class="[
                 'group relative block transition-all duration-300 overflow-hidden cursor-pointer bg-white dark:bg-surface-800 rounded-3xl border border-surface-200 dark:border-surface-700',
                 viewMode === 'list' 
                   ? 'p-6 shadow-sm hover:shadow-xl hover:-translate-y-1' 
                   : 'p-7 hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-2'
               ]">
             
            <!-- Hover Gradient (Grid Only) -->
            <div v-if="viewMode === 'grid'" class="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <!-- LIST VIEW LAYOUT -->
            <div v-if="viewMode === 'list'" class="relative z-10 flex flex-col sm:flex-row gap-6">
               <!-- Hover Gradient (List) -->
               <div class="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"></div>
               
              <!-- Shop Logo -->
              <div class="w-16 h-16 rounded-2xl bg-surface-50 dark:bg-surface-700 flex-shrink-0 flex items-center justify-center overflow-hidden border border-surface-100 dark:border-surface-600 shadow-inner group-hover:scale-105 transition-transform">
                <Icon :name="job.logo" class="w-8 h-8 text-surface-400 dark:text-surface-300" />
              </div>

              <!-- Job Details -->
              <div class="flex-1 min-w-0">
                <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 class="text-xl font-bold text-surface-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors mb-2 truncate">{{ job.title }}</h3>
                    <div class="flex items-center gap-3 text-surface-500 dark:text-surface-400 text-sm flex-wrap">
                      <span class="font-medium text-surface-700 dark:text-surface-300 flex items-center gap-1">
                        <Icon name="lucide:building-2" class="w-3.5 h-3.5" />
                        {{ job.shop }}
                      </span>
                      <span class="w-1 h-1 rounded-full bg-surface-300 dark:bg-surface-600"></span>
                      <div class="flex items-center gap-1">
                        <Icon name="lucide:map-pin" class="w-3.5 h-3.5" />
                        {{ job.location }}
                      </div>
                    </div>
                  </div>
                  <div class="text-right">
                    <div class="text-xl font-bold text-emerald-600 dark:text-emerald-400 leading-none mb-1">{{ job.wage }}</div>
                    <div class="text-xs font-medium text-surface-400 dark:text-surface-500 uppercase tracking-wide">บาท / {{ $t('nav.language') === 'TH' ? 'ชม.' : 'hr' }}</div>
                  </div>
                </div>

                <!-- Divider -->
                <div class="h-px w-full bg-surface-100 dark:bg-surface-700 my-4 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 transition-colors"></div>

                <!-- Tags & Action -->
                <div class="flex items-center justify-between">
                    <div class="flex flex-wrap gap-2">
                      <span v-for="tag in job.tags" :key="tag" 
                            class="px-2.5 py-1 rounded-lg bg-surface-50 dark:bg-surface-900/50 text-[10px] sm:text-xs font-semibold text-surface-600 dark:text-surface-300 border border-surface-100 dark:border-surface-700 group-hover:border-primary-200 dark:group-hover:border-primary-800 transition-colors">
                        {{ tag }}
                      </span>
                    </div>
                    
                    <div class="opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0 duration-300 absolute right-6 bottom-6 sm:static sm:translate-x-0">
                        <span class="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center shadow-lg">
                            <Icon name="lucide:arrow-right" class="w-4 h-4" />
                        </span>
                    </div>
                </div>
              </div>
            </div>

            <!-- GRID VIEW LAYOUT (New Implementation) -->
            <div v-else class="relative z-10 flex flex-col h-full">
                <!-- Header -->
                <div class="flex items-center justify-between mb-8">
                    <!-- Logo -->
                    <div class="w-14 h-14 rounded-2xl bg-surface-800/50 dark:bg-black/20 backdrop-blur-sm border border-surface-100 dark:border-white/5 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-500">
                        <Icon :name="job.logo" class="w-7 h-7 text-surface-600 dark:text-gray-400" />
                    </div>
                    <!-- Tag Pill -->
                    <div class="px-3 py-1.5 rounded-full bg-surface-100 dark:bg-white/5 border border-surface-200 dark:border-white/5 text-[10px] font-bold text-surface-600 dark:text-surface-400 uppercase tracking-wider backdrop-blur-md">
                        {{ job.tags[0] || 'GENERAL' }}
                    </div>
                </div>

                <!-- Content -->
                <div class="mb-auto">
                    <h3 class="text-xs font-bold text-surface-400 dark:text-surface-500 uppercase tracking-widest mb-2">{{ job.shop }}</h3>
                    <h4 class="text-xl font-bold text-surface-900 dark:text-white leading-snug group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{{ job.title }}</h4>
                </div>

                <!-- Divider -->
                <div class="h-px w-full bg-surface-100 dark:bg-white/10 my-6 group-hover:scale-110 transition-transform origin-left duration-500"></div>

                <!-- Footer -->
                <div class="space-y-3">
                    <div class="flex items-center gap-3 text-sm text-surface-500 dark:text-surface-400">
                        <Icon name="lucide:map-pin" class="w-4 h-4 text-primary-500" />
                        <span class="truncate tracking-wide">{{ job.location }}</span>
                    </div>
                    <div class="flex items-center gap-3 text-sm text-surface-500 dark:text-surface-400">
                        <Icon name="lucide:wallet" class="w-4 h-4 text-emerald-500" />
                        <span class="font-bold text-surface-900 dark:text-white tracking-wide">{{ job.wage }}</span>
                        <span class="text-[10px] uppercase font-bold text-surface-400">THB</span>
                    </div>
                </div>
            </div>
          </NuxtLink>
        </div>

      </main>
    </div>

    <!-- Mobile Filter Modal -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="translate-y-full opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-full opacity-0"
    >
      <div v-if="showMobileFilters" class="fixed inset-0 z-50 lg:hidden bg-surface-50 dark:bg-surface-950 flex flex-col">
        <!-- Modal Header -->
        <div class="px-6 py-4 border-b border-surface-200 dark:border-surface-800 flex items-center justify-between bg-white dark:bg-surface-900">
          <h2 class="text-xl font-bold text-surface-900 dark:text-white">{{ $t('jobs.filters') }}</h2>
          <button @click="showMobileFilters = false" class="p-2 rounded-full hover:bg-surface-100 dark:hover:bg-surface-800 text-surface-500 transition-colors">
            <Icon name="lucide:x" class="w-6 h-6" />
          </button>
        </div>

        <!-- Scrollable Content -->
        <div class="flex-1 overflow-y-auto p-6 space-y-8">
          <!-- Job Type Filter -->
          <div class="space-y-4">
            <h3 class="font-semibold flex items-center gap-2 text-surface-900 dark:text-white">
              <Icon name="lucide:briefcase" class="text-primary-600 dark:text-primary-400" />
              {{ $t('jobs.job_type') }}
            </h3>
            <div class="space-y-3">
              <label v-for="type in jobTypes" :key="type.id" class="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" v-model="selectedTypes" :value="type.id" class="w-5 h-5 rounded border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-primary-600 focus:ring-primary-500">
                <span class="text-base text-surface-600 dark:text-surface-300">{{ type.label }}</span>
              </label>
            </div>
          </div>

          <div class="w-full h-px bg-surface-200 dark:bg-surface-800"></div>

          <!-- Salary Range -->
          <div class="space-y-4">
            <h3 class="font-semibold flex items-center gap-2 text-surface-900 dark:text-white">
              <Icon name="lucide:banknote" class="text-primary-600 dark:text-primary-400" />
              {{ $t('jobs.salary_range') }}
            </h3>
            <div class="flex items-center gap-2">
              <input v-model.number="salaryMin" type="number" placeholder="Min" class="flex-1 bg-white dark:bg-surface-800 border-surface-200 dark:border-surface-600 rounded-xl px-4 py-3 text-base focus:border-primary-500 focus:outline-none text-surface-900 dark:text-white">
              <span class="text-surface-500 dark:text-surface-400">-</span>
              <input v-model.number="salaryMax" type="number" placeholder="Max" class="flex-1 bg-white dark:bg-surface-800 border-surface-200 dark:border-surface-600 rounded-xl px-4 py-3 text-base focus:border-primary-500 focus:outline-none text-surface-900 dark:text-white">
            </div>
          </div>

          <div class="w-full h-px bg-surface-200 dark:bg-surface-800"></div>

          <!-- Location -->
          <div class="space-y-4">
            <h3 class="font-semibold flex items-center gap-2 text-surface-900 dark:text-white">
              <Icon name="lucide:map-pin" class="text-primary-600 dark:text-primary-400" />
              {{ $t('jobs.location') }}
            </h3>
            <div class="space-y-3">
              <label v-for="area in areas" :key="area.id" class="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" v-model="selectedAreas" :value="area.id" class="w-5 h-5 rounded border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-primary-600 focus:ring-primary-500">
                <span class="text-base text-surface-600 dark:text-surface-300">{{ area.label }}</span>
              </label>
            </div>
          </div>
        </div>

        <!-- Footer Actions -->
        <div class="p-6 bg-white dark:bg-surface-900 border-t border-surface-200 dark:border-surface-800 flex gap-4">
          <button @click="clearAllFilters" class="flex-1 py-3 bg-surface-100 dark:bg-surface-800 text-surface-900 dark:text-white font-semibold rounded-xl text-lg hover:bg-surface-200 dark:hover:bg-surface-700 transition-colors">
            {{ $t('jobs.clear_filters') }}
          </button>
          <button @click="showMobileFilters = false" class="flex-[2] py-3 bg-primary-600 text-white font-bold rounded-xl text-lg hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/20">
            {{ $t('jobs.found') }} {{ filteredJobs.length }} {{ $t('jobs.positions') }}
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'หางานพาร์ทไทม์ - PreJob',
  description: 'ค้นหางานพาร์ทไทม์ ร้านอาหาร คาเฟ่ อีเวนท์ ใกล้คุณ',
})

const route = useRoute()
const localePath = useLocalePath()
const { t } = useI18n()

// --- Filters State ---
const showMobileFilters = ref(false)
const viewMode = ref<'list' | 'grid'>('list')
const searchQuery = ref((route.query.q as string) || '')
const selectedTypes = ref<string[]>([])
const selectedAreas = ref<string[]>([])
const salaryMin = ref<number | null>(null)
const salaryMax = ref<number | null>(null)
const sortBy = ref('latest')

const hasActiveFilters = computed(() => 
  selectedTypes.value.length > 0 || selectedAreas.value.length > 0 || salaryMin.value || salaryMax.value
)

const clearAllFilters = () => {
  searchQuery.value = ''
  selectedTypes.value = []
  selectedAreas.value = []
  salaryMin.value = null
  salaryMax.value = null
}

// --- Filter Options ---
const jobTypes = computed(() => [
  { id: 'part-time', label: t('job_types.part_time') },
  { id: 'full-time', label: t('job_types.full_time') },
  { id: 'event', label: t('job_types.event') },
  { id: 'freelance', label: t('job_types.freelance') },
])

const areas = computed(() => [
  { id: 'siam', label: t('areas.siam') },
  { id: 'sukhumvit', label: t('areas.sukhumvit') },
  { id: 'silom', label: t('areas.silom') },
  { id: 'ari', label: t('areas.ari') },
  { id: 'ladprao', label: t('areas.ladprao') },
])

// --- Jobs Data ---
const jobs = [
  {
    id: 1,
    title: 'พนักงานชงกาแฟ (Barista)',
    shop: 'Aroma Specialty Coffee',
    location: 'Siam Square One',
    wage: '55 - 70',
    wageMin: 55,
    logo: 'lucide:coffee',
    type: 'part-time',
    area: 'siam',
    tags: ['ยินดีรับนักศึกษา', 'มีประสบการณ์ 6 เดือน+', 'กะบ่าย'],
    date: '2026-02-19',
  },
  {
    id: 2,
    title: 'พนักงานเสิร์ฟ (Service Crew)',
    shop: 'Shabu King',
    location: 'Central World',
    wage: '50 - 55',
    wageMin: 50,
    logo: 'lucide:utensils',
    type: 'part-time',
    area: 'siam',
    tags: ['ไม่จำกัดวุฒิ', 'มีอาหารฟรี', 'กะเย็น'],
    date: '2026-02-18',
  },
  {
    id: 3,
    title: 'พนักงานแคชเชียร์',
    shop: 'Mini Mart Pro',
    location: 'BTS อารีย์',
    wage: '50',
    wageMin: 50,
    logo: 'lucide:shopping-cart',
    type: 'full-time',
    area: 'ari',
    tags: ['รักงานบริการ', 'กะเช้า'],
    date: '2026-02-17',
  },
  {
    id: 4,
    title: 'Admin ตอบแชทลูกค้า',
    shop: 'Online Store Support',
    location: 'Work from Home',
    wage: '45 - 60',
    wageMin: 45,
    logo: 'lucide:headset',
    type: 'freelance',
    area: 'ladprao',
    tags: ['ทำงานที่บ้าน', 'ใช้คอมพิวเตอร์คล่อง'],
    date: '2026-02-19',
  },
  {
    id: 5,
    title: 'スタッフ (พนักงานร้านอาหารญี่ปุ่น)',
    shop: 'Sushi Premium',
    location: 'Thonglor',
    wage: '60 - 80',
    wageMin: 60,
    logo: 'lucide:fish',
    type: 'part-time',
    area: 'sukhumvit',
    tags: ['ได้ภาษาญี่ปุ่นพิจารณาพิเศษ', 'ค่าเดินทาง', 'ทิปแยก'],
    date: '2026-02-16',
  },
  {
    id: 6,
    title: 'พนักงานร้านกาแฟ',
    shop: 'Brew Lab',
    location: 'สีลม',
    wage: '55 - 65',
    wageMin: 55,
    logo: 'lucide:coffee',
    type: 'part-time',
    area: 'silom',
    tags: ['ไม่จำเป็นต้องมีประสบการณ์', 'อบรมให้'],
    date: '2026-02-15',
  },
  {
    id: 7,
    title: 'MC งานอีเวนท์',
    shop: 'Event Pro Co.',
    location: 'ทั่วกรุงเทพฯ',
    wage: '80 - 120',
    wageMin: 80,
    logo: 'lucide:mic',
    type: 'event',
    area: 'siam',
    tags: ['งานอีเวนท์', 'บุคลิกดี', 'เสาร์-อาทิตย์'],
    date: '2026-02-19',
  },
]

// --- Filtered & Sorted Jobs ---
const filteredJobs = computed(() => {
  let result = [...jobs]

  // Search
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.trim().toLowerCase()
    result = result.filter(j =>
      j.title.toLowerCase().includes(q) ||
      j.shop.toLowerCase().includes(q) ||
      j.location.toLowerCase().includes(q) ||
      j.tags.some(t => t.toLowerCase().includes(q))
    )
  }

  // Job type filter
  if (selectedTypes.value.length > 0) {
    result = result.filter(j => selectedTypes.value.includes(j.type))
  }

  // Area filter
  if (selectedAreas.value.length > 0) {
    result = result.filter(j => selectedAreas.value.includes(j.area))
  }

  // Salary filter
  if (salaryMin.value) {
    result = result.filter(j => j.wageMin >= salaryMin.value!)
  }
  if (salaryMax.value) {
    result = result.filter(j => j.wageMin <= salaryMax.value!)
  }

  // Sort
  if (sortBy.value === 'highest') {
    result.sort((a, b) => b.wageMin - a.wageMin)
  } else if (sortBy.value === 'lowest') {
    result.sort((a, b) => a.wageMin - b.wageMin)
  } else {
    result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }

  return result
})
</script>
