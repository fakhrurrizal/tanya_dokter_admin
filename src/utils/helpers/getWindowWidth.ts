export const getWindowWidth = () => {
    if (typeof window !== 'undefined') {
        return window.innerWidth
    }

    return 0
}
