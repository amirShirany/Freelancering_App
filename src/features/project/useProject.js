import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { getProjectApi } from "../../services/projectService"

export default function useProject() {
  const { id } = useParams()

  const { data, isLoading } = useQuery({
    queryKey: ["project", id], //?The key becomes unique with an ID and creates its own cache.
    queryFn: () => getProjectApi(id), //?If it is not written as a return function, it will re-request.
    retry: false,
  })

  const { project } = data || {}

  return { isLoading, project }
}
