import { FC } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CmsMenuDummy, pathnames } from '@/utils'
import MenuList from './menu'
import { useAdminSidebar } from '@/services'

const AdminSidebar: FC = () => {
    const { sideMenuIsExpand, sideMenuIsHover, isExpanding, handleHoverSidebar } = useAdminSidebar()

    return (
        <>
            <div
                role='navigation'
                className={[
                    'bg-white border-r border-slate-200 shadow-md absolute inset-y-0 left-0 z-50',
                    'duration-300 ease-in-out md:fixed md:translate-x-0',
                    `${
                        sideMenuIsExpand
                            ? 'bg-white w-72'
                            : sideMenuIsHover
                              ? 'bg-white/70 w-72 backdrop-blur-md'
                              : 'bg-white w-20'
                    }`,
                ].join(' ')}
            >
                <ToggleButton />

                <div
                    onMouseEnter={() => handleHoverSidebar(true)}
                    onMouseLeave={() => handleHoverSidebar(false)}
                    className={`relative h-screen overflow-hidden`}
                >
                    <div
                        className={`duration-500 transition-none border-b-[2px] ${isExpanding ? 'p-3 pl-4' : 'p-2 pb-3'}`}
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isExpanding ? 1 : 0 }}
                            transition={{ type: 'tween', duration: 0.5, delay: 0.1 }}
                            className={`${isExpanding ? '' : 'hidden'}`}
                        >
                            <Link href={pathnames.login}>
                                <img
                                    src='/assets/logo/logo-origin.png'
                                    alt='Nizom System'
                                    className='h-[35px] object-contain duration-300 transform transition-transform'
                                />
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isExpanding ? 0 : 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ type: 'tween', duration: 0.5 }}
                            className={`${isExpanding ? 'hidden' : ''}`}
                        >
                            <Link href={pathnames.dashboard}>
                                <img
                                    src='/assets/logo/logo-small.png'
                                    alt='Nizom System'
                                    className='h-[35px] object-contain mx-auto'
                                />
                            </Link>
                        </motion.div>
                    </div>

                    <div className=''>
                        <div className='p-2 h-[calc(100vh-200px)] overflow-y-auto scrollbar-thin'>
                            <MenuList menuItems={CmsMenuDummy} recursive={0} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminSidebar

const ToggleButton = () => {
    const menu = useAdminSidebar()

    const { setSideMenuIsExpand, sideMenuIsExpand, sideMenuIsHover } = menu

    return (
        <>
            <button
                className={`absolute z-50 top-16 -right-3 bg-white hover:bg-slate-100 text-slate-500 p-0.5 rounded-full border border-slate-200 ${sideMenuIsHover ? 'hidden' : ''}`}
                onClick={() => {
                    setSideMenuIsExpand(!sideMenuIsExpand)
                }}
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className={`${sideMenuIsExpand ? 'rotate-0' : 'rotate-180'} transform duration-500 h-4 w-4`}
                    viewBox='0 0 20 20'
                    fill='currentColor'
                >
                    <path
                        fillRule='evenodd'
                        d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                        clipRule='evenodd'
                    />
                </svg>
            </button>
        </>
    )
}
