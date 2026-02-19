<template>
  <div class="pt-24 pb-12 max-w-7xl mx-auto px-6">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-2 text-surface-900 dark:text-white">หางานที่คุณชอบ</h1>
      <p class="text-surface-500 dark:text-surface-400">ค้นพบโอกาสใหม่ๆ จากร้านค้าชั้นนำทั่วประทศ</p>
    </div>

    <div class="grid lg:grid-cols-4 gap-8">
      <!-- Filters Sidebar -->
      <aside class="hidden lg:block space-y-8">
        <!-- Job Type Filter -->
        <div class="p-6 rounded-xl bg-white dark:bg-surface-800 shadow-sm border border-surface-200 dark:border-surface-700">
          <h3 class="font-semibold mb-4 flex items-center gap-2 text-surface-900 dark:text-white">
            <Icon name="lucide:briefcase" class="text-primary-600 dark:text-primary-400" />
            ประเภทงาน
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
            ค่าตอบแทน (บาท/ชม.)
          </h3>
          <div class="space-y-4">
            <div class="flex items-center gap-2">
              <input v-model.number="salaryMin" type="number" placeholder="Min" class="w-full bg-surface-50 dark:bg-surface-700 border-surface-200 dark:border-surface-600 rounded-lg px-3 py-2 text-sm focus:border-primary-500 focus:outline-none text-surface-900 dark:text-white placeholder:text-surface-400">
              <span class="text-surface-500 dark:text-surface-400">-</span>
              <input v-model.number="salaryMax" type="number" placeholder="Max" class="w-full bg-surface-50 dark:bg-surface-700 border-surface-200 dark:border-surface-600 rounded-lg px-3 py-2 text-sm focus:border-primary-500 focus:outline-none text-surface-900 dark:text-white placeholder:text-surface-400">
            </div>
            <button @click="salaryMin = null; salaryMax = null" class="w-full py-2 bg-surface-100 dark:bg-surface-700 hover:bg-surface-200 dark:hover:bg-surface-600 text-surface-600 dark:text-surface-300 text-sm font-medium rounded-lg transition-colors">
              ล้างตัวกรอง
            </button>
          </div>
        </div>

        <!-- Location -->
        <div class="p-6 rounded-xl bg-white dark:bg-surface-800 shadow-sm border border-surface-200 dark:border-surface-700">
          <h3 class="font-semibold mb-4 flex items-center gap-2 text-surface-900 dark:text-white">
            <Icon name="lucide:map-pin" class="text-primary-600 dark:text-primary-400" />
            ย่าน / พื้นที่
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
            <input v-model="searchQuery" type="text" placeholder="ค้นหาตำแหน่งงาน, ชื่อร้าน..." 
                   class="w-full bg-surface-50 dark:bg-surface-700 border border-surface-200 dark:border-surface-600 rounded-xl pl-12 pr-4 py-3 text-surface-900 dark:text-white placeholder:text-surface-400 focus:border-primary-500 focus:outline-none transition-colors">
          </div>
          <button @click="() => {}" class="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary-500/20">
            <Icon name="lucide:search" class="w-5 h-5" />
            ค้นหา
          </button>
        </div>

        <!-- Active Filters -->
        <div v-if="hasActiveFilters" class="flex flex-wrap items-center gap-2 mb-4">
          <span class="text-sm text-surface-500 dark:text-surface-400">ตัวกรอง:</span>
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
          <button @click="clearAllFilters" class="text-xs text-surface-500 dark:text-surface-400 hover:text-danger-500 underline ml-2">ล้างทั้งหมด</button>
        </div>

        <!-- Results Info -->
        <div class="flex items-center justify-between mb-6">
          <span class="text-surface-500 dark:text-surface-400">พบ <span class="text-primary-600 dark:text-primary-400 font-semibold">{{ filteredJobs.length }}</span> ตำแหน่งงาน</span>
          <div class="flex items-center gap-2 text-sm text-surface-500 dark:text-surface-400">
            <span>เรียงตาม:</span>
            <select v-model="sortBy" class="bg-transparent border-none text-surface-900 dark:text-white font-medium focus:ring-0 cursor-pointer">
              <option value="latest">ล่าสุด</option>
              <option value="highest">ค่าจ้างสูงสุด</option>
              <option value="lowest">ค่าจ้างต่ำสุด</option>
            </select>
          </div>
        </div>

        <!-- Job List -->
        <div class="space-y-4" v-auto-animate>
          <div v-if="filteredJobs.length === 0" class="text-center py-16">
            <Icon name="lucide:search-x" class="w-16 h-16 text-surface-300 dark:text-surface-600 mx-auto mb-4" />
            <h3 class="text-lg font-semibold text-surface-700 dark:text-surface-300 mb-2">ไม่พบตำแหน่งงาน</h3>
            <p class="text-surface-500 dark:text-surface-400">ลองเปลี่ยนคำค้นหาหรือตัวกรอง</p>
            <button @click="clearAllFilters" class="mt-4 px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-sm font-medium transition-colors">ล้างตัวกรอง</button>
          </div>

          <div v-for="job in filteredJobs" :key="job.id" 
               class="hover:border-primary-300 dark:hover:border-primary-700 p-6 rounded-2xl group transition-all cursor-pointer bg-white dark:bg-surface-800 shadow-sm hover:shadow-md border border-surface-200 dark:border-surface-700">
            <div class="flex flex-col sm:flex-row gap-6">
              <!-- Shop Logo -->
              <div class="w-16 h-16 rounded-xl bg-surface-50 dark:bg-surface-700 flex-shrink-0 flex items-center justify-center overflow-hidden border border-surface-200 dark:border-surface-600">
                <Icon :name="job.logo" class="w-8 h-8 text-surface-400 dark:text-surface-300" />
              </div>

              <!-- Job Details -->
              <div class="flex-1">
                <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 class="text-xl font-bold group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors mb-1 text-surface-900 dark:text-white">{{ job.title }}</h3>
                    <div class="flex items-center gap-2 text-surface-500 dark:text-surface-400 text-sm">
                      <span class="font-medium text-surface-700 dark:text-surface-300">{{ job.shop }}</span>
                      <span>•</span>
                      <div class="flex items-center gap-1">
                        <Icon name="lucide:map-pin" class="w-3 h-3" />
                        {{ job.location }}
                      </div>
                    </div>
                  </div>
                  <div class="text-right">
                    <div class="text-xl font-bold text-primary-600 dark:text-primary-400">{{ job.wage }}</div>
                    <div class="text-xs text-surface-500 dark:text-surface-400">บาท / ชั่วโมง</div>
                  </div>
                </div>

                <!-- Tags -->
                <div class="flex flex-wrap gap-2 mt-4">
                  <span v-for="tag in job.tags" :key="tag" 
                        class="px-2.5 py-1 rounded-md bg-surface-100 dark:bg-surface-700 text-xs font-medium text-surface-600 dark:text-surface-300 border border-surface-200 dark:border-surface-600">
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'หางานพาร์ทไทม์ - PreJob',
  description: 'ค้นหางานพาร์ทไทม์ ร้านอาหาร คาเฟ่ อีเวนท์ ใกล้คุณ',
})

const route = useRoute()

// --- Filters State ---
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
const jobTypes = [
  { id: 'part-time', label: 'งานพาร์ทไทม์' },
  { id: 'full-time', label: 'งานประจำ' },
  { id: 'event', label: 'งานอีเวนท์ / ออกบูธ' },
  { id: 'freelance', label: 'ฟรีแลนซ์' },
]

const areas = [
  { id: 'siam', label: 'สยาม / สามย่าน / จุฬา' },
  { id: 'sukhumvit', label: 'สุขุมวิท / อโศก / ทองหล่อ' },
  { id: 'silom', label: 'สีลม / สาทร' },
  { id: 'ari', label: 'อารีย์ / พญาไท' },
  { id: 'ladprao', label: 'ลาดพร้าว / จตุจักร' },
]

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
