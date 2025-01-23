import { HiCollection, HiHome } from "react-icons/hi"
import { NavLink } from "react-router-dom"

function Sidebar() {
  const navlinkClass =
    "flex items-center gap-x-2 transition-all duration-300 hover:bg-primary-200/50 hover:text-primary-900 px-2 py-1.5 rounded-lg"

  return (
    <div className="bg-secondary-200 row-start-1 row-span-2">
      <ul className="flex flex-col items-start p-8 gap-y-2">
        <li className="w-full">
          <NavLink
            to="/owner/dashboard"
            className={({ isActive }) =>
              isActive
                ? `${navlinkClass} bg-primary-200 text-primary-900`
                : navlinkClass
            }>
            <HiHome />
            <span>داشبورد</span>
          </NavLink>
        </li>

        <li className="w-full">
          <NavLink
            to="/owner/projects"
            className={({ isActive }) =>
              isActive
                ? `${navlinkClass} bg-primary-200 text-primary-900`
                : navlinkClass
            }>
            <HiCollection />
            <span>پروژه‌ ها</span>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
