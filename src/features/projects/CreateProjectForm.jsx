import TextField from "../../ui/TextField"
import { useForm } from "react-hook-form"
import PropTypes from "prop-types"
import { data } from "autoprefixer"

function CreateProjectForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="عنوان پروژه"
        onSubmit={handleSubmit(data)}
        name="title"
        register={register}
        validationSchema={{
          required: "عنوان پروژه الزامی است",
          minLength: { value: 10, message: "حداقل 10 کاراکتر" },
        }}
        required
        errors
      />
      <button type="submit" className="btn btn--primary w-full ">
        تایید
      </button>
    </form>
  )
}

export default CreateProjectForm
CreateProjectForm.propTypes = {
  register: PropTypes.func.isRequired,
}
