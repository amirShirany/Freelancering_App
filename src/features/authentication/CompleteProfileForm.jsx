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
        <button className="btn btn--primary w-full">تایید</button>
      </form>
    </div>
  )
}

export default CompleteProfileForm
