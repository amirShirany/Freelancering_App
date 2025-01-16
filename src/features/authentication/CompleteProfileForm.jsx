import { useState } from "react"
import TextField from "../../ui/TextField"

function CompleteProfileForm() {
  const [fullName, setFullName] = useState()
  const [email, setEmail] = useState()

  return (
    <div className="w-full sm:max-w-sm">
      <form className="space-y-8">
        <TextField
          label="نام و نام خانوادگی"
          name="fullName"
          onchange={(e) => setFullName(e.target.value)}
          value={fullName}
        />
        <TextField
          label="ایمیل"
          name="email"
          onchange={(e) => setEmail(e.target.value)}
          value={email}
        />

        {/* Radio BTN */}
        <div className="flex justify-center gap-x-8">
          <div className="flex items-center gap-x-1">
            <label htmlFor="OWNER">کارفرما</label>
            <input
              className="cursor-pointer w-4 h-4 accent-red-500"
              type="radio"
              id="OWNER"
              name="role"
              value="OWNER"
            />
          </div>
          <div className="flex items-center gap-x-1">
            <label htmlFor="FREELANCER">فریلنسر</label>
            <input
              className="cursor-pointer w-4 h-4 accent-blue-500"
              type="radio"
              name="role"
              id="FREELANCER"
              value="FREELANCER"
            />
          </div>
        </div>

        <button className="btn btn--primary w-full">تایید</button>
      </form>
    </div>
  )
}

export default CompleteProfileForm
