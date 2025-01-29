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
import useRemoveProject from "./useRemoveProject"

function ProjectRow({ project, index }) {
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const { removeProject, isDeleting } = useRemoveProject()

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td>{project.category.title}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocalDateShort(project.deadline)}</td>
      <td className="flex flex-wrap items-center gap-2 max-w-[200px]">
        {project.tags.map((tag) => (
          <span className="badge badge--secondary" key={tag}>
            {tag}
          </span>
        ))}
      </td>
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
              title={`ویرایش ${project.title}`}
              open={isEditOpen}
              onClose={() => {
                setIsEditOpen(false)
              }}>
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
              title={`حذف ${project.title}`}
              open={isDeleteOpen}
              onClose={() => {
                setIsDeleteOpen(false)
              }}>
              <ConfirmDelete
                resourceName={project.title}
                onConfirm={() => {
                  removeProject(project._id, {
                    onSuccess: () => {
                      setIsDeleteOpen(false)
                    },
                    onError: () => {
                      setIsDeleteOpen(false)
                    },
                  })
                }}
                onClose={() => setIsDeleteOpen(false)}
                disabled={false}
              />
            </Modal>
          </>
        </div>
      </td>
    </Table.Row>
  )
}

ProjectRow.propTypes = {
  project: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
}

export default ProjectRow
