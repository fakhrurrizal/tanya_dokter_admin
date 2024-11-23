import { NavbarDummy } from '@/utils/constants'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'

interface DrawerProps {
    isOpen: boolean
    onClose: () => void
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
    const router = useRouter()

    return (
        <AnimatePresence>
            {isOpen && (
                <div className=''>
                    {/* Overlay */}
                    <motion.div
                        className='fixed inset-0 bg-gray-800 bg-opacity-50 z-40'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    ></motion.div>

                    {/* Drawer */}
                    <motion.div
                        className='fixed right-0 top-0 h-full w-[70%] min-[450px]:w-80 bg-white shadow-lg p-4 z-50'
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.2 }}
                    >
                        <div className=''>
                            {/* Drawer content */}
                            <div className='flex flex-col bg-light p-5 rounded-2xl items-center'>
                                {Array.isArray(NavbarDummy)
                                    ? NavbarDummy.map(navItem => (
                                          <Link
                                              href={navItem?.path}
                                              className={`py-[10px] font-normal text-[16px] ${
                                                  router.asPath === navItem?.path
                                                      ? 'text-white bg-primary text-center w-full rounded-lg'
                                                      : 'text-nt-7 hover:text-pr-7 transition-colors duration-150'
                                              }`}
                                              key={navItem?.id}
                                          >
                                              {navItem?.name}
                                          </Link>
                                      ))
                                    : null}
                            </div>
                        </div>

                        <img
                            src='/assets/logo/logo-origin.png'
                            alt='Nizom System'
                            className='h-[30px] mx-auto w-auto cursor-pointer mt-5'
                            onClick={() => router.push('/')}
                        />
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}

export default Drawer
