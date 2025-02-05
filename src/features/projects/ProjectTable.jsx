import { useState } from "react"
import useOwnerProjects from "./useOwnerProjects"
import Loading from "../../ui/Loading"
import Empty from "../../ui/Empty"
import Table from "../../ui/Table"
import ProjectRow from "./ProjectRow"
import Modal from "../../ui/Modal"
import CreateProjectForm from "./CreateProjectForm"

function ProjectTable() {
  const { projects, isLoading } = useOwnerProjects()
  const [isAddProject, setIsAddProject] = useState(false)

  if (isLoading) return <Loading />
  if (!projects.length) return <Empty resourceName="درخواستی" />

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="font-bold">پروژه های شما</h1>
        <button
          onClick={() => {
            isAddProject(true)
          }}
          className="btn btn--primary">
          اضافه کردن پروژه
        </button>
        <Modal
          title="اضافه کردن پروژه جدید"
          open={isAddProject}
          onClose={() => {
            setIsAddProject(false)
          }}>
          <CreateProjectForm
            // resourceName={project.title}
            // onConfirm={() => {
            //   removeProject(project._id, {
            //     onSuccess: () => {
            //       setIsDeleteOpen(false)
            //     },
            //     onError: () => {
            //       setIsDeleteOpen(false)
            //     },
            //   })
            // }}
            onClose={() => setIsAddProject(false)}
            disabled={false}
          />
        </Modal>
      </div>
      <Table>
        <Table.Header>
          <th>#</th>
          <th>عنوان پروژه</th>
          <th>دسته بندی</th>
          <th>بودجه</th>
          <th>ددلاین</th>
          <th>تگ ها</th>
          <th>فریلنسر</th>
          <th>وضعیت</th>
          <th>عملیات</th>
        </Table.Header>

        <Table.Body>
          {projects.map((project, index) => (
            <ProjectRow
              key={project._id}
              project={project}
              index={index}></ProjectRow>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}

export default ProjectTable
