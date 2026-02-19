<template>
  <div class="min-h-screen bg-surface-50 dark:bg-surface-950 bg-grid-pattern text-surface-900 dark:text-surface-100 font-sans selection:bg-primary-500/30 selection:text-primary-700 relative overflow-hidden">
    <!-- Decorative Background Blobs -->
    <div class="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
      <div class="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary-200/40 dark:bg-primary-900/20 rounded-full blur-3xl opacity-60"></div>
      <div class="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-accent-200/40 dark:bg-accent-600/10 rounded-full blur-3xl opacity-60"></div>
      <div class="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-emerald-100/40 dark:bg-emerald-900/10 rounded-full blur-3xl opacity-50"></div>
    </div>

    <NuxtRouteAnnouncer />

    <!-- Navbar -->
    <nav class="fixed top-0 inset-x-0 z-50 glass border-b border-surface-200/40 dark:border-surface-700/40 transition-all duration-300">
      <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <NuxtLink :to="localePath('/')" class="flex items-center gap-3 group">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center shadow-lg shadow-primary-500/20 group-hover:scale-105 transition-transform">
            <Icon name="lucide:briefcase" class="text-white w-6 h-6" />
          </div>
          <span class="text-xl font-bold tracking-tight text-surface-900 dark:text-white group-hover:text-primary-600 transition-colors">PreJob</span>
        </NuxtLink>
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
        <div class="flex items-center gap-4">
          <LangSwitcher />
          <div class="w-px h-6 bg-surface-200 dark:bg-surface-700 mx-2"></div>
          <button class="hidden md:block text-sm font-medium text-surface-600 dark:text-surface-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">{{ $t('nav.login') }}</button>
          <button class="px-5 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold transition-all shadow-lg shadow-primary-500/20 hover:shadow-primary-600/20 active:scale-95">
            {{ $t('nav.get_started') }}
          </button>
        </div>
      </div>
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
const localePath = useLocalePath()
const route = useRoute()

const navLinks = [
  { href: '/jobs', label: 'nav.jobs', route: true },
  { href: '/#features', label: 'nav.features', route: false },
  { href: '/#categories', label: 'nav.categories', route: false },
  { href: '/#how-it-works', label: 'nav.how_it_works', route: false },
]

const isActive = (href: string) => {
  if (href.startsWith('/#')) {
    return route.path === '/' && route.hash === href.substring(1)
  }
  return route.path.startsWith(href)
}
</script>
