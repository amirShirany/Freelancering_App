/* eslint-disable react/prop-types */
import TextField from "../../ui/TextField"
import Loading from "../../ui/Loading"
import { useForm } from "react-hook-form"

const SendOTPForm = ({ isSendingOtp, onSubmit }) => {
  const { register } = useForm()
  return (
    <>
      <form className="space-y-4" onSubmit={onSubmit}>
        <TextField
          label="شماره موبایل"
          name="phonenumber"
          register={register}
        />
        {isSendingOtp ? (
          <Loading />
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
