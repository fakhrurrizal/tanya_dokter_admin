import { Icon } from '@iconify/react'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from '../index.module.css'
import { useAdminSidebar } from '@/services'

const MenuHeader: FC<{
    item: any
    isMenuOpened: boolean
    handleOpenedMenu: (status: boolean) => void
}> = ({ item, isMenuOpened, handleOpenedMenu }) => {
    const router = useRouter()
    const { isExpanding } = useAdminSidebar()

    const classesActive = router.pathname === item?.path

    const isChildPathOpened = item.children?.some(
        (child: any) => router.pathname.startsWith(child.path) && router.pathname !== '/'
    )

    useEffect(() => {
        if (isChildPathOpened) {
            handleOpenedMenu(true)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div
            className={`w-full rounded-lg duration-300 cursor-pointer ${isExpanding ? 'py-[6px] px-3' : 'p-2'} ${classesActive ? `${styles.bgActive} shadow-xl` : 'hover:bg-[rgba(47,43,61,0.06)]'} ${isChildPathOpened || isMenuOpened ? 'bg-[rgba(47,43,61,0.06)]' : ''}`}
            onClick={() => handleOpenedMenu(!isMenuOpened)}
        >
            <div
                className={`flex items-center justify-between ${classesActive ? 'text-white' : 'text-nt-6'} ${isExpanding ? '' : 'pl-[4px]'}`}
            >
                <div className='flex items-center'>
                    <div className={`w-[38px] ${isExpanding ? '' : 'flex justify-center'}`}>
                        <Icon icon={item?.icon} className='text-[22px] font-bold flex-shrink-0' />
                    </div>
                    <motion.span
                        className={`font-sans ${!isExpanding ? 'hidden' : ''}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isExpanding ? 1 : 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {item?.name}
                    </motion.span>
                </div>
                <motion.div
                    initial={false}
                    animate={{ rotate: isMenuOpened ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`overflow-hidden ${!isExpanding ? 'hidden' : ''}`}
                >
                    <div>
                        <Icon icon={'iconamoon:arrow-right-2'} className='text-[22px] font-bold flex-shrink-0' />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default MenuHeader
