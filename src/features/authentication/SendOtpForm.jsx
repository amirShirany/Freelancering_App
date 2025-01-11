import { useState } from "react"
import TextField from "../../ui/TextField"
import { getOtp } from "../../services/authApi"

const SendOTPForm = () => {
  const [phonenumber, setPhonenumber] = useState("")

  const sendotpHandler = (e) => {
    e.preventDefault()
    getOtp(phonenumber)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <form className="space-y-4" onSubmit={sendotpHandler}>
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

export default SendOTPForm
