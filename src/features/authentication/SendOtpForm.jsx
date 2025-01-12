import { useState } from "react"
import PropTypes from "prop-types"
import { useMutation } from "@tanstack/react-query"
import { getOtp } from "../../services/authApi"
import TextField from "../../ui/TextField"
import Loading from "../../ui/Loading"
import toast from "react-hot-toast"

const SendOTPForm = ({ setStep }) => {
  const [phoneNumber, setPhoneNumber] = useState("")

  const { isPending, data, error, mutateAsync } = useMutation({
    mutationFn: getOtp,
  })

  const sendotpHandler = async (e) => {
    e.preventDefault()
    try {
      const data = await mutateAsync({ phoneNumber })
      toast.success(data?.message || "کد تایید با موفقیت ارسال شد")
      setStep(2)
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  }

  return (
    <>
      <form className="space-y-4" onSubmit={sendotpHandler}>
        <TextField
          label="شماره موبایل"
          name="phonenumber"
          value={phoneNumber.trim()}
          onchange={(e) => setPhoneNumber(e.target.value)}
        />
        {isPending ? (
          <p>
            <Loading />
          </p>
        ) : (
          <button className="btn btn--primary w-full" type="submit">
            ارسال کد تایید
          </button>
        )}
      </form>
    </>
  )
}

export default SendOTPForm

SendOTPForm.propTypes = {
  setStep: PropTypes.func.isRequired,
}
