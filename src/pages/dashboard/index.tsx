import { getAdminLayout } from '@/components'
import { NextPageWithLayout } from '@/utils'

const DashboardPage: NextPageWithLayout = () => {
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}

DashboardPage.getLayout = getAdminLayout
export default DashboardPage
