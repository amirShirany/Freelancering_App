import AuthContainer from "../features/authentication/AuthContainer"

function Auth() {
  return (
    <div className="container xl:max-w-7xl">
      <div className="flex justify-center pt-10">
        <AuthContainer />
      </div>
    </div>
  )
}

export default Auth
