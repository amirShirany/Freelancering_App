import { useState } from "react"
import PropTypes from "prop-types"
import Table from "../../ui/Table"
import Modal from "../../ui/Modal"
import truncateText from "../../utils/truncateText"
import toLocalDateShort from "../../utils/toLocalDateShort"
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers"
import { HiOutlineTrash } from "react-icons/hi"
import { TbPencilMinus } from "react-icons/tb"
import ConfirmDelete from "../../ui/ConfirmDelete"

function ProjectRow({ project, index }) {
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)

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

        <td>
          <div className="flex items-center gap-x-4">
            {/* Modals */}
            <>
              <button
                onClick={() => {
                  setIsEditOpen(true)
                }}>
                <TbPencilMinus className="w-5 h-5 text-primary-900" />
              </button>
              <Modal
                title={`${project.title} ویرایش`}
                open={isEditOpen}
                onClose={() => {}}>
                <div>Are you sure you want to delete this project?</div>
              </Modal>
            </>
            <>
              <button
                onClick={() => {
                  setIsDeleteOpen(true)
                }}>
                <HiOutlineTrash className="w-5 h-5 text-rose-500" />
              </button>
              <Modal
                title={`${project.title} حذف`}
                open={isDeleteOpen}
                onClose={() => {}}>
                <ConfirmDelete
                  resourceName={project.title}
                  onConfirm={() => {}}
                  onClose={() => setIsDeleteOpen(false)}
                  disabled={false}
                />
              </Modal>
            </>
          </div>
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
