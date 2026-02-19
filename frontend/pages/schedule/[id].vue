<template>
  <div class="min-h-screen pt-24 pb-12 flex items-center justify-center px-6">
    <div class="w-full max-w-md bg-white dark:bg-surface-800 rounded-2xl shadow-xl border border-surface-200 dark:border-surface-700 overflow-hidden">
      
      <!-- Header -->
      <div class="bg-primary-600 p-6 text-center text-white">
        <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="lucide:calendar-clock" class="w-8 h-8" />
        </div>
        <h1 class="text-xl font-bold">นัดหมายสัมภาษณ์งาน</h1>
        <p class="text-primary-100 text-sm mt-1">กรุณายืนยันเวลานัดหมายของคุณ</p>
      </div>

      <div class="p-8 space-y-6">
        <!-- Job Info -->
        <div class="flex items-center gap-4 p-4 bg-surface-50 dark:bg-surface-900 rounded-xl border border-surface-100 dark:border-surface-700">
           <div class="w-12 h-12 rounded-lg bg-white dark:bg-surface-800 flex items-center justify-center border border-surface-200 dark:border-surface-600 shadow-sm">
             <Icon name="lucide:coffee" class="w-6 h-6 text-surface-400" />
           </div>
           <div class="min-w-0">
             <div class="font-bold text-surface-900 dark:text-white truncate">Barista</div>
             <div class="text-sm text-surface-500 dark:text-surface-400 truncate">Aroma Specialty Coffee</div>
           </div>
        </div>

        <!-- Time Details -->
        <div class="space-y-4">
          <div class="flex items-start gap-4">
            <Icon name="lucide:calendar" class="w-5 h-5 text-primary-600 dark:text-primary-400 mt-1" />
            <div>
              <div class="text-sm text-surface-500 dark:text-surface-400">วันที่</div>
              <div class="font-medium text-surface-900 dark:text-white">วันศุกร์ที่ 20 กุมภาพันธ์ 2026</div>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <Icon name="lucide:clock" class="w-5 h-5 text-primary-600 dark:text-primary-400 mt-1" />
            <div>
              <div class="text-sm text-surface-500 dark:text-surface-400">เวลา</div>
              <div class="font-medium text-surface-900 dark:text-white">10:30 น. - 11:00 น.</div>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <Icon name="lucide:map-pin" class="w-5 h-5 text-primary-600 dark:text-primary-400 mt-1" />
            <div>
              <div class="text-sm text-surface-500 dark:text-surface-400">สถานที่</div>
              <div class="font-medium text-surface-900 dark:text-white">Siam Square One, ชั้น 3</div>
              <a href="#" class="text-xs text-primary-600 dark:text-primary-400 hover:underline">ดูแผนที่</a>
            </div>
          </div>
        </div>

        <!-- Actions -->
        <div v-if="!confirmed" class="pt-4 grid grid-cols-2 gap-4">
          <button class="py-3 px-4 border border-surface-300 dark:border-surface-600 rounded-xl text-surface-700 dark:text-surface-300 font-medium hover:bg-surface-50 dark:hover:bg-surface-700 transition-colors">
            ขอเลื่อนนัด
          </button>
          <button @click="confirmAppointment" class="py-3 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold shadow-lg shadow-primary-500/20 active:scale-95 transition-all">
            ยืนยันนัดหมาย
          </button>
        </div>

        <!-- Success State -->
        <div v-else class="pt-4 text-center space-y-4">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-sm font-semibold">
            <Icon name="lucide:check-circle" class="w-4 h-4" /> ยืนยันเรียบร้อย
          </div>
          <p class="text-sm text-surface-500 dark:text-surface-400">ระบบได้แจ้งเตือนไปยังผู้จ้างงานแล้ว <br>กรุณามาถึงก่อนเวลานัด 10 นาที</p>
          <NuxtLink to="/" class="inline-block text-primary-600 dark:text-primary-400 font-medium hover:underline">กลับหน้าแรก</NuxtLink>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const confirmed = ref(false)

useSeoMeta({
  title: 'Confirm Appointment - PreJob'
})

const confirmAppointment = () => {
  confirmed.value = true
}
</script>
