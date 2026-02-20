<template>
  <div class="relative overflow-hidden w-full">
    <!-- Hero Section -->
    <!-- Hero Section - Asymmetrical Modern Layout -->
    <section class="relative min-h-[90vh] flex items-center px-6 pt-32 pb-20 overflow-hidden">
      <div class="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        <!-- Left Column: Content -->
        <div class="text-left space-y-10" v-auto-animate>
          <!-- Badge -->
          <div class="inline-flex items-center gap-3 pl-1 pr-4 py-1 rounded-full bg-white/40 dark:bg-surface-800/40 border border-surface-200/50 dark:border-surface-700/50 backdrop-blur-md shadow-sm ring-1 ring-white/20">
            <span class="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30">
              <Icon name="lucide:sparkles" class="w-3 h-3" />
            </span>
            <span class="text-sm font-semibold tracking-wide text-surface-700 dark:text-surface-200 uppercase text-[10px]">{{ $t('hero.badge') }}</span>
          </div>
          
          <!-- Title -->
          <div class="space-y-4">
            <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight text-surface-900 dark:text-white leading-[1.1]">
              <span class="block text-transparent bg-clip-text bg-gradient-to-r from-surface-900 to-surface-600 dark:from-white dark:to-surface-400">Find your</span>
              <span class="block text-primary-600 dark:text-primary-400">Dream Career</span>
            </h1>
            <p class="text-xl text-surface-600 dark:text-surface-300 max-w-xl font-light leading-relaxed border-l-4 border-primary-500/30 pl-6">
              {{ $t('hero.subtitle') }}
            </p>
          </div>

          <!-- Search Box (Integrated) -->
          <div class="bg-white dark:bg-surface-800 p-2 rounded-2xl shadow-2xl shadow-primary-900/10 dark:shadow-black/50 border border-surface-100 dark:border-surface-700 max-w-lg transform hover:-translate-y-1 transition-all duration-300">
            <div class="relative flex items-center">
              <Icon name="lucide:search" class="absolute left-4 text-surface-400 w-5 h-5" />
              <input 
                v-model="searchQuery"
                type="text" 
                :placeholder="$t('hero.search_placeholder')"
                class="w-full bg-transparent border-none py-4 pl-12 pr-4 text-surface-900 dark:text-white placeholder:text-surface-400 focus:ring-0 text-base"
                @keyup.enter="doSearch"
              >
              <button @click="doSearch" class="m-1 px-6 py-3 bg-surface-900 dark:bg-white text-white dark:text-surface-900 font-bold rounded-xl hover:bg-primary-600 dark:hover:bg-primary-400 transition-colors shadow-lg">
                <Icon name="lucide:arrow-right" class="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <!-- Trust Indicators -->
          <div class="pt-4 flex items-center gap-6 text-surface-500 dark:text-surface-400 text-sm font-medium">
             <div class="flex -space-x-3">
               <img v-for="i in 4" :key="i" :src="`https://ui-avatars.com/api/?name=User+${i}&background=random&color=fff`" class="w-8 h-8 rounded-full border-2 border-surface-50 dark:border-surface-950" alt="User">
             </div>
             <span>Trusted by 10k+ candidates</span>
          </div>
        </div>

        <!-- Right Column: Abstract Visual -->
        <div class="relative hidden lg:block h-[600px]">
           <!-- Abstract shapes composition -->
           <div class="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-accent-500/20 rounded-[3rem] rotate-3 backdrop-blur-3xl border border-white/10"></div>
           <div class="absolute inset-0 bg-surface-900/5 dark:bg-white/5 rounded-[3rem] -rotate-2 backdrop-blur-sm border border-white/20 z-10 overflow-hidden shadow-2xl">
              <!-- Grid/UI Mockup -->
              <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-50 mix-blend-overlay"></div>
              
              <!-- Floating Card 1 -->
              <div class="absolute top-20 left-10 right-20 bg-white dark:bg-surface-800 p-6 rounded-2xl shadow-xl border border-surface-100 dark:border-surface-700 animate-fade-in-up">
                  <div class="flex items-center gap-4 mb-4">
                      <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-xl flex items-center justify-center text-primary-600">
                          <Icon name="lucide:code-2" class="w-6 h-6" />
                      </div>
                      <div>
                          <div class="font-bold text-surface-900 dark:text-white">Senior Frontend Dev</div>
                          <div class="text-xs text-surface-500">Tech Corp • Remote</div>
                      </div>
                  </div>
                  <div class="h-2 bg-surface-100 dark:bg-surface-700 rounded-full w-3/4 mb-2"></div>
                  <div class="h-2 bg-surface-100 dark:bg-surface-700 rounded-full w-1/2"></div>
              </div>

               <!-- Floating Card 2 -->
              <div class="absolute bottom-32 -right-6 left-20 bg-white dark:bg-surface-800 p-6 rounded-2xl shadow-xl border border-surface-100 dark:border-surface-700 animate-fade-in-up animate-delay-200 z-20">
                  <div class="flex items-center gap-4">
                       <div class="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600">
                           <Icon name="lucide:check" class="w-5 h-5" />
                       </div>
                       <div>
                           <div class="font-bold text-lg text-emerald-600 dark:text-emerald-400">Application Sent!</div>
                           <div class="text-xs text-surface-500">Good luck 🚀</div>
                       </div>
                  </div>
              </div>
           </div>
        </div>
      </div>
      
      <!-- Scroll Indicator -->
        <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20 opacity-50">
        <Icon name="lucide:mouse-pointer-2" class="w-6 h-6 text-surface-400 dark:text-surface-600" />
      </div>
    </section>

    <!-- Stats & Trust - Bento Grid Layout (Revamped) -->
    <section class="py-24 px-6 relative">
      <!-- Background Glow -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary-900/20 dark:bg-primary-500/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

        <div class="max-w-7xl mx-auto space-y-16">
          <div class="text-center max-w-3xl mx-auto space-y-4 relative">
             <div class="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-emerald-500/20 blur-3xl rounded-full"></div>
            <h2 class="text-3xl md:text-5xl font-bold text-surface-900 dark:text-white leading-tight relative z-10">
              Trusted by <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-emerald-400">Leading Company</span>
            </h2>
            <p class="text-surface-500 dark:text-surface-400 text-lg relative z-10">{{ $t('about.desc_1') }}</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Large Card 1 (Main) -->
            <div class="md:col-span-2 relative overflow-hidden rounded-[2.5rem] p-10 group border border-surface-200 dark:border-white/10 bg-white dark:bg-surface-900/50 backdrop-blur-xl shadow-2xl hover:shadow-primary-500/20 transition-all duration-500">
               <!-- Gradient Mesh Background -->
               <div class="absolute inset-0 bg-gradient-to-br from-primary-600/90 to-indigo-700/90 opacity-100 group-hover:scale-105 transition-transform duration-700"></div>
               <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
               
               <!-- Content -->
               <div class="relative z-10 flex flex-col h-full justify-between">
                 <div class="space-y-2">
                   <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium w-fit">
                      <Icon name="lucide:briefcase" class="w-4 h-4" />
                      Popular
                   </div>
                   <div class="text-7xl font-bold text-white tracking-tight">{{ $t('stats.fulltime.count') }}</div>
                   <div class="text-2xl font-semibold text-primary-100">{{ $t('stats.fulltime.title') }}</div>
                 </div>
                 <p class="text-primary-100/80 max-w-md text-lg mt-6">{{ $t('stats.fulltime.desc') }}</p>
               </div>
               
               <!-- Decorative Icon -->
               <Icon name="lucide:briefcase" class="absolute -bottom-6 -right-6 w-48 h-48 text-white/10 rotate-12 group-hover:rotate-6 group-hover:scale-110 transition-all duration-700" />
            </div>

            <!-- Tall Card 2 (Internship) -->
            <div class="relative overflow-hidden rounded-[2.5rem] p-8 bg-surface-50 dark:bg-surface-800 border border-surface-200 dark:border-surface-700 hover:border-emerald-500/50 transition-colors group">
               <div class="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
               
               <div class="relative z-10 flex flex-col h-full justify-between space-y-6">
                 <div>
                    <div class="w-12 h-12 bg-white dark:bg-surface-700 rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform text-emerald-500">
                      <Icon name="lucide:users" class="w-6 h-6" />
                    </div>
                    <div class="text-4xl font-bold text-surface-900 dark:text-white mb-1">{{ $t('stats.internship.count') }}</div>
                    <div class="text-surface-500 dark:text-surface-400 font-medium">{{ $t('stats.internship.title') }}</div>
                 </div>
                 
                 <!-- Custom Progress Ring or Bar -->
                 <div class="space-y-2">
                    <div class="flex justify-between text-xs font-semibold uppercase tracking-wider text-surface-400">
                       <span>Growth</span>
                       <span class="text-emerald-500">+24%</span>
                    </div>
                    <div class="h-2 w-full bg-surface-200 dark:bg-surface-950 rounded-full overflow-hidden">
                      <div class="h-full bg-emerald-500 w-[80%] rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                    </div>
                 </div>
               </div>
            </div>

             <!-- Wide Card 3 (Parttime) -->
            <div class="relative overflow-hidden rounded-[2.5rem] p-8 bg-surface-900 text-white border border-surface-700 hover:border-accent-500/50 transition-colors group flex flex-col justify-center">
               <div class="absolute inset-0 bg-gradient-to-r from-accent-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div class="relative z-10 flex items-center justify-between">
                  <div>
                    <div class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-white mb-1">{{ $t('stats.parttime.count') }}</div>
                    <div class="text-accent-200 font-medium">{{ $t('stats.parttime.title') }}</div>
                  </div>
                  <div class="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm group-hover:rotate-180 transition-transform duration-700">
                     <Icon name="lucide:clock" class="w-6 h-6 text-accent-300" />
                  </div>
               </div>
            </div>

            <!-- Card 4 (Contract) -->
            <div class="md:col-span-2 relative overflow-hidden rounded-[2.5rem] p-8 border border-surface-200 dark:border-surface-700 hover:border-surface-300 dark:hover:border-surface-600 bg-white dark:bg-surface-800 transition-all flex items-center justify-between group">
                <!-- Background Pattern -->
                <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style="background-image: radial-gradient(#64748b 1px, transparent 1px); background-size: 20px 20px;"></div>
                
                <div class="relative z-10 flex items-center gap-6">
                   <div class="w-16 h-16 rounded-2xl bg-surface-100 dark:bg-surface-900 flex items-center justify-center text-surface-900 dark:text-white shadow-inner">
                      <Icon name="lucide:file-check" class="w-8 h-8" />
                   </div>
                   <div>
                      <div class="text-3xl font-bold text-surface-900 dark:text-white">{{ $t('stats.contract.count') }}</div>
                      <div class="text-surface-500 dark:text-surface-400">{{ $t('stats.contract.title') }}</div>
                   </div>
                </div>
                
                <div class="relative z-10 hidden sm:block">
                   <span class="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100/50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 rounded-xl text-sm font-bold border border-emerald-200 dark:border-emerald-800/50">
                      <Icon name="lucide:shield-check" class="w-4 h-4" /> Verified
                   </span>
                </div>
            </div>
          </div>
        </div>
    </section>

    <!-- Recommended Jobs - Glass Cards with Hover Reveal -->
    <section class="py-24 px-6 relative">
        <!-- Background Decor -->
        <div class="absolute top-0 left-0 w-full h-full bg-surface-50/50 dark:bg-surface-900/30 -z-10"></div>
        <div class="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary-500/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div class="max-w-7xl mx-auto">
             <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                   <h2 class="text-3xl md:text-4xl font-bold text-surface-900 dark:text-white mb-2">{{ $t('recommended.title') }}</h2>
                   <p class="text-surface-500 dark:text-surface-400">{{ $t('recommended.subtitle') }}</p>
                </div>
                <NuxtLink :to="localePath('/jobs')" class="group flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold hover:gap-3 transition-all">
                    {{ $t('recommended.view_all') }} <Icon name="lucide:arrow-right" class="w-4 h-4" />
                </NuxtLink>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div v-for="job in recommendedJobs" :key="job.id" class="group relative bg-white dark:bg-surface-800 rounded-3xl p-6 shadow-lg shadow-surface-200/50 dark:shadow-none border border-surface-100 dark:border-surface-700 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                    <!-- Hover Gradient Overlay -->
                    <div class="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    
                    <div class="relative z-10 flex flex-col h-full">
                        <div class="flex items-start justify-between mb-6">
                             <img :src="job.logo" :alt="job.company" class="w-14 h-14 rounded-2xl object-cover bg-surface-50 shadow-sm border border-surface-100 dark:border-surface-700">
                             <div class="px-3 py-1 rounded-full bg-surface-100 dark:bg-surface-700 text-[10px] font-bold text-surface-600 dark:text-surface-300 uppercase tracking-wider">
                               {{ job.category }}
                             </div>
                        </div>

                        <div class="mb-auto">
                            <h3 class="font-bold text-surface-400 uppercase text-xs tracking-wider mb-1">{{ job.company }}</h3>
                            <h4 class="text-lg font-bold text-surface-900 dark:text-white line-clamp-2 leading-snug group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{{ job.title }}</h4>
                        </div>

                        <!-- Divider -->
                        <div class="h-px w-full bg-surface-100 dark:bg-surface-700 my-6 group-hover:scale-x-110 transition-transform origin-left"></div>

                        <div class="space-y-3">
                             <div class="flex items-center gap-2 text-sm text-surface-500 dark:text-surface-400">
                                <Icon name="lucide:map-pin" class="w-4 h-4 text-primary-500" />
                                <span class="truncate">{{ job.location }}</span>
                             </div>
                             <div class="flex items-center gap-2 text-sm text-surface-500 dark:text-surface-400">
                                <Icon name="lucide:wallet" class="w-4 h-4 text-emerald-500" />
                                <span class="font-semibold text-surface-900 dark:text-white">{{ job.salary || job.allowance }}</span>
                                <span class="text-xs">{{ $t('recommended.labels.baht') }}</span>
                             </div>
                        </div>
                        
                        <!-- Hover Action -->
                        <div class="mt-6 pt-0 h-0 overflow-hidden group-hover:h-12 group-hover:pt-4 transition-all duration-300 opacity-0 group-hover:opacity-100">
                           <button class="w-full py-2 bg-surface-900 dark:bg-white text-white dark:text-surface-900 rounded-xl font-bold text-sm shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all">
                             View Details
                           </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Categories Section (Hidden or Removed per new design, but keeping structure valid by closing previous section tag properly if needed, wait, I am replacing lines 74-102 which was Categories Section) -->
    <!-- Re-adding simplified Categories if user still wants it, or just removing it. User didn't explicitly say delete, but the new design takes space. I'll remove the old categories section for now to match the "I want it like this" strictness, effectively replacing it with the new content, or I can push it down. The prompt says "Refactor Stats Section... Implement Recommended Jobs". I will assume Categories can stay or go.
    Let's check the previous file content. Line 74 started Categories Section.
    I will COMMENT OUT Categories for now or just replace it since it wasn't in the new images. -->


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

    <!-- CTA Split Section -->
    <section class="py-24 px-6">
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        <!-- Candidate Card -->
        <div class="group relative overflow-hidden rounded-[2.5rem] p-10 bg-gradient-to-br from-emerald-900 to-emerald-950 text-white min-h-[400px] flex flex-col justify-between hover:scale-[1.01] transition-transform duration-500 shadow-2xl shadow-emerald-900/20">
            <!-- Background Decor -->
            <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            <div class="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px]"></div>
            
            <div class="relative z-10">
               <div class="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md mb-8 border border-white/10">
                 <Icon name="lucide:user" class="w-7 h-7 text-emerald-300" />
               </div>
               <h2 class="text-4xl font-bold mb-4 leading-tight">{{ $t('cta.candidate.title') }}</h2>
               <p class="text-emerald-100 text-lg opacity-90 max-w-sm">{{ $t('cta.candidate.subtitle') }}</p>
            </div>

            <div class="relative z-10 pt-12">
               <NuxtLink :to="localePath('/register')" class="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-950 font-bold rounded-xl hover:bg-emerald-50 transition-colors shadow-lg">
                 {{ $t('cta.candidate.button') }} <Icon name="lucide:arrow-right" class="w-5 h-5" />
               </NuxtLink>
               <div class="mt-6 flex items-center gap-2 text-sm text-emerald-200/80 font-medium">
                  <Icon name="lucide:shield-check" class="w-4 h-4" />
                  {{ $t('cta.candidate.benefit') }}
               </div>
            </div>
            
             <!-- Illustration -->
            <Icon name="lucide:file-text" class="absolute -bottom-12 -right-12 w-64 h-64 text-emerald-500/10 rotate-12 group-hover:rotate-6 transition-transform duration-700" />
        </div>

        <!-- Employer Card -->
        <div class="group relative overflow-hidden rounded-[2.5rem] p-10 bg-gradient-to-br from-primary-900 to-primary-950 text-white min-h-[400px] flex flex-col justify-between hover:scale-[1.01] transition-transform duration-500 shadow-2xl shadow-primary-900/20">
             <!-- Background Decor -->
            <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            <div class="absolute top-0 right-0 w-64 h-64 bg-primary-500/20 rounded-full blur-[80px]"></div>

            <div class="relative z-10">
               <div class="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md mb-8 border border-white/10">
                 <Icon name="lucide:building-2" class="w-7 h-7 text-primary-300" />
               </div>
               <h2 class="text-4xl font-bold mb-4 leading-tight">{{ $t('cta.employer.title') }}</h2>
               <p class="text-primary-100 text-lg opacity-90 max-w-sm">{{ $t('cta.employer.subtitle') }}</p>
            </div>

            <div class="relative z-10 pt-12">
               <NuxtLink :to="localePath('/employer/post-job')" class="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-950 font-bold rounded-xl hover:bg-primary-50 transition-colors shadow-lg">
                 {{ $t('cta.employer.button') }} <Icon name="lucide:arrow-right" class="w-5 h-5" />
               </NuxtLink>
               <div class="mt-6 flex items-center gap-2 text-sm text-primary-200/80 font-medium">
                  <Icon name="lucide:sparkles" class="w-4 h-4" />
                  {{ $t('cta.employer.benefit') }}
               </div>
            </div>

             <!-- Illustration -->
            <Icon name="lucide:search" class="absolute -bottom-12 -right-12 w-64 h-64 text-primary-500/10 -rotate-12 group-hover:-rotate-6 transition-transform duration-700" />
        </div>
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

