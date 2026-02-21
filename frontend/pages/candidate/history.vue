<template>
  <div class="min-h-screen bg-surface-50 dark:bg-surface-950 pt-24 pb-12">
    <div class="max-w-4xl mx-auto px-6">
      
      <!-- Back & Title -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <button @click="$router.back()" class="mb-2 inline-flex items-center gap-2 text-surface-500 hover:text-surface-900 dark:text-surface-400 dark:hover:text-white transition-colors">
            <Icon name="lucide:arrow-left" class="w-4 h-4" />
            <span class="text-sm font-medium">{{ $t('candidate.back') || 'Back' }}</span>
          </button>
          <h1 class="text-3xl font-bold text-surface-900 dark:text-white">Review & History</h1>
          <p class="text-surface-500 dark:text-surface-400">Past employment records and ratings for {{ candidate.name }}</p>
        </div>
        
        <!-- Quick Stats -->
        <div class="flex items-center gap-4 bg-white dark:bg-surface-900 p-4 rounded-xl border border-surface-200 dark:border-surface-800 shadow-sm shrink-0">
          <div class="text-center pr-4 border-r border-surface-200 dark:border-surface-700">
            <div class="text-2xl font-black text-surface-900 dark:text-white">{{ candidate.history.length }}</div>
            <div class="text-xs text-surface-500 font-medium uppercase tracking-wider">Jobs Done</div>
          </div>
          <div class="text-center">
             <div class="flex items-center justify-center gap-1.5 text-2xl font-black text-surface-900 dark:text-white">
                {{ candidate.rating }} <Icon name="lucide:star" class="w-5 h-5 text-amber-500 fill-current" />
             </div>
             <div class="text-xs text-surface-500 font-medium uppercase tracking-wider">Avg Rating</div>
          </div>
        </div>
      </div>

      <!-- Main Content Tabs -->
      <div class="bg-white dark:bg-surface-900 rounded-2xl border border-surface-200 dark:border-surface-800 shadow-sm overflow-hidden mb-8">
         <div class="flex items-center gap-4 sm:gap-6 px-4 sm:px-6 border-b border-surface-200 dark:border-surface-800 overflow-x-auto no-scrollbar">
            <button @click="currentTab = 'timeline'" :class="['py-4 text-sm font-bold border-b-2 transition-colors relative top-[1px] whitespace-nowrap', currentTab === 'timeline' ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400' : 'border-transparent text-surface-500 hover:text-surface-900 dark:text-surface-400 dark:hover:text-white']">
               <div class="flex items-center gap-2">
                 <Icon name="lucide:history" class="w-4 h-4" />
                 Employment Timeline
               </div>
            </button>
            <button @click="currentTab = 'reviews'" :class="['py-4 text-sm font-bold border-b-2 transition-colors relative top-[1px] whitespace-nowrap', currentTab === 'reviews' ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400' : 'border-transparent text-surface-500 hover:text-surface-900 dark:text-surface-400 dark:hover:text-white']">
               <div class="flex items-center gap-2">
                 <Icon name="lucide:star" class="w-4 h-4" />
                 Ratings & Reviews
                 <span class="bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-surface-300 py-0.5 px-2 rounded-full text-xs">{{ candidate.reviews.length }}</span>
               </div>
            </button>
         </div>

         <!-- TAB: TIMELINE -->
         <div v-if="currentTab === 'timeline'" class="p-6 md:p-8">
            <div class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-surface-200 before:via-surface-200 dark:before:from-surface-700 dark:before:via-surface-700 before:to-transparent">
               
               <div v-for="(record, index) in candidate.history" :key="index" class="relative flex items-start gap-6 group">
                 <!-- Timeline Node -->
                 <div class="w-10 h-10 rounded-full border-4 border-white dark:border-surface-900 bg-surface-100 dark:bg-surface-800 text-surface-500 flex items-center justify-center shrink-0 z-10 group-hover:bg-primary-100 group-hover:text-primary-600 dark:group-hover:bg-primary-900/30 dark:group-hover:text-primary-400 transition-colors shadow-sm">
                   <Icon :name="record.icon || 'lucide:briefcase'" class="w-4 h-4" />
                 </div>
                 
                 <!-- Content Card -->
                 <div class="flex-1 bg-surface-50 dark:bg-surface-800/50 p-5 rounded-2xl border border-surface-100 dark:border-surface-700/50 hover:border-primary-500/30 dark:hover:border-primary-500/30 transition-all shadow-sm">
                    <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 mb-3">
                       <div>
                          <h3 class="text-base sm:text-lg font-bold text-surface-900 dark:text-white leading-tight">{{ record.role }}</h3>
                          <div class="text-sm sm:text-base font-medium text-primary-600 dark:text-primary-400 mt-0.5">{{ record.company }}</div>
                       </div>
                       <div class="text-left sm:text-right">
                          <div class="inline-flex sm:inline-block items-center justify-center px-3 py-1 bg-surface-200 dark:bg-surface-700 rounded-lg text-xs font-bold text-surface-700 dark:text-surface-300 mb-1">
                             {{ record.period }}
                          </div>
                          <div class="text-xs text-surface-500 hidden sm:block">{{ record.duration }}</div>
                       </div>
                    </div>
                    
                    <p class="text-surface-600 dark:text-surface-300 text-sm leading-relaxed mb-4">
                       {{ record.description }}
                    </p>

                    <!-- Verification & Review Link -->
                    <div class="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-surface-200 dark:border-surface-700">
                       <div class="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-2.5 py-1 rounded-md">
                          <Icon name="lucide:shield-check" class="w-3.5 h-3.5" /> Verified Employment
                       </div>
                       
                       <button @click="jumpToReview(record.reviewId)" v-if="record.reviewId" class="text-xs font-bold text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-1">
                          View Employer Review <Icon name="lucide:arrow-right" class="w-3 h-3" />
                       </button>
                    </div>
                 </div>
               </div>
               
            </div>
         </div>

         <!-- TAB: REVIEWS -->
         <div v-else-if="currentTab === 'reviews'" class="p-6 md:p-8">
            
            <!-- Rating Breakdown -->
            <div class="flex flex-col md:flex-row items-center gap-8 mb-10 pb-10 border-b border-surface-200 dark:border-surface-800">
               <div class="text-center w-full md:w-auto shrink-0 md:pr-8 md:border-r border-surface-200 dark:border-surface-800">
                  <div class="text-5xl font-black text-surface-900 dark:text-white mb-2">{{ candidate.rating }}</div>
                  <div class="flex items-center justify-center gap-1 text-amber-400 mb-2">
                     <Icon name="lucide:star" class="w-5 h-5 fill-current" v-for="n in 5" :key="n" />
                  </div>
                  <div class="text-sm text-surface-500 font-medium">Based on {{ candidate.reviews.length }} reviews</div>
               </div>
               
               <div class="flex-1 w-full max-w-sm">
                  <!-- Example Progress Bars -->
                  <div class="space-y-2 text-sm font-medium text-surface-600 dark:text-surface-400">
                     <div class="flex items-center gap-3">
                        <div class="w-4 shrink-0 text-right">5</div>
                        <Icon name="lucide:star" class="w-3 h-3 text-surface-400" />
                        <div class="flex-1 h-2.5 bg-surface-100 dark:bg-surface-800 rounded-full overflow-hidden">
                           <div class="h-full bg-amber-400 rounded-full w-[85%]"></div>
                        </div>
                     </div>
                     <div class="flex items-center gap-3">
                        <div class="w-4 shrink-0 text-right">4</div>
                        <Icon name="lucide:star" class="w-3 h-3 text-surface-400" />
                        <div class="flex-1 h-2.5 bg-surface-100 dark:bg-surface-800 rounded-full overflow-hidden">
                           <div class="h-full bg-amber-400 rounded-full w-[15%]"></div>
                        </div>
                     </div>
                     <div class="flex items-center gap-3 opacity-50">
                        <div class="w-4 shrink-0 text-right">3</div>
                        <Icon name="lucide:star" class="w-3 h-3 text-surface-400" />
                        <div class="flex-1 h-2.5 bg-surface-100 dark:bg-surface-800 rounded-full overflow-hidden">
                        </div>
                     </div>
                     <div class="flex items-center gap-3 opacity-50">
                        <div class="w-4 shrink-0 text-right">2</div>
                        <Icon name="lucide:star" class="w-3 h-3 text-surface-400" />
                        <div class="flex-1 h-2.5 bg-surface-100 dark:bg-surface-800 rounded-full overflow-hidden">
                        </div>
                     </div>
                     <div class="flex items-center gap-3 opacity-50">
                        <div class="w-4 shrink-0 text-right">1</div>
                        <Icon name="lucide:star" class="w-3 h-3 text-surface-400" />
                        <div class="flex-1 h-2.5 bg-surface-100 dark:bg-surface-800 rounded-full overflow-hidden">
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <!-- Review Items -->
            <div class="space-y-8">
               <div v-for="review in candidate.reviews" :key="review.id" :id="`review-${review.id}`" class="bg-surface-50 dark:bg-surface-800/30 p-5 sm:p-6 flex flex-col gap-4 sm:gap-6 rounded-2xl border border-surface-100 dark:border-surface-700/50 transition-all hover:bg-white dark:hover:bg-surface-800 hover:shadow-md">
                 
                 <div class="flex flex-col sm:flex-row sm:items-start gap-3 w-full">
                    <div class="flex items-center gap-3 w-full sm:w-auto">
                       <img :src="review.author.avatar" :alt="review.author.name" class="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-surface-200 dark:border-surface-700 shadow-sm shrink-0" />
                       <div class="flex-1 sm:hidden">
                          <div class="font-bold text-surface-900 dark:text-white text-base leading-tight">{{ review.author.name }}</div>
                          <div class="text-xs font-medium text-primary-600 dark:text-primary-400 mt-0.5">{{ review.jobTitle }}</div>
                       </div>
                    </div>
                 
                    <div class="flex-1 w-full">
                       <div class="flex flex-wrap items-center sm:items-start justify-between gap-2 sm:gap-4 sm:mb-2">
                          <div class="hidden sm:block">
                             <div class="font-bold text-surface-900 dark:text-white text-lg leading-tight">{{ review.author.name }}</div>
                             <div class="text-sm font-medium text-primary-600 dark:text-primary-400 mt-0.5">{{ review.jobTitle }}</div>
                          </div>
                          <div class="flex w-full sm:w-auto items-center sm:items-end justify-between sm:flex-col sm:justify-start">
                             <div class="flex gap-1 text-amber-400 sm:mb-1">
                                <Icon name="lucide:star" class="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" v-for="n in 5" :key="n" :class="n > review.rating ? 'opacity-30' : ''"/>
                             </div>
                             <div class="text-xs font-semibold text-surface-500">{{ review.date }}</div>
                          </div>
                       </div>
                    </div>
                 </div>
                 
                 <p class="text-surface-700 dark:text-surface-300 leading-relaxed text-sm/relaxed bg-white dark:bg-surface-900 p-4 rounded-xl border border-surface-100 dark:border-surface-700 shadow-sm">
                    "{{ review.comment }}"
                 </p>
               </div>
            </div>

         </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const router = useRouter()
