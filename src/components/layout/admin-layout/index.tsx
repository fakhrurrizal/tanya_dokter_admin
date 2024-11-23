import { ReactElement } from 'react'
import { useAdminSidebar } from '@/services'
import { PrivateRoute } from '@/components'
import AdminSidebar from './sidebar'
import { TopbarAdminLayout } from './topbar'

const AdminLayout = ({ children }: { children: ReactElement }) => {
    const menu = useAdminSidebar()

    const { sideMenuIsExpand } = menu

    return (
        <>
            <div className='relative min-h-screen'>
                <AdminSidebar />

                <div
                    className={`flex-1 min-h-screen mx-0 bg-nt-14 p-5 transition-all duration-300 ease-in-out ${
                        sideMenuIsExpand ? 'md:ml-72' : 'ml-20'
                    }`}
                >
                    <TopbarAdminLayout />
                    <main className='pt-[75px]'>{children}</main>
                </div>
            </div>
        </>
    )
}

export const getAdminLayout = (page: ReactElement) => {
    return (
        <PrivateRoute>
            <AdminLayout>{page}</AdminLayout>
        </PrivateRoute>
    )
}
