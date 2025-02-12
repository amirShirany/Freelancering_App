import { useState } from "react"
import { useForm } from "react-hook-form"
import { data } from "autoprefixer"
import { WithContext as ReactTags } from "react-tag-input"
import TextField from "../../ui/TextField"
import RHFSelect from "../../ui/RHFSelect"
import PropTypes from "prop-types"
import DatePickerField from "../../ui/DatePickerField"
import "./YourCustomStyles.css" // Import your custom styles
import useCategories from "../../hooks/useCategories"
import useCreateProject from "./useCreateProject"
import Loading from "../../ui/Loading"

function CreateProjectForm({ onClose }) {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm()

  const [tags, setTags] = useState([
    { id: "1", text: "JavaScript" },
    { id: "2", text: "React" },
  ])
  const [date, setDate] = useState(new Date())
  const { categories, isLoading } = useCategories()
  const { isCreating, createProject } = useCreateProject()

  const onSubmit = (data) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    }
    createProject(newProject, {
      onSuccess: () => {
        onClose()
        reset()
      },
    })
  }

  //tag Function
  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i))
  }

  const handleAddition = (tag) => {
    setTags([...tags, tag])
  }

  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="عنوان پروژه"
        name="title"
        register={register}
        required
        validationSchema={{
          required: "عنوان پروژه الزامی است",
          minLength: { value: 10, message: "حداقل 10 کاراکتر" },
        }}
        errors={errors}
      />
      <TextField
        label="توضیحات"
        name="description"
        register={register}
        required
        validationSchema={{
          required: "توضیحات الزامی است",
          minLength: { value: 15, message: "حداقل 15 کاراکتر" },
        }}
        errors={errors}
      />
      <TextField
        label="بودجه"
        name="budget"
        register={register}
        required
        validationSchema={{
          required: "توضیحات پروژه الزامی است",
        }}
        errors={errors}
      />
      <RHFSelect
        label="دسته بندی"
        name="category"
        register={register}
        required
        options={categories}
        errors={errors}
      />

      <div>
        <label className="mb-2 block text-secondary-700">تگ</label>
        <div className="tag-container">
          <ReactTags
            classNames={{ tagInput: "textField__input" }}
            tags={tags}
            inputFieldPosition="top"
            handleDelete={handleDelete}
            handleAddition={handleAddition}
            placeholder="Add a new tag"
          />
        </div>
      </div>
      <DatePickerField label="ددلاین" date={date} setDate={setDate} />

      {isCreating ? (
        <Loading />
      ) : (
        <button type="submit" className="btn btn--primary w-full ">
          تایید
        </button>
      )}
    </form>
  )
}

export default CreateProjectForm
CreateProjectForm.propTypes = {
  register: PropTypes.func.isRequired,
}
