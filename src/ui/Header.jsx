import useUser from "../features/authentication/useUser"
import UserAvater from "../features/authentication/UserAvater"
import HeaderMenue from "./HeaderMenue"

function Header() {
  const { isLoading } = useUser()
  return (
    <div className="bg-secondary-0 py-4 px-8 border-b border-secondary-200">
      <div
        className={`container xl:max-w-screen-xl flex items-center justify-end gap-x-8 ${
          isLoading ? "blur-sm opacity-50" : ""
        }`}>
        <UserAvater />
        <HeaderMenue />
      </div>
    </div>
  )
}

export default Header
