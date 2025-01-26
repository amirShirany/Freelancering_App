import Table from "../../ui/Table"
import truncateText from "../../utils/truncateText"
import toLocalDateShort from "../../utils/toLocalDateShort"
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers"
import PropTypes from "prop-types"

function ProjectRow({ project, index }) {
  return (
    <Table.Row>
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
    </Table.Row>
  )
}
ProjectRow.propTypes = {
  project: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
}

export default ProjectRow
