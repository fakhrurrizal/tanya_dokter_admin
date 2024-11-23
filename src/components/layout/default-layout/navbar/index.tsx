import BottomBar from './bottombar'

import { motion, useScroll } from 'framer-motion'
import { useEffect, useState } from 'react'

const NavbarDefaultLayout = () => {
    const [isPastThreshold, setIsPastThreshold] = useState(false)

    const thresholdY = 40

    const { scrollY } = useScroll()

    useEffect(() => {
        const unsubscribe = scrollY.onChange(latest => {
            setIsPastThreshold(latest > thresholdY)
        })

        return () => unsubscribe()
    }, [scrollY])

    // useEffect(() => scrollY.onChange(latest => setIsPastThreshold(latest > thresholdY)), [scrollY])

    return (
        <>
            <div>
                <BottomBar />
            </div>

            {isPastThreshold && (
                <div className='fixed top-0 right-0 left-0 z-10'>
                    <motion.div
                        initial={{ y: -100 }}
                        animate={{ y: isPastThreshold ? 0 : -100 }}
                        transition={{ type: 'tween', duration: 0.7 }}
                    >
                        <div className='shadow-md'>
                            <BottomBar />
                        </div>
                    </motion.div>
                </div>
            )}
        </>
    )
}

export default NavbarDefaultLayout
