import useToggleProjectStatus from "./useToggleProjectStatus"
import Toggle from "../../ui/Toggle"
import Loading from "../../ui/Loading"
import PropTypes from "prop-types"

export default function ToggleProjectStatus({ project }) {
  const { status } = project

  const { toggleProjectStatus, isUpdating } = useToggleProjectStatus()

  const toggleHandler = () => {
    const newStatus = status === "OPEN" ? "CLOSED" : "OPEN" //?Sends the changed inverse value.

    toggleProjectStatus({
      id: project._id,
      data: { status: newStatus },
    })
  }

  return (
    <div className="w-[5rem]">
      {isUpdating ? (
        <Loading height={20} width={50} />
      ) : (
        <Toggle
          label={status === "OPEN" ? "باز" : "بسته"}
          enabled={status === "OPEN" ? true : false}
          onChange={toggleHandler}
        />
      )}
    </div>
  )
}

ToggleProjectStatus.propTypes = {
  project: PropTypes.shape({
    status: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
}
