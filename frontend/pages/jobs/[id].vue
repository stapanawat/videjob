<template>
  <div class="pt-24 pb-24 lg:pb-12 max-w-7xl mx-auto px-6">
    <div class="grid lg:grid-cols-3 gap-8">
      <!-- Main Content -->
      <main class="lg:col-span-2 space-y-8">
        <!-- Header -->
        <div class="bg-white dark:bg-surface-800 rounded-2xl p-6 md:p-8 shadow-sm border border-surface-200 dark:border-surface-700 relative overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-500 to-primary-700"></div>
          
          <div class="flex flex-col md:flex-row gap-6 items-start">
            <div class="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-surface-50 dark:bg-surface-700 flex items-center justify-center border border-surface-200 dark:border-surface-600 flex-shrink-0">
              <Icon :name="job.logo" class="w-10 h-10 md:w-12 md:h-12 text-surface-400 dark:text-surface-300" />
            </div>
            
            <div class="flex-1">
              <h1 class="text-2xl md:text-3xl font-bold text-surface-900 dark:text-white mb-2">{{ job.title }}</h1>
              <div class="flex flex-wrap items-center gap-4 text-surface-500 dark:text-surface-400 text-sm md:text-base">
                <span class="font-medium text-surface-700 dark:text-surface-300 flex items-center gap-1.5">
                  <Icon name="lucide:building-2" class="w-4 h-4" /> {{ job.shop }}
                </span>
                <span class="flex items-center gap-1.5">
                  <Icon name="lucide:map-pin" class="w-4 h-4" /> {{ job.location }}
                </span>
                <span class="flex items-center gap-1.5">
                  <Icon name="lucide:clock" class="w-4 h-4" /> {{ job.date }}
                </span>
              </div>

              <div class="flex flex-wrap gap-2 mt-4">
                <span v-for="tag in job.tags" :key="tag" class="px-3 py-1 rounded-full bg-surface-100 dark:bg-surface-700 text-xs font-medium text-surface-600 dark:text-surface-300">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Job Details -->
        <div class="bg-white dark:bg-surface-800 rounded-2xl p-6 md:p-8 shadow-sm border border-surface-200 dark:border-surface-700 space-y-6">
          <h2 class="text-xl font-bold text-surface-900 dark:text-white flex items-center gap-2">
            <Icon name="lucide:file-text" class="text-primary-600 dark:text-primary-400" />
            รายละเอียดงาน
          </h2>
          <div class="prose dark:prose-invert max-w-none text-surface-600 dark:text-surface-300">
            <p>รับสมัครพนักงาน {{ job.title }} จำนวนมาก! มาร่วมเป็นส่วนหนึ่งของทีม {{ job.shop }} ร้านบรรยากาศดี เพื่อนร่วมงานน่ารัก</p>
            
            <h3 class="text-lg font-semibold text-surface-900 dark:text-white mt-6 mb-3">หน้าที่ความรับผิดชอบ</h3>
            <ul class="list-disc pl-5 space-y-2">
              <li>ให้บริการลูกค้า รับออเดอร์ และแนะนำเมนู</li>
              <li>ดูแลความสะอาดภายในร้านและอุปกรณ์ต่างๆ</li>
              <li>ช่วยเตรียมวัตถุดิบและจัดจาน (ถ้ามีประสบการณ์จะพิจารณาเป็นพิเศษ)</li>
              <li>ทำงานเป็นกะได้ (เช้า/บ่าย/เย็น)</li>
            </ul>

            <h3 class="text-lg font-semibold text-surface-900 dark:text-white mt-6 mb-3">คุณสมบัติ</h3>
            <ul class="list-disc pl-5 space-y-2">
              <li>อายุ 18 ปีขึ้นไป ไม่จำกัดวุฒิการศึกษา</li>
              <li>รักงานบริการ ยิ้มแย้มแจ่มใส มีความรับผิดชอบ</li>
              <li>สามารถเดินทางมาทำงานที่ {{ job.location }} ได้สะดวก</li>
              <li>หากเริ่มงานได้ทันทีจะพิจารณาเป็นพิเศษ</li>
            </ul>

            <h3 class="text-lg font-semibold text-surface-900 dark:text-white mt-6 mb-3">สวัสดิการ</h3>
            <ul class="list-disc pl-5 space-y-2">
              <li>ค่าแรง {{ job.wage }} บาท/ชั่วโมง (ตามประสบการณ์)</li>
              <li>ทิปรายวัน/รายสัปดาห์</li>
              <li>อาหารฟรี 1 มื้อ</li>
              <li>ยูนิฟอร์มฟรี</li>
            </ul>
          </div>
        </div>

        <!-- Reviews Section -->
        <div class="bg-white dark:bg-surface-800 rounded-2xl p-6 md:p-8 shadow-sm border border-surface-200 dark:border-surface-700 space-y-6">
          <h2 class="text-xl font-bold text-surface-900 dark:text-white flex items-center gap-2">
            <Icon name="lucide:star" class="text-amber-400 fill-current" />
            รีวิวจากพนักงาน ({{ reviews.length }})
          </h2>
          
          <div class="flex flex-col md:flex-row gap-8 items-center md:items-start bg-surface-50 dark:bg-surface-700/30 p-6 rounded-2xl">
            <!-- Overall Rating -->
            <div class="text-center">
              <div class="text-5xl font-bold text-surface-900 dark:text-white mb-1">4.8</div>
              <div class="flex items-center justify-center gap-1 text-amber-400 mb-2">
                <Icon name="lucide:star" class="w-5 h-5 fill-current" />
                <Icon name="lucide:star" class="w-5 h-5 fill-current" />
                <Icon name="lucide:star" class="w-5 h-5 fill-current" />
                <Icon name="lucide:star" class="w-5 h-5 fill-current" />
                <Icon name="lucide:star" class="w-5 h-5 fill-current text-surface-300 dark:text-surface-600" />
              </div>
              <div class="text-sm text-surface-500 dark:text-surface-400">จาก 128 รีวิว</div>
            </div>
            
            <!-- Rating Bars -->
            <div class="flex-1 w-full space-y-2">
              <div v-for="i in 5" :key="i" class="flex items-center gap-3 text-sm">
                <span class="w-3 font-bold text-surface-600 dark:text-surface-300">{{ 6-i }}</span>
                <div class="flex-1 h-2 bg-surface-200 dark:bg-surface-600 rounded-full overflow-hidden">
                  <div class="h-full bg-amber-400 rounded-full" :style="{ width: (Math.random() * 80 + 10) + '%' }"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Review List -->
          <div class="space-y-6">
            <div v-for="review in reviews" :key="review.id" class="border-b border-surface-100 dark:border-surface-700/50 last:border-0 pb-6 last:pb-0">
               <div class="flex items-start justify-between mb-2">
                 <div class="flex items-center gap-3">
                   <div class="w-10 h-10 rounded-full bg-surface-200 dark:bg-surface-700 flex items-center justify-center font-bold text-surface-600 dark:text-surface-300">{{ review.reviewer[0] }}</div>
                   <div>
                     <div class="font-bold text-surface-900 dark:text-white">{{ review.reviewer }}</div>
                     <div class="text-xs text-surface-500 dark:text-surface-400">{{ review.date }} • {{ review.role }}</div>
                   </div>
                 </div>
                 <div class="flex items-center gap-1 text-amber-400 text-sm">
                   <span class="font-bold text-surface-700 dark:text-surface-200">{{ review.rating }}</span>
                   <Icon name="lucide:star" class="w-4 h-4 fill-current" />
                 </div>
               </div>
               <p class="text-surface-600 dark:text-surface-300 leading-relaxed">{{ review.comment }}</p>
            </div>
          </div>
        </div>
      </main>

      <!-- Sidebar -->
      <aside class="space-y-6">
        <!-- Apply Card (Desktop) -->
        <div class="hidden lg:block bg-white dark:bg-surface-800 rounded-2xl p-6 shadow-sm border border-surface-200 dark:border-surface-700 sticky top-24">
          <div class="text-center mb-6">
            <div class="text-sm text-surface-500 dark:text-surface-400 mb-1">ค่าตอบแทน</div>
            <div class="text-3xl font-bold text-primary-600 dark:text-primary-400">{{ job.wage }} <span class="text-base font-normal text-surface-500">บาท/ชม.</span></div>
          </div>
          
          <button @click="openApplyModal = true" class="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl text-lg shadow-xl shadow-primary-500/20 hover:shadow-primary-600/30 active:scale-95 transition-all mb-3">
            สมัครงานนี้
          </button>
          <button class="w-full py-3 bg-surface-100 dark:bg-surface-700 hover:bg-surface-200 dark:hover:bg-surface-600 text-surface-700 dark:text-surface-300 font-semibold rounded-xl transition-colors flex items-center justify-center gap-2">
            <Icon name="lucide:share-2" class="w-4 h-4" /> แชร์
          </button>
        </div>

        <!-- Company Info -->
        <div class="bg-white dark:bg-surface-800 rounded-2xl p-6 shadow-sm border border-surface-200 dark:border-surface-700">
          <h3 class="font-semibold text-surface-900 dark:text-white mb-4">ข้อมูลร้านค้า</h3>
          <div class="flex items-center gap-4 mb-4">
             <div class="w-12 h-12 rounded-lg bg-surface-50 dark:bg-surface-700 flex items-center justify-center border border-surface-200 dark:border-surface-600">
              <Icon :name="job.logo" class="w-6 h-6 text-surface-400 dark:text-surface-300" />
            </div>
            <div>
              <div class="font-bold text-surface-900 dark:text-white">{{ job.shop }}</div>
              <div class="text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <Icon name="lucide:badge-check" class="w-3 h-3" /> Verified Employer
              </div>
            </div>
          </div>
          <div class="h-40 bg-surface-100 dark:bg-surface-700 rounded-xl flex items-center justify-center text-surface-400 dark:text-surface-500 border border-surface-200 dark:border-surface-600">
            <div class="text-center">
              <Icon name="lucide:map" class="w-8 h-8 mx-auto mb-2" />
              <div class="text-xs">Map Placeholder</div>
            </div>
          </div>
          <div class="mt-4 text-sm text-surface-500 dark:text-surface-400">
            <div class="flex items-center gap-2 mb-2">
              <Icon name="lucide:map-pin" class="w-4 h-4 text-surface-400" /> {{ job.location }}
            </div>
            <div class="flex items-center gap-2">
              <Icon name="lucide:globe" class="w-4 h-4 text-surface-400" /> <a href="#" class="text-primary-600 dark:text-primary-400 hover:underline">View Website</a>
            </div>
          </div>
        </div>
      </aside>
    </div>

    <!-- Mobile Sticky Apply Bar -->
    <div class="fixed bottom-0 left-0 w-full bg-white dark:bg-surface-900 border-t border-surface-200 dark:border-surface-800 p-4 lg:hidden z-40 flex items-center gap-4 safe-area-bottom shadow-[0_-10px_20px_rgba(0,0,0,0.05)] dark:shadow-none">
      <div class="flex-1">
        <div class="text-xs text-surface-500 dark:text-surface-400">ค่าตอบแทน</div>
        <div class="text-xl font-bold text-primary-600 dark:text-primary-400">{{ job.wage }} <span class="text-xs font-normal text-surface-500">/ชม.</span></div>
      </div>
      <button @click="openApplyModal = true" class="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl shadow-lg shadow-primary-500/20 active:scale-95 transition-all">
        สมัครเลย
      </button>
    </div>

    <!-- Apply Modal -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div v-if="openApplyModal" class="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="openApplyModal = false"></div>
        <div class="bg-white dark:bg-surface-900 rounded-3xl w-full max-w-lg relative z-10 overflow-hidden shadow-2xl">
          <div v-if="!submitted">
            <!-- Modal Header -->
            <div class="px-6 py-4 border-b border-surface-200 dark:border-surface-800 flex items-center justify-between bg-surface-50 dark:bg-surface-950">
              <h3 class="text-lg font-bold text-surface-900 dark:text-white">สมัครงาน: {{ job.title }}</h3>
              <button @click="openApplyModal = false" class="p-2 rounded-full hover:bg-surface-200 dark:hover:bg-surface-800 text-surface-500 transition-colors">
                <Icon name="lucide:x" class="w-5 h-5" />
              </button>
            </div>
            
            <!-- Form -->
            <div class="p-6 space-y-4">
              <div class="space-y-1">
                <label class="text-sm font-medium text-surface-700 dark:text-surface-300">ชื่อ-นามสกุล</label>
                <input type="text" class="w-full bg-surface-50 dark:bg-surface-800 border-surface-200 dark:border-surface-700 rounded-xl px-4 py-3 text-surface-900 dark:text-white focus:border-primary-500 focus:outline-none placeholder:text-surface-400" placeholder="กรอกชื่อจริงของคุณ">
              </div>
              
              <div class="space-y-1">
                <label class="text-sm font-medium text-surface-700 dark:text-surface-300">เบอร์โทรศัพท์</label>
                <input type="tel" class="w-full bg-surface-50 dark:bg-surface-800 border-surface-200 dark:border-surface-700 rounded-xl px-4 py-3 text-surface-900 dark:text-white focus:border-primary-500 focus:outline-none placeholder:text-surface-400" placeholder="08x-xxx-xxxx">
              </div>

              <div class="space-y-1">
                <label class="text-sm font-medium text-surface-700 dark:text-surface-300">ข้อความแนะนำตัวสั้นๆ</label>
                <textarea rows="3" class="w-full bg-surface-50 dark:bg-surface-800 border-surface-200 dark:border-surface-700 rounded-xl px-4 py-3 text-surface-900 dark:text-white focus:border-primary-500 focus:outline-none placeholder:text-surface-400" placeholder="สวัสดีครับ/ค่ะ สนใจสมัครตำแหน่งนี้..."></textarea>
              </div>

              <div class="pt-2">
                <button @click="submitApplication" class="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl shadow-lg shadow-primary-500/20 active:scale-95 transition-all flex items-center justify-center gap-2">
                  <Icon name="lucide:send" class="w-4 h-4" /> ส่งใบสมัคร
                </button>
              </div>
            </div>
          </div>

          <!-- Success State -->
          <div v-else class="p-12 text-center space-y-6">
            <div class="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <Icon name="lucide:check" class="w-10 h-10" />
            </div>
            <h3 class="text-2xl font-bold text-surface-900 dark:text-white">ส่งใบสมัครเรียบร้อย!</h3>
            <p class="text-surface-500 dark:text-surface-400">ทางร้านจะติดต่อกลับตามเบอร์โทรศัพท์ที่คุณให้ไว้เร็วๆ นี้ ขอให้โชคดีครับ</p>
            <button @click="openApplyModal = false; submitted = false" class="px-8 py-3 bg-surface-100 dark:bg-surface-800 hover:bg-surface-200 dark:hover:bg-surface-700 text-surface-900 dark:text-white font-semibold rounded-xl transition-colors">
              ปิดหน้าต่าง
            </button>
          </div>
        </div>
      </div>
    </Transition>
    <!-- Similar Jobs -->
    <section class="mt-16 border-t border-surface-200 dark:border-surface-800 pt-16">
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-2xl font-bold text-surface-900 dark:text-white">งานที่ใกล้เคียงกัน</h2>
        <NuxtLink :to="localePath('/jobs')" class="text-primary-600 dark:text-primary-400 font-semibold hover:underline flex items-center gap-1 text-sm">
          ดูงานทั้งหมด <Icon name="lucide:arrow-right" class="w-4 h-4" />
        </NuxtLink>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <NuxtLink v-for="related in relatedJobs" :key="related.id" :to="localePath(`/jobs/${related.id}`)" class="block group relative bg-white dark:bg-surface-800 rounded-3xl p-6 shadow-lg shadow-surface-200/50 dark:shadow-none border border-surface-100 dark:border-surface-700 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-primary-500/5 dark:from-primary-500/5 to-accent-500/5 dark:to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          
          <div class="relative z-10 flex flex-col h-full">
            <div class="flex items-start justify-between mb-6">
              <div class="w-14 h-14 rounded-2xl bg-surface-50 dark:bg-surface-700 flex items-center justify-center border border-surface-100 dark:border-surface-600 shadow-sm overflow-hidden">
                <Icon :name="related.logo" class="w-7 h-7 text-surface-400 dark:text-surface-300" />
              </div>
              <div class="px-3 py-1 rounded-full bg-surface-100 dark:bg-surface-700 text-[10px] font-bold text-surface-600 dark:text-surface-300 uppercase tracking-wider">
                {{ related.category }}
              </div>
            </div>

            <div class="mb-auto">
              <h3 class="font-bold text-surface-400 uppercase text-xs tracking-wider mb-1">{{ related.shop }}</h3>
              <h4 class="text-lg font-bold text-surface-900 dark:text-white line-clamp-2 leading-snug group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{{ related.title }}</h4>
            </div>

            <div class="h-px w-full bg-surface-100 dark:bg-surface-700 my-6 group-hover:scale-x-110 transition-transform origin-left"></div>

            <div class="space-y-3">
              <div class="flex items-center gap-2 text-sm text-surface-500 dark:text-surface-400">
                <Icon name="lucide:map-pin" class="w-4 h-4 text-primary-500" />
                <span class="truncate">{{ related.location }}</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-surface-500 dark:text-surface-400">
                <Icon name="lucide:wallet" class="w-4 h-4 text-emerald-500" />
                <span class="font-semibold text-surface-900 dark:text-white">{{ related.wage }}</span>
                <span class="text-xs">{{ $t('recommended.labels.baht') }}</span>
                <span class="text-[10px] opacity-70">/ชม.</span>
              </div>
            </div>
            
            <div class="mt-6 pt-0 h-0 overflow-hidden group-hover:h-12 group-hover:pt-4 transition-all duration-300 opacity-0 group-hover:opacity-100">
              <button class="w-full py-2 bg-surface-900 dark:bg-white text-white dark:text-surface-900 rounded-xl font-bold text-sm shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all">
                {{ $t('recommended.labels.view_details') || 'ดูรายละเอียด' }}
              </button>
            </div>
          </div>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const localePath = useLocalePath()
const openApplyModal = ref(false)
const submitted = ref(false)

// Mock Data based on ID (real app would fetch from API)
// For demo, we just return static data regardless of ID
const job = {
  id: route.params.id,
  title: 'พนักงานชงกาแฟ (Barista)',
  shop: 'Aroma Specialty Coffee',
  location: 'Siam Square One',
  wage: '55 - 70',
  logo: 'lucide:coffee',
  tags: ['ยินดีรับนักศึกษา', 'มีประสบการณ์ 6 เดือน+', 'กะบ่าย'],
  date: 'โพสต์เมื่อ 2 ชม. ที่แล้ว'
}

useSeoMeta({
  title: `${job.title} - ${job.shop} | PreJob`,
  description: `รับสมัคร ${job.title} รายได้ ${job.wage} บาท/ชม. ที่ ${job.shop} ${job.location}`,
})

const submitApplication = () => {
  // Simulate API call
  setTimeout(() => {
    submitted.value = true
  }, 1000)
}

const reviews = [
  { id: 1, reviewer: 'Nadech K.', role: 'Former Barista', rating: 5.0, date: '2 days ago', comment: 'เจ้าของร้านใจดีมากครับ สอนงานละเอียด เพื่อนร่วมงานเป็นกันเอง เลิกงานตรงเวลา' },
  { id: 2, reviewer: 'Yaya U.', role: 'Part-time Store', rating: 4.5, date: '1 week ago', comment: 'งานสนุกค่ะ ลูกค้าเยอะช่วงเที่ยงแต่ทิปหนักมาก! สวัสดิการข้าวมื้อเที่ยงอร่อย' },
  { id: 3, reviewer: 'Boy P.', role: 'Weekend Staff', rating: 4.0, date: '2 weeks ago', comment: 'ร้านสวย บรรยากาศดี แต่บางทีลูกค้าเยอะอาจจะเหนื่อยหน่อยครับ โดยรวมโอเค' },
]

const relatedJobs = [
  { id: 10, title: 'พนักงานบริการ', shop: 'Cafe Amazon', location: 'Siam Square', wage: '50 - 65', logo: 'lucide:coffee', category: 'Cafe' },
  { id: 11, title: 'Cashier', shop: 'Starbucks', location: 'Siam Discovery', wage: '60 - 80', logo: 'lucide:coffee', category: 'Cafe' },
  { id: 12, title: 'พนักงานชงเครื่องดื่ม', shop: 'True Coffee', location: 'Siam Paragon', wage: '55 - 70', logo: 'lucide:coffee', category: 'Cafe' },
  { id: 13, title: 'Floor Staff', shop: 'The Coffee Club', location: 'MBK Center', wage: '58 - 75', logo: 'lucide:coffee', category: 'Cafe' },
]
</script>

<style scoped>
.safe-area-bottom {
  padding-bottom: env(safe-area-inset-bottom, 16px);
}
</style>
