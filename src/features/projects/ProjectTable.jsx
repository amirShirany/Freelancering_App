import useOwnerProjects from "./useOwnerProjects"
import Loading from "../../ui/Loading"
import Empty from "../../ui/Empty"
import truncateText from "../../utils/truncateText"
import toLocalDateShort from "../../utils/toLocalDateShort"
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers"

function ProjectTable() {
  const { projects, isLoading } = useOwnerProjects()

  if (isLoading) return <Loading />
  // if (!projects.length) return <Empty resourceName="درخواستی" />

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
            <tr key={project._id}>
              <td>{index + 1}</td>
              <td>{truncateText(project.title, 30)}</td>
              <td>{project.category.title}</td>
              <td>{toPersianNumbersWithComma(project.budget)}</td>
              <td>{toLocalDateShort(project.deadline)}</td>
              <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
                <td>
                  {project.tags.map((tag) => (
                    <span className="badge badge--secondery" key={tag}>
                      {tag}
                    </span>
                  ))}
                </td>
              </div>
              <td>{project.freelancer?.name || "-"}</td>
              <td>
                {project.status === "OPEN" ? (
                  <span className="badge badge--success">باز</span>
                ) : (
                  <span className="badge badge--danger">بسته</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProjectTable
