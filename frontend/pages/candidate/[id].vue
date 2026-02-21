<template>
  <div class="min-h-screen bg-surface-50 dark:bg-surface-950 pt-24 pb-12">
    <div class="max-w-4xl mx-auto px-6">
      
      <!-- Back Button -->
      <!-- `<button @click="$router.back()"` provides history back -->
      <button @click="$router.back()" class="mb-6 inline-flex items-center gap-2 text-surface-500 hover:text-surface-900 dark:text-surface-400 dark:hover:text-white transition-colors">
        <Icon name="lucide:arrow-left" class="w-4 h-4" />
        <span class="text-sm font-medium">{{ $t('candidate.back') }}</span>
      </button>

      <!-- Profile Header Card -->
      <div class="bg-white dark:bg-surface-900 rounded-2xl p-6 md:p-8 shadow-sm border border-surface-200 dark:border-surface-800 mb-8 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden">
        
        <!-- Decorative bg -->
        <div class="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 dark:bg-primary-500/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
        
        <div class="relative group shrink-0 mx-auto md:mx-0">
          <img :src="candidate.avatar" :alt="candidate.name" class="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover bg-surface-100 shadow-lg ring-4 ring-white dark:ring-surface-800 z-10 relative" />
          <div class="absolute -bottom-3 -right-3 w-10 h-10 bg-emerald-500 text-white rounded-xl shadow-lg flex items-center justify-center ring-4 ring-white dark:ring-surface-800 z-20" title="Verified Member">
            <Icon name="lucide:badge-check" class="w-5 h-5" />
          </div>
        </div>

        <div class="flex-1 w-full text-center md:text-left">
          <div class="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
            <div>
              <h1 class="text-3xl font-bold text-surface-900 dark:text-white mb-2">{{ candidate.name }}</h1>
              <p class="text-lg text-primary-600 dark:text-primary-400 font-medium mb-2">{{ candidate.title }}</p>
              
              <div class="flex flex-wrap items-center justify-center md:justify-start gap-4 text-surface-500 dark:text-surface-400 text-sm">
                <div class="flex items-center gap-1.5">
                  <Icon name="lucide:map-pin" class="w-4 h-4" />
                  {{ candidate.location }}
                </div>
                <!-- rating overview -->
                <div class="flex items-center gap-1.5">
                  <Icon name="lucide:star" class="w-4 h-4 text-amber-400 fill-current" />
                  <span class="font-bold text-surface-900 dark:text-white">{{ candidate.rating }}</span>
                  <span>({{ candidate.reviewCount }} {{ $t('candidate.reviews_count') }})</span>
                </div>
              </div>
            </div>

            <!-- Actions -->
            <div class="flex flex-col sm:flex-row text-center md:flex-col gap-2 shrink-0 mt-4 md:mt-0 w-full sm:w-auto">
               <button class="flex-1 sm:flex-none py-2.5 px-6 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-bold rounded-xl shadow-lg shadow-primary-500/20 active:scale-95 transition-all text-sm flex items-center justify-center gap-2">
                 <Icon name="lucide:message-square" class="w-4 h-4" />
                 {{ $t('candidate.contact') }}
               </button>
               <button class="flex-1 sm:flex-none py-2.5 px-6 font-medium text-surface-700 dark:text-surface-300 bg-surface-100 dark:bg-surface-800 hover:bg-surface-200 dark:hover:bg-surface-700 rounded-xl transition-colors text-sm flex items-center justify-center gap-2 border border-surface-200 dark:border-surface-700">
                 <Icon name="lucide:download" class="w-4 h-4" />
                 {{ $t('candidate.resume') }}
               </button>
            </div>
          </div>
          
          <div class="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
            <span v-for="skill in candidate.skills" :key="skill" class="px-3 py-1 bg-surface-100 dark:bg-surface-800 text-surface-700 dark:text-surface-300 rounded-lg text-sm font-medium border border-surface-200 dark:border-surface-700">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Left Column: Details -->
        <div class="lg:col-span-2 space-y-8">
          
          <!-- About -->
          <section class="bg-white dark:bg-surface-900 rounded-2xl p-6 md:p-8 shadow-sm border border-surface-200 dark:border-surface-800">
            <h2 class="text-xl font-bold text-surface-900 dark:text-white mb-4">{{ $t('candidate.about') }}</h2>
            <p class="text-surface-600 dark:text-surface-300 leading-relaxed whitespace-pre-line">{{ candidate.about }}</p>
          </section>

          <!-- Experience -->
          <section class="bg-white dark:bg-surface-900 rounded-2xl p-6 md:p-8 shadow-sm border border-surface-200 dark:border-surface-800">
            <h2 class="text-xl font-bold text-surface-900 dark:text-white mb-6">{{ $t('candidate.experience') }}</h2>
            
            <div class="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-surface-200 dark:before:via-surface-700 before:to-transparent">
               <div v-for="(exp, i) in candidate.experience" :key="i" class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                 <!-- Icon marker -->
                 <div class="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-surface-900 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                   <Icon name="lucide:briefcase" class="w-4 h-4" />
                 </div>
                 
                 <!-- Card -->
                 <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-surface-50 dark:bg-surface-800/50 p-5 rounded-xl border border-surface-100 dark:border-surface-700 group-hover:border-primary-500/30 dark:group-hover:border-primary-500/30 transition-colors">
                    <div class="flex justify-between items-start mb-1 gap-2 flex-wrap">
                      <h3 class="font-bold text-surface-900 dark:text-white text-base md:text-lg">{{ exp.role }}</h3>
                      <span class="text-xs font-medium px-2 py-1 bg-surface-200 dark:bg-surface-700 rounded-md text-surface-600 dark:text-surface-300">{{ exp.period }}</span>
                    </div>
                    <div class="text-primary-600 dark:text-primary-400 font-medium text-sm mb-3">{{ exp.company }}</div>
                    <p class="text-surface-600 dark:text-surface-400 text-sm md:text-base">{{ exp.description }}</p>
                 </div>
               </div>
            </div>
          </section>

          <!-- Reviews -->
          <section class="bg-white dark:bg-surface-900 rounded-2xl p-6 md:p-8 shadow-sm border border-surface-200 dark:border-surface-800">
            <div class="flex flex-wrap items-center justify-between gap-4 mb-6">
              <h2 class="text-xl font-bold text-surface-900 dark:text-white">{{ $t('candidate.reviews') }}</h2>
              <div class="flex items-center gap-4">
                <NuxtLink :to="localePath('/candidate/history')" class="text-sm font-bold text-surface-700 dark:text-surface-300 hover:text-surface-900 dark:hover:text-white bg-surface-100 dark:bg-surface-800 hover:bg-surface-200 dark:hover:bg-surface-700 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5">
                  <Icon name="lucide:history" class="w-4 h-4" /> Full History
                </NuxtLink>
                <NuxtLink :to="localePath('/reviews/create')" class="text-primary-600 dark:text-primary-400 font-medium text-sm hover:underline">{{ $t('candidate.write_review') }}</NuxtLink>
              </div>
            </div>

            <div v-if="candidate.reviews.length > 0" class="space-y-6">
              <div v-for="review in candidate.reviews" :key="review.id" class="border-b border-surface-100 dark:border-surface-800 last:border-0 pb-6 last:pb-0">
                <div class="flex justify-between items-start mb-3">
                  <div class="flex items-center gap-3">
                    <img :src="review.author.avatar" :alt="review.author.name" class="w-10 h-10 rounded-full bg-surface-200 dark:bg-surface-700" />
                    <div>
                      <div class="font-medium text-surface-900 dark:text-white text-sm md:text-base">{{ review.author.name }}</div>
                      <div class="text-xs text-surface-500 dark:text-surface-400">{{ review.date }} • {{ review.jobTitle }}</div>
                    </div>
                  </div>
                  <div class="flex gap-1 text-amber-400">
                    <Icon name="lucide:star" class="w-4 h-4 md:w-5 md:h-5 fill-current" v-for="n in 5" :key="n" :class="n > review.rating ? 'opacity-30' : ''"/>
                  </div>
                </div>
                <p class="text-surface-600 dark:text-surface-300 text-sm md:text-base">{{ review.comment }}</p>
              </div>
            </div>
            
            <div v-else class="text-center py-8">
               <div class="w-16 h-16 bg-surface-100 dark:bg-surface-800 rounded-full flex items-center justify-center text-surface-400 mx-auto mb-4">
                 <Icon name="lucide:message-square-off" class="w-8 h-8" />
               </div>
               <p class="text-surface-500 dark:text-surface-400">{{ $t('candidate.no_reviews') }}</p>
            </div>
          </section>

        </div>

        <!-- Right Column: Sidebar -->
        <div class="space-y-6">
          <div class="bg-white dark:bg-surface-900 rounded-2xl p-6 shadow-sm border border-surface-200 dark:border-surface-800">
            <h3 class="font-bold text-surface-900 dark:text-white mb-4">{{ $t('candidate.languages') }}</h3>
            <div class="space-y-3">
              <div v-for="lang in candidate.languages" :key="lang.name" class="flex justify-between items-center text-sm md:text-base mb-2">
                <span class="text-surface-700 dark:text-surface-300 font-medium">{{ lang.name }}</span>
                <span class="text-surface-500 dark:text-surface-400 text-sm">{{ lang.level }}</span>
              </div>
            </div>
          </div>

          <div class="bg-white dark:bg-surface-900 rounded-2xl p-6 shadow-sm border border-surface-200 dark:border-surface-800">
             <h3 class="font-bold text-surface-900 dark:text-white mb-4">{{ $t('candidate.education') }}</h3>
             <div class="space-y-4 relative pl-2">
               <div v-for="edu in candidate.education" :key="edu.degree" class="relative pl-4 before:absolute before:left-0 before:top-1.5 before:w-2 before:h-2 before:bg-primary-500 before:rounded-full">
                 <div class="font-medium text-surface-900 dark:text-white text-sm md:text-base mb-1">{{ edu.degree }}</div>
                 <div class="text-surface-600 dark:text-surface-400 text-xs md:text-sm mb-1">{{ edu.school }}</div>
                 <div class="text-surface-400 dark:text-surface-500 text-xs">{{ edu.year }}</div>
               </div>
             </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

