import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createProjectApi } from "../../services/projectService"
import toast from "react-hot-toast"

export default function useCreateProject() {
  const queryClient = useQueryClient()

  const { isPending: isCreating, mutate: createProject } = useMutation({
    mutationFn: createProjectApi,
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

  return { isCreating, createProject }
}
