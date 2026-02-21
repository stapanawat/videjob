<template>
  <div class="min-h-screen pt-24 pb-12 max-w-7xl mx-auto px-6">
      
      <!-- Header Section -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h1 class="text-3xl font-bold text-surface-900 dark:text-white mb-2">{{ $t('employer_manage.title', 'Manage Jobs') }}</h1>
          <p class="text-surface-600 dark:text-surface-400">{{ $t('employer_manage.subtitle', 'Track applicants and manage your active listings.') }}</p>
        </div>
      </div>

      <!-- Overview Cards -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div class="bg-white dark:bg-surface-800 p-5 rounded-2xl shadow-sm border border-surface-200 dark:border-surface-700 flex items-center justify-between">
          <div>
            <div class="text-surface-500 dark:text-surface-400 text-sm mb-1">{{ $t('employer_manage.total_jobs', 'Total Jobs') }}</div>
            <div class="text-2xl font-bold text-surface-900 dark:text-white">{{ jobs.length }}</div>
          </div>
          <div class="w-12 h-12 rounded-xl bg-surface-100 dark:bg-surface-700 flex items-center justify-center text-surface-600 dark:text-surface-300">
            <Icon name="lucide:briefcase" class="w-6 h-6" />
          </div>
        </div>
        <div class="bg-white dark:bg-surface-800 p-5 rounded-2xl shadow-sm border border-surface-200 dark:border-surface-700 flex items-center justify-between">
          <div>
            <div class="text-surface-500 dark:text-surface-400 text-sm mb-1">{{ $t('employer_manage.active_jobs', 'Active') }}</div>
            <div class="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{{ jobs.filter(j => j.status === 'active').length }}</div>
          </div>
          <div class="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
            <Icon name="lucide:check-circle-2" class="w-6 h-6" />
          </div>
        </div>
        <div class="bg-white dark:bg-surface-800 p-5 rounded-2xl shadow-sm border border-surface-200 dark:border-surface-700 flex items-center justify-between">
          <div>
            <div class="text-surface-500 dark:text-surface-400 text-sm mb-1">{{ $t('employer_manage.total_applicants', 'Total Applicants') }}</div>
            <div class="text-2xl font-bold text-primary-600 dark:text-primary-400">{{ totalApplicants }}</div>
          </div>
          <div class="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center text-primary-600 dark:text-primary-400">
            <Icon name="lucide:users" class="w-6 h-6" />
          </div>
        </div>
        <div class="bg-white dark:bg-surface-800 p-5 rounded-2xl shadow-sm border border-surface-200 dark:border-surface-700 flex items-center justify-between">
          <div>
            <div class="text-surface-500 dark:text-surface-400 text-sm mb-1">{{ $t('employer_manage.interviews', 'Interviews') }}</div>
            <div class="text-2xl font-bold text-amber-600 dark:text-amber-400">4</div>
          </div>
          <div class="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center text-amber-600 dark:text-amber-400">
            <Icon name="lucide:calendar-clock" class="w-6 h-6" />
          </div>
        </div>
      </div>

      <!-- Filters & Search -->
      <div class="bg-white dark:bg-surface-800 rounded-t-2xl border-x border-t border-surface-200 dark:border-surface-700 p-4 flex flex-col sm:flex-row gap-4 justify-between items-center sm:items-end">
        
        <!-- Search -->
        <div class="relative w-full sm:max-w-md">
          <Icon name="lucide:search" class="absolute left-3 top-1/2 -translate-y-1/2 text-surface-400 w-5 h-5" />
          <input type="text" v-model="searchQuery" :placeholder="$t('employer_manage.search', 'Search jobs...')" class="w-full bg-surface-50 dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-surface-900 dark:text-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-shadow">
        </div>

        <!-- Filter Dropdown -->
        <div class="flex items-center gap-3 w-full sm:w-auto">
          <div class="relative w-full sm:w-48 group">
            <select v-model="filterStatus" class="w-full appearance-none bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 text-surface-700 dark:text-surface-300 text-sm rounded-xl pl-4 pr-10 py-2.5 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none cursor-pointer">
              <option value="all">{{ $t('employer_manage.filter_all', 'All Statuses') }}</option>
              <option value="active">{{ $t('employer_manage.filter_active', 'Active') }}</option>
              <option value="closed">{{ $t('employer_manage.filter_closed', 'Closed') }}</option>
              <option value="draft">{{ $t('employer_manage.filter_draft', 'Draft') }}</option>
            </select>
            <Icon name="lucide:chevron-down" class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400 pointer-events-none group-hover:text-primary-500 transition-colors" />
          </div>
        </div>
      </div>

      <!-- View Tabs -->
      <div class="flex items-center gap-4 border-b border-surface-200 dark:border-surface-700 mb-6">
        <button @click="currentTab = 'jobs'" :class="['pb-3 px-2 text-sm font-bold border-b-2 transition-colors relative top-[1px]', currentTab === 'jobs' ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400' : 'border-transparent text-surface-500 hover:text-surface-700 dark:hover:text-surface-300']">
          <div class="flex items-center gap-2">
            <Icon name="lucide:list" class="w-4 h-4" />
            Job Listings
          </div>
        </button>
        <button @click="currentTab = 'schedule'" :class="['pb-3 px-2 text-sm font-bold border-b-2 transition-colors relative top-[1px]', currentTab === 'schedule' ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400' : 'border-transparent text-surface-500 hover:text-surface-700 dark:hover:text-surface-300']">
          <div class="flex items-center gap-2">
            <Icon name="lucide:calendar-clock" class="w-4 h-4" />
            Interview Schedule
            <span class="w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center text-[10px] ml-1">4</span>
          </div>
        </button>
      </div>

      <!-- TAB: JOBS TABLE -->
      <div v-if="currentTab === 'jobs'" class="bg-white dark:bg-surface-800 rounded-2xl border border-surface-200 dark:border-surface-700 overflow-x-auto shadow-sm">
        <table class="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr class="bg-surface-50 dark:bg-surface-900/50 border-b border-surface-200 dark:border-surface-700 text-xs uppercase tracking-wider text-surface-500 dark:text-surface-400">
              <th class="px-6 py-4 font-bold">{{ $t('employer_manage.th_job', 'Job Title') }}</th>
              <th class="px-6 py-4 font-bold">{{ $t('employer_manage.th_status', 'Status') }}</th>
              <th class="px-6 py-4 font-bold">{{ $t('employer_manage.th_applicants', 'Applicants') }}</th>
              <th class="px-6 py-4 font-bold">{{ $t('employer_manage.th_posted', 'Posted Date') }}</th>
              <th class="px-6 py-4 font-bold text-right">{{ $t('employer_manage.th_action', 'Actions') }}</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-surface-200 dark:divide-surface-700">
            
            <tr v-for="job in filteredJobs" :key="job.id" class="hover:bg-surface-50/50 dark:hover:bg-surface-700/30 transition-colors group">
              <!-- Job Info -->
              <td class="px-6 py-4">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-lg bg-surface-100 dark:bg-surface-700 flex items-center justify-center shrink-0">
                    <Icon :name="job.icon" class="w-5 h-5 text-surface-500 dark:text-surface-400" />
                  </div>
                  <div>
                    <h3 class="font-bold text-surface-900 dark:text-white">{{ job.title }}</h3>
                    <div class="text-xs text-surface-500 flex items-center gap-2 mt-0.5">
                      <span class="flex items-center gap-1"><Icon name="lucide:map-pin" class="w-3 h-3" /> {{ job.location }}</span>
                      <span>•</span>
                      <span>{{ job.type }}</span>
                    </div>
                  </div>
                </div>
              </td>
              
              <!-- Status Badge -->
              <td class="px-6 py-4">
                <span v-if="job.status === 'active'" class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-200 dark:border-emerald-800">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Active
                </span>
                <span v-else-if="job.status === 'closed'" class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-100 dark:bg-surface-700 text-surface-600 dark:text-surface-300 text-xs font-bold border border-surface-200 dark:border-surface-600">
                  <span class="w-1.5 h-1.5 rounded-full bg-surface-400"></span>
                  Closed
                </span>
                <span v-else class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 text-xs font-bold border border-amber-200 dark:border-amber-800">
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  Draft
                </span>
              </td>
              
              <!-- Pipeline Pipeline -->
              <td class="px-6 py-4">
                <div v-if="job.status !== 'draft'" class="flex items-center gap-4">
                  <div class="flex flex-col items-center cursor-help group/pip">
                    <span class="text-sm font-bold text-surface-900 dark:text-white">{{ job.pipeline.new }}</span>
                    <span class="text-[10px] text-surface-500 uppercase font-semibold">New</span>
                  </div>
                  <div class="h-4 w-px bg-surface-200 dark:bg-surface-700"></div>
                  <div class="flex flex-col items-center">
                    <span class="text-sm font-bold text-surface-900 dark:text-white">{{ job.pipeline.review }}</span>
                    <span class="text-[10px] text-surface-500 uppercase font-semibold">Review</span>
                  </div>
                  <div class="h-4 w-px bg-surface-200 dark:bg-surface-700"></div>
                  <div class="flex flex-col items-center">
                    <span class="text-sm font-bold text-primary-600 dark:text-primary-400">{{ job.pipeline.interview }}</span>
                    <span class="text-[10px] text-primary-600/70 dark:text-primary-400/70 uppercase font-semibold">Talk</span>
                  </div>
                </div>
                <div v-else class="text-surface-400 text-sm italic">
                  Not published
                </div>
              </td>
              
              <!-- Date -->
              <td class="px-6 py-4">
                <div class="text-sm font-medium text-surface-900 dark:text-white">{{ job.dateAdded }}</div>
                <div class="text-xs text-surface-500 mt-0.5" v-if="job.status === 'active'">Ends: {{ job.dateExpires }}</div>
              </td>
              
              <!-- Actions -->
              <td class="px-6 py-4 text-right">
                <div class="flex items-center justify-end gap-2">
                  <button v-if="job.status !== 'draft'" title="View Candidates" class="w-8 h-8 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors">
                    <Icon name="lucide:users" class="w-4 h-4" />
                  </button>
                  <button title="Edit" class="w-8 h-8 rounded-lg flex items-center justify-center text-surface-500 hover:bg-surface-100 dark:hover:bg-surface-700 hover:text-surface-900 dark:hover:text-white transition-colors">
                    <Icon name="lucide:pencil" class="w-4 h-4" />
                  </button>
                  <button title="More Options" class="w-8 h-8 rounded-lg flex items-center justify-center text-surface-500 hover:bg-surface-100 dark:hover:bg-surface-700 hover:text-surface-900 dark:hover:text-white transition-colors">
                    <Icon name="lucide:more-vertical" class="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>

            <!-- Empty State -->
            <tr v-if="filteredJobs.length === 0">
              <td colspan="5" class="px-6 py-12 text-center">
                <div class="w-16 h-16 bg-surface-100 dark:bg-surface-800 rounded-full flex items-center justify-center mx-auto mb-4 text-surface-400">
                  <Icon name="lucide:inbox" class="w-8 h-8" />
                </div>
                <h3 class="text-lg font-bold text-surface-900 dark:text-white mb-1">No jobs found</h3>
                <p class="text-surface-500 dark:text-surface-400 text-sm mb-4">Try adjusting your search or filter criteria.</p>
                <button @click="clearFilters" class="text-sm font-semibold text-primary-600 dark:text-primary-400 hover:underline">Clear Filters</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- TAB: INTERVIEW SCHEDULE (NEW DESIGN) -->
      <div v-else-if="currentTab === 'schedule'" class="space-y-6">
        
        <!-- KPIs Row -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div class="bg-white dark:bg-surface-800 p-6 rounded-2xl border border-surface-200 dark:border-surface-700 shadow-sm flex items-center justify-between">
              <div>
                 <div class="text-sm font-semibold text-surface-500 dark:text-surface-400 mb-1">Confirmed for Today</div>
                 <div class="flex items-end gap-2">
                    <span class="text-3xl font-black text-surface-900 dark:text-white leading-none">12</span>
                    <span class="text-sm font-bold text-emerald-500 mb-1">+20% vs yesterday</span>
                 </div>
              </div>
              <div class="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                 <Icon name="lucide:check-circle-2" class="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
           </div>
           
           <div class="bg-white dark:bg-surface-800 p-6 rounded-2xl border border-surface-200 dark:border-surface-700 shadow-sm flex items-center justify-between">
              <div>
                 <div class="text-sm font-semibold text-surface-500 dark:text-surface-400 mb-1">Pending Confirmation</div>
                 <div class="flex items-end gap-2">
                    <span class="text-3xl font-black text-surface-900 dark:text-white leading-none">5</span>
                    <span class="text-sm font-bold text-amber-500 mb-1">-2 from last hour</span>
                 </div>
              </div>
              <div class="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                 <Icon name="lucide:hourglass" class="w-5 h-5 text-amber-600 dark:text-amber-400" />
              </div>
           </div>
           
           <div class="bg-white dark:bg-surface-800 p-6 rounded-2xl border border-surface-200 dark:border-surface-700 shadow-sm flex items-center justify-between">
              <div>
                 <div class="text-sm font-semibold text-surface-500 dark:text-surface-400 mb-1">Needs Rescheduling</div>
                 <div class="flex items-end gap-2">
                    <span class="text-3xl font-black text-surface-900 dark:text-white leading-none">2</span>
                    <span class="text-sm font-bold text-rose-500 mb-1">Urgent actions</span>
                 </div>
              </div>
              <div class="w-10 h-10 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center">
                 <Icon name="lucide:calendar-x" class="w-5 h-5 text-rose-600 dark:text-rose-400" />
              </div>
           </div>
        </div>

        <!-- Main Content Area: Calendar Sidebar + Appointments List -->
        <div class="flex flex-col lg:flex-row gap-6">
           
           <!-- Left Sidebar (Calendar) -->
           <div class="w-full lg:w-80 flex-shrink-0 space-y-6">
              <!-- Calendar Widget -->
              <div class="bg-white dark:bg-surface-800 p-6 rounded-2xl border border-surface-200 dark:border-surface-700 shadow-sm">
                 <div class="flex items-center justify-between mb-4">
                    <h3 class="text-lg font-bold text-surface-900 dark:text-white">Calendar</h3>
                    <div class="flex items-center gap-1 text-surface-400">
                       <button class="p-1 hover:bg-surface-100 dark:hover:bg-surface-700 rounded-md transition-colors"><Icon name="lucide:chevron-left" class="w-5 h-5" /></button>
                       <button class="p-1 hover:bg-surface-100 dark:hover:bg-surface-700 rounded-md transition-colors"><Icon name="lucide:chevron-right" class="w-5 h-5" /></button>
                    </div>
                 </div>
                 
                 <div class="text-center font-bold text-surface-900 dark:text-white mb-4">October 2023</div>
                 
                 <div class="grid grid-cols-7 gap-1 text-center text-xs font-bold text-surface-400 mb-2">
                    <div>SU</div><div>MO</div><div>TU</div><div>WE</div><div>TH</div><div>FR</div><div>SA</div>
                 </div>
                 
                 <div class="grid grid-cols-7 gap-1 text-center text-sm font-medium">
                    <!-- Placeholder days -->
                    <div class="p-2 text-surface-300 dark:text-surface-600"></div>
                    <div class="p-2 text-surface-300 dark:text-surface-600"></div>
                    <div class="p-2 text-surface-300 dark:text-surface-600"></div>
                    <div class="p-2 hover:bg-surface-50 dark:hover:bg-surface-700 rounded-lg cursor-pointer transition-colors text-surface-700 dark:text-surface-300">1</div>
                    <div class="p-2 hover:bg-surface-50 dark:hover:bg-surface-700 rounded-lg cursor-pointer transition-colors text-surface-700 dark:text-surface-300">2</div>
                    <div class="p-2 hover:bg-surface-50 dark:hover:bg-surface-700 rounded-lg cursor-pointer transition-colors text-surface-700 dark:text-surface-300 relative group">
                       3
                       <div class="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-surface-300 group-hover:bg-surface-400"></div>
                    </div>
                    <div class="p-2 hover:bg-surface-50 dark:hover:bg-surface-700 rounded-lg cursor-pointer transition-colors text-surface-700 dark:text-surface-300 relative group">
                       4
                       <div class="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-surface-300 group-hover:bg-surface-400"></div>
                    </div>
                    
                    <div class="p-2 bg-primary-600 text-white font-bold rounded-lg cursor-pointer shadow-md shadow-primary-500/20 relative">
                       5
                       <div class="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white"></div>
                    </div>
                    <div class="p-2 hover:bg-surface-50 dark:hover:bg-surface-700 rounded-lg cursor-pointer transition-colors text-surface-700 dark:text-surface-300 relative group">
                       6
                       <div class="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary-500"></div>
                    </div>
                    <div class="p-2 hover:bg-surface-50 dark:hover:bg-surface-700 rounded-lg cursor-pointer transition-colors text-surface-700 dark:text-surface-300">7</div>
                    <div class="p-2 hover:bg-surface-50 dark:hover:bg-surface-700 rounded-lg cursor-pointer transition-colors text-surface-700 dark:text-surface-300">8</div>
                    <div class="p-2 hover:bg-surface-50 dark:hover:bg-surface-700 rounded-lg cursor-pointer transition-colors text-surface-700 dark:text-surface-300 relative group">
                       9
                       <div class="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber-500"></div>
                    </div>
                    <div class="p-2 hover:bg-surface-50 dark:hover:bg-surface-700 rounded-lg cursor-pointer transition-colors text-surface-700 dark:text-surface-300">10</div>
                    <div class="p-2 hover:bg-surface-50 dark:hover:bg-surface-700 rounded-lg cursor-pointer transition-colors text-surface-700 dark:text-surface-300">11</div>
                    
                    <div class="p-2 hover:bg-surface-50 dark:hover:bg-surface-700 rounded-lg cursor-pointer transition-colors text-surface-700 dark:text-surface-300">12</div>
                    <div class="p-2 hover:bg-surface-50 dark:hover:bg-surface-700 rounded-lg cursor-pointer transition-colors text-surface-700 dark:text-surface-300">13</div>
                    <div class="p-2 hover:bg-surface-50 dark:hover:bg-surface-700 rounded-lg cursor-pointer transition-colors text-surface-700 dark:text-surface-300 relative group">
                       14
                       <div class="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-rose-500"></div>
                    </div>
                    <div class="p-2 hover:bg-surface-50 dark:hover:bg-surface-700 rounded-lg cursor-pointer transition-colors text-surface-700 dark:text-surface-300">15</div>
                    <div class="p-2 hover:bg-surface-50 dark:hover:bg-surface-700 rounded-lg cursor-pointer transition-colors text-surface-700 dark:text-surface-300">16</div>
                 </div>
              </div>

              <!-- Info Box (Schedule Health) -->
              <div class="bg-primary-50 dark:bg-primary-900/10 p-6 rounded-2xl border border-primary-100 dark:border-primary-900/20">
                 <h4 class="flex items-center gap-2 font-bold text-primary-700 dark:text-primary-400 mb-2">
                    <Icon name="lucide:info" class="w-5 h-5 fill-current text-white dark:text-surface-900" /> 
                    Schedule Health
                 </h4>
                 <p class="text-sm text-primary-900 dark:text-primary-200/70 leading-relaxed">
                    92% of your interviews this week are confirmed. You're doing great!
                 </p>
              </div>
           </div>
           
           <!-- Right Content (Appointments Feed) -->
           <div class="flex-1 space-y-4">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                 <h2 class="text-xl font-bold text-surface-900 dark:text-white">Upcoming Appointments</h2>
                 
                 <div class="flex items-center gap-3 w-full sm:w-auto">
                    <button class="flex-1 sm:flex-none justify-center px-4 py-2 bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-700 text-surface-700 dark:text-surface-300 font-bold rounded-xl shadow-sm text-sm flex items-center gap-2 transition-all shrink-0">
                       <Icon name="lucide:filter" class="w-4 h-4" /> Filter
                    </button>
                    <button class="flex-1 sm:flex-none justify-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl shadow-sm shadow-primary-500/20 active:scale-95 text-sm flex items-center gap-2 transition-all shrink-0">
                       <Icon name="lucide:plus" class="w-4 h-4" /> Schedule
                    </button>
                 </div>
              </div>

              <!-- Appointment Card: Confirmed -->
              <div class="bg-white dark:bg-surface-800 p-4 sm:p-5 rounded-2xl border border-surface-200 dark:border-surface-700 shadow-sm flex flex-col gap-4 sm:gap-5">
                 <div class="flex items-start sm:items-center gap-3 sm:gap-4">
                    <img src="https://ui-avatars.com/api/?name=Alex+Rivera&background=FDBA74&color=78350F" alt="" class="w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-sm object-cover shrink-0">
                    <div class="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-4 w-full">
                       <div>
                          <h3 class="text-base sm:text-lg font-bold text-surface-900 dark:text-white leading-tight">Alex Rivera</h3>
                          <p class="text-xs sm:text-sm text-surface-500">Senior Product Designer</p>
                       </div>
                       <div>
                          <div class="flex items-center gap-2 text-surface-900 dark:text-white font-bold text-sm sm:text-base sm:mb-1">
                             <Icon name="lucide:calendar" class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-surface-400" />
                             Oct 5, 2023
                          </div>
                          <p class="text-xs sm:text-sm text-surface-500 ml-5 sm:ml-6">10:00 AM - 11:00 AM</p>
                       </div>
                    </div>
                 </div>

                 <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-surface-100 dark:border-surface-700 pt-4">
                    <div class="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
                       <div class="flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap">
                          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Confirmed
                       </div>
                       <div class="flex items-center gap-1.5 text-xs font-semibold text-surface-500">
                          <Icon name="lucide:bell" class="w-3.5 h-3.5 fill-primary-500 text-primary-500" /> Reminder Sent
                       </div>
                    </div>
                    
                    <div class="flex items-center gap-2 w-full sm:w-auto justify-end">
                       <button class="w-9 h-9 sm:w-10 sm:h-10 rounded-full hover:bg-surface-100 dark:hover:bg-surface-700 text-surface-400 hover:text-surface-700 dark:hover:text-surface-300 flex items-center justify-center transition-colors pb-1 shrink-0">
                          <Icon name="lucide:calendar-clock" class="w-4 h-4 sm:w-5 sm:h-5" />
                       </button>
                       <button class="w-9 h-9 sm:w-10 sm:h-10 rounded-full hover:bg-surface-100 dark:hover:bg-surface-700 text-surface-400 hover:text-rose-600 flex items-center justify-center transition-colors pb-1 shrink-0">
                          <Icon name="lucide:x-circle" class="w-4 h-4 sm:w-5 sm:h-5" />
                       </button>
                       <button class="flex-1 sm:flex-none justify-center px-4 py-2 sm:px-5 sm:py-2.5 bg-primary-50 dark:bg-primary-900/20 hover:bg-primary-100 dark:hover:bg-primary-900/40 text-primary-700 dark:text-primary-400 font-bold text-sm rounded-xl transition-colors shrink-0">
                          Join Call
                       </button>
                    </div>
                 </div>
              </div>

              <!-- Appointment Card: Pending Confirmation -->
              <div class="bg-white dark:bg-surface-800 p-4 sm:p-5 rounded-2xl border border-surface-200 dark:border-surface-700 shadow-sm flex flex-col gap-4 sm:gap-5">
                 <div class="flex items-start sm:items-center gap-3 sm:gap-4">
                    <img src="https://ui-avatars.com/api/?name=Jordan+Smith&background=86EFAC&color=14532D" alt="" class="w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-sm object-cover shrink-0">
                    <div class="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-4 w-full">
                       <div>
                          <h3 class="text-base sm:text-lg font-bold text-surface-900 dark:text-white leading-tight">Jordan Smith</h3>
                          <p class="text-xs sm:text-sm text-surface-500">Backend Engineer</p>
                       </div>
                       <div>
                          <div class="flex items-center gap-2 text-surface-900 dark:text-white font-bold text-sm sm:text-base sm:mb-1">
                             <Icon name="lucide:calendar" class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-surface-400" />
                             Oct 5, 2023
                          </div>
                          <p class="text-xs sm:text-sm text-surface-500 ml-5 sm:ml-6">02:30 PM - 03:30 PM</p>
                       </div>
                    </div>
                 </div>

                 <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-surface-100 dark:border-surface-700 pt-4">
                    <div class="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
                       <div class="flex items-center gap-2 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-500 border border-amber-200/50 dark:border-amber-800/50 px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap">
                          <span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span> Pending Confirmation
                       </div>
                       <div class="flex items-center gap-1.5 text-xs font-semibold text-surface-400">
                          <Icon name="lucide:hourglass" class="w-3.5 h-3.5" /> Waiting Line Reply
                       </div>
                    </div>
                    
                    <div class="flex items-center gap-2 w-full sm:w-auto justify-end">
                       <button class="w-9 h-9 sm:w-10 sm:h-10 rounded-full hover:bg-surface-100 dark:hover:bg-surface-700 text-surface-400 hover:text-surface-700 dark:hover:text-surface-300 flex items-center justify-center transition-colors pb-1 shrink-0">
                          <Icon name="lucide:calendar-clock" class="w-4 h-4 sm:w-5 sm:h-5" />
                       </button>
                       <button class="w-9 h-9 sm:w-10 sm:h-10 rounded-full hover:bg-surface-100 dark:hover:bg-surface-700 text-surface-400 hover:text-rose-600 flex items-center justify-center transition-colors pb-1 shrink-0">
                          <Icon name="lucide:x-circle" class="w-4 h-4 sm:w-5 sm:h-5" />
                       </button>
                       <button class="flex-1 sm:flex-none justify-center px-4 py-2 sm:px-5 sm:py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-bold text-sm rounded-xl shadow-md shadow-primary-500/20 active:scale-95 transition-all shrink-0">
                          Nudge Candidate
                       </button>
                    </div>
                 </div>
              </div>

              <!-- Appointment Card: Needs Rescheduling -->
              <div class="bg-white dark:bg-surface-800 p-4 sm:p-5 rounded-2xl border border-surface-200 dark:border-surface-700 shadow-sm flex flex-col gap-4 sm:gap-5">
                 <div class="flex items-start sm:items-center gap-3 sm:gap-4">
                    <img src="https://ui-avatars.com/api/?name=David+Chen&background=93C5FD&color=1E3A8A" alt="" class="w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-sm object-cover shrink-0">
                    <div class="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-4 w-full">
                       <div>
                          <h3 class="text-base sm:text-lg font-bold text-surface-900 dark:text-white leading-tight">David Chen</h3>
                          <p class="text-xs sm:text-sm text-surface-500">Marketing Lead</p>
                       </div>
                       <div>
                          <div class="flex items-center gap-2 text-surface-900 dark:text-white font-bold text-sm sm:text-base sm:mb-1">
                             <Icon name="lucide:calendar" class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-surface-400" />
                             Oct 6, 2023
                          </div>
                          <p class="text-xs sm:text-sm text-surface-500 ml-5 sm:ml-6">09:00 AM - 10:00 AM</p>
                       </div>
                    </div>
                 </div>

                 <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-surface-100 dark:border-surface-700 pt-4">
                    <div class="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
                       <div class="flex items-center gap-2 bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap">
                          <Icon name="lucide:alert-triangle" class="w-3 h-3 fill-rose-500 text-white dark:text-surface-900" /> Needs Rescheduling
                       </div>
                       <div class="flex items-center gap-1.5 text-xs font-semibold text-surface-500">
                          <Icon name="lucide:mail-warning" class="w-3.5 h-3.5 fill-rose-500/20 text-rose-500" /> Email Alert
                       </div>
                    </div>
                    
                    <div class="flex items-center gap-2 w-full sm:w-auto justify-end">
                       <button class="flex-1 sm:flex-none justify-center px-4 py-2 sm:px-5 sm:py-2.5 bg-primary-50 dark:bg-primary-900/20 hover:bg-primary-100 dark:hover:bg-primary-900/40 text-primary-700 dark:text-primary-400 font-bold text-sm rounded-xl transition-colors shrink-0">
                          Reschedule
                       </button>
                    </div>
                 </div>
              </div>
              
              <!-- Appointment Card: Cancelled -->
              <div class="bg-surface-50 dark:bg-surface-900/50 p-4 sm:p-5 rounded-2xl border border-surface-200 dark:border-surface-800 shadow-sm flex flex-col gap-4 sm:gap-5 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                 <div class="flex items-start sm:items-center gap-3 sm:gap-4">
                    <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-surface-200 dark:bg-surface-700 flex items-center justify-center text-surface-500 font-bold shrink-0">
                       MH
                    </div>
                    <div class="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-4 w-full">
                       <div>
                          <h3 class="text-base sm:text-lg font-bold text-surface-900 dark:text-white leading-tight">Maya Hoshino</h3>
                          <p class="text-xs sm:text-sm text-surface-500">Recruitment Assistant</p>
                       </div>
                       <div>
                          <div class="flex items-center gap-2 text-surface-400 font-bold text-sm sm:text-base sm:mb-1 line-through">
                             <Icon name="lucide:calendar" class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-surface-400" />
                             Oct 6, 2023
                          </div>
                       </div>
                    </div>
                 </div>

                 <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-surface-100 dark:border-surface-700 pt-4">
                    <div class="flex items-center gap-2 bg-surface-100 dark:bg-surface-800 text-surface-500 dark:text-surface-400 px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap">
                       Cancelled by candidate
                    </div>
                    
                    <div class="flex items-center gap-2 w-full sm:w-auto justify-end">
                       <button class="flex-1 sm:flex-none justify-center px-4 py-2 sm:px-5 sm:py-2.5 bg-surface-100 dark:bg-surface-800 hover:bg-surface-200 dark:hover:bg-surface-700 text-surface-700 dark:text-surface-300 font-bold text-sm rounded-xl transition-colors shrink-0">
                          View Details
                       </button>
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
  title: 'Manage Jobs - PreJob Employer'
})

