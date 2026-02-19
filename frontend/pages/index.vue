<template>
  <div class="relative overflow-hidden w-full">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center text-center px-6 pt-28 pb-32">
      <!-- Background Effects -->
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-100/40 via-surface-50 to-surface-50 dark:from-primary-900/20 dark:via-surface-950 dark:to-surface-950 pointer-events-none"></div>
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary-200/20 dark:bg-primary-900/10 rounded-full blur-3xl -z-10"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-surface-200/30 dark:border-surface-700/30 rounded-full animate-pulse-slow"></div>
      
      <div class="relative z-10 max-w-4xl mx-auto space-y-8" v-auto-animate>
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/50 dark:bg-surface-800/50 border border-surface-200 dark:border-surface-700 backdrop-blur-sm shadow-sm">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span class="text-xs font-medium text-surface-600 dark:text-surface-300">New jobs added every hour</span>
        </div>
        
        <h1 class="text-4xl md:text-7xl font-extrabold tracking-tight text-surface-900 dark:text-white leading-tight">
          {{ $t('hero.title') }}
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">Right Now</span>
        </h1>
        
        <p class="text-xl md:text-2xl text-surface-500 dark:text-surface-300 max-w-2xl mx-auto font-light">
          {{ $t('hero.subtitle') }}
        </p>

        <!-- Search Box -->
        <div class="max-w-xl mx-auto mt-12">
          <div class="p-2 rounded-2xl flex items-center gap-2 shadow-xl shadow-primary-500/10 dark:shadow-none border border-surface-200 dark:border-surface-700 bg-white/80 dark:bg-surface-800/80 backdrop-blur-md">
            <div class="flex-1 relative group">
              <Icon name="lucide:search" class="absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary-500 transition-colors w-5 h-5" />
              <input 
                v-model="searchQuery"
                type="text" 
                :placeholder="$t('hero.search_placeholder')"
                class="w-full bg-transparent border-none py-3 pl-12 pr-4 text-surface-900 dark:text-white placeholder:text-surface-400 focus:ring-0 text-lg transition-all"
                @keyup.enter="doSearch"
              >
            </div>
            <button @click="doSearch" class="px-4 md:px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-bold rounded-xl transition-all shadow-xl shadow-primary-500/30 hover:shadow-primary-500/50 hover:-translate-y-0.5 active:scale-95 flex items-center gap-2">
              <span class="hidden md:inline">{{ $t('hero.search_button') }}</span>
              <Icon name="lucide:arrow-right" class="w-5 h-5" />
            </button>
          </div>
        </div>

        <!-- Metric Badges -->
        <div class="flex flex-wrap justify-center gap-4 mt-12 pt-8">
          <div class="flex items-center gap-2 px-4 py-2 bg-white dark:bg-surface-800 rounded-lg border border-surface-100 dark:border-surface-700">
             <Icon name="lucide:users" class="w-5 h-5 text-primary-500" />
            <span class="font-semibold text-surface-900 dark:text-white">10k+</span>
            <span class="text-sm text-surface-500 dark:text-surface-400">{{ $t('metrics.users') }}</span>
          </div>
          <div class="flex items-center gap-2 px-4 py-2 bg-white dark:bg-surface-800 rounded-lg border border-surface-100 dark:border-surface-700">
            <Icon name="lucide:building-2" class="w-5 h-5 text-indigo-500" />
            <span class="font-semibold text-surface-900 dark:text-white">500+</span>
            <span class="text-sm text-surface-500 dark:text-surface-400">{{ $t('metrics.companies') }}</span>
          </div>
          <div class="flex items-center gap-2 px-4 py-2 bg-white dark:bg-surface-800 rounded-lg border border-surface-100 dark:border-surface-700">
            <Icon name="lucide:check-circle" class="w-5 h-5 text-emerald-500" />
            <span class="font-semibold text-surface-900 dark:text-white">98%</span>
            <span class="text-sm text-surface-500 dark:text-surface-400">{{ $t('metrics.success') }}</span>
          </div>
        </div>
      </div>

      <!-- Scroll Down Indicator -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20 pointer-events-none">
        <Icon name="lucide:chevron-down" class="w-8 h-8 text-surface-300 dark:text-surface-600" />
      </div>
    </section>

    <!-- Categories Section -->
    <section id="categories" class="py-24 px-6 relative">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div class="max-w-2xl">
            <h2 class="text-4xl font-bold mb-4 text-surface-900 dark:text-white">{{ $t('categories.title') }}</h2>
            <p class="text-lg text-surface-500 dark:text-surface-300">{{ $t('categories.subtitle') }}</p>
          </div>
          <NuxtLink :to="localePath('/jobs')" class="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium flex items-center gap-2 group">
             {{ $t('nav.view_all') }} <Icon name="lucide:arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </NuxtLink>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4" v-auto-animate>
          <NuxtLink v-for="category in categories" :key="category.name" :to="localePath('/jobs?category=' + category.id)"
            class="group relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 to-transparent z-10 transition-opacity group-hover:opacity-90"></div>
            <img :src="category.image" :alt="category.name" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            <div class="absolute bottom-0 left-0 p-6 z-20 w-full">
              <div class="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 text-white">
                <Icon :name="category.icon" class="w-6 h-6" />
              </div>
              <h3 class="text-xl font-bold text-white mb-1">{{ category.name }}</h3>
              <p class="text-white/70 text-sm">{{ category.count }} positions</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-24 px-6 bg-surface-100/50 dark:bg-surface-900/50">
      <div class="max-w-7xl mx-auto space-y-24">
        <!-- Feature 1 -->
        <div class="flex flex-col md:flex-row items-center gap-12">
          <div class="flex-1 space-y-6">
            <div class="w-12 h-12 rounded-2xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
              <Icon name="lucide:zap" class="w-6 h-6" />
            </div>
            <h2 class="text-4xl font-bold text-surface-900 dark:text-white">{{ $t('features.fast_title') }}</h2>
            <p class="text-lg text-surface-500 dark:text-surface-300 leading-relaxed">
              {{ $t('features.fast_desc') }}
            </p>
            <ul class="space-y-3 pt-4">
              <li class="flex items-center gap-3 text-surface-700 dark:text-surface-200">
                <Icon name="lucide:check" class="w-5 h-5 text-emerald-500" /> {{ $t('features.fast_item1') }}
              </li>
              <li class="flex items-center gap-3 text-surface-700 dark:text-surface-200">
                <Icon name="lucide:check" class="w-5 h-5 text-emerald-500" /> {{ $t('features.fast_item2') }}
              </li>
              <li class="flex items-center gap-3 text-surface-700 dark:text-surface-200">
                <Icon name="lucide:check" class="w-5 h-5 text-emerald-500" /> {{ $t('features.fast_item3') }}
              </li>
            </ul>
          </div>
          <div class="flex-1 relative">
            <div class="absolute inset-0 bg-gradient-to-tr from-primary-200 dark:from-primary-900/30 to-transparent rounded-3xl blur-3xl opacity-30 transform rotate-3"></div>
            <div class="p-8 rounded-3xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 relative shadow-2xl">
               <!-- Mock UI -->
               <div class="space-y-4">
                   <div class="flex items-center gap-4 p-3 rounded-xl bg-surface-50 dark:bg-surface-700 shadow-sm border border-surface-100 dark:border-surface-600">
                    <div class="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400"><Icon name="lucide:check" class="w-5 h-5" /></div>
                    <div>
                      <div class="font-medium text-surface-900 dark:text-white">{{ $t('features.fast_mock_sent') }}</div>
                      <div class="text-xs text-surface-500 dark:text-surface-400">{{ $t('features.fast_mock_now') }}</div>
                    </div>
                  </div>
                  <div class="flex items-center gap-4 p-3 rounded-xl bg-surface-50 dark:bg-surface-700 shadow-sm border border-surface-100 dark:border-surface-600 opacity-70">
                    <div class="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400"><Icon name="lucide:eye" class="w-5 h-5" /></div>
                    <div>
                      <div class="font-medium text-surface-900 dark:text-white">{{ $t('features.fast_mock_viewed') }}</div>
                      <div class="text-xs text-surface-500 dark:text-surface-400">{{ $t('features.fast_mock_prev') }}</div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>

        <!-- Feature 2 (Reversed) -->
        <div class="flex flex-col md:flex-row-reverse items-center gap-12">
          <div class="flex-1 space-y-6">
            <div class="w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
              <Icon name="lucide:shield-check" class="w-6 h-6" />
            </div>
            <h2 class="text-4xl font-bold text-surface-900 dark:text-white">{{ $t('features.trusted_title') }}</h2>
            <p class="text-lg text-surface-500 dark:text-surface-300 leading-relaxed">
              {{ $t('features.trusted_desc') }}
            </p>
            <button class="text-primary-600 dark:text-primary-400 font-semibold flex items-center gap-2 hover:gap-3 transition-all pt-2">
              {{ $t('features.trusted_button') }} <Icon name="lucide:arrow-right" class="w-4 h-4" />
            </button>
          </div>
          <div class="flex-1 relative">
             <div class="absolute inset-0 bg-gradient-to-tl from-indigo-200 dark:from-indigo-900/30 to-transparent rounded-3xl blur-3xl opacity-30 transform -rotate-3"></div>
             <div class="p-8 rounded-3xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 relative shadow-2xl">
                 <div class="text-center space-y-4">
                     <div class="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 rounded-full inline-flex items-center gap-2 text-sm font-semibold">
                      <Icon name="lucide:badge-check" class="w-4 h-4" /> {{ $t('features.trusted_badge') }}
                    </div>
                    <div class="text-5xl font-bold text-surface-900 dark:text-white">4.9/5</div>
                    <div class="flex justify-center gap-1 text-amber-400">
                      <Icon name="lucide:star" class="w-6 h-6 fill-current" />
                      <Icon name="lucide:star" class="w-6 h-6 fill-current" />
                      <Icon name="lucide:star" class="w-6 h-6 fill-current" />
                      <Icon name="lucide:star" class="w-6 h-6 fill-current" />
                      <Icon name="lucide:star" class="w-6 h-6 fill-current" />
                    </div>
                    <p class="text-sm text-surface-500 dark:text-surface-400">{{ $t('features.trusted_reviews') }}</p>
                 </div>
             </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-24 px-6 text-center">
      <div class="max-w-4xl mx-auto p-12 rounded-3xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 shadow-2xl relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-400 via-primary-600 to-primary-400"></div>
        
         <h2 class="text-4xl md:text-5xl font-bold mb-6 text-surface-900 dark:text-white">{{ $t('cta.title') }}</h2>
        <p class="text-xl text-surface-500 dark:text-surface-300 mb-8 max-w-2xl mx-auto">{{ $t('cta.subtitle') }}</p>
        
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <NuxtLink :to="localePath('/register')" class="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-bold rounded-xl text-lg transition-all shadow-xl shadow-primary-500/30 hover:shadow-primary-500/50 hover:-translate-y-0.5 active:scale-95 inline-block">
            {{ $t('cta.create_account') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/employer/post-job')" class="px-8 py-4 bg-surface-100 dark:bg-surface-700 hover:bg-surface-200 dark:hover:bg-surface-600 text-surface-700 dark:text-white font-bold rounded-xl text-lg border border-surface-200 dark:border-surface-600 transition-all inline-block">
            {{ $t('nav.post_job') }}
          </NuxtLink>
        </div>
        
        <p class="mt-6 text-sm text-surface-400 dark:text-surface-500">{{ $t('cta.no_card') }}</p>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const router = useRouter()

const searchQuery = ref('')

const doSearch = () => {
  const q = searchQuery.value.trim()
  if (q) {
    router.push(localePath(`/jobs?q=${encodeURIComponent(q)}`))
  } else {
    router.push(localePath('/jobs'))
  }
}

const categories = [
  { id: 'cafe', name: 'Cafe & Bistro', count: 120, icon: 'lucide:coffee', image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600&auto=format&fit=crop' },
  { id: 'restaurant', name: 'Restaurant', count: 85, icon: 'lucide:utensils', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop' },
  { id: 'retail', name: 'Retail & Shop', count: 64, icon: 'lucide:shopping-bag', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop' },
  { id: 'delivery', name: 'Delivery', count: 42, icon: 'lucide:bike', image: 'https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?q=80&w=600&auto=format&fit=crop' },
]
</script>
