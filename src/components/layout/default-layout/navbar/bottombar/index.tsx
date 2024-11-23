import { NavbarDummy } from '@/utils/constants'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getWindowWidth, isLinkActive } from '@/utils'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import dynamic from 'next/dynamic'

const Drawer = dynamic(() => import('../drawer'), { ssr: false })

const BottomBar = () => {
    const router = useRouter()

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [windowWidth, setWindowWidth] = useState(0)

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(getWindowWidth())
        }

        handleResize()

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const mobile = windowWidth < 1024

    const openDrawer = () => setIsDrawerOpen(true)
    const closeDrawer = () => setIsDrawerOpen(false)

    return (
        <>
            <div className='bg-white duration-500 transition-all'>
                <div className='container mx-auto bg-white flex'>
                    <nav className='flex w-full justify-between items-center py-5'>
                        {/* Logo Start */}
                        <Link href='/' className='navbar-brand p-0 flex-shrink-0 mr-[24px]'>
                            <Image
                                // Jangan gunakan loading lazy untuk mengatasi content LCP - Malfazakki
                                loading='eager'
                                src='/assets/logo/logo-origin.png'
                                className='h-[30px] md:h-[40px] w-auto object-contain'
                                alt='Nizom System'
                                width={300}
                                height={40}
                                decoding='async'
                                priority
                            />
                        </Link>
                        {/* Logo End */}

                        {/* Navbar Items Start */}
                        <div className='bg-light rounded-xl hidden lg:block flex-1 w-full'>
                            <div className='w-fit flex mx-auto h-max'>
                                {Array.isArray(NavbarDummy)
                                    ? NavbarDummy.map(navItem => {
                                          const isActive = isLinkActive(router.asPath, navItem?.path)

                                          return (
                                              <Link
                                                  href={navItem?.path}
                                                  className={`px-[15px] py-[15px] font-normal text-[16px] ${isActive ? 'text-primary' : 'text-nt-7 hover:text-pr-7 transition-colors duration-150'}`}
                                                  key={navItem?.id}
                                              >
                                                  {navItem?.name}
                                              </Link>
                                          )
                                      })
                                    : null}
                            </div>
                        </div>
                        {/* Navbar Items End */}

                        {/* Call Us Icon Start */}
                        <div className='hidden xl:flex flex-shrink-0 ml-[24px]'>
                            <Link
                                href='tel:+ 081291570314'
                                className='relative h-[56px] w-[56px] border-0 flex btn btn-secondary btn-circle justify-center items-center rounded-full hover:group text-primary hover:bg-pr-5 transition-all duration-500 hover:text-white'
                                aria-label='Call Nizom System'
                            >
                                <Icon icon='mingcute:phone-fill' className='text-[38px] mr-1' />
                                <div className='absolute top-[9px] right-[12px]'>
                                    <span>
                                        <Icon icon='eva:message-square-fill' className='text-[18px] text-emerald-400' />
                                    </span>
                                </div>
                            </Link>
                            <div className='flex flex-col ml-3 justify-center'>
                                <span className='text-nt-7'>Call Us</span>
                                <Link href='tel:+6281291570314' aria-label='Call Nizom System'>
                                    <span className='text-dark'>081291570314</span>
                                </Link>
                            </div>
                        </div>
                        {/* Call Us Icon End */}

                        <div className='inline lg:hidden'>
                            <button
                                onClick={openDrawer}
                                className='md:p-2 text-primary btn-sm md:btn-md flex justify-center items-center'
                                aria-label='Open Drawer'
                            >
                                {/* hamburger icon */}
                                <svg
                                    className='swap-off fill-current'
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='32'
                                    height='32'
                                    viewBox='0 0 512 512'
                                >
                                    <path d='M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z' />
                                </svg>
                            </button>
                        </div>
                    </nav>
                </div>
                {mobile && <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} />}
            </div>
        </>
    )
}

export default BottomBar