// --- MOCK DATA ---
const jobs = ref([
  {
    id: 1,
    title: 'Senior Product Designer',
    location: 'Bangkok / Remote',
    type: 'Full-time',
    status: 'active',
    icon: 'lucide:figma',
    dateAdded: 'Oct 24, 2026',
    dateExpires: 'Nov 24, 2026',
    pipeline: { new: 12, review: 5, interview: 2 }
  },
  {
    id: 2,
    title: 'Barista (Part-time)',
    location: 'Siam Branch',
    type: 'Part-time',
    status: 'active',
    icon: 'lucide:coffee',
    dateAdded: 'Oct 20, 2026',
    dateExpires: 'Nov 20, 2026',
    pipeline: { new: 28, review: 10, interview: 4 }
  },
  {
    id: 3,
    title: 'Marketing Specialist',
    location: 'Bangkok',
    type: 'Contract',
    status: 'draft',
    icon: 'lucide:megaphone',
    dateAdded: 'Oct 15, 2026',
    dateExpires: '-',
    pipeline: { new: 0, review: 0, interview: 0 }
  },
  {
    id: 4,
    title: 'Customer Service Representative',
    location: 'Remote',
    type: 'Full-time',
    status: 'closed',
    icon: 'lucide:headset',
    dateAdded: 'Sep 01, 2026',
    dateExpires: 'Oct 01, 2026',
    pipeline: { new: 45, review: 12, interview: 6 }
  }
])

