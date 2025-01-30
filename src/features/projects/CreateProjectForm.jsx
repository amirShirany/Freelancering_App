import { useState } from "react"
import TextField from "../../ui/TextField"

function CreateProjectForm() {
  const [title, setTitle] = useState()

  return (
    <form>
      <TextField
        label="عنوان پروژه"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  )
}

export default CreateProjectForm