useSeoMeta({
  title: 'Candidate Profile - PreJob'
})

// Mock Data
const candidate = ref({
  id: 'c1',
  name: 'นภัสสร รักษ์ดี',
  title: 'นักศึกษาฝึกงาน การตลาด / Content Creator',
  location: 'กรุงเทพมหานคร, ไทย',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
  rating: 4.8,
  reviewCount: 12,
  about: 'สวัสดีค่ะ ชื่อนทค่ะ ปัจจุบันกำลังศึกษาอยู่ชั้นปีที่ 3 คณะนิเทศศาสตร์ สาขาการประชาสัมพันธ์ มีความสนใจในด้าน Digital Marketing และ Content Creation ชอบการคิดคอนเทนต์ใหม่ๆ ที่ตอบโจทย์กลุ่มเป้าหมาย มีประสบการณ์ทำเพจรีวิวคาเฟ่และจัดการโซเชียลมีเดีย\n\nกำลังมองหาโอกาสฝึกงานเพื่อพัฒนาทักษะและเรียนรู้การทำงานจริงในเอเจนซี่โฆษณาหรือบริษัทเทคโนโลยีค่ะ',
  skills: ['Content Writing', 'Social Media Management', 'Canva', 'CapCut', 'Figma', 'Basic SEO'],
  languages: [
    { name: 'ไทย', level: 'Native' },
    { name: 'English', level: 'Intermediate (TOEIC 750)' }
  ],
  education: [
    { degree: 'ปริญญาตรี นิเทศศาสตร์', school: 'มหาวิทยาลัยชั้นนำแห่งหนึ่ง', year: '2022 - ปัจจุบัน' },
    { degree: 'มัธยมศึกษาตอนปลาย (ศิลป์-คำนวณ)', school: 'โรงเรียนสตรีวิทยา', year: '2019 - 2022' }
  ],
  experience: [
    { 
      role: 'Freelance Content Creator', 
      company: 'เพจ "เที่ยวกับนท"', 
      period: 'Jan 2023 - Present', 
      description: 'เขียนคอนเทนต์รีวิวสถานที่ท่องเที่ยวและคาเฟ่ ถ่ายภาพและตัดต่อวิดีโอสั้น (Reels/TikTok) ปัจจุบันมีผู้ติดตามกว่า 10,000 คน' 
    },
    { 
      role: 'Staff Event (Part-time)', 
      company: 'บริษัท ครีเอทีฟ อีเว้นท์ จำกัด', 
      period: 'Oct 2023 - Nov 2023', 
      description: 'ช่วยประสานงานในวันงาน จัดเตรียมเอกสารและดูแลความเรียบร้อยของบูธกิจกรรม' 
    }
  ],
  reviews: [
    {
      id: 1,
      author: { name: 'คุณสมชาย (Aroma Coffee)', avatar: 'https://ui-avatars.com/api/?name=Somchai&background=random' },
      date: '15 Feb 2024',
      jobTitle: 'Part-time Barista',
      rating: 5,
      comment: 'น้องนทตั้งใจทำงานมาก เรียนรู้งานไว มาตรงเวลาเสมอ และมีมนุษยสัมพันธ์ดีกับลูกค้าทุกคน'
    },
    {
      id: 2,
      author: { name: 'คุณศิริพร (Creative Agency)', avatar: 'https://ui-avatars.com/api/?name=Siriporn&background=random' },
      date: '10 Dec 2023',
      jobTitle: 'Staff Event',
      rating: 4,
      comment: 'ทำงานที่ได้รับมอบหมายได้ครบถ้วน แก้ปัญหาเฉพาะหน้าได้ดี แต่อาจจะต้องเพิ่มความมั่นใจในการคุยกับลูกค้าอีกนิด'
    }
  ]
})
</script>
