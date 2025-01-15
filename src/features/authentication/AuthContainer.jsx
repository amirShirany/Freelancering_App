import { useState } from "react"
import { getOtp } from "../../services/authApi"
import { useMutation } from "@tanstack/react-query"
import SendOTPForm from "./SendOtpForm"
import CheckOTPForm from "./CheckOTPForm"
import toast from "react-hot-toast"

function AuthContainer() {
  const [step, setStep] = useState(2)
  const [phoneNumber, setPhoneNumber] = useState("09137983097")

  const {
    isPending: isSendingOtp,
    mutateAsync,
    data: otpResponse,
  } = useMutation({
    mutationFn: getOtp,
  })
  const sendotpHandler = async (e) => {
    e.preventDefault()
    try {
      const { message } = await mutateAsync({ phoneNumber })
      toast.success(message)
      setStep(2)
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            phoneNumber={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            sendotpHandler={sendotpHandler}
            isSendingOtp={isSendingOtp}
            setStep={setStep}
          />
        )
      case 2:
        return (
          <CheckOTPForm
            phoneNumber={phoneNumber}
            onResendOtp={sendotpHandler}
            otpResponse={otpResponse}
            onBack={() => setStep((s) => s - 1)}
          />
        )

      default:
        return null
    }
  }

  return <div className="w-full sm:max-w-sm">{renderStep()}</div>
}

export default AuthContainer
