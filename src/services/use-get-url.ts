import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const useGetUrl = () => {
    const [hostname, setHostname] = useState<string | null>(null)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setHostname(window.location.hostname)
        }
    }, [])

    const route = useRouter()

    const url = hostname + route.asPath

    return { url }
}

export default useGetUrl
