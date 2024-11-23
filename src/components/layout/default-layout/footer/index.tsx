import { Icon } from '@iconify/react'
import Link from 'next/link'

const FooterDefaultLayout = () => {
    return (
        <section className='bg-[#16243D]'>
            <div className='container mx-auto py-5'>
                <div className='flex flex-col md:grid md:grid-cols-12 gap-12 py-10'>
                    <div className='col-span-12 xl:col-span-9'>
                        <div className='mb-12'>
                            <div className='flex flex-col gap-y-[48px] md:grid md:grid-cols-12 gap-6 xl:gap-12'>
                                {/* Description */}
                                <div className='col-span-12 w-full md:col-span-6 xl:col-span-5'>
                                    <div className='flex flex-col w-full md:w-auto'>
                                        <p className='text-white mb-4 leading-7'>
                                            <b>Nizom System</b> menyediakan layanan pengembangan sistem informasi yang
                                            mencakup aplikasi berbasis web, desktop, dan mobile. Kami siap memenuhi
                                            berbagai kebutuhan sumber daya untuk pengembangan sistem Anda dengan solusi
                                            yang inovatif, efisien, dan disesuaikan dengan kebutuhan bisnis Anda.
                                        </p>
                                        <div className='flex gap-[15px]'>
                                            <Link
                                                className='btn btn-circle hover:bg-primary border-none hover:text-white'
                                                href='https://www.instagram.com/nizomsystem/'
                                                target='_blank'
                                                aria-label='Instagram Link'
                                            >
                                                <Icon icon='mdi:instagram' className='text-xl' />
                                            </Link>

                                            <Link
                                                className='btn btn-circle hover:bg-primary border-none hover:text-white'
                                                href='https://id.linkedin.com/in/nizom-system-8a96a1325'
                                                target='_blank'
                                                aria-label='Linkedin Link'
                                            >
                                                <Icon icon='ri:linkedin-fill' className='text-xl' />
                                            </Link>

                                            <Link
                                                className='btn btn-circle hover:bg-primary border-none hover:text-white'
                                                href='https://www.youtube.com/@NizomPOSKasir'
                                                target='_blank'
                                                aria-label='Youtube Link'
                                            >
                                                <Icon icon='ri:youtube-fill' className='text-xl' />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* Description End */}
                            </div>
                        </div>

                        <div className='py-12 border-[rgba(255,255,255,0.08)] border-t-[1px]'>
                            <div className='flex flex-col lg:grid lg:grid-cols-12 gap-6'>
                                <div className='lg:col-span-6 xl:col-span-4'>
                                    <div className='flex'>
                                        <div className='btn-xl btn-square btn-primary bg-primary text-white rounded-xl p-8 flex justify-center items-center me-4'>
                                            <span>
                                                <Icon icon='mdi:location' fontSize={32} className='text-[36px] ' />
                                            </span>
                                        </div>
                                        <div>
                                            <h3 className='text-white text-[24px] mb-2'>Address</h3>
                                            <p className='text-nt-10 text-[16px]'>
                                                Jl. Daud Raya No.1A, RT.2/RW.8, Sukabumi Utara, Kec. Kb. Jeruk, Kota
                                                Jakarta Barat, Daerah Khusus Ibukota Jakarta 11540
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className='lg:col-span-6 xl:col-span-4'>
                                    <div className='flex'>
                                        <div className='btn-xl btn-square btn-primary bg-primary text-white rounded-xl p-8 flex justify-center items-center me-4'>
                                            <span className=''>
                                                <Icon icon='tabler:mail-filled' className='text-[36px]' />
                                            </span>
                                        </div>
                                        <div>
                                            <h3 className='text-white text-[24px] mb-2'>Mail Us</h3>
                                            <p className='text-nt-10 text-[16px]'>support@nizom.id</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='lg:col-span-6 xl:col-span-4'>
                                    <div className='flex'>
                                        <div className='btn-xl btn-square btn-primary bg-primary text-white rounded-xl p-8 flex justify-center items-center me-4'>
                                            <span>
                                                <Icon icon='mingcute:phone-fill' className='text-[36px]' />
                                            </span>
                                        </div>
                                        <div>
                                            <h3 className='text-white text-[24px] mb-2'>Telephone</h3>
                                            <p className='text-nt-10 text-[16px]'>0812-9157-0314</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className='col-span-12 xl:col-span-3'>
                        <div className='flex flex-col'>
                            <h2 className='text-white mb-6 text-[24px] font-medium'>Newsletter</h2>
                            <p className='text-white mb-4 leading-7'>
                                Berlangganan untuk mengikuti tulisan kami, silahkan tinggalkan email anda disini..!
                            </p>

                            <div className='relative'>
                                <input
                                    type='text'
                                    name=''
                                    id=''
                                    placeholder='Enter your email...'
                                    className='py-4 ps-5 rounded-full w-full focus:ring-pr-5 focus:ring-4 focus:outline-none placeholder:text-nt-6'
                                />

                                <button className='absolute right-2 whitespace-nowrap top-1/2 transform -translate-y-1/2 rounded-full text-white font-semibold bg-primary px-3 py-2 hover:bg-pr-6 active:bg-pr-5 active:scale-[98%] transition-all duration-200 text-base'>
                                    Sign Up
                                </button>
                            </div>
                        </div>

                        {/* Call Us Icon Start */}
                        <div className='flex flex-shrink-0 mt-6'>
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
                            <div className='flex flex-col ml-4 justify-center'>
                                <span className='text-nt-10 mb-2'>Call Us</span>
                                <Link href='tel:+6281291570314' target='_blank' aria-label='Call Nizom System'>
                                    <span className='text-white'>081291570314</span>
                                </Link>
                            </div>
                        </div>
                        {/* Call Us Icon End */}
                    </div>
                    {/* Newsletter End */}
                </div>
            </div>

            {/* Copyright */}
            <div className='py-6 border-[rgba(255,255,255,0.08)] border-t-[1px]'>
                <div className='container mx-auto'>
                    <p className='text-nt-10 text-center'>
                        &copy;{' '}
                        <Link href='/' className='text-white pb-[1px] border-white border-b-[1px]'>
                            Nizom Berkah Informasi
                        </Link>
                        , All right reserved.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default FooterDefaultLayout
