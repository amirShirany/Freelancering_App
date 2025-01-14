import { useState } from "react"
import SendOTPForm from "./SendOtpForm"
import CheckOTPForm from "./CheckOTPForm"

function AuthContainer() {
  const [step, setStep] = useState(2)
  const [phoneNumber, setPhoneNumber] = useState("09137983097")

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            phoneNumber={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            setStep={setStep}
          />
        )
      case 2:
        return <CheckOTPForm phoneNumber={phoneNumber} />

      default:
        return null
    }
  }

  return <div className="w-full sm:max-w-sm">{renderStep()}</div>
}

export default AuthContainer
