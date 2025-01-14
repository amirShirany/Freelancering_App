import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { checkOtp } from "../../services/authApi"
import { useNavigate } from "react-router-dom"
import OTPInput from "react-otp-input"
import toast from "react-hot-toast"

// eslint-disable-next-line react/prop-types
function CheckOTPForm({ phoneNumber }) {
  const navigate = useNavigate()
  const [otp, setOtp] = useState("")
  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  })

  const checkotpHandler = async (e) => {
    e.preventDefault()
    try {
      const { data, user } = await mutateAsync({ phoneNumber, otp })
      console.log(data)
      toast.success(data.message)
      if (user.isActive) {
        if (user.role == "FREELANCER") {
          navigate("/freelancer")
        } else if (user.role == "ADMIN") {
          navigate("/admin")
        } else {
          navigate("/owner")
        }
      }
    } catch (error) {
      navigate("/complete-profile")
      toast.error(error?.res)
    }
  }

  return (
    <>
      <form className="space-y-10" onSubmit={checkotpHandler}>
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
            outline: "none",
            borderRadius: "0.5rem",
            border: "1px solid rgb(var(--color-primary-300))",
          }}
        />
        <button type="submit" className="btn btn--primary w-full">
          تایید
        </button>
      </form>
    </>
  )
}

export default CheckOTPForm
