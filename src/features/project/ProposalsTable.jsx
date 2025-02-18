import Empty from "../../ui/Empty"
import Table from "../../ui/Table"
import ProposalRow from "./ProposalRow"
import PropTypes from "prop-types"

function ProposalsTable({ proposals }) {
  if (proposals.lengh) return <Empty />

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>فریلنسر</th>
        <th>توضیحات</th>
        <th>زمان تحویل</th>
        <th>هزینه</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>

      <Table.Body>
        {proposals.map((proposal, index) => (
          <ProposalRow
            key={proposal._id}
            proposal={proposal}
            index={index}></ProposalRow>
        ))}
      </Table.Body>
    </Table>
  )
}
export default ProposalsTable

ProposalsTable.propTypes = {
  proposals: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      // Add other properties of proposal object here if needed
    })
  ).isRequired,
}
