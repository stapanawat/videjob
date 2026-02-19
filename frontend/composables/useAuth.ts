interface User {
    name: string
    email: string
    avatar?: string
}

export const useAuth = () => {
    const user = useState<User | null>('user', () => null)

    const login = (userData: User) => {
        user.value = userData
    }

    const logout = () => {
        user.value = null
        const router = useRouter()
        router.push('/')
    }

    const isAuthenticated = computed(() => !!user.value)

    return {
        user,
        login,
        logout,
        isAuthenticated
    }
}
