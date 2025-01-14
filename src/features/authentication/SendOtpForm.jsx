import { useMutation } from "@tanstack/react-query"
import { getOtp } from "../../services/authApi"
import TextField from "../../ui/TextField"
import Loading from "../../ui/Loading"
import toast from "react-hot-toast"

// eslint-disable-next-line react/prop-types
const SendOTPForm = ({ setStep, phoneNumber, onChange }) => {
  const { isPending, data, error, mutateAsync } = useMutation({
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

  return (
    <>
      <form className="space-y-4" onSubmit={sendotpHandler}>
        <TextField
          label="شماره موبایل"
          name="phonenumber"
          value={phoneNumber}
          onChange={onChange}
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
