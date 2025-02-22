import { useForm } from "react-hook-form"
import { useQueryClient } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import useChangeProposalStatus from "./useChangeProposalStatus"
import RHFSelect from "../../ui/RHFSelect"
import Loading from "../../ui/Loading"

const options = [
  { value: 0, label: "رد شده" },
  { value: 1, label: "در انتظار تایید" },
  { value: 2, label: "تایید شده" },
]

function ChangeProposalStatus({ proposalId, onClose }) {
  const { id: projectId } = useParams()
  const { register, handleSubmit } = useForm()
  const { isUpdating, changeProposalStatus } = useChangeProposalStatus()
  const queryClient = useQueryClient()

  const onSubmit = (data) => {
    changeProposalStatus(
      { id: proposalId, data },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ["project", projectId],
          })
          onClose()
        },
      }
    )
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFSelect
          name="status"
          label="تغییر وضعیت"
          register={register}
          options={options}
          required
        />

        <div className="!mt-8">
          {isUpdating ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default ChangeProposalStatus
