import { NextPageWithLayout, pathnames } from '@/utils'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const HomePage: NextPageWithLayout = () => {
    const router = useRouter()

    useEffect(() => {
        router.push(pathnames.login)
    }, [router])

    return <>{/* <HomepageViews /> */}</>
}

// HomePage.getLayout = getDefaultLayout

export default HomePage
