import { useState } from "react"
import OTPInput from "react-otp-input"

function CheckOTPForm() {
  const [otp, setOtp] = useState("")

  return (
    <>
      <form className="space-y-10" action="">
        <p className="font-bold text-secondary-800">کد تایید را وارد کنید:</p>
        <OTPInput
          value={otp}
          onChange={(otp) => setOtp(otp)}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(inputProps) => <input {...inputProps} />}
          containerStyle="flex flex-row-reverse justify-center gap-x-2"
          inputStyle={{
            width: "2.5rem",
            height: "3rem",
            fontSize: "1.5rem",
            textAlign: "center",
            borderRadius: "0.5rem",
            border: "1px solid rgb(var(--color-primary-300))",
          }}
        />
        <button className="btn btn--primary w-full">تایید</button>
      </form>
    </>
  )
}

export default CheckOTPForm
