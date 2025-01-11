import { useState } from "react"
import TextField from "../../ui/TextField"

const SendOtpForm = () => {
  const [phonenumber, setPhonenumber] = useState("")

  return (
    <>
      <form className="space-y-4" action="">
        <TextField
          label="شماره موبایل"
          name="phonenumber"
          value={phonenumber}
          onchange={(e) => setPhonenumber(e.target.value)}
        />
        <button className="btn btn--primary w-full" type="submit">
          ارسال کد تایید
        </button>
      </form>
    </>
  )
}

export default SendOtpForm
