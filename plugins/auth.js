export default defineNuxtPlugin(async (nuxtApp) => {
    const {authUser} = useAuth();
    const {public: {apiBase}} = useRuntimeConfig();

    const headers = useRequestHeaders(['cookie'])

    try {
        const data = await $fetch(`${apiBase}/api/me`, {
            credentials: 'include',
            headers: {...headers, 'Accept': 'application/json', 'Referer': 'http://localhost:3000'}
        })

        authUser.value = data.user;
    } catch (error) {
        authUser.value = null;
    }
})