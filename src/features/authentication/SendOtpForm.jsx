import { useState } from "react"

const SendOtpForm = () => {
  const [phonenumber, setPhonenumber] = useState("")
  return (
    <>
      <form className="space-y-4" action="">
        <div>
          <label className="mb-1" htmlFor="phonenumber">
            شماره موبایل
          </label>
          <input
            id="phonenumber"
            value={phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
            className="textField__input"
            type="text"
            name="phone"
          />
        </div>
        <button className="btn btn--primary w-full" type="submit">
          ارسال کد تایید
        </button>
      </form>
    </>
  )
}

export default SendOtpForm