// --- LOGIC & STATE ---
const searchQuery = ref('')
const filterStatus = ref('all')
const currentTab = ref('jobs') // 'jobs' | 'schedule'
const scheduleView = ref('upcoming') // 'upcoming' | 'past'

// --- INTERVIEWS DATA ---
const interviews = ref([
  {
    id: 101,
    candidateName: 'Somsak Jaidee',
    candidateId: 1,
    jobTitle: 'Senior Product Designer',
    month: 'Nov',
    day: '25',
    time: '14:00',
    duration: '45 mins',
    type: 'Online Video Call',
    status: 'confirmed'
  },
  {
    id: 102,
    candidateName: 'Maria Korn',
    candidateId: 2,
    jobTitle: 'Barista (Part-time)',
    month: 'Nov',
    day: '26',
    time: '10:30',
    duration: '30 mins',
    type: 'In-person at Siam Branch',
    status: 'pending'
  },
  {
    id: 103,
    candidateName: 'John Doe',
    candidateId: 3,
    jobTitle: 'Customer Service Representative',
    month: 'Nov',
    day: '28',
    time: '15:00',
    duration: '60 mins',
    type: 'Online Video Call',
    status: 'declined'
  },
  {
    id: 104,
    candidateName: 'Ken Taro',
    candidateId: 4,
    jobTitle: 'Senior Product Designer',
    month: 'Dec',
    day: '02',
    time: '11:00',
    duration: '45 mins',
    type: 'Online Video Call',
    status: 'confirmed'
  }
])

const filteredJobs = computed(() => {
  let result = jobs.value

  if (filterStatus.value !== 'all') {
    result = result.filter(j => j.status === filterStatus.value)
  }

  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase()
    result = result.filter(j => 
      j.title.toLowerCase().includes(q) || 
      j.location.toLowerCase().includes(q)
    )
  }

  return result
})

const totalApplicants = computed(() => {
  return jobs.value.reduce((total, job) => total + job.pipeline.new + job.pipeline.review + job.pipeline.interview, 0)
})

const clearFilters = () => {
  searchQuery.value = ''
  filterStatus.value = 'all'
}

</script>
