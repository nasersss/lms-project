import Navbar from './_components/navbar'
import Sidebar from './_components/sidebar'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-56 fixed flex-col inset-y-0 w-full z-50">
        <Navbar />
      </div>
      <div className="hidden md:flex h-full fixed flex-col  w-56 inset-y-0 z-20">
        <Sidebar />
      </div>
      <main className="md:ml-56 h-full mt-[80px] ">{children}</main>
    </div>
  )
}

export default DashboardLayout
