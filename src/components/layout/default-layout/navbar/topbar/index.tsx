import { Icon } from '@iconify/react'
import Link from 'next/link'

const TopBar = () => {
    return (
        <>
            <div className='bg-light'>
                <div className='container mx-auto py-2 hidden lg:block'>
                    <div className='flex justify-between w-full'>
                        {/* Location & Support Email Start */}
                        <div className='flex gap-[5px]'>
                            <div className='pe-3 border-black border-r-[1px] flex items-center'>
                                <Link
                                    href='https://maps.app.goo.gl/8TW1sv1Mu3QKSk6p7'
                                    className='text-nt-6 text-sm font-normal flex items-center'
                                    target='_blank'
                                >
                                    <Icon icon='mdi:location' className='text-pr-7 text-base inline mr-[4px]' />
                                    Nizom System
                                </Link>
                            </div>

                            <div className='ps-3'>
                                <Link
                                    href='mailto:support@nizom.id'
                                    className='text-nt-6 text-sm font-normal flex items-center'
                                    aria-label='Email to Nizom System'
                                    target='_blank'
                                >
                                    <Icon icon='tabler:mail-filled' className='text-pr-7 text-base inline mr-[6px]' />
                                    support@nizom.id
                                </Link>
                            </div>
                        </div>
                        {/* Location & Support Email End */}

                        {/* Social Media Start */}
                        <div className='flex gap-[15px] items-end'>
                            <Link
                                className='p-0 text-primary flex items-end'
                                href='https://www.instagram.com/nizomsystem/'
                                target='_blank'
                                aria-label='Instagram Link'
                            >
                                <Icon icon='mdi:instagram' className='text-xl' />
                            </Link>
                            <Link
                                className='p-0 text-primary flex items-end'
                                href='https://id.linkedin.com/in/nizom-system-8a96a1325'
                                target='_blank'
                                aria-label='Linkedin Link'
                            >
                                <Icon icon='ri:linkedin-fill' className='text-xl' />
                            </Link>
                            <Link
                                className='p-0 text-primary flex items-end me-0'
                                href='https://www.youtube.com/@NizomPOSKasir'
                                target='_blank'
                                aria-label='Youtube Link'
                            >
                                <Icon icon='ri:youtube-fill' className='text-xl' />
                            </Link>
                        </div>
                        {/* Social Media End */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopBar
