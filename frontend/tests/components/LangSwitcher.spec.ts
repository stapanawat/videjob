import { describe, it, expect, vi } from 'vitest'
import { mountSuspended, mockNuxtImport } from '@nuxt/test-utils/runtime'
import LangSwitcher from '~/components/LangSwitcher.vue'

mockNuxtImport('useI18n', () => {
    return () => ({
        locale: { value: 'en' },
        locales: {
            value: [
                { code: 'en', name: 'English' },
                { code: 'th', name: 'Thai' }
            ]
        },
        setLocale: vi.fn()
    })
})

describe('LangSwitcher', () => {
    it('renders correctly', async () => {
        const component = await mountSuspended(LangSwitcher)
        expect(component.exists()).toBe(true)
        expect(component.text()).toContain('English')
    })
})
