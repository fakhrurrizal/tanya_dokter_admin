'use client'

import { useAuth } from '@/services'
import { pathnames } from '@/utils'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren, useEffect, useState } from 'react'

export const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
    const router = useRouter()
    const user = useAuth(state => state.value.user)

    // const [openModal, setOpenModal] = useState<boolean>(false)
    const [isClient, setIsClient] = useState(false)

    // const { data: menuPermission, isLoading } = useMenuPermission(route.pathname)

    // useEffect(() => {
    //     if (isStaticPath(router.pathname)) {
    //         setOpenModal(false)
    //     }
    //     // else if (!isLoading) {
    //     //     setOpenModal(!menuPermission?.read)
    //     // }
    // }, [router.pathname])

    useEffect(() => {
        if (!user && router.asPath !== '/') {
            router.push(pathnames.login)
        }
    }, [user, router])

    useEffect(() => {
        setIsClient(true)
    }, [])

    return <>{isClient && children}</>
}
