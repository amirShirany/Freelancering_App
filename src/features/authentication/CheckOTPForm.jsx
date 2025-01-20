import { useEffect, useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { FaArrowRight } from "react-icons/fa6"
import { CiEdit } from "react-icons/ci"
import { checkOtp } from "../../services/authApi"
import { useNavigate } from "react-router-dom"
import Loading from "../../ui/Loading"
import OTPInput from "react-otp-input"
import toast from "react-hot-toast"

const time = 20

function CheckOTPForm({ phoneNumber, onBack, onResendOtp, otpResponse }) {
  const navigate = useNavigate()
  const [otp, setOtp] = useState("")
  const [timeLeft, setTimeLeft] = useState(time) // 2 minutes in seconds

  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  })

  const checkotpHandler = async (e) => {
    e.preventDefault()
    toast.success(data.message)
    try {
      const { message, user } = await mutateAsync({ phoneNumber, otp })
      toast.success(message)

      if (!user.isActive) return navigate("/complete-profile")
      if (user.status !== 2) {
        navigate("/")
        toast("پروفایل شما در انتظار تاییداست", { icon: "👏" })
        return
      }
      if (user.role === "OWNER") return navigate("/owner")
      if (user.role === "FREELANCER") return navigate("/freelancer")
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  }

  useEffect(() => {
    //? setInterval is a side Effect
    if (timeLeft === 0) return

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [timeLeft])

  // Convert timeLeft to minutes and seconds
  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  return (
    <>
      <form className="space-y-8" onSubmit={checkotpHandler}>
        <button onClick={onBack}>
          <FaArrowRight className="w-6 h-6 text-secondary-700 cursor-pointer" />
        </button>

        {data && (
          <p className="flex items-center gap-x-2">
            {data.message}
            <button onClick={onBack}>
              <CiEdit className="w-6 h-6 text-primary-900" />
            </button>
          </p>
        )}

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
        <div className="flex justify-center">
          {timeLeft > 0 && (
            <p>
              {seconds < 10 ? `0${seconds}` : seconds} : {minutes} تا ارسال مجدد
              کد
            </p>
          )}
        </div>

        {isPending ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            ارسال کد تایید
          </button>
        )}
      </form>
    </>
  )
}

export default CheckOTPForm
