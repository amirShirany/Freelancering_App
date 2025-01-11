import SendOtpForm from "../features/authentication/SendOtpForm"
import CheckOTPForm from "../features/authentication/CheckOTPForm"

function Auth() {
  return (
    <div className="w-full sm:max-w-sm mx-auto pt-10 space-y-20">
      <SendOtpForm />
      <CheckOTPForm />
    </div>
  )
}

export default Auth
