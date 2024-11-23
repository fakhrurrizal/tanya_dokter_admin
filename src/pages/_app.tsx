import { AlertDialog, ErrorBoundary } from '@/components'
import { useGetTheme } from '@/services/theme'
import '@/styles/fonts.css'
import '@/styles/globals.css'
import { NextPageWithLayout, queryClient, ToastProvider } from '@/utils'
import { ThemeProvider } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { QueryClientProvider } from '@tanstack/react-query'
import dayjs from 'dayjs'
import localeData from 'dayjs/plugin/localeData'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import type { AppProps } from 'next/app'
import Head from 'next/head'

dayjs.extend(localeData)
dayjs.extend(timezone)
dayjs.extend(utc)

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const theme = useGetTheme()

    const getLayout = Component.getLayout ?? (page => page)

    const components = getLayout(<Component {...pageProps} />)

    return (
        <>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
                <title>Tanya Dokter App Admin</title>
            </Head>
            <QueryClientProvider client={queryClient}>
                <ErrorBoundary>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <ThemeProvider theme={theme}>
                            <AlertDialog />
                            <ToastProvider>{components}</ToastProvider>
                        </ThemeProvider>
                    </LocalizationProvider>
                </ErrorBoundary>
            </QueryClientProvider>
        </>
    )
}
