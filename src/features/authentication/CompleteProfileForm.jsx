import { completeProfile } from "../../services/authApi"
import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import TextField from "../../ui/TextField"
import RadioInputGroup from "../../ui/RadioInputGroup"
// import RadioInput from "../../ui/RadioInput"
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
          validationSchema={{
            required: "ایمیل ضروری است",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "ایمیل نامعتبر است",
            },
          }}
          errors={errors}
        />

        <RadioInputGroup
          errors={errors}
          register={register}
          watch={watch}
          configs={{
            name: "role",
            validationSchema: { required: "انتخاب نقش ضروری است" },
            options: [
              {
                value: "OWNER",
                label: "کارفرما",
              },
              { value: "FREELANCER", label: "فریلنسر" },
            ],
          }}
        />

        {/* btn submit */}
        <div>
          {isPending ? (
            <Loading />
          ) : (
            <button className="btn btn--primary w-full">تایید</button>
          )}
        </div>
      </form>
    </div>
  )
}

export default CompleteProfileForm
