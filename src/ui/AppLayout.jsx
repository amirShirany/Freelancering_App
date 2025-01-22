import { Outlet } from "react-router-dom"
import Header from "./Header"
import Sidebar from "./Sidebar"

function AppLayout() {
  return (
    <div className="h-screen grid grid-rows-[auto,1fr] grid-cols-[15rem,1fr]">
      <Header />
      <Sidebar />

      {/* content */}
      <div className="bg-secondary-100 overflow-y-auto">
        <div className="mx-auto max-w-screen-md bg-red-300 p-8">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AppLayout
