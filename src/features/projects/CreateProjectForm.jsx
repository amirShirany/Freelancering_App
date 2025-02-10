import { useState } from "react"
import { useForm } from "react-hook-form"
import { data } from "autoprefixer"
import { WithContext as ReactTags } from "react-tag-input"
import TextField from "../../ui/TextField"
import RHFSelect from "../../ui/RHFSelect"
import PropTypes from "prop-types"
import DatePickerField from "../../ui/DatePickerField"

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

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice()
    newTags.splice(currPos, 1)
    newTags.splice(newPos, 0, tag)
    setTags(newTags)
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
        options={[]}
        required
        errors
      />
      <div>
        <label className="mb-2 block text-secondary-700">تگ</label>
        <ReactTags
          classNames={{ tagInput: "textField__input" }}
          tags={tags}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          handleDrag={handleDrag}
          inputFieldPosition="top"
          editable
          maxTags={7}
        />
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
