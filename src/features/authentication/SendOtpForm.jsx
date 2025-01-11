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
            className="w-full py-3 px-4 rounded-xl text-secondary-900 border hover:border-primary-500 focus:outline-none focus:border-primary-500 focus:bg-white focus:shadow-lg focus:shadow-primary-200 transition-all duration-300 ease-in-out"
            type="text"
            name="phone"
          />
        </div>
        <button
          className="w-full px-4 py-2 font-bold bg-primary-900 text-white rounded-xl transition-all duration-300 ease-in-out hover:bg-primary-800 focus:outline-none focus:bg-primary-700 shadow-lg shadow-primary-300"
          type="submit">
          ارسال کد تایید
        </button>
      </form>
    </>
  )
}

export default SendOtpForm
