import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import styles from '../index.module.css'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import { useAdminSidebar } from '@/services'

const MenuItem: FC<{
    item: any
    recursive: number
    handleOpenedMenu: (status: boolean) => void
}> = ({ item, recursive = 0, handleOpenedMenu }) => {
    const { isExpanding } = useAdminSidebar()

    const router = useRouter()

    const classesActive = router.pathname.startsWith(item?.path) && router.pathname !== '/'

    const hiddenChildren = !isExpanding && recursive > 0

    return (
        <Link
            href={item?.path}
            className={`w-full rounded-lg duration-300 cursor-pointer ${isExpanding ? 'py-[6px] px-3' : 'p-2'} ${classesActive ? `${styles.bgActive} shadow-xl` : 'hover:bg-[rgba(47,43,61,0.06)]'} ${hiddenChildren ? 'hidden' : ''}`}
            onClick={() => handleOpenedMenu(false)}
        >
            <div
                className={`flex items-center ${classesActive ? 'text-white' : 'text-nt-6'} ${isExpanding ? '' : 'pl-[4px]'} ${recursive > 0 ? 'pl-[16px]' : ''}`}
            >
                <div className={`w-[38px] ${isExpanding ? '' : 'flex justify-center'}`}>
                    <Icon
                        icon={recursive === 0 ? item?.icon : 'ph:dot-outline-duotone'}
                        className='text-[22px] font-bold flex-shrink-0'
                    />
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
        </Link>
    )
}

export default MenuItem
