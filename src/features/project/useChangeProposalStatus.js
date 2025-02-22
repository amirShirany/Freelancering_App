import { useMutation, useQueryClient } from "@tanstack/react-query"
import { changeProposalStatusApi } from "../../services/proposalService"
import toast from "react-hot-toast"

export default function useChangeProposalStatus() {
  const queryClient = useQueryClient()

  const { isPending: isUpdating, mutate: changeProposalStatus } = useMutation({
    mutationFn: changeProposalStatusApi,
    onSuccess: (data) => {
      toast.success(data.message)

      //? جهت نمایش پروژه های جدید در لحظه بعد از ایجاد
      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      })
    },

    onError: (err) => {
      toast.error(err?.response?.data?.message || "پروژه قابل حذف نیست")
    },
  })

  return { isUpdating, changeProposalStatus }
}
