import http from "./httpServices"

export function changeProposalStatusApi(proposalId, data) {
  return http
    .patch(`/proposal/${proposalId}`, data)
    .then(({ data }) => data.data)
}
