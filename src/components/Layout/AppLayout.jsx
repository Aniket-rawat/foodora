
import { Outlet } from "react-router-dom";
import Footer from '../Footer'
import Header from '../Header'

const AppLayout = () => {
    return (
        <div className="overflow-hidden text-[#404040] bg-gray-100">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default AppLayout
