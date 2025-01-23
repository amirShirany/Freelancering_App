import http from "./httpServices"

export default function getOwnerProjectsApi() {
  return http.get("/project/owner-project").then((data) => data.data)
}
