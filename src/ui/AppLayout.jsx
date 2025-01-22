import { Outlet } from "react-router-dom"

function AppLayout() {
  return (
    <div className="h-screen grid grid-rows-[auto,1fr] grid-cols-[15rem,1fr]">
      <div className="bg-secondary-0 py-4 px-8">Header</div>
      <div className="bg-secondary-200 row-start-1 row-span-2">Sidebar</div>

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
