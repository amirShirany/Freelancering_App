import { completeProfile } from "../../services/authApi"
import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import TextField from "../../ui/TextField"
import RadioInput from "../../ui/RadioInput"
import Loading from "../../ui/Loading"
import { useForm } from "react-hook-form"

function CompleteProfileForm() {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm()
  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  })
  const navigate = useNavigate()

  // console.log(role, 111)

  const onSubmit = async (data) => {
    try {
      const { user, message } = await mutateAsync(data)
      toast.success(message)

      if (!user.status !== 2) {
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
      <h1 className="font-bold text-center text-secondary-700 text-xl mb-4">
        تکمیل اطلاعات
      </h1>
      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="نام و نام خانوادگی"
          name="name"
          register={register}
          // onchange={(e) => setName(e.target.value)}
          // value={name}
          validationSchema={{ required: "نام و نام خانوادگی ضروری است" }}
          errors={errors}
        />

        <TextField
          label="ایمیل"
          name="email"
          register={register}
          // onchange={(e) => setEmail(e.target.value)}
          // value={email}
          validationSchema={{ required: "ایمیل ضروری است" }}
          errors={errors}
        />

        {/* Radio BTN */}
        <div className="flex items-center justify-center gap-x-8">
          <RadioInput
            label="کارفرما"
            value="OWNER"
            register={register}
            // onchange={(e) => watch(setRole(e.target.value))}
            id="OWNER"
            name="role"
            watch={watch}
          />
          <RadioInput
            label="فریلنسر"
            value="FREELANCER"
            id="FREELANCER"
            watch={watch}
            register={register}
            // onchange={(e) => watch(setRole(e.target.value))}
            name="role"
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
