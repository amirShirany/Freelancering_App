import { useState } from "react"
import { completeProfile } from "../../services/authApi"
import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import TextField from "../../ui/TextField"
import RadioInput from "../../ui/RadioInput"
import Loading from "../../ui/Loading"

function CompleteProfileForm() {
  const navigate = useNavigate()

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [role, setRole] = useState("FREELANCER")
  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  })

  console.log(role, 111)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { user, data } = await mutateAsync({ name, email, role })
      toast.success(data.message)

      if (user.status !== 2) {
        navigate("/")
        toast("پروفایل شما در انتظار تاییداست", { icon: "👏" })
        return
      }
      if (user.role === "OWNER") return navigate("/owner")
      if (user.role === "FREELANCER") return navigate("/freelancer")
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  }

  return (
    <div className="w-full sm:max-w-sm">
      <form className="space-y-8" onSubmit={handleSubmit}>
        <TextField
          label="نام و نام خانوادگی"
          name="fullName"
          onchange={(e) => setName(e.target.value)}
          value={name}
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
            onchange={(e) => setRole(e.target.value)}
            id="OWNER"
            name="role"
            // checked={role === "OWNER"}
          />
          <RadioInput
            label="فریلنسر"
            value="FREELANCER"
            onchange={(e) => setRole(e.target.value)}
            id="FREELANCER"
            name="role"
            // checked={role === "FREELANCER"}
          />
        </div>

        {/* btn submit */}
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
