import { useNavigate } from "react-router-dom"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { logoutApi } from "../../services/authApi"

export default function useLogout() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const { isPending, mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      //? جهت حذف اطلاعات کاربر از حافظه موقت
      queryClient.removeQueries()
      navigate("/auth", { replace: true })
    },
  })

  return { isPending, logout }
}
