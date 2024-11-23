import { useAdminSidebar, useAuth } from '@/services'
import { DropdownMenu } from '@/components'
import { Icon } from '@iconify/react'

export const TopbarAdminLayout = () => {
    const menu = useAdminSidebar()
    const user = useAuth(state => state.value.user)
    const logout = useAuth(state => state.logout)

    const { sideMenuIsExpand } = menu

    const handleLogout = async () => {
        logout()
    }

    return (
        <>
            <div
                className={`fixed z-20 top-0 right-0 pt-5 bg-nt-14 px-5 ${sideMenuIsExpand ? 'md:left-72' : 'left-20'} duration-300`}
            >
                <div className={`bg-white h-[55px] shadow-md rounded-lg`}>
                    <div className='flex items-center h-full'>
                        {/* Avatar */}
                        <div className='w-full flex justify-end px-4'>
                            <DropdownMenu
                                trigger={
                                    <div className='rounded-full bg-blue-600 text-white h-[40px] w-[40px] flex items-center justify-center cursor-pointer hover:bg-opacity-95 active:bg-opacity-80'>
                                        <span suppressHydrationWarning>
                                            {user?.fullname?.slice(0, 1).toUpperCase() || ''}
                                        </span>
                                    </div>
                                }
                                containerClassName='mt-3'
                            >
                                <div className='menu bg-base-100 p-2 rounded-lg text-gray-600'>
                                    <div className='px-2 border-b-[1px] pb-2'>
                                        <p>{user?.fullname}</p>
                                        <p>{user?.email}</p>
                                    </div>
                                    <ul className='mt-2'>
                                        <li>
                                            <span className='flex gap-3' onClick={handleLogout}>
                                                <span>
                                                    <Icon icon='line-md:logout' className='text-base ' />
                                                </span>
                                                <span>Logout</span>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </DropdownMenu>
                        </div>
                        {/* Avatar end */}
                    </div>
                </div>
            </div>
        </>
    )
}
