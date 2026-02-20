<template>
  <div class="min-h-screen bg-surface-50 dark:bg-surface-950 bg-grid-pattern text-surface-900 dark:text-surface-100 font-sans selection:bg-primary-500/30 selection:text-primary-700 relative overflow-hidden">
    <!-- Decorative Background - Sophisticated Ambient Glow -->
    <div class="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
      <div class="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-primary-900/10 dark:bg-primary-900/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen opacity-60 animate-pulse-slow"></div>
      <div class="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-accent-400/10 dark:bg-accent-900/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen opacity-50"></div>
      <div class="absolute bottom-[-20%] left-[10%] w-[900px] h-[900px] bg-indigo-200/20 dark:bg-indigo-950/30 rounded-full blur-[130px] opacity-40"></div>
      <!-- Noise Texture Overlay -->
      <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
    </div>

    <NuxtRouteAnnouncer />

    <!-- Navbar - Premium Glass -->
    <nav class="fixed top-0 inset-x-0 z-50 bg-white/70 dark:bg-surface-900/70 backdrop-blur-xl border-b border-white/20 dark:border-white/5 transition-all duration-300 supports-[backdrop-filter]:bg-white/60">
      <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <NuxtLink :to="localePath('/')" class="flex items-center gap-3 group z-50 relative">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center shadow-lg shadow-primary-900/20 group-hover:scale-105 transition-transform duration-300 ring-1 ring-white/20">
            <Icon name="lucide:briefcase" class="text-white w-5 h-5" />
          </div>
          <span class="text-xl font-bold tracking-tight text-surface-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors">PreJob</span>
        </NuxtLink>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-8">
          <template v-for="link in navLinks" :key="link.href">
            <NuxtLink v-if="link.route" :to="localePath(link.href)"
              class="relative text-sm font-medium py-1 transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-primary-500 after:transition-transform after:duration-300 after:origin-center"
              :class="isActive(link.href)
                ? 'text-primary-600 dark:text-primary-400 after:scale-x-100'
                : 'text-surface-600 dark:text-surface-300 hover:text-primary-600 dark:hover:text-primary-400 after:scale-x-0 hover:after:scale-x-100'"
            >{{ $t(link.label) }}</NuxtLink>
            <a v-else :href="link.href"
              class="relative text-sm font-medium py-1 transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-primary-500 after:transition-transform after:duration-300 after:origin-center"
              :class="isActive(link.href)
                ? 'text-primary-600 dark:text-primary-400 after:scale-x-100'
                : 'text-surface-600 dark:text-surface-300 hover:text-primary-600 dark:hover:text-primary-400 after:scale-x-0 hover:after:scale-x-100'"
            >{{ $t(link.label) }}</a>
          </template>
        </div>

        <!-- Desktop Actions -->
        <div class="hidden md:flex items-center gap-4">
          <LangSwitcher />
          <div class="w-px h-6 bg-surface-200 dark:bg-surface-700 mx-2"></div>
          
          <template v-if="isAuthenticated">
             <NuxtLink :to="localePath('/employer/post-job')" class="px-5 py-2.5 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white text-sm font-bold rounded-xl shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40 active:scale-95 transition-all flex items-center gap-2">
              <Icon name="lucide:plus" class="w-4 h-4" />
              {{ $t('nav.post_job') }}
            </NuxtLink>
            <div class="relative group">
              <button class="flex items-center gap-2 pl-2 pr-1 py-1 rounded-full border border-surface-200 dark:border-surface-700 hover:border-primary-500 transition-colors">
                <img :src="user?.avatar || 'https://ui-avatars.com/api/?name=' + user?.name" alt="User" class="w-8 h-8 rounded-full bg-surface-100" />
                <Icon name="lucide:chevron-down" class="w-4 h-4 text-surface-400" />
              </button>
              
              <!-- Dropdown -->
              <div class="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-surface-800 rounded-xl shadow-xl border border-surface-200 dark:border-surface-700 py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform origin-top-right">
                <div class="px-4 py-2 border-b border-surface-100 dark:border-surface-700">
                  <div class="text-sm font-semibold text-surface-900 dark:text-white truncate">{{ user?.name }}</div>
                  <div class="text-xs text-surface-500 dark:text-surface-400 truncate">{{ user?.email }}</div>
                </div>
                <NuxtLink :to="localePath('/employer/dashboard')" class="block px-4 py-2 text-sm text-surface-700 dark:text-surface-200 hover:bg-surface-50 dark:hover:bg-surface-700">{{ $t('nav.dashboard') }}</NuxtLink>
                <button @click="logout" class="w-full text-left px-4 py-2 text-sm text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/20">{{ $t('nav.sign_out') }}</button>
              </div>
            </div>
          </template>

          <template v-else>
            <NuxtLink :to="localePath('/login')" class="text-sm font-medium text-surface-600 dark:text-surface-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">{{ $t('nav.login') }}</NuxtLink>
            <NuxtLink :to="localePath('/register')" class="px-5 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold transition-all shadow-lg shadow-primary-500/20 hover:shadow-primary-600/20 active:scale-95">
              {{ $t('nav.get_started') }}
            </NuxtLink>
          </template>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden z-50 p-2 text-surface-600 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-800 rounded-lg transition-colors">
          <Icon :name="mobileMenuOpen ? 'lucide:x' : 'lucide:menu'" class="w-6 h-6" />
        </button>
      </div>

      <!-- Mobile Menu Drawer -->
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div v-show="mobileMenuOpen" class="md:hidden absolute top-0 left-0 w-full bg-white dark:bg-surface-900 shadow-xl border-b border-surface-200 dark:border-surface-700 pt-20 pb-6 px-6 flex flex-col gap-4">
          <template v-for="link in navLinks" :key="link.href">
            <NuxtLink v-if="link.route" :to="localePath(link.href)"
              class="text-lg font-medium py-2 border-b border-surface-100 dark:border-surface-800"
              :class="isActive(link.href) ? 'text-primary-600 dark:text-primary-400' : 'text-surface-600 dark:text-surface-300'"
              @click="mobileMenuOpen = false"
            >{{ $t(link.label) }}</NuxtLink>
            <a v-else :href="link.href"
              class="text-lg font-medium py-2 border-b border-surface-100 dark:border-surface-800"
              :class="isActive(link.href) ? 'text-primary-600 dark:text-primary-400' : 'text-surface-600 dark:text-surface-300'"
              @click="mobileMenuOpen = false"
            >{{ $t(link.label) }}</a>
          </template>
          
          <div class="flex flex-col gap-4 mt-4">
            <div class="flex items-center justify-between">
              <span class="text-surface-500 dark:text-surface-400 text-sm">{{ $t('nav.language') }}</span>
              <LangSwitcher />
            </div>
            <template v-if="isAuthenticated">
               <!-- User Info -->
               <div class="flex items-center gap-3 py-2 px-3 bg-surface-50 dark:bg-surface-800 rounded-xl border border-surface-100 dark:border-surface-700">
                 <img :src="user?.avatar || 'https://ui-avatars.com/api/?name=' + user?.name" alt="User" class="w-10 h-10 rounded-full bg-surface-200" />
                 <div class="overflow-hidden">
                   <div class="font-semibold text-surface-900 dark:text-white truncate">{{ user?.name }}</div>
                   <div class="text-xs text-surface-500 dark:text-surface-400 truncate">{{ user?.email }}</div>
                 </div>
               </div>

               <NuxtLink :to="localePath('/employer/post-job')" @click="mobileMenuOpen = false" class="w-full py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold rounded-xl shadow-lg shadow-primary-500/20 text-center flex items-center justify-center gap-2">
                 <Icon name="lucide:plus" class="w-4 h-4" /> Post a Job
               </NuxtLink>
               
               <NuxtLink :to="localePath('/employer/dashboard')" @click="mobileMenuOpen = false" class="w-full py-3 text-center font-medium text-surface-600 dark:text-surface-300 bg-surface-100 dark:bg-surface-800 rounded-xl border border-surface-200 dark:border-surface-700">
                 Dashboard
               </NuxtLink>

               <button @click="handleLogout" class="w-full py-3 text-center font-medium text-rose-600 bg-rose-50 dark:bg-rose-900/10 rounded-xl border border-rose-100 dark:border-rose-900/20">
                 Sign Out
               </button>
            </template>

            <template v-else>
              <NuxtLink :to="localePath('/login')" class="w-full py-3 text-center font-medium text-surface-600 dark:text-surface-300 bg-surface-100 dark:bg-surface-800 rounded-xl hover:bg-surface-200 dark:hover:bg-surface-700 transition-colors block">
                {{ $t('nav.login') }}
              </NuxtLink>
               <NuxtLink :to="localePath('/register')" class="w-full py-3 text-center font-bold text-white bg-primary-600 rounded-xl shadow-lg shadow-primary-500/20 hover:bg-primary-700 transition-colors block">
                {{ $t('nav.get_started') }}
              </NuxtLink>
            </template>
          </div>
        </div>
      </Transition>
    </nav>

    <!-- Page Content -->
    <slot />
    
    <ScrollToTop />

    <!-- Footer -->
    <footer class="border-t border-surface-200 dark:border-surface-800 py-12 bg-surface-50 dark:bg-surface-950">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-center gap-6">
          <div class="flex items-center gap-3">
             <div class="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center">
              <Icon name="lucide:briefcase" class="text-white w-4 h-4" />
            </div>
            <span class="font-semibold text-lg tracking-tight text-surface-900 dark:text-white">PreJob</span>
          </div>
          <p class="text-sm text-surface-500 dark:text-surface-400">&copy; {{ new Date().getFullYear() }} PreJob. {{ $t('footer.rights') }}</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Mobile Menu Logic
const mobileMenuOpen = ref(false)

const { user, login, logout, isAuthenticated } = useAuth()
const localePath = useLocalePath()
const route = useRoute()

const navLinks = [
  { href: '/', label: 'nav.home', route: true },
  { href: '/jobs', label: 'nav.jobs', route: true },
  { href: '/contact', label: 'nav.contact', route: true },
]

const isActive = (href: string) => {
  if (href.startsWith('/#')) {
    return route.path === '/' && route.hash === href.substring(1)
  }
  if (href === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(href)
}

// Close menu when route changes
watch(() => route.fullPath, () => {
  mobileMenuOpen.value = false
})

const handleLogout = () => {
  logout()
  mobileMenuOpen.value = false
}
</script>
