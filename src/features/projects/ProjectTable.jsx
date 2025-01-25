import useOwnerProjects from "./useOwnerProjects"
import Loading from "../../ui/Loading"
import Empty from "../../ui/Empty"

function ProjectTable() {
  const { projects, isLoading } = useOwnerProjects()

  if (isLoading) return <Loading />
  if (!projects.length) return <Empty resourceName="پروژه" />

  return (
    <div className="bg-secondary-0 overflow-x-auto">
      <table>
        <thead>
          <tr className="title-row">
            <th>#</th>
            <th>عنوان پروژه</th>
            <th>دسته بندی</th>
            <th>بودجه</th>
            <th>ددلاین</th>
            <th>تگ ها</th>
            <th>فریلنسر</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <hr />
        <tbody>
          {projects.map((project, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{project.title}</td>
              <td>{project.category}</td>
              <td>{project.budget}</td>
              <td>{project.deadline}</td>
              <td>{project.tags.join(", ")}</td>
              <td>{project.freelancer}</td>
              <td>{project.status}</td>
              <td>
                <button>ویرایش</button>
                <button>حذف</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProjectTable
