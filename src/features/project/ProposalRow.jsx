import { useState } from "react"
import PropTypes from "prop-types"
import truncateText from "../../utils/truncateText"
import Table from "../../ui/Table"
import Modal from "../../ui/Modal"
import ChangeProposalStatus from "./ChangeProposalStatus"

const statusStyle = [
  {
    label: "رد شده",
    className: "badge--danger",
  },
  {
    label: "در انتظار تایید",
    className: "badge--secondary",
  },
  {
    label: "تایید شده",
    className: "badge--success",
  },
]

const ProposalRow = ({ proposal, index }) => {
  const [open, setOpen] = useState()

  return (
    <div>
      <Table.Row>
        <td>{index + 1}</td>
        <td>{proposal.user.name}</td>
        <td>
          <p>{truncateText(proposal.description, 50)}</p>
        </td>
        <td>{proposal.duration} روز</td>
        <td>{proposal.price}</td>
        <td className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </td>
        <td>
          <Modal
            title="تغییر وضعیت درخواست"
            open={open}
            onClose={() => setOpen(false)}>
            <ChangeProposalStatus
              proposalId={proposalId}
              onClose={() => setOpen(false)}
            />
          </Modal>
          <button>تغییر وضعیت</button>
        </td>
      </Table.Row>
    </div>
  )
}

export default ProposalRow

ProposalRow.propTypes = {
  proposal: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
}
