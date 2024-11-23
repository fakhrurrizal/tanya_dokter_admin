import { FC, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MenuHeader from './header'
import MenuItem from './item'

const MenuList: FC<{
    menuItems: any[]
    recursive: number
}> = ({ menuItems, recursive = 0 }) => {
    const [isMenuOpened, setIsMenuOpened] = useState(false)

    const handleOpenedMenu = (status: boolean) => {
        setIsMenuOpened(status)
    }

    return (
        <ul>
            {menuItems.map((item, index) => {
                const havingChildren = Array.isArray(item?.children) && item?.children.length > 0

                return (
                    <li
                        key={item?.id}
                        className={`flex flex-col font-dm-sans mt-1 ${index === item.length - 1 ? 'shadow-lg z-10' : ''} duration-500`}
                    >
                        {havingChildren ? (
                            <>
                                <MenuHeader
                                    item={item}
                                    isMenuOpened={isMenuOpened}
                                    handleOpenedMenu={handleOpenedMenu}
                                />
                                <AnimatePresence initial={false}>
                                    {isMenuOpened && (
                                        <motion.div
                                            initial={{ height: 0, y: -10 }}
                                            animate={{ height: 'auto', position: 'relative', y: 0 }}
                                            exit={{ height: 0, overflow: 'hidden' }}
                                            transition={{ type: 'tween', duration: 0.3 }}
                                            className={`${isMenuOpened ? '' : 'h-0 overflow-hidden'}`}
                                        >
                                            <MenuList menuItems={item.children} recursive={recursive + 1} />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </>
                        ) : (
                            <MenuItem item={item} recursive={recursive} handleOpenedMenu={handleOpenedMenu} />
                        )}
                    </li>
                )
            })}
        </ul>
    )
}

export default MenuList
