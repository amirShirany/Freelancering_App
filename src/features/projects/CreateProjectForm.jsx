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

function CreateProjectForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const [tags, setTags] = useState([
    { id: "1", text: "JavaScript" },
    { id: "2", text: "React" },
  ])
  const [date, setDate] = useState(new Date())
  const { categories, isLoading } = useCategories()

  const onSubmit = (data) => {
    console.log(data)
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
      <TextField
        label="توضیحات"
        onSubmit={handleSubmit(data)}
        name="description"
        register={register}
        validationSchema={{
          required: "توضیحات پروژه الزامی است",
          minLength: { value: 20, message: "حداقل 20 کاراکتر" },
        }}
        required
        errors
      />
      <TextField
        label="بودجه"
        onSubmit={handleSubmit(data)}
        name="price"
        register={register}
        validationSchema={{
          required: "توضیحات پروژه الزامی است",
          minLength: { value: 20, message: "حداقل 20 کاراکتر" },
        }}
        required
        errors
      />
      <RHFSelect
        label="دسته بندی"
        name="category"
        register={register}
        options={categories}
        required
        errors
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
