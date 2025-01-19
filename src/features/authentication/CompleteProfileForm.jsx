import { useState } from "react"
import { completeProfile } from "../../services/authApi"
import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"
import TextField from "../../ui/TextField"
import RadioInput from "../../ui/RadioInput"
import Loading from "../../ui/Loading"

function CompleteProfileForm() {
  const [fullName, setFullName] = useState()
  const [email, setEmail] = useState()
  const [role, setRole] = useState("")
  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  })

  console.log(role, 111)

  const handleRole = (event) => {
    setRole(event.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data, user } = await mutateAsync({ phoneNumber, otp })
      console.log(data)
      toast.success(data.message)
      if (user.isActive) {
        if (user.role == "FREELANCER") {
          navigate("/freelancer")
        } else if (user.role == "ADMIN") {
          navigate("/admin")
        } else {
          navigate("/owner")
        }
      }
    } catch (error) {
      navigate("/complete-profile")
      toast.error(error?.res)
    }
  }

  return (
    <div className="w-full sm:max-w-sm">
      <form className="space-y-8" onSubmit={handleSubmit}>
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
        <div className="flex items-center justify-center gap-x-8">
          <RadioInput
            label="کارفرما"
            value="OWNER"
            onchange={handleRole}
            id="OWNER"
            name="role"
            checked={role === "OWNER"}
          />
          <RadioInput
            label="فریلنسر"
            value="FREELANCER"
            onchange={handleRole}
            id="FREELANCER"
            name="role"
            checked={role === "FREELANCER"}
          />
        </div>
        {isPending ? (
          <Loading />
        ) : (
          <button className="btn btn--primary w-full">تایید</button>
        )}
      </form>
    </div>
  )
}

export default CompleteProfileForm
