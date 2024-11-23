import { create } from 'zustand'

interface AdminSidebarState {
    sideMenuIsExpand: boolean
    sideMenuIsHover: boolean
    isExpanding: boolean
    setSideMenuIsExpand: (isExpand: boolean) => void
    setSideMenuIsHover: (isHover: boolean) => void
    handleHoverSidebar: (value: boolean) => void
}

export const useAdminSidebar = create<AdminSidebarState>(set => ({
    sideMenuIsExpand: true,
    sideMenuIsHover: false,
    isExpanding: true,

    setSideMenuIsExpand: isExpand =>
        set(state => ({
            sideMenuIsExpand: isExpand,

            isExpanding: isExpand || state.sideMenuIsHover,
        })),

    setSideMenuIsHover: isHover =>
        set(state => ({
            sideMenuIsHover: isHover,

            isExpanding: state.sideMenuIsExpand || isHover,
        })),

    handleHoverSidebar: value =>
        set(state => {
            if (!state.sideMenuIsExpand) {
                return { sideMenuIsHover: value, isExpanding: state.sideMenuIsExpand || value }
            }

            return {}
        }),
}))
