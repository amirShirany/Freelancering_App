import SendOTPForm from "../features/authentication/SendOTPForm"
import CheckOTPForm from "../features/authentication/CheckOTPForm"

function Auth() {
  return (
    <div className="w-full sm:max-w-sm mx-auto pt-10 space-y-20">
      <SendOTPForm />
      <CheckOTPForm />
    </div>
  )
}

export default Auth
