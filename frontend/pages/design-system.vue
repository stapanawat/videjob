<template>
  <div class="min-h-screen pt-24 pb-12 px-6">
    <div class="max-w-7xl mx-auto space-y-16">
      <div class="text-center space-y-4">
        <h1 class="text-4xl font-bold text-surface-900 dark:text-white">Design System</h1>
        <p class="text-surface-500 dark:text-surface-400 max-w-2xl mx-auto">
          A reference guide for the UI components, colors, and typography used throughout PreJob.
        </p>
      </div>

      <!-- 1. Color Palette -->
      <section class="space-y-6">
        <h2 class="text-2xl font-bold text-surface-900 dark:text-white border-b border-surface-200 dark:border-surface-700 pb-2">Colors</h2>
        
        <div class="space-y-4">
          <h3 class="font-semibold text-surface-700 dark:text-surface-300">Primary (Brand)</h3>
          <div class="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-11 gap-4">
            <div v-for="shade in [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]" :key="shade" class="space-y-2 group">
              <div class="h-16 rounded-lg shadow-sm border border-surface-200 dark:border-surface-700 transition-transform group-hover:scale-105" :class="`bg-primary-${shade}`"></div>
              <div class="text-xs text-center font-mono text-surface-500 dark:text-surface-400 group-hover:text-primary-600 dark:group-hover:text-primary-400">{{ shade }}</div>
            </div>
          </div>
        </div>

        <div class="space-y-4">
          <h3 class="font-semibold text-surface-700 dark:text-surface-300">Surface (Neutral)</h3>
          <div class="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-11 gap-4">
            <div v-for="shade in [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]" :key="shade" class="space-y-2 group">
              <div class="h-16 rounded-lg shadow-sm border border-surface-200 dark:border-surface-700 transition-transform group-hover:scale-105" :class="`bg-surface-${shade}`"></div>
              <div class="text-xs text-center font-mono text-surface-500 dark:text-surface-400 group-hover:text-surface-900 dark:group-hover:text-surface-100">{{ shade }}</div>
            </div>
          </div>
        </div>
        
         <div class="space-y-4">
          <h3 class="font-semibold text-surface-700 dark:text-surface-300">Semantic</h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="space-y-2">
              <div class="h-12 rounded-lg bg-emerald-500 shadow-sm"></div>
              <div class="text-xs text-center font-mono text-surface-500 dark:text-surface-400">Success</div>
            </div>
            <div class="space-y-2">
              <div class="h-12 rounded-lg bg-amber-400 shadow-sm"></div>
              <div class="text-xs text-center font-mono text-surface-500 dark:text-surface-400">Warning</div>
            </div>
             <div class="space-y-2">
              <div class="h-12 rounded-lg bg-rose-500 shadow-sm"></div>
              <div class="text-xs text-center font-mono text-surface-500 dark:text-surface-400">Error</div>
            </div>
             <div class="space-y-2">
              <div class="h-12 rounded-lg bg-blue-500 shadow-sm"></div>
              <div class="text-xs text-center font-mono text-surface-500 dark:text-surface-400">Info</div>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. Typography -->
      <section class="space-y-6">
        <h2 class="text-2xl font-bold text-surface-900 dark:text-white border-b border-surface-200 dark:border-surface-700 pb-2">Typography</h2>
        <div class="space-y-8">
          <div class="grid md:grid-cols-4 gap-8 items-center border-b border-surface-100 dark:border-surface-800 pb-4">
            <span class="text-surface-400 font-mono text-sm">H1 / 4xl / Bold</span>
            <h1 class="col-span-3 text-4xl font-bold text-surface-900 dark:text-white">The quick brown fox jumps over the lazy dog.</h1>
          </div>
          <div class="grid md:grid-cols-4 gap-8 items-center border-b border-surface-100 dark:border-surface-800 pb-4">
            <span class="text-surface-400 font-mono text-sm">H2 / 3xl / Bold</span>
            <h2 class="col-span-3 text-3xl font-bold text-surface-900 dark:text-white">The quick brown fox jumps over the lazy dog.</h2>
          </div>
          <div class="grid md:grid-cols-4 gap-8 items-center border-b border-surface-100 dark:border-surface-800 pb-4">
            <span class="text-surface-400 font-mono text-sm">H3 / xl / Semibold</span>
            <h3 class="col-span-3 text-xl font-semibold text-surface-900 dark:text-white">The quick brown fox jumps over the lazy dog.</h3>
          </div>
          <div class="grid md:grid-cols-4 gap-8 items-center border-b border-surface-100 dark:border-surface-800 pb-4">
            <span class="text-surface-400 font-mono text-sm">Body / Base</span>
            <p class="col-span-3 text-base text-surface-600 dark:text-surface-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
           <div class="grid md:grid-cols-4 gap-8 items-center pb-4">
            <span class="text-surface-400 font-mono text-sm">Small / Caption</span>
            <p class="col-span-3 text-sm text-surface-500 dark:text-surface-400">
              Copyright © 2026 PreJob. All rights reserved.
            </p>
          </div>
        </div>
      </section>

      <!-- 3. Components -->
      <section class="space-y-6">
        <h2 class="text-2xl font-bold text-surface-900 dark:text-white border-b border-surface-200 dark:border-surface-700 pb-2">Components</h2>
        
        <!-- Buttons -->
        <div class="space-y-4">
          <h3 class="font-semibold text-surface-700 dark:text-surface-300">Buttons</h3>
          <div class="flex flex-wrap gap-4 items-center p-6 border border-surface-200 dark:border-surface-700 rounded-2xl bg-surface-50 dark:bg-surface-900">
            <button class="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl shadow-lg shadow-primary-500/20 active:scale-95 transition-all">
              Primary Button
            </button>
            <button class="px-6 py-3 bg-surface-100 dark:bg-surface-800 text-surface-900 dark:text-white font-semibold rounded-xl hover:bg-surface-200 dark:hover:bg-surface-700 transition-colors">
              Secondary Button
            </button>
            <button class="px-6 py-3 border border-surface-300 dark:border-surface-600 rounded-xl text-surface-700 dark:text-surface-300 font-medium hover:bg-surface-50 dark:hover:bg-surface-800 transition-colors">
              Outline Button
            </button>
            <button class="text-primary-600 dark:text-primary-400 font-medium hover:underline">
              Text Link
            </button>
            <button disabled class="px-6 py-3 bg-surface-200 dark:bg-surface-700 text-surface-400 dark:text-surface-500 font-bold rounded-xl cursor-not-allowed">
              Disabled
            </button>
          </div>
        </div>

         <!-- Inputs -->
        <div class="space-y-4">
          <h3 class="font-semibold text-surface-700 dark:text-surface-300">Form Inputs</h3>
          <div class="grid md:grid-cols-2 gap-6 p-6 border border-surface-200 dark:border-surface-700 rounded-2xl bg-surface-50 dark:bg-surface-900">
            <div class="space-y-1">
               <label class="text-sm font-medium text-surface-700 dark:text-surface-300">Default Input</label>
               <input type="text" placeholder="Type something..." class="w-full bg-white dark:bg-surface-800 border-surface-200 dark:border-surface-700 rounded-xl px-4 py-3 text-surface-900 dark:text-white focus:border-primary-500 focus:outline-none placeholder:text-surface-400 shadow-sm">
            </div>
            <div class="space-y-1">
               <label class="text-sm font-medium text-surface-700 dark:text-surface-300">With Icon</label>
               <div class="relative">
                  <Icon name="lucide:search" class="absolute left-3 top-1/2 -translate-y-1/2 text-surface-400 w-5 h-5" />
                  <input type="text" placeholder="Search..." class="w-full bg-white dark:bg-surface-800 border-surface-200 dark:border-surface-700 rounded-xl pl-10 pr-4 py-3 text-surface-900 dark:text-white focus:border-primary-500 focus:outline-none placeholder:text-surface-400 shadow-sm">
               </div>
            </div>
            <div class="space-y-1">
              <label class="text-sm font-medium text-surface-700 dark:text-surface-300">Select Box</label>
              <select class="w-full bg-white dark:bg-surface-800 border-surface-200 dark:border-surface-700 rounded-xl px-4 py-3 text-surface-900 dark:text-white focus:border-primary-500 focus:outline-none shadow-sm">
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>
             <div class="space-y-1">
              <label class="text-sm font-medium text-surface-700 dark:text-surface-300">Textarea</label>
              <textarea rows="1" class="w-full bg-white dark:bg-surface-800 border-surface-200 dark:border-surface-700 rounded-xl px-4 py-3 text-surface-900 dark:text-white focus:border-primary-500 focus:outline-none placeholder:text-surface-400 shadow-sm"></textarea>
            </div>
          </div>
        </div>

        <!-- Cards -->
         <div class="space-y-4">
          <h3 class="font-semibold text-surface-700 dark:text-surface-300">Cards</h3>
          <div class="grid md:grid-cols-2 gap-6">
             <div class="bg-white dark:bg-surface-800 p-6 rounded-2xl shadow-sm border border-surface-200 dark:border-surface-700">
                <h4 class="font-bold text-lg text-surface-900 dark:text-white mb-2">Simple Card</h4>
                <p class="text-surface-500 dark:text-surface-400">This is a standard card container used for various content blocks like jobs, reviews, or info panels.</p>
             </div>
             <div class="bg-gradient-to-br from-primary-600 to-primary-800 p-6 rounded-2xl shadow-lg text-white">
                <div class="flex items-center gap-2 mb-2">
                   <Icon name="lucide:star" class="w-5 h-5 fill-current text-white/80" />
                   <h4 class="font-bold text-lg">Featured Card</h4>
                </div>
                <p class="text-primary-100">Used for highlighting important information, premium features, or call-to-actions.</p>
             </div>
          </div>
        </div>

      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Design System - PreJob'
})
</script>
