import { useQuery } from "@tanstack/react-query"
import { getOwnerProjectsApi } from "../../services/projectService"

export default function useProject() {
  const { data, isLoading } = useQuery({
    queryKey: "owner-projects",
    queryFn: getOwnerProjectsApi,
  })
  console.log({ data }, 12121)

  const { projects } = data || {}

  return { isLoading, projects }
}
