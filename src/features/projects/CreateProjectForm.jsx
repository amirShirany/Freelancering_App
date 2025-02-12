import PropTypes from "prop-types"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { WithContext as ReactTags } from "react-tag-input"
import TextField from "../../ui/TextField"
import RHFSelect from "../../ui/RHFSelect"
import DatePickerField from "../../ui/DatePickerField"
import Loading from "../../ui/Loading"
import useCategories from "../../hooks/useCategories"
import useCreateProject from "./useCreateProject"
import useEditProject from "./useEditProject"
import "./YourCustomStyles.css" // Import your custom styles

function CreateProjectForm({ onClose, projectToEdit = {} }) {
  const { _id: editId } = projectToEdit
  const isEditSession = Boolean(editId)
  const {
    title,
    description,
    budget,
    category,
    deadline,
    tags: initialTags,
  } = projectToEdit

  let editValues = {}
  if (isEditSession) {
    editValues = {
      title,
      description,
      budget,
      category: category._id,
    }
  }

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({ defaultValues: editValues })

  const [tags, setTags] = useState(
    initialTags
      ? initialTags.map((tag, index) => ({
          id: index.toString(),
          text: tag.text || tag,
        }))
      : []
  )
  const [date, setDate] = useState(new Date(deadline || ""))

  const { categories, isLoading } = useCategories()
  const { createProject, isCreating } = useCreateProject()
  const { editProject, isEditing } = useEditProject()

  const onSubmit = (data) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags: tags.map((tag) => tag.text),
    }

    if (isEditSession) {
      editProject({
        id: editId,
        newProject,
        onSuccess: () => {
          onClose()
          reset()
        },
      })
    } else {
      createProject(newProject, {
        onSuccess: () => {
          onClose()
          reset()
        },
      })
    }
  }

  //tag Function
  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i))
  }

  const handleAddition = (tag) => {
    setTags([...tags, { id: tags.length.toString(), text: tag.text }])
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
  onClose: PropTypes.func.isRequired,
  projectToEdit: PropTypes.object,
}
