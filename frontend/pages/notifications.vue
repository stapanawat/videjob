<template>
  <div class="min-h-screen pt-24 pb-12 max-w-lg mx-auto px-6">
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-2xl font-bold text-surface-900 dark:text-white">Notifications (Demo)</h1>
      <span class="text-xs px-2 py-1 bg-surface-100 dark:bg-surface-800 rounded text-surface-500">Mockup</span>
    </div>

    <!-- Line Simulation -->
    <div class="bg-[#8cc6f2] dark:bg-[#1e1e1e] rounded-xl overflow-hidden shadow-xl border border-surface-200 dark:border-surface-700 h-[600px] flex flex-col">
      <!-- Chat Header -->
      <div class="bg-[#2a303c] p-4 flex items-center gap-3 text-white">
        <Icon name="lucide:chevron-left" class="w-6 h-6" />
        <div class="flex-1 font-bold">PreJob Bot 🤖</div>
        <Icon name="lucide:search" class="w-5 h-5" />
        <Icon name="lucide:menu" class="w-5 h-5" />
      </div>

      <!-- Chat Area -->
      <div class="flex-1 p-4 space-y-4 overflow-y-auto">
        
        <!-- Date Divider -->
        <div class="flex justify-center">
          <span class="bg-black/10 text-white text-[10px] px-2 py-0.5 rounded-full">Today</span>
        </div>

        <!-- Msg 1: Morning Check -->
        <div class="flex gap-2">
           <div class="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary-600"><Icon name="lucide:bot" class="w-5 h-5" /></div>
           <div class="max-w-[80%] space-y-1">
             <div class="bg-white text-black p-3 rounded-xl rounded-tl-none shadow-sm text-sm">
               <div class="font-bold mb-1 text-primary-600">Morning Check! ☀️</div>
               <p>สวัสดีคุณ Somsak, วันนี้คุณมีนัดทำงานที่ <b>Aroma Coffee</b> เวลา 10:00 น.</p>
               <p class="mt-2">ยืนยันการเดินทางไหมครับ?</p>
             </div>
             <div v-if="!replied" class="flex gap-2">
               <button @click="reply('Going')" class="bg-white text-primary-600 px-4 py-2 rounded-lg text-sm font-bold shadow-sm active:scale-95 transition-transform">ไปครับ 🚗</button>
               <button @click="reply('Cannot')" class="bg-white text-rose-600 px-4 py-2 rounded-lg text-sm font-bold shadow-sm active:scale-95 transition-transform">ไม่สะดวก</button>
             </div>
           </div>
        </div>

        <!-- Msg 2: User Reply -->
        <div v-if="replied" class="flex justify-end gap-2 animate-fade-in-up">
           <div class="bg-[#9ae6b4] text-black p-3 rounded-xl rounded-tr-none shadow-sm text-sm max-w-[80%]">
             ไปครับ 🚗 (กำลังเดินทาง)
           </div>
        </div>

        <!-- Msg 3: Shop Owner Notified -->
        <div v-if="replied" class="flex gap-2 animate-fade-in-up delay-500">
           <div class="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary-600"><Icon name="lucide:bot" class="w-5 h-5" /></div>
           <div class="max-w-[80%] space-y-1">
             <div class="bg-white text-black p-3 rounded-xl rounded-tl-none shadow-sm text-sm">
               รับทราบครับ! แจ้งเจ้าของร้านเรียบร้อยแล้ว เดินทางปลอดภัยนะครับ 👍
             </div>
           </div>
        </div>

      </div>

      <!-- Chat Input (Disabled) -->
      <div class="bg-white dark:bg-[#2a303c] p-3 flex items-center gap-2 border-t border-surface-200 dark:border-surface-700">
        <Icon name="lucide:plus" class="w-6 h-6 text-surface-400" />
        <Icon name="lucide:camera" class="w-6 h-6 text-surface-400" />
        <Icon name="lucide:image" class="w-6 h-6 text-surface-400" />
        <div class="flex-1 bg-surface-100 dark:bg-surface-700 h-9 rounded-full px-3 text-sm flex items-center text-surface-400">Type a message...</div>
        <Icon name="lucide:smile" class="w-6 h-6 text-surface-400" />
        <Icon name="lucide:mic" class="w-6 h-6 text-surface-400" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const replied = ref(false)

useSeoMeta({
  title: 'Notifications Demo - PreJob'
})

const reply = (status: string) => {
  replied.value = true
}
</script>

<style scoped>
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
  animation: fadeInUp 0.3s ease-out forwards;
}
.delay-500 {
  animation-delay: 0.5s;
  opacity: 0; /* Init hidden */
}
</style>