const currentTab = ref('timeline')

useSeoMeta({
  title: 'History & Reviews - PreJob'
})

// Mock Data
const candidate = ref({
  id: 'c1',
  name: 'นภัสสร รักษ์ดี',
  rating: 4.8,
  history: [
    { 
      id: 1,
      role: 'Freelance Content Creator', 
      company: 'เพจ "เที่ยวกับนท"', 
      period: 'Jan 2023 - Present',
      duration: '11 mos',
      icon: 'lucide:camera',
      description: 'เขียนคอนเทนต์รีวิวสถานที่ท่องเที่ยวและคาเฟ่ ถ่ายภาพและตัดต่อวิดีโอสั้น (Reels/TikTok) ปัจจุบันมีผู้ติดตามกว่า 10,000 คน' 
    },
    { 
      id: 2,
      role: 'Staff Event (Part-time)', 
      company: 'บริษัท ครีเอทีฟ อีเว้นท์ จำกัด', 
      period: 'Oct 2023 - Nov 2023',
      duration: '2 mos',
      icon: 'lucide:calendar-check',
      reviewId: 'rev-2',
      description: 'ช่วยประสานงานในวันงาน จัดเตรียมเอกสารและดูแลความเรียบร้อยของบูธกิจกรรม' 
    },
    {
      id: 3,
      role: 'Part-time Barista',
      company: 'Aroma Coffee',
      period: 'Jan 2024 - Apr 2024',
      duration: '4 mos',
      icon: 'lucide:coffee',
      reviewId: 'rev-1',
      description: 'บริการลูกค้า ชงกาแฟ ทำความสะอาดร้าน และสรุปยอดขายประจำวัน'
    }
  ],
  reviews: [
    {
      id: 'rev-1',
      author: { name: 'คุณสมชาย (Aroma Coffee)', avatar: 'https://ui-avatars.com/api/?name=Somchai&background=FDBA74&color=78350F' },
      date: '15 Feb 2024',
      jobTitle: 'Part-time Barista',
      rating: 5,
      comment: 'น้องนทตั้งใจทำงานมาก เรียนรู้งานไว มาตรงเวลาเสมอ และมีมนุษยสัมพันธ์ดีกับลูกค้าทุกคน เป็นพนักงานพาร์ทไทม์ที่ดีที่สุดคนนึงของเราเลย'
    },
    {
      id: 'rev-2',
      author: { name: 'คุณศิริพร (Creative Agency)', avatar: 'https://ui-avatars.com/api/?name=Siriporn&background=93C5FD&color=1E3A8A' },
      date: '10 Dec 2023',
      jobTitle: 'Staff Event',
      rating: 4,
      comment: 'ทำงานที่ได้รับมอบหมายได้ครบถ้วน แก้ปัญหาเฉพาะหน้าได้ดี แต่อาจจะต้องเพิ่มความมั่นใจในการคุยกับลูกค้าอีกนิด โดยรวมถือว่าทำงานได้ดีมากครับ'
    }
  ]
})

const jumpToReview = (id: string) => {
   currentTab.value = 'reviews'
   setTimeout(() => {
      const el = document.getElementById(`review-${id}`)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
   }, 100)
}
</script>
