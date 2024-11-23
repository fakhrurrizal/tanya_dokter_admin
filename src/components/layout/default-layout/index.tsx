import dynamic from 'next/dynamic'
import NavbarDefaultLayout from './navbar'
import React, { ReactElement } from 'react'

const FooterDefaultLayout = dynamic(() => import('./footer'))

const DefaultLayout = ({ children }: { children: ReactElement }) => {
    return (
        <>
            <div className='main_section bg-nt-14 flex flex-col justify-between min-h-screen'>
                <NavbarDefaultLayout />

                <main className=''>{children}</main>

                <FooterDefaultLayout />
            </div>
        </>
    )
}

export const getDefaultLayout = (page: ReactElement) => {
    return <DefaultLayout>{page}</DefaultLayout>
}