const recommendedJobs = [
  {
    id: 1,
    company: 'SR Production',
    logo: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=100&auto=format&fit=crop',
    location: 'Bangkok - Wang Thonglang',
    title: 'Event Visual Operator',
    tags: [
        { key: 'fulltime', type: 'primary' },
        { key: 'new_grad', type: 'dark' }
    ],
    category: 'Marketing',
    positions: 5,
    salary: '15,000 - 35,000'
  },
  {
    id: 2,
    company: 'Hafele (Thailand)',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=100&auto=format&fit=crop',
    location: 'Bangkok - Phra Khanong',
    title: 'HR Compensation and Benefits',
    tags: [
        { key: 'internship', type: 'primary' },
        { key: 'online_interview', type: 'error' }
    ],
    category: 'HR',
    positions: 2,
    allowance: '6,000 - 8,000'
  },
  {
    id: 3,
    company: 'PPC09 Co., Ltd.',
    logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=100&auto=format&fit=crop',
    location: 'Chonburi - Bang Lamung',
    title: 'Office Maid',
    tags: [
        { key: 'fulltime', type: 'primary' }
    ],
    category: 'Maid/Gardener',
    positions: 1,
    salary: '11,000 - 12,000'
  },
  {
    id: 4,
    company: 'Cyber Defense',
    logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=100&auto=format&fit=crop',
    location: 'Bangkok - Suan Luang',
    title: 'Accounting Officer',
    tags: [
        { key: 'internship', type: 'primary' },
        { key: 'online_interview', type: 'error' }
    ],
    category: 'Accounting',
    positions: 1,
    allowance: '200'
  }
]

const categories = [
  { id: 'cafe', name: 'Cafe & Bistro', count: 120, icon: 'lucide:coffee', image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600&auto=format&fit=crop' },
  { id: 'restaurant', name: 'Restaurant', count: 85, icon: 'lucide:utensils', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop' },
  { id: 'retail', name: 'Retail & Shop', count: 64, icon: 'lucide:shopping-bag', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop' },
  { id: 'delivery', name: 'Delivery', count: 42, icon: 'lucide:bike', image: 'https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?q=80&w=600&auto=format&fit=crop' },
]
</script>
