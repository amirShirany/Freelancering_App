import useUser from "./useUser"

function UserAvater() {
  const { user } = useUser()

  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
      <img
        className="w-7 h-7 rounded-full object-cover object-center"
        src="/user.jpg"
        alt="User-Avater"
      />
      <h1>{user.name}</h1>
    </div>
  )
}

export default UserAvater
