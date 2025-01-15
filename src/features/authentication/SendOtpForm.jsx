/* eslint-disable react/prop-types */
import TextField from "../../ui/TextField"
import Loading from "../../ui/Loading"

const SendOTPForm = ({ isSendingOtp, phoneNumber, onChange, onSubmit }) => {
  return (
    <>
      <form className="space-y-4" onSubmit={onSubmit}>
        <TextField
          label="شماره موبایل"
          name="phonenumber"
          value={phoneNumber}
          onChange={onChange}
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
